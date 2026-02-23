import Link from "next/link";
import { requireAuthenticatedUser } from "@/lib/auth/guards";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await requireAuthenticatedUser();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap gap-3">
        <Link href="/dashboard" className="rounded border px-3 py-2 text-sm">Overview</Link>
        <Link href="/dashboard/profile" className="rounded border px-3 py-2 text-sm">Profile</Link>
        <Link href="/dashboard/inquiries" className="rounded border px-3 py-2 text-sm">My Inquiries</Link>
        <Link href="/dashboard/newsletter" className="rounded border px-3 py-2 text-sm">Newsletter</Link>
        <Link href="/dashboard/security" className="rounded border px-3 py-2 text-sm">Security</Link>
      </div>
      {children}
    </div>
  );
}
