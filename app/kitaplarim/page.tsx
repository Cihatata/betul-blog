import React from 'react'
import Image from 'next/image'
import { getBooks } from '@/app/lib/books'
import { getTexts } from '@/app/lib/texts'
import StarRating from '@/app/components/StarRating'

export default async function BooksPage() {
  const books = await getBooks()
  const texts = await getTexts('books')

  return (
    <div className="container-custom py-12">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="heading mb-0">{texts.title}</h1>
        <span className="text-2xl" role="img" aria-label="books">{texts.emoji}</span>
      </div>

      <div className="mb-12 prose prose-orange">
        <p className="text-gray-600 italic">
          {texts.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <div 
            key={book.title} 
            className="bg-white flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-w-3 aspect-h-4 relative">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              />
            </div>
            <div className="p-4 h-full flex flex-col justify-between">
              <div className="space-y-2 mb-3">
                <h3 className="font-medium text-lg">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
                <StarRating rating={book.rating} />
                <p className="text-sm text-gray-600">{book.note}</p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  {new Date(book.finishDate).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} tarihinde bitirdim
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 