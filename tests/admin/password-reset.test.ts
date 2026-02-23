import test from "node:test";
import assert from "node:assert/strict";
import {
  buildAdminResetRedirectUrl,
  getSiteOrigin,
  sanitizeAdminNextPath,
  validateNewPassword,
} from "@/lib/admin/password-reset";

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

test("sanitizeAdminNextPath allows only /admin/* paths", () => {
  assert.equal(sanitizeAdminNextPath("/admin/reset-password"), "/admin/reset-password");
  assert.equal(sanitizeAdminNextPath("/products"), "/admin/reset-password");
  assert.equal(sanitizeAdminNextPath("https://evil.com"), "/admin/reset-password");
});

test("getSiteOrigin uses NEXT_PUBLIC_SITE_URL when set", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: "https://example.com/" }, () => {
    assert.equal(getSiteOrigin("http://localhost:3000"), "https://example.com");
  });
});

test("buildAdminResetRedirectUrl uses origin fallback", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: undefined }, () => {
    assert.equal(
      buildAdminResetRedirectUrl("http://localhost:3000"),
      "http://localhost:3000/admin/auth/confirm?next=/admin/reset-password",
    );
  });
});

test("validateNewPassword enforces complexity and confirmation", () => {
  assert.match(validateNewPassword("short", "short") || "", /at least 12/);
  assert.match(validateNewPassword("alllowercase123", "alllowercase123") || "", /uppercase/);
  assert.match(validateNewPassword("ValidPassword123", "Different123") || "", /do not match/);
  assert.equal(validateNewPassword("ValidPassword123", "ValidPassword123"), null);
});
