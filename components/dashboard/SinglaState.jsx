import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User2Icon } from "lucide-react";

export default function SingleState({ title, description, value, icon }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        {icon}
        <p className="font-bold text-4xl">{value}</p>
      </CardFooter>
    </Card>
  );
}
