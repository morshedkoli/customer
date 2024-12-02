import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import RegisterForm from "@/components/RegisterForm";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/BrowserOnlyComponent"),
  { ssr: false }
);

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
