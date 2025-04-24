import { Phone, MailIcon, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Merchant } from "@/hooks/useMerchants";

const MerchantCard = ({ merchant }: { merchant: Merchant }) => {
  return (
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
  );
};

export default MerchantCard;
