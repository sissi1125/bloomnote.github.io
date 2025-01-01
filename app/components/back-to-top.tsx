/**
 * 回到顶部按钮组件
 */
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWindowScroll, useDebounce } from 'react-use';
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);
  const { y } = useWindowScroll();

  useDebounce(
    () => {
      setShow(y >= screenHeight);
    },
    500,
    [y],
  );

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed bottom-[30px] right-[20px] z-20 size-[44px] cursor-pointer bg-[url(https://appasset.xverse.cn/98/plane/d2618fd5c8af4404b95f0782603b416f/btt.png)] bg-cover bg-left-top hover:bg-right-bottom sm:bottom-[88px] sm:right-[160px] sm:size-[62px]"
          onClick={onClick}></motion.div>
      )}
    </AnimatePresence>
  );
}
