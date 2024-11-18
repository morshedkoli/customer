import { AppSidebar } from "../app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function DashboardLayout({children}) {
    return(
        <SidebarProvider>
        <AppSidebar/>
        <SidebarTrigger />

        {children}
        </SidebarProvider>
    )
}