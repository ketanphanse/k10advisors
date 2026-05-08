import { Hero } from "@/components/Hero";
import { OurServices } from "@/components/OurServices";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedVideoSection } from "@/components/FeaturedVideoSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { Founder } from "@/components/Founder";

const Index = () => (
  <main className="bg-black text-white">
    <Hero />
    <OurServices />
    <AboutSection />
    <FeaturedVideoSection />
    <PhilosophySection />
    <Founder />
    <footer className="bg-black border-t border-white/10 py-8 px-6 text-center">
      <p className="text-white/40 text-xs tracking-widest uppercase">
        © 2025 K10 Advisors — All rights reserved
      </p>
    </footer>
  </main>
);

export default Index;
