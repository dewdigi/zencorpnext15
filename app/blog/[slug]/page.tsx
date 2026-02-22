import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CommentForm from "@/app/components/blog/CommentForm";
import { getPostBySlug, getPosts } from "@/lib/sanity/fetch";

type Params = { params: Promise<{ slug: string }> };

function formatDate(input?: string) {
  if (!input) return "-";
  return new Date(input).toLocaleDateString();
}

function readingTime(post: { readingTime?: number; body?: unknown[] }) {
  if (post.readingTime && post.readingTime > 0) return post.readingTime;
  const estimatedWords = Array.isArray(post.body) ? post.body.length * 120 : 900;
  return Math.max(3, Math.ceil(estimatedWords / 220));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Blog Not Found | Zencorp" };
  }

  const title = post.seo?.metaTitle || `${post.title} | Zencorp Blog`;
  const description = post.seo?.metaDescription || post.excerpt || "Zencorp insights";

  return {
    title,
    description,
    alternates: post.seo?.canonicalUrl ? { canonical: post.seo.canonicalUrl } : undefined,
    robots: post.seo?.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      images: post.featuredImageUrl ? [post.featuredImageUrl] : undefined,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getPosts();
  const categorySlugs = new Set((post.categories || []).map((c) => c.slug));
  const related = allPosts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.categories?.some((cat) => cat.slug && categorySlugs.has(cat.slug)))
    .slice(0, 3);

  const relatedFallback = related.length > 0 ? related : allPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-28 lg:px-10">
        <article className="overflow-hidden rounded-3xl border bg-white shadow-sm">
          <header className="p-6 lg:p-10">
            <div className="mb-3 flex flex-wrap gap-2">
              {(post.categories || []).map((cat) => (
                <span key={cat.slug || cat.title} className="rounded-full bg-[#eef7f2] px-3 py-1 text-xs font-medium text-[#165029]">
                  {cat.title}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-[#10261c] lg:text-4xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{formatDate(post.publishedAt)}</span>
              <span>{readingTime(post)} min read</span>
            </div>
          </header>

          {post.featuredImageUrl ? (
            <div className="relative h-[280px] w-full lg:h-[420px]">
              <Image src={post.featuredImageUrl} alt={post.title} fill className="object-cover" />
            </div>
          ) : null}

          <div className="p-6 lg:p-10">
            <div className="prose max-w-none prose-headings:text-[#10261c] prose-a:text-[#165029] prose-li:marker:text-[#165029]">
              <PortableText
                value={(post.body || []) as never}
                components={{
                  block: {
                    h2: ({ children }) => <h2 className="mt-8 text-2xl font-semibold">{children}</h2>,
                    h3: ({ children }) => <h3 className="mt-6 text-xl font-semibold">{children}</h3>,
                    normal: ({ children }) => <p className="leading-8 text-slate-700">{children}</p>,
                    blockquote: ({ children }) => <blockquote className="border-l-4 border-[#165029] pl-4 italic text-slate-600">{children}</blockquote>,
                  },
                }}
              />
            </div>

            {(post.tags || []).length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {(post.tags || []).map((tag) => (
                  <span key={tag.slug || tag.title} className="rounded-full border border-[#d7e4dc] px-3 py-1 text-xs text-[#3a5448]">
                    #{tag.title}
                  </span>
                ))}
              </div>
            ) : null}

            <CommentForm slug={slug} />
          </div>
        </article>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#10261c]">Related Posts</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedFallback.map((item) => (
              <Link key={item._id} href={`/blog/${item.slug}`} className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
                {item.featuredImageUrl ? (
                  <div className="relative h-40 w-full">
                    <Image src={item.featuredImageUrl} alt={item.title} fill className="object-cover" />
                  </div>
                ) : null}
                <div className="p-4">
                  <h3 className="line-clamp-2 text-base font-semibold text-[#10261c]">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{formatDate(item.publishedAt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
