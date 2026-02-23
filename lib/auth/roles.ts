export const APP_ROLES = ["super_admin", "editor", "support"] as const;
export type AppRole = (typeof APP_ROLES)[number];

export function isAdminRole(role?: string | null): role is AppRole {
  return role === "super_admin" || role === "editor" || role === "support";
}

export async function getUserRole(userId: string): Promise<AppRole | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return null;

  const { createClient } = await import("@supabase/supabase-js");
  const admin = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data, error } = await admin.from("user_roles").select("role").eq("user_id", userId).single();
  if (error || !data) return null;
  return isAdminRole(data.role) ? data.role : null;
}
