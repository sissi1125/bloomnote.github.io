'use client';
import { useEffect, useMemo, useRef } from 'react';
import cn from 'clsx';
import { useGroup } from 'ease-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SceneVideoItem } from '../types';
import Image from 'next/image';
import { appImagesConfig } from '../utils/bloomconfig';

interface SceneCarouselProps {
  className?: string;
  theme?: 'light' | 'dark';
  scenes: SceneVideoItem[];
}

export default function SceneCarousel(props: SceneCarouselProps) {
  const { theme = 'light', className } = props;
 
  const sliderSettings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

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

  return (
      <Slider
        {...sliderSettings}
        className={cn(
          'slider-container [&_.slick-center]:!scale-100 [&_.slick-slide]:scale-[82%] [&_.slick-slide]:transition-all [&_.slick-slide]:duration-300 [&_.slick-slide]:ease-linear',
          className,
        )}>
        {appImagesConfig.map((item, index) => (
          <div className='h-[60vh] w-[auto] aspect-[146/318] !flex justify-center items-center px-2'>
            <Image
              key={index}
              src={item.url}
              alt=""
              width={73} height={159}
              className="h-[60vh] w-[auto] aspect-[146/318] rounded-lg "
            />
          </div>
        ))}
      </Slider>
  );
}
