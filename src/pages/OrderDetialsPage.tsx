import MerchantCard from "@/components/MerchantCard";
import OrderItemsTable from "@/components/orders/OrderItemsTable";
import OrderSummaryCard from "@/components/orders/OrderSummaryCard";
import { useIsMobile } from "@/hooks/use-mobile";

import useOrder from "@/hooks/useOrder";
import { useTranslation } from "react-i18next";
import { useParams } from "wouter";

const OrderDetialsPage = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const { id } = useParams();
  const { data, isLoading, error } = useOrder(id!);

  if (error || !data) return <div>{error?.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-2">
      <h1 className="text-3xl font-semibold mb-2">{t("order_details")}</h1>
      <p className="font-extralight">
        {t("order_number")}: #{data.order.id}
      </p>
      <p className="font-extralight">
        {t("order_date")}: {data.order.created_at.split("T")[0]}
      </p>
      <div className="my-6">
        <MerchantCard merchant={data.merchant} />
        <div className={isMobile ? "flex flex-col gap-4" : "flex gap-4"}>
          <OrderItemsTable items={data.items} />
          <OrderSummaryCard order={data.order} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetialsPage;
