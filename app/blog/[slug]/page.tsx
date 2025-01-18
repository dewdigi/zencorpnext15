"use client";

import { useQuery } from "@apollo/client";
import { GET_BLOG_POST_BY_SLUG } from "@/graphql/queries";
import { useParams } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const BlogPostPage = () => {
  const { slug } = useParams(); // Dynamically get slug from URL
  const { data, loading, error } = useQuery(GET_BLOG_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.pageBlogPostCollection.items[0];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">
        Published on: {new Date(post.publishedDate).toLocaleDateString()}
      </p>
      <Image
  src={post.featuredImage.url}
  alt={post.featuredImage.description}
  width={800} // Set an appropriate width
  height={400} // Set an appropriate height
  className="rounded-lg my-4"
/>
      <div className="prose">
        {documentToReactComponents(post.content.json)}
      </div>
    </div>
  );
};

export default BlogPostPage;
