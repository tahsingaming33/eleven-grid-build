import { useRef, type ReactNode, type MouseEvent, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a Clerk-style fine halftone dot field that is always animating
 * underneath, but only revealed in a soft circle around the cursor.
 */
export function InteractiveCard({
  children,
  className,
  ...rest
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("group/icard relative isolate overflow-hidden", className)}
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
      {...rest}
    >
      {/* soft glow following cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover/icard:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)",
        }}
      />
      {/* halftone field — always animating, revealed only under cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover/icard:opacity-100 animate-halftone"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklab, var(--foreground) 45%, transparent) 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px",
          WebkitMaskImage:
            let"radial-gradient(circle 120px at var(--mx) var(--my), black 0%, transparent 70%)",
          maskImage:
            "radial-gradient(circle 120px at var(--mx) var(--my), black 0%, transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}