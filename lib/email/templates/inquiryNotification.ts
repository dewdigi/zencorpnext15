export type InquiryNotificationPayload = {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  subject: string;
  message: string;
  createdAt: string;
  inquiryId?: string | null;
  siteUrl?: string;
};

const FALLBACK_VALUE = "N/A";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safe(value?: string | null) {
  if (!value || !value.trim()) return FALLBACK_VALUE;
  return escapeHtml(value.trim());
}

function nl2br(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br/>");
}

export function buildInquiryNotificationHtml(payload: InquiryNotificationPayload) {
  const siteUrl = payload.siteUrl?.replace(/\/$/, "") || "https://zencorp.ae";
  const logoUrl = `${siteUrl}/images/logo-zencorp.png`;
  const timestamp = safe(payload.createdAt);
  const replyMailTo = `mailto:${safe(payload.email)}`;
  const safeSubject = safe(payload.subject);
  const safeMessage = nl2br(payload.message || "");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ZENCORP Inquiry Notification</title>
  </head>
  <body style="margin:0;padding:0;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif;color:#0f1d2d;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f6f8;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border:1px solid #d5dde5;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:20px 24px;background:linear-gradient(140deg,#0f2639 0%,#153651 60%,#1f4d42 100%);color:#ffffff;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="vertical-align:middle;">
                      <img src="${logoUrl}" alt="ZENCORP" width="160" style="display:block;border:0;outline:none;text-decoration:none;max-width:160px;height:auto;" />
                    </td>
                    <td align="right" style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#d3ebdf;vertical-align:middle;">
                      New Website Inquiry
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 24px 8px 24px;">
                <div style="font-size:12px;color:#5f6f7f;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;">Subject</div>
                <div style="font-size:22px;line-height:1.35;font-weight:700;color:#0f1d2d;">${safeSubject}</div>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 24px 0 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #dbe3ea;border-radius:12px;overflow:hidden;background:#fbfdff;">
                  <tr><td style="padding:10px 14px;border-bottom:1px solid #e5ebf0;"><strong>Name:</strong> ${safe(payload.name)}</td></tr>
                  <tr><td style="padding:10px 14px;border-bottom:1px solid #e5ebf0;"><strong>Email:</strong> ${safe(payload.email)}</td></tr>
                  <tr><td style="padding:10px 14px;border-bottom:1px solid #e5ebf0;"><strong>Phone:</strong> ${safe(payload.phone)}</td></tr>
                  <tr><td style="padding:10px 14px;border-bottom:1px solid #e5ebf0;"><strong>Company:</strong> ${safe(payload.company)}</td></tr>
                  <tr><td style="padding:10px 14px;border-bottom:1px solid #e5ebf0;"><strong>Service:</strong> ${safe(payload.service)}</td></tr>
                  <tr><td style="padding:10px 14px;border-bottom:1px solid #e5ebf0;"><strong>Timestamp:</strong> ${timestamp}</td></tr>
                  <tr><td style="padding:10px 14px;"><strong>Inquiry ID:</strong> ${safe(payload.inquiryId ?? null)}</td></tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 24px 6px 24px;">
                <div style="font-size:12px;color:#5f6f7f;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">Message</div>
                <div style="background:#f8fbff;border:1px solid #dbe3ea;border-radius:12px;padding:14px;line-height:1.6;color:#1f3246;">${safeMessage}</div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 24px 24px 24px;">
                <a href="${replyMailTo}" style="display:inline-block;background:#165029;color:#ffffff;text-decoration:none;font-weight:700;padding:11px 18px;border-radius:10px;">
                  Reply to Sender
                </a>
                <div style="margin-top:16px;font-size:12px;color:#607181;line-height:1.55;">
                  ZENCORP TRADING CO. LLC<br/>
                  Dubai, United Arab Emirates
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildInquiryNotificationText(payload: InquiryNotificationPayload) {
  return [
    "ZENCORP - New Website Inquiry",
    `Subject: ${payload.subject || FALLBACK_VALUE}`,
    `Name: ${payload.name || FALLBACK_VALUE}`,
    `Email: ${payload.email || FALLBACK_VALUE}`,
    `Phone: ${payload.phone || FALLBACK_VALUE}`,
    `Company: ${payload.company || FALLBACK_VALUE}`,
    `Service: ${payload.service || FALLBACK_VALUE}`,
    `Timestamp: ${payload.createdAt || FALLBACK_VALUE}`,
    `Inquiry ID: ${payload.inquiryId || FALLBACK_VALUE}`,
    "",
    "Message:",
    payload.message || "",
    "",
    "ZENCORP TRADING CO. LLC - Dubai, UAE",
  ].join("\n");
}
