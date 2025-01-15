import React from 'react';
import PostCard from '@/app/components/posts/PostsCard'; // PostCard component
import { client } from '@/lib/contentful/client';

// Define the type for posts
type BlogPost = {
  sys: {
    id: string;
  };
  fields: {
    title: string; // Blog post title
    slug: string; // Slug for routing
    shortDescription?: string; // Short description
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    }; // Featured image
    publishedDate?: string; // Published date
  };
};

const PAGE_SIZE = 6; // Number of posts per page

// Fetch posts for a specific page
async function fetchPosts(page: number): Promise<{ posts: BlogPost[]; total: number }> {
  const skip = (page - 1) * PAGE_SIZE; // Skip posts based on the page number
  const response = await client.getEntries({
    content_type: 'pageBlogPost',
    order: '-fields.publishedDate',
    skip,
    limit: PAGE_SIZE,
  });

  return {
    posts: response.items as BlogPost[],
    total: response.total,
  };
}

const BlogPage: React.FC<{ searchParams: { page?: string } }> = async ({ searchParams }) => {
  const currentPage = parseInt(searchParams.page || '1', 10); // Default to page 1
  const { posts, total } = await fetchPosts(currentPage);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        {/* Previous Button */}
        {currentPage > 1 && (
          <a
            href={`/blog?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </a>
        )}

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <a
            key={index}
            href={`/blog?page=${index + 1}`}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </a>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <a
            href={`/blog?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
