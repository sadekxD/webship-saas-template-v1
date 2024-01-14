import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

import BillingForm from "@/components/forms/BillingForm";
import { getUserSubscriptionPlan } from "@/lib/subscription";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await getSession();
  const user = session.user;

  if (!user) {
    redirect("/api/auth/signin");
  }

  const subscription = await getUserSubscriptionPlan(user.id);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-screen items-center justify-center">
          <BillingForm {...subscription} />
        </div>
      </div>
    </div>
  );
}
