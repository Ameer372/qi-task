import { create } from "zustand";
import axios from "axios";

type AuthState = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  login: async (email, password) => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });

      if (res.status === 200) {
        set({ isAuthenticated: true });
        return true;
      }
    } catch (error) {
      set({ isAuthenticated: false });
      console.log(error);
    }

    return false;
  },

  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
