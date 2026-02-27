'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Appointment } from '@/lib/types';
import { format } from 'date-fns';

export default function AdminHistoryPreviousPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then((data: Appointment[]) => setAppointments(data));
  }, []);

  const confirmed = appointments.filter(a => a.status === 'confirmed');
  const rejected = appointments.filter(a => a.status === 'rejected');
  const cancelled = appointments.filter(a => a.status === 'cancelled');
  const completed = appointments.filter(a => a.status === 'completed');
  const history = [...confirmed, ...rejected, ...cancelled, ...completed].sort((a, b) =>
    new Date(b.date + 'T' + b.time).getTime() - new Date(a.date + 'T' + a.time).getTime()
  );
  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const historyPrevious = history.filter(h => h.status === 'rejected' || h.date < todayStr);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Históricos Anteriores</h1>
          <Link href="/admin" className="text-sm text-pink-600 hover:text-pink-700">
            Voltar para Admin
          </Link>
        </header>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="p-4">Serviço</th>
                <th className="p-4">Cliente</th>
                <th className="p-4">Data</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {historyPrevious.map(app => (
                <tr key={app.id}>
                  <td className="p-4 font-medium text-gray-800">{app.serviceName}</td>
                  <td className="p-4 text-gray-800">{app.userName}</td>
                  <td className="p-4 text-gray-800">{app.date} {app.time}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
          {historyPrevious.length === 0 && (
            <div className="p-6 text-center text-gray-400 italic">
              Nenhum histórico anterior.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
