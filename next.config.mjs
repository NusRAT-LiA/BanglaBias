/** @type {import('next').NextConfig} */
const basePath = '/BanglaBias';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  basePath: basePath, // GitHub Pages base path
  assetPrefix: basePath, // GitHub Pages asset prefix
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
