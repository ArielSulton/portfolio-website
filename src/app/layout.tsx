import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import Chatbot from '@/components/sections/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mochammad Ariel Sulton',
  description: 'Personal Portfolio Website',
  openGraph: {
    title: 'Mochammad Ariel Sulton',
    description: 'Personal Portfolio Website',
    url: 'https://arielsulton.vercel.com',
    images: [
      {
        url: '/avatar/s-logo.png',
        width: 256,
        height: 256,
        alt: 'Logo',
      },
    ],
    siteName: 'Mochammad Ariel Sulton',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mochammad Ariel Sulton',
    description: 'Personal Portfolio Website',
    images: [
      '/avatar/s-logo.png',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  )
}