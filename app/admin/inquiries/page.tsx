"use client";

import { useEffect, useState } from "react";

type Inquiry = { id: string; subject: string; status: string; email: string };

export default function AdminInquiriesPage() {
  const [items, setItems] = useState<Inquiry[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dashboard/inquiries?admin=1");
      const data = await res.json();
      setItems(data.items || []);
    })();
  }, []);

  async function setStatus(id: string, status: string) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">Inquiries</h1>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 rounded border p-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">{item.subject}</p>
              <p className="text-sm text-slate-500">{item.email}</p>
            </div>
            <select className="h-10 rounded border px-3" value={item.status} onChange={(e) => setStatus(item.id, e.target.value)}>
              <option value="new">new</option>
              <option value="in_progress">in_progress</option>
              <option value="resolved">resolved</option>
              <option value="closed">closed</option>
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}
