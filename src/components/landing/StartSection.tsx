import { ArrowUpRight } from "lucide-react";
import { HlsVideo } from "./HlsVideo";
import { BlurText } from "./BlurText";

export const StartSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 600 }}>
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to top, transparent, black)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to bottom, transparent, black)" }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32" style={{ minHeight: 500 }}>
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </span>
        <BlurText
          text="You dream it. We ship it."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl"
          delay={80}
        />
        <p className="mt-6 max-w-xl text-white/60 font-body font-light text-sm md:text-base">
          Share your vision. Our blueprint plus AI handles the rest — strategy, design, integration, launch. All in days, not quarters.
        </p>
        <a
          href="mailto:ketan.phanse@k10advisors.in?subject=Consultation Request"
          className="mt-8 liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm text-white font-medium"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
