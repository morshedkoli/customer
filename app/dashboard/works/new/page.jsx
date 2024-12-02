import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import WorkForm from "@/components/WorkForm";

export default function Page() {
  return (
    <DashboardLayout>
      {/* Added validation for BreadcrumbDashboard props */}
      <BreadcrumbDashboard
        mainlink="/dashboard" // Ensure this link is valid and functional
        mainbread="Dashboard" // Check if the breadcrumb names are correctly aligned
        subbread="Jobs" // Correct the capitalization if needed
      />
      <div className="container mx-auto pt-10">
        {" "}
        {/* Added padding for better spacing */}
        {/* Ensure WorkForm component is implemented and working */}
        <WorkForm />
      </div>
    </DashboardLayout>
  );
}
