export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  format: string;
  runtime: string;
  production: string;
  purpose: string;
  cta: string;
  intro: string;
  strategy: { heading: string; body: string; tags: string[] };
  storyboard: { caption: string }[];
  credits: { name: string; role: string }[];
}

export const projects: Project[] = [
  {
    slug: "northwind-brand-film",
    title: "Northwind",
    subtitle: "A brand film for a next-generation logistics company",
    year: "2025",
    description: "Cinematic brand film for a logistics rebrand.",
    format: "Brand Film",
    runtime: "01:42",
    production: "In-house",
    purpose: "Brand Launch",
    cta: "Watch the film",
    intro:
      "Northwind needed a film that felt like a quiet promise — calm, exacting, inevitable. We built a piece around stillness and intention, letting the product breathe.",
    strategy: {
      heading: "Strategy",
      body: "The team wanted to land a new market position without raising its voice. We leaned into restraint: long takes, measured pacing and one continuous color story.",
      tags: ["Brand Voice", "Cinematic Pacing", "Single Color Story"],
    },
    storyboard: [
      { caption: "Opening — wide, still, golden hour" },
      { caption: "Detail — hands at work" },
      { caption: "Transit — sweeping pan over harbor" },
      { caption: "Hero — product centered, calm" },
      { caption: "Close — quiet logo lock-up" },
      { caption: "Tag — single line of copy" },
    ],
    credits: [
      { name: "Motiondude", role: "Director / Editor" },
      { name: "L. Ferrari", role: "DP" },
      { name: "A. Okafor", role: "Sound Design" },
      { name: "M. Bauer", role: "Color" },
    ],
  },
  {
    slug: "lumen-commercial",
    title: "Lumen",
    subtitle: "Launch commercial for a hardware startup",
    year: "2024",
    description: "30-second hero spot for a new connected lamp.",
    format: "Commercial",
    runtime: "00:30",
    production: "Agency",
    purpose: "Product Launch",
    cta: "View the spot",
    intro:
      "A small object asked for a small film. We designed Lumen's launch around one continuous gesture — a hand reaching for warmth.",
    strategy: {
      heading: "Strategy",
      body: "One product, one room, one feeling. The spot was built to live equally well as a 30, 15 and 6 — all cut from one master.",
      tags: ["Modular Edit", "Practical Light", "Product-First"],
    },
    storyboard: [
      { caption: "Black frame — single warm point" },
      { caption: "Reveal — lamp in context" },
      { caption: "Interaction — gentle tap" },
      { caption: "Reaction — room blooms" },
      { caption: "End card — product + tagline" },
      { caption: "Logo — calm sign-off" },
    ],
    credits: [
      { name: "Motiondude", role: "Director" },
      { name: "S. Kowalski", role: "DP" },
      { name: "Atelier Sound", role: "Score" },
      { name: "Pixel & Co", role: "Post" },
    ],
  },
  {
    slug: "atlas-motion-system",
    title: "Atlas",
    subtitle: "A motion system for a software company",
    year: "2024",
    description: "Reusable motion language for product, web and social.",
    format: "Motion System",
    runtime: "Ongoing",
    production: "In-house",
    purpose: "Design System",
    cta: "Read the case study",
    intro:
      "Atlas needed motion that could scale across product surfaces without becoming noise. We built a small library of curves, durations and primitives.",
    strategy: {
      heading: "Strategy",
      body: "Three easing curves, four durations, and a handful of primitives. Every motion in the product traces back to a token, the same way color does.",
      tags: ["Design Tokens", "Motion Primitives", "Cross-surface"],
    },
    storyboard: [
      { caption: "Token map — curves and durations" },
      { caption: "Primitive — enter / exit" },
      { caption: "Primitive — transform pair" },
      { caption: "In-product — list reorder" },
      { caption: "On-web — section reveal" },
      { caption: "On-social — loop primitive" },
    ],
    credits: [
      { name: "Motiondude", role: "Motion Lead" },
      { name: "Atlas Design", role: "Product Design" },
      { name: "R. Imani", role: "Engineering" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);