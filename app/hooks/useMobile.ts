'use client';
import { useState, useEffect } from 'react';

export const useMobile = (breakPoint: number = 640): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const mediaQuery = window.matchMedia(`(max-width: ${breakPoint}px)`);
    return mediaQuery.matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakPoint}px)`);

    // 定义事件处理函数
    const onMediaQueryChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    // 添加事件监听器
    mediaQuery.addEventListener('change', onMediaQueryChange);

    // 清理函数
    return () => {
      mediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, [breakPoint]); // 依赖数组确保只在客户端运行

  return isMobile;
};
