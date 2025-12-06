// Get the base path from Next.js config
// This works for both static export and regular builds
// In dev mode, this will be empty string; in production, it will be '/BanglaBias'
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : '/BanglaBias';

// Helper function to prefix paths with basePath
export function getAssetPath(path: string): string {
  // Remove leading slash if present, then add basePath
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // If basePath is empty (dev mode), just return the clean path
  if (!basePath) {
    return `/${cleanPath}`;
  }
  return `${basePath}/${cleanPath}`;
}

