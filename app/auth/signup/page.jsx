import RegisterCom from "@/components/athenticated/RegisterCom";
import HomePageLayout from "@/components/layout/HomePageLayout";
import React from "react";

function SignupPage() {
  return (
    <HomePageLayout>
      <div className="flex justify-center">
        <RegisterCom />
      </div>
    </HomePageLayout>
  );
}

export default SignupPage;
