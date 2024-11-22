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
import { format } from "date-fns";

export async function CompleteTable() {
  let data = await fetch("http://localhost:3000/api/service");
  let jobs = await data.json();
  return (
    <div className="p-10 border rounded-md">
      <h2 className="text-3xl font-bold mb-4">Complete Jobs</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Job Name</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Customer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">
                {job?.serviceName.name}
              </TableCell>
              <TableCell>{job?.name}</TableCell>
              <TableCell>{job?.status}</TableCell>
              <TableCell>{job?.customer.name}</TableCell>
            </TableRow>
          ))}
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
