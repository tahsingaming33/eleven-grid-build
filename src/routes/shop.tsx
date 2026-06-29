import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";

const shopProducts = [
  {
    title: "Sutox Project File",
    price: "Free",
    description:
      "A ready to use After Effects project file breaking down the Sutox video style. Download it, play with the settings, and learn the workflow.",
    thumbnail: "https://public-files.gumroad.com/ijiv78mvrnnwpi9es23ej1nd8ruq",
    url: "https://tahsinmahmud.gumroad.com/l/sutoxprojectfiledownlodeforfree",
  },
  {
    title: "Financial Chart Animation",
    price: "Free",
    description:
      "A clean financial chart animation project file, ready to use and easy to customize.",
    thumbnail: "https://public-files.gumroad.com/gozzdr6nfvol5kfsql1iukznk3bc",
    url: "https://tahsinmahmud.gumroad.com/l/chartanimation",
  },
  {
    title: "Free UI Sound Effect Pack",
    price: "Free",
    description:
      "Crisp modern UI sounds for button clicks, alerts, transitions and menu interactions. Royalty free and ready to drop into any project.",
    thumbnail: "https://public-files.gumroad.com/r02o9pmn2ga57mur3i53puq6j6ap",
    url: "https://tahsinmahmud.gumroad.com/l/fxmtionfreesoundeffectpack",
  },
  {
    title: "Teejayartz Breakdown Pack",
    price: "Free",
    description:
      "The ultimate breakdown pack with 4 full project files, an exclusive sound effects pack and a full breakdown video. Learn the pacing, transitions and motion logic behind the Teejayartz editing style.",
    thumbnail: "https://public-files.gumroad.com/udo0dc4ddzg9p4u71egkfntprryo",
    url: "https://tahsinmahmud.gumroad.com/l/teejayartzbreakdownvideo",
  },
  {
    title: "Zelios SaaS Breakdown Video",
    price: "$1.99",
    description:
      "The complete After Effects project file of the Zelios SaaS breakdown video. Fully organized compositions, all assets included, and 3 separate AE versions for 2023, 2024 and 2025.",
    thumbnail: "https://public-files.gumroad.com/yw66don1wc0wpbhg5iqihcwd67b0",
    url: "https://tahsinmahmud.gumroad.com/l/zeliosaasbreakdown",
  },
];

export const Route = createFileRoute("/shop")({
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shopProducts.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface)]">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium">
                    {p.price}
                  </span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Get it
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
