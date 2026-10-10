import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

// GET: Fetch all transactions
export async function GET() {
  try {
    const transactions = await db.transaction.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(transactions);
  } catch (error: any) {
    console.error('DB_FETCH_ERROR:', error);
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
  }
}

// POST: Add new transaction and auto-categorize with LLM
export async function POST(req: Request) {
  try {
    const { description, amount } = await req.json();

    if (!description || !amount) {
      return NextResponse.json({ error: 'Requiere descripción y monto.' }, { status: 400 });
    }

    const systemPrompt = `
      Eres el motor central de CASH-RADAR, un categorizador financiero automático.
      Analiza la descripción del gasto/ingreso y devuelve ÚNICAMENTE un objeto JSON válido. NO uses markdown.
      
      Reglas:
      1. Solo responde con JSON.
      2. Categorías permitidas: COMIDA, TRANSPORTE, SERVICIOS, ENTRETENIMIENTO, SALUD, COMPRAS, INGRESOS, OTROS.
      3. Type: "EXPENSE" o "INCOME".
      4. isSubscription: true (si es recurrente como Netflix, Teléfono, Gym), false si es pago único.
      
      Formato exacto:
      {
        "category": "COMIDA",
        "type": "EXPENSE",
        "isSubscription": false
      }
    `;

    const userPrompt = `Transacción a clasificar: "${description}"`;

    const aiResponse = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CLOUDFLARE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        max_tokens: 50, // Keep it super tiny to prevent cutoffs
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
           throw new Error("Invalid JSON. Fallback to OTROS.");
         }
      } else {
         // Si la IA falla totalmente por el límite, forzamos un valor por defecto para no romper el flujo
         llmResult = { category: "OTROS", type: "EXPENSE", isSubscription: false };
      }
    }

    // Asegurar valores válidos
    const finalCategory = llmResult?.category || "OTROS";
    const finalType = llmResult?.type || "EXPENSE";
    const finalSub = !!llmResult?.isSubscription;

    // Guardar en DB
    const savedTx = await db.transaction.create({
      data: {
        description: description.trim(),
        amount: parseFloat(amount),
        category: finalCategory,
        type: finalType,
        isSubscription: finalSub
      }
    });

    return NextResponse.json({
      status: 'PROCESS_SUCCESS',
      data: savedTx
    });

  } catch (error: any) {
    console.error('SYSTEM_FAULT:', error);
    return NextResponse.json({ 
      error: 'CRITICAL: Error interno del motor CASH-RADAR.', 
      details: error?.message || String(error)
    }, { status: 500 });
  }
}
