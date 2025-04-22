import StatisticsCard from "@/components/StatisticsCard";
import OrdersTable from "@/components/OrdersTable";
import useItems from "@/hooks/useItems";
import { useIsMobile } from "@/hooks/use-mobile";
import useOrders from "@/hooks/useOrders";
import useMerchants from "@/hooks/useMerchants";
import useInstallments from "@/hooks/useInstallments";
import { Link } from "wouter";

const StatisticsPage = () => {
  const isMobile = useIsMobile();

  const { data: items, error } = useItems();

  const { data: orders } = useOrders();

  const { data: merchants } = useMerchants();

  const { data: installments } = useInstallments();

  if (!items || !merchants || !installments || !orders || error) {
    return <div>Something went wrong</div>;
  }

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
          <Link href="/merchants">
            <StatisticsCard title="Merchants" content={merchants.length} />
          </Link>
          <StatisticsCard title="Items" content={items.length} />
          <Link href="/orders">
            <StatisticsCard title="Orders" content={orders.length} />
          </Link>
          <StatisticsCard
            title="Installment"
            content={installmentsTotalAmount}
          />
        </div>
        {/*Last Orders Table*/}
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Recent Orders</h1>
          <OrdersTable orders={orders} merchants={merchants} />
        </div>
      </>
    );

  {
    /*Desktop*/
  }
  return (
    <>
      <div className="p-10 flex gap-6 md:flex-row flex-col">
        <Link href="/merchants" className={"flex-1"}>
          <StatisticsCard title="Merchants" content={merchants.length} />
        </Link>
        <Link href="/items" className={"flex-1"}>
          <StatisticsCard title="Items" content={items.length} />
        </Link>
        <Link href="/orders" className={"flex-1"}>
          <StatisticsCard title="Orders" content={orders.length} />
        </Link>
        <StatisticsCard title="Installment" content={installmentsTotalAmount} />
      </div>
      {/*Last Orders Table*/}
      <div className="p-6 ">
        <h1 className="text-2xl font-semibold mb-4">Recent Orders</h1>
        <OrdersTable orders={orders} merchants={merchants} />
      </div>
    </>
  );
};

export default StatisticsPage;
