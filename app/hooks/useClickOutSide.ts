'use client';

import { useEffect } from 'react';
export function useClickOutSide<T extends HTMLElement>(ref: React.RefObject<T>, callback: (el: Node) => void) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback(event.target as Node);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
