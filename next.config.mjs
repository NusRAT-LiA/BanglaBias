/** @type {import('next').NextConfig} */
const basePath = '/BanglaBias';
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Only use static export for production builds (GitHub Pages)
  ...(isProduction && { output: 'export' }),
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  // Only apply basePath in production builds, not in development
  ...(isProduction && {
    basePath: basePath, // GitHub Pages base path
    assetPrefix: basePath, // GitHub Pages asset prefix
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? basePath : '',
  },
};

export default nextConfig;
