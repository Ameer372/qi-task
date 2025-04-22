import { ChartColumn, Users, ClipboardList, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "wouter";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import logout from "@/helper/logout";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

// Menu items.
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
    icon: ClipboardList,
  },
];

export function AppSidebar() {
  const handleLogout = () => {
    logout();
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>E-commerce Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <Link href={link.url}>
                      <link.icon />
                      <span>{link.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="p-4 flex justify-end gap-2">
        <ModeToggle />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"outline"}
                onClick={handleLogout}
                className="hover:bg-red-500 hover:text-white hover:cursor-pointer"
              >
                <LogOut />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="p-2 m-2 border border-gray shadow rounded-2xl">
              <p className="text-sm font-semibold text-gray-600">Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Sidebar>
  );
}
