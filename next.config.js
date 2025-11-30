/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // global fix for Hostinger
    // OR if you want optimization:
  },
};

module.exports = nextConfig;
