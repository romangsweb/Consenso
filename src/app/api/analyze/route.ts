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
      Eres un Arquitecto SEO y AEO. Audita el texto y genera un artículo mejorado.
      REGLAS ESTRICTAS (Si las rompes el sistema falla):
      1. Devuelve ÚNICA Y EXCLUSIVAMENTE un objeto JSON válido, sin markdown ni explicaciones.
      2. DEBES SER EXTREMADAMENTE BREVE. Tienes un límite estricto de palabras.
      Formato estricto:
      {
        "missingKeywords": ["palabra 1", "palabra 2"], // MÁXIMO 3 PALABRAS CLAVE
        "seoStructure": [
          { "tag": "H1", "text": "Título Clickeable" },
          { "tag": "H2", "text": "Subtítulo principal" }
        ], // MÁXIMO 3 ELEMENTOS EN LA ESTRUCTURA
        "aeoFaqs": [
          { "q": "Pregunta corta", "a": "Respuesta directa (max 10 palabras)." }
        ], // MÁXIMO 1 FAQ
        "draftIntro": "Párrafo PAS muy breve (max 20 palabras)."
      }
    `;
    const userPrompt = `
      URL Competidor: ${normalizedUrl}
      Texto: ${competitorText.substring(0, 1500)}
    `;

    const aiResponse = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CLOUDFLARE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        max_tokens: 2048,
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
    let llmResultString = aiData?.result?.response || aiData?.result?.choices?.[0]?.message?.content;
    
    if (typeof llmResultString !== 'string') {
      throw new Error(`Unexpected LLM response format: ${JSON.stringify(aiData).substring(0, 200)}`);
    }

    // Limpiar markdown (a veces Llama envuelve en ```json ... ```)
    llmResultString = llmResultString.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    let llmResult;
    try {
      llmResult = JSON.parse(llmResultString);
    } catch(e) {
      const jsonMatch = llmResultString.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
         try {
           llmResult = JSON.parse(jsonMatch[0]);
         } catch(e2) {
           throw new Error("Invalid JSON inside regex match. Received: " + llmResultString.substring(0, 100));
         }
      } else {
         throw new Error("Invalid JSON from LLM. Received: " + llmResultString.substring(0, 100));
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
