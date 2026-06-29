import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import portraitAsset from "@/assets/tahsin-portrait.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, Motiondude" },
      { name: "description", content: "About Motiondude, a freelance motion designer working with calm, exacting brands." },
      { property: "og:title", content: "About, Motiondude" },
      { property: "og:description", content: "A freelance motion designer working with calm, exacting brands." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section divider={false} size="md">
        <div className="max-w-3xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            A small studio of one, making quiet, considered films.
          </h1>
        </div>
      </Section>
      <Section size="md">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <img
              src={portraitAsset.url}
              alt="Tahsin Mahmud"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm a freelance motion designer working with brands, agencies and software companies. My practice is small on purpose, one director, one editor, one set of taste.
            </p>
            <p>
              For the last decade I've made brand films, commercials and motion systems for clients who care about craft. The work tends to be calm, restrained and unhurried.
            </p>
            <p>
              Outside of client projects, I write about the practice, sell a small shop of tools and templates, and travel for shoots.
            </p>
          </div>
        </div>
      </Section>
      <Section size="md">
        <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
          {[
            { k: "Based in", v: "Lisbon, PT" },
            { k: "Years", v: "10+" },
            { k: "Languages", v: "EN · PT · IT" },
          ].map((s) => (
            <div key={s.k} className="bg-[var(--color-card)] p-8">
              <div className="eyebrow">{s.k}</div>
              <div className="mt-3 text-xl font-medium tracking-[-0.01em]">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}