'use client'
import React from 'react'
import Image from 'next/image'
import { GalleryImage } from '@/app/lib/gallery'

interface ImageModalProps {
  image: GalleryImage;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full aspect-w-3 aspect-h-4 md:aspect-w-4 md:aspect-h-3"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        {image.description && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 rounded-b-lg">
            <p className="text-white text-center">{image.description}</p>
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>
  )
} 