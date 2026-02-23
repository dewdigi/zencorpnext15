"use client";

import { useEffect, useState } from "react";

type Inquiry = { id: string; subject: string; status: string; created_at: string };

export default function DashboardInquiriesPage() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dashboard/inquiries");
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to load inquiries");
        return;
      }
      setItems(data.items || []);
    })();
  }, []);

  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">My Inquiries</h1>
      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="rounded border p-3">
            <p className="font-medium">{item.subject}</p>
            <p className="text-sm text-slate-600">Status: {item.status}</p>
            <p className="text-xs text-slate-500">{new Date(item.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
