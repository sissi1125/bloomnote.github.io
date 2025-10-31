"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  isIpad: boolean
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.slice(1)
      const targetElement = document.getElementById(targetId || "")
      if (targetElement) {
        const navbarHeight = 64 // Adjust this value if your navbar height changes
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <div className="flex items-center justify-between h-16 shadow-lg rounded-full px-4 sm:px-8 py-2 bg-white">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/appIcon.png?v=2" alt="Bloomnote Logo" width={24} height={24} />
              <span className="text-base font-medium text-gray-900">Bloomnote</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-12">
            <a href="#features" className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium">
              Pricing
            </a>
            <a href="#support" className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium">
              Support
            </a>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
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
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#support"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Support
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

