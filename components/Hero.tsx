"use client"
import Image from 'next/image'
import Link from 'next/link'
import DeviceSwitch from './DeviceSwitch'
import { useState } from 'react'

export default function Hero() {
  const [isIpad, setIsIpad] = useState(false)

  const handleToggle = (ipadView: boolean) => {
    setIsIpad(ipadView)
  }
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
            Where every note blooms
          </h1>
          <DeviceSwitch onToggle={handleToggle} />
          <div className="mt-12 relative">
            <Image
              src="/images/ipx-hero.png"
              alt="Bloomnote app interface showcase"
              width={1080}
              height={220}
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
              <Image
                src="/images/ipx-appstore.png"
                alt="Download on the App Store"
                width={200}
                height={67}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

