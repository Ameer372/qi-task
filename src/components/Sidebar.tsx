import { useQueryClient } from "@tanstack/react-query";
import { ModeToggle } from "./ModeToggle";
import { links } from "@/helper/links";
import logoYellow from "../assets/qi-logo-yellow.png";
import LangToggle from "./LangToggle";
import LogoutButton from "./LogoutButton";
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
import { useTranslation } from "react-i18next";

const AppSidebar = () => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const handleLogout = () => {
    queryClient.clear();
    logout();
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="gap-2">
            <img src={logoYellow} width={20} /> E-commerce Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <Link href={link.url}>
                      <link.icon />
                      <span>{t(link.title)}</span>
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
        <LangToggle />
        <LogoutButton onClick={handleLogout} />
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
