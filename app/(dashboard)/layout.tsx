import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth";
import GridBackground from "@/components/GridBackground";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getSession();

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <GridBackground />
      <main>{children}</main>
    </div>
  );
}
