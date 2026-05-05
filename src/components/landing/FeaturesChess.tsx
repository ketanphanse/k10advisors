import { ArrowUpRight, Target, Zap, Wrench, Cpu, type LucideIcon } from "lucide-react";
import { BlurText } from "./BlurText";
import feature1 from "@/assets/feature-1.gif";
import feature2 from "@/assets/feature-2.gif";

type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  points: string[];
  visual: { kind: "gif"; src: string } | { kind: "icon" };
};

const services: Service[] = [
  {
    icon: Target,
    title: "Designed to convert. Built to perform.",
    blurb: "Loyalty Program Strategy — strategic design tailored to your business objectives and customer behavior.",
    points: [
      "Tier structures, reward mechanisms and points economics",
      "Compelling promotional strategies that drive engagement",
      "Competitive analysis and benchmarking against best-in-class",
    ],
    visual: { kind: "gif", src: feature1 },
  },
  {
    icon: Zap,
    title: "It gets smarter. Automatically.",
    blurb: "Engagement with Loyalty — gamification, personalization and lifecycle communication that compounds.",
    points: [
      "Gamification, badges and achievement systems",
      "Personalized campaigns by segment and behavior",
      "Optimized comms across email, mobile and in-app",
    ],
    visual: { kind: "gif", src: feature2 },
  },
  {
    icon: Wrench,
    title: "Modern stack. Zero friction.",
    blurb: "Technology Advisory — migrations, integrations and architectures built for the next decade.",
    points: [
      "Migration from legacy platforms to modern loyalty stacks",
      "Integration across web, mobile and in-store",
      "Robust data architectures for analytics and personalization",
      "Vendor evaluation aligned to your roadmap",
    ],
    visual: { kind: "icon" },
  },
  {
    icon: Cpu,
    title: "Loyalty, intelligently rewritten.",
    blurb: "AI Loyalty — promotion engines, predictive models and conversational support powered by AI.",
    points: [
      "AI-powered promotion engines for dynamic offers",
      "Intelligent chatbots for 24/7 loyalty support",
      "Predictive analytics for churn and growth",
      "ML for CLV prediction and segmentation",
    ],
    visual: { kind: "icon" },
  },
];

export const FeaturesChess = () => {
  return (
    <section id="services" className="relative bg-black px-6 lg:px-16 py-32">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Services
        </span>
        <BlurText
          text="Pro loyalty. Zero complexity."
          className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
          delay={80}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
            >
              <div className="flex-1 space-y-5">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white leading-[0.95] tracking-tight">
                  {s.title}
                </h3>
                <p className="text-white/60 font-body font-light text-sm md:text-base">
                  {s.blurb}
                </p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="text-white/70 font-body font-light text-sm flex gap-3">
                      <span className="text-white/40 mt-[2px]">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:ketan.phanse@k10advisors.in?subject=Consultation Request"
                  className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm text-white font-medium mt-2"
                >
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex-1 w-full">
                <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] w-full flex items-center justify-center">
                  {s.visual.kind === "gif" ? (
                    <img src={s.visual.src} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="liquid-glass-strong rounded-full w-32 h-32 flex items-center justify-center">
                      <Icon className="w-14 h-14 text-white" strokeWidth={1.2} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
