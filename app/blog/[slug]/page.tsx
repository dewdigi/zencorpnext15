import { client } from '@/lib/contentful/client';
import ContentfulImage from '@/app/components/ui/ContentfulImage';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import Navbar from '@/app/components/Navbar';

type BlogPost = {
  fields: {
    title: string;
    slug: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    shortDescription?: string;
    content: Document;
    publishedDate?: string;
    author?: {
      fields: {
        name: string;
        picture?: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    };
    RelatedBlogPosts?: Array<{
      fields: {
        title: string;
        slug: string;
      };
    }>;
  };
};

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await client.getEntries({
    content_type: 'pageBlogPost',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items.length > 0 ? (response.items[0] as BlogPost) : null;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    featuredImage,
    shortDescription,
    content,
    publishedDate,
    author,
    RelatedBlogPosts,
  } = post.fields;

  return (
    <div>
      <Navbar />
      <div className="container p-6 mx-20 my-40">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500">
          Published on:{' '}
          {publishedDate
            ? new Date(publishedDate).toLocaleDateString()
            : 'Unknown Date'}
        </p>
        {author && (
          <div className="flex items-center gap-2 mt-4">
            {author.fields.picture?.fields.file.url && (
              <ContentfulImage
                src={author.fields.picture.fields.file.url}
                alt={author.fields.name || 'Author picture'}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <span className="text-sm">{author.fields.name}</span>
          </div>
        )}
        {featuredImage && (
          <div className="mt-6">
            <ContentfulImage
              src={featuredImage.fields.file.url}
              alt={`Cover Image for ${title}`}
              width={featuredImage.fields.file.details.image.width}
              height={featuredImage.fields.file.details.image.height}
              className="rounded-md"
            />
          </div>
        )}
        {shortDescription && (
          <p className="mt-4 text-lg text-gray-700">{shortDescription}</p>
        )}
        <div className="mt-8">
          {content && documentToReactComponents(content)}
        </div>
        {RelatedBlogPosts && RelatedBlogPosts.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {RelatedBlogPosts.map((relatedPost, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 rounded-md shadow-md"
                >
                  <a
                    href={`/blog/${relatedPost.fields.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {relatedPost.fields.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Updated generateStaticParams with proper typing
export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: 'pageBlogPost' });

  return response.items.map((post: { fields: { slug: string } }) => ({
    slug: post.fields.slug,
  }));
}
