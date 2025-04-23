import StatisticsCard from "@/components/StatisticsCard";
import OrdersTable from "@/components/OrdersTable";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "wouter";
import useStatistics from "@/hooks/useStatistics";

const StatisticsPage = () => {
  const isMobile = useIsMobile();

  const { stats, merchants, orders, isLoading, hasError } = useStatistics();

  if (isLoading) return <div>Loading...</div>;
  if (hasError || !orders || !merchants) return <div>Something went wrong</div>;

  {
    /*Mobile*/
  }
  if (isMobile)
    return (
      <div className="p-6">
        <h1>Statistics</h1>
        <div className="p-6 flex gap-6 md:flex-row flex-col">
          {stats.map((stat) =>
            stat.href ? (
              <Link href={stat.href} className={"flex-1"}>
                <StatisticsCard
                  title={stat.title}
                  content={stat.count}
                  icon={
                    <stat.icon className="fill-yellow-300 dark:fill-yellow-500" />
                  }
                ></StatisticsCard>
              </Link>
            ) : (
              <StatisticsCard
                title={stat.title}
                content={stat.count}
                icon={<stat.icon />}
              ></StatisticsCard>
            )
          )}
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
        {stats.map((stat) =>
          stat.href ? (
            <Link href={stat.href} className={"flex-1"}>
              <StatisticsCard
                title={stat.title}
                content={stat.count}
                icon={
                  <stat.icon className="fill-yellow-300 dark:fill-yellow-500" />
                }
              ></StatisticsCard>
            </Link>
          ) : (
            <StatisticsCard
              title={stat.title}
              content={stat.count}
              icon={<stat.icon />}
            ></StatisticsCard>
          )
        )}
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
