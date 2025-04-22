import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Item } from "@/hooks/useItems";
import { itemColumns } from "@/helper/itemsTableColumns";
import { checkboxColumn } from "@/helper/checkboxColumns";

export const useItemTable = (items: Item[]) => {
  const [rowSelection, setRowSelection] = useState({});
  const columns = [checkboxColumn, ...itemColumns];

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
