import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getUserRole, isAdminRole, type AppRole } from "@/lib/auth/roles";

export async function requireAuthenticatedUser() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }

  return data.user;
}

export async function requireAdminRole(allowedRoles: AppRole[] = ["super_admin", "editor", "support"]) {
  const user = await requireAuthenticatedUser();
  const role = await getUserRole(user.id);

  if (!role || !isAdminRole(role) || !allowedRoles.includes(role)) {
    redirect("/dashboard");
  }

  return { user, role };
}
