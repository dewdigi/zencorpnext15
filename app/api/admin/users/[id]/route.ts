import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin/auth";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const currentAdmin = await requireAdminUser();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "User id is required" }, { status: 400 });
    }
    if (id === currentAdmin.userId) {
      return NextResponse.json({ error: "You cannot delete your own account from this dashboard." }, { status: 400 });
    }

    const service = createSupabaseServiceClient();
    const { error } = await service.auth.admin.deleteUser(id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message === "UNAUTHORIZED" ? 401 : message === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
