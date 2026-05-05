import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StartSection } from "@/components/landing/StartSection";
import { FeaturesChess } from "@/components/landing/FeaturesChess";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { StatsSection } from "@/components/landing/StatsSection";
import { Founder } from "@/components/landing/Founder";
import { Testimonials } from "@/components/landing/Testimonials";
import { CtaFooter } from "@/components/landing/CtaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <StartSection />
      <FeaturesChess />
      <FeaturesGrid />
      <StatsSection />
      <Founder />
      <Testimonials />
      <CtaFooter />
    </div>
  );
};

export default Index;
