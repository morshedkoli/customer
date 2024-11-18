import DashboardLayout from "@/components/layout/DashboardLayout";
import RegisterForm from "@/components/RegisterForm";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <RegisterForm />
      </div>
    </DashboardLayout>
  );
}
