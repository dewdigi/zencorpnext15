"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to request password reset.");
        return;
      }

      setMessage(data.message || "If an account exists, a reset link has been sent.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to request password reset.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-6">
      <form onSubmit={onSubmit} className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Reset Admin Password</h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter your admin email and we will send a recovery link if the account is eligible.
        </p>

        <label className="mt-6 block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600"
            required
          />
        </label>

        {error ? <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
        {message ? <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send reset link"}
        </button>

        <div className="mt-4 text-center">
          <Link href="/admin/login" className="text-xs font-medium text-emerald-700 hover:text-emerald-800">
            Back to login
          </Link>
        </div>
      </form>
    </main>
  );
}
