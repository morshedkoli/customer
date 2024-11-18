import DashboardLayout from "@/components/layout/DashboardLayout";
import WorkForm from "@/components/WorkForm";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <WorkForm />
      </div>
    </DashboardLayout>
  );
}
