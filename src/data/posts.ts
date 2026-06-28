export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  toc: { id: string; label: string }[];
}

export const posts: Post[] = [
  {
    slug: "designing-for-stillness",
    title: "Designing for Stillness",
    category: "Craft",
    date: "May 14, 2026",
    readTime: "6 min read",
    excerpt:
      "Why the most expensive thing a film can do is stop moving — and how restraint pays back in attention.",
    toc: [
      { id: "the-cost", label: "The cost of motion" },
      { id: "the-frame", label: "Letting the frame breathe" },
      { id: "in-practice", label: "In practice" },
    ],
    body: [
      "Motion costs attention. Every cut, every push-in, every animated element asks the viewer for a tiny payment. The cheaper your motion is to make, the more freely we spend it — and the more we end up paying.",
      "Stillness is the opposite. A held shot says: I'm confident enough not to rush you. It's the cinematic equivalent of whitespace.",
      "Three things we ask of every shot before adding motion: does it earn the cut, does it earn the move, and does the viewer get a moment to feel anything?",
    ],
  },
  {
    slug: "a-quiet-color-pipeline",
    title: "A Quiet Color Pipeline",
    category: "Process",
    date: "April 2, 2026",
    readTime: "8 min read",
    excerpt:
      "Notes from building a color pipeline that produces calm, consistent work across every deliverable.",
    toc: [
      { id: "calibration", label: "Calibration" },
      { id: "luts", label: "House LUTs" },
      { id: "review", label: "Review loop" },
    ],
    body: [
      "A reliable color pipeline starts before the camera turns on. We calibrate every monitor in the room weekly and keep a single reference image taped to the wall.",
      "House LUTs do the heavy lifting. Three of them, named for the films they came from, cover 80% of the work. The rest is taste.",
      "The review loop matters more than the tools. One screen, one viewer, one set of eyes — decisions, not opinions.",
    ],
  },
  {
    slug: "small-tools-big-leverage",
    title: "Small Tools, Big Leverage",
    category: "Studio",
    date: "March 11, 2026",
    readTime: "5 min read",
    excerpt:
      "The handful of scripts and templates that quietly run our studio — and why we don't share most of them.",
    toc: [
      { id: "templates", label: "Project templates" },
      { id: "render", label: "Render farm" },
      { id: "handoff", label: "Client handoff" },
    ],
    body: [
      "Every project starts from the same template. Same folder structure, same naming, same review board. It feels rigid for a week and frees you for a year.",
      "The render farm is two old workstations and a shared drive. It's enough. Most studios our size don't need more.",
      "Client handoff is a single page: the master file, a short note, and a calm thank-you. We have never had a client ask for more.",
    ],
  },
  {
    slug: "writing-for-motion",
    title: "Writing for Motion",
    category: "Craft",
    date: "February 20, 2026",
    readTime: "4 min read",
    excerpt:
      "A short brief about long sentences — and the unreasonable importance of the words underneath the picture.",
    toc: [
      { id: "rhythm", label: "Rhythm first" },
      { id: "verbs", label: "Verbs, not adjectives" },
    ],
    body: [
      "The script is the timeline. If a line is hard to read out loud, it will be hard to cut to.",
      "We rewrite to verbs. Adjectives describe the picture; verbs carry it.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);