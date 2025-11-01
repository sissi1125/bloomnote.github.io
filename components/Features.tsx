"use client"

import Image from "next/image"
import FeatureGrid from "./FeatureGrid"
import FeatureImage from "./FeatureImage"

interface FeaturesProps {
  isIpad: boolean
}

interface FeatureItem {
  id: string
  image: {
    mobile?: string
    desktop: string
    mobileIpad?: string
    desktopIpad?: string
    width?: number
    height?: number
    sizes?: string
    className?: string
  }
  content: {
    title: string | React.ReactNode
    subtitle?: string | React.ReactNode
    description: string | React.ReactNode
  }
  layout: {
    imageOrder?: "first" | "last"
    imageClassName?: string
    contentClassName?: string
  }
}

const featuresConfig: FeatureItem[] = [
  {
    id: "record-your-way",
    image: {
      desktop: "/images/ipx-feat1-1-v2.png",
      desktopIpad: "/images/ipx-feat1-1-v2.png",
      width: 720,
      height: 480,
      sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 500px",
      className: "mx-auto",
    },
    content: {
      title: (
        <>
          <span className="text-black">Record,</span>
          <span className="italic"> Your Way</span>
        </>
      ),
      subtitle: "/images/ipx-feat1-2-v2.png",
      description:
        "Health data, countdown, location, mood, weather, everything is at your fingertips! Add links, files, code, or formulas. Voice recordings? No problem, convert them to text in real time! Document scanning? Quick and easy!",
    },
    layout: {
      imageOrder: "first",
      contentClassName: "ml-8",
    },
  },
  // {
  //   id: "elegant-image-display",
  //   image: {
  //     desktop: "/images/ipx-feat2-2.png",
  //     desktopIpad: "/images/ipad-feat2-2.png",
  //     width: 800,
  //     height: 533,
  //     className: "mx-auto",
  //   },
  //   content: {
  //     title: "Elegant Image Display",
  //     subtitle: "/images/ipx-feat2-1.png",
  //     description:
  //       "Say goodbye to clutter! Choose from collage, slider, or single-image modes to display your images. Even multiple images can be arranged with elegance!",
  //   },
  //   layout: {
  //     imageOrder: "last",
  //   },
  // },
  {
    id: "timeline-calendar",
    image: {
      desktop: "/images/ipx-feat3.png",
      desktopIpad: "/images/ipad-feat3.png",
      width: 800,
      height: 684,
      sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 700px",
      className: "mx-auto",
    },
    content: {
      title: "Timeline and calendar view",
      description: (
        <>
          1. Timeline View: Your daily note beautifully visualized
          <br />
          2. Calendar View: See all your notes at a glance and plan ahead with ease.
        </>
      ),
    },
    layout: {
      imageOrder: "first",
    },
  },
  {
    id: "timeline-calendar",
    image: {
      desktop: "/images/ipx-feat4.png",
      desktopIpad: "/images/ipad-feat4.png",
      width: 800,
      height: 684,
      sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 700px",
      className: "mx-auto",
    },
    content: {
      title: "Timeline and calendar view",
      description: (
        <>
          1. Timeline View: Your daily note beautifully visualized
          <br />
          2. Calendar View: See all your notes at a glance and plan ahead with ease.
        </>
      ),
    },
    layout: {
      imageOrder: "first",
    },
  },
  {
    id: "test-sizes",
    image: {
      desktop: "/images/ipx-feat5.png",
      desktopIpad: "/images/ipad-feat5.png",
      width: 500,
      height: 686,
      sizes: "(max-width: 200px) 500px, (max-width: 200px) 60vw, 500px",
      className: "mx-auto max-h-[500px]",
    },
    content: {
      title: "test-sizes",
      description: (
        <>
          1. Timeline View: Your daily note beautifully visualized
          <br />
          2. Calendar View: See all your notes at a glance and plan ahead with ease.
        </>
      ),
    },
    layout: {
      imageOrder: "first",
    },
  },
  {
    id: "timeline-calendar",
    image: {
      desktop: "/images/ipx-feat6.png",
      desktopIpad: "/images/ipad-feat6.png",
      width: 800,
      height: 684,
      sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 700px",
      className: "mx-auto max-h-[500px]",
    },
    content: {
      title: "Timeline and calendar view",
      description: (
        <>
          1. Timeline View: Your daily note beautifully visualized
          2. Calendar View: See all your notes at a glance and plan ahead with ease.
        </>
      ),
    },
    layout: {
      imageOrder: "first",
    },
  },
]

export default function Features({ isIpad }: FeaturesProps) {
  const renderContent = (item: FeatureItem) => {
    const titleClassName = "text-4xl font-extrabold text-theme mb-6"
    const isSpecialTitle = typeof item.content.title !== "string"

    return (
      <div className={item.layout.contentClassName || ""}>
        {isSpecialTitle ? (
          <div className={titleClassName}>{item.content.title}</div>
        ) : (
          <h3 className="text-[30px] font-bold text-theme mb-6">{item.content.title}</h3>
        )}

        {item.content.subtitle && typeof item.content.subtitle === "string" && item.content.subtitle.startsWith("/images/") ? (
          <Image
            src={item.content.subtitle}
            alt="Feature icon"
            width={400}
            height={100}
            className="mb-6"
          />
        ) : item.content.subtitle ? (
          <div className="mb-6">{item.content.subtitle}</div>
        ) : null}

        {typeof item.content.description === "string" ? (
          <p className="text-gray-600 text-lg leading-relaxed">{item.content.description}</p>
        ) : (
          <div className="text-gray-600 text-lg leading-relaxed">{item.content.description}</div>
        )}
      </div>
    )
  }

  return (
    <div id="features" className="bg-white py-24">
      <div className="w-[90%] max-w-[1200px] mx-auto px-4 sm:px-12 lg:px-16 sm:w-[100%]">
        <div className="space-y-24">
          {featuresConfig.map((feature, index) => {
            // 偶数索引（0, 2, 4...）：图片在右，文案在左
            // 奇数索引（1, 3, 5...）：图片在左，文案在右
            // 忽略配置中的 imageOrder，使用索引自动判断
            const isEvenRow = index % 2 === 0
            const imageOnRight = isEvenRow

            const imageComponent = (
              <FeatureImage
                src={{
                  desktop: feature.image.desktop,
                  desktopIpad: feature.image.desktopIpad,
                  mobileIpad: feature.image.mobileIpad,
                  mobile: feature.image.mobile,
                }}
                alt={typeof feature.content.title === 'string' ? `${feature.content.title} feature showcase` : 'Feature showcase'}
                width={feature.image.width || 800}
                height={feature.image.height || 600}
                className={feature.image.className || ""}
                sizes={feature.image.sizes}
                isIpad={isIpad}
              />
            )

            const contentComponent = renderContent(feature)

            // 桌面端布局：order-1 在左，order-2 在右
            // 移动端布局：order-1 在上，order-2 在下
       
              // 图片在右侧：文案在左，图片在右
            return !imageOnRight ? (
              <div key={feature.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">{contentComponent}</div>
                <div className="order-1 md:order-2">{imageComponent}</div>
              </div>
            ):(
              <div key={feature.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">{imageComponent}</div>
                <div className="order-1 md:order-2">{contentComponent}</div>
              </div>
            )
            
          })}

          {/* Additional text */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">And so much more…</h3>
          </div>

          {/* Feature Grid */}
          <FeatureGrid isIpad={isIpad} />
        </div>
      </div>
    </div>
  )
}

