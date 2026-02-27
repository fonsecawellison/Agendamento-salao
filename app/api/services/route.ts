import { NextResponse } from 'next/server';
import { createService, getServices } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const all = searchParams.get('all') === 'true';
  const services = getServices();
  const payload = all ? services : services.filter(s => (s.visible ?? true) && s.price > 0);
  return NextResponse.json(payload);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, duration, visible } = body as { name: string; price: number; duration: number; visible?: boolean };
    if (!name || typeof price !== 'number' || typeof duration !== 'number') {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }
    const created = createService({ name, price, duration, visible: visible ?? false });
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao criar serviço' }, { status: 500 });
  }
}
