/**
 * 主题颜色配置
 * Theme Color Configuration
 */

export const colors = {
  // 主题色 - 橙色
  primary: {
    DEFAULT: '#3b465c',
    hover: '#2a3447',
    light: '#3b465c',
    dark: '#2a3447',
  },
  
  // 次要颜色
  secondary: {
    DEFAULT: '#2D3142',
    hover: '#1f2333',
    light: '#4a5169',
    dark: '#1a1d29',
  },
  
  // 中性色
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // 状态颜色
  status: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },

  highlight: {
    DEFAULT: '#ff770e',
    hover: '#e6690d',
    light: '#ff8a33',
    dark: '#cc5f0b',
  },
}

// 主题色导出（便于直接使用）
export const themeColor = colors.primary.DEFAULT
export const themeColorHover = colors.primary.hover

