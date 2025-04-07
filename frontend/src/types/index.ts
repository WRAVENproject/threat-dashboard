// This file defines global types for the application.

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type ThreatActor = {
  id: string;
  name: string;
  description: string;
  activityLevel: number;
  lastSeen: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
};