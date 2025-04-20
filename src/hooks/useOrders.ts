import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Order {
  id: number;
  merchant_id: number;
  status: "pending" | "completed";
  total: number;
  created_at: string;
}

const apiClient = new APIClient<Order[]>("/orders");

const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 60 * 1000, // 1 hour
  });
};

export default useOrders;
