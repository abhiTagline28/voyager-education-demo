import CustomerApproach from "@/component/CustomerApproach";
import HeroSection from "@/component/HeroSection";
import OurValues from "@/component/OurValues";
import OurVision from "@/component/OurVision";

export default function Home() {
  return (
    <div className=" min-h-screen  ">
      <main>
        <HeroSection />
        <OurVision />
        <CustomerApproach />
        <OurValues />
      </main>
    </div>
  );
}
