import useItems from "./useItems";
import useOrders from "./useOrders";
import useMerchants from "./useMerchants";
import useInstallments from "./useInstallments";
import { Users, ClipboardList, LayoutList, HandCoins } from "lucide-react";

const useStatistics = () => {
  const { data: items, error: itemsError } = useItems();
  const { data: orders, error: ordersError } = useOrders();
  const { data: merchants, error: merchantsError } = useMerchants();
  const { data: installments, error: installmentsError } = useInstallments();

  const hasError =
    itemsError || ordersError || merchantsError || installmentsError;

  const installmentsTotal = installments
    ? installments
        .reduce((sum, i) => sum + Number(i.amount), 0)
        .toLocaleString() + " IQD"
    : "0 IQD";

  const stats = [
    {
      title: "Merchants",
      count: merchants?.length || 0,
      icon: Users,
      href: "/merchants",
    },
    {
      title: "Items",
      count: items?.length || 0,
      icon: LayoutList,
      href: "/items",
    },
    {
      title: "Orders",
      count: orders?.length || 0,
      icon: ClipboardList,
      href: "/orders",
    },
    {
      title: "Installment",
      count: installmentsTotal,
      icon: HandCoins,
    },
  ];

  return {
    stats,
    orders,
    merchants,
    isLoading: !items || !orders || !merchants || !installments,
    hasError,
  };
};

export default useStatistics;
