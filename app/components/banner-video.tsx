export interface IBannerVideo {
  posterUrl: string;
  url: string;
}

export default function BannerVideo(props: IBannerVideo) {
  const { posterUrl, url } = props;
  // const videoRef = useRef<HTMLVideoElement | null>(null);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   // @ts-ignore
  //   if (!window.Hls) {
  //     console.error({ event: 'hlsNotInitialize', payload: 'window.hls not found,you may need add the hls module' });
  //     return;
  //   }
  //   // @ts-ignore
  //   if (window.Hls.isSupported()) {
  //     // @ts-ignore
  //     const hls = new window.Hls();
  //     console.log('BannerVideo url', url);
  //     hls.loadSource(url);
  //     video && hls.attachMedia(video);
  //   }
  // }, [videoRef.current]);

  return (
    <video
      src={url}
      poster={posterUrl}
      controls={false}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 -z-[1] h-full w-full object-cover"></video>
  );
}
