import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    tag: "Strategy",
    title: "Research & Insight",
    desc: "We dig deep into customer data, behavior and market context to surface the loyalty insights that drive meaningful, lasting change.",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
    tag: "Craft",
    title: "Design & Execution",
    desc: "From program design to launch, we obsess over every detail to deliver loyalty experiences that feel effortless and perform extraordinarily.",
  },
];

export const PhilosophySection = () => (
  <section className="bg-black py-28 md:py-40 px-6 overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-8"
      >
        Strategy <span className="font-serif-italic text-white/40">x</span> Loyalty
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-16 md:mb-24"
      >
        Every meaningful loyalty breakthrough begins at the intersection of disciplined
        strategy and remarkable creative vision. Our work spans e-commerce, travel,
        hospitality, financial services, retail and health — including India's largest
        coalition program with a 100M+ user base.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="liquid-glass rounded-3xl overflow-hidden group"
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                src={c.video}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="uppercase tracking-widest text-white/50 text-sm">{c.tag}</span>
                <span className="liquid-glass rounded-full p-2 inline-flex">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl mb-3 tracking-tight">{c.title}</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
