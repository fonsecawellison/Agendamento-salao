import fs from 'fs';
import path from 'path';
import { Database, Appointment, Service, User } from './types';

export type { Database, Appointment, Service, User };

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

export function readDb(): Database {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    const parsed = JSON.parse(data);
    return { banner: '', ...parsed };
  } catch (error) {
    console.error("Error reading DB:", error);
    return { users: [], services: [], appointments: [], banner: '' };
  }
}

export function writeDb(data: Database) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing DB:", error);
  }
}

export function getServices() {
  const db = readDb();
  return db.services.map(s => ({ ...s, visible: s.visible ?? true, loyaltyEnabled: s.loyaltyEnabled ?? false }));
}

export function getAppointments() {
  const db = readDb();
  // Join data for convenience
  return db.appointments.map(app => {
    const user = db.users.find(u => u.id === app.userId);
    const service = db.services.find(s => s.id === app.serviceId);
    const resolvedServiceKey = app.serviceKey ?? normalizeServiceKey(service?.name || '');
    return {
      ...app,
      userName: user?.name || 'Unknown',
      serviceName: service?.name || 'Unknown',
      serviceKey: resolvedServiceKey,
      servicePrice: app.isFree ? 0 : service?.price
    };
  });
}

function normalizeServiceKey(name: string) {
  return name.trim().toLowerCase();
}

function serviceKeyFromServiceId(db: Database, serviceId: string) {
  const service = db.services.find(s => s.id === serviceId);
  return normalizeServiceKey(service?.name || '');
}

function serviceKeyFromAppointment(db: Database, app: Appointment) {
  if (app.serviceKey) return app.serviceKey;
  const key = serviceKeyFromServiceId(db, app.serviceId);
  if (key) return key;
  return `id:${app.serviceId}`;
}

function eligibleForFree(db: Database, userId: string, serviceId: string) {
  const service = db.services.find(s => s.id === serviceId);
  if (!service) return false;
  if (!(service.loyaltyEnabled ?? false)) return false;
  const targetKey = normalizeServiceKey(service.name);
  if (!targetKey) return false;

  const now = new Date();
  
  // Agendamentos pagos válidos (apenas finalizados pelo admin)
  const paidCount = db.appointments.filter(a => {
    if (a.userId !== userId) return false;
    if (a.status !== 'completed') return false;
    if (a.isFree) return false;
    return serviceKeyFromAppointment(db, a) === targetKey;
  }).length;

  // Agendamentos grátis já utilizados ou agendados (qualquer status exceto cancelado/rejeitado)
  const freeUsedCount = db.appointments.filter(a => {
    if (a.userId !== userId) return false;
    if (a.status === 'cancelled' || a.status === 'rejected') return false;
    if (!a.isFree) return false;
    return serviceKeyFromAppointment(db, a) === targetKey;
  }).length;

  const freeAllowed = Math.floor(paidCount / 10);
  
  return freeUsedCount < freeAllowed;
}

export function createAppointment(appointment: Omit<Appointment, 'id' | 'status' | 'userName' | 'serviceName' | 'servicePrice'>) {
  const db = readDb();
  const serviceKey = appointment.serviceKey ?? serviceKeyFromServiceId(db, appointment.serviceId);
  const newAppointment: Appointment = {
    ...appointment,
    id: Math.random().toString(36).substr(2, 9),
    status: 'pending',
    serviceKey,
    isFree: eligibleForFree(db, appointment.userId, appointment.serviceId)
  };
  db.appointments.push(newAppointment);
  writeDb(db);
  return newAppointment;
}

export function createAppointments(appointments: Omit<Appointment, 'id' | 'status' | 'userName' | 'serviceName' | 'servicePrice'>[]) {
  const db = readDb();
  const newAppointments: Appointment[] = appointments.map(app => {
    const serviceKey = app.serviceKey ?? serviceKeyFromServiceId(db, app.serviceId);
    return {
      ...app,
      serviceKey,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      isFree: eligibleForFree(db, app.userId, app.serviceId)
    };
  });
  db.appointments.push(...newAppointments);
  writeDb(db);
  return newAppointments;
}

// Services CRUD
export function createService(service: Omit<Service, 'id'>) {
  const db = readDb();
  const newService: Service = {
    ...service,
    id: Math.random().toString(36).substr(2, 9),
    visible: service.visible ?? false
  };
  db.services.push(newService);
  writeDb(db);
  return newService;
}

export function updateService(id: string, updates: Partial<Omit<Service, 'id'>>) {
  const db = readDb();
  const index = db.services.findIndex(s => s.id === id);
  if (index === -1) return null;
  const filteredUpdates = Object.fromEntries(Object.entries(updates).filter(([_, v]) => v !== undefined)) as Partial<Omit<Service, 'id'>>;
  db.services[index] = { ...db.services[index], ...filteredUpdates };
  writeDb(db);
  return db.services[index];
}

export function deleteService(id: string) {
  const db = readDb();
  const index = db.services.findIndex(s => s.id === id);
  if (index === -1) return false;
  db.services.splice(index, 1);
  writeDb(db);
  return true;
}

export function updateAppointmentStatus(id: string, status: 'confirmed' | 'rejected' | 'cancelled' | 'completed', reason?: string) {
  const db = readDb();
  const index = db.appointments.findIndex(a => a.id === id);
  if (index !== -1) {
    db.appointments[index].status = status;
    if (status === 'cancelled') {
      db.appointments[index].cancelReason = reason;
      db.appointments[index].rejectReason = undefined;
    } else if (status === 'rejected') {
      db.appointments[index].rejectReason = reason;
      db.appointments[index].cancelReason = undefined;
    }
    writeDb(db);
    return db.appointments[index];
  }
  return null;
}

// Auth Helpers
export function findUserByEmail(email: string) {
  const db = readDb();
  return db.users.find(u => u.email === email);
}

export function verifyUser(email: string, code: string) {
  const db = readDb();
  const idx = db.users.findIndex(u => u.email === email);
  if (idx === -1) return false;
  const user = db.users[idx];
  const expected = user.verificationCode;
  if (!expected || expected !== code) return false;
  db.users[idx] = { ...user, isVerified: true, verificationCode: undefined };
  writeDb(db);
  return true;
}

export function createUser(user: Omit<User, 'id'>) {
  const db = readDb();
  const newUser: User = {
    ...user,
    id: Math.random().toString(36).substr(2, 9),
    isVerified: user.role === 'admin' ? true : false,
    verificationCode: user.role === 'admin' ? undefined : Math.floor(100000 + Math.random() * 900000).toString()
  };
  db.users.push(newUser);
  writeDb(db);
  return newUser;
}

// Banner
export function getBanner() {
  const db = readDb();
  // Se campanha estiver ativa, retorna banner. Se não, retorna vazio ou banner padrão?
  // O requisito diz que a campanha substitui a imagem atual.
  // Vou retornar o banner e o status da campanha.
  return { 
    banner: db.banner || '', 
    active: db.campaignActive ?? false,
    month: db.campaignMonth || '',
    target: db.campaignTarget || 5
  };
}

export function setBanner(dataUri: string) {
  const db = readDb();
  db.banner = dataUri;
  writeDb(db);
  return db.banner;
}

export function setCampaign(active: boolean, month: string, target: number, banner?: string) {
  const db = readDb();
  db.campaignActive = active;
  db.campaignMonth = month;
  db.campaignTarget = target;
  if (banner) {
    db.banner = banner;
  }
  writeDb(db);
  return { active, month, target, banner: db.banner };
}
