'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getTexts } from '@/app/lib/texts'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary font-medium' : 'text-gray-600'
  }

  // Not: Client component'te async kullanamayacağımız için
  // navigation.json'daki menü yapısını direkt import ediyoruz
  const navigation = {
    "menu": [
      {
        "title": "Ana Sayfa",
        "path": "/"
      },
      {
        "title": "Blog",
        "path": "/blog"
      },
      {
        "title": "Galeri",
        "path": "/galeri"
      },
      {
        "title": "Kediler",
        "path": "/kediler"
      },
      {
        "title": "Kitaplarım",
        "path": "/kitaplarim"
      }
    ]
  }

  return (
    <div className="fixed top-0 w-full flex justify-center pt-4 z-50">
      <nav className="bg-white/80 backdrop-blur-sm border border-primary rounded-full px-6 py-2">
        <div className="flex items-center space-x-8">
          {navigation.menu.map((item) => (
            <Link 
              key={item.path}
              href={item.path} 
              className={`${isActive(item.path)} hover:text-primary transition-colors text-sm`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
} 