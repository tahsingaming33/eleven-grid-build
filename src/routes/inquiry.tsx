import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/site/Grid";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Inquiry · Motiondude" },
      { name: "description", content: "Start your project. Share your vision and I'll get back within 2 business days." },
      { property: "og:title", content: "Inquiry · Motiondude" },
      { property: "og:description", content: "Start your project with Motiondude." },
    ],
  }),
  component: InquiryPage,
});

type Fields = {
  name: string;
  phone: string;
  company: string;
  website: string;
  goal: string;
  state: string;
  investment: string;
  deadline: string;
  notes: string;
  email: string;
  agree: boolean;
};

const initial: Fields = {
  name: "",
  phone: "",
  company: "",
  website: "",
  goal: "",
  state: "",
  investment: "",
  deadline: "",
  notes: "",
  email: "",
  agree: false,
};

function InquiryPage() {
  const [data, setData] = useState<Fields>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => setData((d) => ({ ...d, [k]: v }));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!data.name.trim() || !data.company.trim() || !data.email.trim()) {
      setError("Please fill in the required fields.");
      return;
    }
    if (!data.agree) {
      setError("Please agree to the privacy policy.");
      return;
    }
    setError(null);
    // Persist locally for now; email integration to come later.
    try {
      const all = JSON.parse(localStorage.getItem("md_inquiries") || "[]");
      all.push({ ...data, at: new Date().toISOString() });
      localStorage.setItem("md_inquiries", JSON.stringify(all));
    } catch {
      /* noop */
    }
    setSubmitted(true);
  }

  return (
    <Section divider={false} size="lg">
      <div className="mx-auto max-w-3xl text-center">
        <div className="eyebrow">Inquiry</div>
        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
          <span className="text-foreground">Start your </span>
          <span className="text-foreground/35">project.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Share your vision below. I'll get back to you within 2 business days.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        {submitted ? (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 text-center md:p-14">
            <CheckCircle2 className="mx-auto h-10 w-10 text-foreground/80" />
            <h2 className="mt-5 text-2xl font-medium tracking-[-0.01em]">Thanks, {data.name.split(" ")[0] || "friend"}.</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Your inquiry has been received. I'll get back to you at {data.email} within 2 business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" required value={data.name} onChange={(v) => set("name", v)} placeholder="Your full name" />
              <Field label="Phone" value={data.phone} onChange={(v) => set("phone", v)} placeholder="+880…" type="tel" />
              <Field label="Company / Brand" required value={data.company} onChange={(v) => set("company", v)} placeholder={'ex. "OpenAI"'} />
              <Field label="Website" value={data.website} onChange={(v) => set("website", v)} placeholder="https://" type="url" />
              <Field label="Primary Goal" value={data.goal} onChange={(v) => set("goal", v)} placeholder="Brand film, explainer, identity…" />
              <Field label="Production State" value={data.state} onChange={(v) => set("state", v)} placeholder="Concept / Script / Storyboard ready" />
              <Field label="Investment" value={data.investment} onChange={(v) => set("investment", v)} placeholder="$5k to $25k+" />
              <Field label="Deadline" value={data.deadline} onChange={(v) => set("deadline", v)} placeholder="ex. Q3 2026" />
              <div className="md:col-span-2">
                <FieldLabel>Anything else I should know?</FieldLabel>
                <textarea
                  value={data.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Project context, references, links…"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <Field label="Work Email" required value={data.email} onChange={(v) => set("email", v)} placeholder="you@company.com" type="email" />
              </div>
            </div>

            <label className="mt-8 flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={data.agree}
                onChange={(e) => set("agree", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--color-border)] bg-[var(--color-surface)] accent-foreground"
              />
              <span>I agree to the privacy policy and how my information will be used.</span>
            </label>

            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Check Availability <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow text-[10px]">{children}</div>;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <FieldLabel>
        {label}
        {required && " *"}
      </FieldLabel>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none"
      />
    </div>
  );
}