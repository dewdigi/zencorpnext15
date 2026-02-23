import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";
import { enforceRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const rate = enforceRateLimit(`comment:${ip}`, 25, 60000);
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await request.json();
  const { post_slug, content, author_name } = body;
  if (!post_slug || !content || !author_name) {
    return NextResponse.json({ error: "post_slug, author_name and content are required" }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const service = createSupabaseServiceClient();
  const { data: authData } = await supabase.auth.getUser();

  const { error } = await service.from("blog_comments").insert({
    post_slug,
    content,
    author_name,
    user_id: authData.user?.id || null,
    status: "pending",
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Comment submitted for moderation" });
}
