import { getSession } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { DOMAIN } from "@/lib/utils";

const billingUrl = `${DOMAIN}/dashboard`;

export async function GET(req: Request) {
  try {
    const session = await getSession();


    if (!session?.user || !session?.user.email) {
      return new Response(null, { status: 403 });
    }

    const subscription = await getUserSubscriptionPlan(session.user.id);

    if (subscription.stripeId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: subscription.stripeId,
        return_url: billingUrl,
      });

      return new Response(JSON.stringify({ url: stripeSession.url }));
    }

    // The user is on the free plan.
    // Create a checkout session to upgrade.

    // Gotta work on it in next update

    // const stripeSession = await stripe.checkout.sessions.create({
    //   success_url: billingUrl,
    //   cancel_url: billingUrl,
    //   payment_method_types: ["card"],
    //   mode: "subscription",
    //   billing_address_collection: "auto",
    //   customer_email: session.user.email,
    //   line_items: [
    //     {
    //       price: stripePriceId,
    //       quantity: 1,
    //     },
    //   ],
    //   metadata: {
    //     userId: session.user.id,
    //   },
    // });
  } catch (error) {
    // @ts-ignore
    return new Response(JSON.stringify(error.issues), { status: 422 });
  }
  return new Response(null, { status: 500 });
}
