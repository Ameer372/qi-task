import { navigate } from "wouter/use-browser-location";

const logout = () => {
  localStorage.removeItem("token");
  navigate("/login"); // or use navigation
  console.log("Logout successful");
};

export default logout;
