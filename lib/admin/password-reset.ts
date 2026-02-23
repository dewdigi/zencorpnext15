export const GENERIC_RESET_RESPONSE_MESSAGE = "If an account exists, a reset link has been sent.";

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function sanitizeAdminNextPath(nextPath: string | null | undefined): string {
  if (!nextPath) return "/admin/reset-password";
  if (!nextPath.startsWith("/admin/")) return "/admin/reset-password";
  if (nextPath.includes("://")) return "/admin/reset-password";
  return nextPath;
}

export function getSiteOrigin(fallbackOrigin?: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (siteUrl) return siteUrl.replace(/\/+$/, "");
  return (fallbackOrigin || "http://localhost:3000").replace(/\/+$/, "");
}

export function buildAdminResetRedirectUrl(origin: string): string {
  return `${getSiteOrigin(origin)}/admin/auth/confirm?next=/admin/reset-password`;
}

export function validateNewPassword(password: string, confirmPassword: string): string | null {
  if (password.length < 12) {
    return "Password must be at least 12 characters.";
  }
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return "Password must include uppercase, lowercase, and a number.";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }
  return null;
}
