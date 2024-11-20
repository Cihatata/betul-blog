import React from 'react'
import PhotoGrid from '@/app/components/PhotoGrid'
import { galleryImages } from '@/app/lib/gallery'
import { getTexts } from '@/app/lib/texts'

export default async function GalleryPage() {
  const texts = await getTexts('gallery')

  return (
    <PhotoGrid 
      title={texts.title}
      description={texts.description}
      images={galleryImages}
      emoji={texts.emoji}
    />
  )
} 