import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-grid)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-mono text-[13px] font-semibold tracking-[0.18em]">MOTIONDUDE</div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Cinematic motion design for ambitious brands. Available worldwide.
            </p>
          </div>
          <FooterCol
            title="Explore"
            links={[
              { to: "/", label: "Home" },
              { to: "/work", label: "Work" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { to: "/work", label: "Brand Films" },
              { to: "/work", label: "Commercials" },
              { to: "/work", label: "Motion Design" },
              { to: "/shop", label: "Shop" },
            ]}
          />
          <div>
            <div className="eyebrow">Connect</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="mailto:hello@motiondude.com">
                  hello@motiondude.com
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Vimeo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-[var(--color-grid)] pt-8 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Motiondude. All rights reserved.</span>
          <span className="font-mono tracking-[0.18em]">CRAFTED WITH CARE</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <div className="eyebrow">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}