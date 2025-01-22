"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Footer from "../components/Footer"

export default function Home() {
  const [isIpad, setIsIpad] = useState(false)

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

