"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface DeviceSwitchProps {
  onToggle: (isIpad: boolean) => void
  isIpad: boolean
}

export default function DeviceSwitch({ onToggle, isIpad }: DeviceSwitchProps) {
  //const [isIpad, setIsIpad] = useState(false)

  const handleToggle = (newIsIpad: boolean) => {
    onToggle(newIsIpad)
  }

  return (
    <div className="flex items-center justify-center my-8">
      <div className="bg-gray-200 p-1 rounded-full">
        <motion.div className="flex relative" layout>
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#FF770E] rounded-full"
            animate={{ x: isIpad ? "100%" : "0%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button
            onClick={() => handleToggle(false)}
            className={`px-6 py-2 text-sm font-medium rounded-full relative z-10 transition-colors duration-200 ${
              !isIpad ? "text-white" : "text-gray-700"
            }`}
          >
            iPhone
          </button>
          <button
            onClick={() => handleToggle(true)}
            className={`px-6 py-2 text-sm font-medium rounded-full relative z-10 transition-colors duration-200 ${
              isIpad ? "text-white" : "text-gray-700"
            }`}
          >
            iPad
          </button>
        </motion.div>
      </div>
    </div>
  )
}

