'use client';
import { useEffect, useRef } from 'react';
import Community from './community';
import Features from './features';

export default function Reviews() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <Community />
      <Features />
    </div>
  );
}
