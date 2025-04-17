// src/components/MerchantTable.tsx
import { useState } from "react";

type Merchant = {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  joinedAt: string;
};

interface MerchantTableProps {
  merchants: Merchant[];
}

const MerchantTable = ({ merchants }: MerchantTableProps) => {
  const [search, setSearch] = useState("");

  const filteredMerchants = merchants.filter((merchant) =>
    merchant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search merchant by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <table className="w-full text-left border border-gray-200 rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Joined</th>
          </tr>
        </thead>
        <tbody>
          {filteredMerchants.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500">
                No merchant found with that name.
              </td>
            </tr>
          ) : (
            filteredMerchants.map((merchant) => (
              <tr key={merchant.id} className="border-t">
                <td className="p-3">{merchant.name}</td>
                <td className="p-3">{merchant.email}</td>
                <td className="p-3">{merchant.phone}</td>
                <td className="p-3">{merchant.joinedAt}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantTable;
