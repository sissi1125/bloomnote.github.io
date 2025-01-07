'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGroup } from 'ease-motion';
import ExpandingScene from './../components/expanding-scene';
import { sceneConfig } from '../utils/config';
import { useInView, useMobile } from '../hooks';
import SceneCarousel from '../components/scene-carousel';

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
        //   if (isMobile) {
        //     return i * 680;
        //   }
          return i * 680;
        },
        fill: 'both',
        easing: 'ease-in-out',
      },
    },
    [isMobile],
  );

  const sceneSubtitleCtrl = useGroup(
    {
    //   selectors: isMobile ? ['.scene-carousel-box'] : ['.scene-expanding', '.subtitle-bottom'],
      selectors:['.scene-carousel-box'],
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
    //   titleThemeCtrl.play();
    //   sceneSubtitleCtrl.play();
    } else {
    //   titleThemeCtrl.reverse();
    //   sceneSubtitleCtrl.reverse();
    }
  }, [isIntersecting]);

  return (
    <div className="relative flex h-screen flex-col">
      <p className="scene-title-p relative mt-[120px] text-center uppercase text-[#333]  sm:mt-[92px] sm:text-[32px]">
        {/* What would you like to do today? */}
      </p>
      <div className="scene-carousel-box mt-8 block">
        <SceneCarousel scenes={sceneConfig.light} theme={'light'} />
      </div>
    </div>
  );
}
