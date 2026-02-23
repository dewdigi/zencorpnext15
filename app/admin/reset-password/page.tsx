"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { validateNewPassword } from "@/lib/admin/password-reset";

export default function AdminResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/auth/session", { cache: "no-store" });
        if (!res.ok) {
          setAllowed(false);
          setError("This reset link is invalid, expired, or not authorized for admin access.");
          return;
        }
        setAllowed(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to validate reset session.");
      } finally {
        setChecking(false);
      }
    })();
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const clientValidationError = validateNewPassword(password, confirmPassword);
    if (clientValidationError) {
      setError(clientValidationError);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/admin/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, confirmPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to reset password.");
        return;
      }

      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
      setMessage("Password updated. Please sign in with your new password.");
      router.replace("/admin/login?message=Password+updated.+Please+sign+in.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-6">
      <form onSubmit={onSubmit} className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Set New Password</h1>
        <p className="mt-2 text-sm text-slate-600">
          Use a strong password with at least 12 characters, uppercase, lowercase, and a number.
        </p>

        {checking ? <p className="mt-4 text-sm text-slate-600">Validating reset session...</p> : null}
        {error ? <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
        {message ? <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}

        <label className="mt-6 block text-sm font-medium text-slate-700">
          New password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600"
            required
            disabled={!allowed || checking}
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Confirm new password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600"
            required
            disabled={!allowed || checking}
          />
        </label>

        <button
          type="submit"
          disabled={!allowed || checking || loading}
          className="mt-6 w-full rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update password"}
        </button>

        <div className="mt-4 text-center">
          <Link href="/admin/forgot-password" className="text-xs font-medium text-emerald-700 hover:text-emerald-800">
            Request another reset link
          </Link>
        </div>
      </form>
    </main>
  );
}
