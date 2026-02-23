import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin/auth";
import { createSanityBlog, listSanityBlogs } from "@/lib/sanity/admin";

export async function GET() {
  try {
    await requireAdminUser();
    const blogs = await listSanityBlogs(200);
    return NextResponse.json({ blogs });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message === "UNAUTHORIZED" ? 401 : message === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdminUser();
    const body = await request.json();
    const { title, slug, excerpt, content, status } = body;

    if (!title || !excerpt || !content) {
      return NextResponse.json({ error: "title, excerpt and content are required" }, { status: 400 });
    }

    const created = await createSanityBlog({
      title,
      slug: slug || title,
      excerpt,
      body: content,
      status: status === "draft" ? "draft" : "published",
    });

    return NextResponse.json({ ok: true, post: created });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message === "UNAUTHORIZED" ? 401 : message === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
