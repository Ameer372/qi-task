import MerchantTable from "@/components/MerchantsTable";
import useMerchants from "@/hooks/useMerchants";
import { useTranslation } from "react-i18next";

const MerchantsPage = () => {
  const { data: merchants, error, isLoading } = useMerchants();
  const { t } = useTranslation();

  if (isLoading) return <div>Loading...</div>;

  if (error || !merchants) return <div>{error?.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        {t("merchants_management")}
      </h1>
      <MerchantTable merchants={merchants} />
    </div>
  );
};

export default MerchantsPage;
