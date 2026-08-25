import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages && {
    basePath: '/docpartz-website',
    assetPrefix: '/docpartz-website',
  }),
};

export default nextConfig;
