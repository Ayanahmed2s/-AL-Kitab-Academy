import { create } from 'zustand';
import { AuthUser } from '@workspace/api-client-react/src/generated/api.schemas';

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const stored = localStorage.getItem('madrasa_auth');
  const initial = stored ? JSON.parse(stored) : { user: null, token: null };
  return {
    ...initial,
    login: (user, token) => {
      localStorage.setItem('madrasa_auth', JSON.stringify({ user, token }));
      set({ user, token });
    },
    logout: () => {
      localStorage.removeItem('madrasa_auth');
      set({ user: null, token: null });
    },
  };
});
