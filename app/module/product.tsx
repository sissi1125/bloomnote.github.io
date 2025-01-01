'use client';
import { useEffect, useRef } from 'react';
import CardList from '../components/card-list';
import Scenes from '../components/scenes';
import ScrollDownIndicator from '../components/scrollDownIndicator';
import { useEnterPageReport, useHeartBeatReport, useInView } from '../hooks';
export default function Product() {
  const ref = useRef<HTMLDivElement>(null);
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
      <Scenes />
      <CardList />
      <ScrollDownIndicator show />
    </div>
  );
}
