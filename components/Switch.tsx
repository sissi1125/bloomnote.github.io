"use client"

import { useState } from "react"

interface SwitchProps {
  onToggle: (isIpad: boolean) => void
}

export default function Switch({ onToggle }: SwitchProps) {
  const [isIpad, setIsIpad] = useState(false)

  const handleToggle = () => {
    setIsIpad(!isIpad)
    onToggle(!isIpad)
  }

  return (
    <div className="flex items-center justify-center space-x-3">
      <span className={`text-sm font-medium ${isIpad ? "text-gray-500" : "text-gray-900"}`}>iPhone</span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isIpad ? "bg-indigo-600" : "bg-gray-200"
        }`}
      >
        <span className="sr-only">Toggle iPad/iPhone view</span>
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isIpad ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <span className={`text-sm font-medium ${isIpad ? "text-gray-900" : "text-gray-500"}`}>iPad</span>
    </div>
  )
}

