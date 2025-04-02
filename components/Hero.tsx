"use client"
import Image from "next/image"
import Link from "next/link"
import DeviceSwitch from "./DeviceSwitch"

interface HeroProps {
  isIpad: boolean
  setIsIpad: (isIpad: boolean) => void
}

export default function Hero({ isIpad, setIsIpad }: HeroProps) {
  const handleToggle = (ipadView: boolean) => {
    setIsIpad(ipadView)
  }

  return (
    // <div className="bg-white">
      <div className="w-[80%] max-w-[1000px] mx-auto py-16 sm:px-12 lg:px-16">
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl text-center">Where every note blooms</h1>
          <DeviceSwitch onToggle={handleToggle} isIpad={isIpad} />
        
          <div className="mt-12 relative max-w-[1000px] mx-auto">
            <div className="relative">
              {/* 预加载 iPad 图片 */}
              <div className={`${!isIpad && 'hidden'}`}>
                <Image
                  src="/images/ipad-hero.png"
                  alt="Bloomnote app interface showcase for iPad"
                  width={1200}
                  height={900}
                  className="w-full h-auto transition-opacity duration-300"
                  style={{ maxWidth: '100%' }}
                  priority
                />
              </div>
              {/* 预加载 iPhone 图片 */}
              <div className={`${isIpad && 'hidden'}`}>
                <Image
                  src="/images/ipx-hero.png"
                  alt="Bloomnote app interface showcase for iPhone"
                  width={1080}
                  height={220}
                  
                  className="w-full h-auto transition-opacity duration-300"
                  style={{ maxWidth: '100%' }}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="https://apps.apple.com/app/bloomnote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image src="/images/ipx-appstore.png" alt="Download on the App Store" width={170} height={67} priority />
            </Link>
          </div>
      </div>
    // </div>
  )
}

