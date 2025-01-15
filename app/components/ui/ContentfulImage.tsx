import Image, { ImageProps } from 'next/image';

const ContentfulImage: React.FC<ImageProps> = (props) => {
  const { src, ...rest } = props;

  // Ensure the URL starts with "https://"
  const absoluteSrc = src.startsWith('//') ? `https:${src}` : src;

  return <Image {...rest} src={absoluteSrc} />;
};

export default ContentfulImage;
