import { HlsVideo } from "./HlsVideo";

const stats = [
  { value: "100M+", label: "Users reached" },
  { value: "15+", label: "Brands integrated" },
  { value: "Days", label: "Not months to launch" },
  { value: "20+ yrs", label: "Loyalty experience" },
];

export const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0)" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to top, transparent, black)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to bottom, transparent, black)" }}
      />
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div className="liquid-glass rounded-3xl p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                {s.value}
              </div>
              <div className="mt-2 text-white/60 font-body font-light text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
