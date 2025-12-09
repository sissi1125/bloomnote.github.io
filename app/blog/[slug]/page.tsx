"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/Navbar"
import { getBlogPost } from "@/lib/blogData"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [post, setPost] = useState(getBlogPost(slug))

  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPost(slug)
      setPost(foundPost)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
              <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-theme hover:text-theme-dark font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>

          {/* Article Header */}
          <article className="bg-white rounded-lg shadow-sm p-8 sm:p-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 font-source-serif">
              {post.title}
            </h1>

            {/* Article Content */}
            <div 
              className="max-w-none text-gray-700 font-lexend-deca"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.75'
              }}
            />
          </article>

          {/* Back to Blog Link */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-theme hover:text-theme-dark font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View All Posts</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

