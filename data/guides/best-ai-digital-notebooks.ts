export const guideSlug = "best-ai-digital-notebooks";
export const guideTitle = "5 Best AI Digital Notebooks in 2026";
export const metaTitle = "Best AI Digital Notebooks (2026)";
export const metaDescription =
  "5 dedicated E Ink notebook devices with real AI note features, excluding software-only note apps and generic voice recorders that also show up for this search.";
export const mainKeyword = "AI digital notebook";
export const introParagraphs = [
  "We limited this to dedicated notebook hardware — devices actually built for writing and reading — rather than including AI note apps or voice recorders that also surface for this search but aren't standalone notebooks.",
  "AI features across these devices mean different things: handwriting-to-text conversion, PDF/document summarization, or AI-assisted organization. We noted which each device actually offers rather than assuming \"AI\" means the same feature set across the board.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0cz9vfqp-aidn",
    rank: 1,
    badge: "Best Overall",
    name: "Amazon Kindle Scribe (16GB)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=deskfinds0d-20",
    description: "Kindle Scribe includes handwriting-to-text tools and note summarization features tied to Amazon's ecosystem, on top of full e-reader functionality. Verify the current listing for exactly which AI features are active on your firmware version, since Amazon rolls these out in stages.",
    specs: ["16GB storage", "Handwriting-to-text and note summary tools", "Full Kindle e-reader ecosystem"],
    pros: ["Combines AI note tools with a complete e-book library", "Competitively priced against similar E Ink notebooks"],
    cons: ["AI feature rollout varies by region and firmware — verify current availability", "Tied to Amazon's ecosystem"],
    bestFor: "Buyers who want AI note tools bundled with e-reader functionality.",
  },
  {
    id: "b0fc1vjjfp-aidn",
    rank: 2,
    badge: "Best Color AI Notebook",
    name: "Amazon Kindle Scribe Colorsoft 64GB",
    price: "$679.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=deskfinds0d-20",
    description: "The newest, highest-capacity Kindle Scribe model with a color E Ink display and the same AI note tooling as the base Scribe, at a substantially higher price for the color upgrade and larger 64GB storage.",
    specs: ["64GB storage", "Color E Ink display", "Same AI note/summary tooling as base Kindle Scribe"],
    pros: ["Color display for notes and PDFs", "Larger storage than the base model"],
    cons: ["Nearly double the price of the base Kindle Scribe for the color and storage upgrade"],
    bestFor: "Buyers who want AI note tools and are willing to pay for color and extra storage.",
  },
  {
    id: "b0gvkbljk2-aidn",
    rank: 3,
    badge: "Most Distraction-Free",
    name: "reMarkable Paper Pure with Marker",
    price: "$399.00",
    rating: "4.1",
    reviews: "18",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GVKBLJK2?tag=deskfinds0d-20",
    description: "reMarkable's AI features (handwriting conversion, some summarization) are largely gated behind the paid Connect subscription rather than being free out of the box — a real cost difference from the Kindle Scribe worth knowing before buying.",
    specs: ["Marker stylus included", "Handwriting conversion available", "Advanced AI features require reMarkable Connect subscription"],
    pros: ["Purpose-built, distraction-free device", "No app-store clutter around the AI features"],
    cons: ["Core AI features are subscription-gated, unlike the Kindle Scribe's included tools", "Smaller review base than more established models"],
    bestFor: "Buyers who want a focused writing device and don't mind paying a subscription for AI features.",
  },
  {
    id: "b08hdl3xjr-aidn",
    rank: 4,
    badge: "Most Proven Track Record",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "The most-reviewed device in this comparison, with the same subscription-gated AI feature structure as the Paper Pure above but a much larger base of real-world testing.",
    specs: ["Marker Plus stylus included", "Handwriting conversion available", "Advanced AI features require reMarkable Connect subscription"],
    pros: ["Largest, highest-rated review base of any pick here", "Marker Plus stylus included at this price"],
    cons: ["Same subscription dependence for advanced AI features as other reMarkable models"],
    bestFor: "Buyers who want the most field-tested device even with the subscription caveat.",
  },
  {
    id: "b0fkt9pnfc-aidn",
    rank: 5,
    badge: "Most AI-Branded Feature Set",
    name: "Penstar eNote2 E-Ink Digital Notebook with Pen, 10.3\" AI Note-Taking",
    price: "$439.00",
    rating: "4.4",
    reviews: "118",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FKT9PNFC?tag=deskfinds0d-20",
    description: "This is explicitly marketed as an AI note-taking device, but has a much smaller review base than the Kindle Scribe or reMarkable options. Worth considering, but verify the specific AI claims against current buyer feedback before choosing it over the more established options above.",
    specs: ["10.3 inch E Ink display", "Pen included", "AI note-taking marketed as a core feature"],
    pros: ["AI note-taking is the device's stated core focus, not an add-on"],
    cons: ["Much smaller review base than the Kindle Scribe or reMarkable lineup", "Less established brand track record in this category"],
    bestFor: "Buyers who specifically want a device built around AI note-taking and are comfortable with a less established brand.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Dedicated hardware only", description: "We excluded software-only AI note apps and generic voice recorders, keeping this list to actual notebook devices with a display and stylus." },
  { title: "What \"AI\" specifically means per device", description: "We distinguished handwriting-to-text conversion from document summarization from AI-branded marketing, since these devices don't all offer the same feature set under the same label." },
  { title: "Subscription dependence", description: "We flagged where AI features require a paid subscription (reMarkable Connect) versus what's included in the purchase price (Kindle Scribe)." },
  { title: "Review volume against newer AI-branded entrants", description: "We weighted established review history against devices that market AI heavily but have far less real-world feedback to verify the claims." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Check Whether AI Features Cost Extra",
    cards: [
      { label: "Kindle Scribe (base and Colorsoft)", text: "AI note tools included in the ecosystem, no separate subscription required for core features." },
      { label: "reMarkable Paper Pure / reMarkable 2", text: "Advanced AI features gated behind the paid reMarkable Connect subscription." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm it's dedicated hardware, not a software app", explanation: "This guide only includes devices with a physical screen and stylus, not AI note apps that run on a phone or generic voice recorders." },
  { criterion: "Check exactly which AI features are included", explanation: "\"AI\" covers handwriting conversion, summarization, and organization differently across brands. Verify what a specific model actually does before assuming feature parity." },
  { criterion: "Check whether AI features require a subscription", explanation: "reMarkable gates advanced AI tools behind a paid Connect plan; Kindle Scribe includes its AI note tools without a separate subscription." },
  { criterion: "Weigh review history against AI-branded newcomers", explanation: "Devices that market AI heavily but have a small review base (like the Penstar eNote2) are harder to verify — weigh that against more established options." },
  { criterion: "Confirm AI feature availability on your region/firmware", explanation: "Amazon has rolled out Kindle Scribe AI features in stages by region and firmware version — check the current listing rather than assuming full availability." },
];

export const faq: FaqItem[] = [
  { q: "Do I need a subscription for AI features?", a: "Depends on the brand. Kindle Scribe includes its AI note tools in the purchase price. reMarkable devices gate advanced AI features behind the paid Connect subscription." },
  { q: "What does \"AI\" actually mean on these devices?", a: "Typically handwriting-to-text conversion and note or document summarization. It varies by brand — check the specific feature list rather than assuming they all do the same thing." },
  { q: "Are AI voice recorders or note apps included here?", a: "No, this guide is limited to dedicated notebook hardware with a screen and stylus, not software-only tools." },
  { q: "Which has the most real-world AI feature testing?", a: "The reMarkable 2, with 1,354 reviews, though its AI features are subscription-gated. The Kindle Scribe includes AI tools without a subscription but has less independent review data at time of writing." },
  { q: "Is the Penstar eNote2 a safe choice for AI note-taking?", a: "It markets AI note-taking as a core feature, but has a much smaller review base than the Kindle Scribe or reMarkable lineup — worth researching current buyer feedback before choosing it over more established options." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-ai-note-taking-digital-notebooks", title: "Best AI Note-Taking Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-that-feel-like-paper", title: "Best Digital Notebooks That Feel Like Paper (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
