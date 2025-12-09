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
    <div id="pricing" className="bg-gray-100 py-12">
      <div className="w-[100%] mx-auto px-4 sm:px-12 lg:px-16 sm:w-[100%] flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-2">
            Price
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-lexend-deca">
            Choose the plan that fits your needs
          </p>
        </div>
        
        <div className="gap-4 sm:gap-6 max-w-full flex flex-col lg:flex-row px-4 w-full">
          {/* Free Plan */}
          <div className="bg-gray-50 rounded-3xl p-4 sm:p-8 flex-1 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 sm:mb-4 mb-8">
              Free
            </h3>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature.name} className="flex justify-start items-center gap-3 ">
                  <div className="h-5 min-w-5 rounded-sm border-2 border-gray-300 flex items-center justify-center">
                    {feature.free && <Check className="h-3.5 w-3.5 text-theme" />}
                  </div>
                  <span className={`text-base ${feature.free ? 'text-gray-900' : 'text-gray-500'} font-lexend-deca`}>
                    {feature.free === true ? feature.name : feature.free || feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Monthly Plan */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border-2 border-brand-secondary flex-1 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex flex-col sm:flex-row gap-1">
              <span className="flex items-center gap-2">Bloomnote <span className="bg-theme text-white text-sm px-2 py-0.5 rounded">
                Pro
              </span>
              </span>
              
              <span className="text-highlight text-2xl font-bold py-0.5 rounded italic font-lexend-deca">
                $2.99/month
              </span>
            </h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature.name} className="flex justify-start items-center gap-3">
                  <div className="h-5 min-w-5 rounded-sm border-2 border-gray-300 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-theme" />
                  </div>
                  <span className="text-base text-gray-900 font-lexend-deca">
                    {feature.pro === true ? feature.name : feature.pro === 'unlimited Block+' ? (
                      <span className="text-highlight font-bold">unlimited Block+</span>
                    ) : feature.pro || feature.name}
                  </span>
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Annual Plan */}
          <div className="bg-orange-50 rounded-3xl p-6 sm:p-8 border-2 border-highlight flex-1 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Most Popular Badge */}
            <div className="absolute top-4 right-4 bg-highlight text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex flex-col sm:flex-row gap-2 pr-16 sm:pr-0">
              <span className="flex items-center gap-2">Bloomnote <span className="bg-theme text-white text-sm px-2 py-0.5 rounded">
                Pro
              </span>
              </span>
              
              <div className="relative flex flex-col gap-1">
                <span className="text-highlight text-2xl font-bold py-0.5 rounded italic font-lexend-deca">
                  $34.99/year
                </span>
                <span className="absolute bottom-[-20px] left-0 text-sm text-gray-600 italic">
                  Save 2 months
                </span>
              </div>
            </h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature.name} className="flex justify-start items-center gap-3">
                  <div className="h-5 min-w-5 rounded-sm border-2 border-gray-300 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-theme" />
                  </div>
                  <span className="text-base text-gray-900 font-lexend-deca">
                    {feature.pro === true ? feature.name : feature.pro === 'unlimited Block+' ? (
                      <span className="text-highlight font-bold">unlimited Block+</span>
                    ) : feature.pro || feature.name}
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

