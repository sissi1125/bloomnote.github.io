'use client';
import cn from 'clsx';
import { useMultiple } from 'ease-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DownloadButtonGroup from '../components/download-button-group';
import ScrollDownIndicator from '../components/scrollDownIndicator';
import { useHeartBeatReport, useInView, useMobile } from '../hooks';
import { isSafari } from '../utils/utils';

export default function Home() {
  const lineRef = useRef<HTMLDivElement>(null);
  const brandNameRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useInView(homeRef, { threshold: 0.6 });
  const isMobile = useMobile();
  const [isRealSafari, setIsRealSafari] = useState(false);
  const heartBeatReport = useHeartBeatReport(() => {}, 2000);
  const ctrl = useMultiple<HTMLDivElement>(
    {
      baseOptions: {
        duration: 1000,
        fill: 'both',
      },
      config: [
        {
          ref: brandNameRef,
          keyframes: [
            { opacity: 0, transform: 'translateY(-20px)', offset: 0 },
            { opacity: 1, transform: 'translateY(0)', offset: 1 },
          ],
          options: {
            delay: 200,
          },
        },
        {
          ref: logoRef,
          keyframes: [
            { opacity: 0, transform: 'rotate(0deg)', offset: 0 },
            { opacity: 1, transform: 'rotate(180deg)', offset: 1 },
          ],
        },
        // {
        //   ref: lineRef,
        //   keyframes: [
        //     { opacity: 1, transform: isMobile ? 'translateY(-15px)' : 'translateY(-32px)', offset: 0.4 },
        //     { opacity: 1, transform: isMobile ? 'translateY(-13px)' : 'translateY(-26px)' },
        //   ],
        // },
      ],
    },
    [isMobile],
  );

  useEffect(() => {
    if (isIntersecting) {
      ctrl.play();
      heartBeatReport.report();
    } else {
      ctrl.reverse();
      heartBeatReport.clear();
    }
  }, [isIntersecting]);

  useEffect(() => {
    setIsRealSafari(isSafari());
  }, []);
  return (
    <div
      ref={homeRef}
      className={cn('flex h-screen w-screen flex-col justify-center overflow-hidden', {
        'h-fill-available': isRealSafari,
      })}>
      <div className="flex flex-col items-center justify-center px-10 text-[16px] text-[#333] [&_p]:home-text-shadow sm:[&_p]:home-text-shadow sm:text-[20px] [&_p]:text-center">
        <div
          // ref={brandNameRef}
          className="text-[44px] font-[500] leading-[48px] tracking-[2px] sm:text-[90px] sm:tracking-[5px]">
          BloomNote
        </div>
        <div className="my-10 flex h-[90px] w-[90px] items-center justify-center rounded-[10px] ">
          <Image ref={logoRef} src="/images/bloom-logo.png" alt="sun" width={72} height={72} />
        </div>
        <div className="">
          <p>BloomNote是一款功能强大的笔记应用</p>
          <p>应用提供多种模块，包括文本、表格、语音、心情、文件、链接预览等，满足您多样化的记录需求。</p>
          <p>您可以通过自定义样式，打造独特的笔记风格。</p>
          <p>借助时间线功能，轻松按日期组织笔记和日记，使信息管理更加高效和便捷。</p>
          <p>无论是工作还是生活，BloomNote都是您的理想选择。</p>
        </div>
      </div>
      <DownloadButtonGroup
        special
        show={isIntersecting}
        delay={isMobile ? 0.6 : 0.4}
        className="absolute bottom-[108px] left-1/2 -translate-x-1/2 sm:bottom-[74px]"
      />
      <ScrollDownIndicator show />
      {/* <BannerVideo posterUrl={posterUrl} url={videoUrl} /> */}
    </div>
  );
}
``;
