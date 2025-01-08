import { tv } from 'tailwind-variants';
import { motion } from 'framer-motion';
const toggleBtnStyle = tv({
  slots: {
    menu: 'sm:hidden flex flex-col justify-center items-center size-[36px] transition-colors z-20',
    menuItem: 'block w-[20px] h-[1px] rounded-[6px] bg-[#000] mb-[6px] last:mb-0',
  },
});
interface ToggleButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}
const transition = { duration: 0.1, ease: 'linear' };
export default function ToggleButton({ isOpen, onClick }: ToggleButtonProps) {
  const { menu, menuItem } = toggleBtnStyle();
  return (
    <motion.div className={menu()} initial="closed" animate={isOpen ? 'open' : 'closed'} onClick={onClick}>
      <motion.span
        variants={{
          open: {
            opacity: 0,
            transition,
          },
          close: {
            opacity: 1,
            transition,
          },
        }}
        className={menuItem()}
      />
      <motion.span
        variants={{
          open: { rotate: -45, transition },
          closed: { rotate: 0, transition },
        }}
        className={menuItem()}
      />
      <motion.span
        variants={{
          open: { rotate: 45, transition },
          closed: { rotate: 0, transition },
        }}
        className={menuItem({ class: 'absolute top-[calc(50%_-_0.5px)]' })}
      />
      <motion.span
        variants={{
          open: {
            opacity: 0,
            transition,
          },
          close: {
            opacity: 1,
            transition,
          },
        }}
        className={menuItem()}
      />
    </motion.div>
  );
}
