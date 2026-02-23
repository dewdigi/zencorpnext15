"use client";

import { useEffect, useState } from "react";

type Comment = { id: string; post_slug: string; content: string; status: string; author_name: string };

export default function AdminCommentsPage() {
  const [items, setItems] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/admin/comments");
      const data = await res.json();
      setItems(data.items || []);
    })();
  }, []);

  async function moderate(id: string, status: string) {
    await fetch(`/api/admin/comments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">Comments Moderation</h1>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded border p-3">
            <p className="font-medium">{item.author_name} on /blog/{item.post_slug}</p>
            <p className="mt-1 text-sm">{item.content}</p>
            <div className="mt-2 flex gap-2">
              <button className="rounded border px-2 py-1 text-sm" onClick={() => moderate(item.id, "approved")}>Approve</button>
              <button className="rounded border px-2 py-1 text-sm" onClick={() => moderate(item.id, "rejected")}>Reject</button>
              <button className="rounded border px-2 py-1 text-sm" onClick={() => moderate(item.id, "spam")}>Spam</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
