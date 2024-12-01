import LoginCom from "@/components/athenticated/LoginCom";
import HomePageLayout from "@/components/layout/HomePageLayout";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  if (typeof token !== "undefined") {
    redirect("/dashboard");
  }

  return (
    <HomePageLayout>
      <div className="flex justify-center">
        <LoginCom />
      </div>
    </HomePageLayout>
  );
}

export default LoginPage;
