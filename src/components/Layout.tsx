import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger className="md:hidden" />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
