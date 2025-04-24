import { ColumnDef } from "@tanstack/react-table";
import { Item } from "@/hooks/useItems";
import { Merchant } from "@/hooks/useMerchants";

export const getItemColumns = (merchants?: Merchant[]): ColumnDef<Item>[] => {
  if (!merchants) {
    return [
      {
        accessorKey: "id",
        header: "id",
      },
      {
        accessorKey: "name",
        header: "name",
      },
      {
        accessorKey: "description",
        header: "description",
      },
      {
        accessorKey: "quantity",
        header: "quantity",
      },
      {
        accessorKey: "category",
        header: "category",
      },
      {
        accessorKey: "price",
        header: "price",
      },
    ];
  }

  return [
    {
      accessorKey: "id",
      header: "id",
    },
    {
      accessorKey: "merchant_id",
      header: "merchant",
      cell: ({ getValue }) => {
        const merchantId = getValue<number>();
        const merchant = merchants?.find((m) => m.id === merchantId);
        return merchant?.name || "Unknown";
      },
    },
    {
      accessorKey: "name",
      header: "name",
    },
    {
      accessorKey: "description",
      header: "description",
    },
    {
      accessorKey: "quantity",
      header: "quantity",
    },
    {
      accessorKey: "category",
      header: "category",
    },
    {
      accessorKey: "price",
      header: "price",
    },
  ];
};
