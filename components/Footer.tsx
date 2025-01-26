import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="w-[80%] max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16">
        {/* Support Section */}
        <div id="support" className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-[#2D3142]">
            Support
          </h2>
          <div className="text-xl text-[#2D3142] space-y-1">
            <p>For any questions,</p>
            <p>email us at: feedback.bloomnote@gmail.com</p>
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

