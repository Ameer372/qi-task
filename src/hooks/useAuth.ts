import APIClient from "@/services/api-client";
import { useMutation } from "@tanstack/react-query";

interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    username: string;
  };
}

const apiClient = new APIClient<LoginResponse>("/login");

const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const data = await apiClient.login(username, password);
      localStorage.setItem("token", data!.token);
      return data;
    },
  });
};

export default useLogin;
