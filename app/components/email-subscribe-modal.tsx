'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { subscribeEmail } from '../api/email-subscribe';
interface EmailSubscribeModalProps {
  show?: boolean;
  onClose: () => void;
  onSuccess?: () => void;
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

function validatorEmail(email?: string): [boolean, string] {
  if (!email) {
    return [false, 'Email is required'];
  } else {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return [regex.test(email), 'Email is invalid'];
  }
}

export default function EmailSubscribeModal(props: EmailSubscribeModalProps) {
  const { show, onClose, onSuccess } = props;
  const [emailVal, setEmailVal] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errMsg) {
      setErrMsg('');
    }
    setEmailVal(e.target.value);
  };

  const handleOnSubmit = async () => {
    const [ok, msg] = validatorEmail(emailVal);
    if (!ok) {
      setErrMsg(msg);
      return;
    }
    try {
      const res = await subscribeEmail(emailVal);
      if (res.code === 0) {
        onSuccess?.();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.setAttribute('style', '');
      document.documentElement.setAttribute('style', '');
    }
  }, [show]);
  return (
    <AnimatePresence>
      {show ? (
        <div className="fixed inset-0 z-modal flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            variants={maskVariants}
            exit="hidden"
            className="absolute inset-0 bg-[#282828]/50"></motion.div>
          <motion.div
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            variants={contentVariants}
            transition={transition}
            exit="hidden"
            className="relative z-10 mx-[28px] flex h-[440px] w-full flex-col overflow-hidden rounded-[20px] border border-[#686666] bg-[#1a1a1a]/85 bg-gradient-success backdrop-blur-sm sm:h-[580px] sm:w-[980px] sm:flex-row">
            <div
              className="absolute right-[30px] top-[30px] z-10 hidden size-9 cursor-pointer items-center justify-center rounded-full bg-[#8a8a8a]/30 sm:flex"
              onClick={onClose}>
              <span className="absolute h-4 w-[2px] rotate-45 rounded-full bg-white"></span>
              <span className="absolute h-4 w-[2px] -rotate-45 rounded-full bg-white"></span>
            </div>
            <div className="relative h-[225px] w-full text-[#333] sm:h-full sm:w-1/2">
              <div className="absolute top-16 z-10 w-full leading-[1.7em] sm:hidden">
                <p className="text-center text-[26px] font-bold">DISCOVER MORE</p>
                <p className="text-center text-[26px] font-bold">WITH MINDTOPIA</p>
                <div className="mt-[22px] text-center">
                  <p>Subscribe for the latest</p>
                  <p>updates and special offers</p>
                </div>
              </div>
              <div className="relative z-10 hidden size-full items-center justify-center sm:flex sm:flex-col">
                <svg
                  className="logo-shape"
                  width="110"
                  height="110"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.1761 25.924C34.1761 34.7186 41.2582 41.848 49.9943 41.848C50.8648 41.848 51.719 41.7773 52.5513 41.6411C50.6493 42.2891 48.6996 43.0159 46.7246 43.8186C31.3609 50.0629 20.287 58.5406 21.9902 62.7541C22.9458 65.1179 27.7201 65.6374 34.4406 64.5352C25.783 66.943 20 71.2997 20 76.2745C20 83.856 33.4315 90.0021 50 90.0021C66.5685 90.0021 80 83.856 80 76.2745C80 68.6929 66.5685 62.5469 50 62.5469C46.6234 62.5469 43.377 62.8021 40.3481 63.2728C44.2401 62.2689 48.5039 60.8604 52.8924 59.0767C68.2561 52.8324 79.33 44.3547 77.6268 40.1412C76.3099 36.8834 67.7396 37.1288 56.8178 40.2944C62.1381 37.7296 65.8125 32.2588 65.8125 25.924C65.8125 17.1294 58.7305 10 49.9943 10C41.2582 10 34.1761 17.1294 34.1761 25.924Z"
                    fill="white"></path>
                </svg>
                <p className="text-center text-[32px]">MINDTOPIA</p>
              </div>
              <Image
                src="https://appasset.xverse.cn/98/plane/3f4f15dfa37f48ff84ff758a1351942c/20240802104510.jpg"
                fill
                className="object-cover"
                alt="email subscribe"
              />
            </div>
            <div className="relative mt-[35px] flex flex-col px-[30px] sm:mt-0 sm:flex-1 sm:items-center sm:justify-center">
              <div className="z-10 mb-[100px] hidden w-full text-[#333] sm:block">
                <p className="text-center text-[32px] font-bold">DISCOVER MORE</p>
                <p className="text-center text-[32px] font-bold">WITH MINDTOPIA</p>
                <div className="mt-[10px] text-center">
                  <p>Subscribe for the latest</p>
                  <p>updates and special offers</p>
                </div>
              </div>
              <div className="relative flex h-10 items-center rounded-lg border border-[#6B6B6B] px-3 sm:w-[260px] sm:rounded-none sm:border-l-0 sm:border-r-0 sm:border-t-0 sm:border-b-white sm:px-0">
                <i className="relative flex items-center text-2xl text-[#333]/60 after:absolute after:-right-1 after:h-[10px] after:w-px after:bg-white/60 sm:text-4xl sm:text-[#333] sm:after:content-[unset]">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.764 14.4139C11.8462 14.4548 11.9284 14.4548 11.9695 14.4548C12.0517 14.4548 12.1339 14.4548 12.175 14.4139L19.5714 9.95483L19.6125 9.91392L19.6536 9.87302C19.6536 9.83211 19.6947 9.83211 19.6947 9.7912C19.6947 9.7912 19.7358 9.75029 19.7358 9.70938V9.62756V7.37756C19.7769 6.31392 18.914 5.45483 17.8045 5.45483H6.1345C5.02503 5.45483 4.16211 6.31392 4.16211 7.37756V16.5821C4.16211 17.6867 5.02503 18.5457 6.1345 18.5457H17.8456C18.914 18.5457 19.818 17.6867 19.818 16.5821V12.4912C19.818 12.2457 19.6536 12.0821 19.4071 12.0821C19.1605 12.0821 18.9961 12.2457 18.9961 12.4912V16.5821C18.9961 17.1957 18.503 17.7276 17.8456 17.7276H6.1345C5.47704 17.7276 4.98394 17.2367 4.98394 16.623V10.2821L11.764 14.4139ZM6.1345 6.27302H17.8456C18.4619 6.27302 18.9961 6.76392 18.9961 7.41847V9.38211L11.9695 13.5957L4.98394 9.3412V7.37756C4.98394 6.76392 5.47704 6.27302 6.1345 6.27302Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                <input
                  type="text"
                  value={emailVal}
                  className="relative ml-3 h-full flex-1 border-none bg-transparent text-[#333]/60 caret-white/60 outline-none placeholder:text-sm sm:placeholder:text-base"
                  placeholder="Enter Your Email Address"
                  onChange={handleOnEmailChange}
                />
                <p className="absolute -bottom-7 w-full text-center text-red-400">{errMsg}</p>
              </div>
              <button
                className="mx-auto mt-[35px] h-10 w-[200px] rounded-full bg-button-gradient font-medium text-[#333] sm:h-[50px] sm:w-[300px] sm:text-[20px]"
                onClick={handleOnSubmit}>
                SUBSCRIBE
              </button>
              <span className="relative mx-auto mt-[15px] text-[#ACACAC]/50 sm:hidden" onClick={onClose}>
                CLOSE
              </span>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
