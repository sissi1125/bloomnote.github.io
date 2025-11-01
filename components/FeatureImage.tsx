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

// 分离容器样式和图片样式
// 容器样式：mx-auto, mb-6 等布局相关
// 图片样式：max-h-, max-w-, w-, h- 等尺寸相关
function splitClassName(className: string) {
  const containerClasses: string[] = []
  const imageClasses: string[] = []
  
  const classList = className.split(/\s+/).filter(Boolean)
  
  classList.forEach(cls => {
    // 尺寸相关的类应该应用到图片上
    if (cls.match(/^(max-)?(w|h)-|object-|bg-|rounded/)) {
      imageClasses.push(cls)
    } else {
      // 布局相关的类应用到容器上
      containerClasses.push(cls)
    }
  })
  
  return {
    container: containerClasses.join(' '),
    image: imageClasses.join(' ')
  }
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

  // 分离样式类
  const { container: containerClasses, image: imageClasses } = splitClassName(className)

  return (
    <div className={`relative flex justify-center ${containerClasses}`}>
      {/* Loading 状态 */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-theme"></div>
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
      {/* 
        样式说明：
        - width/height: Next.js Image 用于计算宽高比和优化，不直接影响显示尺寸
        - sizes: 告诉 Next.js 在不同屏幕尺寸下需要加载多大尺寸的图片（用于响应式优化）
        - className: 控制实际的显示样式
          * 容器样式（mx-auto, mb-6 等）：应用到外层 div
          * 图片样式（max-h-, max-w-, w-, h- 等）：应用到 Image 组件
        优先级：style > className > width/height（显示尺寸由 className/style 决定）
        
        当设置了 max-h- 时，图片会保持宽高比等比例缩放，高度和宽度同时缩小
      */}
      <Image
        key={imageKey}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes || "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 800px"}
        className={`${
          imageClasses.includes('max-h') || imageClasses.includes('h-')
            ? 'w-auto max-w-full' // 当有高度限制时，宽度自动，但不超过容器
            : 'w-full' // 默认宽度占满容器
        } h-auto transition-opacity duration-300 ${imageClasses} ${
          isLoading || hasError ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  )
}

