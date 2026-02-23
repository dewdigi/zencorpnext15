import { NextRequest, NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin/auth";
import { createSupabaseServiceClient } from "@/lib/supabase/server";
import { validateNewPassword } from "@/lib/admin/password-reset";

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdminUser();
    const body = await request.json().catch(() => ({}));

    const password = String(body?.password || "");
    const confirmPassword = String(body?.confirmPassword || "");
    const validationError = validateNewPassword(password, confirmPassword);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const service = createSupabaseServiceClient();
    const { error } = await service.auth.admin.updateUserById(admin.userId, {
      password,
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
