"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const updatesDropdownRef = useRef<HTMLDivElement>(null)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    if (isHomePage) {
      // If on home page, just scroll to the section
      const targetElement = document.getElementById(hash.slice(1))
      if (targetElement) {
        const navbarHeight = 64
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
      setIsOpen(false)
    } else {
      // If not on home page, navigate to home with hash
      window.location.href = `/${hash}`
      setIsOpen(false)
    }
  }

  useEffect(() => {
    // Handle hash scrolling when arriving at home page with hash
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.slice(1)
      setTimeout(() => {
        const targetElement = document.getElementById(hash)
        if (targetElement) {
          const navbarHeight = 64
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [isHomePage])

  // Handle click outside to close Updates dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        updatesDropdownRef.current &&
        !updatesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUpdatesOpen(false)
      }
    }

    if (isUpdatesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isUpdatesOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <div className="flex items-center justify-between h-16 shadow-2xl rounded-full px-4 sm:px-8 py-2 bg-white/90 backdrop-blur" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/appIcon.png?v=2" alt="Bloomnote Logo" width={24} height={24} unoptimized />
              <span className="text-xl font-bold text-theme">Bloomnote</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-10">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, "#features")}
              className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
            >
              Pricing
            </a>
            <div 
              ref={updatesDropdownRef}
              className="relative"
              onMouseEnter={() => setIsUpdatesOpen(true)}
            >
              <button 
                onClick={() => setIsUpdatesOpen(!isUpdatesOpen)}
                className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium flex items-center gap-1"
              >
                Updates
                <ChevronDown className={`w-4 h-4 transition-transform ${isUpdatesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isUpdatesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[140px] z-50">
                  <Link
                    href="/changelog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsUpdatesOpen(false)}
                  >
                    Changelog
                  </Link>
                  {/* <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsUpdatesOpen(false)}
                  >
                    Blog
                  </Link> */}
                {/* <Link
                  href="/templates"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  Templates
                </Link> */}
                </div>
              )}
            </div>
            <a 
              href="#support" 
              onClick={(e) => handleNavClick(e, "#support")}
              className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
            >
              Support
            </a>
      
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 h-10 w-10 flex items-center justify-center rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-white shadow-lg mt-2 rounded-lg mx-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "#features")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Pricing
            </a>
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsUpdatesOpen(!isUpdatesOpen)
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Updates
                <ChevronDown className={`w-4 h-4 transition-transform ${isUpdatesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isUpdatesOpen && (
                <div className="pl-4 space-y-1">
                  <button
                    type="button"
                    className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setIsOpen(false)
                      setIsUpdatesOpen(false)
                      // Use window.location for reliable navigation
                      window.location.href = '/changelog'
                    }}
                  >
                    Changelog
                  </button>
                  {/* <button
                    type="button"
                    className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      console.log("Blog clicked")
                      e.preventDefault()
                      e.stopPropagation()
                      setIsOpen(false)
                      setIsUpdatesOpen(false)
                      // Use window.location for reliable navigation
                      window.location.href = '/blog'
                    }}
                  >
                    Blog
                  </button> */}
                </div>
              )}
            </div>
            <a
              href="#support"
              onClick={(e) => handleNavClick(e, "#support")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Support
            </a>
            <Link
              href="/templates"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Templates
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

