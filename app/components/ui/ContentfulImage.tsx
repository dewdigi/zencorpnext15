import Image, { ImageProps } from 'next/image';

const ContentfulImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  const absoluteSrc = src.startsWith('//') ? `https:${src}` : src;

  return <Image {...props} src={absoluteSrc} alt={alt || ''} />;
};

export default ContentfulImage;