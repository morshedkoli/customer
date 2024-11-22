import React from "react";
import { Button } from "../ui/button";
import { HandCoins, SquarePlus, UserPlus } from "lucide-react";
import Link from "next/link";

function DashboardButton() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5 px-10">
      <Button className=" p-8 font-bold  text-2xl" variant="secondary">
        <Link href="/dashboard/works/new" className="flex items-center gap-2">
          <SquarePlus /> Add New Work
        </Link>
      </Button>

      <Button className=" p-8 font-bold  text-2xl" variant="secondary">
        <Link
          href="/dashboard/customers/new"
          className="flex items-center gap-2"
        >
          <UserPlus /> Add Customer
        </Link>
      </Button>
      <Button className=" p-8 font-bold  text-2xl" variant="secondary">
        <Link href="/dashboard/service/new" className="flex items-center gap-2">
          <HandCoins /> Add Service
        </Link>
      </Button>

      <Button className=" p-8 font-bold  text-2xl" variant="secondary">
        <Link href="/dashboard/payment/new" className="flex items-center gap-2">
          <HandCoins /> Add Payment
        </Link>
      </Button>
    </div>
  );
}

export default DashboardButton;
