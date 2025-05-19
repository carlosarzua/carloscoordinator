
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export const Marquee = ({ children, speed = "normal", className = "" }: MarqueeProps) => {
  const speedClass = 
    speed === "slow" ? "animate-[marquee_60s_linear_infinite]" :
    speed === "fast" ? "animate-[marquee_20s_linear_infinite]" :
    "animate-[marquee_30s_linear_infinite]";
  
  return (
    <div className={`marquee-container ${className}`}>
      <div className={`marquee-content ${speedClass}`}>
        {children}
        {children} {/* Duplicate content for seamless loop */}
      </div>
    </div>
  );
};
