import Image from 'next/image'
import FeatureGrid from './FeatureGrid'

export default function Features() {
  return (
    <div id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/ipx-feat1-1.png"
                alt="Record your way feature showcase"
                width={540}
                height={360}
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-[30px] font-bold text-[#FF770E] mb-6">
                Record, Your Way
              </h3>
              <Image
                src="/images/ipx-feat1-2.png"
                alt="Feature icons"
                width={400}
                height={100}
                className="mb-6"
              />
              <p className="text-gray-600 text-lg leading-relaxed">
                Health data, countdown, location, mood, weather, everything is at your fingertips! Add links, files, code, or formulas. Voice recordings? No problem, convert them to text in real time! Document scanning? Quick and easy!
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[30px] font-bold text-[#FF770E] mb-6">
                Elegant Image Display
              </h3>
              <Image
                src="/images/ipx-feat2-1.png"
                alt="Image display options"
                width={500}
                height={100}
                className="mb-6"
              />
              <p className="text-gray-600 text-lg leading-relaxed">
                Say goodbye to clutter! Choose from collage, slider, or single-image modes to display your images. Even multiple images can be arranged with elegance!
              </p>
            </div>
            <div>
              <Image
                src="/images/ipx-feat2-2.png"
                alt="Image display feature showcase"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/ipx-feat3.png"
                alt="Timeline and calendar feature showcase"
                width={780}
                height={684}
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-[30px] font-bold text-[#FF770E] mb-6">
                Timeline and calendar view
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                1. Timeline View: Your daily note beautifully visualized<br />
                2. Calendar View: See all your notes at a glance and plan ahead with ease.
              </p>
            </div>
          </div>

          {/* Additional text */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">
              And so much more…
            </h3>
          </div>

          {/* Feature Grid */}
          <FeatureGrid />
        </div>
      </div>
    </div>
  )
}

