import { NextResponse } from 'next/server';
import { getAppointments } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
  }

  const appointments = getAppointments();
  
  // Filter appointments for the given date that are occupied (pending or confirmed)
  const occupiedSlots = appointments
    .filter(app => 
      app.date === date && 
      (app.status === 'pending' || app.status === 'confirmed')
    )
    .map(app => app.time);

  return NextResponse.json(occupiedSlots);
}
