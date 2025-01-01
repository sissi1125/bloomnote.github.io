import { useRef } from 'react';
export function useEnterPageReport<T>(fn: (...args: T[]) => void, threshold: number = 2000) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const report = () => {
    timerRef.current = setTimeout(fn, threshold);
  };
  const clear = () => {
    clearTimeout(timerRef.current);
  };

  return { report, clear };
}
