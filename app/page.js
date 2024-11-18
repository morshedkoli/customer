import HomePageLayout from "@/components/layout/HomePageLayout";
import { SingleSite } from "@/components/SingleSite";
import Image from "next/image";

export default function Home() {
  return (
    <HomePageLayout>
      <h1>Dashboard Page</h1>
      <div className="flex flex-wrap justify-between">
        <SingleSite />
        <SingleSite />
        <SingleSite />
      </div>
    </HomePageLayout>
  );
}
