
export enum Role {
  Admin = 'Admin',
  Preceptor = 'Preceptor',
  Student = 'Student',
}

export interface User {
  id: number;
  name: string;
  document: string;
  role: Role;
  course?: string;
}

export interface Attendance {
  studentId: number;
  date: string; // YYYY-MM-DD
  status: 'present' | 'absent' | 'justified';
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string; // ISO 8601
}

export interface AppSettings {
  maxAbsences: number;
}
