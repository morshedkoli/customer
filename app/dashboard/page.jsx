import DashboardLayout from "@/components/layout/DashboardLayout";
import Statistics from "@/components/dashboard/Statistics";

import { JobsTable } from "@/components/dashboard/JobsTable";
import { CompleteTable } from "@/components/dashboard/CompleteTable";
import DashboardButton from "@/components/dashboard/DashboardButton";
import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
export default function Page() {
  return (
    <DashboardLayout>
      <BreadcrumbDashboard mainbread="Dashboard" subbread=" " />
      <div className="pt-10">
        <Statistics />
        <DashboardButton />
        <div className="hidden md:flex w-full">
          <div className=" md:w-2/3 p-4">
            <JobsTable />
          </div>
          <div className=" md:w-1/3 p-4">
            <CompleteTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
