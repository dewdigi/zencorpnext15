import { requireAuthenticatedUser } from "@/lib/auth/guards";

export default async function DashboardPage() {
  const user = await requireAuthenticatedUser();
  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">User Dashboard</h1>
      <p className="mt-2 text-sm text-slate-600">Welcome, {user.email}</p>
    </section>
  );
}
