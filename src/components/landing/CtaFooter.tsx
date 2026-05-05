import { ArrowUpRight } from "lucide-react";
import { HlsVideo } from "./HlsVideo";
import { BlurText } from "./BlurText";

export const CtaFooter = () => {
  return (
    <section className="relative overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to top, transparent, black)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to bottom, transparent, black)" }}
      />

      <div className="relative z-20 px-6 lg:px-16 pt-40 pb-12 flex flex-col items-center text-center">
        <BlurText
          text="Your next loyalty win starts here."
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] max-w-4xl tracking-tight"
          delay={80}
        />
        <p className="mt-6 max-w-xl text-white/70 font-body font-light text-sm md:text-base">
          Book a free strategy call. See what AI-powered loyalty can do. No commitment, no pressure. Just possibilities.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ketan.phanse@k10advisors.in?subject=Book a Call"
            className="liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm text-white font-medium"
          >
            Book a Call <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium"
          >
            View Services
          </a>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-body">
            © 2026 K10 Advisors. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="text-white/40 text-xs font-body hover:text-white/70">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
