import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import { posts } from "@/data/posts";
import { InteractiveCard } from "@/components/site/InteractiveCard";
import { NoiseGradient, type NoisePreset } from "@/components/site/NoiseGradient";

const PRESETS: NoisePreset[] = ["sunset", "ocean", "forest", "ember", "dusk"];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Motiondude" },
      { name: "description", content: "Notes on craft, process and the small studio life." },
      { property: "og:title", content: "Blog — Motiondude" },
      { property: "og:description", content: "Notes on craft, process and the small studio life." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <Section divider={false} size="md">
        <div className="max-w-3xl">
          <Eyebrow>Journal</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-medium tracking-[-0.02em] md:text-5xl">Blog</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Notes on craft, process and the small studio life. Updated when there's something worth saying.
          </p>
        </div>
      </Section>
      <Section size="md">
        <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="block"
            >
              <InteractiveCard className="bg-[var(--color-card)] p-6">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--color-border)]">
                  <NoiseGradient preset={PRESETS[i % PRESETS.length]} />
                </div>
                <div className="mt-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono tracking-[0.18em] uppercase">{p.category}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.01em]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
              </InteractiveCard>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}