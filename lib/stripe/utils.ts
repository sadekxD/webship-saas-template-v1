import { PLANS } from "@/config/config";

export function getPlanFromPriceId(priceId: string) {
  const env = process.env.NODE_ENV === "production" ? "production" : "test";
  return PLANS.find(
    (plan) =>
      plan.price.monthly.priceIds[env] === priceId ||
      plan.price.yearly.priceIds[env] === priceId,
  )!;
}

// custom type coercion because Stripe's types are wrong
export function isUpgrade(
  previousAttributes:
    | {
        default_payment_method?: string;
        items?: {
          data?: {
            price?: {
              id?: string;
            }[];
          };
        };
      }
    | undefined,
) {
  const oldPriceId =
    previousAttributes?.items?.data &&
    // @ts-ignore
    previousAttributes?.items?.data[0].price.id;

  return oldPriceId && getPlanFromPriceId(oldPriceId).slug === "pro";
}
