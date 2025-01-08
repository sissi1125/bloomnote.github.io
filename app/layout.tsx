import type { Metadata } from 'next';
import './globals.css';

import { Merriweather } from 'next/font/google';
import localFont from 'next/font/local'

// const avenirNext = localFont({
//   src: [
//     {
//       path: '../../public/fonts/AvenirNextLTPro-MediumCn.woff',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-avenir-next', // 可选：用于 CSS 变量
// });

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
