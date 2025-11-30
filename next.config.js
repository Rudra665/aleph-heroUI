/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // global fix for Hostinger
    // OR if you want optimization:
  },
};

module.exports = nextConfig;
