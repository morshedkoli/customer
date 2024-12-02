import BreadcrumbDashboard from "@/components/dashboard/BreadcrumbDeshboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ServiceForm from "@/components/ServiceForm";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page() {
  let data = await fetch(`${process.env.HOST_URL}/api/serviceName`);
  let serviceName = await data.json();
  return (
    <DashboardLayout>
      <BreadcrumbDashboard
        mainlink="/dashboard"
        mainbread="Dashboard"
        subbread="Service"
      />
      <div className="w-full flex justify-center">
        <div className="container pt-10">
          <div>
            <ServiceForm />
          </div>
          <h1>Our Service List</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {serviceName.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-bold">{service.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
