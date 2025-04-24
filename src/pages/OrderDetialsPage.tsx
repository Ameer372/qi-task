import MerchantCard from "@/components/MerchantCard";
import OrderItemsTable from "@/components/orders/OrderItemsTable";
import OrderSummaryCard from "@/components/orders/OrderSummaryCard";

import useOrder from "@/hooks/useOrder";
import { useTranslation } from "react-i18next";
import { useParams } from "wouter";

const OrderDetialsPage = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const { data, isLoading, error } = useOrder(id!);

  if (error || !data) return <div>{error?.message}</div>;

  const order = data.order;

  const merchant = data.merchant;

  const items = data.items;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-2">{t("order_details")}</h1>
      <p className="font-extralight">
        {t("order_number")}: #{order.id}
      </p>
      <p className="font-extralight">
        {t("order_date")}: {order.created_at.split("T")[0]}
      </p>
      <div className="my-6">
        <MerchantCard merchant={merchant} />
        <div className="flex gap-10">
          <OrderItemsTable items={items} />
          <OrderSummaryCard order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetialsPage;
