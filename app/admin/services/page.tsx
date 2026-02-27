'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Service } from '@/lib/types';

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState<Omit<Service, 'id'>>({ name: '', price: 0, duration: 30, visible: false });
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [campaignData, setCampaignData] = useState({ active: false, month: '', banner: '', target: 5 });
  const [campaignStats, setCampaignStats] = useState<any>(null);

  useEffect(() => {
    fetch('/api/services?all=true')
      .then(res => res.json())
      .then(data => setServices(data));
      
    // Fetch stats
    fetchStats();
  }, []);

  const fetchStats = () => {
    fetch('/api/campaign/stats')
      .then(res => res.json())
      .then(data => setCampaignStats(data));
  };

  useEffect(() => {
    if (showCampaignModal) {
      fetch('/api/banner').then(r => r.json()).then(data => {
        setCampaignData({ 
          active: data.active || false, 
          month: data.month || '', 
          banner: data.banner || '',
          target: data.target || 5
        });
      });
    }
  }, [showCampaignModal]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCampaignData(prev => ({ ...prev, banner: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveCampaign = async () => {
    const res = await fetch('/api/banner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaignData)
    });
    if (res.ok) {
      alert('Campanha salva com sucesso!');
      setShowCampaignModal(false);
      fetchStats(); // Refresh stats
    } else {
      alert('Erro ao salvar campanha');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gerenciar Serviços</h1>
            <p className="text-gray-700">Crie, edite, remova e publique serviços</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowCampaignModal(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 flex items-center gap-2"
            >
              <span>📢</span> Campanha
            </button>
            <Link href="/admin" className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700">
              Voltar ao Painel
            </Link>
          </div>
        </header>

        {showCampaignModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-800">Campanha de Indicação Mensal</h2>
              
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <input 
                  type="checkbox" 
                  checked={campaignData.active} 
                  onChange={e => setCampaignData({...campaignData, active: e.target.checked})}
                  id="campaignActive"
                  className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <label htmlFor="campaignActive" className="text-gray-700 font-medium cursor-pointer">Habilitar Campanha</label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mês de Referência</label>
                <input 
                  type="month" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white"
                  value={campaignData.month}
                  onChange={e => setCampaignData({...campaignData, month: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta de Indicações (1-10)</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white"
                  value={campaignData.target}
                  onChange={e => setCampaignData({...campaignData, target: Number(e.target.value)})}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} Indicações</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card de Divulgação</label>
                <input 
                  type="file" 
                  accept="image/*"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  onChange={handleImageUpload}
                />
                <p className="text-xs text-gray-500 mt-1">A imagem substituirá o banner atual no app do cliente e admin.</p>
              </div>

              {campaignData.banner && (
                <div className="aspect-[4/1] relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                   <img src={campaignData.banner} alt="Preview" className="object-cover w-full h-full" />
                </div>
              )}

              <div className="flex justify-end gap-2 pt-4 border-t">
                <button 
                  onClick={() => setShowCampaignModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancelar
                </button>
                <button 
                  onClick={saveCampaign}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Salvar e Divulgar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Campaign Stats Section */}
        {campaignStats && campaignStats.active && (
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🏆</span> Acompanhamento da Campanha ({campaignStats.month})
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Participante</th>
                    <th className="px-4 py-3">Telefone</th>
                    <th className="px-4 py-3 text-center">Indicações</th>
                    <th className="px-4 py-3 text-center">Meta</th>
                    <th className="px-4 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {campaignStats.participants.length > 0 ? (
                    campaignStats.participants.map((p: any, idx: number) => (
                      <tr key={idx} className={p.won ? "bg-green-50" : "bg-white"}>
                        <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                        <td className="px-4 py-3 text-gray-500">{p.phone}</td>
                        <td className="px-4 py-3 text-center font-bold text-gray-900">{p.count}</td>
                        <td className="px-4 py-3 text-center text-gray-500">{p.target}</td>
                        <td className="px-4 py-3 text-center">
                          {p.won ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              🏆 Ganhador!
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Faltam {p.remaining}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                        Nenhuma indicação registrada nesta campanha ainda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <input
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white"
                placeholder="Nome"
                value={newService.name}
                onChange={e => setNewService({ ...newService, name: e.target.value })}
              />
              <input
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white"
                type="number"
                placeholder="Preço"
                value={newService.price}
                onChange={e => setNewService({ ...newService, price: Number(e.target.value) })}
              />
              <input
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white"
                type="number"
                placeholder="Duração (min)"
                value={newService.duration}
                onChange={e => setNewService({ ...newService, duration: Number(e.target.value) })}
              />
              <button
                className="bg-pink-600 text-white rounded-lg px-4 py-2 shadow hover:bg-pink-700"
                onClick={async () => {
                  const res = await fetch('/api/services', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newService)
                  });
                  if (res.ok) {
                    const created = await res.json();
                    setServices(s => [created, ...s]);
                    setNewService({ name: '', price: 0, duration: 30, visible: false });
                  } else {
                    alert('Erro ao criar serviço');
                  }
                }}
              >
                Adicionar
              </button>
            </div>
            <div className="divide-y">
              {services.map(s => (
                <div key={s.id} className="py-3 px-3 flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-sm">
                  <input
                    className="border border-gray-300 rounded-md px-2 py-2 flex-1 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white"
                    value={s.name}
                    onChange={e => setServices(prev => prev.map(x => x.id === s.id ? { ...x, name: e.target.value } : x))}
                  />
                  <input
                    className="border border-gray-300 rounded-md px-2 py-2 w-24 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white"
                    type="number"
                    value={s.price}
                    onChange={e => setServices(prev => prev.map(x => x.id === s.id ? { ...x, price: Number(e.target.value) } : x))}
                  />
                  <input
                    className="border border-gray-300 rounded-md px-2 py-2 w-28 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white"
                    type="number"
                    value={s.duration}
                    onChange={e => setServices(prev => prev.map(x => x.id === s.id ? { ...x, duration: Number(e.target.value) } : x))}
                  />
                  <label className="text-xs text-gray-800 font-medium flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={s.visible ?? false}
                      onChange={e => setServices(prev => prev.map(x => x.id === s.id ? { ...x, visible: e.target.checked } : x))}
                    />
                    Exibir para clientes
                  </label>
                  <label className="text-xs text-gray-800 font-medium flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={s.loyaltyEnabled ?? false}
                      onChange={e => setServices(prev => prev.map(x => x.id === s.id ? { ...x, loyaltyEnabled: e.target.checked } : x))}
                    />
                    Fidelizar
                  </label>
                  <button
                    className="bg-pink-600 text-white px-3 py-1 rounded text-sm shadow hover:bg-pink-700"
                    onClick={async () => {
                      const res = await fetch(`/api/services/${s.id}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: s.name, price: s.price, duration: s.duration, visible: s.visible, loyaltyEnabled: s.loyaltyEnabled })
                      });
                      if (!res.ok) alert('Erro ao salvar');
                    }}
                  >
                    Salvar
                  </button>
                  <button
                    className="border border-red-300 px-3 py-1 rounded text-sm text-red-700 hover:bg-red-50"
                    onClick={async () => {
                      if (!confirm('Remover este serviço?')) return;
                      const res = await fetch(`/api/services/${s.id}`, { method: 'DELETE' });
                      if (res.ok) {
                        setServices(prev => prev.filter(x => x.id !== s.id));
                      } else {
                        alert('Erro ao remover');
                      }
                    }}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
