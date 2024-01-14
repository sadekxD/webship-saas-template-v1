import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { classNames } from "@/lib/utils";
import AuthProvider from "@/context/AuthProvider";
import ThemeController from "@/components/ThemeController";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webship.ing",
  description: "Lorem Ipsum dolor sit ammet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <AuthProvider>
        <body className={classNames(inter.className, "text-base-content")}>
          <Toaster closeButton />
          {children}
          <ThemeController />
        </body>
      </AuthProvider>
    </html>
  );
}
