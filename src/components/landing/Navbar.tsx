import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/k10-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Founder", href: "#founder" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-16 py-3">
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="K10 Advisors" className="h-12 w-12" />
          <span className="font-heading italic text-2xl text-white hidden sm:inline">K10</span>
        </a>

        <nav className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:ketan.phanse@k10advisors.in?subject=Consultation Request"
            className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium inline-flex items-center gap-1 hover:bg-white/90 transition"
          >
            Get Started <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        <a
          href="mailto:ketan.phanse@k10advisors.in?subject=Consultation Request"
          className="md:hidden bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium inline-flex items-center gap-1"
        >
          Get Started <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};
