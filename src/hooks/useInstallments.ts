import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Installment {
  id: number;
  order_id: number;
  due_date: string;
  amount: number;
  status: "pending" | "paid" | "overdue";
  created_at: string;
}

const apiClient = new APIClient<Installment[]>("/installments");

const useInstallments = () => {
  return useQuery({
    queryKey: ["installments"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 60 * 24 * 1000, // 1 day
  });
};

export default useInstallments;
