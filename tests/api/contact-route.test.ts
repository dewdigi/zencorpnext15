import test from "node:test";
import assert from "node:assert/strict";
import { POST } from "@/app/api/contact/route";

function withEnv(patch: Record<string, string | undefined>, fn: () => Promise<void>) {
  const before = Object.fromEntries(Object.keys(patch).map((key) => [key, process.env[key]]));
  setEnv(patch);

  return fn()
    .catch((error) => {
      throw error;
    })
    .finally(() => {
      for (const [key, value] of Object.entries(before)) {
        if (value === undefined) {
          delete process.env[key];
        } else {
          process.env[key] = value;
        }
      }
    });
}

function setEnv(patch: Record<string, string | undefined>) {
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

const base = {
  NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
  NEXT_PUBLIC_SANITY_PROJECT_ID: "abc123",
  NEXT_PUBLIC_SANITY_DATASET: "production",
  SUPABASE_SERVICE_ROLE_KEY: "service",
  RESEND_API_KEY: "re_key",
  EMAIL_FROM: "noreply@example.com",
  EMAIL_TO: "info@example.com",
};

test("contact route returns 500 with actionable message when env is missing", async () => {
  await withEnv(
    {
      ...base,
      EMAIL_FROM: undefined,
    },
    async () => {
      const req = new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify({ name: "A", email: "a@example.com", subject: "Hi", comments: "Message" }),
      });

      const res = await POST(req as never);
      const body = await res.json();

      assert.equal(res.status, 500);
      assert.match(body.error, /Missing required contact environment variables/);
    },
  );
});

test("contact route preserves 400 validation response for missing fields", async () => {
  await withEnv(base, async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "A", email: "a@example.com", subject: "", comments: "" }),
    });

    const res = await POST(req as never);
    const body = await res.json();

    assert.equal(res.status, 400);
    assert.equal(body.error, "All fields are required.");
  });
});
