"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function NewsletterPage() {
  const [subscribed, setSubscribed] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const supabase = createSupabaseBrowserClient();
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data } = await supabase.from("newsletter_preferences").select("subscribed").eq("user_id", userData.user.id).single();
      if (data) setSubscribed(!!data.subscribed);
    })();
  }, []);

  async function save() {
    const supabase = createSupabaseBrowserClient();
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return;
    const { error } = await supabase.from("newsletter_preferences").upsert({ user_id: userData.user.id, subscribed, topics: [] });
    setStatus(error ? error.message : "Preferences updated");
  }

  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">Newsletter Preferences</h1>
      <label className="mt-6 flex items-center gap-3">
        <input type="checkbox" checked={subscribed} onChange={(e) => setSubscribed(e.target.checked)} />
        <span>Subscribe to updates</span>
      </label>
      <button className="mt-4 h-11 rounded bg-[#165029] px-5 text-white" onClick={save}>Save</button>
      {status ? <p className="mt-3 text-sm">{status}</p> : null}
    </section>
  );
}
