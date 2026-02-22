import { isSanityConfigured, sanityClient } from "./client";
import { LATEST_POSTS_QUERY, POST_BY_SLUG_QUERY, POSTS_QUERY } from "./queries";

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  readingTime?: number;
  featuredImageUrl?: string;
  author?: { name?: string; slug?: string; image?: unknown };
  categories?: { title?: string; slug?: string }[];
  tags?: { title?: string; slug?: string }[];
  seo?: { metaTitle?: string; metaDescription?: string; canonicalUrl?: string; noindex?: boolean };
  body?: unknown[];
  relatedPosts?: { _id: string; title: string; slug: string; featuredImageUrl?: string }[];
};

export async function getPosts() {
  if (!isSanityConfigured) return [];
  try {
    return await sanityClient.fetch<SanityPost[]>(POSTS_QUERY);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug });
  } catch {
    return null;
  }
}

export async function getLatestPosts(limit = 3) {
  if (!isSanityConfigured) return [];
  try {
    return await sanityClient.fetch<SanityPost[]>(LATEST_POSTS_QUERY, { limit });
  } catch {
    return [];
  }
}

export function imageUrlFromSanityImage(image?: unknown): string | null {
  if (typeof image === "string") return image;
  return null;
}
