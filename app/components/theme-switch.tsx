'use client';
import { useState } from 'react';
import cn from 'clsx';
import Image from 'next/image';
export type Theme = 'light' | 'dark';

interface ThemeSwitchProps {
  className?: string;
  defaultTheme?: Theme;
  onThemeChange?: (theme: Theme) => void;
}
export default function ThemeSwitch(props: ThemeSwitchProps) {
  const { className, defaultTheme = 'light', onThemeChange } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    onThemeChange?.(theme);
  };
  return (
    <div className={cn('relative z-20 h-10 overflow-hidden rounded-full', className)}>
      <div className="relative z-20 flex size-full">
        <div
          className={cn('flex h-full w-1/2 cursor-pointer items-center justify-center transition', {
            'opacity-60': theme === 'dark',
          })}
          onClick={() => handleThemeChange('light')}>
          <Image src="/images/icon-sun.png" alt="sun" width={24} height={24} />
          <span className="ml-1 select-none text-[12px] text-white [text-shadow:0_0_2px_#fff]">DAY</span>
        </div>
        <div
          className={cn('flex h-full w-1/2 cursor-pointer items-center justify-center transition', {
            'opacity-60': theme === 'light',
          })}
          onClick={() => handleThemeChange('dark')}>
          <Image src="/images/icon-moon.png" alt="sun" width={24} height={24} />
          <span className="ml-1 select-none text-[12px] text-white [text-shadow:0_0_2px_#fff]">NIGHT</span>
        </div>
      </div>
      <>
        <Image src="/images/switch-bg.png" alt="switch" fill className="hidden sm:block" />
        <Image src="/images/switch-bg-m.png" alt="switch" fill className="block sm:hidden" />
      </>
      <div
        className={cn('absolute left-0 top-0 h-full w-1/2 rounded-full transition-all duration-200 ease-linear', {
          'translate-x-full': theme === 'dark',
        })}>
        <>
          <Image src="/images/switch-thumb.png" fill alt="switch thumb" className="hidden sm:block" />
          <Image src="/images/switch-thumb-m.png" fill alt="switch thumb" className="block sm:hidden" />
        </>
      </div>
    </div>
  );
}
