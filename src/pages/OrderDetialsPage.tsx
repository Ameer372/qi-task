import MerchantCard from "@/components/MerchantCard";
import OrderItemsTable from "@/components/OrderItemsTable";
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
      <h1 className="text-2xl font-semibold my">Order Detials</h1>
      <p>Order Number: #{order.id}</p>
      <div className="my-10">
        <MerchantCard merchant={merchant} />
        <OrderItemsTable items={items} />
      </div>
    </div>
  );
};

export default OrderDetialsPage;
