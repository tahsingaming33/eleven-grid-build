export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  label: string;
  description: string;
  includes: string[];
  buyUrl: string;
}

export const products: Product[] = [
  {
    slug: "stillness-luts",
    title: "Stillness LUT Pack",
    subtitle: "House color in a single download",
    price: "$49",
    label: "Color",
    description:
      "Three cinematic LUTs distilled from the films we've made over the last five years. Calm, warm and quietly opinionated.",
    includes: [
      "3 LUTs (.cube)",
      "Resolve project file with example grades",
      "Reference stills and notes",
      "Free updates",
    ],
    buyUrl: "#",
  },
  {
    slug: "motion-primitives",
    title: "Motion Primitives",
    subtitle: "After Effects starter for product motion",
    price: "$89",
    label: "Templates",
    description:
      "A small library of enter, exit and transform primitives built on a single easing system. The same kit we ship to product teams.",
    includes: [
      "After Effects project (.aep)",
      "Token map — curves and durations",
      "Lottie exports",
      "Documentation",
    ],
    buyUrl: "#",
  },
  {
    slug: "studio-templates",
    title: "Studio Templates",
    subtitle: "Project, brief and handoff documents",
    price: "$29",
    label: "Process",
    description:
      "Every document we use to run a studio of one, refined over a hundred client projects. Use them as-is or adapt to your practice.",
    includes: [
      "Project brief (Notion + PDF)",
      "Treatment template",
      "Client handoff one-pager",
      "Invoice template",
    ],
    buyUrl: "#",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);