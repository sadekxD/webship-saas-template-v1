import { getSession } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { DOMAIN, getSearchParams } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { priceId } = getSearchParams(req.url);
  const session = await getSession();

  if (!priceId) {
    return new Response("Missing price ID", { status: 400 });
  }

  const stripeSession = await stripe.checkout.sessions.create({
    //@ts-ignore
    customer_email: session?.user.email,
    success_url: `${DOMAIN}/dashboard?success=true`,
    cancel_url: `${DOMAIN}/`,
    line_items: [{ price: priceId, quantity: 1 }],
    billing_address_collection: "auto",
    // automatic_tax: {
    //   enabled: true,
    // },
    // tax_id_collection: {
    //   enabled: true,
    // },
    mode: "subscription",
    allow_promotion_codes: true,
    metadata: {
      userId: session?.user.id,
    },
  });

  return NextResponse.json(stripeSession);
};
