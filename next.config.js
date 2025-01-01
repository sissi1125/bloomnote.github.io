/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: '/bloomnote.github.io',
  // i18n: {
  //   locales: ['zh-CN', 'en'],
  //   defaultLocale: 'zh-CN', // 默认语言
  // },
};

module.exports = nextConfig;
