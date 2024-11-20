import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/app/lib/blog'

interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container-custom py-12">
      <h1 className="heading">Yazılarım</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.id}`} className="block space-y-1.5">
              <div className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h2 className="text-lg font-medium group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 