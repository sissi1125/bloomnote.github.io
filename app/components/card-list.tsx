'use client';
import { useAnimate, useGroup } from 'ease-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMobile } from '../hooks';
import { mindtopiaDemoVideo } from '../utils/config';
import ProductCard from './productCard';
export default function CardList() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const { isIntersecting } = useInView(ref, { threshold: 0.6 });
  const [titleRef, animate] = useAnimate<HTMLParagraphElement>();
  const titleAnimation = useRef<Animation>();

  const productAniCtrl = useGroup(
    {
      selectors: ['.product-card'],
      keyframes: [
        { transform: isMobile ? 'translateX(20%)' : 'translateY(30%)' },
        { transform: 'translate(0,0)', opacity: 1 },
      ],
      options: {
        duration: 600,
        fill: 'both',
        easing: 'ease-out',
        delay: (_, i) => {
          return i * 120;
        },
      },
    },
    [isMobile],
  );

  useEffect(() => {
    if (isIntersecting) {
      titleAnimation.current = animate(
        [
          { opacity: 0 },
          { opacity: 1, transform: isMobile ? 'translateY(-15px)' : 'translateY(-30px)', offset: 0.4 },
          {
            opacity: 1,
            transform: isMobile ? 'translateY(-13px)' : 'translateY(-22px)',
          },
        ],
        {
          duration: 1000,
          fill: 'both',
          easing: 'ease-out',
        },
      );

      productAniCtrl.play();
    } else {
      titleAnimation.current?.reverse();
      productAniCtrl.reverse();
    }
  }, [isIntersecting, isMobile]);

  // TODO 补充四个video资源
  const handleOnProductCardClick = (type: string) => {
    console.log(type);
    const videoInfo = mindtopiaDemoVideo.find((item) => item.type === type);
  };

  return (
    <div
      ref={ref}
      className="relative z-10 flex flex-col overflow-hidden px-[22px] pb-[120px] sm:justify-center sm:px-0 sm:pb-[230px]">
      <p
        ref={titleRef}
        className="relative mb-[22px] mt-[60px] text-center text-lg uppercase text-[#333] opacity-0 sm:mb-[78px] sm:text-[32px]">
        What would you like to do today?
      </p>
      <div className="sm:flx-row z-10 flex flex-col items-center justify-center gap-[24px] sm:h-[330px] sm:flex-row sm:gap-[30px] xl:gap-[50px]">
        <ProductCard className="opacity-0" type="breathe" onClick={() => handleOnProductCardClick('breathe')} />
        <ProductCard className="opacity-0" type="meditate" onClick={() => handleOnProductCardClick('meditate')} />
        <ProductCard className="opacity-0" type="explore" onClick={() => handleOnProductCardClick('explore')} />
        <ProductCard className="opacity-0" type="mood-talk" onClick={() => handleOnProductCardClick('mood-talk')} />
      </div>
      {/* <div className="absolute inset-0 -z-[1] hidden h-full w-full bg-black sm:block">
        <Image
          alt="bg"
          fill
          className="h-full w-full object-cover opacity-30"
          src="https://appasset.xverse.cn/98/plane/1531df153dd44f1899001511b248d0fc/card-list-pc-bg.jpg"
        />
      </div>
      <div className="absolute inset-0 -z-[1] block h-full w-full bg-black sm:hidden">
        <Image
          alt="bg"
          fill
          className="object-cover opacity-30 sm:block"
          src="https://appasset.xverse.cn/98/plane/f81c1d015b8c43b3bac4a79c7e254c85/card-list-mobile-bg.jpg"
        />
      </div> */}
    </div>
  );
}
