import { ChartColumn, Users, ClipboardList, LayoutList } from "lucide-react";

// Menu links.
const links = [
  {
    title: "statistics",
    url: "/",
    icon: ChartColumn,
  },
  {
    title: "merchants_management",
    url: "/merchants",
    icon: Users,
  },
  {
    title: "orders_management",
    url: "/orders",
    icon: ClipboardList,
  },
  {
    title: "items",
    url: "/items",
    icon: LayoutList,
  },
];

export { links };
