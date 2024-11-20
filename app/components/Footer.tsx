import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Türkçe Öğreniyorum. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/blog" className="link-hover text-sm">Blog</Link>
            <Link href="/galeri" className="link-hover text-sm">Galeri</Link>
            <Link href="/hakkimda" className="link-hover text-sm">Hakkımda</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 