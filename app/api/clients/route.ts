import { NextResponse } from 'next/server';
import { readDb } from '@/lib/db';

export async function GET() {
  const db = readDb();
  const clients = db.users
    .filter(u => u.role === 'client')
    .map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      role: u.role
    }));
  
  return NextResponse.json(clients);
}
