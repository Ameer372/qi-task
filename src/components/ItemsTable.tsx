import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import { useItemTable } from "@/hooks/useItemTable";
import { Item } from "@/hooks/useItems";
import TableRenderer from "@/helper/TableRenderer";

const ItemsTable = ({ items }: { items: Item[] }) => {
  const table = useItemTable(items);

  return (
    <div className="rounded-xl border p-4 shadow bg-background dark:bg-background">
      <Table>
        <TableCaption>A list of items.</TableCaption>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableRenderer
          rows={table.getRowModel().rows}
          columnsLength={table.getAllColumns().length}
        />
      </Table>
    </div>
  );
};

export default ItemsTable;
