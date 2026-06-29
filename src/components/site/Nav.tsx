import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/lib/theme";

const items = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/shop", label: "Shop" },
] as const;

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-grid)] bg-[color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-12">
        <Link to="/" className="font-mono text-[13px] font-semibold tracking-[0.18em]">
          MOTIONDUDE
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-[13px] text-foreground" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/inquiry"
            className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-[13px] font-medium text-background transition-opacity hover:opacity-90"
          >
            Inquiry
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col md:hidden animate-[fadeIn_200ms_ease-out]"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
            <Link to="/" onClick={() => setOpen(false)} className="font-mono text-[13px] font-semibold tracking-[0.18em]">
              MOTIONDUDE
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col px-6 py-10">
            {items.map((i, idx) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="flex min-h-[64px] items-center border-b border-white/10 text-[28px] font-medium tracking-[-0.01em] text-[#f5f5f0] animate-[menuItemIn_250ms_ease-out_both]"
                style={{ animationDelay: `${idx * 70}ms` }}
                activeOptions={{ exact: i.to === "/" }}
              >
                {i.label}
              </Link>
            ))}
            <div className="flex-1" />
            <Link
              to="/inquiry"
              onClick={() => setOpen(false)}
              className="mb-2 inline-flex h-14 w-full items-center justify-center rounded-full bg-[#f5f5f0] px-6 text-base font-medium text-[#0a0a0a] animate-[menuItemIn_250ms_ease-out_both]"
              style={{ animationDelay: "350ms" }}
            >
              Inquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}