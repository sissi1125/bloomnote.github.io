'use client';
import { useRef } from 'react';
export function useHeartBeatReport<T>(fn: (...args: T[]) => void, ms: number = 2000) {
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const clear = () => {
    clearInterval(timerRef.current);
  };

  function report() {
    timerRef.current = setInterval(fn, ms);
  }

  const controller = {
    report,
    clear,
  };

  return controller;
}
