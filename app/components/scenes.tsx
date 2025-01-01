'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGroup } from 'ease-motion';
import ThemeSwitch from './theme-switch';
import ExpandingScene from './expanding-scene';
import SceneCarousel from './scene-carousel';
import { sceneConfig } from '../utils/config';
import { useInView, useMobile } from '../hooks';

export default function Scenes() {
  const scenesRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { isIntersecting } = useInView(scenesRef, { threshold: 0.6 });
  const isMobile = useMobile();
  const titleThemeCtrl = useGroup(
    {
      selectors: ['.scene-title-p', '.theme-switch'],
      keyframes: [
        { opacity: 1, transform: isMobile ? 'translateY(-15px)' : 'translateY(-30px)', offset: 0.4 },
        { opacity: 1, transform: isMobile ? 'translateY(-13px)' : 'translateY(-22px)' },
      ],
      options: {
        duration: 1000,
        delay: (_, i) => {
          if (isMobile) {
            return i * 680;
          }
          return i * 200;
        },
        fill: 'both',
        easing: 'ease-in-out',
      },
    },
    [isMobile],
  );

  const sceneSubtitleCtrl = useGroup(
    {
      selectors: isMobile ? ['.scene-carousel-box'] : ['.scene-expanding', '.subtitle-bottom'],
      keyframes: {
        opacity: [0, 1],
      },
      options: {
        duration: 800,
        fill: 'both',
        delay: (_, i) => {
          return 400 + i * 200;
        },
        easing: 'ease-in-out',
      },
    },
    [isMobile],
  );

  useEffect(() => {
    if (isIntersecting) {
      titleThemeCtrl.play();
      sceneSubtitleCtrl.play();
    } else {
      titleThemeCtrl.reverse();
      sceneSubtitleCtrl.reverse();
    }
  }, [isIntersecting]);

  return (
    <div ref={scenesRef} className="relative flex h-screen flex-col sm:h-auto">
      <p className="scene-title-p relative mt-[120px] text-center uppercase text-white opacity-0 sm:mt-[92px] sm:text-[32px]">
        What would you like to do today?
      </p>
      <div className="scene-carousel-box mt-8 block opacity-0 sm:hidden">
        <SceneCarousel scenes={sceneConfig.light} theme={theme} />
      </div>
      <ThemeSwitch
        className="theme-switch mx-auto mt-[64px] w-[268px] opacity-0 sm:mb-0 sm:mt-3 sm:w-[194px]"
        onThemeChange={setTheme}
      />
      <div className="scene-expanding relative mt-3 hidden h-[532px] w-full opacity-0 sm:block">
        <AnimatePresence>
          {theme === 'light' && (
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'linear' }}>
              <ExpandingScene scenes={sceneConfig.light} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {theme === 'dark' && (
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'linear' }}>
              <ExpandingScene scenes={sceneConfig.dark} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="subtitle-bottom hidden text-center uppercase text-white/70 opacity-0 sm:mb-[92px] sm:mt-5 sm:block sm:text-2xl">
        Choose from six immersive scenes
      </p>
      <Image
        alt="bg"
        fill
        className="-z-[1] hidden h-full w-full object-cover sm:block"
        src="https://asset-sh.xverse.cn/compress/image/feb0fd2dbe80427a8476986e68cad4c6/20240409121032.png"
      />
      <Image
        alt="mobile-bg"
        fill
        className="-z-[1] h-full w-full object-cover sm:hidden"
        src="https://appasset.xverse.cn/98/plane/f5e269eb2a704216832e9033ed2e572d/20240416125208.png"
      />
    </div>
  );
}
