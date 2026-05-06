import { motion } from "framer-motion";
import founderPhoto from "@/assets/founder-photo.jpg";
import { LiquidButton } from "./LiquidButton";

export const Founder = () => (
  <section id="founder" className="bg-black py-28 md:py-40 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-white/40 text-sm tracking-widest uppercase mb-8"
      >
        Founder
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl overflow-hidden aspect-[4/5]"
        >
          <img src={founderPhoto} alt="Ketan Phanse, Founder of K10 Advisors" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-6">
            <span className="font-serif-italic text-white/60">Ketan</span> Phanse
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-4">
            Ketan brings deep expertise in building engaging loyalty programs and promotions that
            deliver tangible business impact. With past experience as Product Leader at Tata Digital,
            Jet Privilege and EY, he brings a practical, executable approach to loyalty.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-4">
            He was Product Head for Tata Group's NeuPass — one of India's largest coalition loyalty
            programs, integrating 15+ Tata companies and a 100M+ user base.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Certified Loyalty Marketing Professional (CLMP) and recognized as "30 under 40 Loyalty
            Leaders" by the International Loyalty Awards.
          </p>
          <LiquidButton
            onClick={() => (window.location.href = "mailto:ketan.phanse@k10advisors.in?subject=Consultation Request")}
          >
            Schedule a Consultation
          </LiquidButton>
        </motion.div>
      </div>
    </div>
  </section>
);
