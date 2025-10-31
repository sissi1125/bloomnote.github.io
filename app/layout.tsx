import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bloomnote',
  description: 'Where every note blooms',
  icons: {
    icon: '/favicon.ico?v=2',
    shortcut: '/favicon.ico?v=2',
    apple: '/images/appIcon.png?v=2',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        <div className="w-full max-w-[100vw] mx-auto overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}

