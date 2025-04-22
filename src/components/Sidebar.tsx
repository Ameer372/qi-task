import { useQueryClient } from "@tanstack/react-query";
import { ModeToggle } from "./ModeToggle";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import logout from "@/helper/logout";
import { Link } from "wouter";
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
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { links } from "@/helper/links";

export function AppSidebar() {
  const queryClient = useQueryClient();
  const handleLogout = () => {
    queryClient.clear();
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
