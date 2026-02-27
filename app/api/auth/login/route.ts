import { NextResponse } from 'next/server';
import { findUserByEmail } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email e senha são obrigatórios' }, { status: 400 });
    }

    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    if ((user.role !== 'admin') && !(user.isVerified ?? true)) {
      return NextResponse.json({ error: 'Conta não confirmada. Verifique seu email/Whats.' }, { status: 403 });
    }

    // Em produção, usaríamos JWT ou Session aqui.
    // Para este MVP, retornamos o usuário básico (sem senha)
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
