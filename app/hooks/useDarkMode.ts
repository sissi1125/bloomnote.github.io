'use client';
import { useMedia } from 'react-use';
export function useDarkMode() {
  return useMedia('(prefers-color-scheme: dark)', false);
}
