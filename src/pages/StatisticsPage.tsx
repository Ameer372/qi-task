import StatisticsCard from "@/components/StatisticsCard";
import OrdersTable from "@/components/OrdersTable";
import useItems from "@/hooks/useItems";
import { useIsMobile } from "@/hooks/use-mobile";
import useOrders from "@/hooks/useOrders";
import useMerchants from "@/hooks/useMerchants";
import useInstallments from "@/hooks/useInstallments";
import { Link } from "wouter";
import { Users, ClipboardList, LayoutList, HandCoins } from "lucide-react";

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
      <div className="p-6">
        <h1>Statistics</h1>
        <div className="p-6 flex gap-6 md:flex-row flex-col">
          <Link href="/merchants">
            <StatisticsCard
              icon={<Users />}
              title="Merchants"
              content={merchants.length}
            />
          </Link>
          <StatisticsCard
            icon={<LayoutList />}
            title="Items"
            content={items.length}
          />
          <Link href="/orders">
            <StatisticsCard
              icon={<ClipboardList />}
              title="Orders"
              content={orders.length}
            />
          </Link>
          <StatisticsCard
            icon={<HandCoins />}
            title="Installment"
            content={installmentsTotalAmount}
          />
        </div>
        {/*Last Orders Table*/}
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Recent Orders</h1>
          <OrdersTable orders={orders} merchants={merchants} />
        </div>
      </div>
    );

  {
    /*Desktop*/
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Statistics</h1>
      <div className="p-6 flex gap-6 md:flex-row flex-col">
        <Link href="/merchants" className={"flex-1"}>
          <StatisticsCard
            icon={<Users className="fill-yellow-300 dark:fill-yellow-500" />}
            title="Merchants"
            content={merchants.length}
          />
        </Link>
        <Link href="/items" className={"flex-1"}>
          <StatisticsCard
            icon={
              <LayoutList className="fill-yellow-300 dark:fill-yellow-500" />
            }
            title="Items"
            content={items.length}
          />
        </Link>
        <Link href="/orders" className={"flex-1"}>
          <StatisticsCard
            icon={
              <ClipboardList className="fill-yellow-300 dark:fill-yellow-500" />
            }
            title="Orders"
            content={orders.length}
          />
        </Link>
        <StatisticsCard
          icon={<HandCoins className="fill-yellow-300 dark:fill-yellow-500" />}
          title="Installment"
          content={installmentsTotalAmount}
        />
      </div>
      {/*Last Orders Table*/}
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Recent Orders</h1>

        <div className="flex-1">
          <OrdersTable orders={orders} merchants={merchants} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
