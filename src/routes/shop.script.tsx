import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Grid";
import beforeVideo from "@/assets/script/before.mp4.asset.json";
import afterVideo from "@/assets/script/after.mp4.asset.json";

export const Route = createFileRoute("/shop/script")({
  head: () => ({
    meta: [
      { title: "Script Name, Motiondude" },
      {
        name: "description",
        content:
          "A custom After Effects script that speeds up your motion design workflow.",
      },
    ],
  }),
  component: ScriptPage,
});

function ScriptPage() {
  return (
    <Section divider={false} size="md">
      <div className="mx-auto w-full max-w-[860px]">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <header className="mt-12">
          <Eyebrow>AE Script</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-medium tracking-[-0.02em] md:text-6xl">
            Script Name
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            A custom After Effects script that speeds up your motion design workflow.
          </p>
        </header>

        <div className="mt-24">
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-[1.7]">
            This is a short introduction to the script. Describe what it is, the
            problem it solves, and the kind of motion designer it is built for.
            Replace this placeholder text with the real story behind the tool.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-[1.7]">
            Continue with a second paragraph that goes a little deeper into how
            the script fits into a daily workflow and why it is worth keeping in
            your panel.
          </p>
        </div>

        <section className="mt-28">
          <h2 className="text-3xl font-medium tracking-[-0.01em] md:text-4xl">
            Before and After
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            See the difference the script makes in a real timeline.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <BeforeAfterScreen
              label="Before"
              src={beforeVideo.url}
            />
            <BeforeAfterScreen
              label="After"
              src={afterVideo.url}
            />
          </div>
        </section>

        <section className="mt-28">
          <h2 className="text-3xl font-medium tracking-[-0.01em] md:text-4xl">
            How To Use It
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            A short walkthrough of the script in action.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://drive.google.com/file/d/19fqSROvbCYX-9VNKrktQLPE5xVMf3AM9/preview"
                allow="autoplay"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                title="Tutorial Video"
              />
            </div>
          </div>
        </section>

        <section className="mt-28 mb-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 text-center md:p-14">
          <h2 className="text-3xl font-medium tracking-[-0.01em] md:text-4xl">
            Get the script
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Add it to your panel and start using it on your next project.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get Script
          </a>
        </section>
      </div>
    </Section>
  );
}

function BeforeAfterScreen({ label, src }: { label: string; src: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="relative w-full bg-black" style={{ aspectRatio: "1600 / 1080" }}>
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-contain"
          aria-label={`${label} video`}
        />
      </div>
      <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}