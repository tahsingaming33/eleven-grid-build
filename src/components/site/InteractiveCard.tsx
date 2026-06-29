import { useRef, type ReactNode, type MouseEvent, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a Clerk-style halftone dot texture and colored glow
 * that fade in on hover, concentrated around the cursor.
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
      {...rest}
    >
      {/* colored glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/icard:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
        }}
      />
      {/* halftone dots, masked to cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/icard:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklab, var(--foreground) 55%, transparent) 1px, transparent 1.4px)",
          backgroundSize: "10px 10px",
          WebkitMaskImage:
            "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), black, transparent 70%)",
          maskImage:
            "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), black, transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}