import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";

type AdminCheckResult = {
  userId: string;
  email: string;
  role: string | null;
};

export function getAdminEmailsFromEnv() {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmailAllowlisted(email: string) {
  const list = getAdminEmailsFromEnv();
  return list.includes(email.trim().toLowerCase());
}

export async function isAdminEmailEligibleForReset(emailInput: string): Promise<boolean> {
  const email = emailInput.trim().toLowerCase();
  if (!email) return false;
  if (isAdminEmailAllowlisted(email)) return true;

  const service = createSupabaseServiceClient();
  const pageSize = 200;

  for (let page = 1; page <= 10; page += 1) {
    const { data, error } = await service.auth.admin.listUsers({ page, perPage: pageSize });
    if (error) break;

    const users = data.users || [];
    if (users.length === 0) break;

    const match = users.find((user) => {
      const userEmail = (user.email || "").toLowerCase();
      const role = (user.app_metadata?.role as string | undefined) || null;
      return userEmail === email && role === "admin";
    });

    if (match) return true;
    if (users.length < pageSize) break;
  }

  return false;
}

export async function requireAdminUser(): Promise<AdminCheckResult> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    throw new Error("UNAUTHORIZED");
  }

  const email = (data.user.email || "").toLowerCase();
  const role = (data.user.app_metadata?.role as string | undefined) || null;
  const adminEmails = getAdminEmailsFromEnv();
  const isAdminByRole = role === "admin";
  const isAdminByEmail = email && adminEmails.includes(email);

  if (!isAdminByRole && !isAdminByEmail) {
    throw new Error("FORBIDDEN");
  }

  return {
    userId: data.user.id,
    email: data.user.email || "",
    role,
  };
}
