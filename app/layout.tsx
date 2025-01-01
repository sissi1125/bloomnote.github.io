import type { Metadata } from 'next';
import Script from 'next/script';
import { Spinnaker } from 'next/font/google';
import './globals.css';

const spinnaker = Spinnaker({ weight: '400', subsets: ['latin'] });

// TODO SEO配置
// refer to https://nextjs.org/docs/app/building-your-application/deploying/production-checklist#metadata-and-seo
export const metadata: Metadata = {
  title: 'MindtopiaVR',
  description: '',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script async src="https://static.xverse.cn/npm/hls.js@1.2.8/dist/hls.min.js"></Script>
      <body className={spinnaker.className}>{children}</body>
    </html>
  );
}
