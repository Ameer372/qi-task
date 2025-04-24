import ItemsTable from "@/components/itemsTable/ItemsTable";
import OrdersTable from "@/components/OrdersTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useMerchant from "@/hooks/useMerchant";
import { Calendar, MailIcon, Phone } from "lucide-react";
import { useParams } from "wouter";

const MerchantDetailsPage = () => {
  const { id } = useParams();
  const { data } = useMerchant(id!);

  if (!data) return <div>Not Found 404</div>;

  const merchant = data.merchant;

  return (
    <div className="p-10">
      <Card className="mb-4 w-sm">
        <CardHeader>
          <CardTitle className="font-semibold text-2xl">
            {merchant.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="font-bold text-2xl">
          <CardDescription className="flex flex-col">
            <p className="flex gap-1 items-center">
              <Phone size={15} /> {merchant.phone}
            </p>
            <p className="flex gap-1 items-center">
              <MailIcon size={15} /> {merchant.email}
            </p>
            <p className="flex gap-1 items-center">
              <Calendar size={15} /> {merchant.joined_at.split("T")[0]}
            </p>
          </CardDescription>
        </CardContent>
      </Card>
      <div className="w-[75%]">
        <h1 className="text-2xl font-semibold my-4">Items</h1>
        <ItemsTable items={data.items} />
        <h1 className="text-2xl font-semibold my-4">Orders</h1>
        <OrdersTable orders={data.orders} />
      </div>
    </div>
  );
};

export default MerchantDetailsPage;
