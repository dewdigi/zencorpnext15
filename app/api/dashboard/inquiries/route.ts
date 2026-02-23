import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";
import { getUserRole } from "@/lib/auth/roles";

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const admin = createSupabaseServiceClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isAdminQuery = request.nextUrl.searchParams.get("admin") === "1";
  if (isAdminQuery) {
    const role = await getUserRole(authData.user.id);
    if (!role) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { data, error } = await admin.from("inquiries").select("id,subject,status,email,created_at").order("created_at", { ascending: false });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ items: data });
  }

  const { data, error } = await admin
    .from("inquiries")
    .select("id,subject,status,created_at")
    .eq("user_id", authData.user.id)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: data });
}
