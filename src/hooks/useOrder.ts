import APIClient from "@/services/api-client";
import { Order } from "./useOrders";
import { useQuery } from "@tanstack/react-query";
import { Merchant } from "./useMerchants";
import { Item } from "./useItems";

interface OrderResponse {
  order: Order;
  merchant: Merchant;
  items: Item[];
}
const apiClient = new APIClient<OrderResponse>("/orders");

const useOrder = (id: string) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => apiClient.getOrder(id),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
};

export default useOrder;
