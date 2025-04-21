import useAuth from "@/hooks/useAuth";
import { navigate } from "wouter/use-browser-location";

const LoginPage = () => {
  const loginMutation = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    loginMutation.mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log("Logged in!", data);
          navigate("/");
        },
        onError: (error) => {
          console.error("Login failed", error);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" required />
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="off"
        required
      />
      <button type="submit">
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginPage;
