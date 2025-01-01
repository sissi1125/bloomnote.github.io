'use client';
import { useGroup, useMultiple } from 'ease-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ScrollDownIndicator from '../components/scrollDownIndicator';
import { useEnterPageReport, useHeartBeatReport, useInView, useMobile } from '../hooks';
export default function Help() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const learnMoreRef = useRef<HTMLImageElement>(null);
  const isMobile = useMobile();
  const { isIntersecting } = useInView(overviewRef, { threshold: 0.6 });
  const hbReportCtrl = useHeartBeatReport(() => {}, 2000);
  const enterPageReportCtrl = useEnterPageReport(() => {});
  const ctrl = useMultiple(
    {
      baseOptions: {
        duration: 1000,
        fill: 'both',
        easing: 'ease-in-out',
      },
      baseKeyframes: [
        {
          opacity: 1,
          transform: 'translateX(74px)',
          offset: 0.4,
        },
        {
          transform: 'translateX(48px)',
          opacity: 1,
        },
      ],
      config: [
        {
          ref: p1Ref,
        },
        {
          ref: p2Ref,
          options: {
            delay: 200,
          },
        },
        { ref: p3Ref, options: { delay: 400 } },
        {
          ref: learnMoreRef,
          keyframes: {
            opacity: [0, 1],
          },
          options: {
            delay: 600,
          },
        },
      ],
    },
    [],
  );
  const mobileCtrl = useGroup(
    {
      selectors: ['svg.logo-shape', '.mobile-p'],
      keyframes: [
        { opacity: 0 },
        { opacity: 1, transform: 'translateY(-15px)', offset: 0.4 },
        { opacity: 1, transform: 'translateY(-10px)' },
      ],
      options: {
        duration: 1000,
        fill: 'both',
        delay: (_, index) => {
          return index * 100;
        },
      },
    },
    [],
  );
  useEffect(() => {
    if (isMobile) {
      isIntersecting ? mobileCtrl.play() : mobileCtrl.reverse();
    } else {
      isIntersecting ? ctrl.play() : ctrl.reverse();
    }

    if (isIntersecting) {
      hbReportCtrl.report();
      enterPageReportCtrl.report();
    } else {
      hbReportCtrl.clear();
      enterPageReportCtrl.clear();
    }
  }, [isIntersecting, isMobile]);

  return (
    <div ref={overviewRef} className="relative flex h-screen items-center overflow-hidden">
      <div className="z-10 ml-auto hidden w-[50%] text-[#333] sm:block sm:space-y-[50px] sm:pr-[110px] sm:text-xl">
        <p ref={p1Ref} className="group-1 opacity-0">
          Step into Mindtopia, a serene oasis in virtual reality, offering a calming and immersive experience wherever
          you are.
        </p>
        <p ref={p2Ref} className="group-1 opacity-0">
          Customize your environment and engage in mindfulness practices to unwind and recharge. With simplistic
          features and captivating visuals, Mindtopia provides a tranquil retreat for everyone.
        </p>
        <p ref={p3Ref} className="p3 opacity-0">
          Explore Mindtopia on your Meta Quest or Vision Pro today and begin your journey to inner peace.
        </p>
      </div>
      <div className="z-10 flex w-full flex-col items-center sm:hidden">
        <svg
          className="logo-shape"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.1761 25.924C34.1761 34.7186 41.2582 41.848 49.9943 41.848C50.8648 41.848 51.719 41.7773 52.5513 41.6411C50.6493 42.2891 48.6996 43.0159 46.7246 43.8186C31.3609 50.0629 20.287 58.5406 21.9902 62.7541C22.9458 65.1179 27.7201 65.6374 34.4406 64.5352C25.783 66.943 20 71.2997 20 76.2745C20 83.856 33.4315 90.0021 50 90.0021C66.5685 90.0021 80 83.856 80 76.2745C80 68.6929 66.5685 62.5469 50 62.5469C46.6234 62.5469 43.377 62.8021 40.3481 63.2728C44.2401 62.2689 48.5039 60.8604 52.8924 59.0767C68.2561 52.8324 79.33 44.3547 77.6268 40.1412C76.3099 36.8834 67.7396 37.1288 56.8178 40.2944C62.1381 37.7296 65.8125 32.2588 65.8125 25.924C65.8125 17.1294 58.7305 10 49.9943 10C41.2582 10 34.1761 17.1294 34.1761 25.924Z"
            fill="white"
          />
        </svg>
        <p className="mobile-p mt-8 text-center text-[#333]">
          Step into Mindtopia, a serene oasis in virtual reality, offering a calming and immersive experience wherever
          you are.
        </p>
      </div>
      <Image
        ref={learnMoreRef}
        src="/images/learn-more.png"
        width={120}
        height={58}
        className="absolute bottom-[52px] left-1/2 hidden -translate-x-1/2 opacity-0 sm:block"
        alt="learn more"
      />
      <ScrollDownIndicator show showDelay={600} />
    </div>
  );
}
