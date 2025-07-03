/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/Portfolio.DesignSystem' : '',
  assetPrefix: isProd ? '/Portfolio.DesignSystem/' : '',
  images: { unoptimized: true },
  output: 'export'
};

module.exports = nextConfig;