import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import RegisterForm from "@/components/RegisterForm";

export default function Page() {
  return (
    <DashboardLayout>
      <BreadcrumbDashboard
        mainlink="/dashboard"
        mainbread="Dashboard"
        subbread="Customer"
      />
      <div className="container mx-auto">
        <RegisterForm />
      </div>
    </DashboardLayout>
  );
}
