import APIClient from "@/services/api-client";
import { Order } from "./useOrders";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Order>("/orders");

const useOrder = (id: string) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => apiClient.getOrder(id),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
};

export default useOrder;
