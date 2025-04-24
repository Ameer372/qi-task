import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./Sidebar";
import useAuthStore from "@/stores/useAuthStore";
import LoginPage from "@/pages/LoginPage";
import logo from "../assets/qi-logo.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { token } = useAuthStore();

  return (
    <>
      {token ? (
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full p-6">
            <SidebarTrigger className="md:hidden" />
            <div className="background dark:opacity-100">
              <img src={logo} />
            </div>
            {children}
          </main>
        </SidebarProvider>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
