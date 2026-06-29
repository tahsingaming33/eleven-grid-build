import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
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
  return (
    <header className="relative z-50 w-full border-b border-[var(--color-grid)] bg-[color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur-xl">
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
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <div
        className="overflow-hidden md:hidden"
        style={{
          maxHeight: open ? 600 : 0,
          transition: "max-height 350ms ease",
          backgroundColor: "#0a0a0a",
        }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2">
          {items.map((i, idx) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={() => setOpen(false)}
              className="flex min-h-[64px] items-center border-b border-white/10 text-[28px] font-medium tracking-[-0.01em] text-[#f5f5f0]"
              style={
                open
                  ? {
                      animation: `menuItemIn 250ms ease-out both`,
                      animationDelay: `${idx * 60}ms`,
                    }
                  : undefined
              }
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/inquiry"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-full bg-[#f5f5f0] px-6 text-base font-medium text-[#0a0a0a]"
            style={
              open
                ? { animation: `menuItemIn 250ms ease-out both`, animationDelay: `300ms` }
                : undefined
            }
          >
            Inquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}