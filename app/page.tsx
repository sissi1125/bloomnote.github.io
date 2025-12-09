"use client"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Footer from "../components/Footer"

export default function Home() {
  const [isIpad, setIsIpad] = useState(false)

  useEffect(() => {
    // Handle hash scrolling when page loads
    if (window.location.hash) {
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
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero isIpad={isIpad} setIsIpad={setIsIpad} />
        <Features isIpad={isIpad} />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

