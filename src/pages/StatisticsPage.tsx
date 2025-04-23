import StatisticsCard from "@/components/StatisticsCard";
import OrdersTable from "@/components/OrdersTable";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "wouter";
import useStatistics from "@/hooks/useStatistics";
import { useTranslation } from "react-i18next";

const StatisticsPage = () => {
  const isMobile = useIsMobile();

  const { t } = useTranslation();

  const { stats, merchants, orders, isLoading, hasError } = useStatistics();

  if (isLoading) return <div>{t("loading")}</div>;
  if (hasError || !orders || !merchants) return <div>Something went wrong</div>;

  {
    /*Mobile*/
  }
  if (isMobile)
    return (
      <div className="p-6">
        <h1>{t("statistics")}</h1>
        <div className="p-6 flex gap-6 md:flex-row flex-col">
          {stats.map((stat) =>
            stat.href ? (
              <Link href={stat.href} key={stat.title} className={"flex-1"}>
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
                key={stat.title}
                title={stat.title}
                content={stat.count}
                icon={<stat.icon />}
              ></StatisticsCard>
            )
          )}
        </div>
        {/*Last Orders Table*/}
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">{t("recent_orders")}</h1>
          <OrdersTable orders={orders} merchants={merchants} />
        </div>
      </div>
    );

  {
    /*Desktop*/
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{t("statistics")}</h1>
      <div className="p-6 flex gap-6 md:flex-row flex-col">
        {stats.map((stat) =>
          stat.href ? (
            <Link href={stat.href} key={stat.title} className={"flex-1"}>
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
              key={stat.title}
              title={stat.title}
              content={stat.count}
              icon={<stat.icon />}
            ></StatisticsCard>
          )
        )}
      </div>
      {/*Last Orders Table*/}
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">{t("recent_orders")}</h1>
        <div className="flex-1 w-[75%]">
          <OrdersTable orders={orders} merchants={merchants} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
