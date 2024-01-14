"use client";

import { PLANS } from "@/config/config";
import { classNames } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { Icons } from "../Icons";
import { User } from "@/types";

interface SubscriptionPlanAndId {
  plan?: string;
  stripeId?: string | null;
}

function BillingForm({ plan }: SubscriptionPlanAndId) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(!isLoading);

    // Get a Stripe session URL.
    const response = await fetch("/api/users/stripe");

    if (!response?.ok) {
      return toast.error("Something went wrong.");
    }

    // Redirect to the Stripe session.
    // This could be a checkout page for initial upgrade.
    // Or portal to manage existing subscription.
    const session = await response.json();
    if (session) {
      window.location.href = session.url;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="card card-body">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Subscription Plan
          </h2>
          <p className="text-ghost max-w-lg text-base md:text-lg">
            You are currently on the <strong>{plan}</strong> plan.
          </p>
        </div>
        <div className="card">
          {PLANS.find((p) => p.name === plan)?.description}
        </div>
        <div className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
          <button
            type="submit"
            className="btn btn-primary !h-10"
            disabled={isLoading}
          >
            {isLoading && <Icons.loadingSpinner />}
            Manage Subscription
          </button>
        </div>
      </div>
    </form>
  );
}

export default BillingForm;
