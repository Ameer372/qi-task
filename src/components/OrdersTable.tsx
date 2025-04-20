import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Input } from "./ui/input";
import { Order } from "@/hooks/useOrders";

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(search)
  );

  const total = orders
    .reduce((total, order) => total + Number(order.total), 0)
    .toLocaleString();

  return (
    <div className="p-4">
      <Input
        placeholder="Search Orders by id..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-md px-4 py-2 "
      />
      <Table className="border ">
        <TableCaption>A list of your recent Orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="p-4 text-center text-gray-500">
                No orders found
              </TableCell>
            </TableRow>
          ) : (
            filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.created_at.split("T")[0]}</TableCell>
                <TableCell>{order.merchant_id}</TableCell>
                <TableCell>
                  {Number(order.total).toLocaleString()} IQD
                </TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right ">{total} IQD</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default OrdersTable;
