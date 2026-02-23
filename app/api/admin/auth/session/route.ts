import { NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/admin/auth";

export async function GET() {
  try {
    const user = await requireAdminUser();
    return NextResponse.json({ authenticated: true, user });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message === "UNAUTHORIZED" ? 401 : message === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ authenticated: false, error: message }, { status });
  }
}
