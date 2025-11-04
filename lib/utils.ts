import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 获取当前年月（格式：YYYYMM，例如：202501）
export function getMonthVersion(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  return `${year}${month}`
}

// 生成默认占位图片（内嵌 SVG）
export function getPlaceholderImage(width: number = 800, height: number = 600): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f9fafb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f3f4f6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <g transform="translate(${width / 2}, ${height / 2})">
        <circle cx="0" cy="0" r="50" fill="#e5e7eb" opacity="0.3"/>
        <path d="M-24,-12 L-12,-12 L-12,-24 L12,-24 L12,-12 L24,-12 L24,12 L-24,12 Z" 
              fill="none" stroke="#d1d5db" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="0" cy="0" r="10" fill="#d1d5db" opacity="0.6"/>
        <path d="M-18,18 L18,18" stroke="#d1d5db" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>
  `.trim()
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`
}
