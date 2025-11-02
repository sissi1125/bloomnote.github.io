"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureSliderProps {
  isIpad?: boolean
}

export default function FeatureSlider({ isIpad = false }: FeatureSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)

  // 4张图片，根据设备类型选择对应的图片
  const images = Array.from({ length: 4 }, (_, i) => {
    const num = i + 1
    return {
      id: num,
      src: isIpad 
        ? `/images/ipad-slider${num}.png`
        : `/images/ipx-slider${num}.png`,
      alt: `Feature ${num}`,
    }
  })

  const totalImages = images.length

  // 当设备类型改变时，重置到第一张
  useEffect(() => {
    setCurrentIndex(0)
  }, [isIpad])

  // 检测移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // 获取索引（支持循环）
  const getIndex = (index: number) => {
    if (index < 0) {
      return totalImages + index
    }
    if (index >= totalImages) {
      return index - totalImages
    }
    return index
  }

  // 上一张
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      setDirection('right')
      return prev > 0 ? prev - 1 : totalImages - 1
    })
  }

  // 下一张
  const handleNext = () => {
    setCurrentIndex((prev) => {
      setDirection('left')
      return prev < totalImages - 1 ? prev + 1 : 0
    })
  }

  // 直接跳转到指定索引
  const handleGoTo = (index: number) => {
    setDirection(index > currentIndex ? 'left' : 'right')
    setCurrentIndex(index)
  }

  // 触摸开始
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  // 触摸移动
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // 触摸结束（滑动处理）
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return
    }

    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      handleNext()
    } else if (distance < -minSwipeDistance) {
      handlePrev()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // PC端：获取要显示的3张图片（前一张、当前、后一张）
  const getVisibleImages = () => {
    if (isMobile) {
      return [images[currentIndex]]
    }
    return [
      images[getIndex(currentIndex - 1)], // 左侧
      images[currentIndex], // 中间
      images[getIndex(currentIndex + 1)], // 右侧
    ]
  }

  const visibleImages = getVisibleImages()

  // PC端：Grid布局显示所有4张图片
  if (!isMobile) {
    return (
      <div className="w-full mt-12">
        <div className={`grid ${isIpad ? 'grid-cols-2' : 'grid-cols-4'} gap-4 px-2`}>
          {images.map((image) => (
            <div
              key={image.id}
              className="relative w-full overflow-hidden"
              style={{
                height: isIpad ? '200px' : '500px',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={isIpad ? 1200 : 800}
                height={isIpad ? 600 : 600}
                className="w-full h-full object-contain"
                sizes={isIpad ? "50vw" : "25vw"}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 移动端：轮播图
  return (
    <div className="w-full mt-16">
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 图片容器 - 固定高度 */}
        <div 
          className="flex items-center justify-center gap-4 px-12"
          style={{
            height: isIpad ? '300px' : '550px',
          }}
        >
          {visibleImages.map((image) => {
            // 计算初始 x 位置（平移效果）
            let initialX = 0
            if (direction) {
              // 移动端：从右滑入（下一张）或从左滑入（上一张）
              initialX = direction === 'left' ? 100 : -100
            }

            return (
              <motion.div
                key={`${image.id}-${currentIndex}`}
                className="flex-shrink-0 w-full"
                initial={{ 
                  opacity: 0, 
                  scale: 1,
                  x: initialX,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="relative w-full h-full  overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={isIpad ? 1200 : 800}
                    height={isIpad ? 900 : 600}
                    className="w-full h-full object-contain"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 导航按钮 */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* 指示器 */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-14">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleGoTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-theme"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

