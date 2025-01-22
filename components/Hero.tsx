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
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">Where every note blooms</h1>
          <DeviceSwitch onToggle={handleToggle} isIpad={isIpad} />
          <div className="mt-12 relative">
            <Image
              src={isIpad ? "/images/ipad-hero.png" : "/images/ipx-hero.png"}
              alt={`Bloomnote app interface showcase for ${isIpad ? "iPad" : "iPhone"}`}
              width={isIpad ? 1200 : 1080}
              height={isIpad ? 900 : 220}
              className="mx-auto"
              priority
            />
          </div>
          <div className="mt-12">
            <Link
              href="https://apps.apple.com/app/bloomnote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image src="/images/ipx-appstore.png" alt="Download on the App Store" width={200} height={67} priority />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

