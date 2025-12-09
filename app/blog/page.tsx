"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import Navbar from "@/components/Navbar"
import { blogPosts } from "@/lib/blogData"

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Page Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-source-serif">
              Blog
            </h1>
            <a
              href="/templates/test.bloomnote"
              download="test.bloomnote"
              className="inline-flex items-center gap-2 px-4 py-2 bg-theme text-white rounded-lg hover:bg-theme-dark transition-colors font-medium text-sm font-lexend-deca"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4" />
              <span>Download Template</span>
            </a>
          </div>

          {/* Blog Section */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-source-serif">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 font-lexend-deca">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-theme hover:text-theme-dark font-medium text-sm inline-flex items-center gap-1"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

