import { NextRequest, NextResponse } from 'next/server';

/**
 * Server-Side Gemini API Route Handler (Phase 2 Scaffold)
 * Rule: NEVER call Gemini directly from client-side code.
 * All requests route securely through this endpoint.
 */
export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server configuration: GEMINI_API_KEY is not configured.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { prompt, space, mood } = body;

    if (!prompt && !space) {
      return NextResponse.json(
        { error: 'Invalid payload: Prompt or space is required.' },
        { status: 400 }
      );
    }

    // Dynamic import to prevent client bundle leaks
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Act as senior interior architect for Interior Affairs Pakistan. Provide a curated material and architectural direction for a ${space || 'living'} space in ${mood || 'warm contemporary'} style. Brief: ${prompt || 'Turnkey interior execution'}`,
    });

    return NextResponse.json({
      success: true,
      content: response.text,
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to process AI design request.' },
      { status: 500 }
    );
  }
}
