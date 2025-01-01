'use client';
import cn from 'clsx';
import { useGroup } from 'ease-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { submitComment } from '../api/message';
import SuccessModal from '../components/success-modal';
import Textarea from '../components/textarea';
import { useEnterPageReport, useHeartBeatReport, useInView, useMobile } from '../hooks';
import { mediaAccounts } from '../utils/config';

const error_texts = {
  empty: 'comments cannot be empty',
  netError: 'submission error, retry later',
};
export default function Contact() {
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const { isIntersecting } = useInView(ref, { threshold: 0.6 });
  const enterPageReportCtrl = useEnterPageReport(() => {});
  const heartBeatReportCtrl = useHeartBeatReport(() => {});
  const mobileAniCtrl = useGroup(
    {
      selectors: ['.contact-anim'],
      keyframes: [
        { opacity: 1, transform: 'translateY(-15px)', offset: 0.4 },
        { opacity: 1, transform: 'translateY(-13px)', offset: 1 },
      ],
      options: {
        duration: 1000,
        fill: 'both',
        delay: (_, i) => {
          return i * 200;
        },
      },
    },
    [],
  );

  const pcAniCtrl = useGroup(
    {
      selectors: ['.pc-contact-anim', '.pc-textarea-anim', '.pc-contact-media-anim '],
      keyframes: [
        { opacity: 1, transform: 'translateX(-53px)', offset: 0.4 },
        { opacity: 1, transform: 'translateX(-38px)' },
      ],
      options: {
        duration: 1000,
        fill: 'both',
        delay: (_, i) => {
          return i * 200;
        },
      },
    },
    [],
  );

  const handleCommentChange = (value: string) => {
    if (commentError) {
      setCommentError('');
    }
    setComment(value);
  };

  const handleOnSubmit = async () => {
    if (!comment) {
      setCommentError(error_texts.empty);
      return;
    }
    try {
      const res = await submitComment(comment);
      if (res.code === 0) {
        setComment('');
        setShowSuccessModal(true);
      } else {
        setCommentError(error_texts.netError);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isIntersecting) {
      isMobile && mobileAniCtrl.play();
      !isMobile && pcAniCtrl.play();
      enterPageReportCtrl.report();
      heartBeatReportCtrl.report();
    } else {
      isMobile && mobileAniCtrl.reverse();
      !isMobile && pcAniCtrl.reverse();
      enterPageReportCtrl.clear();
      heartBeatReportCtrl.clear();
    }
  }, [isIntersecting, isMobile]);
  return (
    <div ref={ref} className="relative h-screen overflow-hidden px-5 sm:px-[12%]">
      <h4 className="contact-anim pc-contact-anim relative z-10 mt-[100px] text-center text-lg text-white opacity-0 after:absolute after:bottom-0 after:left-1/2 after:top-[2em]  after:h-px after:w-[48px] after:-translate-x-1/2 after:bg-white sm:mt-[146px] sm:text-start sm:text-[32px] sm:after:left-0 sm:after:top-[1.6em] sm:after:w-[60px] sm:after:translate-x-0">
        Contact Us
      </h4>
      <div className="contact-anim pc-contact-anim relative z-10 mt-[16px] text-center text-xl text-white opacity-0 sm:mt-[56px] sm:text-start">
        <span>Email us at </span>
        <a className="text-[#95DB46] underline" href="mailto:mindtopia@xverse.cn">
          mindtopia@xverse.cn
        </a>
        <p>or submit your comment below</p>
      </div>
      <div className="contact-anim pc-textarea-anim relative z-10 mt-[20px] flex w-full flex-col items-center text-white opacity-0 sm:items-start">
        <p>Your Comments</p>
        <Textarea
          className="mt-2 h-[152px] w-full sm:w-[517px]"
          max={1000}
          value={comment}
          onChange={handleCommentChange}
        />
        <p className="pt-1 text-red-400">{commentError}</p>
      </div>
      <SubmitButton
        className="contact-anim pc-textarea-anim relative left-[calc(50%_-_68px)] z-10 mt-4 opacity-0 sm:left-0"
        onClick={handleOnSubmit}
      />
      <div className="pc-contact-media-anim relative z-10 hidden opacity-0 sm:mt-[72px] sm:flex sm:gap-8">
        {mediaAccounts.map((item) => (
          <MediaIcon
            key={item.id}
            url={item.accountUrl}
            name={item.name}
            icon={item.icon}
            reportData={item.reportData}
          />
        ))}
      </div>
      <div className="relative z-10 mt-[57px] flex flex-col items-center sm:hidden">
        <div className="contact-anim flex gap-[50px] opacity-0">
          {mediaAccounts
            .filter((item) => item.id.includes('ins'))
            .map((media) => (
              <MediaIcon
                key={media.id}
                url={media.accountUrl}
                name={media.name}
                icon={media.icon}
                reportData={media.reportData}
              />
            ))}
        </div>
        <div className="contact-anim mt-3 flex gap-[50px] opacity-0">
          {mediaAccounts
            .filter((item) => !item.id.includes('ins'))
            .map((media) => (
              <MediaIcon
                key={media.id}
                url={media.accountUrl}
                name={media.name}
                icon={media.icon}
                reportData={media.reportData}
              />
            ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 z-10 w-full -translate-x-1/2 text-center text-white sm:bottom-10 sm:text-xl">
        © XVERSE Technology Inc.
      </div>
      <SuccessModal show={showSuccessModal} text="SUBMIT SUCCEEDS" onClose={() => setShowSuccessModal(false)} />
      <Image
        alt="bg"
        fill
        className="z-1 hidden h-full w-full object-cover sm:block"
        src="https://appasset.xverse.cn/98/plane/5cf9c41cde504336bbfd04a12707c928/contact-pc-bg.jpg"
      />
      <div className="absolute inset-0 -z-[1] h-full w-full bg-black sm:hidden">
        <Image
          alt="mobile-bg"
          fill
          src="https://appasset.xverse.cn/98/plane/fa758d2d409b48b7bc7b1df4848ecb5b/contact-mobile-bg.jpg"
          className="object-cover opacity-60"
        />
      </div>
    </div>
  );
}
interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
function SubmitButton({ className, ...props }: SubmitButtonProps) {
  return (
    <button
      className={cn(
        'hover:borer-white active h-[42px] rounded-full border border-white bg-transparent px-[34px] text-white transition-all duration-200 ease-linear sm:hover:bg-white sm:hover:text-black',
        className,
      )}
      {...props}>
      SUBMIT
    </button>
  );
}
interface MediaIconProps {
  name: string;
  icon: string;
  url: string;
  className?: string;
  reportData?: number | string;
}
function MediaIcon(props: MediaIconProps) {
  const { name, icon, url, reportData, className } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn('group relative flex w-[55px] flex-col items-center ease-linear sm:w-[74px]', className)}>
      <div className="relative size-[40px] transition-all duration-200 sm:size-[48px] sm:group-hover:scale-125">
        <Image src={icon} fill alt={name} />
      </div>
      <p className="mt-2 text-center text-[10px] text-white sm:mt-3 sm:text-[12px]">{name}</p>
    </a>
  );
}
