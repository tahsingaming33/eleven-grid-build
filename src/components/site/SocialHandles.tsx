import { FaInstagram, FaXTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "./Grid";

type Social = {
  label: string;
  href: string;
  Icon: typeof FaInstagram;
  hoverClass: string;
};

const socials: Social[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/motiondudehere/",
    Icon: FaInstagram,
    hoverClass: "group-hover:text-[#E1306C]",
  },
  {
    label: "X",
    href: "https://x.com/motiondudegone",
    Icon: FaXTwitter,
    hoverClass: "group-hover:text-[#FFFFFF]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahsin-mahmud-bdt/",
    Icon: FaLinkedin,
    hoverClass: "group-hover:text-[#0A66C2]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801940295660",
    Icon: FaWhatsapp,
    hoverClass: "group-hover:text-[#25D366]",
  },
];

export function SocialHandles() {
  return (
    <Section size="md">
      <div className="text-center">
        <Eyebrow>Find me online</Eyebrow>
        <p className="mt-4 text-base text-muted-foreground">Let&apos;s connect.</p>
      </div>
      <div className="relative mx-auto mt-10 grid max-w-3xl grid-cols-2 md:grid-cols-4">
        {/* Horizontal fading dashed top line */}
        <span className="social-line-h pointer-events-none absolute left-0 right-0 top-0" aria-hidden="true" />
        {/* Horizontal fading dashed bottom line */}
        <span className="social-line-h pointer-events-none absolute left-0 right-0 bottom-0" aria-hidden="true" />
        {/* Middle horizontal divider for mobile 2x2 */}
        <span className="social-line-h pointer-events-none absolute left-0 right-0 top-1/2 md:hidden" aria-hidden="true" />
        {/* Vertical fading dashed dividers */}
        <span className="social-line-v pointer-events-none absolute top-0 bottom-0 left-1/2" aria-hidden="true" />
        <span className="social-line-v pointer-events-none absolute top-0 bottom-0 left-1/4 hidden md:block" aria-hidden="true" />
        <span className="social-line-v pointer-events-none absolute top-0 bottom-0 left-3/4 hidden md:block" aria-hidden="true" />

        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="group relative flex aspect-[4/3] items-center justify-center md:aspect-square"
          >
            <s.Icon
              className="h-7 w-7 text-foreground/70 transition-all duration-200 ease-out group-hover:scale-[1.12] group-hover:text-foreground"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/work"
          className="inline-flex h-10 items-center rounded-full border border-[var(--color-border)] px-5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          See Case Studies
        </Link>
        <Link
          to="/inquiry"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-[oklch(0.32_0.004_270)] px-5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Inquiry
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white">
            <ArrowRight className="h-3.5 w-3.5 text-[#0a0a0a]" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
