import OrdersTable from "@/components/orders/OrdersTable";
import { Button } from "@/components/ui/button";
import useMerchants from "@/hooks/useMerchants";
import useOrders from "@/hooks/useOrders";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const OrdersPage = () => {
  const { data: orders, error } = useOrders();
  const { data: merchants } = useMerchants();

  const { t } = useTranslation();

  if (error || !orders || !merchants) return <div>{error?.message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mb-4">
          {t("orders_management")}
        </h1>
        <Link href="/create-order">
          <Button variant={"secondary"}>Create Order</Button>
        </Link>
      </div>
      <OrdersTable orders={orders} merchants={merchants} />
    </div>
  );
};

export default OrdersPage;
