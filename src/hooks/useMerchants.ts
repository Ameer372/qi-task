import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Merchant {
  id: number;
  name: string;
  email: string;
  phone: string;
  joined_at: string;
}

const apiClient = new APIClient<Merchant[]>("/merchants");

const useMerchants = () => {
  return useQuery({
    queryKey: ["merchants"],
    queryFn: apiClient.getAll,
  });
};

export default useMerchants;
