"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function Updates() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-12 font-source-serif">
            Updates
          </h1>

          {/* Blog Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-source-serif">
              Blog
            </h2>
            <div className="space-y-6">
              {/* Blog Post 1 */}
              <article className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>January 15, 2024</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-source-serif">
                  Introducing Bloomnote: Where Every Note Blooms
                </h3>
                <p className="text-gray-600 mb-4 font-lexend-deca">
                  We're excited to launch Bloomnote, a revolutionary note-taking app designed to help your ideas flourish. 
                  With intuitive features and beautiful design, Bloomnote transforms how you capture, organize, and grow your thoughts.
                </p>
                <a href="#" className="text-theme hover:text-theme-dark font-medium text-sm">
                  Read more →
                </a>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>February 8, 2024</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-source-serif">
                  Advanced Blocks: Power Up Your Notes
                </h3>
                <p className="text-gray-600 mb-4 font-lexend-deca">
                  Discover the power of Advanced Blocks in Bloomnote. From health tracking to weather updates, 
                  mood logging to countdown timers, these blocks make your notes more dynamic and useful than ever.
                </p>
                <a href="#" className="text-theme hover:text-theme-dark font-medium text-sm">
                  Read more →
                </a>
              </article>

              {/* Blog Post 3 */}
              <article className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>March 12, 2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-source-serif">
                  The Art of Nested Linking: Connect Your Ideas
                </h3>
                <p className="text-gray-600 mb-4 font-lexend-deca">
                  Learn how nested linking in Bloomnote helps you create a web of interconnected ideas. 
                  Build knowledge graphs, connect related concepts, and never lose track of important connections.
                </p>
                <a href="#" className="text-theme hover:text-theme-dark font-medium text-sm">
                  Read more →
                </a>
              </article>
            </div>
          </section>

          {/* Changelog Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-source-serif">
              Changelog
            </h2>
            <div className="space-y-6">
              {/* Version 1.2.0 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-source-serif">Version 1.2.0</h3>
                  <span className="text-sm text-gray-500">March 20, 2024</span>
                </div>
                <ul className="space-y-2 text-gray-600 font-lexend-deca">
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Added new export formats: RTF and HTML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Improved iCloud sync performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Enhanced code highlighting with syntax support for 10+ languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Fixed issue with nested links in exported documents</span>
                  </li>
                </ul>
              </div>

              {/* Version 1.1.5 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-source-serif">Version 1.1.5</h3>
                  <span className="text-sm text-gray-500">February 28, 2024</span>
                </div>
                <ul className="space-y-2 text-gray-600 font-lexend-deca">
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Added 8 new app icons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Improved document scanning accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Enhanced voice memo transcription quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Bug fixes and performance improvements</span>
                  </li>
                </ul>
              </div>

              {/* Version 1.1.0 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-source-serif">Version 1.1.0</h3>
                  <span className="text-sm text-gray-500">February 5, 2024</span>
                </div>
                <ul className="space-y-2 text-gray-600 font-lexend-deca">
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Introduced Advanced Blocks: Health, Weather, Sketch, Countdown, Mood, Location, Link</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Added nested linking feature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Implemented Live Text support for iOS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>New export options: PDF, Image, Markdown</span>
                  </li>
                </ul>
              </div>

              {/* Version 1.0.0 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-source-serif">Version 1.0.0</h3>
                  <span className="text-sm text-gray-500">January 15, 2024</span>
                </div>
                <ul className="space-y-2 text-gray-600 font-lexend-deca">
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Initial release of Bloomnote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Core note-taking features with Block+ system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>iCloud sync support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-theme mt-1">•</span>
                    <span>Basic export functionality (TXT)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

