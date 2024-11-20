import React from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './styles/globals.css'
import 'swiper/css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Türkçe Öğreniyorum',
  description: 'Yabancılara Türkçe öğretimi üzerine yazılar ve kaynaklar',
  keywords: 'türkçe öğretimi, yabancılara türkçe, türkçe eğitimi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={roboto.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 