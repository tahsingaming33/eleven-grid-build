import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import { Film, Sparkles, Layers, Play } from "lucide-react";
import { InteractiveCard } from "@/components/site/InteractiveCard";
import { NoiseGradient } from "@/components/site/NoiseGradient";
import { useRef, useState } from "react";
import quakesLogo from "@/assets/logos/quakes.png.asset.json";
import masahaLogo from "@/assets/logos/masaha.png.asset.json";
import elitesLogo from "@/assets/logos/elites.png.asset.json";
import diamondLogo from "@/assets/logos/diamond.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motiondude — Cinematic motion design" },
      { name: "description", content: "Freelance motion designer making cinematic brand films, commercials and motion systems for ambitious brands." },
      { property: "og:title", content: "Motiondude — Cinematic motion design" },
      { property: "og:description", content: "Cinematic motion design for ambitious brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroWithShowreel />
      <TrustedBy />
      <WhatIDo />
      <FAQ />
    </>
  );
}

function HeroWithShowreel() {
  return (
    <Section divider={false} size="lg" className="bg-etched-grid">
      {/* Showreel first */}
      <div className="mx-auto w-full max-w-5xl pt-6 md:pt-10">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <NoiseGradient preset="sunset" className="absolute inset-0" />
          <div className="absolute inset-0 grid place-items-center">
            <button className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm text-white backdrop-blur-md">
              <Play className="h-4 w-4 fill-current" />
              Play showreel · 02:14
            </button>
          </div>
        </div>
      </div>

      {/* Headline + subtitle + buttons below */}
      <div className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
        <Eyebrow>Motion designer · Available 2026</Eyebrow>
        <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-6xl">
          Cinematic motion design for ambitious brands.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          A small studio of one, making brand films, commercials and motion systems that feel calm, exacting and inevitable.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/work"
            className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            See the work
          </Link>
          <a
            href="mailto:hello@motiondude.com"
            className="inline-flex h-11 items-center rounded-full border border-[var(--color-border)] px-5 text-sm font-medium text-foreground transition-colors hover:bg-[var(--color-surface)]"
          >
            Start a project
          </a>
        </div>
      </div>
    </Section>
  );
}


function TrustedBy() {
  // adapt: "dark" => filter applied in dark mode (logo is black, needs to become white)
  //        "light" => filter applied in light mode (logo is white, needs to become black)
  //        "none" => full color, never filter
  // Each source PNG has the icon on the left and a brand name baked in as
  // white text on the right. We show only the icon (via background-image clipped
  // to the icon's slice of the source) and render the name in real text that
  // adapts to the theme. `invert` flips pure-black mono icons for dark mode.
  const logos: {
    src: string;
    name: string;
    /** width % of the source image occupied by the icon (left-anchored). */
    iconWidthPct: number;
    /** invert the icon for the opposite theme (mono-black icons only). */
    invert?: "dark" | "light";
  }[] = [
    { src: quakesLogo.url, name: "Quakes Legacy", iconWidthPct: 18 },
    { src: masahaLogo.url, name: "Masaha", iconWidthPct: 22, invert: "dark" },
    { src: elitesLogo.url, name: "Elites Crypto", iconWidthPct: 22, invert: "dark" },
    { src: diamondLogo.url, name: "Maagnus", iconWidthPct: 18 },
  ];
  return (
    <Section size="sm" className="bg-edge-halftone">
      <div className="flex flex-col gap-10">
        <Eyebrow>Trusted by</Eyebrow>
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-10 sm:grid-cols-4">
          {logos.map((l) => {
            // background-size width = 100 / iconWidthPct * 100 (%) so the icon
            // slice scales to fill the box height.
            const sizePct = (100 / l.iconWidthPct) * 100;
            const invertClass =
              l.invert === "dark"
                ? "dark:[filter:brightness(0)_invert(1)]"
                : l.invert === "light"
                  ? "[filter:brightness(0)] dark:[filter:none]"
                  : "";
            return (
              <div key={l.name} className="flex items-center gap-3">
                <div
                  role="img"
                  aria-label={l.name}
                  className={`h-9 w-9 shrink-0 bg-no-repeat ${invertClass}`}
                  style={{
                    backgroundImage: `url(${l.src})`,
                    backgroundSize: `${sizePct}% auto`,
                    backgroundPosition: "left center",
                  }}
                />
                <span className="text-base font-medium tracking-tight text-foreground/85">
                  {l.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function WhatIDo() {
  const items = [
    {
      icon: Film,
      title: "Brand Films",
      body: "Long-form, cinematic pieces built around a single, quiet idea. Made to last on the homepage and the boardroom.",
    },
    {
      icon: Sparkles,
      title: "Commercials",
      body: "Launch spots and product films, cut once and delivered in every format you need — 60, 30, 15, 6.",
    },
    {
      icon: Layers,
      title: "Motion Design",
      body: "Motion systems for product, web and social. Tokens, primitives and a small library that scales.",
    },
  ];
  return (
    <Section size="lg" className="bg-section-glow">
      <div className="mb-14 max-w-2xl">
        <Eyebrow>What I do</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.02em] md:text-4xl">
          Three practices, one quiet sensibility.
        </h2>
      </div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <InteractiveCard
              key={it.title}
              className="bg-[var(--color-card)] p-8"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-border)] text-foreground/80">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="mt-6 text-lg font-medium">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </InteractiveCard>
          );
        })}
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    { q: "Why is a brand film worth more than a regular video?", a: "A brand film is engineered for recall, positioning, and emotional resonance — not just views. It compounds in value because every share reinforces your brand voice, not just your message." },
    { q: "Why not just hire a video agency for less?", a: "Agencies optimize for delivery. I optimize for outcome. You work with one creative director from concept to final frame — no account managers, no telephone game, no rotating team." },
    { q: "Can I just use stock footage and templates?", a: "You can. But so can your competitors. Templates produce videos that look like everyone else's — which is the opposite of what motion design is supposed to do." },
    { q: "How does a brand film actually increase conversions?", a: "It removes ambiguity. Visitors get instant clarity on what you do, who it's for, and why it matters — usually within the first 8 seconds. That's where conversion lifts come from." },
    { q: "Why is your process different from other motion designers?", a: "I start with strategy, not After Effects. Every frame is justified by a business goal before a single keyframe is drawn." },
    { q: "How do you position a brand as premium through video?", a: "Restraint. Premium feels expensive because of what's left out — empty space, slower pacing, deliberate typography, restraint in motion. I design for that." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section size="lg" className="bg-section-glow">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            A few questions, answered.
          </h2>
        </div>
        <div className="divide-y divide-[var(--color-grid)] border-y border-[var(--color-grid)]">
          {items.map((it, i) => (
            <FAQRow key={it.q} q={it.q} a={it.a} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FAQRow({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="group">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-base font-medium transition-colors hover:text-foreground/80"
      >
        <span>{q}</span>
        <span className="relative ml-4 inline-flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground">
          <span className="absolute h-px w-3.5 bg-current" />
          <span
            className={`absolute h-3.5 w-px bg-current transition-transform duration-300 ease-out ${isOpen ? "rotate-90" : ""}`}
          />
        </span>
      </button>
      <div
        style={{ height: isOpen ? (ref.current?.scrollHeight ?? 0) : 0 }}
        className="overflow-hidden transition-[height] duration-[350ms] ease-out"
      >
        <div
          ref={ref}
          className={`pb-6 pr-10 transition-opacity duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}
