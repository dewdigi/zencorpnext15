import test from "node:test";
import assert from "node:assert/strict";
import { createMailTransport } from "@/lib/email/transporter";

function withEnv(patch: Record<string, string | undefined>, fn: () => void) {
  const before = Object.fromEntries(Object.keys(patch).map((key) => [key, process.env[key]]));

  try {
    for (const [key, value] of Object.entries(patch)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
    fn();
  } finally {
    for (const [key, value] of Object.entries(before)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}

const base = {
  NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
  NEXT_PUBLIC_SANITY_PROJECT_ID: "abc123",
  NEXT_PUBLIC_SANITY_DATASET: "production",
  SUPABASE_SERVICE_ROLE_KEY: "service",
  EMAIL_FROM: "noreply@example.com",
  EMAIL_TO: "info@example.com",
};

test("createMailTransport chooses Resend transport when credential is present", () => {
  withEnv(
    {
      ...base,
      RESEND_API_KEY: "re_key",
      RESEND_SMTP_PASSWORD: undefined,
      EMAIL_USER: undefined,
      EMAIL_PASSWORD: undefined,
    },
    () => {
      const { transporter, fromAddress } = createMailTransport();
      const options = (transporter as unknown as { options?: Record<string, unknown> }).options || {};

      assert.equal(fromAddress, "noreply@example.com");
      assert.equal(options.host, "smtp.resend.com");
      assert.equal(options.port, 465);
    },
  );
});

test("createMailTransport uses Gmail fallback when Resend credentials are absent", () => {
  withEnv(
    {
      ...base,
      RESEND_API_KEY: undefined,
      RESEND_SMTP_PASSWORD: undefined,
      EMAIL_USER: "mail@example.com",
      EMAIL_PASSWORD: "gmail-pass",
    },
    () => {
      const { transporter, fromAddress } = createMailTransport();
      const options = (transporter as unknown as { options?: Record<string, unknown> }).options || {};

      assert.equal(fromAddress, "noreply@example.com");
      assert.equal(options.service, "Gmail");
    },
  );
});
