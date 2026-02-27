import { NextResponse } from 'next/server';
import { updateService, deleteService } from '@/lib/db';

export async function PATCH(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await _request.json();
    const { name, price, duration, visible, loyaltyEnabled } = body as { name?: string; price?: number; duration?: number; visible?: boolean; loyaltyEnabled?: boolean };
    const updated = updateService(id, { name, price, duration, visible, loyaltyEnabled });
    if (!updated) return NextResponse.json({ error: 'Serviço não encontrado' }, { status: 404 });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH /api/services/[id] error:', error);
    return NextResponse.json({ error: 'Falha ao atualizar serviço', details: String(error) }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const ok = deleteService(id);
    if (!ok) return NextResponse.json({ error: 'Serviço não encontrado' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE /api/services/[id] error:', error);
    return NextResponse.json({ error: 'Falha ao remover serviço', details: String(error) }, { status: 500 });
  }
}
