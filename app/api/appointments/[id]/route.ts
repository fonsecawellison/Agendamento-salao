import { NextResponse } from 'next/server';
import { updateAppointmentStatus } from '@/lib/db';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, reason } = body as { status: 'confirmed' | 'rejected' | 'cancelled' | 'completed'; reason?: string };

    if (!['confirmed', 'rejected', 'cancelled', 'completed'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const updated = updateAppointmentStatus(id, status, reason);
    if (!updated) {
      return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
