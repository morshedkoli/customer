import HomePageLayout from "@/components/layout/HomePageLayout";
import { SingleSite } from "@/components/SingleSite";
import Image from "next/image";

export default function Home() {
  return (
    <HomePageLayout>
      <div className="flex justify-center">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <h2>{process.env.HOST_URL}</h2>
            <SingleSite />
            <SingleSite />
            <SingleSite />
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
}
