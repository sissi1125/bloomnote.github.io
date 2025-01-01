'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useMouseHovered } from 'react-use';
import cn from 'clsx';
import './index.css';
interface CardProps {
  type: 'explore' | 'breathe' | 'meditate' | 'mood-talk';
  className?: string;
  onClick?: () => void;
}

const textMap = {
  explore: ['Interact with the environment to unleash your playful side & recharge.'],
  breathe: ['Try breathing exercises to promote a calm and centered state of mind.'],
  meditate: ['Do a guided programme ranges between 10 to 30 minutes.'],
  'mood-talk': ['Our AI-driven features help you understand and manage your emotions, enhancing self-awareness.'],
};

export default function ProductCard(props: CardProps) {
  const { type, className, onClick } = props;
  const cardRef = useRef<HTMLDivElement>(null);
  const { elX, elY, elH, elW } = useMouseHovered(cardRef, {
    whenHovered: true,
  });

  return (
    <div
      ref={cardRef}
      className={cn(
        'product-card card group z-10 flex w-full items-center overflow-hidden rounded-[10px] px-[24px] py-[14px] transition-all sm:min-h-[300px] sm:w-[216px] sm:flex-col sm:py-0 sm:hover:min-h-[330px] xl:w-[270px]',
        type,
        className,
      )}
      onClick={onClick}>
      <div className="sm:mt-[26px]">
        <div className={cn('card-icon size-[60px] shrink-0 sm:size-[92px]', type)}></div>
        <p className="text-center text-[14px] uppercase text-white sm:hidden">{type}</p>
      </div>
      <div className="text-white sm:group-hover:hover-nav sm:-mt-[16px] sm:group-hover:text-white">
        <p className="mb-3 mt-1 hidden text-center text-[24px] uppercase sm:block">{type.replace('-', ' ')}</p>
        {textMap[type].map((t, i) => (
          <p key={i} className="ml-[18px] text-[12px] font-light uppercase sm:ml-0 sm:text-center sm:text-sm">
            {t}
          </p>
        ))}
      </div>
      <button className="invisible absolute bottom-[27px] z-10 hidden h-[34px] w-[160px] rounded-full bg-[#373737] text-[16px] text-white opacity-0 duration-200 group-hover:visible group-hover:opacity-100 group-hover:[text-shadow:0_0_8px_#fff] sm:block">
        WATCH
      </button>
      <div
        className="glow absolute -z-[1] hidden size-[160px] rounded-full bg-gradient-to-tr from-[#83F436]/60 from-[36%] to-[#CEEAAC]/60 to-[100%] opacity-0 blur-[60px] transition-opacity group-hover:opacity-100 sm:block"
        style={{ left: elX - elW / 4, top: elY - elH / 4 }}></div>
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/images/card-bg.png"
          alt="bg"
          fill
          className="absolute inset-0 transition sm:group-hover:opacity-0"
        />
        <Image
          src="/images/hover-bg.png"
          className="opacity-0 transition-all sm:group-hover:opacity-100"
          fill
          alt="bg"
        />
      </div>
    </div>
  );
}
