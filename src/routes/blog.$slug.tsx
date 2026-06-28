import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Grid";
import { getPost, posts } from "@/data/posts";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const p = getPost(params.slug);
    const title = p ? `${p.title} — Motiondude` : "Article — Motiondude";
    const desc = p?.excerpt ?? "Article";
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
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData();
  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Section divider={false} size="md">
      <nav className="flex items-center gap-2 text-xs text-muted-foreground font-mono tracking-[0.16em] uppercase">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/blog" className="hover:text-foreground">Blog</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{post.category}</span>
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-[200px_minmax(0,1fr)_240px]">
        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <Eyebrow>On this page</Eyebrow>
            <ul className="mt-4 space-y-2 text-sm">
              {post.toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-muted-foreground hover:text-foreground">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article body */}
        <article className="min-w-0">
          <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
            {post.category}
          </span>
          <h1 className="mt-6 text-balance text-3xl font-medium tracking-[-0.02em] md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <figure className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div
              className="h-full w-full opacity-80"
              style={{
                background: `radial-gradient(ellipse at 40% 30%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 65%)`,
              }}
            />
          </figure>
          <div className="prose-y mt-10 space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
            {post.body.map((p, i) => {
              const id = post.toc[i]?.id;
              return (
                <p key={i} id={id}>
                  {p}
                </p>
              );
            })}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-10">
            <div>
              <Eyebrow>Recent posts</Eyebrow>
              <ul className="mt-4 space-y-4 text-sm">
                {recent.map((r) => (
                  <li key={r.slug}>
                    <Link to="/blog/$slug" params={{ slug: r.slug }} className="block">
                      <div className="font-medium text-foreground">{r.title}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{r.date}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
              <div className="eyebrow">Service</div>
              <h3 className="mt-3 text-base font-medium">Working on a brand film?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bring me in early. The treatment is the cheapest part of the process.
              </p>
              <a
                href="mailto:hello@motiondude.com"
                className="mt-5 inline-flex h-9 items-center rounded-full bg-foreground px-4 text-xs font-medium text-background"
              >
                Start a project
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}