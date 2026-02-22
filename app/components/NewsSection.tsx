"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type LatestPost = {
  slug: string;
  title: string;
  publishedAt?: string;
  imageUrl?: string | null;
};

const NewsSection = () => {
  const [blogs, setBlogs] = useState<LatestPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/blog/latest");
        const data = await response.json();
        if (!response.ok) {
          setError(data.error || "Failed to load news");
          setLoading(false);
          return;
        }
        setBlogs(data.items || []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load news");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading latest news...</div>;
  if (error) return <div>Error loading news: {error}</div>;
  if (blogs.length === 0) return <div>No blogs available</div>;

  return (
    <div className="mx-4 my-24 flex flex-col gap-8 rounded-3xl bg-white p-8 drop-shadow-2xl dark:text-gray-800 lg:mx-28">
      <h3 className="text-4xl font-normal">
        Latest <span className="text-zencorp-green underline">News</span> from Zencorp
      </h3>
      <div className="flex flex-col gap-12 md:flex-row">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="flex w-full flex-col items-center justify-center gap-4 md:m-2 md:w-2/6 md:p-2"
          >
            {blog.imageUrl ? (
              <Image className="rounded-xl" src={blog.imageUrl} width={350} height={283} alt={blog.title} />
            ) : null}
            <div className="mb-4 flex flex-row flex-wrap items-center justify-between">
              <button
                type="button"
                className="me-2 mb-2 rounded-xl border border-[#5AB778] bg-[#F6FFF9] px-5 py-2.5 text-xs font-medium text-[#5AB778]"
              >
                ARTICLES
              </button>
              <p className="text-xs">{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : "-"}</p>
            </div>
            <h4>{blog.title}</h4>
            <span className="text-xs text-Primary-1/80 hover:text-gray-600">Read More</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
