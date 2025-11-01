
export enum Role {
  Admin = 'Admin',
  Preceptor = 'Preceptor',
  Student = 'Student',
  Teacher = 'Teacher',
}

export interface User {
  id: number;
  name: string;
  document: string;
  role: Role;
  course?: string; // For Student
  subjects?: string[]; // For Teacher
  email?: string;
  phone?: string;
  avatarUrl?: string;
}

export interface Attendance {
  studentId: number;
  date: string; // YYYY-MM-DD
  status: 'present' | 'absent' | 'justified' | 'late';
  courseId: number;
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string; // ISO 8601
}

export interface AppSettings {
  // maxAbsences has been moved to the Course interface
}

// New types for Teacher Module
export interface Course {
  id: number;
  name: string;
  subject: string;
  classroom: string;
  schedule: number; // Carga horaria semanal en horas
  students: number[];
  iconUrl: string;
  maxAbsences: number;
  teacherId?: number;
}

export interface Grade {
    studentId: number;
    courseId: number;
    assessments: Record<string, number | null>;
}

export interface Resource {
    id: string;
    name: string;
    type: 'folder' | 'file';
    path: string;
    children?: Resource[];
}