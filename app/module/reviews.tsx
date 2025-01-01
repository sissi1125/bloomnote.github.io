'use client';
import { useEffect, useRef } from 'react';
import { useEnterPageReport, useHeartBeatReport, useInView } from '../hooks';
import Community from './community';
import Features from './features';

export default function Reviews() {
  const ref = useRef(null);
  const { isIntersecting } = useInView(ref, { threshold: 0.4 });
  const enterPageReportCtrl = useEnterPageReport(() => {});
  const heartBeatReportCtrl = useHeartBeatReport(() => {});

  useEffect(() => {
    if (isIntersecting) {
      enterPageReportCtrl.report();
      heartBeatReportCtrl.report();
    } else {
      enterPageReportCtrl.clear();
      heartBeatReportCtrl.clear();
    }
  }, [isIntersecting]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <Community />
      <Features />
    </div>
  );
}
