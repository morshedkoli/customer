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

// Use a relative path for the API endpoint
async function fetchServices() {
  try {
    const response = await fetch(process.env.HOST_URL + "/api/serviceName", {});

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export default async function Page() {
  const serviceName = await fetchServices();

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
              {serviceName.length > 0 ? (
                serviceName.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-bold">{service.name}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={1} className="text-center">
                    No services available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
