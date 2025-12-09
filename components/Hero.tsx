"use client"
import Image from "next/image"
import Link from "next/link"
import DeviceSwitch from "./DeviceSwitch"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { RefreshCw } from "lucide-react"
import { getMonthVersion, getPlaceholderImage } from "@/lib/utils"

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

  // 检查图片是否已经加载完成（处理缓存情况）
  useEffect(() => {
    // 延迟检查，确保 DOM 已更新
    const timer = setTimeout(() => {
      // 查找页面中的 img 元素（Next.js Image 会渲染为 img）
      const imgElement = document.querySelector(`img[alt="${isIpad ? "Bloomnote app interface showcase for iPad" : "Bloomnote app interface showcase for iPhone"}"]`) as HTMLImageElement
      if (imgElement && imgElement.complete && imgElement.naturalWidth > 0) {
        // 图片已经加载完成（可能是从缓存中加载的），立即更新状态
        setIsLoading(false)
        setHasError(false)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [imageKey, retryNonce, isIpad, isMobile])

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
        damping: 40,
      },
    },
  }

  return (
    <div className="relative isolate">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-50/50 blur-[120px] mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-orange-50/50 blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-purple-50/40 blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="w-[100%] max-w-[1000px] mx-auto py-14 px-3 sm:py-16 sm:px-12 lg:px-16 sm:w-[100%]">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-source-serif text-gray-900 text-center flex flex-wrap justify-center gap-x-3 gap-y-2 py-10"
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
                  className={`inline-block relative ${isBlooms ? 'font-bold text-theme ml-2' : ''}`}
                  animate={
                    isBlooms
                      ? {
                          scale: [1, 1.2, 1],
                          transition: {
                            scale: {
                              duration: 20,
                              delay: 10,
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
            {/* Glow effect behind the device */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-theme/5 to-transparent blur-2xl transform scale-95 opacity-50" />
            
            <div className="relative drop-shadow-2xl">
              {/* Loading 状态 */}
              {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-theme"></div>
                    <span className="text-sm text-gray-500">loading...</span>
                  </div>
                </div>
              )}

              {/* 图片 */}
              {hasError ? (
                <div className="relative w-full" style={{ height: 'auto' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getPlaceholderImage(isIpad ? 1600 : 1200, 1000)}
                    alt={isIpad ? "Bloomnote app interface showcase for iPad" : "Bloomnote app interface showcase for iPhone"}
                    className="w-full h-auto"
                    style={{ minHeight: '400px' }}
                  />
                  <div className="absolute bottom-4 right-4">
                    <button
                      onClick={handleRetry}
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white transition-colors shadow-lg"
                      title="Retry loading image"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span className="text-sm">Retry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <Image
                  key={`${imageKey}-${retryNonce}`}
                  src={getImageSrc()}
                  alt={isIpad ? "Bloomnote app interface showcase for iPad" : "Bloomnote app interface showcase for iPhone"}
                  width={isIpad ? 1600 : 1200}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                  className={`w-full transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ height: 'auto' }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  onLoadingComplete={() => {
                    setIsLoading(false)
                    setHasError(false)
                  }}
                  priority
                  fetchPriority="high"
                  unoptimized
                />
              )}
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Get Bloomnote for Free
            </h3>
            <Link
              href={isIpad ? "https://apps.apple.com/us/app/bloomnote-notes-journal/id6738949546?platform=ipad" : "https://apps.apple.com/us/app/bloomnote-notes-journal/id6738949546"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image src="/images/ipx-appstore.png" alt="Download on the App Store" width={170} height={67} priority unoptimized />
            </Link>
          </div>
      </div>
    </div>
  )
}

