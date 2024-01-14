import React from "react";
import { Tab } from "@headlessui/react";
import SectionTop from "../SectionTop";
import Card2 from "../cards/Card2";
import Card1 from "../cards/Card1";
import Tabs from "../Tabs";

function Why() {
  return (
    <section id="why" className="pt-16">
      <SectionTop />
      <div className="mt-16 grid gap-4 md:grid-cols-2 md:gap-6">
        <Tabs />
      </div>
      {/* <div className="mt-12 flex flex-wrap gap-6 md:mt-16">
        <Card1 />
        <Card1 />
        <Card1 />
      </div> */}
    </section>
  );
}

export default Why;
