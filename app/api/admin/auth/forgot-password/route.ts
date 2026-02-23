import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceRateLimit } from "@/lib/rate-limit";
import {
  buildAdminResetRedirectUrl,
  GENERIC_RESET_RESPONSE_MESSAGE,
  normalizeEmail,
} from "@/lib/admin/password-reset";
import { isAdminEmailEligibleForReset } from "@/lib/admin/auth";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_IP = 10;
const MAX_EMAIL = 3;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const ipRate = enforceRateLimit(`admin-reset:ip:${ip}`, MAX_IP, WINDOW_MS);
  if (!ipRate.allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const email = normalizeEmail(String(body?.email || ""));

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const emailRate = enforceRateLimit(`admin-reset:email:${email}`, MAX_EMAIL, WINDOW_MS);
  if (!emailRate.allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const shouldAttemptReset = await isAdminEmailEligibleForReset(email);
  if (shouldAttemptReset) {
    try {
      const supabase = await createSupabaseServerClient();
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: buildAdminResetRedirectUrl(request.nextUrl.origin),
      });
    } catch {
      // non-enumerating response by design
    }
  }

  return NextResponse.json({ message: GENERIC_RESET_RESPONSE_MESSAGE });
}
