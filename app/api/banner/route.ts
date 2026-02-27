import { NextResponse } from 'next/server';
import { getBanner, setBanner, setCampaign } from '@/lib/db';

export async function GET() {
  return NextResponse.json(getBanner());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Campaign update
    if ('active' in body || 'month' in body) {
       const { active, month, target, banner } = body;
       const result = setCampaign(active, month, target || 5, banner);
       return NextResponse.json(result);
    }

    // Simple banner upload
    const { banner } = body as { banner?: string };
    if (!banner || !banner.startsWith('data:image')) {
      return NextResponse.json({ error: 'Imagem inválida' }, { status: 400 });
    }
    const saved = setBanner(banner);
    return NextResponse.json({ banner: saved });
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao salvar banner' }, { status: 500 });
  }
}
