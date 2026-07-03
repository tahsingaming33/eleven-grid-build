import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow } from "@/components/site/Grid";
import { getProject, projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import type { Project } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title}, Motiondude` : "Case Study, Motiondude";
    const desc = p?.description ?? "Case study";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }: { params: { slug: string } }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useParams();
  const project = getProject(slug)!;
  const meta = [
    { label: "Format", value: project.format },
    { label: "Runtime", value: project.runtime },
    { label: "Production", value: project.production },
    { label: "Purpose", value: project.purpose },
    { label: "CTA", value: project.cta },
  ];
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const [lightbox, setLightbox] = useState<number | null>(null);
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? null : (i + 1) % project.storyboard.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? null : (i - 1 + project.storyboard.length) % project.storyboard.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, project.storyboard.length]);

  return (
    <>
      <Section divider={false} size="md">
        <Link to="/work" className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.18em] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> BACK TO WORK
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <Pill>CASE STUDY</Pill>
          <Pill>{project.year}</Pill>
          <Pill>{project.format}</Pill>
        </div>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-medium tracking-[-0.02em] md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{project.subtitle}</p>
      </Section>

      <Section size="md">
        {project.reels ? (
          <ReelsGrid reels={project.reels} />
        ) : (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          {project.vimeoId ? (
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&dnt=1`}
              title={project.title}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <>
              <div
                aria-hidden
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 30%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <button className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--background)]/70 px-5 py-3 text-sm backdrop-blur-md">
                  <Play className="h-4 w-4 fill-current" />
                  Play · {project.runtime}
                </button>
              </div>
            </>
          )}
        </div>
        )}
      </Section>

      <Section size="sm">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-5">
          {meta.map((m) => (
            <div key={m.label} className="bg-[var(--color-card)] p-5">
              <div className="eyebrow">{m.label}</div>
              <div className="mt-2 text-sm font-medium">{m.value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section size="md">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 md:p-14">
          <p className="mx-auto max-w-3xl text-balance text-center text-xl font-medium leading-[1.4] tracking-[-0.01em] md:text-2xl">
            {project.intro}
          </p>
        </div>
      </Section>

      <Section size="md">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>{project.strategy.heading}</Eyebrow>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.strategy.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.strategy.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {project.storyboard.length > 0 && (
        <Section size="md">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Storyboard</Eyebrow>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.01em] md:text-3xl">Frames from the edit</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {project.storyboard.map((f, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-video overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-left"
              >
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-60 transition-opacity group-hover:opacity-90"
                    style={{
                      background: `radial-gradient(ellipse at ${20 + (i * 13) % 60}% ${30 + (i * 7) % 40}%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 65%)`,
                    }}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono tracking-[0.16em] uppercase text-white/0 group-hover:text-white/90 transition-colors">
                  {String(i + 1).padStart(2, "0")} · {f.caption}
                </div>
              </button>
            ))}
          </div>
        </Section>
      )}

      {project.process && (
        <Section size="md">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-3 text-2xl font-medium tracking-[-0.01em] md:text-3xl">How it came together</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {project.process.map((p) => (
              <div key={p.heading} className="bg-[var(--color-card)] p-6 md:p-8">
                <h3 className="text-lg font-medium tracking-[-0.01em]">{p.heading}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span aria-hidden>·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {project.collaboration && (
        <Section size="md">
          <Eyebrow>Collaboration</Eyebrow>
          <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 md:p-12">
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.collaboration.body}
            </p>
            <a
              href={project.collaboration.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--background)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-surface)]"
            >
              <Play className="h-4 w-4 fill-current" />
              {project.collaboration.ctaLabel}
            </a>
          </div>
        </Section>
      )}

      <Section size="md">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Roles and Credits</Eyebrow>
          </div>
          <div className="divide-y divide-[var(--color-grid)] border-y border-[var(--color-grid)]">
            {project.credits.map((c, i) => (
              <div key={`${c.name}-${c.role}-${i}`} className="grid grid-cols-2 gap-6 py-4 text-sm">
                <div className="font-medium">
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </div>
                <div className="text-muted-foreground">{c.role}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section size="md">
        <div className="flex items-end justify-between gap-6">
          <Eyebrow>Other Projects</Eyebrow>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            View All <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group bg-[var(--color-card)] p-6 transition-colors hover:bg-[var(--color-surface)]"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                {p.thumbnail && (
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="mt-5">
                <div className="text-xs text-muted-foreground font-mono tracking-[0.18em] uppercase">{p.format} · {p.year}</div>
                <div className="mt-2 text-lg font-medium">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-sm">
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              setLightbox((i) =>
                i === null ? null : (i - 1 + project.storyboard.length) % project.storyboard.length,
              )
            }
            className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLightbox((i) => (i === null ? null : (i + 1) % project.storyboard.length))}
            className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="w-full max-w-5xl">
            {project.storyboard[lightbox].image ? (
              <img
                src={project.storyboard[lightbox].image}
                alt={project.storyboard[lightbox].caption}
                className="aspect-video w-full rounded-xl border border-white/10 object-cover"
              />
            ) : (
              <div
                className="aspect-video w-full rounded-xl border border-white/10"
                style={{
                  background: `radial-gradient(ellipse at 40% 30%, color-mix(in oklab, var(--accent) 18%, transparent), #0a0a0a 70%)`,
                }}
              />
            )}
            <div className="mt-4 text-center text-[12px] font-mono tracking-[0.18em] uppercase text-white/70">
              {String(lightbox + 1).padStart(2, "0")} / {String(project.storyboard.length).padStart(2, "0")} · {project.storyboard[lightbox].caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </span>
  );
}

function ReelsGrid({ reels }: { reels: NonNullable<Project["reels"]> }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
      {reels.map((r) => (
        <ReelCard key={r.number} reel={r} />
      ))}
    </div>
  );
}

function ReelCard({ reel }: { reel: NonNullable<Project["reels"]>[number] }) {
  return (
    <div className="group block bg-[var(--color-card)] p-6">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        {reel.driveId ? (
          <iframe
            src={`https://drive.google.com/file/d/${reel.driveId}/preview`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay"
            allowFullScreen
            title={`Reel ${reel.number}`}
          />
        ) : reel.videoUrl ? (
          <video
            src={reel.videoUrl}
            className="absolute inset-0 h-full w-full object-cover"
            playsInline
            controls
            preload="metadata"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, color-mix(in oklab, var(--accent) 22%, transparent), #0a0a0a 70%)",
            }}
          />
        )}
      </div>
    </div>
  );
}