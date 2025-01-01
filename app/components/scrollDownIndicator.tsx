import Image from 'next/image';
import cn from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll, useDebounce } from 'react-use';
interface ScrollDownIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  showDelay?: number;
  show?: boolean;
}

export default function ScrollDownIndicator(props: ScrollDownIndicatorProps) {
  const { show, className, style, showDelay = 400 } = props;
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [screenHeight, setScreenHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { y } = useWindowScroll();

  useDebounce(
    () => {
      if (y >= screenHeight && y === 0) {
        setVisible(false);
        clearTimeout(timer.current);
      }
    },
    100,
    [y],
  );

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    setVisible(!!show);
    if (show) {
      timer.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [show]);

  return (
    <div
      ref={ref}
      className={cn(
        'pointer-events-none absolute bottom-[54px] left-[calc(50vw_-_13px)] z-20 flex size-[26px] items-center justify-center opacity-0 transition-opacity duration-[400ms] sm:hidden',
        { 'opacity-100': visible },
        className,
      )}
      style={{
        ...style,
        transitionDelay: `${showDelay}ms`,
      }}>
      <Image src="/images/scroll-down.png" fill alt="scroll-down" />
    </div>
  );
}
