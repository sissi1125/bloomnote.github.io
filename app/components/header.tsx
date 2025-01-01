'use client';
import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { tv } from 'tailwind-variants';
import Image from 'next/image';
import { BloomNavEnum } from '../utils/bloomconfig';
import { useClickOutSide } from '../hooks';
// import { mediaConfig } from '../utils/config';
import ToggleButton from './toggle-button';

const navList = [
  {
    label: '功能',
    id: BloomNavEnum.FEATURES,
  },
  {
    label: '价格',
    id: BloomNavEnum.PRICING,
  },
  {
    label: '帮助',
    id: BloomNavEnum.HELP,
  },
  {
    label: '联系我们',
    id: BloomNavEnum.CONTACT,
  },
];

const pcNavItem = tv({
  base: 'list-none whitespace-nowrap h-[64px] flex items-center text-[20px] text-[#333] cursor-pointer transition-all hover:hover-nav',
});

const logoItem = tv({
  base: 'mx-[36px] list-none whitespace-nowrap h-[64px] flex items-center text-[20px] font-bold text-[#333] cursor-pointer hover:hover-nav',
});

const mobileNavItem = tv({
  base: 'z-20 block h-[36px] px-[25px] list-none mb-[16px] last:mb-0 last:after:content-[unset] text-[#333] relative after:w-full after:left-[25px] after:absolute after:bottom-0 after:h-px after:bg-gradient-to-r after:from-white/40 after:to-transparent',
});

const startBtn = tv({
  slots: {
    base: 'hidden shrink-0 justify-center items-center sm:flex flex-nowrap w-[180px] h-10 p-px text-xl relative rounded-full bg-[url("/images/start-btn.png")] hover:bg-[position:0_-40px] bg-cover bg-no-repeat group',
    inner:
      'w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-gradient-button rounded-full absolute opacity-20 transition group-hover:opacity-40',
    text: 'w-full h-full px-4 flex justify-center items-center text-lg text-[#333] z-10 transition-all group-hover:[text-shadow:0_0_6px_#333]',
    list: 'absolute w-full opacity-0 h-[112px] transition duration-300 invisible mt-5 rounded-2xl bg-gradient-dropdown overflow-hidden text-[#333] text-lg',
  },
  variants: {
    show: {
      true: {
        list: 'visible opacity-100 top-10',
      },
    },
  },
});

interface HeaderProps {
  onNavClick?: (id: string) => void;
  onLogoClick?: () => void;
}

export default function Header(props: HeaderProps) {
  const { onNavClick, onLogoClick } = props;
  const [expanded, setExpanded] = useState(false);
  const [showStarted, setShowStarted] = useState(false);
  const [clientBody, setClientBody] = useState<HTMLElement | null>(null);
  const getStartBtnRef = useRef<HTMLDivElement>(null);
  const { base: btnBase, list } = startBtn();
  useClickOutSide(getStartBtnRef, () => setShowStarted(false));

  const handleOnItemClick = (id: string) => {
    setExpanded(false);
    onNavClick?.(id);
  };

  useEffect(() => {
    setClientBody(document.body);
  }, []);
  return (
    <header className="fixed left-0 top-0 z-[999] flex h-[64px] w-full items-center justify-between px-[100px] shadow-md backdrop-blur-[20px] sm:h-[80px] sm:justify-between">
      <div className={cn(logoItem())} onClick={onLogoClick}>
        <Image className='mr-2' src="/images/bloom-logo.png" alt="sun" width={20} height={20} />
        <span className="font-extrabold text-[#333]">BLOOMNOTE</span>
      </div>
      <div className="mx-[36px] hidden items-center gap-x-[20px] sm:flex xl:mx-[88px] xl:gap-x-[40px]">
        {navList.map((nav) => (
          <li className={cn(pcNavItem())} key={nav.id} onClick={() => onNavClick?.(nav.id)}>
            {nav.label}
          </li>
        ))}
      </div>
      {/* <div role="button" ref={getStartBtnRef} className={btnBase()} onClick={() => setShowStarted(!showStarted)}>
        <span className="text-lg text-[#333] group-hover:[text-shadow:0_0_6px_#333]">GET STARTED</span>
        <div className={list({ show: showStarted })}>
          <div className="pointer-events-none absolute left-px top-px h-[calc(100%_-_2px)] w-[calc(100%_-_2px)] rounded-[15px] bg-gradient-button opacity-20"></div>
          <a
            className="relative flex h-14 items-center justify-center px-4 transition-[text-shadow] after:absolute after:bottom-0 after:block after:h-px after:w-[calc(100%_-32px)] after:bg-gradient-divider hover:[text-shadow:0_0_6px_#333]"
            target="_blank"
            href={mediaConfig.appDownloadMeta}
            rel="noreferrer">
            META QUEST
          </a>
          <a
            target="_blank"
            href={mediaConfig.appDownloadApple}
            className="flex h-14 items-center justify-center px-4 transition-[text-shadow] hover:[text-shadow:0_0_6px_#333]"
            rel="noreferrer">
            VISION PRO
          </a>
        </div>
      </div> */}
      <ToggleButton onClick={() => setExpanded(!expanded)} isOpen={expanded} />
      {clientBody &&
        createPortal(
          <AnimatePresence>
            {expanded ? (
              <motion.div
                initial={{ y: '-124px' }}
                animate={{ y: 0 }}
                exit={{ y: '-240px' }}
                transition={{ ease: 'linear', duration: 0.28 }}
                className="fixed left-0 top-[64px] z-[100] box-border w-full rounded-bl-[16px] rounded-br-[16px] border-b border-white/30 bg-[rgba(27,27,27,0.2)] backdrop-blur-[10px] sm:hidden">
                {navList.map((nav, index) => (
                  <li
                    className={mobileNavItem({ class: index === 0 ? 'mt-4' : '' })}
                    key={nav.id}
                    onClick={() => handleOnItemClick(nav.id)}>
                    {nav.label}
                  </li>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>,
          clientBody,
        )}
    </header>
  );
}
