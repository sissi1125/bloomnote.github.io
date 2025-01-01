'use client';
import { mediaConfig } from '@/app/utils/config';
import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
interface DownloadButtonGroupProps {
  special?: boolean;
  show?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
  onMetaClick?: () => void;
  onAppleClick?: () => void;
}
const imgButton = tv({
  base: 'button-item w-[164px] sm:w-[290px] aspect-[16/5] relative bg-[position:0_0] bg-cover bg-no-repeat sm:hover:bg-[position:-293px_0]',
  variants: {
    special: {
      true: 'sm:hover:bg-[position:-292px_0]',
    },
  },
});
export default function DownloadButtonGroup({
  show,
  className,
  duration = 0.4,
  delay = 0,
  special,
  onAppleClick,
}: DownloadButtonGroupProps) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration, delay, ease: 'linear' }}
          className={cn('mx-auto flex flex-col gap-[5px] opacity-0 sm:flex-row sm:gap-0', className)}>
          <a
            href={mediaConfig.appDownloadApple}
            target="_blank"
            rel="noreferrer"
            onClick={onAppleClick}
            className={imgButton({ special, class: 'bg-[url("/images/apple-download-sprite.png")]' })}></a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
