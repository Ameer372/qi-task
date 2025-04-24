import { Order } from "@/hooks/useOrders";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";

const OrderSummaryCard = ({ order }: { order: Order }) => {
  const totalAfterDiscount = (
    order.total *
    (1 - order.discount)
  ).toLocaleString();

  console.log(order.discount);
  return (
    <Card className="mb-4 w-sm">
      <CardHeader>
        <CardTitle className="font-semibold text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="font-bold text-2xl">
        <CardDescription className="flex flex-col gap-5">
          <p className="flex justify-between">
            sub total:
            <span className="text-primary">
              {Number(order.total).toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between">
            discount:
            <span className="text-primary">{order.discount * 100}%</span>
          </p>
          <p className="flex justify-between">
            total:
            <span className="text-primary">{totalAfterDiscount} IQD</span>
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryCard;
