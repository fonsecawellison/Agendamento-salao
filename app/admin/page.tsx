'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Appointment } from '@/lib/types';
import { startOfWeek, addDays, format, startOfMonth, endOfMonth, endOfWeek, isSameMonth } from 'date-fns';
import Link from 'next/link';
import { CheckCircle, XCircle, Clock, Calendar, User, XSquare, Gift } from 'lucide-react';

export default function AdminPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [banner, setBanner] = useState<string>('');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelId, setCancelId] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectId, setRejectId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState('');

  const normalizeServiceKey = (name: string) => name.trim().toLowerCase();
  const appointmentServiceKey = (app: Appointment) => (app.serviceKey ?? normalizeServiceKey(app.serviceName || '')) || `id:${app.serviceId}`;
  const countCompleted = (userId: string, serviceKey: string) => {
    return appointments.filter(a => {
      if (a.userId !== userId || appointmentServiceKey(a) !== serviceKey) return false;
      if (a.status !== 'completed') return false;
      return true;
    }).length;
  };

  const fetchAppointments = () => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => {
        setAppointments(data);
      });
  };

  useEffect(() => {
    fetchAppointments();
    // Poll every 10 seconds for new requests
    const interval = setInterval(fetchAppointments, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('/api/banner')
      .then(res => res.json())
      .then(data => setBanner(data.banner || ''));
  }, []);
  const handleStatusChange = async (id: string, status: 'confirmed' | 'rejected' | 'cancelled' | 'completed') => {
    await fetch(`/api/appointments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    fetchAppointments();
  };
  const submitCancel = async () => {
    if (!cancelId) return;
    if (!cancelReason || cancelReason.trim().length < 3) {
      alert('Justificativa obrigatória (mínimo 3 caracteres).');
      return;
    }
    await fetch(`/api/appointments/${cancelId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'cancelled', reason: cancelReason.trim() })
    });
    setShowCancelModal(false);
    setCancelId(null);
    setCancelReason('');
    fetchAppointments();
  };
  const submitReject = async () => {
    if (!rejectId) return;
    if (!rejectReason || rejectReason.trim().length < 3) {
      alert('Justificativa obrigatória (mínimo 3 caracteres).');
      return;
    }
    await fetch(`/api/appointments/${rejectId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'rejected', reason: rejectReason.trim() })
    });
    setShowRejectModal(false);
    setRejectId(null);
    setRejectReason('');
    fetchAppointments();
  };

  const pending = appointments.filter(a => a.status === 'pending');
  const confirmed = appointments.filter(a => a.status === 'confirmed');
  const rejected = appointments.filter(a => a.status === 'rejected');
  const cancelled = appointments.filter(a => a.status === 'cancelled');
  const completed = appointments.filter(a => a.status === 'completed');

  const history = [...confirmed, ...rejected, ...cancelled, ...completed].sort((a, b) => 
    new Date(b.date + 'T' + b.time).getTime() - new Date(a.date + 'T' + a.time).getTime()
  );
  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const now = new Date();
  const historyRecent = [...confirmed, ...cancelled, ...completed]
    .filter(h => h.date >= todayStr || h.status === 'completed' || h.status === 'confirmed') // Show active/completed
    .sort((a, b) => {
      const ta = new Date(a.date + 'T' + a.time).getTime();
      const tb = new Date(b.date + 'T' + b.time).getTime();
      const da = Math.abs(ta - now.getTime());
      const db = Math.abs(tb - now.getTime());
      if (da !== db) return da - db;
      return ta - tb;
    });
  const needsScroll = historyRecent.length > 10;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {showCancelModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cancelar Agendamento</h3>
              <p className="text-sm text-gray-600 mb-2">Informe a justificativa:</p>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 outline-none focus:ring-2 focus:ring-pink-500"
                rows={4}
                value={cancelReason}
                onChange={e => setCancelReason(e.target.value)}
                placeholder="Ex.: Cliente solicitou mudança, indisponibilidade, etc."
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setShowCancelModal(false);
                    setCancelId(null);
                    setCancelReason('');
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Fechar
                </button>
                <button
                  onClick={submitCancel}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
        {showRejectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Recusar Solicitação</h3>
              <p className="text-sm text-gray-600 mb-2">Informe a justificativa:</p>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 outline-none focus:ring-2 focus:ring-pink-500"
                rows={4}
                value={rejectReason}
                onChange={e => setRejectReason(e.target.value)}
                placeholder="Ex.: Dados incompletos, conflito de horário, etc."
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setShowRejectModal(false);
                    setRejectId(null);
                    setRejectReason('');
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Fechar
                </button>
                <button
                  onClick={submitReject}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Recusar
                </button>
              </div>
            </div>
          </div>
        )}
        {banner && (
          <div className="bg-white shadow-sm mb-6 relative" style={{ height: 240 }}>
            <Image
              src={banner}
              alt="Banner"
              fill
              className="object-cover w-full"
            />
          </div>
        )}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Painel de Gerenciamento</h1>
            <p className="text-gray-700">Administração do Salão</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white px-4 py-2 rounded-lg shadow text-sm font-medium">
              Total de Pedidos: {appointments.length}
            </div>
            <Link href="/admin/clients" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center gap-2">
              <User className="w-4 h-4" /> Clientes
            </Link>
            <Link href="/admin/services" className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700">
              Gerenciar Serviços
            </Link>
          </div>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-pink-600" />
              Calendário do Mês
            </h2>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              {(() => {
                const now = new Date();
                const monthStart = startOfMonth(now);
                const monthEnd = endOfMonth(now);
                const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 });
                const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
                const days: Date[] = [];
                for (let d = gridStart; d <= gridEnd; d = addDays(d, 1)) {
                  days.push(new Date(d));
                }
                return (
                  <div className="grid grid-cols-7 gap-2">
                    {days.map(d => {
                      const dateStr = format(d, 'yyyy-MM-dd');
                      const dayAppointments = appointments.filter(a => a.date === dateStr && (a.status === 'pending' || a.status === 'confirmed'));
                      const isFree = dayAppointments.length === 0;
                      const outMonth = !isSameMonth(d, now);
                      const isPast = format(d, 'yyyy-MM-dd') < format(now, 'yyyy-MM-dd');
                      return (
                        <div key={dateStr} className={`relative group p-3 rounded-lg border ${isFree ? 'border-green-200 bg-green-50' : 'border-pink-200 bg-pink-50'} ${(outMonth || isPast) ? 'opacity-50' : ''} hover:shadow-sm`}>
                          <div className="flex items-baseline justify-between">
                            <div className="text-sm font-semibold text-gray-800">{format(d, 'EEE')}</div>
                            <div className="text-xs text-gray-700">{format(d, 'dd/MM')}</div>
                          </div>
                          <div className={`mt-2 inline-flex items-center px-2 py-1 rounded text-xs font-medium ${isFree ? 'bg-green-100 text-green-700' : 'bg-pink-100 text-pink-700'}`}>
                            {isFree ? 'Livre' : 'Agendado'}
                          </div>
                          {!isFree && (
                            <div className="mt-2 flex gap-1">
                              {dayAppointments.map(a => (
                                <span key={a.id} className={`w-2 h-2 rounded-full ${a.status === 'confirmed' ? 'bg-green-500' : 'bg-orange-500'}`} />
                              ))}
                            </div>
                          )}
                          {!isFree && (
                            <div className="hidden group-hover:block absolute z-20 top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-3">
                              <div className="text-xs font-semibold text-gray-700 mb-2">Agendamentos do dia</div>
                              <div className="space-y-2">
                                {dayAppointments.map(a => (
                                  <div key={a.id} className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">{a.time} • {a.serviceName}</div>
                                    <div className={`text-xs font-medium ${a.status === 'confirmed' ? 'text-green-600' : 'text-orange-600'}`}>
                                      {a.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                                    </div>
                                  </div>
                                ))}
                                {dayAppointments.map(a => (
                                  <div key={a.id + '-user'} className="text-xs text-gray-500">{a.userName}</div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Configurar Banner</h2>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-sm text-gray-700 mb-3">Tamanho recomendado: 1200x300 (desktop) e 800x200 (mobile). Formatos: JPG/PNG.</p>
              <input
                type="file"
                accept="image/*"
                className="block"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = async () => {
                    const dataUrl = reader.result as string;
                    await fetch('/api/banner', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ banner: dataUrl })
                    });
                    setBanner(dataUrl);
                    alert('Banner atualizado com sucesso!');
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </div>
          </section>
          {/* Pending Requests */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              Solicitações Pendentes ({pending.length})
            </h2>
            
            {pending.length === 0 ? (
              <div className="bg-white p-6 rounded-xl text-center text-gray-400 italic">
                Nenhuma solicitação pendente no momento.
              </div>
            ) : (
              <div className="grid gap-4">
                {pending.map(app => (
                  <div key={app.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-400 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-lg text-gray-800">{app.serviceName}</span>
                        <span className={`px-2 py-0.5 rounded text-xs ${app.isFree ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-800'}`}>
                          {app.isFree ? 'Grátis' : `R$ ${app.servicePrice}`}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {app.userName}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {app.date} às {app.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded bg-pink-50 text-pink-700">Fidelização: {countCompleted(app.userId, appointmentServiceKey(app)) % 10}/10</span>
                          {countCompleted(app.userId, appointmentServiceKey(app)) % 10 === 0 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-700">
                              <Gift className="w-3 h-3 mr-1" /> Próximo grátis
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                      <button
                        onClick={() => handleStatusChange(app.id, 'confirmed')}
                        className="flex-1 md:flex-none px-4 py-2 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg font-medium flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" /> Aceitar
                      </button>
                      <button
                        onClick={() => {
                          setRejectId(app.id);
                          setShowRejectModal(true);
                        }}
                        className="flex-1 md:flex-none px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg font-medium flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-4 h-4" /> Recusar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* History */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">Histórico Recente</h2>
              <Link href="/admin/history" className="text-sm text-pink-600 hover:text-pink-700">
                Históricos Anteriores
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className={needsScroll ? 'max-h-96 overflow-y-auto' : ''}>
                <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-700 text-sm sticky top-0 z-10">
                  <tr>
                    <th className="p-4">Serviço</th>
                    <th className="p-4">Cliente</th>
                    <th className="p-4">Data</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {historyRecent.map(app => (
                    <tr key={app.id}>
                      <td className="p-4 font-medium text-gray-800">{app.serviceName}</td>
                      <td className="p-4 text-gray-800">{app.userName}</td>
                      <td className="p-4 text-gray-800">
                        {app.date} {app.time}
                        <span className={`ml-2 px-2 py-0.5 rounded text-xs ${app.isFree ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {app.isFree ? 'Grátis' : `Fidelização: ${countCompleted(app.userId, appointmentServiceKey(app)) % 10}/10`}
                        </span>
                        {!app.isFree && countCompleted(app.userId, appointmentServiceKey(app)) % 10 === 0 && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
                            <Gift className="w-3 h-3 mr-1" /> Próximo grátis
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          app.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                          app.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                          app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-500'
                        }`}>
                          {app.status === 'confirmed' ? 'Confirmado' : 
                           app.status === 'completed' ? 'Finalizado' :
                           app.status === 'rejected' ? 'Recusado' : 'Cancelado'}
                        </span>
                      </td>
                      <td className="p-4 flex gap-2">
                        {app.status === 'confirmed' && (
                          <>
                            <button
                              onClick={() => handleStatusChange(app.id, 'completed')}
                              className="px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded text-sm font-medium flex items-center gap-1"
                            >
                              <CheckCircle className="w-4 h-4" /> Finalizar
                            </button>
                            <button
                              onClick={() => {
                                setCancelId(app.id);
                                setShowCancelModal(true);
                              }}
                              className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                            >
                              <XSquare className="w-4 h-4" /> Cancelar
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              {historyRecent.length === 0 && (
                <div className="p-6 text-center text-gray-400 italic">
                  Nenhum histórico disponível.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
