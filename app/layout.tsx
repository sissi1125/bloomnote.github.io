import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, Lexend_Deca } from 'next/font/google'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bloomnote',
  description: 'Where every note blooms',
  icons: {
    icon: '/favicon.ico?v=2',
    shortcut: '/favicon.ico?v=2',
    apple: '/images/appIcon.png?v=2',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sourceSerif.variable} ${lexendDeca.variable} overflow-x-hidden`}>
        <div className="w-full max-w-[100vw] mx-auto overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}

