"use client";
import React, { useState } from "react";
import SectionTop from "../SectionTop";
import PricingCard1 from "../cards/PricingCard1";
import PricingCard2 from "../cards/PricingCard2";
import Confetti from "react-dom-confetti";
import { PLANS } from "@/config/config";

function Pricing() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleBillingInterval = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    // @ts-ignore
    setBillingInterval(e.target?.checked ? "yearly" : "monthly");
  };

  return (
    <section id="pricing" className="pt-16">
      <SectionTop />
      <div className="mt-12 flex items-center justify-center gap-2 text-sm md:mt-16">
        <p>Monthly</p>
        <input
          type="checkbox"
          className="toggle"
          onChange={handleBillingInterval}
        />
        <p>Yearly</p>
        <Confetti
          active={billingInterval === "yearly"}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <div className="mt-8">
        {/* <div className="card grid overflow-hidden border bg-base-100 sm:grid-cols-2 md:grid-cols-3">
          {PLANS.map((item, i) => (
            <PricingCard1 key={i} {...item} billingInterval={billingInterval} />
          ))}
        </div> */}

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {PLANS.map((item, i) => (
            <PricingCard2 key={i} {...item} billingInterval={billingInterval} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
