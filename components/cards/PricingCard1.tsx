import { PricingCardProps } from "@/types";
import { Icons } from "../Icons";
import { getStripe } from "@/lib/stripe/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function PricingCard1({
  name,
  slug,
  description,
  price,
  features,
  most_popular,
  billingInterval = "monthly",
}: PricingCardProps) {
  const [clicked, setClicked] = useState(false);
  const { status } = useSession();
  const router = useRouter();

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

  return slug !== "enterprise" ? (
    <div className="card-body flex h-full flex-col justify-between gap-8 space-y-8 p-8">
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium capitalize">{name}</h3>
            {most_popular && (
              <span className="rounded-full bg-[#D9F9E6] px-2 text-xs/loose font-medium text-[#2F9461]">
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
      <button
        onClick={handleCheckout}
        disabled={clicked}
        className="btn btn-outline flex !h-10 w-full items-center gap-2 rounded-md border"
      >
        {clicked ? <Icons.loadingSpinner /> : ""}
        <span>Get started</span>
      </button>
    </div>
  ) : (
    <div className="card-body flex h-full flex-col justify-between gap-8 space-y-8 bg-black p-8 text-white sm:col-span-2 md:col-span-1 ">
      <div className="space-y-2">
        <h3 className="text-lg font-medium capitalize">{name}</h3>
        <p className="">{description}</p>
      </div>
      <button className="btn w-full rounded-md border bg-transparent py-3 text-white">
        Contact us
      </button>
    </div>
  );
}

export default PricingCard1;
