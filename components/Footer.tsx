import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="w-[80%] max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16">
        {/* Support Section */}
        <div id="support" className="text-center">
          <h2 className="text-4xl font-bold text-[#2D3142] mb-8">
            Support
          </h2>
          <div className="grid grid-cols-2 gap-6 max-w-[600px] mx-auto">
            {/* Email */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-md flex flex-col items-center">
              <div className='flex items-center'>
                <img src="/images/gmaillogo.png" alt="Email Logo" className="w-5 h-5 mr-2" />
                <p className="text-xl font-semibold text-[#2D3142]">Email</p>
              </div>
              <p className="text-lg text-[#2D3142]">feedback.bloomnote@gmail.com</p>
            </div>
            {/* Weibo */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-md flex flex-col items-center">
              <div className='flex items-center'>
                <img src="/images/weibologo.png" alt="Weibo Logo" className="w-5 h-5 mr-2" />
                <p className="text-xl font-semibold text-[#2D3142]">Weibo</p>
              </div>
              <p className="text-lg text-[#2D3142]">@YourWeiboID</p>
            </div>
            {/* Xiaohongshu */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-md flex flex-col items-center">
              <div className='flex items-center'>
                <img src="/images/xhslogo.png" alt="Xiaohongshu Logo" className="w-5 h-5 mr-2" />
                <p className="text-xl font-semibold text-[#2D3142]">RedBook</p>
              </div>
              <img src="/path-to-xiaohongshu-qr.png" alt="Xiaohongshu QR Code" className="mt-2 mx-auto w-32 h-32" />
            </div>
            {/* WeChat */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-md flex flex-col items-center">
              <div className='flex items-center'>
                <img src="/images/wechatlogo.png" alt="WeChat Logo" className="w-5 h-5 mr-2" />
                <p className="text-xl font-semibold text-[#2D3142]">WeChat</p>
              </div>
              <img src="/path-to-wechat-qr.png" alt="WeChat QR Code" className="mt-2 mx-auto w-32 h-32" />
            </div>
          </div>
        </div>

        {/* Terms and Privacy */}
        <div className="mt-32 text-center space-y-4">
          <Link href="/terms" className="text-2xl text-[#2D3142] hover:underline">
            Terms and Conditions
          </Link>
          <br />
          <Link href="/privacy" className="text-2xl text-[#2D3142] hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Navigation and Copyright */}
        <div className="mt-32 border-t border-gray-200 pt-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <Link href="#features" className="text-base text-gray-500 hover:text-gray-900">
                Features
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#pricing" className="text-base text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#support" className="text-base text-gray-500 hover:text-gray-900">
                Support
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                Terms
              </Link>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 Bloomnote, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}