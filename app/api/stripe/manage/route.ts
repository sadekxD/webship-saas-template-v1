//@ts-nocheck
import { getSession } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { DOMAIN } from "@/lib/utils";
import { NextResponse } from "next/server";

// create a Stripe billing portal session
export const POST = async (req: Request) => {
  const session = await getSession();
  const user = session?.user;

  if (!user.stripeSubscriptionId) {
    return new Response("No Stripe customer ID", { status: 400 });
  }
  const { url } = await stripe.billingPortal.sessions.create({
    customer: user.stripeSubscriptionId,
    return_url: `${DOMAIN}/dashboard`,
  });
  return NextResponse.json(url);
};
