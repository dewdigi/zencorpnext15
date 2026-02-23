import { NextResponse } from "next/server";
import { getLatestPosts } from "@/lib/sanity/fetch";

export async function GET() {
  try {
    const posts = await getLatestPosts(3);

    const items = posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      publishedAt: post.publishedAt,
      imageUrl: post.featuredImageUrl || null,
    }));

    return NextResponse.json({ items });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load latest blog posts.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
