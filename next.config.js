/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: { unoptimized: true, domains: ['https://asset-sh.xverse.cn'] },
  // i18n: {
  //   locales: ['zh-CN', 'en'],
  //   defaultLocale: 'zh-CN', // 默认语言
  // },
};

module.exports = nextConfig;
