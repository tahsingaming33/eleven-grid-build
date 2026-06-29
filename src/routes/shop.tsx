import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import { products } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop, Motiondude" },
      { name: "description", content: "A small shop of tools, templates and color for motion designers." },
      { property: "og:title", content: "Shop, Motiondude" },
      { property: "og:description", content: "Tools, templates and color for motion designers." },
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
          <h1 className="mt-5 text-balance text-4xl font-medium tracking-[-0.02em] md:text-5xl">A small shop of useful things.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tools, templates and color packs distilled from years of client work. Quietly opinionated.
          </p>
        </div>
      </Section>
      <Section size="md">
        <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/shop/$slug"
              params={{ slug: p.slug }}
              className="group bg-[var(--color-card)] p-6 transition-colors hover:bg-[var(--color-surface)]"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div
                  className="h-full w-full opacity-80"
                  style={{
                    background: `radial-gradient(ellipse at 40% 30%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 65%)`,
                  }}
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="eyebrow">{p.label}</div>
                  <h3 className="mt-2 text-lg font-medium tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                </div>
                <div className="shrink-0 text-sm font-medium">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}