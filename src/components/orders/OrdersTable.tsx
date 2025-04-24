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
import { useState, useMemo } from "react";
import { Input } from "../ui/input";
import { Order } from "@/hooks/useOrders";
import { Merchant } from "@/hooks/useMerchants";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowDown, ArrowUp } from "lucide-react"; // Optional icons

interface OrdersTableProps {
  orders: Order[];
  merchants?: Merchant[];
}

const OrdersTable = ({ orders, merchants }: OrdersTableProps) => {
  const [, navigate] = useLocation();
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<"id" | "created_at" | "merchant_id">(
    "id"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const { t } = useTranslation();

  const handleSort = (key: typeof sortKey) => {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredAndSortedOrders = useMemo(() => {
    return orders
      .filter((order) => order.id.toString().includes(search))
      .sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];

        if (sortOrder === "asc") return aVal > bVal ? 1 : -1;
        else return aVal < bVal ? 1 : -1;
      });
  }, [orders, search, sortKey, sortOrder]);

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
              <TableHead
                onClick={() => handleSort("id")}
                className="cursor-pointer "
              >
                <div className="flex items-center gap-2">
                  {t("order_number")}
                  {sortKey === "id" &&
                    (sortOrder === "asc" ? (
                      <ArrowUp size={14} />
                    ) : (
                      <ArrowDown size={14} />
                    ))}
                </div>
              </TableHead>
              {merchants && (
                <TableHead
                  onClick={() => handleSort("merchant_id")}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {t("merchant")}
                    {sortKey === "merchant_id" &&
                      (sortOrder === "asc" ? (
                        <ArrowUp size={14} />
                      ) : (
                        <ArrowDown size={14} />
                      ))}
                  </div>
                </TableHead>
              )}
              <TableHead
                onClick={() => handleSort("created_at")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {t("order_date")}
                  {sortKey === "created_at" &&
                    (sortOrder === "asc" ? (
                      <ArrowUp size={14} />
                    ) : (
                      <ArrowDown size={14} />
                    ))}
                </div>
              </TableHead>
              <TableHead>{t("status")}</TableHead>
              <TableHead>{t("amount")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedOrders.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="p-4 text-center text-gray-500"
                >
                  {t("no_orders_found")}
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedOrders.map((order) => (
                <TableRow
                  key={order.id}
                  onClick={() => navigate(`/orders/${order.id}`)}
                  className="cursor-pointer hover:text-[#fbbf24] transition-all duration-300 ease-in-out"
                >
                  <TableCell>{order.id}</TableCell>
                  {merchants && (
                    <TableCell>
                      {/* <Link
                        href={`/merchants/${order.merchant_id}`}
                        className={"underline hover:text-yellow-300"}
                      > */}
                      {
                        merchants.find(
                          (merchant) => merchant.id === order.merchant_id
                        )?.name
                      }
                      {/* </Link> */}
                    </TableCell>
                  )}
                  <TableCell>{order.created_at.split("T")[0]}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{Number(order.total).toLocaleString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={merchants ? 4 : 3}>{t("total")}</TableCell>
              <TableCell>{total} IQD</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default OrdersTable;
