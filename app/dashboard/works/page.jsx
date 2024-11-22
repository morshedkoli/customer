import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import { ServiceTable } from "@/components/dashboard/ServiceTable";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout>
      <BreadcrumbDashboard
        mainlink="/dashboard"
        mainbread="Dashboard"
        subbread="Jobs"
      />
      <ServiceTable />
    </DashboardLayout>
  );
}
