import { Item } from "@/hooks/useItems";

import { tableHeads } from "./orderItemsHeads";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "../ui/table";

const OrderItemsTable = ({ items }: { items: Item[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const orderedItems = items.map(({ quantity, ...rest }) => rest);

  const total = orderedItems.reduce((acc, item) => {
    return acc + item.ordered_quantity! * item.price;
  }, 0);
  return (
    <div className="border rounded-3xl p-4 w-[70%]">
      <Table>
        <TableCaption>Order Items</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeads.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderedItems.map((item) => (
            <TableRow key={item.id}>
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
