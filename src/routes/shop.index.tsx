import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Grid";
import cursorFollowThumb from "@/assets/shop/cursorfollow-thumb.png.asset.json";

type Category = "project-files" | "scripts-plugins";

interface ShopProduct {
  title: string;
  price: string;
  description: string;
  thumbnail: string;
  url: string;
  internal?: boolean;
  category: Category;
  bestSeller?: boolean;
  isNew?: boolean;
  mostDemand?: boolean;
  tutorialUrl?: string;
}

const shopProducts: ShopProduct[] = [
  {
    title: "Codex Project File",
    price: "$0+",
    description:
      "The complete project file for Codex, built in After Effects and Premiere Pro. Every layer, transition, and sound effect is included so you can study exactly how it was made.",
    thumbnail: "https://public-files.gumroad.com/lqjs5junky40s7uwuiy49fvr2g6g",
    url: "https://tahsinmahmud.gumroad.com/l/codexprojectfile",
    category: "project-files",
    isNew: true,
  },
  {
    title: "Design Move: Soul Project File",
    price: "$1",
    description:
      "The complete After Effects project file for Design Move: Soul. Cleanly organized compositions, all assets included, and support for AE 2023, 2024 and 2025. Perfect for studying layout, typography and animation.",
    thumbnail: "https://public-files.gumroad.com/au5xrvpkad83wefz8wxyzqecn1bz",
    url: "https://tahsinmahmud.gumroad.com/l/designmovesoul",
    category: "project-files",
    mostDemand: true,
  },
  {
    title: "Zelios SaaS Breakdown Video",
    price: "$1.99",
    description:
      "The complete After Effects project file of the Zelios SaaS breakdown video. Fully organized compositions, all assets included, and 3 separate AE versions for 2023, 2024 and 2025.",
    thumbnail: "https://public-files.gumroad.com/yw66don1wc0wpbhg5iqihcwd67b0",
    url: "https://tahsinmahmud.gumroad.com/l/zeliosaasbreakdown",
    category: "project-files",
    tutorialUrl: "https://www.youtube.com/watch?v=k0lqThij2Lg&t=6s",
  },
  {
    title: "Teejayartz Breakdown Pack",
    price: "Free",
    description:
      "The ultimate breakdown pack with 4 full project files, an exclusive sound effects pack and a full breakdown video. Learn the pacing, transitions and motion logic behind the Teejayartz editing style.",
    thumbnail: "https://public-files.gumroad.com/udo0dc4ddzg9p4u71egkfntprryo",
    url: "https://tahsinmahmud.gumroad.com/l/teejayartzbreakdownvideo",
    category: "project-files",
    bestSeller: true,
    tutorialUrl: "https://www.youtube.com/watch?v=enrHgez6iWA&t=35s",
  },
  {
    title: "Free UI Sound Effect Pack",
    price: "Free",
    description:
      "Crisp modern UI sounds for button clicks, alerts, transitions and menu interactions. Royalty free and ready to drop into any project.",
    thumbnail: "https://public-files.gumroad.com/r02o9pmn2ga57mur3i53puq6j6ap",
    url: "https://tahsinmahmud.gumroad.com/l/fxmtionfreesoundeffectpack",
    category: "project-files",
  },
  {
    title: "Financial Chart Animation",
    price: "Free",
    description:
      "A clean financial chart animation project file, ready to use and easy to customize.",
    thumbnail: "https://public-files.gumroad.com/gozzdr6nfvol5kfsql1iukznk3bc",
    url: "https://tahsinmahmud.gumroad.com/l/chartanimation",
    category: "project-files",
  },
  {
    title: "Sutox Project File",
    price: "Free",
    description:
      "A ready to use After Effects project file breaking down the Sutox video style. Download it, play with the settings, and learn the workflow.",
    thumbnail: "https://public-files.gumroad.com/ijiv78mvrnnwpi9es23ej1nd8ruq",
    url: "https://tahsinmahmud.gumroad.com/l/sutoxprojectfiledownlodeforfree",
    category: "project-files",
  },
  {
    title: "CursorFollow",
    price: "Free",
    description:
      "A custom After Effects script that speeds up your workflow.",
    thumbnail: cursorFollowThumb.url,
    url: "/shop/script",
    internal: true,
    category: "scripts-plugins",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "project-files", label: "Project Files" },
  { id: "scripts-plugins", label: "Scripts and Plugins" },
];

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop, Motiondude" },
      {
        name: "description",
        content: "A small shop of tools, templates and color for motion designers.",
      },
      { property: "og:title", content: "Shop, Motiondude" },
      {
        property: "og:description",
        content: "Tools, templates and color for motion designers.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("project-files");
  const visibleProducts = shopProducts.filter((p) => p.category === activeCategory);
  return (
    <>
      <Section divider={false} size="md">
        <div className="max-w-3xl">
          <Eyebrow>Shop</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            A small shop of useful things.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tools, templates and color packs distilled from years of client work. Quietly opinionated.
          </p>
        </div>
      </Section>
      <Section size="md">
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-[var(--color-border)]">
          {categories.map((c) => {
            const active = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={
                  "relative -mb-px px-4 py-3 text-sm font-medium transition-colors " +
                  (active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {c.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-foreground" />
                )}
              </button>
            );
          })}
        </div>
        {visibleProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-card)] px-8 py-16 text-center">
            <p className="text-sm text-muted-foreground">
              Coming soon. New scripts and plugins are in the works.
            </p>
          </div>
        ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((p) => (
            <div
              key={p.title}
              className={
                "group relative flex flex-col overflow-hidden rounded-2xl border bg-[var(--color-card)] " +
                (p.bestSeller
                  ? "border-amber-300/60 shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_20px_60px_-20px_rgba(251,191,36,0.45)]"
                  : p.isNew
                    ? "border-blue-400/60 shadow-[0_0_0_1px_rgba(96,165,250,0.25),0_20px_60px_-20px_rgba(96,165,250,0.45)]"
                    : "border-[var(--color-border)]")
              }
            >
              {p.isNew && (
                <>
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 50% 0%, rgba(96,165,250,0.18) 0%, rgba(96,165,250,0) 55%)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="sparkle sparkle-a" style={{ color: '#60a5fa', textShadow: '0 0 8px rgba(96,165,250,0.9), 0 0 16px rgba(96,165,250,0.5)' }}>✦</span>
                    <span className="sparkle sparkle-b" style={{ color: '#60a5fa', textShadow: '0 0 8px rgba(96,165,250,0.9), 0 0 16px rgba(96,165,250,0.5)' }}>✦</span>
                    <span className="sparkle sparkle-c" style={{ color: '#60a5fa', textShadow: '0 0 8px rgba(96,165,250,0.9), 0 0 16px rgba(96,165,250,0.5)' }}>✦</span>
                    <span className="sparkle sparkle-d" style={{ color: '#60a5fa', textShadow: '0 0 8px rgba(96,165,250,0.9), 0 0 16px rgba(96,165,250,0.5)' }}>✦</span>
                  </div>
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-blue-400/60 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-blue-200 backdrop-blur">
                    <Sparkles className="h-3 w-3" />
                    New
                  </div>
                </>
              )}
              {p.bestSeller && (
                <>
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 50% 0%, rgba(251,191,36,0.18) 0%, rgba(251,191,36,0) 55%)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="sparkle sparkle-a">✦</span>
                    <span className="sparkle sparkle-b">✦</span>
                    <span className="sparkle sparkle-c">✦</span>
                    <span className="sparkle sparkle-d">✦</span>
                  </div>
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-200 backdrop-blur">
                    <Sparkles className="h-3 w-3" />
                    Best Seller
                  </div>
                </>
              )}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface)]">
                {p.thumbnail ? (
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1f] via-[#141418] to-[#0d0d10]">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-60"
                      style={{
                        background:
                          "radial-gradient(60% 50% at 30% 40%, rgba(99,102,241,0.18) 0%, transparent 70%), radial-gradient(50% 40% at 80% 70%, rgba(236,72,153,0.12) 0%, transparent 70%)",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                        Featured Script
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                  <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium">
                    {p.price}
                  </span>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    {p.tutorialUrl && (
                      <a
                        href={p.tutorialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm font-medium text-foreground transition-colors hover:bg-[var(--color-surface)]"
                      >
                        <Play className="h-3 w-3 fill-current" />
                        Watch Tutorial
                      </a>
                    )}
                    {p.internal ? (
                      <Link
                        to={p.url}
                        className={
                          "inline-flex h-9 items-center gap-1 rounded-full px-5 text-sm font-medium transition-opacity hover:opacity-90 " +
                          (p.bestSeller
                            ? "bg-gradient-to-r from-amber-300 to-amber-500 text-black"
                            : p.isNew
                              ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                              : "bg-foreground text-background")
                        }
                      >
                        View script
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          "inline-flex h-9 items-center rounded-full px-5 text-sm font-medium transition-opacity hover:opacity-90 " +
                          (p.bestSeller
                            ? "bg-gradient-to-r from-amber-300 to-amber-500 text-black"
                            : p.isNew
                              ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                              : "bg-foreground text-background")
                        }
                      >
                        Get it
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </Section>
    </>
  );
}
