import Link from "next/link";
import { requireAdminRole } from "@/lib/auth/guards";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { role } = await requireAdminRole();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 rounded-2xl border bg-[#f6fbf8] p-4 text-sm">Signed in as role: <strong>{role}</strong></div>
      <div className="mb-8 flex flex-wrap gap-3">
        <Link href="/admin" className="rounded border px-3 py-2 text-sm">Overview</Link>
        <Link href="/studio" className="rounded border px-3 py-2 text-sm">Content Studio</Link>
        <Link href="/admin/comments" className="rounded border px-3 py-2 text-sm">Comments</Link>
        <Link href="/admin/inquiries" className="rounded border px-3 py-2 text-sm">Inquiries</Link>
        <Link href="/admin/users" className="rounded border px-3 py-2 text-sm">Users</Link>
        <Link href="/admin/settings" className="rounded border px-3 py-2 text-sm">Settings</Link>
      </div>
      {children}
    </div>
  );
}
