import React from 'react';
import PostCard from '@/app/components/posts/PostsCard';
import { client } from '@/lib/contentful/client';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PAGE_SIZE = 6; // Number of posts per page

// Fetch posts for a specific page
async function fetchPosts(page: number) {
  const skip = (page - 1) * PAGE_SIZE; // Skip posts based on the page number
  const response = await client.getEntries({
    content_type: 'pageBlogPost',
    order: '-fields.publishedDate',
    skip, // Start fetching posts after skipping these many
    limit: PAGE_SIZE, // Fetch only PAGE_SIZE posts
  });

  return {
    posts: response.items,
    total: response.total, // Total number of posts
  };
}

const BlogPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = parseInt(searchParams.page || '1', 10); // Default to page 1
  const { posts, total } = await fetchPosts(currentPage);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (

    <div>
      <Navbar/>
    <div className="container mx-auto mt-40 p-6">

      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </Link>
        )}

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index}
            href={`/blog?page=${index + 1}`}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white dark:text-black'
                : 'bg-gray-200 hover:bg-gray-300 dark:text-black'
            }`}
          >
            {index + 1}
          </Link>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200  rounded hover:bg-gray-300 dark:text-black"
          >
            Next
          </Link>
        )}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default BlogPage;
