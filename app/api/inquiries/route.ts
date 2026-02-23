import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";
import { enforceRateLimit } from "@/lib/rate-limit";
import { assertServerEnvForInquiryNotification } from "@/lib/env/server";
import {
  buildInquiryNotificationHtml,
  buildInquiryNotificationText,
} from "@/lib/email/templates/inquiryNotification";
import { createMailTransport } from "@/lib/email/transporter";

const INQUIRY_RECIPIENTS = ["info@zencorp.ae", "ismailgraphix@gmail.com"] as const;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const rate = enforceRateLimit(`inquiry:${ip}`, 20, 60000);
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await request.json();
  const { name, email, phone, company, service, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "name, email, subject and message are required" }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const serviceClient = createSupabaseServiceClient();
  const { data: authData } = await supabase.auth.getUser();

  const payload = {
    user_id: authData.user?.id ?? null,
    name,
    email,
    phone: phone || null,
    company: company || null,
    service: service || null,
    subject,
    message,
    status: "new",
  };

  const { data, error } = await serviceClient.from("inquiries").insert(payload).select("id").single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const createdAt = new Date().toISOString();
  const html = buildInquiryNotificationHtml({
    name,
    email,
    phone: phone || null,
    company: company || null,
    service: service || null,
    subject,
    message,
    createdAt,
    inquiryId: data.id,
    siteUrl: request.nextUrl.origin,
  });
  const text = buildInquiryNotificationText({
    name,
    email,
    phone: phone || null,
    company: company || null,
    service: service || null,
    subject,
    message,
    createdAt,
    inquiryId: data.id,
  });

  let emailQueued = false;
  try {
    assertServerEnvForInquiryNotification();
    const { transporter, fromAddress } = createMailTransport();

    await transporter.sendMail({
      from: `"ZENCORP Website" <${fromAddress}>`,
      to: INQUIRY_RECIPIENTS.join(", "),
      replyTo: email,
      subject: `[ZENCORP Inquiry] ${subject}`,
      text,
      html,
    });
    emailQueued = true;
  } catch (mailError) {
    const message = mailError instanceof Error ? mailError.message : "Unknown mail error";
    console.error("Inquiry email delivery failed", { inquiryId: data.id, message });
  }

  return NextResponse.json({ message: "Inquiry created", id: data.id, emailQueued });
}
