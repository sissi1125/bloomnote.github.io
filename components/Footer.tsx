"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [showWeChatQR, setShowWeChatQR] = useState(false)
  return (
    <footer className="bg-white py-16">
      <div className="w-[80%] max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 sm:w-[100%]">
        {/* Support Section */}
        <div id="support" className="text-center space-y-12">
          <h2 className="text-4xl font-bold text-brand-secondary">
            Support
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg text-brand-secondary">
              For any questions or feedback, please contact us at:
            </p>
            <div className="text-xl text-brand-secondary">
              <a 
                href="mailto:feedback.bloomnote@gmail.com"
                className="hover:text-theme transition-colors"
              >
                feedback.bloomnote@gmail.com
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-secondary uppercase tracking-wide">
              Follow Us Now
            </h3>
            <div className="flex justify-center items-center gap-6">
              {/* Twitter */}
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors"
                aria-label="Twitter"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors"
                aria-label="YouTube"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* 小红书 */}
              <a
                href="https://www.xiaohongshu.com/user/profile/your-id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors"
                aria-label="Xiaohongshu"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
                </svg>
              </a>

              {/* 微信 */}
              <button
                onClick={() => setShowWeChatQR(true)}
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors cursor-pointer"
                aria-label="WeChat"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M13 8H3" />
                  <path d="M17 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Terms and Privacy */}
        <div className="mt-32 text-center space-y-4">
          <Link href="/terms" className="text-xl text-brand-secondary hover:underline">
            Terms and Conditions
          </Link>
          <br />
          <Link href="/privacy" className="text-xl text-brand-secondary hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Navigation and Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <Link href="#features" className="text-base text-gray-500 hover:text-gray-900">
                Features
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#pricing" className="text-base text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#support" className="text-base text-gray-500 hover:text-gray-900">
                Support
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                Terms
              </Link>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 Bloomnote, Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* 微信二维码弹窗 */}
      {showWeChatQR && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowWeChatQR(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">微信二维码</h3>
              <button
                onClick={() => setShowWeChatQR(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/wechat-qrcode.jpg"
                alt="WeChat QR Code"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              扫描二维码添加微信
            </p>
          </div>
        </div>
      )}
    </footer>
  )
}

