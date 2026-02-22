"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BlogItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  readingTime?: number;
  featuredImageUrl?: string;
  categories?: { title?: string; slug?: string }[];
};

function formatDate(input?: string) {
  if (!input) return "-";
  return new Date(input).toLocaleDateString();
}

function getReadingTime(post: BlogItem) {
  return post.readingTime && post.readingTime > 0 ? post.readingTime : 5;
}

export default function BlogListClient({ posts }: { posts: BlogItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => {
      post.categories?.forEach((cat) => {
        if (cat?.title) set.add(cat.title);
      });
    });
    return ["All", ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.categories?.some((cat) => cat.title === activeCategory));
  }, [activeCategory, posts]);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
      <div className="rounded-3xl bg-gradient-to-r from-[#0f2f1f] via-[#165029] to-[#1d6b3b] p-8 text-white shadow-lg lg:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-white/80">Insights</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight lg:text-5xl">Our Blogs</h1>
        <p className="mt-4 max-w-2xl text-sm text-white/85 lg:text-base">
          Market intelligence, procurement playbooks, and execution-focused guidance across copper, logistics, and industrial supply operations.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeCategory === category
                ? "bg-[#165029] text-white"
                : "border border-[#d6e2da] bg-white text-[#1a3528] hover:border-[#165029]/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed p-8 text-center text-slate-600">No blogs available for this category.</div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post._id} className="group">
              <article className="h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="relative h-56 w-full bg-slate-100">
                  {post.featuredImageUrl ? (
                    <Image
                      src={post.featuredImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
                <div className="p-5">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {(post.categories || []).slice(0, 1).map((cat) => (
                      <span key={`${post._id}-${cat.slug || cat.title}`} className="rounded-full bg-[#eff7f2] px-3 py-1 text-xs font-medium text-[#165029]">
                        {cat.title}
                      </span>
                    ))}
                  </div>
                  <h2 className="line-clamp-2 text-xl font-semibold text-[#0f261b]">{post.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm text-slate-600">{post.excerpt || "Read more..."}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{getReadingTime(post)} min read</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
