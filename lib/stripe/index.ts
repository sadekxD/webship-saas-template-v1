import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY ?? "",
  {
    // @ts-ignore
    apiVersion: "2022-11-15",
    appInfo: {
      name: "webship.ing",
      version: "0.1.0",
    },
  },
);

export async function cancelSubscription(customer?: string) {
  if (!customer) return;

  try {
    const subscriptionId = await stripe.subscriptions
      .list({
        customer,
      })
      .then((res) => res.data[0].id);

    return await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
      cancellation_details: {
        comment: "Customer deleted their Webship project.",
      },
    });
  } catch (error) {
    console.log("Error cancelling Stripe subscription", error);
    return;
  }
}
