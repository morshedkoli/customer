import React from "react";
import { Card } from "../ui/card";
import SingleState from "@/components/dashboard/SinglaState";
import {
  Briefcase,
  HandCoins,
  LoaderPinwheel,
  User2Icon,
  Users,
} from "lucide-react";

function Statistics() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5 px-10">
      <SingleState
        title="Pending Jobs"
        value="100"
        icon={<LoaderPinwheel size={50} />}
        description="Total Pending works than should do immediately"
      />
      <SingleState
        title="Customer"
        value="100"
        icon={<Users size={50} />}
        description="Total Regisered Customer or Agent"
      />{" "}
      <SingleState
        title="Due"
        value="100"
        icon={<HandCoins size={50} />}
        description="Total Due From Customer"
      />{" "}
      <SingleState
        title="Complete Jobs"
        value="100"
        icon={<Briefcase size={50} />}
        description="Total Job Completed"
      />{" "}
    </div>
  );
}

export default Statistics;
