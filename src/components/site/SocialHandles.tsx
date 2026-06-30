import { Section, Eyebrow } from "./Grid";

type Social = {
  label: string;
  href: string;
  svg: React.ReactNode;
};

const STROKE = 1.6;

const socials: Social[] = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l16 16" />
        <path d="M20 4L4 20" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7" />
        <path d="M8 7v.01" />
        <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
        <path d="M12 10v7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 12a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 20.5 12z" />
        <path d="M9 9.5c.2 1.2 1 2.4 1.9 3.3.9.9 2.1 1.6 3.3 1.9.4.1.8 0 1-.3l.7-.8c.2-.2.5-.2.7-.1l1.6.8c.3.1.4.4.3.7-.3.9-1.2 1.5-2.1 1.5-2 0-4-1-5.5-2.5S8.5 10.5 8.5 8.5c0-.9.6-1.8 1.5-2.1.3-.1.6 0 .7.3l.8 1.6c.1.2 0 .5-.1.7l-.8.7c-.3.2-.4.6-.3 1z" />
      </svg>
    ),
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
            <span className="social-icon block h-7 w-7 text-foreground/80 group-hover:text-foreground">
              {s.svg}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}