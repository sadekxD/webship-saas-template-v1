// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Extending the built-in session types
   */
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      image?: string;
      plan?: string; // Add the custom plan property
    };
  }
}
