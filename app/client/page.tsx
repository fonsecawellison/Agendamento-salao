'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { User } from '@/lib/types';
import { Service, Appointment } from '@/lib/types';
import { Calendar as CalendarIcon, Clock, ChevronLeft, Check, DollarSign, Plus, Trash2, Gift } from 'lucide-react';

type AuthMode = 'initial' | 'login' | 'register' | 'verify' | 'authenticated';
type ViewMode = 'booking' | 'my-appointments';
type CurrentUser = Omit<User, 'password'>;

interface CartItem {
  tempId: string;
  service: Service;
  date: string;
  time: string;
}

export default function ClientPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [step, setStep] = useState(1);
  const [view, setView] = useState<ViewMode>('booking');
  const [banner, setBanner] = useState<string>('');
  
  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Current Selection State
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [date, setDate] = useState('');
  const [occupiedSlots, setOccupiedSlots] = useState<string[]>([]);
  
  // Auth States
  const [authMode, setAuthMode] = useState<AuthMode>('initial');
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [devVerificationCodeHint, setDevVerificationCodeHint] = useState('');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelId, setCancelId] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState('');
  const [referralPhone, setReferralPhone] = useState('');
  
  // Campaign Stats State
  const [campaignStats, setCampaignStats] = useState<{
    active: boolean;
    count: number;
    target: number;
    won: boolean;
    remaining: number;
    month: string;
  } | null>(null);

  // Campaign Config (Public)
  const [campaignConfig, setCampaignConfig] = useState<{
    active: boolean;
    month: string;
    target: number;
  } | null>(null);
  
  // My Appointments State
  const [myAppointments, setMyAppointments] = useState<Appointment[]>([]);
  const normalizeServiceKey = (name: string) => name.trim().toLowerCase();
  const appointmentServiceKey = (app: Appointment) => (app.serviceKey ?? normalizeServiceKey(app.serviceName || '')) || `id:${app.serviceId}`;
  
  const getLoyaltyStats = (serviceKey: string) => {
    const paidCount = myAppointments.filter(a => {
      if (appointmentServiceKey(a) !== serviceKey) return false;
      if (a.status !== 'completed') return false; // Only completed by admin counts
      if (a.isFree) return false;
      return true;
    }).length;

    const freeUsedCount = myAppointments.filter(a => {
      if (appointmentServiceKey(a) !== serviceKey) return false;
      if (a.status === 'cancelled' || a.status === 'rejected') return false;
      return !!a.isFree;
    }).length;

    return { paidCount, freeUsedCount };
  };
  
  const fetchMyAppointments = useCallback(async () => {
    if (!currentUser) return;
    const res = await fetch('/api/appointments');
    const data: Appointment[] = await res.json();
    const userApps = data.filter(app => {
      const uid = (app.userId || '').toLowerCase();
      const id = (currentUser?.id || '').toLowerCase();
      const name = (currentUser?.name || '').toLowerCase();
      const email = (currentUser?.email || '').toLowerCase();
      return uid === id || uid === name || uid === email;
    });
    userApps.sort((a, b) => new Date(b.date + 'T' + b.time).getTime() - new Date(a.date + 'T' + a.time).getTime());
    setMyAppointments(userApps);
  }, [currentUser]);

  // Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [verificationCode, setVerificationCode] = useState('');

  // Load Services
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Load Banner & Campaign Config
  useEffect(() => {
    fetch('/api/banner')
      .then(res => res.json())
      .then(data => {
        if (data.active === false) {
          setBanner('');
          setCampaignConfig(null);
        } else {
          setBanner(data.banner || '');
          setCampaignConfig({
            active: data.active,
            month: data.month,
            target: data.target
          });
        }
      });
  }, []);
  // Load User from LocalStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setAuthMode('authenticated');
    }
  }, []);

  // Check Availability when date changes
  useEffect(() => {
    if (date) {
      fetch(`/api/appointments/availability?date=${date}`)
        .then(res => res.json())
        .then(data => setOccupiedSlots(data));
    } else {
      setOccupiedSlots([]);
    }
  }, [date]);

  // Load My Appointments
  useEffect(() => {
    if (view === 'my-appointments' && currentUser) {
      fetchMyAppointments();
    }
  }, [view, currentUser, fetchMyAppointments]);
  useEffect(() => {
    if (view === 'my-appointments' && currentUser) {
      const interval = setInterval(fetchMyAppointments, 30000);
      return () => clearInterval(interval);
    }
  }, [view, currentUser, fetchMyAppointments]);
  useEffect(() => {
    if (currentUser) {
      fetchMyAppointments();
    }
  }, [currentUser, fetchMyAppointments]);

  // Fetch Campaign Stats
  useEffect(() => {
    if (currentUser?.phone) {
      fetch(`/api/campaign/my-stats?phone=${currentUser.phone}`)
        .then(res => res.json())
        .then(data => {
          if (data.active) {
            setCampaignStats(data);
          } else {
            setCampaignStats(null);
          }
        })
        .catch(err => console.error('Error fetching campaign stats:', err));
    } else {
      setCampaignStats(null);
    }
  }, [currentUser]);

  const handleLoginSuccess = (user: CurrentUser) => {
    setCurrentUser(user);
    setAuthMode('authenticated');
    localStorage.setItem('currentUser', JSON.stringify(user));
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setAuthMode('initial');
    localStorage.removeItem('currentUser');
    setView('booking');
    setStep(1);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleDateSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTimeSelect = (t: string) => {
    if (!selectedService || !date) return;
    
    // Check cart for conflicts too
    const inCart = cart.some(item => item.date === date && item.time === t);
    if (inCart) {
      alert('Você já selecionou este horário no carrinho.');
      return;
    }

    const newItem: CartItem = {
      tempId: Math.random().toString(36).substr(2, 9),
      service: selectedService,
      date,
      time: t
    };
    
    setCart([...cart, newItem]);
    
    // Reset selection
    setSelectedService(null);
    setDate('');
    setStep(3);
  };

  const removeFromCart = (tempId: string) => {
    const newCart = cart.filter(item => item.tempId !== tempId);
    setCart(newCart);
    if (newCart.length === 0) {
      setStep(1);
    }
  };

  const addMoreServices = () => {
    setStep(1);
  };

  const handleAuth = async (type: 'login' | 'register' | 'verify') => {
    setLoading(true);
    setError('');
    
    try {
      const endpoint = type === 'login' ? '/api/auth/login' : type === 'register' ? '/api/auth/register' : '/api/auth/verify';
      const body = type === 'login' 
        ? { email: formData.email, password: formData.password }
        : type === 'register'
          ? { name: formData.name, email: formData.email, password: formData.password, phone: formData.phone }
          : { email: formData.email, code: verificationCode };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erro na autenticação');
      }

      if (type === 'login') {
        handleLoginSuccess(data);
      } else if (type === 'register') {
        alert('Cadastro criado. Foi enviado um código para seu Whats/Email.');
        if (data.verificationCode) {
          setDevVerificationCodeHint(String(data.verificationCode));
        }
        setAuthMode('verify');
      } else {
        alert('Conta confirmada com sucesso. Faça login.');
        setAuthMode('login');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro na autenticação');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!currentUser || cart.length === 0) return;
    
    setLoading(true);
    
    const appointments = cart.map(item => ({
      userId: currentUser.id,
      serviceId: item.service.id,
      date: item.date,
      time: item.time,
      referralPhone: referralPhone || undefined
    }));

    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointments)
    });

    if (res.ok) {
      alert('Agendamentos realizados com sucesso! Aguarde a confirmação.');
      setCart([]);
      setView('my-appointments'); // Redirect to my appointments
      setStep(1);
    } else {
      alert('Erro ao agendar.');
    }
    setLoading(false);
  };

  const handleCancelAppointment = (id: string) => {
    setCancelId(id);
    setShowCancelModal(true);
  };

  const submitCancel = async () => {
    if (!cancelId) return;
    if (!cancelReason || cancelReason.trim().length < 3) {
      alert('Justificativa obrigatória (mínimo 3 caracteres).');
      return;
    }
    const res = await fetch(`/api/appointments/${cancelId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'cancelled', reason: cancelReason.trim() })
    });
    if (res.ok) {
      const updated = myAppointments.map(app => 
        app.id === cancelId ? { ...app, status: 'cancelled' as const, cancelReason: cancelReason.trim() } : app
      );
      setMyAppointments(updated);
      setShowCancelModal(false);
      setCancelId(null);
      setCancelReason('');
    } else {
      alert('Não foi possível cancelar o agendamento.');
    }
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.service.price, 0);

  const morningSlots = ['09:00', '10:00', '11:00'];
  const afternoonSlots = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const isSlotDisabled = (t: string) => {
    return occupiedSlots.includes(t) || cart.some(item => item.date === date && item.time === t);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {banner && (
        <div className="bg-white shadow-sm relative" style={{ height: 240 }}>
          <Image 
            src={banner} 
            alt="Banner do Salão"
            fill
            className="object-cover w-full"
          />
        </div>
      )}
      
      {/* Header */}
      <div className="bg-pink-50 p-4 shadow sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {view === 'booking' && step > 1 && step !== 3 && (
            <button onClick={() => setStep(step - 1)} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          {view === 'my-appointments' && (
             <button onClick={() => setView('booking')} className="p-2 hover:bg-gray-100 rounded-full">
             <ChevronLeft className="w-6 h-6 text-gray-700" />
           </button>
          )}
          <h1 className="text-lg font-bold text-gray-800">
            {view === 'booking'
              ? (step === 1 ? 'Escolha o Serviço' : step === 2 ? 'Data e Horário' : 'Revisar e Finalizar')
              : 'Meus Agendamentos'}
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-pink-600 font-medium hidden sm:inline">
                Olá, {currentUser.name.split(' ')[0]}
              </span>
              <div className="flex rounded-lg overflow-hidden border border-pink-200">
                <button
                  onClick={() => setView('booking')}
                  className={`px-3 py-2 text-sm ${view === 'booking' ? 'bg-pink-600 text-white' : 'bg-pink-50 text-pink-700 hover:bg-pink-100'}`}
                >
                  Serviços
                </button>
                <button
                  onClick={() => setView('my-appointments')}
                  className={`px-3 py-2 text-sm ${view === 'my-appointments' ? 'bg-pink-600 text-white' : 'bg-pink-50 text-pink-700 hover:bg-pink-100'}`}
                >
                  Meus Agendamentos
                </button>
              </div>
              
              <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-red-500">
                Sair
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button 
                onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} 
                className="text-sm text-pink-600 font-bold"
              >
                Entrar
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => { setAuthMode('register'); setShowAuthModal(true); }} 
                className="text-sm text-gray-700 font-bold hover:text-pink-600"
              >
                Cadastro
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Campaign Stats Banner OR Generic Campaign Info */}
      {(campaignStats?.active || (campaignConfig?.active && !currentUser)) && (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 shadow-md">
          <div className="max-w-md mx-auto">
            {campaignStats ? (
              <>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <Gift className="w-5 h-5" />
                      Campanha de Indicações
                    </h3>
                    <p className="text-sm opacity-90">
                      {campaignStats.won 
                        ? "Parabéns! Você ganhou a campanha!" 
                        : `Indique amigos e ganhe prêmios!`}
                    </p>
                  </div>
                  <div className="text-right">
                    {campaignStats.won ? (
                      <span className="bg-white text-purple-600 px-3 py-1 rounded-full font-bold text-sm shadow animate-pulse">
                        🏆 GANHADOR
                      </span>
                    ) : (
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold">{campaignStats.count}/{campaignStats.target}</span>
                        <span className="text-xs opacity-75">Faltam {campaignStats.remaining}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Progress Bar */}
                {!campaignStats.won && (
                  <div className="w-full bg-black/20 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${Math.min(100, (campaignStats.count / campaignStats.target) * 100)}%` }}
                    />
                  </div>
                )}
                
                {/* Instructions */}
                <p className="text-xs mt-2 opacity-80 text-center">
                  Peça para seus amigos informarem seu telefone ({currentUser?.phone}) ao agendar!
                </p>
              </>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                   <h3 className="font-bold text-lg flex items-center gap-2">
                     <Gift className="w-5 h-5" />
                     Campanha de Indicações
                   </h3>
                   <p className="text-sm opacity-90">
                     Indique {campaignConfig?.target} amigos neste mês e ganhe prêmios!
                   </p>
                </div>
                <button 
                  onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg text-xs font-bold shadow hover:bg-gray-100 whitespace-nowrap ml-4"
                >
                  PARTICIPAR
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="p-4 max-w-md mx-auto space-y-6">
        {showAuthModal && !currentUser && (authMode === 'login' || authMode === 'register' || authMode === 'verify') && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {authMode === 'login' ? 'Entrar' : 'Criar Conta'}
                </h3>
                <button
                  onClick={() => { setShowAuthModal(false); setAuthMode('initial'); setError(''); }}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Fechar"
                >
                  ✕
                </button>
              </div>
              {error && (
                <div className="p-3 bg-red-100 text-red-600 text-sm rounded-lg mb-3">
                  {error}
                </div>
              )}
              {authMode === 'verify' && devVerificationCodeHint && (
                <div className="p-3 bg-yellow-100 text-yellow-700 text-sm rounded-lg mb-3">
                  Código de verificação (dev): {devVerificationCodeHint}
                </div>
              )}
              <div className="space-y-3">
                {authMode === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                )}
                {authMode === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (DDD + número)</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="11999999999"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <input 
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                {authMode === 'verify' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Código de Confirmação</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                      value={verificationCode}
                      onChange={e => setVerificationCode(e.target.value)}
                      placeholder="6 dígitos"
                    />
                  </div>
                )}
              </div>
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => handleAuth(authMode === 'login' ? 'login' : authMode === 'register' ? 'register' : 'verify')}
                  disabled={loading}
                  className="w-full py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 disabled:bg-gray-300"
                >
                  {authMode === 'login' ? 'Entrar' : authMode === 'register' ? 'Cadastrar' : 'Confirmar Código'}
                </button>
                {authMode === 'login' ? (
                  <button
                    onClick={() => setAuthMode('register')}
                    className="w-full py-2 text-sm text-gray-600 hover:text-pink-600"
                  >
                    Não tem conta? Cadastre-se
                  </button>
                ) : authMode === 'register' ? (
                  <button
                    onClick={() => setAuthMode('login')}
                    className="w-full py-2 text-sm text-gray-600 hover:text-pink-600"
                  >
                    Já tem conta? Entrar
                  </button>
                ) : (
                  <button
                    onClick={() => setAuthMode('login')}
                    className="w-full py-2 text-sm text-gray-600 hover:text-pink-600"
                  >
                    Voltar para Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        
        {view === 'booking' && (
          <>
            {/* Step 1: Services */}
            {step === 1 && (
              <div className="space-y-4">
                {services.map(service => (
                  <div 
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-pink-500 cursor-pointer transition-all flex justify-between items-center group"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-pink-600">{service.name}</h3>
                      <div className="flex items-center text-sm text-gray-700 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration} min</span>
                        {currentUser && service.loyaltyEnabled && (() => {
                          const { paidCount, freeUsedCount } = getLoyaltyStats(normalizeServiceKey(service.name));
                          
                          if (paidCount === 0 && freeUsedCount === 0) return null;

                          const freeAllowed = Math.floor(paidCount / 10);

                          if (freeUsedCount < freeAllowed) {
                            return (
                              <span className="ml-3 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-100 text-green-700">
                                <Gift className="w-3 h-3" /> Próximo grátis
                              </span>
                            );
                          }
                          const remaining = 10 - (paidCount % 10);
                          return (
                            <span className="ml-3 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-pink-50 text-pink-700">
                              <Clock className="w-3 h-3" /> Faltam {remaining} agendamentos
                            </span>
                          );
                        })()}
                      </div>
                    </div>
                    <div className="flex items-center font-bold text-pink-600">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
                
                {cart.length > 0 && (
                  <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg z-20">
                    <div className="max-w-md mx-auto flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-700">{cart.length} item(s)</span>
                        <div className="font-bold text-pink-600">Total: R$ {totalAmount.toFixed(2)}</div>
                      </div>
                      <button 
                        onClick={() => setStep(3)}
                        className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700"
                      >
                        Ver Carrinho
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Data do Agendamento</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                      onChange={handleDateSelect}
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {date && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Manhã</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {morningSlots.map(t => {
                          const disabled = isSlotDisabled(t);
                          return (
                            <button
                              key={t}
                              onClick={() => !disabled && handleTimeSelect(t)}
                              disabled={disabled}
                              className={`py-2 px-3 text-sm rounded-lg border transition-colors ${
                                disabled 
                                  ? 'bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed decoration-slice' 
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Tarde/Noite</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {afternoonSlots.map(t => {
                          const disabled = isSlotDisabled(t);
                          return (
                            <button
                              key={t}
                              onClick={() => !disabled && handleTimeSelect(t)}
                              disabled={disabled}
                              className={`py-2 px-3 text-sm rounded-lg border transition-colors ${
                                disabled 
                                  ? 'bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed' 
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Cart Review & Auth */}
            {step === 3 && (
              <div className="space-y-6">
                
                {/* Cart Items */}
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.tempId} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center relative">
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.service.name}</h4>
                        <div className="text-sm text-gray-500">
                          {item.date} às {item.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-pink-600">R$ {item.service.price.toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.tempId)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button 
                    onClick={addMoreServices}
                    className="w-full py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-xl font-semibold hover:border-pink-500 hover:text-pink-600 flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" /> Adicionar mais serviços
                  </button>

                  <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center text-lg font-bold text-gray-900">
                    <span>Total a Pagar</span>
                    <span className="text-pink-600">R$ {totalAmount.toFixed(2)}</span>
                  </div>
                </div>

                {/* Auth Flow Trigger */}
                {authMode === 'initial' && !currentUser && (
                   <div className="space-y-3">
                     <button
                       onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                       className="w-full py-4 bg-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-pink-700"
                     >
                       Identificar-se para Finalizar
                     </button>
                   </div>
                )}

                {/* Referral Code Input */}
                <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
                  <label className="block text-sm font-medium text-gray-800">
                    Indicação (Opcional)
                  </label>
                  <input
                    type="tel"
                    placeholder="Celular de quem indicou"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                    value={referralPhone}
                    onChange={e => setReferralPhone(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Informe o celular de quem te indicou para que ela ganhe pontos na campanha mensal.
                  </p>
                </div>

                {/* Final Confirmation Button */}
                {(currentUser || authMode === 'authenticated') && (
                  <button
                    onClick={handleConfirm}
                    disabled={loading}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                  >
                    {loading ? 'Processando...' : (
                      <>
                        <Check className="w-6 h-6" /> Confirmar Agendamento ({cart.length})
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* My Appointments View */}
        {view === 'my-appointments' && (
          <div className="space-y-4">
             {myAppointments.length === 0 ? (
               <div className="text-center py-10 text-gray-500">
                 Você ainda não tem agendamentos.
               </div>
             ) : (
               myAppointments.map(app => (
                <div key={app.id} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-gray-200 overflow-hidden relative">
                    <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-xl ${
                      app.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      app.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                      app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      app.status === 'cancelled' ? 'bg-gray-100 text-gray-500' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {app.status === 'confirmed' ? 'Confirmado' :
                       app.status === 'completed' ? 'Finalizado' :
                       app.status === 'rejected' ? 'Recusado' :
                       app.status === 'cancelled' ? 'Cancelado' :
                       'Pendente'}
                    </div>

                    <div className="pr-16">
                      <h4 className="font-bold text-gray-800">{app.serviceName}</h4>
                      <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" /> {app.date} 
                        <Clock className="w-4 h-4 ml-2" /> {app.time}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs ${app.isFree ? 'bg-green-100 text-green-700' : 'bg-pink-50 text-pink-700'}`}>
                          {app.isFree ? 'Grátis' : `R$ ${app.servicePrice?.toFixed(2)}`}
                        </span>
                        <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700">
                          Fidelização: {getLoyaltyStats(appointmentServiceKey(app)).paidCount % 10}/10
                        </span>
                      </div>
                      {app.status === 'cancelled' && app.cancelReason && (
                        <div className="mt-2 text-xs text-gray-500">
                          Motivo do cancelamento: {app.cancelReason}
                        </div>
                      )}
                    </div>

                    {(app.status === 'pending' || app.status === 'confirmed') && (
                      <button 
                        onClick={() => handleCancelAppointment(app.id)}
                        className="mt-4 w-full py-2 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50"
                      >
                        Cancelar Agendamento
                      </button>
                    )}
                 </div>
               ))
             )}
          </div>
        )}
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
                placeholder="Ex.: Não poderei comparecer, imprevisto, etc."
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
      </div>
    </div>
  );
}
