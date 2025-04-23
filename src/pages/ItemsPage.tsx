import ItemsTable from "@/components/ItemsTable";
import useItems from "@/hooks/useItems";
import { useTranslation } from "react-i18next";

const ItemsPage = () => {
  const { t } = useTranslation();
  const { data: items, error, isLoading } = useItems();

  if (isLoading) return <div>Loading...</div>;

  if (error || !items) return <div>{error?.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{t("items")}</h1>
      <ItemsTable items={items} />{" "}
    </div>
  );
};

export default ItemsPage;
