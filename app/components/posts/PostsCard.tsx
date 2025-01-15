import Link from 'next/link';
import ContentfulImage from '../ui/ContentfulImage';

type PostCardProps = {
  post: {
    fields: {
      internalName: string;
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
      publishedDate?: string;
    };
  };
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const {
    internalName,
    slug,
    featuredImage,
    author,
    publishedDate,
  } = post.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`} aria-label={internalName}>
        {/* Featured Image */}
        <div className="mb-2">
          {featuredImage ? (
            <ContentfulImage
              alt={`Cover Image for ${internalName}`}
              src={featuredImage.fields.file.url}
              width={featuredImage.fields.file.details.image.width}
              height={featuredImage.fields.file.details.image.height}
            />
          ) : (
            <div className="bg-gray-300 h-48 flex items-center justify-center">
              <span className="text-gray-500 text-sm">No Image Available</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{internalName}</h3>
          <div className="text-sm text-gray-400 mb-4">
            {publishedDate
              ? new Date(publishedDate).toLocaleDateString()
              : 'Unknown Date'}
          </div>
          {author && (
            <div className="flex items-center gap-3">
              {author.fields.picture?.fields.file.url && (
                <ContentfulImage
                  src={author.fields.picture.fields.file.url}
                  alt={author.fields.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span className="text-sm">{author.fields.name}</span>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
