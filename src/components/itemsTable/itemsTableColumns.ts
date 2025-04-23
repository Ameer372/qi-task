import { ColumnDef } from "@tanstack/react-table";
import { Item } from "@/hooks/useItems";
import { Merchant } from "@/hooks/useMerchants";

export const getItemColumns = (merchants?: Merchant[]): ColumnDef<Item>[] => {
  if (!merchants) {
    return [
      {
        accessorKey: "id",
        header: "ID",
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
        accessorKey: "quantity",
        header: "Quantity",
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "price",
        header: "Price",
      },
    ];
  }

  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "merchant_id",
      header: "Merchant",
      cell: ({ getValue }) => {
        const merchantId = getValue<number>();
        const merchant = merchants?.find((m) => m.id === merchantId);
        return merchant?.name || "Unknown";
      },
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
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
  ];
};
