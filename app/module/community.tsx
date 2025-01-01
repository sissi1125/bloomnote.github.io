'use client';
import cn from 'clsx';
import { useGroup } from 'ease-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { useInView, useMobile } from '../hooks';
import { communityCommentsConfig, communityVideosConfig } from '../utils/config';

export default function Community() {
  const ref = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>('');
  const { isIntersecting } = useInView(ref, { threshold: 0.4 });

  const isMobile = useMobile();
  const videoCtrl = useGroup(
    {
      selectors: ['.video-preview'],
      keyframes: isMobile
        ? [
            { opacity: 1, transform: 'translateY(-15px)', offset: 0.4 },
            { opacity: 1, transform: 'translateY(-13px)', offset: 1 },
          ]
        : {
            opacity: [1],
            transform: ['translateY(-45px)'],
          },
      options: {
        duration: 600,
        fill: 'both',
        easing: 'ease-in-out',
        delay: (_, index) => {
          return 200 + index * 120;
        },
      },
    },
    [isMobile],
  );
  const hTagCtrl = useGroup(
    {
      selectors: ['.h4-text'],
      keyframes: [
        { opacity: 1, transform: isMobile ? 'translateY(-15px)' : 'translateY(-30px)', offset: 0.4 },
        { opacity: 1, transform: isMobile ? 'translateY(-13px)' : 'translateY(-22px)', offset: 1 },
      ],
      options: {
        duration: 1000,
        fill: 'both',
        easing: 'ease-in-out',
        delay: (_, i) => {
          if (isMobile) {
            return i * 200;
          } else {
            return 0;
          }
        },
      },
    },
    [isMobile],
  );

  const sliderCtrl = useGroup(
    {
      selectors: ['.pc-slick'],
      keyframes: [
        { opacity: 1, transform: 'translateY(-30px)', offset: 0.4 },
        { opacity: 1, transform: 'translateY(-22px)' },
      ],
      options: {
        duration: 1000,
        fill: 'both',
        delay: 400,
      },
    },

    [],
  );

  const mobileSliderCtrl = useGroup(
    {
      selectors: ['.mobile-slick'],
      keyframes: [
        { opacity: 1, transform: 'translateY(-15px)', offset: 0.4 },
        { opacity: 1, transform: 'translateY(-13px)', offset: 1 },
      ],
      options: {
        duration: 1000,
        fill: 'both',
        delay: 120,
      },
    },
    [isMobile],
  );

  const videoMouseEvent = (id: string, type: 'enter' | 'leave') => {
    if (isMobile) return;
    const el = document.getElementById(id);
    if (type === 'enter') {
      el?.animate(
        {
          transform: ['scale(1.06) translateY(-44px)'],
        },
        { duration: 150, fill: 'both' },
      );
    } else {
      el?.animate(
        {
          transform: ['scale(1) translateY(-44px)'],
        },
        { duration: 150, fill: 'both' },
      );
    }
  };

  useEffect(() => {
    if (isIntersecting) {
      hTagCtrl.play();
      videoCtrl.play();
      sliderCtrl.play();
      isMobile && mobileSliderCtrl.play();
    } else {
      hTagCtrl.reverse();
      videoCtrl.reverse();
      sliderCtrl.reverse();
      isMobile && mobileSliderCtrl.reverse();
    }
  }, [isIntersecting, isMobile]);

  return (
    <div ref={ref} className="relative overflow-hidden sm:px-[9%]">
      <h4 className="h4-text mb-[20px] mt-[84px] text-center text-lg text-[#333] opacity-0 sm:mb-[34px] sm:mt-[120px] sm:text-start sm:text-[32px]">
        HEAR FROM OUR COMMUNITY
      </h4>
      <MobileCommentsSlick className="block sm:!hidden" />
      <PCCommentsSlick className="hidden sm:block" />
      <div className="space-y-5 px-[22px] sm:space-y-0 sm:px-0 sm:pb-[120px]">
        <h4 className="h4-text my-5 mt-5 text-center text-lg text-[#333] opacity-0 sm:my-0 sm:mt-20 sm:text-start sm:text-[32px]">{`YOUTUBERS'S REVIEWS`}</h4>
        <div className="flex flex-col items-center gap-5 sm:!mt-[75px] sm:flex-row sm:gap-12">
          {communityVideosConfig.map((video) => (
            <div
              id={`video-cover-${video.id}`}
              key={video.id}
              onClick={() => {
                setCurrentVideo(video.id);
                setShowModal(true);
              }}
              onMouseEnter={() => videoMouseEvent(`video-cover-${video.id}`, 'enter')}
              onMouseLeave={() => videoMouseEvent(`video-cover-${video.id}`, 'leave')}
              style={{ transformOrigin: 'center center' }}
              className="video-preview group relative aspect-video w-full cursor-pointer overflow-hidden rounded-[10px] opacity-0 before:absolute before:inset-0 before:z-10 before:bg-black/40 before:transition-all before:ease-linear sm:hover:before:bg-black/0">
      
              <Image src={video.cover} fill alt="cover" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

const settings = {
  dot: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
};
function MobileCommentsSlick({ className }: { className?: string }) {
  return (
    <Slider {...settings} arrows={false} className={cn('mobile-slick opacity-0 [&_.slick-slide]:px-[22px]', className)}>
      {communityCommentsConfig.map((item) => (
        <div
          key={item.id}
          className="!flex h-[110px] items-center overflow-hidden rounded-2xl border border-[#4E4E4E] p-[10px] px-3 text-[#333]">
          <div className="flex h-full w-[52px] flex-col items-center justify-center">
            <Image src={item.avatar} alt="avatar" width={52} height={52} />
            <p className="mt-1 text-center text-sm">{item.userName}</p>
          </div>
          <div className="ml-3 flex h-full flex-1 items-center text-[12px]">{item.comment}</div>
        </div>
      ))}
    </Slider>
  );
}

function PCCommentsSlick({ className }: { className?: string }) {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className={cn('pc-slick opacity-0', className)}>
      <div className="pointer-events-none absolute -top-[160px] right-[520px] text-[320px] text-[#333]/5">&#8220;</div>
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
        draggable={false}
        className="[&_.slick-arrow]:top-[140px] [&_.slick-arrow]:before:content-[unset] [&_.slick-next]:left-0 [&_.slick-prev]:left-[70px]">
        {communityCommentsConfig.map((item) => (
          <div key={item.id} className="!flex justify-between text-[#333]">
            <div className="user-avatar flex">
              <div className="relative h-[90px] w-[90px] rounded-full">
                <Image src={item.avatar} alt="avatar" fill />
              </div>
              <div className="ml-8 h-full">
                <p className="text-2xl text-[#333]">{item.userName}</p>
                <p className="text-xl text-[#333]/70">{item.extra}</p>
              </div>
            </div>
            <div className="user-comments relative z-10 w-[600px] text-xl leading-[2em] text-[#333]">{item.comment}</div>
          </div>
        ))}
      </Slider>
      <div className="flex gap-[30px]">
        <NextArrow onClick={() => sliderRef.current?.slickPrev()} />
        <PrevArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <span onClick={onClick} className="cursor-pointer">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M35.7071 20.7071C36.0976 20.3166 36.0976 19.6834 35.7071 19.2929L29.3431 12.9289C28.9526 12.5384 28.3195 12.5384 27.9289 12.9289C27.5384 13.3195 27.5384 13.9526 27.9289 14.3431L33.5858 20L27.9289 25.6569C27.5384 26.0474 27.5384 26.6805 27.9289 27.0711C28.3195 27.4616 28.9526 27.4616 29.3431 27.0711L35.7071 20.7071ZM5 21L35 21L35 19L5 19L5 21Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <span onClick={onClick} className="cursor-pointer">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.29289 20.7071C3.90237 20.3166 3.90237 19.6834 4.29289 19.2929L10.6569 12.9289C11.0474 12.5384 11.6805 12.5384 12.0711 12.9289C12.4616 13.3195 12.4616 13.9526 12.0711 14.3431L6.41421 20L12.0711 25.6569C12.4616 26.0474 12.4616 26.6805 12.0711 27.0711C11.6805 27.4616 11.0474 27.4616 10.6569 27.0711L4.29289 20.7071ZM35 21L5 21L5 19L35 19L35 21Z"
          fill="white"
        />
      </svg>
    </span>
  );
}
