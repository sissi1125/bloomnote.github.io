"use client"
import Image from "next/image"
import Link from "next/link"
import DeviceSwitch from "./DeviceSwitch"
import { motion } from "framer-motion"

interface HeroProps {
  isIpad: boolean
  setIsIpad: (isIpad: boolean) => void
}

export default function Hero({ isIpad, setIsIpad }: HeroProps) {
  const handleToggle = (ipadView: boolean) => {
    setIsIpad(ipadView)
  }

  const titleWords = "Where every note blooms".split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      x: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  }

  return (
    // <div className="bg-white">
      <div className="w-[100%] max-w-[1000px] mx-auto py-14 px-3 sm:py-16 sm:px-12 lg:px-16 sm:w-[100%]">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 text-center flex flex-wrap justify-center gap-x-3 gap-y-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <DeviceSwitch onToggle={handleToggle} isIpad={isIpad} />
        
          <div className="mt-12 relative max-w-[1000px] mx-auto min-h-[180px]">
            <div className="relative">
              {isIpad ? (
                <Image
                  src="/images/ipad-hero.png"
                  alt="Bloomnote app interface showcase for iPad"
                  width={1200}
                  height={900}
                  className="w-full h-auto transition-opacity duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                  priority
                />
              ) : (
                <Image
                  src="/images/ipx-hero.png"
                  alt="Bloomnote app interface showcase for iPhone"
                  width={1080}
                  height={220}
                  className="w-full h-auto transition-opacity duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                  priority
                />
              )}
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

