import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/site/Grid";
import { ArrowRight, CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_9ck99sf",
  TEMPLATE_ID: "template_4vbztfc",
  PUBLIC_KEY: "9bGP8MzDiD46xuquV",
};

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

const goalOptions = [
  "Visualize a new feature launch",
  "High-converting brand ad",
  "Landing page explainer",
  "Product demo / Tutorial series",
  "Long-term Collaboration",
];

const stateOptions = [
  "We have a finished script/storyboard",
  "We have a rough idea \u2192 need creative direction",
  "We are starting from scratch",
];

const investmentOptions = [
  "$500 - $700",
  "$700 - $1,000",
  "$1,000 - $1,500",
  "$1,500 - $2,000",
  "$2,000+",
];

function InquiryPage() {
  const [data, setData] = useState<Fields>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => setData((d) => ({ ...d, [k]: v }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !data.name.trim() ||
      !data.phone.trim() ||
      !data.company.trim() ||
      !data.website.trim() ||
      !data.goal ||
      !data.state ||
      !data.investment ||
      !data.deadline ||
      !data.notes.trim() ||
      !data.email.trim()
    ) {
      setError("Please fill in the required fields.");
      return;
    }
    if (!data.agree) {
      setError("Please agree to the privacy policy.");
      return;
    }
    setError(null);
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          company: data.company,
          website: data.website,
          primary_goal: data.goal,
          production_state: data.state,
          investment: data.investment,
          deadline: data.deadline,
          details: data.notes,
          email: data.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setSubmitted(true);
      setData(initial);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
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
          Share your vision below. I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        {submitted ? (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 text-center md:p-14">
            <CheckCircle2 className="mx-auto h-10 w-10 text-foreground/80" />
            <h2 className="mt-5 text-2xl font-medium tracking-[-0.01em]">Thanks, your inquiry has been sent.</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              I will get back to you within 3 work days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Your Name" required value={data.name} onChange={(v) => set("name", v)} placeholder="Your Name" />
              <Field label="Your Phone Number" required value={data.phone} onChange={(v) => set("phone", v)} placeholder="Phone" type="tel" />
              <Field label="Company Name" required value={data.company} onChange={(v) => set("company", v)} placeholder="Company Name" />
              <Field label="Company Website" required value={data.website} onChange={(v) => set("website", v)} placeholder="https://yourbrand.com" type="url" />
              <SelectField
                label="What is your primary goal?"
                required
                value={data.goal}
                onChange={(v) => set("goal", v)}
                placeholder="e.g. Product Explainer"
                options={goalOptions}
              />
              <SelectField
                label="Current production state?"
                required
                value={data.state}
                onChange={(v) => set("state", v)}
                placeholder="Do you have a script/storyboard?"
                options={stateOptions}
              />
              <SelectField
                label="Estimated Investment"
                required
                value={data.investment}
                onChange={(v) => set("investment", v)}
                placeholder="Select budget range"
                options={investmentOptions}
              />
              <DateField
                label="Desired Deadline"
                required
                value={data.deadline}
                onChange={(v) => set("deadline", v)}
                placeholder="Select preferred date"
              />
              <div className="md:col-span-2">
                <FieldLabel>Please provide more details about your animation project *</FieldLabel>
                <textarea
                  value={data.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Design inspirations, short description of the project etc."
                  rows={5}
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <Field label="Work Email" required value={data.email} onChange={(v) => set("email", v)} placeholder="Work Email" type="email" />
              </div>
            </div>

            <label className="mt-8 flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={data.agree}
                onChange={(e) => set("agree", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--color-border)] bg-[var(--color-surface)] accent-foreground"
              />
              <span>I agree to the processing of my data in accordance with the Privacy Policy & Imprint</span>
            </label>

            <p className="mt-3 text-sm text-muted-foreground">
              → Also have a look at my previous work on{" "}
              <a
                href="https://www.instagram.com/motiondudehere/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:opacity-80"
              >
                Instagram
              </a>
            </p>

            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : (<>Check Availability <ArrowRight className="h-4 w-4" /></>)}
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

function DateField({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const selected = value ? new Date(value) : undefined;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <FieldLabel>
        {label}
        {required && " *"}
      </FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "mt-2 flex w-full items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-left text-sm focus:border-foreground/40 focus:outline-none",
              selected ? "text-foreground" : "text-muted-foreground/60"
            )}
          >
            <span>{selected ? format(selected, "MMM d, yyyy") : placeholder}</span>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-0 shadow-xl"
        >
          <Calendar
            mode="single"
            selected={selected}
            onSelect={(d) => {
              if (d) {
                onChange(format(d, "yyyy-MM-dd"));
                setOpen(false);
              }
            }}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
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

function SelectField({
  label,
  value,
  onChange,
  placeholder,
  required,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div>
      <FieldLabel>
        {label}
        {required && " *"}
      </FieldLabel>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-2 w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] bg-[length:16px_16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-10 text-sm text-foreground focus:border-foreground/40 focus:outline-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}