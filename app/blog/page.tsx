"use client";

import { useQuery } from "@apollo/client";
import { GET_BLOG_POSTS } from "@/graphql/queries";
import Link from "next/link";

const BlogPage = () => {
  const { data, loading, error } = useQuery(GET_BLOG_POSTS, {
    variables: { preview: false, limit: 10 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {data.pageBlogPostCollection.items.map((post: any) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <img
              src={post.featuredImage.url}
              alt={post.featuredImage.description}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-600">
                {new Date(post.publishedDate).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-800">{post.shortDescription}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
