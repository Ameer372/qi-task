import { Order } from "@/hooks/useOrders";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";

const OrderSummaryCard = ({ order }: { order: Order }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const totalAfterDiscount = (
    order.total *
    (1 - order.discount)
  ).toLocaleString();

  return (
    <Card className={isMobile ? "w-full" : "w-[25%]"}>
      <CardHeader>
        <CardTitle className="font-semibold text-xl">
          {t("order_summary")}
        </CardTitle>
      </CardHeader>
      <CardContent className="font-bold text-2xl">
        <CardDescription className="flex flex-col gap-5">
          <p className="flex justify-between">
            {t("sub_total")}:
            <span className="text-primary">
              {Number(order.total).toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between">
            {t("discount")}:
            <span className="text-primary">{order.discount * 100}%</span>
          </p>
          <p className="flex justify-between">
            {t("total")}:
            <span className="text-primary">{totalAfterDiscount} IQD</span>
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryCard;
