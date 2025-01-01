'use client';
import { AnimatePresence, motion, Variants } from 'framer-motion';
interface SuccessModalProps {
  show?: boolean;
  text?: string;
  okText?: string;
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
export default function SuccessModal(props: SuccessModalProps) {
  const { show, text, okText = 'GET IT', onClose } = props;
  return (
    <AnimatePresence>
      {show ? (
        <div className="fixed inset-0 z-modal flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            variants={maskVariants}
            transition={transition}
            exit="hidden"
            className="absolute inset-0 bg-[#282828]/50"
            onClick={onClose}></motion.div>
          <motion.div
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            variants={contentVariants}
            transition={transition}
            exit="hidden"
            className="z-10 flex h-[245px] w-[240px] flex-col items-center justify-center rounded-[20px] border border-[#686666] bg-[#1a1a1a]/85 bg-gradient-success backdrop-blur-sm sm:h-[490px] sm:w-[480px]">
            <i className="inline-block text-[35px] sm:text-[70px]">
              <svg
                className="check-circle"
                width="1em"
                height="1em"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="33.5" stroke="#95DB46" strokeWidth="3" />
                <mask id="path-2-inside-1_802_509" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M56.6696 19.451C57.5251 20.304 57.5271 21.6891 56.674 22.5446L28.4006 50.899C27.9902 51.3106 27.4328 51.5419 26.8516 51.5419C26.2703 51.5419 25.713 51.3106 25.3026 50.899L12.451 38.0106C11.5979 37.1551 11.5999 35.7701 12.4554 34.917C13.3109 34.064 14.696 34.066 15.549 34.9215L26.8516 46.2564L53.576 19.4554C54.429 18.5999 55.8141 18.5979 56.6696 19.451Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M56.6696 19.451C57.5251 20.304 57.5271 21.6891 56.674 22.5446L28.4006 50.899C27.9902 51.3106 27.4328 51.5419 26.8516 51.5419C26.2703 51.5419 25.713 51.3106 25.3026 50.899L12.451 38.0106C11.5979 37.1551 11.5999 35.7701 12.4554 34.917C13.3109 34.064 14.696 34.066 15.549 34.9215L26.8516 46.2564L53.576 19.4554C54.429 18.5999 55.8141 18.5979 56.6696 19.451Z"
                  fill="#95DB46"
                />
                <path
                  d="M56.674 22.5446L55.9659 21.8385L55.9659 21.8385L56.674 22.5446ZM56.6696 19.451L57.3757 18.7429L57.3757 18.7429L56.6696 19.451ZM28.4006 50.899L27.6925 50.1929L27.6924 50.1929L28.4006 50.899ZM25.3026 50.899L24.5944 51.6051L24.5944 51.6051L25.3026 50.899ZM12.451 38.0106L11.7429 38.7167L11.7429 38.7167L12.451 38.0106ZM12.4554 34.917L13.1615 35.6251L13.1615 35.6251L12.4554 34.917ZM15.549 34.9215L14.8409 35.6275L14.8409 35.6275L15.549 34.9215ZM26.8516 46.2564L26.1434 46.9625L26.8516 47.6726L27.5597 46.9625L26.8516 46.2564ZM53.576 19.4554L54.2841 20.1615L54.2841 20.1615L53.576 19.4554ZM57.3821 23.2507C58.6251 22.0041 58.6223 19.9859 57.3757 18.7429L55.9635 20.1591C56.4279 20.6222 56.429 21.3741 55.9659 21.8385L57.3821 23.2507ZM29.1087 51.6051L57.3821 23.2507L55.9659 21.8385L27.6925 50.1929L29.1087 51.6051ZM26.8516 52.5419C27.6985 52.5419 28.5107 52.2049 29.1087 51.6051L27.6924 50.1929C27.4697 50.4164 27.1671 50.5419 26.8516 50.5419V52.5419ZM24.5944 51.6051C25.1925 52.2049 26.0046 52.5419 26.8516 52.5419V50.5419C26.536 50.5419 26.2335 50.4164 26.0107 50.1929L24.5944 51.6051ZM11.7429 38.7167L24.5944 51.6051L26.0107 50.1929L13.1591 37.3045L11.7429 38.7167ZM11.7493 34.2089C10.5027 35.4519 10.4999 37.4701 11.7429 38.7167L13.1591 37.3045C12.696 36.8401 12.6971 36.0882 13.1615 35.6251L11.7493 34.2089ZM16.2571 34.2154C15.0141 32.9688 12.9959 32.9659 11.7493 34.2089L13.1615 35.6251C13.6259 35.1621 14.3778 35.1631 14.8409 35.6275L16.2571 34.2154ZM27.5597 45.5503L16.2571 34.2154L14.8409 35.6275L26.1434 46.9625L27.5597 45.5503ZM52.8679 18.7493L26.1434 45.5503L27.5597 46.9625L54.2841 20.1615L52.8679 18.7493ZM57.3757 18.7429C56.1291 17.4999 54.1109 17.5027 52.8679 18.7493L54.2841 20.1615C54.7472 19.6971 55.4991 19.696 55.9635 20.1591L57.3757 18.7429Z"
                  fill="#95DB46"
                  mask="url(#path-2-inside-1_802_509)"
                />
              </svg>
            </i>
            <p className="mt-[10px] text-[14px] font-bold text-white sm:mt-5 sm:text-[28px]">{text}</p>
            <button
              className="mt-10 h-[40px] w-[160px] rounded-full bg-button-gradient text-white sm:mt-20 sm:h-[50px] sm:w-[300px] sm:text-[20px]"
              onClick={onClose}>
              {okText}
            </button>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
