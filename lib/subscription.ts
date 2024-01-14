// @ts-nocheck
import prisma from "@/lib/prisma";

export async function getUserSubscriptionPlan(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return { plan: user.plan, stripeId: user.stripeId };
}
