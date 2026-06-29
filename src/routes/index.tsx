import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import { Film, Sparkles, Layers, Play } from "lucide-react";
import { InteractiveCard } from "@/components/site/InteractiveCard";
import { NoiseGradient } from "@/components/site/NoiseGradient";

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
    <Section divider={false} size="lg">
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
  const logos = ["NORTHWIND", "LUMEN", "ATLAS", "MERIDIAN", "PARALLEL", "FIELDWORK"];
  return (
    <Section size="sm">
      <div className="flex flex-col items-center gap-8">
        <Eyebrow>Trusted by</Eyebrow>
        <div className="grid w-full grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-mono text-[12px] tracking-[0.22em] text-muted-foreground"
            >
              {l}
            </div>
          ))}
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
    <Section size="lg">
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
    { q: "How do projects typically start?", a: "With a short call and a one-page brief. If it feels right for both of us, I send a treatment within a week." },
    { q: "Do you work with agencies?", a: "Yes — as a director, motion lead or finishing partner. Most of my work is direct-to-client, but agency collaborations are a regular part of the year." },
    { q: "What's the typical timeline?", a: "Brand films run six to ten weeks. Commercials, four to eight. Motion systems are ongoing engagements that start with a two-week scoping sprint." },
    { q: "Where are you based?", a: "Lisbon. I travel for shoots and work remotely with teams everywhere." },
  ];
  return (
    <Section size="lg">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            A few questions, answered.
          </h2>
        </div>
        <div className="divide-y divide-[var(--color-grid)] border-y border-[var(--color-grid)]">
          {items.map((it) => (
            <details key={it.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                {it.q}
                <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
