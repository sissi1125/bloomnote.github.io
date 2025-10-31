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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}

