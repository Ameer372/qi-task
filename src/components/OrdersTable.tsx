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

interface Order {
  id: string;
  createdAt: string;
  merchantId: string;
  total: number;
  status: string;
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <Table className="border ">
        <TableCaption>A list of your recent Orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className=" self-end w-[200px]">
              <Input
                placeholder="Search Orders by id..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </TableHead>
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
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>{order.merchantId}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right ">
              {filteredOrders.reduce((total, order) => total + order.total, 0)}{" "}
              IQD
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default OrdersTable;
