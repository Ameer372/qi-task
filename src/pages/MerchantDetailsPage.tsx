import ItemsTable from "@/components/ItemsTable";
import useItems from "@/hooks/useItems";
import useMerchant from "@/hooks/useMerchant";
import { useParams } from "wouter";

const MerchantDetailsPage = () => {
  const { id } = useParams();
  const { data } = useMerchant(id!);
  const { data: items } = useItems();

  if (!data || !items) return <div>Loading...</div>;

  const merchant = data.merchant;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Merchant Details</h1>
      <div className="flex flex-col gap-2 p-4">
        <div>
          <span className="font-semibold">Name:</span> {merchant.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {merchant.email}
        </div>
        <div>
          <span className="font-semibold">Phone:</span> {merchant.phone}
        </div>
        <div>
          <span className="font-semibold">Joined:</span>{" "}
          {merchant.joined_at.split("T")[0]}
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Items</h1>
        <ItemsTable items={data.items} />
      </div>
    </div>
  );
};

export default MerchantDetailsPage;
