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
import { Merchant } from "@/hooks/useMerchants";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

interface OrdersTableProps {
  orders: Order[];
  merchants?: Merchant[];
}

const OrdersTable = ({ orders, merchants }: OrdersTableProps) => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(search)
  );

  const total = orders
    .reduce((total, order) => total + Number(order.total), 0)
    .toLocaleString();

  return (
    <>
      <Input
        placeholder={t("search_orders")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-md px-4 py-2 shadow"
      />
      <div className="rounded-xl border p-4 shadow bg-background dark:bg-background">
        <Table>
          <TableCaption>{t("list_of_orders")}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>{t("order_number")}</TableHead>
              <TableHead>{t("order_date")}</TableHead>
              {merchants && <TableHead>{t("merchant")}</TableHead>}
              <TableHead>{t("amount")}</TableHead>
              <TableHead>{t("status")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="p-4 text-center text-gray-500"
                >
                  No orders found
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.created_at.split("T")[0]}</TableCell>
                  {merchants && (
                    <TableCell>
                      <Link
                        href={`/merchants/${order.merchant_id}`}
                        className={"underline hover:text-yellow-300"}
                      >
                        {
                          merchants.find(
                            (merchant) => merchant.id === order.merchant_id
                          )?.name
                        }
                      </Link>
                    </TableCell>
                  )}
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
    </>
  );
};

export default OrdersTable;
