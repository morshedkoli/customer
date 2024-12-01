import {
  Calendar,
  Home,
  Inbox,
  FilePlus,
  Search,
  Settings,
  Trello,
  ListChecks,
  Users,
  Waypoints,
  UserPen,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserItem from "./athenticated/UserItem";
import LogoutButton from "./athenticated/LogoutButton";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "New Work",
    url: "/dashboard/works/new",
    icon: FilePlus,
  },
  {
    title: "Works",
    url: "/dashboard/works",
    icon: ListChecks,
  },

  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: Users,
  },

  {
    title: "Services",
    url: "/dashboard/service",
    icon: Waypoints,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Trello /> logo
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserItem />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Button variant="destructive" className="w-full" asChild>
              <SidebarMenuButton asChild>
                <a href="#">
                  <LogOut />
                  <LogoutButton />
                </a>
              </SidebarMenuButton>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
