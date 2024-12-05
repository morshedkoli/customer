import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ServiceForm from "@/components/ServiceForm";
export const dynamic = "force-dynamic"; // Disables static rendering

export default function Page() {
  return (
    <DashboardLayout>
      <BreadcrumbDashboard
        mainlink="/dashboard"
        mainbread="Dashboard"
        subbread="Service"
      />
      <div className="container mx-auto">
        <ServiceForm />
      </div>
    </DashboardLayout>
  );
}
