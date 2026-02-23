import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";
import { getUserRole, APP_ROLES } from "@/lib/auth/roles";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createSupabaseServerClient();
  const service = createSupabaseServiceClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const actorRole = await getUserRole(authData.user.id);
  if (actorRole !== "super_admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { role } = await request.json();
  if (!APP_ROLES.includes(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const { error } = await service.from("user_roles").upsert({ user_id: id, role, assigned_by: authData.user.id }, { onConflict: "user_id" });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  await service.auth.admin.updateUserById(id, { app_metadata: { role } });
  return NextResponse.json({ message: "Role updated" });
}
