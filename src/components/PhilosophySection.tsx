import { motion } from "framer-motion";

export const PhilosophySection = () => (
  <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-12 sm:mb-16 md:mb-24"
      >
        Strategy <span className="font-serif-italic text-white/40">x</span> Loyalty
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden aspect-[4/3]"
        >
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Where strategy meets execution</p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Every meaningful loyalty breakthrough begins at the intersection of disciplined
              strategy and remarkable creative vision. We operate at that crossroads, turning
              bold thinking into measurable outcomes that move customers and reshape brands.
            </p>
          </div>
          <div className="w-full h-px bg-white/10" />
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Built on real experience</p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Our work spans e-commerce, travel, hospitality, financial services, retail and
              health — including India's largest coalition program with a 100M+ user base.
              That depth shapes the playbooks we bring to every engagement.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
