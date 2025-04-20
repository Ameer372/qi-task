import OrdersTable from "@/components/OrdersTable";
import useMerchants from "@/hooks/useMerchants";
import useOrders from "@/hooks/useOrders";

const OrdersPage = () => {
  const { data: orders, error } = useOrders();
  const { data: merchants } = useMerchants();

  if (error || !orders || !merchants) return <div>{error?.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Orders Management</h1>
      <OrdersTable orders={orders} merchants={merchants} />
    </div>
  );
};

export default OrdersPage;
