import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
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
        </div>
      </div>
    </header>
  );
}