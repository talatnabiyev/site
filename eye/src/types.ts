export interface EyeDisease {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  treatment: string;
  icon: string;
}

export interface Doctor {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  education: string[];
  image: string;
}

export interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}
