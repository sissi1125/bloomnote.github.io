'use client';
import cn from 'clsx';
import { EASING_FUNCTIONS, useAnimate, useGroup, useMotion } from 'ease-motion';
import { useEffect, useRef } from 'react';
import DownloadButtonGroup from '../components/download-button-group';
import FeatureAccordion, { MobileFeatureAccordion } from '../components/feature-accordion';
import ScrollDownIndicator from '../components/scrollDownIndicator';
import { useInView, useMobile } from '../hooks';
import { mediaConfig } from '../utils/config';

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useInView(ref, { threshold: 0.6 });
  const isMobile = useMobile();
  const [titleRef, motion] = useMotion<HTMLHeadingElement>();
  const [sliderRef, sliderMotion] = useAnimate<HTMLDivElement>();
  const cubeSliderAnim = useRef<Animation | null>(null);
  const accordionCtrl = useGroup(
    {
      selectors: isMobile ? ['.mobile-fea-accordion'] : ['.pc-fea-accordion'],
      keyframes: [
        { opacity: 1, offset: 0.4 },
        {
          opacity: 1,
          transform: 'translateX(0)',
        },
      ],
      options: {
        duration: 800,
        fill: 'both',
        easing: 'ease',
        delay: (_, i) => {
          return 200 + i * 120;
        },
      },
    },
    [isMobile],
  );

  const joinCtrl = useGroup(
    {
      selectors: ['.join-text', '.m-join-btn'],
      keyframes: {
        opacity: [0, 1],
      },
      options: {
        duration: 400,
        fill: 'both',
        delay: (_, i) => {
          return 600 + i * 120;
        },
      },
    },
    [isMobile],
  );

  useEffect(() => {
    if (isIntersecting) {
      motion('fadeInUp', {
        fill: 'both',
        duration: 1000,
        easing: EASING_FUNCTIONS.easeOutBack,
      });
      cubeSliderAnim.current = sliderMotion(
        [
          { opacity: 0 },
          { opacity: 1, transform: 'translateX(-44px)', offset: 0.4 },
          { opacity: 1, transform: 'translateX(0px)' },
        ],
        {
          duration: 1000,
          fill: 'both',
          delay: 80,
          easing: 'ease-out',
        },
      );
      accordionCtrl.play();
      joinCtrl.play();
    } else {
      motion('fadeOutDown', {
        fill: 'both',
        duration: 1000,
        easing: EASING_FUNCTIONS.easeOutBack,
      });
      accordionCtrl.reverse();
      joinCtrl.reverse();
      cubeSliderAnim.current?.reverse();
    }
  }, [isIntersecting]);
  return (
    <div ref={ref} className="relative flex h-screen flex-col justify-center">
      <div className="mx-auto flex w-full items-center justify-between lg:max-w-[1000px] xl:max-w-[1250px]">
        <div ref={sliderRef} className="cube-slider relative hidden h-[248px] w-[331px] rounded-xl opacity-0 sm:block">
          {/* <Slider {...settings}>
            {mindtopiaSlickImg.map((item) => (
              <div key={item.id} className="relative h-[342px] w-[331px] overflow-hidden rounded-xl p-4 outline-none">
                <p className="relative z-10 max-w-[188px] text-lg leading-5 text-[#333]">
                  Join our community on Discord to{' '}
                </p>
                <p className="relative z-10 my-[10px] h-px bg-white"></p>
                <p className="relative z-10 whitespace-pre-line text-end text-2xl leading-6 text-[#333]">{item.title}</p>
                <Image src={item.url} alt="image" fill />
              </div>
            ))}
          </Slider> */}
          <div className="text-[28px] text-[#333]">
            <p>Join our community on</p>
            <p>Discord to</p>
            <div className="mt-[38px] bg-gradient-to-r from-[#CEEAAC] from-[-40%] to-[#70B442] to-[36%] bg-clip-text font-medium text-transparent">
              <p>Connect</p>
              <p>Share</p>
              <p>Get the latest updates</p>
            </div>
          </div>
          {/* <DiscordButton className="relative top-[52px] mx-auto" /> */}
        </div>
        <div className=" max-w-[600px] flex-1 sm:-mt-12">
          <h4
            ref={titleRef}
            className="relative w-full text-center text-lg uppercase text-[#333] opacity-0 sm:-top-[78px] sm:w-fit sm:text-[32px]">
            What makes mindtopia special?
          </h4>
          <FeatureAccordion className="hidden sm:block" />
          <MobileFeatureAccordion className="block px-[24px] sm:hidden" />
          <div className="mt-[71px] block pb-[100px] sm:hidden sm:pb-0">
            <div className="join-text opacity-0">
              <p className="text-center text-lg text-[#333]">Join our community on Discord to</p>
              <p className=" bg-gradient-to-r from-[#CEEAAC] from-[-40%] to-[#70B442] to-[36%] bg-clip-text text-center text-[22px] font-medium text-transparent">
                Connect, Meditate, Share
              </p>
            </div>
            <DiscordButton className="m-join-btn mx-auto mt-[35px] opacity-0" />
          </div>
        </div>
      </div>
      <DownloadButtonGroup
        show={isIntersecting}
        delay={0.4}
        className="absolute bottom-[74px] left-1/2 hidden -translate-x-1/2 sm:flex"
      />
      <ScrollDownIndicator show className="bottom-2" />
    </div>
  );
}

function DiscordButton({ className }: { className?: string }) {
  return (
    <a
      href={mediaConfig.discord}
      target="_black"
      className={cn(
        'group relative flex h-[40px] w-[154px] items-center justify-center rounded-[30px] border border-white bg-black/15 text-[#333] backdrop-blur-sm transition-all duration-200 ease-linear hover:bg-white hover:text-black',
        className,
      )}
      onClick={() => {}}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"
          fill="currentColor"
        />
      </svg>
      <span className="ml-2 text-[15px] sm:ml-3">Join Now</span>
    </a>
  );
}
