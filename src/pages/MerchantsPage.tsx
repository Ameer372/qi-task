import MerchantTable from "@/components/MerchantsTable";
import useMerchants from "@/hooks/useMerchants";

const MerchantsPage = () => {
  const { data: merchants, error, isLoading } = useMerchants();

  if (isLoading) return <div>Loading...</div>;

  if (error || !merchants) return <div>{error?.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Merchant Management</h1>
      <MerchantTable merchants={merchants} />
    </div>
  );
};

export default MerchantsPage;
