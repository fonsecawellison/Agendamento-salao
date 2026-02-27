import { NextResponse } from 'next/server';
import { readDb } from '@/lib/db';

export async function GET() {
  const db = readDb();
  
  if (!db.campaignActive || !db.campaignMonth) {
    return NextResponse.json({ active: false, participants: [] });
  }

  const target = db.campaignTarget || 5;
  const monthPrefix = db.campaignMonth; // YYYY-MM

  // 1. Filtrar agendamentos do mês da campanha que tenham referralPhone e status completed
  const referrals = db.appointments.filter(app => {
    if (!app.referralPhone) return false;
    if (app.status !== 'completed') return false; // Regra: apenas completados contam
    if (!app.date.startsWith(monthPrefix)) return false;
    return true;
  });

  // 2. Agrupar por referralPhone
  const counts: Record<string, number> = {};
  referrals.forEach(app => {
    // Normalizar telefone (remover espaços, traços, etc) para agrupar melhor?
    // Por enquanto vou assumir que o input é consistente ou que o usuário vai digitar igual.
    // Melhor remover tudo que não for dígito.
    const phone = app.referralPhone!.replace(/\D/g, '');
    if (!phone) return;
    counts[phone] = (counts[phone] || 0) + 1;
  });

  // 3. Mapear para usuários cadastrados (se houver)
  const participants = Object.entries(counts).map(([phone, count]) => {
    // Tentar encontrar usuário com esse telefone
    // db.users.phone pode ter formatação, então vamos normalizar também na comparação
    const user = db.users.find(u => u.phone?.replace(/\D/g, '') === phone);
    
    return {
      name: user ? user.name : `Convidado (${phone})`,
      phone: phone,
      count: count,
      target: target,
      won: count >= target,
      remaining: Math.max(0, target - count)
    };
  });

  // Ordenar: Ganhadores primeiro, depois por maior contagem
  participants.sort((a, b) => {
    if (a.won && !b.won) return -1;
    if (!a.won && b.won) return 1;
    return b.count - a.count;
  });

  return NextResponse.json({
    active: true,
    month: monthPrefix,
    target,
    participants
  });
}
