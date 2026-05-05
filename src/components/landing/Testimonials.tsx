import { BlurText } from "./BlurText";

const items = [
  {
    quote: "A complete loyalty rebuild in weeks. The result outperformed everything we'd spent quarters on before.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote: "Engagement up 4x. That's not a typo. The program just works differently when it's built on real data.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote: "They didn't just design our program. They defined our retention strategy. World-class doesn't begin to cover it.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative bg-black px-6 lg:px-16 py-32">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          What They Say
        </span>
        <BlurText
          text="Don't take our word for it."
          className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
          delay={80}
        />
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t.name} className="liquid-glass rounded-2xl p-8 flex flex-col gap-6">
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed">
              "{t.quote}"
            </p>
            <div className="mt-auto">
              <div className="text-white font-body font-medium text-sm">{t.name}</div>
              <div className="text-white/50 font-body font-light text-xs">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
