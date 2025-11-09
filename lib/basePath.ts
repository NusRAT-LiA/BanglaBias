// Get the base path from Next.js config
// This works for both static export and regular builds
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/BanglaBias';

// Helper function to prefix paths with basePath
export function getAssetPath(path: string): string {
  // Remove leading slash if present, then add basePath
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}

