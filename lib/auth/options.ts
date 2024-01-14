import { type NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { sendEmail } from "@/emails";
import LoginLink from "@/emails/LoginLink";

import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      sendVerificationRequest({ identifier, url }) {
        if (process.env.NODE_ENV === "development") {
          console.log(`Login link: ${url}`);
          return;
        } else {
          sendEmail({
            email: identifier,
            subject: `Your ${process.env.NEXT_PUBLIC_APP_NAME} Login Link`,
            react: LoginLink({ url, email: identifier }),
            test: true,
          });
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token }) => {
      console.log(session);
      if (session?.user) {
        const user = await prisma.user.findUnique({
          where: {
            id: token.sub,
          },
          select: { plan: true },
        });

        session.user.id = token.sub;
        session.user.plan = user?.plan;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
