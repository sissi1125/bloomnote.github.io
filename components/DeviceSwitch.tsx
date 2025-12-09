"use client"

import { motion } from "framer-motion"

interface DeviceSwitchProps {
  onToggle: (isIpad: boolean) => void
  isIpad: boolean
}

export default function DeviceSwitch({ onToggle, isIpad }: DeviceSwitchProps) {
  const handleToggle = (newIsIpad: boolean) => {
    onToggle(newIsIpad)
  }

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="bg-gray-200 p-1 rounded-full">
        <motion.div className="flex relative" layout>
          <motion.div
            className="absolute top-0 left-0 h-full bg-theme rounded-full pointer-events-none"
            // style={{ 
            //   width: 'calc(33.333%)',
            // }}
            style={{ 
              width: '50%',
            }}
            animate={{ x: isIpad ? "calc(100%)" : "2px" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button
            onClick={() => handleToggle(false)}
            className={`flex-1 px-6 py-2 text-sm font-medium rounded-full relative z-10 transition-colors duration-200 ${
              !isIpad ? "text-white" : "text-gray-700"
            }`}
          >
            iPhone
          </button>
          <button
            onClick={() => handleToggle(true)}
            className={`flex-1 px-6 py-2 text-sm font-medium rounded-full relative z-10 transition-colors duration-200 ${
              isIpad ? "text-white" : "text-gray-700"
            }`}
          >
            iPad
          </button>
          {/* <div className="flex-1 relative group">
            <button
              disabled
              className="w-full px-6 py-2 text-sm font-medium rounded-full relative z-10 text-gray-400 cursor-not-allowed opacity-60"
            >
              Mac
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
              Mac - Coming Soon
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div> */}
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-2">
        {/* <span className="text-xs text-gray-400">Mac - Coming Soon</span> */}
        {isIpad && (
          <span className="text-xs text-gray-500 font-lexend-deca">
            Currently available on Mac via iPad version
          </span>
        )}
      </div>
    </div>
  )
}

