import { redirect } from "next/navigation";
import AdminDashboard from "./AdminDashboard";
import { requireAdminUser } from "@/lib/admin/auth";

export default async function AdminPage() {
  try {
    await requireAdminUser();
  } catch {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
