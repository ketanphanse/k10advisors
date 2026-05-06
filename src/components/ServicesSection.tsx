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

export const ServicesSection = () => (
  <section className="bg-black py-28 md:py-40 px-6 overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl text-white tracking-tight">What we do</h2>
        <span className="text-white/40 text-sm hidden md:block">Our services</span>
      </motion.div>

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
                <span className="uppercase tracking-widest text-white/40 text-xs">{c.tag}</span>
                <span className="liquid-glass rounded-full p-2 inline-flex">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">{c.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
