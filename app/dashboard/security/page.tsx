"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function SecurityPage() {
  async function sendReset() {
    const supabase = createSupabaseBrowserClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user?.email) return;
    await supabase.auth.resetPasswordForEmail(data.user.email);
    alert("Password reset email sent.");
  }

  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">Security</h1>
      <p className="mt-2 text-sm text-slate-600">Use this to trigger a password reset email.</p>
      <button className="mt-4 h-11 rounded bg-[#165029] px-5 text-white" onClick={sendReset}>Send reset email</button>
    </section>
  );
}
