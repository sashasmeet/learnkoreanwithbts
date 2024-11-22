export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  coins: number;
  streak: number;
  level: number;
  experience: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}