import StatisticsCard from "@/components/StatisticsCard";
import { merchants } from "../data/merchants";
import { orders } from "../data/orders";
import { installments } from "../data/installments";
import OrdersTable from "@/components/OrdersTable";
import useItems from "@/hooks/useItems";

const StatisticsPage = () => {
  const installmentsTotalAmount = installments.reduce(
    (total, installment) => total + installment.amount,
    0
  );

  const { data: items, error } = useItems();

  if (!items || error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className="p-10 flex gap-6 md:flex-row flex-col">
        <StatisticsCard title="Merchants" content={merchants.length} />
        <StatisticsCard title="Items" content={items.length} />
        <StatisticsCard title="Orders" content={orders.length} />
        <StatisticsCard title="Installment" content={installmentsTotalAmount} />
      </div>
      {/*Last Orders Table*/}
      <div className="p-6 rounded-2xl">
        <OrdersTable orders={orders} />
      </div>
    </>
  );
};

export default StatisticsPage;
