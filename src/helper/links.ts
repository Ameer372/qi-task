import { ChartColumn, Users, ClipboardList, LayoutList } from "lucide-react";

// Menu links.
const links = [
  {
    title: "Statistics",
    url: "/",
    icon: ChartColumn,
  },
  {
    title: "Merchants Management",
    url: "/merchants",
    icon: Users,
  },
  {
    title: "Order Management",
    url: "/orders",
    icon: ClipboardList,
  },
  {
    title: "Items",
    url: "/items",
    icon: LayoutList,
  },
];

export { links };
