"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type Profile = { full_name: string | null; phone: string | null; company: string | null };

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({ full_name: "", phone: "", company: "" });
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const supabase = createSupabaseBrowserClient();
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data } = await supabase.from("profiles").select("full_name,phone,company").eq("id", userData.user.id).single();
      if (data) setProfile(data);
    })();
  }, []);

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createSupabaseBrowserClient();
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return;
    const { error } = await supabase.from("profiles").upsert({ id: userData.user.id, ...profile });
    setStatus(error ? error.message : "Profile updated");
  }

  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <form className="mt-6 grid gap-4" onSubmit={saveProfile}>
        <input className="h-11 rounded border px-3" placeholder="Full name" value={profile.full_name || ""} onChange={(e) => setProfile((p) => ({ ...p, full_name: e.target.value }))} />
        <input className="h-11 rounded border px-3" placeholder="Phone" value={profile.phone || ""} onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))} />
        <input className="h-11 rounded border px-3" placeholder="Company" value={profile.company || ""} onChange={(e) => setProfile((p) => ({ ...p, company: e.target.value }))} />
        <button className="h-11 rounded bg-[#165029] px-5 text-white" type="submit">Save</button>
      </form>
      {status ? <p className="mt-3 text-sm">{status}</p> : null}
    </section>
  );
}
