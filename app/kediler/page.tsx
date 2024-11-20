import React from 'react'
import PhotoGrid from '@/app/components/PhotoGrid'
import { catImages } from '@/app/lib/cats'
import { getTexts } from '@/app/lib/texts'

export default async function CatsPage() {
  const texts = await getTexts('cats')

  return (
    <PhotoGrid 
      title={texts.title}
      description={texts.description}
      images={catImages}
      emoji={texts.emoji}
    />
  )
} 