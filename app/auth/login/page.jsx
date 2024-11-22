import LoginCom from "@/components/athenticated/LoginCom";
import HomePageLayout from "@/components/layout/HomePageLayout";
import React from "react";

function LoginPage() {
  return (
    <HomePageLayout>
      <div className="flex justify-center">
        <LoginCom />
      </div>
    </HomePageLayout>
  );
}

export default LoginPage;
