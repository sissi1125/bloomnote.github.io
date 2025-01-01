/**
 * component for PC
 */
'use client';
import { useMemo } from 'react';
import cn from 'clsx';
import { useMobile } from '../hooks';
import { SceneVideoItem } from '../types';

interface ExpandingSceneProps {
  scenes: SceneVideoItem[];
  className?: string;
}
const WIDTH = 197;
const SM_WIDTH = 152;
export default function ExpandingScene(props: ExpandingSceneProps) {
  const { scenes, className } = props;
  const isMobile = useMobile(1280); // xl
  const totalWidth = useMemo(() => {
    return isMobile ? scenes.length * SM_WIDTH : scenes.length * WIDTH;
  }, [isMobile]);
  return (
    <div
      className={cn(`relative h-[532px] overflow-hidden rounded-[20px] bg-gradient-border p-[4px]`, className)}
      style={{ width: totalWidth }}>
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-black">
        {scenes.map((scene, index) => (
          <div
            key={index}
            className={cn(
              'group absolute h-[101%] w-[284px] object-fill transition-all duration-200 ease-linear [clip-path:polygon(0%_0,70%_0%,70%_100%,0_100%)] last:!left-[auto] last:!right-0 last:[clip-path:polygon(30%_0%,100%_0%,100%_100%,30%_100%)] hover:[clip-path:polygon(0%_0,100%_0%,100%_100%,0_100%)] last:hover:!z-[100] [&:last-child_p]:ml-10 [&_p]:-ml-10',
              { 'w-[152px] hover:w-[203px]': isMobile },
            )}
            style={{ left: isMobile ? `${index * SM_WIDTH}px` : `${index * WIDTH}px`, zIndex: scenes.length - index }}>
            <video
              onMouseOver={(e) => {
                (e.target as HTMLVideoElement).play();
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLVideoElement).currentTime = 0;
                (e.target as HTMLVideoElement).pause();
              }}
              playsInline
              muted
              loop
              preload="auto"
              src={scene.url}
              className="h-full w-full object-cover"></video>
            <p className="absolute bottom-[20px] left-1/2 -translate-x-1/2 whitespace-nowrap text-white transition-all duration-200 ease-linear group-hover:mx-0">
              {scene.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
