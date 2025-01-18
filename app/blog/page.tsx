"use client";

import { useQuery } from "@apollo/client";
import { GET_BLOG_POSTS } from "@/graphql/queries";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/app/types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  const { data, error, loading } = useQuery(GET_BLOG_POSTS, {
    variables: { preview: false },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div >
      <Navbar/>
    <div className="grid grid-cols-1 m-40 md:grid-cols-3 gap-6 p-4">
      {data.pageBlogPostCollection.items.map((post: BlogPost) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.description}
              width={400}
              height={200}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-600">
                {new Date(post.publishedDate).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-800 text-sm font-light dark:text-Primary-1/20">{post.shortDescription}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default BlogPage;
