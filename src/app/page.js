/** @format */

// import FeatureCard from "@/components/ui/FeatureCard";
import Features from "@/components/ui/Features";

import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import Workflow from "@/components/ui/Workflow";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
     {/* <FeatureCard /> */}
    </div>
  );
}
