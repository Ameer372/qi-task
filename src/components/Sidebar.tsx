import { ChartColumn, Users, ClipboardList } from "lucide-react";

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
import useAuthStore from "@/stores/useAuthStore";

// Menu items.
const items = [
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
];

export function AppSidebar() {
  const { token: user, logout: storeLogout } = useAuthStore();

  const handleLogout = () => {
    storeLogout();
    logout();
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>E-commerce Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
        {user ? (
          <Button variant={"outline"} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button variant={"outline"}>Login</Button>
          </Link>
        )}
      </div>
    </Sidebar>
  );
}
