import DashboardLayout from "@/components/layout/DashboardLayout";
import Statistics from "@/components/dashboard/Statistics";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { JobsTable } from "@/components/dashboard/JobsTable";
export default function Page() {
  return (
    <DashboardLayout>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem> */}
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="pt-10">
        <Statistics />
        <div className="flex w-full">
          <div className="w-2/3 p-4">
            <JobsTable />
          </div>
          <div className="w-1/3 p-4">
            <JobsTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
