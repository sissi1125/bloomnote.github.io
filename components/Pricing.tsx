import { Check } from 'lucide-react'

const features = [
  {
    name: 'Block+',
    free: '200 Block+',
    pro: 'unlimited Block+'
  },
  {
    name: 'Advanced Block: Health, Weather, Sketch, Countdown, Mood, Location, Link',
    free: true,
    pro: true
  },
  {
    name: 'Nested Link',
    free: true,
    pro: true
  },
  {
    name: '16 App Icons',
    free: false,
    pro: true
  },
  {
    name: 'Export to: Txt, PDF, Image, RTF, Markdown, Html',
    free: false,
    pro: true
  },
  {
    name: 'Sync with iCloud',
    free: true,
    pro: true
  },
  {
    name: 'Highlighting Code',
    free: true,
    pro: true
  },
  {
    name: 'Live Text',
    free: true,
    pro: true
  },
  {
    name: 'Document Scanning',
    free: true,
    pro: true
  },
  {
    name: 'Voice Memo',
    free: true,
    pro: true
  }
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-100 py-24">
      <div className="w-[100%] max-w-[1000px] mx-auto px-4 sm:px-12 lg:px-16 sm:w-[100%] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Price
        </h2>
        
        <div className="gap-2 sm:gap-8 max-w-full flex flex-col md:flex-row px-4">
          {/* Free Plan */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 sm:mb-4 mb-8">
              Free
            </h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-start gap-3">
                  <div className="h-5 min-w-6 rounded-md border-2 border-gray-300 flex items-center justify-center">
                    {feature.free && <Check className="h-3.5 w-3.5 text-[#FF770E]" />}
                  </div>
                  <span className={`text-base ${feature.free ? 'text-gray-900' : 'text-gray-500'}`}>
                    {feature.free === true ? feature.name : feature.free || feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border-2 border-[#2D3142]">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex flex-col sm:flex-row gap-2">
              <span className="flex items-center gap-2">Bloomnote <span className="bg-[#FF770E] text-white text-sm px-2 py-0.5 rounded">
                Pro
              </span>
              </span>
              
              <span className="text-[#FF770E] text-2xl font-bold py-0.5 rounded italic">
                $2.99/month
              </span>
            </h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-start gap-3">
                  <div className="h-5 min-w-5 rounded-md border-2 border-gray-300 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-[#FF770E]" />
                  </div>
                  <span className="text-base text-gray-900">
                    {feature.pro === true ? feature.name : feature.pro || feature.name}
                  </span>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

