import CustomerTable from "@/components/CustomerTable";
import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <DashboardLayout>
      <BreadcrumbDashboard
        mainlink="/dashboard"
        mainbread="Dashboard"
        subbread="Customer"
      />
      <main className="max-w-4xl mx-auto mt-10">
        <Link href="/dashboard/customers/new">
          <Button variant="outline">Add New Customer</Button>
        </Link>
        <h1 className="text-3xl font-bold text-center mb-6">User Data Table</h1>
        <CustomerTable /> {/* Displays the customer data */}
      </main>
    </DashboardLayout>
  );
}
