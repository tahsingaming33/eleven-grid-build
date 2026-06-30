import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import { projects } from "@/data/projects";
import { ArrowUpRight, Play } from "lucide-react";
import { InteractiveCard } from "@/components/site/InteractiveCard";
import { NoiseGradient, type NoisePreset } from "@/components/site/NoiseGradient";
import { HoverPreviewThumb } from "@/components/site/HoverPreviewThumb";

const PRESETS: NoisePreset[] = ["sunset", "ocean", "forest", "ember", "dusk"];

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work, Motiondude" },
      { name: "description", content: "Selected motion design work: brand films, commercials and motion systems." },
      { property: "og:title", content: "Work, Motiondude" },
      { property: "og:description", content: "Selected brand films, commercials and motion systems." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <Section divider={false} size="md">
        <div className="max-w-3xl">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-medium tracking-[-0.02em] md:text-5xl">Work</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            A small, selected archive. Each piece is a quiet collaboration with people who care about craft.
          </p>
        </div>
      </Section>
      <Section size="md">
        <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
          {projects.map((p, i) => {
            const inner = (
              <InteractiveCard className="group bg-[var(--color-card)] p-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  {p.comingSoon ? (
                    <div
                      className="absolute inset-0 grid place-items-center"
                      style={{ backgroundColor: "#FF90E8" }}
                    >
                      <span className="text-xl font-bold tracking-[-0.01em] text-black">
                        Coming Soon
                      </span>
                    </div>
                  ) : p.vimeoId ? (
                    <HoverPreviewThumb vimeoId={p.vimeoId} thumbnail={p.thumbnail} alt={p.title} />
                  ) : p.thumbnail ? (
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <NoiseGradient preset={PRESETS[i % PRESETS.length]} className="absolute inset-0" />
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-mono tracking-[0.18em] uppercase">{p.format}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-medium tracking-[-0.01em]">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  </div>
                  {!p.comingSoon && (
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  )}
                </div>
              </InteractiveCard>
            );
            if (p.comingSoon) {
              return (
                <div key={p.slug} aria-disabled="true" className="block cursor-default select-none">
                  {inner}
                </div>
              );
            }
            return (
              <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="block">
                {inner}
              </Link>
            );
          })}
        </div>
      </Section>
      <Section size="md">
        <Eyebrow>Reels</Eyebrow>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Short form vertical work.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ReelCard key={i} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}

function ReelCard({ index }: { index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      onClick={toggle}
      className="relative aspect-[9/16] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] cursor-pointer"
    >
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!playing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <span className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground opacity-40">
            REEL {String(index + 1).padStart(2, "0")}
          </span>
          <div className="rounded-full bg-white/10 p-2.5 backdrop-blur-sm">
            <Play className="h-4 w-4 text-white fill-white" />
          </div>
        </div>
      )}
    </div>
  );
}