import test from "node:test";
import assert from "node:assert/strict";
import { assertServerEnvForContact, getServerEnv } from "@/lib/env/server";

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

const basePublic = {
  NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
  NEXT_PUBLIC_SANITY_PROJECT_ID: "abc123",
  NEXT_PUBLIC_SANITY_DATASET: "production",
};

test("getServerEnv throws when SUPABASE_SERVICE_ROLE_KEY is missing", () => {
  withEnv(
    {
      ...basePublic,
      SUPABASE_SERVICE_ROLE_KEY: undefined,
    },
    () => {
      assert.throws(() => getServerEnv(), /SUPABASE_SERVICE_ROLE_KEY/);
    },
  );
});

test("assertServerEnvForContact requires EMAIL_FROM and EMAIL_TO", () => {
  withEnv(
    {
      ...basePublic,
      SUPABASE_SERVICE_ROLE_KEY: "service",
      RESEND_API_KEY: "re_key",
      EMAIL_FROM: undefined,
      EMAIL_TO: undefined,
    },
    () => {
      assert.throws(() => assertServerEnvForContact(), /EMAIL_FROM, EMAIL_TO/);
    },
  );
});

test("assertServerEnvForContact accepts RESEND_API_KEY-only path", () => {
  withEnv(
    {
      ...basePublic,
      SUPABASE_SERVICE_ROLE_KEY: "service",
      RESEND_API_KEY: "re_key",
      RESEND_SMTP_PASSWORD: undefined,
      EMAIL_FROM: "noreply@example.com",
      EMAIL_TO: "info@example.com",
    },
    () => {
      assert.doesNotThrow(() => assertServerEnvForContact());
    },
  );
});

test("assertServerEnvForContact accepts SMTP-password path", () => {
  withEnv(
    {
      ...basePublic,
      SUPABASE_SERVICE_ROLE_KEY: "service",
      RESEND_API_KEY: undefined,
      RESEND_SMTP_PASSWORD: "smtp-pass",
      EMAIL_FROM: "noreply@example.com",
      EMAIL_TO: "info@example.com",
    },
    () => {
      assert.doesNotThrow(() => assertServerEnvForContact());
    },
  );
});
