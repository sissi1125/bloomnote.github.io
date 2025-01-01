'use client';
import { useEffect, useState, RefObject } from 'react';
interface UseInViewOptions {
  once?: boolean;
  threshold?: number;
}
export const useInView = (el: RefObject<HTMLElement>, options?: UseInViewOptions) => {
  const { once = false, threshold = 0 } = options || {};
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = el?.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entity]) => {
        if (once) {
          if (entity.isIntersecting) {
            setIsIntersecting(entity.isIntersecting);
          }
        } else {
          setIsIntersecting(entity.isIntersecting);
        }
      },
      { threshold: threshold },
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [threshold, el, once]);
  return { isIntersecting };
};
