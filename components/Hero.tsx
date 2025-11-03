"use client"
import Image from "next/image"
import Link from "next/link"
import DeviceSwitch from "./DeviceSwitch"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { RefreshCw } from "lucide-react"
import { getMonthVersion } from "@/lib/utils"

interface HeroProps {
  isIpad: boolean
  setIsIpad: (isIpad: boolean) => void
}

export default function Hero({ isIpad, setIsIpad }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imageKey, setImageKey] = useState(0) // 用于强制重新加载图片
  const [retryNonce, setRetryNonce] = useState(0) // 失败重试时用于穿透缓存
  const [retryCount, setRetryCount] = useState(0) // 自动重试次数

  // 检测移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 当设备类型或模式改变时，重置加载状态
  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
    setRetryCount(0)
    setRetryNonce(0)
  }, [isIpad, isMobile])

  // 加载超时检测
  useEffect(() => {
    if (!isLoading || hasError) {
      return
    }
    
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn('Image loading timeout, retrying...')
        setIsLoading(false)
        // 触发自动重试
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1)
            setRetryNonce(prev => prev + 1)
            setImageKey(prev => prev + 1)
            setIsLoading(true)
            setHasError(false)
          }, 1000 * (retryCount + 1))
        } else {
          setHasError(true)
        }
      }
    }, 15000) // 15秒超时

    return () => clearTimeout(timeout)
  }, [isLoading, hasError, retryCount])

  // 根据设备和模式选择图片
  const getImageSrc = () => {
    if (isIpad) {
      const base = isMobile ? "/images/ipad-hero-sm.png" : "/images/ipad-hero.png?v=" + getMonthVersion()
      return base + (base.includes('?') ? `&cb=${retryNonce}` : `?cb=${retryNonce}`)
    } else {
      const base = isMobile ? "/images/ipx-hero.png" : "/images/ipx-hero.png"
      return base + (base.includes('?') ? `&cb=${retryNonce}` : `?cb=${retryNonce}`)
    }
  }

  const handleToggle = (ipadView: boolean) => {
    setIsIpad(ipadView)
    setIsLoading(true)
    setHasError(false)
    setImageKey(prev => prev + 1) // 强制重新加载
  }

  const handleImageLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    // 自动重试最多3次
    if (retryCount < 3) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1)
        setRetryNonce(prev => prev + 1)
        setImageKey(prev => prev + 1)
        setIsLoading(true)
        setHasError(false)
      }, 1000 * (retryCount + 1)) // 递增延迟：1s, 2s, 3s
    } else {
      setHasError(true)
    }
  }

  const handleRetry = () => {
    setHasError(false)
    setIsLoading(true)
    setRetryCount(0)
    setImageKey(prev => prev + 1)
    setRetryNonce(prev => prev + 1)
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

  // blooms 单词的放大动画变体
  const bloomsVariants = {
    hidden: { 
      opacity: 0, 
      x: 0,
      y: -40,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
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
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 text-center flex flex-wrap justify-center gap-x-3 gap-y-2 py-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, index) => {
              const isBlooms = word === "blooms"
              return (
                <motion.span
                  key={index}
                  variants={isBlooms ? bloomsVariants : wordVariants}
                  className={`inline-block relative ${isBlooms ? 'font-bold text-theme' : ''}`}
                  animate={
                    isBlooms
                      ? {
                          scale: [1, 1.2, 1],
                          transition: {
                            scale: {
                              duration: 10,
                              delay: 1,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut",
                            },
                          },
                        }
                      : undefined
                  }
                >
                  {word}
                </motion.span>
              )
            })}
          </motion.h1>
          <DeviceSwitch onToggle={handleToggle} isIpad={isIpad} />
        
          <div className="mt-12 relative max-w-[1000px] mx-auto min-h-[180px]">
            <div className="relative">
              {/* Loading 状态 */}
              {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-theme"></div>
                    <span className="text-sm text-gray-500">loading...</span>
                  </div>
                </div>
              )}

              {/* 错误状态 */}
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-sm text-gray-500">Image loading failed</p>
                    <button
                      onClick={handleRetry}
                      className="flex items-center gap-2 px-4 py-2 bg-theme text-white rounded-lg hover:bg-theme-hover transition-colors"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>retry</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 图片 */}
              <Image
                key={`${imageKey}-${retryNonce}`}
                src={getImageSrc()}
                alt={isIpad ? "Bloomnote app interface showcase for iPad" : "Bloomnote app interface showcase for iPhone"}
                width={isIpad ? 1600 : 1200}
                height={1000}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                className={`w-full transition-opacity duration-300 ${
                  isLoading || hasError ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ height: 'auto' }}
                onLoad={handleImageLoad}
                onError={handleImageError}
                priority
                fetchPriority="high"
                unoptimized
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="https://apps.apple.com/app/bloomnote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image src="/images/ipx-appstore.png" alt="Download on the App Store" width={170} height={67} priority unoptimized />
            </Link>
          </div>
      </div>
    // </div>
  )
}

