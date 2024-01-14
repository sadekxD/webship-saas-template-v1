"use client";

import { classNames } from "@/lib/utils";
import { Icons } from "../Icons";
import { getStripe } from "@/lib/stripe/client";
import { PricingCardProps } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function PricingCard2({
  name,
  slug,
  description,
  price,
  features,
  most_popular,
  billingInterval = "monthly",
}: PricingCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [plan, setPlan] = useState<string>("");
  const { data, status } = useSession();
  const user = data?.user;
  const router = useRouter();

  useEffect(() => {
    // const get
  }, []);

  const handleCheckout = () => {
    setClicked(true);
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
    fetch(
      `/api/stripe/billing?priceId=${price?.[billingInterval].priceIds["test"]}`,
      {
        method: "POST",
      },
    )
      .then(async (res) => {
        const data = await res.json();
        const { id: sessionId } = data;
        const stripe = await getStripe();
        stripe?.redirectToCheckout({ sessionId });
      })
      .catch((err) => {
        alert(err);
        setClicked(false);
      });
  };

  const manageBilling = async () => {
    setClicked(true);

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
  };

  return (
    <div
      className={classNames(
        "card card-body relative flex h-full w-full flex-col justify-between gap-8 space-y-8 border bg-base-100",
        most_popular ? "ring-2" : "",
      )}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium capitalize">{name}</h3>
            {most_popular && (
              <span className="absolute left-2/4 top-0 -translate-x-2/4 -translate-y-2/4 rounded-full bg-blue-400 px-2 text-xs/loose font-medium text-base-100">
                Most popular
              </span>
            )}
          </div>
          <p className="text-ghost text-sm md:text-base">{description}</p>
          <div>
            <span className="text-2xl font-medium">
              ${price?.[billingInterval].amount}
            </span>
            <span className="font-sm text-ghost">/month</span>
          </div>
        </div>
        <hr />
        <ul className="space-y-2">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex gap-2 text-sm">
              <Icons.check width={20} height={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {user?.plan === name?.toLowerCase() ? (
        <button
          onClick={manageBilling}
          disabled={clicked || status === "loading"}
          className="btn btn-outline flex !h-10 w-full items-center gap-2 rounded-md border"
        >
          {clicked ? <Icons.loadingSpinner /> : ""}
          <span>Manage</span>
        </button>
      ) : status === "unauthenticated" ? (
        <button
          onClick={handleCheckout}
          disabled={clicked}
          className="btn btn-outline flex !h-10 w-full items-center gap-2 rounded-md border"
        >
          {clicked ? <Icons.loadingSpinner /> : ""}
          <span>Get started</span>
        </button>
      ) : (
        <button
          onClick={handleCheckout}
          disabled={clicked}
          className="btn btn-outline flex !h-10 w-full items-center gap-2 rounded-md border"
        >
          {clicked ? <Icons.loadingSpinner /> : ""}
          <span>Upgrade</span>
        </button>
      )}
    </div>
  );
}

export default PricingCard2;
