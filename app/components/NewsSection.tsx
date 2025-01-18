"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const GET_LATEST_BLOGS = gql`
  query GetLatestBlogs {
    pageBlogPostCollection(limit: 3, order: publishedDate_DESC) {
      items {
        slug
        title
        featuredImage {
          url
        }
        publishedDate
      }
    }
  }
`;

const NewsSection = () => {
  const { data, loading, error } = useQuery(GET_LATEST_BLOGS);

  if (loading) {
    return <div>Loading latest news...</div>;
  }

  if (error) {
    return <div>Error loading news: {error.message}</div>;
  }

  // Ensure that data is typed correctly
  const blogs: Blog[] = data.pageBlogPostCollection.items;

  return (
    <div className="flex flex-col gap-8 mx-4 lg:mx-28 my-24 p-8 bg-white rounded-3xl drop-shadow-2xl dark:text-gray-800">
      <h3 className="font-normal text-4xl">
        Latest <span className="text-zencorp-green underline">News</span> from Zencorp
      </h3>
      <div className="flex flex-col md:flex-row gap-12">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="flex flex-col gap-4 items-center justify-center w-full md:w-2/6 md:m-2 md:p-2"
          >
            <Image
              className="rounded-xl"
              src={blog.featuredImage.url}
              width={350}
              height={283}
              alt={blog.title}
            />
            <div className="flex flex-row flex-wrap mb-4 justify-between items-center">
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-[#5AB778] focus:outline-none bg-[#F6FFF9] rounded-xl border border-[#5AB778] hover:bg-gray-100 hover:text-emerald-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                ARTICLES
              </button>
              <p className="text-xs">
                {new Date(blog.publishedDate).toLocaleDateString()}
              </p>
            </div>
            <h4>{blog.title}</h4>
            <Link href={`/blog/${blog.slug}`}>
              <span className="text-xs text-Primary-1/80 hover:text-gray-600">
                Read More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
