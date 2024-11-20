import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { catImages } from '@/app/lib/cats'

export default function RecentCats() {
  const recentCats = catImages.slice(0, 3)

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Kediler</h2>
        <Link 
        href="/kediler" 
        className="text-sm text-primary hover:text-primary-light transition-colors"
      >
        Tüm kedileri gör →
      </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {recentCats.map((cat) => (
          <div 
            key={cat.id} 
            className="relative group overflow-hidden rounded-lg"
          >
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src={cat.src}
                alt={cat.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 