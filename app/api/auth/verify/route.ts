import { NextResponse } from 'next/server';
import { findUserByEmail, verifyUser } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json() as { email?: string; code?: string };
    if (!email || !code) {
      return NextResponse.json({ error: 'Email e código são obrigatórios' }, { status: 400 });
    }
    const user = findUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }
    const ok = verifyUser(email, code);
    if (!ok) {
      return NextResponse.json({ error: 'Código inválido' }, { status: 400 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
