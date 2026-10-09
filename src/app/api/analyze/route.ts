import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import * as cheerio from 'cheerio';

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

async function scrapeUrl(url: string) {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'AEO-Bot/1.0' }
    });
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    $('script, style, nav, footer, header, aside, form, iframe, .ad, .sponsor').remove();
    let text = $('p, h1, h2, h3, li').map((_, el) => $(el).text()).get().join('\n');
    
    if (text.length < 200) {
      const metaDesc = $('meta[name="description"]').attr('content') || '';
      const title = $('title').text() || '';
      text = `TITULO: ${title}\nRESUMEN: ${metaDesc}`;
    }

    return text.replace(/\s+/g, ' ').trim();
  } catch (error) {
    console.error(`Error scraping URL [${url}]:`, error);
    return "";
  }
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url || !url.startsWith('http')) {
      return NextResponse.json({ error: 'SYS_ERR: Requiere una URL válida (http/https).' }, { status: 400 });
    }

    const normalizedUrl = url.trim();

    // 1. Scraping del competidor
    const competitorText = await scrapeUrl(normalizedUrl);

    if (competitorText.length < 50) {
       return NextResponse.json({ error: 'EXTRACT_ERR: No se pudo extraer el contenido de la URL proporcionada.' }, { status: 422 });
    }

    // 2. Invocación a Cloudflare Workers AI
    const systemPrompt = `
      Eres un Arquitecto SEO y AEO (Answer Engine Optimization) de clase mundial.
      Tu objetivo es auditar el artículo de un competidor y generar un esquema para un artículo SUPERIOR.
      Devuelve un JSON estrictamente estructurado así:
      {
        "missingKeywords": ["palabra 1", "palabra 2", "palabra 3", "palabra 4", "palabra 5"],
        "seoStructure": [
          { "tag": "H1", "text": "Título Clickeable y Optimizado" },
          { "tag": "H2", "text": "Subtítulo principal" },
          { "tag": "H3", "text": "Punto de apoyo" },
          { "tag": "H2", "text": "Otro subtítulo principal" }
        ],
        "aeoFaqs": [
          { "q": "Pregunta frecuente exacta que los usuarios le hacen a ChatGPT", "a": "Respuesta directa, concisa y estructurada diseñada para ser citada por Perplexity o Google AI." }
        ],
        "draftIntro": "Un párrafo de introducción magnético usando la fórmula PAS (Problema, Agitación, Solución) optimizado para retención."
      }
      Asegúrate de generar 3 a 4 'aeoFaqs'.
    `;
    const userPrompt = `
      Analiza el siguiente texto extraído del competidor y genera la estrategia para superarlo:
      URL del Competidor: ${normalizedUrl}
      Texto del Competidor: ${competitorText.substring(0, 3000)}
    `;

    const aiResponse = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct`, {
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

    // 3. (Opcional) Guardar en BD para historial. Usamos el campo topic para la url.
    const savedAnalysis = await db.analysis.upsert({
      where: { topic: normalizedUrl },
      update: {
        urls: [normalizedUrl],
        neutralityScore: 0,
        resultsJson: llmResult,
        createdAt: new Date(),
      },
      create: {
        topic: normalizedUrl, // Reutilizando la columna topic para la URL
        urls: [normalizedUrl],
        neutralityScore: 0,
        resultsJson: llmResult,
      }
    });

    return NextResponse.json({
      status: 'PROCESS_SUCCESS',
      data: savedAnalysis
    });

  } catch (error: any) {
    console.error('SYSTEM_FAULT:', error);
    return NextResponse.json({ 
      error: 'CRITICAL: Error interno del motor AEO.', 
      details: error?.message || String(error)
    }, { status: 500 });
  }
}
