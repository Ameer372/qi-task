import MerchantTable from "@/components/MerchantsTable";
import { merchants } from "@/data/merchants";

const MerchantsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Merchant Management</h1>
      <MerchantTable merchants={merchants} />
    </div>
  );
};

export default MerchantsPage;
