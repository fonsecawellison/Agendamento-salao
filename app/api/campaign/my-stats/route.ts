import { NextRequest, NextResponse } from 'next/server';
import { readDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const phone = searchParams.get('phone');

  if (!phone) {
    return NextResponse.json({ error: 'Phone number required' }, { status: 400 });
  }

  const db = readDb();
  
  if (!db.campaignActive || !db.campaignMonth) {
    return NextResponse.json({ active: false });
  }

  const target = db.campaignTarget || 5;
  const monthPrefix = db.campaignMonth; // YYYY-MM
  const normalizedUserPhone = phone.replace(/\D/g, '');

  // Filter completed appointments in the campaign month where referralPhone matches user's phone
  const count = db.appointments.filter(app => {
    if (!app.referralPhone) return false;
    if (app.status !== 'completed') return false; // Only completed appointments count
    if (!app.date.startsWith(monthPrefix)) return false;
    
    const referralPhone = app.referralPhone.replace(/\D/g, '');
    return referralPhone === normalizedUserPhone;
  }).length;

  return NextResponse.json({
    active: true,
    month: monthPrefix,
    target,
    count,
    won: count >= target,
    remaining: Math.max(0, target - count)
  });
}
