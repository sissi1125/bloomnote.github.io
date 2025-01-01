/**
 * 视频播放弹窗 兼容iframe外站视频模式
 */
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import cn from 'clsx';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useMobile } from '../hooks';
interface VideoModalProps {
  type?: 'video' | 'iframe';
  show?: boolean;
  url: string;
  cover?: string;
  onClose: () => void;
}
const maskVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
const contentVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
};

const transition = { duration: 0.2, ease: 'linear' };

export default function VideoModal(props: VideoModalProps) {
  const { show, type = 'video', url, cover = '', onClose } = props;
  const isMobile = useMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      videoRef.current?.play();
    } else {
      document.body.setAttribute('style', '');
      document.documentElement.setAttribute('style', '');
      videoRef.current?.pause();
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show ? (
        <div className={cn('fixed inset-0 z-modal flex h-screen w-screen items-center justify-center')}>
          <motion.div
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            exit="hidden"
            variants={maskVariants}
            transition={transition}
            className="absolute inset-0 bg-[#242424]/80"></motion.div>
          {isMobile ? (
            <motion.div
              initial="hidden"
              animate={show ? 'visible' : 'hidden'}
              variants={contentVariants}
              exit="hidden"
              className="z-10 aspect-video w-full"
              transition={transition}>
              <div
                className="absolute right-[calc(50%_-_60px)] mt-[240px] flex size-8 h-10 w-[120px] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#444444] text-white"
                onClick={onClose}>
                CLOSE
              </div>
              {type === 'video' ? (
                <video ref={videoRef} poster={cover} playsInline src={url} controls className=" w-full" />
              ) : (
                <YoutubeShare type={url} />
              )}
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate={show ? 'visible' : 'hidden'}
              variants={contentVariants}
              exit="hidden"
              transition={transition}
              className="relative z-10 aspect-video h-[448px] rounded-[20px] bg-gradient-to-tr from-[#8f8f8f] to-[#a9a9a9] p-[2px]">
              <div className="absolute  -right-14 -top-14 bottom-10 size-10 cursor-pointer" onClick={onClose}>
                <Image src="/images/close-icon.png" fill alt="close icon" />
              </div>
              {type === 'video' ? (
                <video
                  poster={cover}
                  ref={videoRef}
                  src={url}
                  controls
                  playsInline
                  className="h-full w-full rounded-[18px] object-cover"
                />
              ) : (
                <YoutubeShare type={url} />
              )}
            </motion.div>
          )}
        </div>
      ) : null}
    </AnimatePresence>
  );
}
interface YoutubeShareProps {
  type: string;
}
function YoutubeShare(props: YoutubeShareProps) {
  const { type } = props;
  if (type === 'video-001') {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/6EBDppdgUvg?si=P0mnnDggbzSyaxgC"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="rounded-[inherit]"
        allowFullScreen></iframe>
    );
  } else if (type === 'video-002') {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/gAriBErcQfE?si=O19JS8Mu2N18d_49"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="rounded-[inherit]"
        allowFullScreen></iframe>
    );
  }
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/EQ5MylFrpFQ?si=0oIPsoMrTQrVVk_4&amp;start=176"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="rounded-[inherit]"
      allowFullScreen></iframe>
  );
}
