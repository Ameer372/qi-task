import ItemsTable from "@/components/items/ItemsTable";
import MerchantCard from "@/components/MerchantCard";
import OrdersTable from "@/components/orders/OrdersTable";
import useMerchant from "@/hooks/useMerchant";
import { useParams } from "wouter";

const MerchantDetailsPage = () => {
  const { id } = useParams();
  const { data } = useMerchant(id!);

  if (!data) return <div>Not Found 404</div>;

  const merchant = data.merchant;

  return (
    <div className="p-10">
      <MerchantCard merchant={merchant} />
      <div className="w-[75%]">
        <h1 className="text-3xl font-semibold my-4">Items</h1>
        <ItemsTable items={data.items} />
        <h1 className="text-3xl font-semibold my-4">Orders</h1>
        <OrdersTable orders={data.orders} />
      </div>
    </div>
  );
};

export default MerchantDetailsPage;
