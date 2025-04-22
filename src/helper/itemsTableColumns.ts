// itemsTableColumns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Item } from "@/hooks/useItems";

export const itemColumns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "merchant_id",
    header: "Merchant ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => {
      const value = getValue<number>();
      return `${Number(value).toLocaleString()} IQD`;
    },
  },
];
