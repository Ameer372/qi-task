import ItemsTable from "@/components/ItemsTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useItems from "@/hooks/useItems";
import useMerchant from "@/hooks/useMerchant";
import { Calendar, MailIcon, Phone } from "lucide-react";
import { useParams } from "wouter";

const MerchantDetailsPage = () => {
  const { id } = useParams();
  const { data } = useMerchant(id!);
  const { data: items } = useItems();

  if (!data || !items) return <div>Loading...</div>;

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
      <div>
        <h1 className="text-2xl font-semibold mb-4">Items</h1>
        <ItemsTable items={data.items} />
      </div>
    </div>
  );
};

export default MerchantDetailsPage;
