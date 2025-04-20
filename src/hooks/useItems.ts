import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Item {
  id: number;
  merchant_id: number;
  name: string;
  description: string;
  category: string;
  price: number;
}

const apiClient = new APIClient<Item[]>("/items");

const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 60 * 1000, // 1 hour
  });
};

export default useItems;
