import Image from "next/image";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero1 from "@/components/sections/Hero1";
import Hero2 from "@/components/sections/Hero2";
import Feature from "@/components/sections/Feature";
import Why from "@/components/sections/Why";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import How from "@/components/sections/How";
import GridBackground from "@/components/GridBackground";
import Testimonial1 from "@/components/sections/Testimonial1";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GridBackground />
      <div className="mx-auto max-w-7xl px-5">
        <Hero1 />
        {/* <Hero2 /> */}
        <Feature />
        <Why />
        <How />
        <Pricing />
        <FAQ />
        <Testimonial1 />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
