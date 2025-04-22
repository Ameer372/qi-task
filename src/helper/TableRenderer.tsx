import { flexRender, Row, Cell } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Item } from "@/hooks/useItems";

type Props = {
  rows: Row<Item>[];
  columnsLength: number;
};

const TableRenderer = ({ rows, columnsLength }: Props) => {
  if (!rows.length) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columnsLength} className="text-center">
            No items found.
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows.map((row: Row<Item>) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell: Cell<Item, unknown>) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableRenderer;
