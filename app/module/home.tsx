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
  const brandNameRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useInView(homeRef, { threshold: 0.6 });
  const isMobile = useMobile();
  const [isRealSafari, setIsRealSafari] = useState(false);
  const heartBeatReport = useHeartBeatReport(() => {}, 2000);

  useEffect(() => {
    setIsRealSafari(isSafari());
  }, []);
  return (
    <div
      ref={homeRef}
      className={cn('flex h-screen w-screen flex-col overflow-hidden pt-20', {
        'h-fill-available': isRealSafari,
      })}>
      <div className="flex flex-row w-full h-[60vh] justify-around px-10 mt-5 text-[16px] text-[#333] sm:text-[20px] [&_p]:text-center">
        <div className='felx flex-col w-[50%] px-5'>
          <h1
            className="text-[44px] font-[500] leading-[48px] tracking-[1px] mt-[150px]">
            如花般绽放，记录生活点滴
          </h1>
          <DownloadButtonGroup
            special
            show={true}
            className="mt-[120px] left-0"
          />
        </div>
        
        <div style={{ width: '50%', height: 'auto', position: 'relative' }}>
          <Image
            src="/images/Group@3x.png"
            alt="sun"
            width={580}
            height={600}
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
        {/* <div className="">
          <p>Bloomnote是一款功能强大的笔记应用</p>
          <p>应用提供多种模块，包括文本、表格、语音、心情、文件、链接预览等，满足您多样化的记录需求。</p>
          <p>您可以通过自定义样式，打造独特的笔记风格。</p>
          <p>借助时间线功能，轻松按日期组织笔记和日记，使信息管理更加高效和便捷。</p>
          <p>无论是工作还是生活，Bloomnote都是您的理想选择。</p>
        </div> */}
      </div>
      <ScrollDownIndicator show />
    </div>
  );
}
``;
