'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Phone, Mail, Search } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'client';
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(data => setClients(data));
  }, []);

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (client.phone && client.phone.includes(searchTerm)) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Clientes</h1>
            <p className="text-gray-700">Lista de contatos dos clientes cadastrados</p>
          </div>
          <Link href="/admin" className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700">
            Voltar ao Painel
          </Link>
        </header>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar por nome, telefone ou email..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-700 text-sm">
                <tr>
                  <th className="p-4 rounded-tl-lg">Nome</th>
                  <th className="p-4">Telefone (WhatsApp)</th>
                  <th className="p-4 rounded-tr-lg">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredClients.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-gray-500">
                      Nenhum cliente encontrado.
                    </td>
                  </tr>
                ) : (
                  filteredClients.map(client => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
                          {client.name.charAt(0).toUpperCase()}
                        </div>
                        {client.name}
                      </td>
                      <td className="p-4 text-gray-700">
                        {client.phone ? (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span>{client.phone}</span>
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm italic">Não informado</span>
                        )}
                      </td>
                      <td className="p-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {client.email}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
