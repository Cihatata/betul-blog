import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/app/lib/blog'
import { galleryImages } from '@/app/lib/gallery'
import { getBooks } from '@/app/lib/books'
import { getTexts } from '@/app/lib/texts'
import GallerySlider from './components/GallerySlider'
import RecentCats from './components/RecentCats'

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 2)
  const recentImages = galleryImages.slice(0, 8)
  const texts = await getTexts('home')

  return (
    <>
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-[2fr,1fr] gap-12 mb-16">
          {/* Sol Taraf - Hakkımda */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/profile.jpeg"
                alt={texts.profile.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{texts.profile.name}</h1>
                <p className="text-gray-600">{texts.profile.title}</p>
              </div>
            </div>
            
            <div className="prose prose-orange">
              {texts.profile.bio.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="flex space-x-4">
              <a href="https://instagram.com/betul_ogretmen" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-primary"
              >
                {texts.social.instagram}
              </a>
              <a href="mailto:betul@example.com" 
                 className="text-gray-600 hover:text-primary"
              >
                {texts.social.email}
              </a>
            </div>
          </div>

          {/* Sağ Taraf - Son Yazılar ve Kediler */}
          <div>
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{texts.sections.recentPosts.title}</h2>
                <Link 
                  href="/blog" 
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  {texts.sections.recentPosts.viewAll}
                </Link>
              </div>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article key={post.id} className="group">
                    <Link href={`/blog/${post.id}`}>
                      <div className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Son Kediler */}
            <RecentCats />
          </div>
        </div>

        {/* Fotoğraf Slider'ı */}
        <GallerySlider images={recentImages} />
      </div>
    </>
  )
} 