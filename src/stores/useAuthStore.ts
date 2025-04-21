import { create } from "zustand";

interface AuthStore {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("token"),
  login: (token) => set({ token }),
  logout: () => set({ token: null }),
}));

export default useAuthStore;
