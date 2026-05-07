import { useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { LiquidButton } from "./LiquidButton";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

const animateOpacity = (el: HTMLVideoElement, from: number, to: number, dur = 500) => {
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    el.style.opacity = String(from + (to - from) * t);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => {
      v.play().catch(() => {});
      animateOpacity(v, 0, 1);
    };
    const onTimeUpdate = () => {
      if (v.duration && v.duration - v.currentTime <= 0.55) {
        const cur = parseFloat(v.style.opacity || "1");
        if (cur > 0.05) animateOpacity(v, cur, 0);
      }
    };
    const onEnded = () => {
      v.style.opacity = "0";
      setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
        animateOpacity(v, 0, 1);
      }, 100);
    };
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col bg-black">
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        autoPlay
        playsInline
        preload="auto"
        style={{ opacity: 0 }}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      <nav className="relative z-20 px-3 sm:px-6 py-4 sm:py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto pl-4 pr-2 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2">
          <div className="flex items-center min-w-0">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
            <span className="ml-2 sm:ml-3 text-white font-semibold text-base sm:text-lg truncate">K10 Advisors</span>
            <div className="hidden md:flex gap-8 ml-8">
              <a href="#services" className="text-white/80 hover:text-white text-sm font-medium">Services</a>
              <a href="#founder" className="text-white/80 hover:text-white text-sm font-medium">Founder</a>
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium">About</a>
            </div>
          </div>
          <LiquidButton
            className="shrink-0 !px-3 !py-2 !text-xs sm:!px-5 sm:!py-2.5 sm:!text-sm"
            onClick={() => (window.location.href = "mailto:ketan.phanse@k10advisors.in?subject=Consultation Request")}
          >
            <span className="hidden sm:inline">Schedule a Consultation</span>
            <span className="sm:hidden">Consult</span>
          </LiquidButton>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Loyalty, reimagined.
        </h1>
        <p className="mt-6 sm:mt-8 max-w-xl text-white text-sm leading-relaxed px-4">
          Expert consulting to help you build compelling loyalty programs that increase retention,
          revenue, and customer frequency.
        </p>
      </div>
    </section>
  );
};
