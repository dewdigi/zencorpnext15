import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin/auth";
import { deleteSanityBlog } from "@/lib/sanity/admin";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    await requireAdminUser();
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Blog id is required" }, { status: 400 });
    }

    await deleteSanityBlog(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message === "UNAUTHORIZED" ? 401 : message === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
