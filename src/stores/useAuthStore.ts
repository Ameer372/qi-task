import { create } from "zustand";

interface AuthStore {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("token"),
  login: (token) => set((store) => ({ ...store, token })),
  logout: () => set((store) => ({ ...store, token: null })),
}));

export default useAuthStore;
