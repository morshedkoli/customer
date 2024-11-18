import DashboardLayout from "@/components/layout/DashboardLayout";
import ServiceForm from "@/components/ServiceForm";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <ServiceForm />
      </div>
    </DashboardLayout>
  );
}
