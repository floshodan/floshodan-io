import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

export default withContentlayer(nextConfig);
