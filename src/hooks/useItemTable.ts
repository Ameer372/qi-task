import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Item } from "@/hooks/useItems";
import { getItemColumns } from "@/components/items/itemsTableColumns";
import { checkboxColumn } from "@/components/items/checkboxColumns";
import { Merchant } from "./useMerchants";

export const useItemTable = (items: Item[], merchants?: Merchant[]) => {
  const [rowSelection, setRowSelection] = useState({});
  const columns = [checkboxColumn, ...getItemColumns(merchants)];

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  return table;
};
