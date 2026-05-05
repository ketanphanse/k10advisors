import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HlsVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const HlsVideo = ({ src, ...props }: HlsVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  return <video ref={ref} autoPlay loop muted playsInline {...props} />;
};
