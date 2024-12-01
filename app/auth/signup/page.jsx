import RegisterCom from "@/components/athenticated/RegisterCom";
import HomePageLayout from "@/components/layout/HomePageLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

function SignupPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token");

  if (typeof token !== "undefined") {
    redirect("/dashboard");
  }
  return (
    <HomePageLayout>
      <div className="flex justify-center">
        <RegisterCom />
      </div>
    </HomePageLayout>
  );
}

export default SignupPage;
