'use client';
import { useEffect, useMemo, useRef } from 'react';
import cn from 'clsx';
import { useGroup } from 'ease-motion';
import { useInView } from '../hooks';
import Slider from 'react-slick';
import { sceneConfig } from '../utils/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SceneVideoItem } from '../types';

interface SceneCarouselProps {
  className?: string;
  theme?: 'light' | 'dark';
  scenes: SceneVideoItem[];
}

export default function SceneCarousel(props: SceneCarouselProps) {
  const { theme = 'light', className } = props;
  const sliderRef = useRef(null);
  const { isIntersecting } = useInView(sliderRef, { once: true });
  const playActiveVideo = () => {
    const currentEl = document.querySelector('.slick-current video') as HTMLVideoElement;
    const notCurrentEls = document.querySelectorAll('.slick-slide video');
    notCurrentEls.forEach((el) => {
      const videoEL = el as HTMLVideoElement;
      if (!videoEL.classList.contains('slick-current')) {
        videoEL.pause();
      }
    });
    currentEl.play();
  };
  const sliderSettings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: playActiveVideo,
  };
  const list = useMemo(() => {
    return sceneConfig[theme];
  }, [theme]);
  const ctrl = useGroup(
    {
      selectors: ['.slick-slide'],
      keyframes: {
        opacity: [0, 1],
      },
      options: {
        duration: 1000,
        fill: 'both',
      },
    },
    [],
  );

  useEffect(() => {
    if (isIntersecting) {
      playActiveVideo();
    }
  }, [isIntersecting, theme]);

  useEffect(() => {
    ctrl.play();
  }, [theme]);
  return (
    <div ref={sliderRef}>
      <Slider
        {...sliderSettings}
        className={cn(
          'slider-container [&_.slick-center]:!scale-100 [&_.slick-slide]:scale-[82%] [&_.slick-slide]:transition-all [&_.slick-slide]:duration-300 [&_.slick-slide]:ease-linear',
          className,
        )}>
        {list.map((scene, index) => (
          <div key={index} className="h-[442px]">
            <div className="absolute bottom-0 z-10 h-[162px] w-full rounded-lg" style={scene.style}></div>
            <p className="absolute bottom-6 z-10 w-full text-center text-white">{scene.text}</p>
            <video
              poster={scene.poster}
              src={scene.url}
              muted
              loop
              playsInline
              className="absolute size-full rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
