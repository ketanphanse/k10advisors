import { ArrowUpRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  withArrow?: boolean;
}

export const LiquidButton = ({ children, withArrow = true, className = "", ...rest }: Props) => (
  <button
    {...rest}
    className={`liquid-glass rounded-full px-5 py-2.5 text-sm text-white/90 transition-transform hover:scale-[1.02] inline-flex items-center gap-2 ${className}`}
  >
    {children}
    {withArrow && <ArrowUpRight className="w-4 h-4" />}
  </button>
);
