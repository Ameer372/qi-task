import { useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { Merchant } from "@/hooks/useMerchants";
import { Input } from "./ui/input";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

interface MerchantTableProps {
  merchants: Merchant[];
}

const MerchantTable = ({ merchants }: MerchantTableProps) => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const filteredMerchants = merchants.filter((merchant) =>
    merchant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Input
        type="text"
        placeholder="Search merchant by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-md px-4 py-2 shadow"
      />
      <div className="rounded-xl border p-4 shadow bg-background dark:bg-background">
        <Table>
          <TableCaption>{t("list_of_merchants")}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>{t("name")}</TableHead>
              <TableHead>{t("email")}</TableHead>
              <TableHead>{t("phone")}</TableHead>
              <TableHead>{t("joined_at")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMerchants.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="p-4 text-center text-gray-500"
                >
                  No merchant found with that name.
                </TableCell>
              </TableRow>
            ) : (
              filteredMerchants.map((merchant) => (
                <TableRow key={merchant.id}>
                  <TableCell>
                    <Link
                      href={`/merchants/${merchant.id}`}
                      className="underline hover:text-yellow-300"
                    >
                      {merchant.name}
                    </Link>
                  </TableCell>
                  <TableCell>{merchant.email}</TableCell>
                  <TableCell>{merchant.phone}</TableCell>
                  <TableCell>{merchant.joined_at.split("T")[0]}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default MerchantTable;
