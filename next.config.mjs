/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "la-fetch.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
