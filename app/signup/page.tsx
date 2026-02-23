"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const router = useRouter();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setNotice(null);
    const supabase = createSupabaseBrowserClient();
    const { error: authError } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    setNotice("Signup successful. Check your inbox to verify your email.");
    router.push("/login");
  }

  return (
    <main className="mx-auto max-w-md px-6 py-24">
      <h1 className="mb-6 text-3xl font-semibold">Create Account</h1>
      <form onSubmit={handleSignup} className="space-y-4 rounded-2xl border p-6">
        <input className="h-11 w-full rounded border px-3" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="h-11 w-full rounded border px-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
        <button className="h-11 rounded bg-[#165029] px-5 text-white" type="submit" disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {notice ? <p className="text-sm text-green-700">{notice}</p> : null}
      </form>
      <p className="mt-4 text-sm">Already have an account? <Link className="underline" href="/login">Sign in</Link></p>
    </main>
  );
}
