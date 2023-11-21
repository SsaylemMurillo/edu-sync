import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// font of the app
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduSync',
  description: 'EduSync App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
