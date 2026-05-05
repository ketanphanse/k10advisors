import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "./BlurText";

const partners = ["Tata", "Jet Privilege", "EY", "NeuPass", "InterMiles"];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black"
      style={{ height: 1000 }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: "20%" }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: 300,
          background: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      <div
        className="relative z-10 h-full flex flex-col items-center px-6 text-center"
        style={{ paddingTop: 150 }}
      >
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
            New
          </span>
          <span className="text-xs text-white/90 font-body pr-3">
            Loyalty consulting, AI-accelerated.
          </span>
        </motion.div>

        <BlurText
          text="The Loyalty Program Your Brand Deserves"
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] max-w-3xl tracking-[-2px] md:tracking-[-4px]"
          delay={100}
        />

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-sm md:text-base text-white font-body font-light leading-tight max-w-xl"
        >
          Strategic design. Engagement that compounds. Built by veterans, accelerated by AI. This is loyalty, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="mailto:ketan.phanse@k10advisors.in?subject=Consultation Request"
            className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm text-white font-medium"
          >
            Get Started <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm text-white/90 font-medium px-3"
          >
            <Play className="w-4 h-4 fill-white" /> Watch the Story
          </a>
        </motion.div>

        <div className="mt-auto pb-8 pt-16 w-full flex flex-col items-center gap-6">
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Trusted by the teams behind
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((p) => (
              <span
                key={p}
                className="text-2xl md:text-3xl font-heading italic text-white/80"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
