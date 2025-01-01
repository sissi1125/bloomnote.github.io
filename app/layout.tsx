import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

import { Merriweather } from 'next/font/google';

const openSans = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// TODO SEO配置
// refer to https://nextjs.org/docs/app/building-your-application/deploying/production-checklist#metadata-and-seo
export const metadata: Metadata = {
  title: 'Bloomnote',
  description: '',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
