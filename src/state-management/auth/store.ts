import { create } from 'zustand';

interface AuthStore {
  user: string;
  logIn: (username: string) => void;
  logOut: () => void;
}

const useAuthStore = create<AuthStore>(set => ({
  user: '',
  logIn: username => set(() => ({ user: username })),
  logOut: () => set(() => ({ user: '' }))
}));

export default useAuthStore;
