"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [showWeChatQR, setShowWeChatQR] = useState(false)
  return (
    <footer className="bg-white py-12">
      <div className="w-[80%] max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 sm:w-[100%]">
        {/* Support Section */}
        <div id="support" className="text-center">
          <h2 className="text-5xl font-bold text-brand-secondary">
            Support
          </h2>
          
          <div className="flex flex-col mb-12 mt-5">
            <p className="text-lg text-brand-secondary">
              For any questions or feedback, please contact us at:
            </p>
            <div className="text-lg text-brand-secondary">
              <a 
                href="mailto:feedback.bloomnote@gmail.com"
                className="text-highlight italic underline hover:text-theme transition-colors"
              >
                feedback.bloomnote@gmail.com
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="text-2xl font-bold text-brand-secondary uppercase tracking-wide">
              Follow Us Now
            </h3>
            <div className="w-fit grid grid-cols-3 gap-4 justify-items-center md:grid-cols-6">
              {/* Twitter */}
              <a
                href="https://x.com/bloomnoteapp?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M778.41 96h141.142L611.2 448.427 973.952 928H689.92L467.456 637.141 212.906 928H71.68l329.813-376.96L53.504 96h291.243l201.088 265.856z m-49.535 747.52h78.208L302.25 176.043h-83.926z" fill="#ffffff"></path></svg>
              </a>

                {/* bluesky */}
              <a
                href="https://bsky.app/profile/bloomnote.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path d="M209.066667 145.066667c29.866667 4.266667 64 21.333333 110.933333 51.2 76.8 59.733333 140.8 132.266667 192 213.333333 51.2-76.8 115.2-153.6 192-209.066667 42.666667-29.866667 81.066667-46.933333 110.933333-51.2 34.133333-4.266667 55.466667 4.266667 68.266667 8.533334 42.666667 17.066667 55.466667 68.266667 55.466667 110.933333 0 8.533333-4.266667 55.466667-8.533334 102.4-4.266667 21.333333-4.266667 46.933333-8.533333 68.266667-4.266667 17.066667-4.266667 38.4-8.533333 46.933333-12.8 51.2-46.933333 85.333333-85.333334 106.666667 38.4 29.866667 55.466667 81.066667 38.4 128-25.6 81.066667-115.2 187.733333-204.8 196.266666-76.8 8.533333-123.733333-55.466667-153.6-119.466666-29.866667 59.733333-76.8 123.733333-153.6 119.466666-89.6-8.533333-179.2-115.2-204.8-196.266666-12.8-46.933333 0-98.133333 38.4-128-38.4-21.333333-68.266667-59.733333-85.333333-106.666667-4.266667-12.8-4.266667-29.866667-8.533333-46.933333-4.266667-21.333333-4.266667-42.666667-8.533334-68.266667 4.266667-51.2 0-98.133333 0-106.666667 0-42.666667 12.8-93.866667 55.466667-110.933333 12.8-4.266667 34.133333-12.8 68.266667-8.533333zM170.666667 294.4c4.266667 34.133333 8.533333 89.6 12.8 128 0 12.8 4.266667 21.333333 4.266666 34.133333 17.066667 55.466667 81.066667 89.6 157.866667 81.066667 21.333333-4.266667 42.666667 12.8 46.933333 38.4 4.266667 21.333333-12.8 42.666667-34.133333 46.933333-34.133333 4.266667-140.8 17.066667-123.733333 68.266667 17.066667 51.2 76.8 132.266667 132.266666 136.533333 38.4 4.266667 64-59.733333 76.8-85.333333 12.8-29.866667 21.333333-59.733333 29.866667-85.333333 4.266667-17.066667 21.333333-29.866667 42.666667-29.866667s34.133333 12.8 42.666666 29.866667c8.533333 25.6 17.066667 55.466667 29.866667 85.333333 12.8 29.866667 34.133333 89.6 76.8 85.333333 55.466667-4.266667 119.466667-89.6 132.266667-136.533333 17.066667-55.466667-93.866667-64-123.733334-68.266667-21.333333-4.266667-38.4-25.6-34.133333-46.933333 4.266667-21.333333 25.6-38.4 46.933333-38.4 76.8 8.533333 140.8-21.333333 157.866667-81.066667 4.266667-12.8 4.266667-21.333333 4.266667-34.133333 4.266667-38.4 8.533333-93.866667 12.8-128 0-21.333333 8.533333-68.266667-21.333334-64-12.8 0-34.133333 8.533333-72.533333 38.4-98.133333 59.733333-170.666667 149.333333-217.6 243.2-8.533333 12.8-21.333333 21.333333-38.4 21.333333s-29.866667-8.533333-38.4-21.333333C426.666667 418.133333 354.133333 328.533333 268.8 268.8c-38.4-25.6-59.733333-34.133333-72.533333-38.4-34.133333-4.266667-25.6 42.666667-25.6 64z"  fill="#ffffff"></path></svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bloomnoteapp?igsh=bG1tMWo1bWV6MWx6&utm_source=qr"
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
                href="https://www.youtube.com/@Bloomnoteapp"
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
                href="https://www.xiaohongshu.com/user/profile/67ab4ad7000000000e01f793?xsec_token=YBQj2goRJ9uTUQIa6Z1XjJBbfCG2cn9R99tS0iutZg8VY=&xsec_source=app_share&xhsshare=CopyLink&appuid=67ab4ad7000000000e01f793&apptime=1741679105&share_id=cdbec381b2e64645aa9956924e7d31d0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors"
                aria-label="Xiaohongshu"
              >
               <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="28" height="28"><path d="M13.95 391.93h63.58s4.56 144.8-11.26 177.65-32.85 58.41-32.85 58.41L10 561.07l3.95-169.14zM309.03 391.93h-63.58s-4.56 144.8 11.26 177.65 32.85 58.41 32.85 58.41l23.42-66.92-3.95-169.14zM128.33 306.75h64.49v305.42s0 35.29-32.25 40.15-60.23 0-60.23 0L78.14 600h48.97l1.22-293.25zM470.25 306.75h-68.14l-52.32 110.73s-15.82 35.29 15.82 35.29h36.5l-35.29 80.31s-10.95 30.42 24.34 30.42h79.09l15.82-53.54h-47.46l53.54-110.73-64.49-2.43 42.59-90.05zM351.01 587.84h109.51l-26.77 66.65H327.89zM516.49 326.22h152.1v65.71h-152.1zM559.08 391.93H626v205.64h-66.92zM497.02 597.57h194.69v56.92H465.39zM1009.3 494.75c-6.08-40.76-77.86-41.98-77.86-41.98s-1.23 24.34-0.02-46.24c1.22-70.57-62.06-80.31-62.06-80.31H711.18v65.71h47.45v59.62h-71.79v66.92h68.14V654.6l69.36-0.12V522.13l116.81 1.22 2.43 80.31H879.1L901 654.5s25.55 0.27 63.27 0 45.02-42.32 45.02-42.32 6.09-76.67 0.01-117.43z m-138.72-43.2h-46.24v-59.62h46.24v59.62z" fill="#ffffff"></path><path d="M757.11 302.8h65.25v25.55h-65.25zM948.3 388.13s-8.86-76.68 42.44-59.78c41.52 13.69 19.16 81.22-42.44 59.78z" fill="#ffffff"></path></svg>
              </a>

              {/* 微信 */}
              <button
                onClick={() => setShowWeChatQR(true)}
                className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-theme transition-colors cursor-pointer"
                aria-label="WeChat"
              >
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="28" height="28"><path d="M511.609097 961.619254" fill="#ffffff"></path><path d="M889.618407 787.083126c41.7468-38.149878 67.083861-88.273463 67.083861-143.163607 0-95.53382-76.727499-176.60423-183.177949-205.317179-6.348592-153.081491-162.17152-275.610128-353.493963-275.610128-195.352223 0-353.714997 127.743406-353.714997 285.319258 0 72.363098 33.395598 138.433886 88.432075 188.729385 17.22122 15.737426-2.939959 58.810431-27.714202 94.395904 41.866526-11.564383 86.519516-19.088754 125.611859-19.088754 18.300808 0 35.388998 1.65264 50.386574 5.305843 36.623106 10.348696 75.996858 15.981996 117.000737 15.981996 7.963369 0 15.862269-0.239454 23.699772-0.657986 42.0937 75.114768 135.796826 127.388319 244.639766 127.388319 31.104415 0 60.974723-4.26821 88.757486-12.126178 11.382235-2.77623 24.338315-4.028757 38.222533-4.028757 29.65439 0 63.530942 5.709025 95.28925 14.483876-18.787902-26.993794-34.088376-59.664891-21.020756-71.607898L889.620453 787.083126zM420.035472 681.516812c-35.33067 0-69.922513-4.716418-102.824877-14.014178l-0.907673-0.254803-0.916882-0.225127c-18.48398-4.50971-39.590694-6.795776-62.738903-6.795776-13.301957 0-26.589588 0.730641-39.585577 1.979074 2.76088-30.538527-8.94165-50.646494-23.152303-63.637366-22.955828-20.97573-40.786938-44.560892-52.993958-70.099545-12.261255-25.645077-18.478863-52.615335-18.478863-80.157621 0-60.140729 29.904077-117.384477 84.204797-161.187099 27.724435-22.364357 60.207243-39.98876 96.537683-52.384068 38.179554-13.029758 78.840626-19.632129 120.857579-19.632129s82.678024 6.608511 120.857579 19.632129c36.329417 12.395308 68.812225 30.019711 96.537683 52.384068 48.465828 39.09132 77.472466 88.892563 83.153862 141.900847l0.005117 0c-10.565636-1.01819-21.313422-1.561565-32.218796-1.561565-148.19725 0-268.334421 96.90812-268.334421 216.45382 0 12.8077 1.39272 25.361621 4.033873 37.559431 0 0 0 0 0-0.005117C422.719604 681.487136 421.38112 681.516812 420.035472 681.516812L420.035472 681.516812zM854.454536 748.621139c-8.422833 7.698333-19.530822 21.845541-21.547759 43.989887-5.820566-0.330528-11.689227-0.5137-17.557888-0.5137-18.566868 0-35.58138 1.854231-50.573839 5.513574l-0.916882 0.225127-0.911766 0.254803c-23.844058 6.743588-48.936549 10.157337-74.576509 10.157337-30.485315 0-59.96779-4.783956-87.620593-14.21577-26.167986-8.9263-49.516764-21.585621-69.403696-37.625946-38.174438-30.79333-59.198264-70.739111-59.198264-112.485911 0-41.7468 21.023826-81.697697 59.198264-112.491027 19.886933-16.040325 43.23571-28.699646 69.403696-37.626969 27.65178-9.431813 57.134255-14.214746 87.620593-14.214746 30.484292 0 59.966767 4.782933 87.618547 14.214746 26.167986 8.93244 49.516764 21.587668 69.399603 37.626969 38.174438 30.79333 59.20031 70.744227 59.20031 112.491027 0 19.002796-4.303003 37.636179-12.789281 55.381331C883.235023 717.207685 870.672916 733.800595 854.454536 748.621139L854.454536 748.621139zM854.454536 748.621139" fill="#ffffff"></path><path d="M264.813225 392.537188c0.284479-30.082132 19.104103-54.31914 42.286082-54.31914 23.348778 0 42.284035 24.611537 42.284035 54.966892 0 30.361495-18.930141 54.973032-42.284035 54.973032-23.181979 0-42.001603-24.241101-42.280966-54.286394L264.813225 392.537188zM264.813225 392.537188" fill="#ffffff"></path><path d="M484.761636 392.537188c0.284479-30.082132 19.104103-54.31914 42.280966-54.31914 23.353894 0 42.284035 24.611537 42.284035 54.966892 0 30.361495-18.930141 54.973032-42.284035 54.973032-23.176862 0-41.996486-24.241101-42.280966-54.286394L484.761636 392.537188zM484.761636 392.537188" fill="#ffffff"></path><path d="M582.250994 603.694375c0.284479-23.119557 14.763239-41.71917 32.584116-41.71917 17.999956 0 32.589233 18.97005 32.589233 42.366923 0 23.403013-14.589276 42.366923-32.589233 42.366923-17.821901 0-32.30066-18.599613-32.584116-41.679261L582.250994 603.694375zM582.250994 603.694375" fill="#ffffff"></path><path d="M739.250724 603.694375c0.284479-23.119557 14.767332-41.71917 32.589233-41.71917 17.999956 0 32.594349 18.97005 32.594349 42.366923 0 23.403013-14.594393 42.366923-32.594349 42.366923-17.821901 0-32.304753-18.599613-32.589233-41.679261L739.250724 603.694375zM739.250724 603.694375" fill="#ffffff"></path></svg>
              </button>
            </div>
          </div>
        </div>
        
        
        {/* Terms and Privacy */}
        <div className="mt-12 text-center space-y-4">
          <Link href="/terms" className="text-base text-gray-500 hover:underline">
            Terms and Conditions
          </Link>
          <br />
          <Link href="/privacy" className="text-base text-gray-500 hover:underline">
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
                unoptimized
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

