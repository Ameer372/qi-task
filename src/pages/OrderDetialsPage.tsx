import MerchantCard from "@/components/MerchantCard";
import OrderItemsTable from "@/components/orders/OrderItemsTable";
import OrderSummaryCard from "@/components/orders/OrderSummaryCard";

import useOrder from "@/hooks/useOrder";
import { useParams } from "wouter";

const OrderDetialsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useOrder(id!);

  if (error || !data) return <div>{error?.message}</div>;

  const order = data.order;

  const merchant = data.merchant;

  const items = data.items;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold my">Order Detials</h1>
      <p className="font-extralight">Order Number: #{order.id}</p>
      <div className="my-10">
        <MerchantCard merchant={merchant} />
        <div className="flex gap-10">
          <OrderItemsTable items={items} />
          <OrderSummaryCard order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetialsPage;
