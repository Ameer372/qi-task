import StatisticsCard from "@/components/StatisticsCard";
import OrdersTable from "@/components/OrdersTable";
import useItems from "@/hooks/useItems";
import { useIsMobile } from "@/hooks/use-mobile";
import useOrders from "@/hooks/useOrders";
import useMerchants from "@/hooks/useMerchants";
import useInstallments from "@/hooks/useInstallments";

const StatisticsPage = () => {
  const isMobile = useIsMobile();

  const { data: items, error } = useItems();

  const { data: orders } = useOrders();

  const { data: merchants } = useMerchants();

  const { data: installments } = useInstallments();

  if (!items || !merchants || !installments || !orders || error) {
    return <div>Something went wrong</div>;
  }

  console.log(installments);

  const installmentsTotalAmount =
    installments
      .reduce((total, installment) => total + Number(installment.amount), 0)
      .toLocaleString() + " IQD";

  {
    /*Mobile*/
  }
  if (isMobile)
    return (
      <>
        <div className="p-10 flex gap-6 md:flex-row flex-col">
          <StatisticsCard title="Merchants" content={merchants.length} />
          <StatisticsCard title="Items" content={items.length} />
          <StatisticsCard title="Orders" content={orders.length} />
          <StatisticsCard
            title="Installment"
            content={installmentsTotalAmount}
          />
        </div>
        {/*Last Orders Table*/}
        <div className="p-6 rounded-2xl">
          <OrdersTable orders={orders} />
        </div>
      </>
    );

  {
    /*Desktop*/
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
