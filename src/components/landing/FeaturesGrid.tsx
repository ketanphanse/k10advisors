import { Zap, Palette, BarChart3, Shield, type LucideIcon } from "lucide-react";
import { BlurText } from "./BlurText";

const items: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Zap, title: "Days, Not Months", body: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy." },
  { icon: Palette, title: "Obsessively Crafted", body: "Every detail considered. Every element refined. Programs so precise, they feel inevitable." },
  { icon: BarChart3, title: "Built to Convert", body: "Designs informed by data. Decisions backed by performance. Results you can measure." },
  { icon: Shield, title: "Enterprise Grade", body: "Built on patterns proven across 100M+ users and 15+ brands. Compliance and scale, included." },
];

export const FeaturesGrid = () => {
  return (
    <section id="why" className="relative bg-black px-6 lg:px-16 py-32">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Why Us
        </span>
        <BlurText
          text="The difference is everything."
          className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
          delay={80}
        />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="liquid-glass rounded-2xl p-6 space-y-4">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-heading italic text-white">{title}</h4>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
