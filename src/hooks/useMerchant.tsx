import APIClient from "@/services/api-client";
import { Merchant } from "./useMerchants";
import { useQuery } from "@tanstack/react-query";
import { Item } from "./useItems";

interface Props {
  merchant: Merchant;
  items: Item[];
}

const apiClient = new APIClient<Props>("/merchants");
const useMerchant = (id: string) => {
  return useQuery({
    queryKey: ["merchant", id],
    queryFn: () => apiClient.getMerchant(id),
    staleTime: 60 * 60 * 24 * 1000, // 1 day
  });
};

export default useMerchant;
