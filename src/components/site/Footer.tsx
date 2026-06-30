import { Link } from "@tanstack/react-router";

/**
 * Inverted footer: light in dark mode, dark in light mode.
 * Uses an SVG curved-notch separator at the top edge.
 */
export function Footer() {
  return (
    <footer className="footer-inverted relative">
      {/* Curved notch separator (Clerk-style) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px] -mb-px"
        style={{ color: "var(--footer-bg)" }}
      >
        <path
          fill="currentColor"
          d="M0,60 L0,20 L640,20 C680,20 700,60 720,60 C740,60 760,20 800,20 L1440,20 L1440,60 Z"
        />
      </svg>
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-mono text-[13px] font-semibold tracking-[0.18em]">MOTIONDUDE</div>
            <p className="mt-4 max-w-xs text-sm footer-muted">
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
            <div className="eyebrow footer-eyebrow">Connect</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="footer-link" href="mailto:tahsin@motiondude.online">
                  tahsin@motiondude.online
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://www.instagram.com/motiondudehere/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://x.com/motiondudegone" target="_blank" rel="noopener noreferrer">
                  X
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://www.linkedin.com/in/tahsin-mahmud-bdt/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://wa.me/8801940295660" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://vimeo.com/motiondude" target="_blank" rel="noopener noreferrer">
                  Vimeo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-[var(--footer-divider)] pt-8 text-xs footer-muted md:flex-row">
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
      <div className="eyebrow footer-eyebrow">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="footer-link">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}