import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bloomnote',
  description: 'Where every note blooms',
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

