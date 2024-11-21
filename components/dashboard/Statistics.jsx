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
    <div className=" px-20  w-full flex flex-wrap justify-between">
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
