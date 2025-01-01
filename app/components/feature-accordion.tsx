'use client';
import cn from 'clsx';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';
import { accordionConfig } from '../utils/config';

interface FeatureAccordionProps {
  className?: string;
}
export default function FeatureAccordion(props: FeatureAccordionProps) {
  const { className } = props;
  return (
    <Accordion type="single" collapsible className={cn(className)}>
      {accordionConfig.map((item, index, arr) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className={cn('pc-fea-accordion translate-x-[40px] opacity-0', {
            'after:content-[unset]': index === arr.length - 1,
          })}>
          <AccordionTrigger>
            <div className="relative size-[40px] shrink-0">
              <Image src={item.icon} alt="icon" fill />
            </div>
            <p className="text-[22px] text-[#333] sm:ml-[14px]">{item.title}</p>
          </AccordionTrigger>
          <AccordionContent className={cn('text-[#333] sm:pl-[40px]')}>
            <p className={cn('overflow-hidden text-[#333]/70')}>{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function MobileFeatureAccordion({ className }: { className?: string }) {
  return (
    <div className={cn('w-full', className)}>
      {accordionConfig.map((item) => (
        <div
          key={item.id}
          className="mobile-fea-accordion relative flex translate-x-[40px] py-2 opacity-0 after:absolute after:-bottom-0 after:h-px after:w-full after:bg-gradient-line last:after:content-[unset]">
          <div className="relative size-[40px] shrink-0">
            <Image src={item.icon} alt="icon" fill />
          </div>
          <div className={cn('ml-[10px] text-[#333]')}>
            <p className="">{item.title}</p>
            <p className={cn('overflow-hidden text-[12px] text-[#333]/70')}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
