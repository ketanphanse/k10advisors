import { BlurText } from "./BlurText";
import founderPhoto from "@/assets/founder-photo.jpg";

export const Founder = () => {
  return (
    <section id="founder" className="relative bg-black px-6 lg:px-16 py-32">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          The Founder
        </span>
        <BlurText
          text="Built on two decades of loyalty."
          className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
          delay={80}
        />
      </div>

      <div className="max-w-5xl mx-auto liquid-glass rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="flex-shrink-0">
            <div className="liquid-glass-strong rounded-full p-1.5">
              <img
                src={founderPhoto}
                alt="Ketan Phanse — Founder, K10 Advisors"
                className="w-56 h-56 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 space-y-5">
            <h4 className="text-3xl md:text-4xl font-heading italic text-white">Ketan Phanse</h4>
            <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed">
              Ketan Phanse brings a deep expertise on developing engaging loyalty programs and promotions that deliver tangible business impact. With his past experience as Product Leader at Tata Digital, Jet Privilege, EY, he brings to table a practical, executable approach for loyalty that reduces go to market from months to days.
            </p>
            <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed">
              He was the Product Head for Tata Group's NeuPass program — one of India's largest coalition loyalty programs integrating a diverse portfolio of 15+ Tata group companies with a 100Mn+ user base.
            </p>
            <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed">
              He brings rich experience building loyalty programs across e-commerce, travel, hospitality, financial services, retail and health. Ketan is a Certified Loyalty Marketing Professional (CLMP) and has been recognized in "30 under 40 Loyalty Leaders" by the International Loyalty Awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
