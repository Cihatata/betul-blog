'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { GalleryImage } from '@/app/lib/gallery'

import 'swiper/css'

interface GallerySliderProps {
  images: GalleryImage[]
}

export default function GallerySlider({ images }: GallerySliderProps) {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Fotoğraflarım</h2>
        <Link 
          href="/galeri" 
          className="text-sm text-primary hover:text-primary-light transition-colors"
        >
          Tümünü Gör →
        </Link>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative group overflow-hidden rounded-lg">
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
} 