import { NextResponse } from 'next/server';
import { findUserByEmail, createUser } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, email, password, phone } = await request.json();
    
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return NextResponse.json({ error: 'Email já cadastrado' }, { status: 409 });
    }

    const newUser = createUser({
      name,
      email,
      password,
      phone,
      role: 'client'
    });

    if (newUser.verificationCode) {
      console.log(`[Cadastro] Código de verificação enviado (simulado):
  Email: ${newUser.email}
  Whats: ${newUser.phone ?? '-'}
  Código: ${newUser.verificationCode}`);
    }
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({ success: true, message: 'Cadastro criado. Verifique seu email/Whats para o código.', verificationCode: newUser.verificationCode });
    }
    return NextResponse.json({ success: true, message: 'Cadastro criado. Verifique seu email/Whats para o código.' });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
