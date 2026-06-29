import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import { getProduct } from "@/data/products";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/shop/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    const title = p ? `${p.title}, Motiondude Shop` : "Product, Motiondude Shop";
    const desc = p?.subtitle ?? "Product";
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
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;
  return (
    <>
      <Section divider={false} size="md">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.18em] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> BACK TO SHOP
        </Link>
      </Section>
      <Section size="md">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div
              className="h-full w-full"
              style={{
                background: `radial-gradient(ellipse at 40% 30%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 65%)`,
              }}
            />
          </div>
          <div>
            <Eyebrow>{product.label}</Eyebrow>
            <h1 className="mt-4 text-balance text-3xl font-medium tracking-[-0.02em] md:text-4xl">{product.title}</h1>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">{product.subtitle}</p>
            <div className="mt-8 text-2xl font-medium">{product.price}</div>
            <p className="mt-8 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">{product.description}</p>

            <div className="mt-10">
              <div className="eyebrow">What's included</div>
              <ul className="mt-4 space-y-2 text-sm">
                {product.includes.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-foreground/70" />
                    <span className="text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={product.buyUrl}
              className="mt-10 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Buy, {product.price}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}