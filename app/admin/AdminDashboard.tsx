"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type AdminUser = {
  id: string;
  email: string;
  createdAt?: string;
  lastSignInAt?: string;
  role: string;
  bannedUntil?: string | null;
};

type AdminBlog = {
  _id: string;
  title: string;
  slug: string;
  status: string;
  publishedAt?: string;
  _updatedAt?: string;
};

function formatDate(value?: string | null) {
  if (!value) return "-";
  return new Date(value).toLocaleString();
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"users" | "blogs">("users");
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("published");
  const [savingBlog, setSavingBlog] = useState(false);

  async function loadUsers() {
    setLoadingUsers(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/users", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load users");
      setUsers(data.users || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load users");
    } finally {
      setLoadingUsers(false);
    }
  }

  async function loadBlogs() {
    setLoadingBlogs(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/blogs", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load blogs");
      setBlogs(data.blogs || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load blogs");
    } finally {
      setLoadingBlogs(false);
    }
  }

  useEffect(() => {
    void loadUsers();
    void loadBlogs();
  }, []);

  async function onRoleChange(userId: string, role: "admin" | "user") {
    setError(null);
    const res = await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, role }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Failed to update role");
      return;
    }
    await loadUsers();
  }

  async function onDeleteUser(userId: string) {
    if (!confirm("Delete this user account? This cannot be undone.")) return;
    setError(null);
    const res = await fetch(`/api/admin/users/${userId}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Failed to delete user");
      return;
    }
    await loadUsers();
  }

  async function onCreateBlog() {
    setSavingBlog(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, excerpt, content, status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create blog");

      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setStatus("published");
      await loadBlogs();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create blog");
    } finally {
      setSavingBlog(false);
    }
  }

  async function onDeleteBlog(id: string) {
    if (!confirm("Delete this blog post?")) return;
    setError(null);
    const res = await fetch(`/api/admin/blogs/${encodeURIComponent(id)}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Failed to delete blog");
      return;
    }
    await loadBlogs();
  }

  async function onLogout() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  const userCount = useMemo(() => users.length, [users]);
  const blogCount = useMemo(() => blogs.length, [blogs]);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-slate-600">Supabase-backed admin for user and blog management.</p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Logout
        </button>
      </header>

      {error ? <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("users")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${activeTab === "users" ? "bg-emerald-700 text-white" : "border border-slate-300 text-slate-700"}`}
        >
          Users ({userCount})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("blogs")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${activeTab === "blogs" ? "bg-emerald-700 text-white" : "border border-slate-300 text-slate-700"}`}
        >
          Blogs ({blogCount})
        </button>
      </div>

      {activeTab === "users" ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          {loadingUsers ? (
            <p className="text-sm text-slate-600">Loading users...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="px-2 py-3">Email</th>
                    <th className="px-2 py-3">Role</th>
                    <th className="px-2 py-3">Created</th>
                    <th className="px-2 py-3">Last Sign In</th>
                    <th className="px-2 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-slate-100">
                      <td className="px-2 py-3">{user.email || user.id}</td>
                      <td className="px-2 py-3">
                        <select
                          value={user.role}
                          onChange={(e) => void onRoleChange(user.id, e.target.value as "admin" | "user")}
                          className="rounded border border-slate-300 px-2 py-1 text-sm"
                        >
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td className="px-2 py-3">{formatDate(user.createdAt)}</td>
                      <td className="px-2 py-3">{formatDate(user.lastSignInAt)}</td>
                      <td className="px-2 py-3">
                        <button
                          type="button"
                          onClick={() => void onDeleteUser(user.id)}
                          className="rounded border border-red-300 px-2 py-1 text-xs text-red-700 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ) : (
        <section className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Create Blog</h2>
            <div className="mt-4 grid gap-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Slug (optional)"
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Excerpt"
                className="min-h-20 rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Blog content"
                className="min-h-48 rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
              >
                <option value="published">published</option>
                <option value="draft">draft</option>
              </select>
              <button
                type="button"
                onClick={() => void onCreateBlog()}
                disabled={savingBlog}
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-60"
              >
                {savingBlog ? "Saving..." : "Create Blog"}
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Existing Blogs</h2>
            {loadingBlogs ? (
              <p className="mt-4 text-sm text-slate-600">Loading blogs...</p>
            ) : (
              <div className="mt-4 space-y-3">
                {blogs.map((blog) => (
                  <article key={blog._id} className="rounded-lg border border-slate-200 p-3">
                    <p className="font-medium text-slate-900">{blog.title}</p>
                    <p className="mt-1 text-xs text-slate-600">
                      /blog/{blog.slug} • {blog.status} • {formatDate(blog.publishedAt || blog._updatedAt)}
                    </p>
                    <button
                      type="button"
                      onClick={() => void onDeleteBlog(blog._id)}
                      className="mt-2 rounded border border-red-300 px-2 py-1 text-xs text-red-700 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
