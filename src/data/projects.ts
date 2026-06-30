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
  storyboard: { caption: string; image?: string }[];
  credits: { name: string; role: string; href?: string }[];
  /** Vimeo numeric id. When present, an embedded player is rendered in the hero. */
  vimeoId?: string;
  /** Absolute thumbnail URL used for the Work-grid card image. */
  thumbnail?: string;
  /** Optional Process section (3 cards on the case study page). */
  process?: { heading: string; items: string[] }[];
  /** Optional Collaboration block. */
  collaboration?: { body: string; ctaLabel: string; ctaHref: string };
  /** Placeholder card. Not clickable, no case study. */
  comingSoon?: boolean;
  /** Optional YouTube reels grid (rendered in place of the hero video). */
  reels?: {
    number: string;
    videoTitle: string;
    channel: string;
    keyword: string;
    searchQuery: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "maagnus",
    title: "Maagnus SaaS Explainer Video",
    subtitle: "Turning complex Shopify data into a clear, compelling product story.",
    year: "2025",
    description:
      "Turning complex Shopify data into a clear, compelling product story. A focused explainer made for Shopify store owners.",
    format: "Motion Video",
    runtime: "35 Seconds",
    production: "7 Days",
    purpose: "Product Launch / Awareness",
    cta: "tahsin@motiondude.online",
    vimeoId: "1158834812",
    thumbnail:
      "https://i.vimeocdn.com/video/2113002199-81a27d78824318513c72347c6944e814a83d8a367b8c6cf1e0c871e9d042cc8d-d_1280x720?region=us",
    intro:
      "Maagnus needed more than a feature walkthrough. It needed a story. One that made Shopify merchants feel the problem before they understood the solution.",
    strategy: {
      heading: "Strategy",
      body: "Maagnus is a Shopify analytics app that helps store owners collect customer data, track buyer personas, and optimize ads and newsletters for more sales. The challenge was explaining a data-heavy product without overwhelming the viewer. The strategy was to lead with the pain point. Merchants who know their numbers but not their customers, then show Maagnus as the bridge. No technical deep-dives. Just clarity, trust, and a strong call to action.",
      tags: ["Lead with the problem", "Simplicity over features", "Data made human"],
    },
    storyboard: [
      { caption: "Logo Reveal", image: maagnus01.url },
      { caption: "Installed", image: maagnus02.url },
      { caption: "Discount Flow", image: maagnus03.url },
      { caption: "Storefront Popup", image: maagnus04.url },
      { caption: "Dashboard", image: maagnus05.url },
      { caption: "Over 20 Data Points", image: maagnus06.url },
      { caption: "Featured on Uneed", image: maagnus07.url },
      { caption: "Install Now", image: maagnus08.url },
      { caption: "You Could Finally See", image: maagnus09.url },
      { caption: "Cart Conversion", image: maagnus10.url },
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
  {
    slug: "lovable-concept-ad",
    title: "Lovable Concept Ad",
    subtitle: "A self-initiated motion concept built around one real story. Making my first website with AI.",
    year: "2025",
    description: "A self-initiated motion concept built around one real story. Making my first website with AI.",
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
      body: "This was never a client project. It started as a personal question. What would a real Lovable ad look like if a motion designer made it? The concept was simple and honest: I built my first ever website using Lovable, an AI-powered web builder. The whole experience, the prompts, the iterations, the surprises, felt like a story worth telling. So I turned it into a 60-second explainer video. No client brief. No approval process. Just a real experience, motion-designed into a concept ad. The goal was to show what Lovable can do by showing exactly what I did with it. The video is genuine, fast-paced, and built around a single relatable insight. Anyone can build a website now, if they know how to talk to AI.",
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
    slug: "elite-crypto-creator-series",
    title: "Elite Crypto Creator Series",
    subtitle: "A creator-led content series for a crypto education brand.",
    year: "2025",
    description: "A creator-led content series for a crypto education brand.",
    format: "Creator Series",
    runtime: "Ongoing",
    production: "In-house",
    purpose: "Audience Growth",
    cta: "tahsin@motiondude.online",
    thumbnail: "/__l5e/assets-v1/389c849e-ad2c-4767-bf8b-85e24baf4610/elite-crypto-thumb.png",
    intro:
      "A recurring motion series built to make complex crypto concepts feel calm and approachable.",
    strategy: {
      heading: "Strategy",
      body: "The series leans on a single visual system: muted palette, restrained typography, and motion that earns its cuts. The goal is recall, not noise.",
      tags: ["Series System", "Restrained Motion", "Education First"],
    },
    storyboard: [],
    reels: [
      {
        number: "01",
        videoTitle: "Elite Crypto Video 16",
        channel: "Motion Dude",
        keyword: "wiring.",
        searchQuery: "Elite Crypto Video 16 Motion Dude",
      },
      {
        number: "02",
        videoTitle: "Elite Crypto Video 15",
        channel: "Motion Dude",
        keyword: "refineries",
        searchQuery: "Elite Crypto Video 15 Motion Dude",
      },
      {
        number: "03",
        videoTitle: "Elite Crypto Video 13",
        channel: "Motion Dude",
        keyword: "Buy gold for 17 months straight to record highs.",
        searchQuery: "Elite Crypto Video 13 Motion Dude",
      },
      {
        number: "04",
        videoTitle: "Elite Crypto Video 9",
        channel: "Motion Dude",
        keyword: "havens.",
        searchQuery: "Elite Crypto Video 9 Motion Dude",
      },
      {
        number: "05",
        videoTitle: "Elite Crypto Video 17",
        channel: "Motion Dude",
        keyword: "Cook on Beijing",
        searchQuery: "Elite Crypto Video 17 Motion Dude",
      },
    ],
    credits: [
      { name: "Tahsin Mahmud", role: "Creative Direction", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Tahsin Mahmud", role: "Motion Design", href: "https://www.instagram.com/motiondudehere/" },
      { name: "Elites Crypto", role: "Client" },
    ],
  },
  {
    slug: "gumroad-project",
    title: "Gumroad Project",
    subtitle: "Coming soon.",
    year: "2026",
    description: "Coming soon.",
    format: "Motion Video",
    runtime: "TBD",
    production: "TBD",
    purpose: "TBD",
    cta: "",
    intro: "Coming soon.",
    strategy: { heading: "Strategy", body: "Coming soon.", tags: [] },
    storyboard: [],
    credits: [],
    comingSoon: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);