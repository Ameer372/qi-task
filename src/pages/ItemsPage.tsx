import ItemsTable from "@/components/ItemsTable";
import useItems from "@/hooks/useItems";

const ItemsPage = () => {
  const { data: items, error, isLoading } = useItems();

  if (isLoading) return <div>Loading...</div>;

  if (error || !items) return <div>{error?.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Items</h1>
      <ItemsTable items={items} />{" "}
    </div>
  );
};

export default ItemsPage;
