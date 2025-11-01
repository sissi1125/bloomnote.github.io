"use client"

import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { RefreshCw } from "lucide-react"

interface FeatureImageProps {
  src: {
    mobile?: string
    desktop: string
    mobileIpad?: string
    desktopIpad?: string
  }
  alt: string
  width?: number
  height?: number
  className?: string
  sizes?: string
  isIpad?: boolean
}

export default function FeatureImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  sizes,
  isIpad = false,
}: FeatureImageProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imageKey, setImageKey] = useState(0)

  // 检测移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // 根据设备和模式选择图片
  const imageSrc = useMemo(() => {
    if (isIpad) {
      if (isMobile && src.mobileIpad) {
        return src.mobileIpad
      }
      if (!isMobile && src.desktopIpad) {
        return src.desktopIpad
      }
      // Fallback to base iPad images
      if (isMobile && src.mobile) {
        return src.mobile
      }
      return src.desktop
    } else {
      return isMobile && src.mobile ? src.mobile : src.desktop
    }
  }, [isIpad, isMobile, src])

  // 当图片源改变时，重置加载状态
  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
    setImageKey((prev) => prev + 1)
  }, [imageSrc])

  const handleImageLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const handleRetry = () => {
    setHasError(false)
    setIsLoading(true)
    setImageKey((prev) => prev + 1)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading 状态 */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF770E]"></div>
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
              className="flex items-center gap-2 px-4 py-2 bg-[#FF770E] text-white rounded-lg hover:bg-[#e6690d] transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>retry</span>
            </button>
          </div>
        </div>
      )}

      {/* 图片 */}
      <Image
        key={imageKey}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes || "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 800px"}
        className={`w-full transition-opacity duration-300 ${
          isLoading || hasError ? "opacity-0" : "opacity-100"
        }`}
        style={{ height: "auto" }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  )
}

