import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";
import useAuthStore from "@/stores/useAuthStore";
import LoginPage from "@/pages/LoginPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { token } = useAuthStore();

  return (
    <>
      {token ? (
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger className="md:hidden" />
            {children}
          </main>
        </SidebarProvider>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
