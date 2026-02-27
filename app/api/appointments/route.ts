import { NextResponse } from 'next/server';
import { getAppointments, createAppointment, createAppointments } from '@/lib/db';

export async function GET() {
  const appointments = getAppointments();
  return NextResponse.json(appointments);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if it's an array for bulk creation
    if (Array.isArray(body)) {
      if (body.length === 0) {
        return NextResponse.json({ error: 'Empty list' }, { status: 400 });
      }
      
      // Basic validation for array
      const isValid = body.every(item => item.userId && item.serviceId && item.date && item.time);
      if (!isValid) {
        return NextResponse.json({ error: 'Missing fields in one or more items' }, { status: 400 });
      }

      const newAppointments = createAppointments(body);
      return NextResponse.json(newAppointments);
    } 
    
    // Single creation (backward compatibility)
    else {
      const { userId, serviceId, date, time, referralPhone } = body;
      
      if (!userId || !serviceId || !date || !time) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
      }

      const newAppointment = createAppointment({ userId, serviceId, date, time, referralPhone });
      return NextResponse.json(newAppointment);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
