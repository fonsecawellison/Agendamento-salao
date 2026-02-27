export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'admin' | 'client';
  phone?: string;
  isVerified?: boolean;
  verificationCode?: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // minutes
  visible?: boolean;
  loyaltyEnabled?: boolean;
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  serviceKey?: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  status: 'pending' | 'confirmed' | 'rejected' | 'cancelled' | 'completed';
  userName?: string; // Helper for display
  serviceName?: string; // Helper for display
  servicePrice?: number;
  cancelReason?: string;
  rejectReason?: string;
  isFree?: boolean;
  referralPhone?: string;
}

export interface Database {
  users: User[];
  services: Service[];
  appointments: Appointment[];
  banner?: string;
  campaignActive?: boolean;
  campaignMonth?: string; // YYYY-MM
  campaignTarget?: number;
}
