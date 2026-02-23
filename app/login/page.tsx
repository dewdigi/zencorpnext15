"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createSupabaseBrowserClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    const redirect = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("redirect") : null;
    router.push(redirect || "/dashboard");
  }

  return (
    <main className="mx-auto max-w-md px-6 py-24">
      <h1 className="mb-6 text-3xl font-semibold">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4 rounded-2xl border p-6">
        <input className="h-11 w-full rounded border px-3" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="h-11 w-full rounded border px-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="h-11 rounded bg-[#165029] px-5 text-white" type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
      <p className="mt-4 text-sm">No account? <Link className="underline" href="/signup">Create one</Link></p>
    </main>
  );
}
