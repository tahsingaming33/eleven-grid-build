import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Site-wide grid. A centered max-width column with faint vertical guides
 * at left, 25%, 50%, 75% and right edges. Horizontal lines are applied at
 * the section boundaries via <Section />.
 */
export function GridFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[1280px] border-x border-[var(--color-grid)]">
      {children}
    </div>
  );
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Add a top border (horizontal grid line). Default true. */
  divider?: boolean;
  /** Vertical padding scale. */
  size?: "sm" | "md" | "lg";
  inner?: string;
  /** Apply the soft radial glow + faint halftone background. Default true. */
  glow?: boolean;
}

export function Section({
  children,
  divider = true,
  size = "lg",
  className,
  inner,
  glow = true,
  ...rest
}: SectionProps) {
  const pad =
    size === "sm"
      ? "py-14 md:py-20"
      : size === "md"
        ? "py-20 md:py-28"
        : "py-24 md:py-36";
  return (
    <section
      className={cn("relative", glow && "bg-section-glow", divider && "border-t border-[var(--color-grid)]", className)}
      {...rest}
    >
      <div className={cn("relative px-6 md:px-12", pad, inner)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("eyebrow", className)}>{children}</div>;
}