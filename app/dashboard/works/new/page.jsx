import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import WorkForm from "@/components/WorkForm";

export default function Page() {
  return (
    <DashboardLayout>
      <BreadcrumbDashboard
        mainlink="/dashboard"
        mainbread="Dashboard"
        subbread="Jobs"
      />
      <div className="container mx-auto">
        <WorkForm />
      </div>
    </DashboardLayout>
  );
}
