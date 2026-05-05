import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number; // ms per element
  by?: "word" | "letter";
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const BlurText = ({
  text,
  className = "",
  delay = 200,
  by = "word",
  as: Tag = "h1",
}: BlurTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const parts = by === "word" ? text.split(" ") : Array.from(text);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const MotionTag = motion[Tag] as typeof motion.h1;

  return (
    <MotionTag ref={ref as never} className={className}>
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={
            inView
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : { filter: "blur(10px)", opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.7,
            delay: (i * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ willChange: "transform, filter, opacity" }}
        >
          {p}
          {by === "word" && i < parts.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
};
