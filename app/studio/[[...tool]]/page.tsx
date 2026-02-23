import Link from "next/link";

export default function StudioPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold">Sanity Studio</h1>
      <p className="mt-4 text-slate-600">
        Studio schema is configured in this repository (`sanity.config.ts`, `sanity/schemaTypes/*`).
        Run <code className="rounded bg-slate-100 px-2 py-1">npm run studio</code> to open Sanity Studio locally.
      </p>
      <p className="mt-3 text-slate-600">
        You can also manage content from the Sanity project dashboard.
      </p>
      <Link href="/admin" className="mt-6 inline-block rounded border px-4 py-2">
        Back to Admin
      </Link>
    </main>
  );
}
