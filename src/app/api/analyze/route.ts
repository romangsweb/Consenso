import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import * as cheerio from 'cheerio';

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

async function scrapeText(url: string) {
  try {
    // Los links de Google News a menudo son redirecciones (ej. news.google.com/rss/articles/...)
    // fetch sigue las redirecciones por defecto, devolviendo la página final.
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Consenso-Bot/1.0' }
    });
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    $('script, style, nav, footer, header, aside, form, iframe, .ad, .sponsor').remove();
    const text = $('p, h1, h2, h3, h4').map((_, el) => $(el).text()).get().join('\n');
    const imageUrl = $('meta[property="og:image"]').attr('content') || $('img').first().attr('src') || '';
    
    // Devolvemos el texto, URL final y la imagen
    return { text: text.replace(/\s+/g, ' ').trim(), finalUrl: response.url, imageUrl };
  } catch (error) {
    console.error(`Error de telemetría en URL [${url}]:`, error);
    return { text: "", finalUrl: url, imageUrl: "" };
  }
}

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic || topic.trim().length < 3) {
      return NextResponse.json({ error: 'SYS_ERR: Requiere un tema de búsqueda.' }, { status: 400 });
    }

    const normalizedTopic = topic.trim().toLowerCase();

    // 1. Revisar caché en Neon por tema
    const cachedAnalysis = await db.analysis.findUnique({
      where: { topic: normalizedTopic },
    });

    if (cachedAnalysis) {
      const ONE_DAY_MS = 24 * 60 * 60 * 1000;
      if (Date.now() - cachedAnalysis.createdAt.getTime() < ONE_DAY_MS) {
        // En un caso real, podríamos re-scrapear las URLs guardadas para el front-end
        const scrapedData = await Promise.all(cachedAnalysis.urls.map(url => scrapeText(url)));
        return NextResponse.json({
          status: 'CACHED_HIT',
          data: cachedAnalysis,
          texts: scrapedData.map(d => d.text),
          images: scrapedData.map(d => d.imageUrl)
        });
      }
    }

    // 2. Buscar vía DuckDuckGo HTML Search para evitar los bloqueos de Google News
    const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent('noticias ' + normalizedTopic)}`;
    const searchRes = await fetch(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!searchRes.ok) throw new Error('No se pudo acceder al buscador.');
    
    const searchHtml = await searchRes.text();
    const $search = cheerio.load(searchHtml);
    
    // Extraer URLs de los resultados, decodificando el parámetro uddg
    const rawUrls = $search('.result__url').map((i, el) => $search(el).attr('href')).get();
    
    const urlsToScrape = rawUrls
      .map(url => {
        try {
           const urlObj = new URL(url, 'https://duckduckgo.com');
           const uddg = urlObj.searchParams.get('uddg');
           return uddg ? decodeURIComponent(uddg) : null;
        } catch(e) { return null; }
      })
      .filter(url => url && !url.includes('google.com') && !url.includes('youtube.com'))
      .slice(0, 2) as string[];

    if (urlsToScrape.length < 2) {
      return NextResponse.json({ error: 'No se encontraron suficientes noticias para comparar sobre este tema.' }, { status: 404 });
    }

    // 3. Scraping Paralelo
    const scrapedResults = await Promise.all(urlsToScrape.map(url => scrapeText(url)));
    const scrapedTexts = scrapedResults.map(r => r.text);
    const finalUrls = scrapedResults.map(r => r.finalUrl);
    const images = scrapedResults.map(r => r.imageUrl);

    if (scrapedTexts.some(text => text.length < 200)) {
       return NextResponse.json({ error: 'EXTRACT_ERR: No se pudo extraer el cuerpo de las noticias (paywall o bloqueo).' }, { status: 422 });
    }

    // 4. Invocación a Cloudflare Workers AI
    const systemPrompt = `
      Eres un analizador periodístico y editorial. Recibirás textos de artículos de noticias sobre el mismo tema.
      Debes devolver un JSON estructurado de forma estricta con este formato:
      {
        "neutralityScore": <numero_1_100>,
        "politicalLeaning": "<Izquierda | Centro-Izquierda | Centro | Centro-Derecha | Derecha>",
        "keyMentions": { "<palabra_clave_1>": <frecuencia_num>, "<palabra_clave_2>": <frecuencia_num> },
        "facts": ["hecho 1", "hecho 2"],
        "bias": {
          "url1": ["sesgo_1"],
          "url2": ["sesgo_2"]
        }
      }
      En 'keyMentions' incluye las 5 a 10 entidades o temas más mencionados. Usa las 'url1' y 'url2' literales que se proveen para el mapa de sesgos.
    `;
    const userPrompt = `
      Artículo 1 (URL: ${finalUrls[0]}): ${scrapedTexts[0].substring(0, 2000)}
      Artículo 2 (URL: ${finalUrls[1]}): ${scrapedTexts[1].substring(0, 2000)}
    `;

    const aiResponse = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3-8b-instruct`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CLOUDFLARE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });

    if (!aiResponse.ok) {
      throw new Error(`Cloudflare AI Error: ${await aiResponse.text()}`);
    }

    const aiData = await aiResponse.json();
    const llmResultString = aiData.result.response;
    
    let llmResult;
    try {
      llmResult = JSON.parse(llmResultString);
    } catch(e) {
      const jsonMatch = llmResultString.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
         llmResult = JSON.parse(jsonMatch[0]);
      } else {
         throw new Error("Invalid JSON from LLM");
      }
    }

    // Asegurarnos que las keys del LLM coincidan con las URLs reales (a veces el LLM usa "url1")
    if (llmResult.bias && llmResult.bias['url1']) {
       llmResult.bias[finalUrls[0]] = llmResult.bias['url1'];
       delete llmResult.bias['url1'];
    }
    if (llmResult.bias && llmResult.bias['url2']) {
       llmResult.bias[finalUrls[1]] = llmResult.bias['url2'];
       delete llmResult.bias['url2'];
    }

    // 5. Guardar en DB
    const savedAnalysis = await db.analysis.upsert({
      where: { topic: normalizedTopic },
      update: {
        urls: finalUrls,
        neutralityScore: llmResult.neutralityScore,
        resultsJson: llmResult,
        createdAt: new Date(),
      },
      create: {
        topic: normalizedTopic,
        urls: finalUrls,
        neutralityScore: llmResult.neutralityScore,
        resultsJson: llmResult,
      }
    });

    return NextResponse.json({
      status: 'PROCESS_SUCCESS',
      data: savedAnalysis,
      texts: scrapedTexts,
      images: images
    });

  } catch (error: any) {
    console.error('SYSTEM_FAULT:', error);
    return NextResponse.json({ 
      error: 'CRITICAL: Error interno del motor.', 
      details: error?.message || String(error)
    }, { status: 500 });
  }
}
