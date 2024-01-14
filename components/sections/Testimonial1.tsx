import Image from "next/image";
import React from "react";
import SectionTop from "../SectionTop";
import TestimoialCard from "../cards/TestimoialCard";

function Testimonial1() {
  return (
    <section className="py-16">
      <SectionTop />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-6">
        <TestimoialCard />
        <TestimoialCard />
        <TestimoialCard />
        <TestimoialCard />
        <TestimoialCard />
        <TestimoialCard />
      </div>
    </section>
  );
}

export default Testimonial1;
