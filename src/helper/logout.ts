import useAuthStore from "@/stores/useAuthStore";
import { navigate } from "wouter/use-browser-location";

const logout = () => {
  localStorage.removeItem("token");
  useAuthStore.getState().logout();

  navigate("/login");
};

export default logout;
