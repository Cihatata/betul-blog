import React from 'react'
import Link from 'next/link'
import { getPostData, getAllPostIds } from '@/app/lib/blog'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id)

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-primary hover:text-primary-light transition-colors"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Yazılarıma Dön
        </Link>
      </div>

      <article>
        <div className="text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <div 
          className="prose prose-orange max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </article>
    </div>
  )
} 