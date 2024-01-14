import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { getPlanFromPriceId, isUpgrade } from "@/lib/stripe/utils";

import { resend, sendEmail } from "@/emails";
import Stripe from "stripe";

// email components
import CongratsEmail from "@/emails/CongratsEmail";
import { NextResponse } from "next/server";
import UpgradeEmail from "@/emails/UpgradeEmail";

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

// POST /api/webhooks/stripe – listen to Stripe webhooks

export const POST = async (req: Request) => {
  const buf = await req.text();
  const sig = req.headers.get("Stripe-Signature") as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;
  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    // @ts-ignore
    return new Response(`Webhook Error: ${err.message}`, {
      status: 400,
    });
  }

  if (relevantEvents.has(event.type)) {
    // rest of the code
    try {
      if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;

        const stripeId = session?.customer?.toString();
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string,
        );
        const plan = getPlanFromPriceId(subscription.items.data[0].price.id);

        // when the project subscribes to a plan, set their stripe customer ID
        // in the database for easy identification in future webhook events
        // also update the billingCycleStart to today's date

        const user = await prisma.user.update({
          where: {
            id: session?.metadata?.userId,
          },
          data: {
            stripeId,
            billingCycleStart: new Date().getDate(),
            plan: plan.slug,
          },
        });

        await sendEmail({
          email: user.email as string,
          subject: `Thank you for your purchase to ${APP_NAME} ${plan.name}!`,
          react: CongratsEmail({
            name: user.name,
            email: user.email as string,
            plan: plan.name,
          }),
          marketing: true,
        });
      }

      // for subscription updates
      if (event.type === "customer.subscription.updated") {
        const subscriptionUpdated = event.data.object as Stripe.Subscription;
        const priceId = subscriptionUpdated.items.data[0].price.id;
        const upgraded = isUpgrade(event.data.previous_attributes);

        const plan = getPlanFromPriceId(priceId);
        const stripeId = subscriptionUpdated.customer.toString();

        const user = await prisma.user.findUnique({
          where: {
            stripeId,
          },
        });

        if (!user) {
          /*
          Do something
          here
          */
          return NextResponse.json({ received: true });
        }

        // If a project upgrades/downgrades their subscription, update their plan in the database.
        await prisma.user.update({
          where: {
            stripeId: subscriptionUpdated?.metadata?.userId,
          },
          data: {
            billingCycleStart: new Date().getDate(),
            plan: plan.slug,
          },
        });

        if (upgraded) {
          await sendEmail({
            email: user.email as string,
            subject: `Thank you for upgrading to ${APP_NAME} ${plan.name}!`,
            react: UpgradeEmail({
              name: user.name,
              email: user.email as string,
              plan: plan.name,
            }),
            marketing: true,
          });
        }
      }

      // If project cancels their subscription
      if (event.type === "customer.subscription.deleted") {
        const subscriptionDeleted = event.data.object as Stripe.Subscription;

        const stripeId = subscriptionDeleted.customer.toString();

        // If a user deletes their subscription.
        /* 
        Do something here 
        */

        const user = await prisma.user.findUnique({
          where: {
            stripeId,
          },
        });

        if (!user) {
          /*
          Do something here
          */
          return NextResponse.json({ received: true });
        }

        await resend.emails.send({
          // from: `Irfan from ${APP_NAME} <irfan@webship.ing>`,
          from: "onboarding@resend.dev",
          to: user.email as string,
          subject: "Feedback on your webship.ing experience?",
          text: "Hey!\n\nI noticed you recently cancelled your webship.ing subscription – we're sorry to see you go!\n\nI'd love to hear your feedback on your experience with Webship – what could we have done better?\n\nThanks!\n\nIrfan Sadek\nFounder, webship.ing",
        });
      }
    } catch (error) {
      return new Response('Webhook error: "Webhook handler failed."', {
        status: 400,
      });
    }
  } else {
    return new Response(`Unhandled event type: ${event.type}`, {
      status: 400,
    });
  }
};
