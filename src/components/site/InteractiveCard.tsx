import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a Clerk-style fine halftone dot texture and a soft glow
 * that fade and scale in from the center on hover, with a gentle shimmer.
 */
export function InteractiveCard({
  children,
  className,
  ...rest
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("group/icard relative isolate overflow-hidden", className)}
      {...rest}
    >
      {/* soft centered glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover/icard:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)",
        }}
      />
      {/* fine halftone, fades + scales in from center, gentle shimmer while hovered */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 scale-90 transition-all duration-300 ease-out group-hover/icard:opacity-100 group-hover/icard:scale-100 group-hover/icard:animate-halftone-shimmer"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklab, var(--foreground) 55%, transparent) 1px, transparent 1.2px)",
          backgroundSize: "7px 7px",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}