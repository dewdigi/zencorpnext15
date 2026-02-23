import test from "node:test";
import assert from "node:assert/strict";
import { getAuthAdminEnv } from "@/lib/admin/auth";

function withEnv(patch: Record<string, string | undefined>, fn: () => void) {
  const before = Object.fromEntries(Object.keys(patch).map((key) => [key, process.env[key]]));
  try {
    for (const [key, value] of Object.entries(patch)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    fn();
  } finally {
    for (const [key, value] of Object.entries(before)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("getAuthAdminEnv only requires Supabase URL and service role key", () => {
  withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      SUPABASE_SERVICE_ROLE_KEY: "service-role",
      NEXT_PUBLIC_SANITY_PROJECT_ID: undefined,
      NEXT_PUBLIC_SANITY_DATASET: undefined,
      SANITY_PROJECT_ID: undefined,
      SANITY_DATASET: undefined,
      SANITY_API_TOKEN: undefined,
    },
    () => {
      const env = getAuthAdminEnv();
      assert.equal(env.url, "https://example.supabase.co");
      assert.equal(env.serviceRoleKey, "service-role");
    },
  );
});

test("getAuthAdminEnv throws when required keys are missing", () => {
  withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: undefined,
      SUPABASE_SERVICE_ROLE_KEY: undefined,
    },
    () => {
      assert.throws(() => getAuthAdminEnv(), /NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY/);
    },
  );
});
