import { AppSidebar } from "../app-sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="w-full">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
