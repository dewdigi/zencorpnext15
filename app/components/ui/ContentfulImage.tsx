import React from 'react';
import Image, { ImageProps } from 'next/image';

const ContentfulImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  const absoluteSrc =
    typeof src === 'string' && src.startsWith('//') ? `https:${src}` : src;

  return <Image {...props} src={absoluteSrc} alt={alt || ''} />;
};

export default ContentfulImage;
