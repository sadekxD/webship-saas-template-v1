export interface Session {
  user: {
    email: string;
    id: string;
    name: string;
    image?: string;
  };
}

export interface WithSessionHandler {
  ({
    req,
    params,
    searchParams,
    session,
  }: {
    req: Request;
    params: Record<string, string>;
    searchParams: Record<string, string>;
    session: Session;
  }): Promise<Response>;
}

export interface SectionTopProps {
  subheading?: String;
  heading?: String;
  description?: String;
}

export interface PricingCardProps {
  name?: string;
  slug?: string;
  description?: string;
  price?: {
    [key: string]: {
      amount: number | string;
      priceIds: {
        test: string;
        production: string;
      };
    };
  };
  features: string[];
  most_popular?: boolean;
  billingInterval?: string;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  plan: string;
  stripeId: string | null;
  billingCycleStart: number | null;
  createdAt: Date;
}
