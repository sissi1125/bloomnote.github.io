import Image from 'next/image'
import { useEffect } from 'react'

export default function FeatureGrid(props: { isIpad: boolean }) {
  const { isIpad } = props

  useEffect(() => {
    console.log('isIpad', isIpad)
  }, [isIpad])

  return (
    <div className="max-w-5xl flex justify-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row gap-2">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-1">
          <Image
            src="/images/ipx-grid-1.png"
            alt="Drawing feature"
            width={500}
            height={166}
            className="mb-2"
          />
          <Image
            src="/images/ipx-grid-2.png"
            alt="Export feature"
            width={500}
            height={83}
            className="mb-2"
          />
          <Image
            src="/images/ipx-grid-3.png"
            alt="Customizable app icons"
            width={500}
            height={83}
            className="mb-2"
          />
          <Image
            src={isIpad ? "/images/ipad-grid-4.png" : "/images/ipx-grid-4.png"}
            alt="Multi-level search feature"
            width={500}
            height={83}
            className="mb-2"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-1">
          <Image
            src="/images/ipx-grid-5.png"
            alt="iCloud sync feature"
            width={500}
            height={83}
            className="mb-2"
          />
          <Image
            src={isIpad ? "/images/ipad-grid-6.png" : "/images/ipx-grid-6.png"}
            alt="Summary view feature"
            width={500}
            height={83}
            className="mb-2"
          />
          <Image
            src={isIpad ? "/images/ipad-grid-7.png" : "/images/ipx-grid-7.png"}
            alt="Tag system feature"
            width={500}
            height={83}
            className="mb-2 -mt-4"
          />
          <Image
            src={isIpad ? "/images/ipad-grid-8.png" : "/images/ipx-grid-8.png"}
            alt=""
            width={500}
            height={83}
            className="mb-2"
          />
          <Image
            src="/images/ipx-grid-9.png"
            alt="Nested link feature"
            width={500}
            height={83}
            className="mb-2 -mt-3"
          />
        </div>
      </div>
    </div>
  )
}
