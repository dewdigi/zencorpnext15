import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { sanitizeAdminNextPath } from "@/lib/admin/password-reset";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const tokenHash = url.searchParams.get("token_hash");
  const code = url.searchParams.get("code");
  const type = url.searchParams.get("type");
  const next = sanitizeAdminNextPath(url.searchParams.get("next"));

  if (!tokenHash && !code) {
    return NextResponse.redirect(new URL("/admin/login?error=Invalid+or+expired+reset+link", request.url));
  }

  const supabase = await createSupabaseServerClient();
  let error: Error | null = null;

  if (tokenHash && type === "recovery") {
    const result = await supabase.auth.verifyOtp({
      type: "recovery",
      token_hash: tokenHash,
    });
    error = result.error;
  } else if (code) {
    const result = await supabase.auth.exchangeCodeForSession(code);
    error = result.error;
  } else {
    error = new Error("Invalid recovery link");
  }

  if (error) {
    return NextResponse.redirect(new URL("/admin/login?error=Invalid+or+expired+reset+link", request.url));
  }

  return NextResponse.redirect(new URL(next, request.url));
}
