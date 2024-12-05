import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

export async function ServiceTable() {
  let data = await fetch(process.env.HOST_URL + "/api/service");
  let jobs = await data.json();
  return (
    <div className="p-10 border rounded-md">
      <h2 className="text-3xl font-bold mb-4">All Jobs</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Job Name</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Birth Date</TableHead>
            <TableHead>Reference</TableHead>
            <TableHead>Dalivery</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!jobs ? (
            <h1>Loading Data</h1>
          ) : (
            jobs?.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">
                  {job?.serviceName.name}
                </TableCell>
                <TableCell>{job?.name}</TableCell>
                <TableCell>{job?.status}</TableCell>
                <TableCell>
                  {format(new Date(job.birthDate), "dd-MM-yyyy")}
                </TableCell>
                <TableCell>{job?.ref}</TableCell>
                <TableCell>
                  {format(new Date(job.deliveryDate), "dd-MM-yyyy")}
                </TableCell>
                <TableCell>{job?.customer.name}</TableCell>
                <TableCell className="text-right">{job?.cost}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}
