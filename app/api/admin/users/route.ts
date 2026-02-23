import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin/auth";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    await requireAdminUser();
    const service = createSupabaseServiceClient();
    const { data, error } = await service.auth.admin.listUsers({ page: 1, perPage: 200 });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const users = (data.users || []).map((user) => ({
      id: user.id,
      email: user.email || "",
      createdAt: user.created_at,
      lastSignInAt: user.last_sign_in_at,
      role: (user.app_metadata?.role as string | undefined) || "user",
      bannedUntil: user.banned_until || null,
    }));

    return NextResponse.json({ users });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message === "UNAUTHORIZED" ? 401 : message === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await requireAdminUser();
    const { userId, role } = await request.json();
    if (!userId || !role || !["admin", "user"].includes(role)) {
      return NextResponse.json({ error: "userId and role(admin|user) are required" }, { status: 400 });
    }

    const service = createSupabaseServiceClient();
    const { error } = await service.auth.admin.updateUserById(userId, {
      app_metadata: { role },
    });

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
