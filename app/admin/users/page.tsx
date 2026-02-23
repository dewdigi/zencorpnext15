"use client";

import { useEffect, useState } from "react";

type AdminUser = { id: string; email: string; role: string | null };

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to load users");
        return;
      }
      setUsers(data.items || []);
    })();
  }, []);

  async function updateRole(id: string, role: string) {
    await fetch(`/api/admin/users/${id}/role`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));
  }

  return (
    <section className="rounded-2xl border p-6">
      <h1 className="text-2xl font-semibold">Users</h1>
      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      <div className="mt-6 space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col gap-2 rounded border p-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">{user.email}</p>
              <p className="text-xs text-slate-500">{user.id}</p>
            </div>
            <select className="h-10 rounded border px-3" value={user.role || "support"} onChange={(e) => updateRole(user.id, e.target.value)}>
              <option value="super_admin">super_admin</option>
              <option value="editor">editor</option>
              <option value="support">support</option>
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}
