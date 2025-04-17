import StatisticsCard from "@/components/StatisticsCard";
import { merchants } from "../data/merchants";
import { items } from "../data/items";
import { orders } from "../data/orders";
import { installments } from "../data/installments";

const StatisticsPage = () => {
  const installmentsTotalAmount = installments.reduce(
    (total, installment) => total + installment.amount,
    0
  );

  return (
    <div className="p-10 flex gap-6 md:flex-row flex-col">
      <StatisticsCard title="Merchants" content={merchants.length} />
      <StatisticsCard title="Items" content={items.length} />
      <StatisticsCard title="Orders" content={orders.length} />
      <StatisticsCard title="Installment" content={installmentsTotalAmount} />
    </div>
  );
};

export default StatisticsPage;
