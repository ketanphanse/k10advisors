import { LiquidButton } from "./LiquidButton";

const CardVideo = ({ src }: { src: string }) => (
  <video
    src={src}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />
);

export const OurServices = () => {
  return (
    <section id="services" className="min-h-screen bg-black px-6 py-16 md:px-12 lg:px-20">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-white leading-tight">
            Strategies built for brands<br />that want lasting loyalty.
          </h2>
          <h3 className="text-2xl md:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-white/40 mt-2 leading-tight">
            Designed with rigor. Powered by AI.
          </h3>
        </div>
        <div className="md:pt-3 shrink-0">
          <LiquidButton
            onClick={() => (window.location.href = "mailto:ketan.phanse@k10advisors.in?subject=Consultation Request")}
          >
            Schedule a Consultation
          </LiquidButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        {/* Card 01 */}
        <div className="feature-card md:row-span-2 min-h-[28rem] p-7 flex flex-col">
          <CardVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104605_2700410c-4303-4d44-a368-e1b8c84eca8c.mp4" />
          <div className="relative flex justify-between text-sm text-white/60">
            <span>01/</span>
            <span>Loyalty Program Strategy</span>
          </div>
          <div className="relative flex-1" />
          <div className="relative">
            <h3 className="font-serif-italic text-3xl md:text-4xl text-white leading-tight">
              Programs designed to<br />drive retention & revenue.
            </h3>
            <div className="mt-4 h-px w-full bg-white/20" />
            <p className="mt-4 text-xs text-white/70 leading-relaxed">
              Strategic design tailored to your business — tier structures, reward mechanisms,
              points economics, and competitive benchmarking against industry best practices.
            </p>
          </div>
        </div>

        {/* Card 02 */}
        <div className="feature-card-dark md:col-span-2 p-7 flex flex-col">
          <CardVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4" />
          <div className="relative flex justify-between">
            <h3 className="font-serif-italic text-3xl md:text-4xl text-white leading-tight max-w-md">
              Engagement that turns<br />members into advocates.
            </h3>
            <span className="text-sm text-white/60">02/</span>
          </div>
          <div className="relative flex-1 min-h-48" />
          <p className="relative text-xs text-white/70 max-w-md leading-relaxed">
            Gamification, challenges, badges, and personalized campaigns across email, mobile,
            and in-app — all tuned to your customer segments.
          </p>
        </div>

        {/* Card 03 */}
        <div className="feature-card p-7 flex flex-col">
          <CardVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104758_e7d78f06-3700-4862-8c9b-595ed447e81a.mp4" />
          <div className="relative flex justify-between text-sm text-white/60">
            <span>Technology Advisory</span>
            <span>03/</span>
          </div>
          <p className="relative mt-10 text-xs text-white/80 leading-relaxed">
            Migrate from legacy platforms, integrate loyalty across web, mobile and store, and
            select vendors aligned to your data architecture and growth roadmap.
          </p>
          <div className="relative flex-1" />
          <div className="relative mt-6">
            <LiquidButton
              onClick={() => (window.location.href = "mailto:ketan.phanse@k10advisors.in?subject=Consultation Request")}
            >
              Talk to an advisor
            </LiquidButton>
          </div>
        </div>

        {/* Card 04 */}
        <div className="feature-card p-7 flex flex-col">
          <CardVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_105007_f90de0f3-0f93-44d4-9b71-7446f78c4bd2.mp4" />
          <div className="relative flex justify-between text-sm text-white/60">
            <span>AI Loyalty</span>
            <span>04/</span>
          </div>
          <div className="relative flex-1" />
          <p className="relative text-center text-xs text-white/80 leading-relaxed">
            AI-powered promotion engines, intelligent chatbots, churn prediction and lifetime
            value models — built for personalized loyalty at scale.
          </p>
        </div>
      </div>
    </section>
  );
};
