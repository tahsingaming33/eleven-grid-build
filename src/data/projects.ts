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
  credits: { name: string; role: string; href?: string }[];
  /** Vimeo numeric id — when present, an embedded player is rendered in the hero. */
  vimeoId?: string;
  /** Absolute thumbnail URL — used for Work-grid card image. */
  thumbnail?: string;
  /** Optional Process section (3 cards on the case study page). */
  process?: { heading: string; items: string[] }[];
  /** Optional Collaboration block. */
  collaboration?: { body: string; ctaLabel: string; ctaHref: string };
}

export const projects: Project[] = [
  {
    slug: "lovable-concept-ad",
    title: "Lovable — Concept Ad",
    subtitle: "A self-initiated motion concept built around one real story — making my first website with AI.",
    year: "2025",
    description: "A self-initiated motion concept built around one real story — making my first website with AI.",
    format: "Motion Video",
    runtime: "60 Seconds",
    production: "5 Days",
    purpose: "Self-Initiated / Concept",
    cta: "tahsin@motiondude.online",
    vimeoId: "1197933363",
    thumbnail: "/__l5e/assets-v1/949bd922-a0c2-4a95-952e-dd17885fee76/lovable-thumb.png",
    intro:
      "What if the process of building something could become the story itself? This video is that experiment.",
    strategy: {
      heading: "Strategy",
      body: "This was never a client project. It started as a personal question — what would a real Lovable ad look like if a motion designer made it? The concept was simple and honest: I built my first ever website using Lovable, an AI-powered web builder. The whole experience — the prompts, the iterations, the surprises — felt like a story worth telling. So I turned it into a 60-second explainer video. No client brief. No approval process. Just a real experience, motion-designed into a concept ad. The goal was to show what Lovable can do by showing exactly what I did with it. The video is genuine, fast-paced, and built around a single relatable insight — anyone can build a website now, if they know how to talk to AI.",
      tags: ["Real story, not fiction", "Concept before client", "Motion as proof"],
    },
    storyboard: [
      { caption: "Frame 01" },
      { caption: "Frame 02" },
      { caption: "Frame 03" },
      { caption: "Frame 04" },
      { caption: "Frame 05" },
      { caption: "Frame 06" },
      { caption: "Frame 07" },
      { caption: "Frame 08" },
      { caption: "Frame 09" },
      { caption: "Frame 10" },
    ],
    credits: [
      { name: "Tahsin Mahmud", role: "Creative Direction", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Tahsin Mahmud", role: "Motion Design", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Tahsin Mahmud", role: "Script and Storyboard", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Self-Initiated", role: "Concept Project" },
    ],
  },
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
  {
    slug: "maagnus",
    title: "Maagnus — SaaS Explainer Video",
    subtitle: "Turning complex Shopify data into a clear, compelling product story.",
    year: "2025",
    description: "Turning complex Shopify data into a clear, compelling product story.",
    format: "Motion Video",
    runtime: "35 Seconds",
    production: "7 Days",
    purpose: "Product Launch / Awareness",
    cta: "tahsin@motiondude.online",
    vimeoId: "1158834812",
    thumbnail:
      "https://i.vimeocdn.com/video/2113002199-81a27d78824318513c72347c6944e814a83d8a367b8c6cf1e0c871e9d042cc8d-d_1280x720?region=us",
    intro:
      "Maagnus needed more than a feature walkthrough — it needed a story. One that made Shopify merchants feel the problem before they understood the solution.",
    strategy: {
      heading: "Strategy",
      body: "Maagnus is a Shopify analytics app that helps store owners collect customer data, track buyer personas, and optimize ads and newsletters for more sales. The challenge was explaining a data-heavy product without overwhelming the viewer. The strategy was to lead with the pain point — merchants who know their numbers but not their customers — then show Maagnus as the bridge. No technical deep-dives. Just clarity, trust, and a strong call to action.",
      tags: ["Lead with the problem", "Simplicity over features", "Data made human"],
    },
    storyboard: [
      { caption: "Frame 01" },
      { caption: "Frame 02" },
      { caption: "Frame 03" },
      { caption: "Frame 04" },
      { caption: "Frame 05" },
      { caption: "Frame 06" },
      { caption: "Frame 07" },
      { caption: "Frame 08" },
      { caption: "Frame 09" },
      { caption: "Frame 10" },
    ],
    process: [
      {
        heading: "Visual System",
        items: ["Clean SaaS UI aesthetic", "Minimal color palette", "Data visualization as hero element"],
      },
      {
        heading: "Animation",
        items: ["Smooth UI transitions", "Data-driven motion timing", "Screen recording compositing"],
      },
      {
        heading: "Constraints",
        items: ["No live actor footage", "Product UI only", "60-second hard cap"],
      },
    ],
    collaboration: {
      body: "This project was a solo production. Script, storyboard, motion design, and final delivery were all handled end-to-end by Tahsin Mahmud. The client provided product demo recordings and brand guidelines.",
      ctaLabel: "Watch Final Video",
      ctaHref: "https://vimeo.com/1158834812",
    },
    credits: [
      { name: "Tahsin Mahmud", role: "Creative Direction", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Tahsin Mahmud", role: "Motion Design", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Tahsin Mahmud", role: "Storyboard", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Maagnus / GMM Solutions SNC", role: "Script (Client Provided)" },
      { name: "Maagnus / GMM Solutions SNC", role: "Client" },
      { name: "Visionary", role: "Studio" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);