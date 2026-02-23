import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";
import { getUserRole } from "@/lib/auth/roles";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createSupabaseServerClient();
  const service = createSupabaseServiceClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const role = await getUserRole(authData.user.id);
  if (!role) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { status } = await request.json();
  if (!["pending", "approved", "rejected", "spam"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const { error } = await service
    .from("blog_comments")
    .update({ status, moderated_by: authData.user.id, moderated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Comment updated" });
}
