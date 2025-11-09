/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  basePath: '/BanglaBias', // GitHub Pages base path
  assetPrefix: '/BanglaBias/', // GitHub Pages asset prefix
};

export default nextConfig;
