
// import React from 'react';
// impoSmartImageage, { ImageProps } from '@/components/SmartImage';
// import getConfig from 'next/config';
// interface SmartImageProps extends Omit<ImageProps, 'src'> {
//     src: string;
//     className?: string;
// }
// const SmartImage: React.FC<SmartImageProps> = ({ src, alt, width, height, className, ...props }) => {
    
//     //   const basePath = publicRuntimeConfig.basePath || '/amazon/makerspace-blr';
//     const basePath = '/amazon/makerspace-blr';
//     // Function to process the image path
//     const getProcessedPath = (path: string) => {
//         // If it's already an absolute URL, return as is
//         if (path.startsWith('http')) return path;
//         // If it's an SVG, use direct path
//         if (path.endsWith('.svg')) {
//             // Remove any leading slashes and combine with basePath
//             const cleanPath = path.replace(/^\/+/, '');
//             return `${basePath}/${cleanPath}`;
//         }
//         // For other images, ensure they're in the public folder path
//         const cleanPath = path.replace(/^\/+/, '');
//         return `${basePath}/public/${cleanPath}`;
//     };
//     const processedSrc = getProcessedPath(src);
//     // For SVGs, use regular img tag
//     if (src.endsWith('.svg')) {
//         return (
//             <img
//                 src={processedSrc}
//                 alt={alt}
//                 width={width}
//                 height={height}
//                 className={className}
//                 {...props}
//             />
//         );
//     }
//     // For other images, use Next.SmartImageage component
//     return (
//       SmartImageage
//             src={processedSrc}
//             alt={alt}
//             width={typeof width === 'number' ? width : 100}
//             height={typeof height === 'number' ? height : 100}
//             className={className}
//             {...props}
//         />
//     );
// };
// export default SmartImage;







import Image from 'next/image';
import { ImageProps } from 'next/image';
const BASE_URL = '/amazon/makerspace-blr';
const SmartImage = ({ src, ...props }: ImageProps) => {
  let processedSrc = src;
  if (typeof src === 'string') {
    processedSrc = src.startsWith('http') || src.startsWith(BASE_URL)
      ? src
      : `${BASE_URL}${src.startsWith('/') ? src : `/${src}`}`;
  }
  return <Image src={processedSrc} {...props} />;
};
export default SmartImage;

