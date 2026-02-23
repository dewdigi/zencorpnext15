import test from "node:test";
import assert from "node:assert/strict";
import { getPublicEnv } from "@/lib/env/public";

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

test("getPublicEnv throws with missing required keys", () => {
  withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: undefined,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: undefined,
      NEXT_PUBLIC_SANITY_PROJECT_ID: "abc123",
    },
    () => {
      assert.throws(() => getPublicEnv(), /NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY/);
    },
  );
});

test("getPublicEnv throws when sanity project id is missing", () => {
  withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
      NEXT_PUBLIC_SANITY_PROJECT_ID: undefined,
      SANITY_PROJECT_ID: undefined,
    },
    () => {
      assert.throws(() => getPublicEnv(), /NEXT_PUBLIC_SANITY_PROJECT_ID/);
    },
  );
});

test("getPublicEnv returns typed values", () => {
  withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
      NEXT_PUBLIC_SANITY_PROJECT_ID: "abc123",
      NEXT_PUBLIC_SANITY_DATASET: "production",
    },
    () => {
      const env = getPublicEnv();
      assert.equal(env.supabaseUrl, "https://example.supabase.co");
      assert.equal(env.supabaseAnonKey, "anon");
      assert.equal(env.sanityProjectId, "abc123");
      assert.equal(env.sanityDataset, "production");
    },
  );
});

test("getPublicEnv enforces NEXT_PUBLIC_SANITY_DATASET on Vercel preview/production", () => {
  withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
      NEXT_PUBLIC_SANITY_PROJECT_ID: "abc123",
      NEXT_PUBLIC_SANITY_DATASET: undefined,
      VERCEL_ENV: "preview",
    },
    () => {
      assert.throws(() => getPublicEnv(), /NEXT_PUBLIC_SANITY_DATASET/);
    },
  );
});
