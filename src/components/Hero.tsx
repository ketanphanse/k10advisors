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

      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-white" />
            <span className="ml-3 text-white font-semibold text-lg">K10 Advisors</span>
            <div className="hidden md:flex gap-8 ml-8">
              <a href="#services" className="text-white/80 hover:text-white text-sm font-medium">Services</a>
              <a href="#founder" className="text-white/80 hover:text-white text-sm font-medium">Founder</a>
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium">About</a>
            </div>
          </div>
          <LiquidButton
            onClick={() => (window.location.href = "mailto:ketan.phanse@k10advisors.in?subject=Consultation Request")}
          >
            Schedule a Consultation
          </LiquidButton>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Loyalty, reimagined.
        </h1>
        <p className="mt-8 max-w-xl text-white text-sm leading-relaxed px-4">
          Expert consulting to help you build compelling loyalty programs that increase retention,
          revenue, and customer frequency.
        </p>
      </div>
    </section>
  );
};
