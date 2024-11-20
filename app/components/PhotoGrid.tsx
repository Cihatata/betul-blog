'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { GalleryImage } from '@/app/lib/gallery'
import ImageModal from './ImageModal'
import WalkingCat from './WalkingCat'

interface PhotoGridProps {
  title: string;
  description: string;
  images: GalleryImage[];
  emoji: string;
}

export default function PhotoGrid({ title, description, images, emoji }: PhotoGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="container-custom py-12">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="heading mb-0">{title}</h1>
          <span className="text-2xl" role="img" aria-label="emoji">{emoji}</span>
        </div>

        <div className="mb-12 prose prose-orange">
          <p className="text-gray-600 italic">
            {description}
          </p>
        </div>

      <WalkingCat />


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
              </div>
              {image.description && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  )
} 