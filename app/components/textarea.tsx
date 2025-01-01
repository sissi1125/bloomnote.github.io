import cn from 'clsx';
import Image from 'next/image';
import { useMemo } from 'react';
interface TextareaProps {
  min?: number;
  max?: number;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
}
export default function Textarea(props: TextareaProps) {
  const { min, max, value = '', className, onChange } = props;
  const val = useMemo(() => value, [value]);
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    onChange?.('');
  };

  return (
    <div className={cn('relative box-border  rounded-[12px] border border-[#E7E7E7]/60 bg-[#1A1A1A]/70', className)}>
      <textarea
        minLength={min}
        maxLength={max}
        value={val}
        onChange={handleOnChange}
        className=" relative h-full w-full resize-none border-none bg-transparent p-2 outline-none"></textarea>
      <div className="absolute bottom-3 right-5 text-sm">
        {val.length} / {max}
      </div>
      {value.length ? (
        <Image
          src="/images/close-icon.png"
          alt="close"
          width={18}
          height={18}
          className="absolute right-5 top-3 cursor-pointer transition-all hover:scale-110"
          onClick={handleClear}
        />
      ) : null}
    </div>
  );
}
