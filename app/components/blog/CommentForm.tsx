"use client";

import { useState } from "react";

export default function CommentForm({ slug }: { slug: string }) {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function submitComment(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_slug: slug,
        author_name: authorName,
        content,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus(data.error || "Failed to submit comment");
      return;
    }
    setAuthorName("");
    setContent("");
    setStatus("Comment submitted for moderation.");
  }

  return (
    <form onSubmit={submitComment} className="mt-10 rounded-2xl border p-5">
      <h3 className="text-xl font-semibold">Leave a Comment</h3>
      <input
        className="mt-4 h-11 w-full rounded border px-3"
        placeholder="Your name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        required
      />
      <textarea
        className="mt-3 h-28 w-full rounded border px-3 py-2"
        placeholder="Your comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button className="mt-3 rounded bg-[#165029] px-4 py-2 text-white" type="submit">
        Submit
      </button>
      {status ? <p className="mt-3 text-sm">{status}</p> : null}
    </form>
  );
}
