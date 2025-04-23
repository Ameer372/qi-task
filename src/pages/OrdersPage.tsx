import OrdersTable from "@/components/OrdersTable";
import useMerchants from "@/hooks/useMerchants";
import useOrders from "@/hooks/useOrders";
import { useTranslation } from "react-i18next";

const OrdersPage = () => {
  const { data: orders, error } = useOrders();
  const { data: merchants } = useMerchants();

  const { t } = useTranslation();

  if (error || !orders || !merchants) return <div>{error?.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{t("orders_management")}</h1>
      <OrdersTable orders={orders} merchants={merchants} />
    </div>
  );
};

export default OrdersPage;
