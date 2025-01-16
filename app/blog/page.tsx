import React from 'react';
import PostCard from '@/app/components/posts/PostsCard';
import { client } from '@/lib/contentful/client';

type BlogPost = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    shortDescription?: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    publishedDate?: string;
  };
};

// Fetch all posts
async function fetchPosts(): Promise<BlogPost[]> {
  const response = await client.getEntries({
    content_type: 'pageBlogPost',
    order: '-fields.publishedDate', // Order by the most recent
  });

  return response.items as BlogPost[];
}

const BlogPage: React.FC = async () => {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
