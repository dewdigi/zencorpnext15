import { NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";
import { getUserRole } from "@/lib/auth/roles";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const service = createSupabaseServiceClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const role = await getUserRole(authData.user.id);
  if (!role) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { data, error } = await service.from("blog_comments").select("id,post_slug,content,status,author_name,created_at").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ items: data });
}
