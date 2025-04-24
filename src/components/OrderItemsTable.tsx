import { Item } from "@/hooks/useItems";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableFooter,
} from "./ui/table";

const OrderItemsTable = ({ items }: { items: Item[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const orderedItems = items.map(({ quantity, ...rest }) => rest);

  const tableHeads = [
    "ID",
    "Name",
    "Description",
    "Category",
    "Quantity",
    "Price",
    "Total Price",
  ];

  const total = orderedItems.reduce((acc, item) => {
    return acc + item.ordered_quantity! * item.price;
  }, 0);
  return (
    <div className="border rounded-3xl p-4 w-[70%]">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeads.map((head) => (
              <TableHead>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderedItems.map((item) => (
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.ordered_quantity}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                {(item.ordered_quantity! * item.price).toLocaleString() +
                  " IQD"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>Total</TableCell>
            <TableCell>{total.toLocaleString() + " IQD"}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default OrderItemsTable;
