import OrdersTable from "@/components/OrdersTable";

import { orders } from "@/data/orders";

const OrdersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Orders Management</h1>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
