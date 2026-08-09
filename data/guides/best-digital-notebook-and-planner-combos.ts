export const guideSlug = "best-digital-notebook-and-planner-combos";
export const guideTitle = "5 Best Digital Notebook and Planner Combos in 2026";
export const metaTitle = "Best Digital Notebook and Planner Combos (2026)";
export const metaDescription =
  "5 reusable notebooks that combine handwriting pages with built-in planner templates, from the Rocketbook Fusion line, which is the actual product match for this search.";
export const mainKeyword = "digital notebook and planner";
export const introParagraphs = [
  "This overlaps with our digital notebooks with calendars guide, since the same Rocketbook Fusion lineup is the real product match for both searches. The distinction we're drawing here is a true notebook-planner combo: handwriting note pages plus dated or undated planning pages in the same reusable notebook, not just a calendar grid.",
  "We excluded plain Core-line notebooks entirely from this list, since they don't include any planning structure — those belong in our plain reusable notebooks guide instead.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07zhz82dk-plannercombo",
    rank: 1,
    badge: "Best Overall",
    name: "Rocketbook Fusion Reusable Undated Productivity Planner, Letter Size",
    price: "$34.99",
    rating: "4.6",
    reviews: "26,593",
    imageUrl: "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHZ82DK?tag=deskfinds0d-20",
    description: "Combines free dot-grid note pages with undated planning templates in the same reusable notebook, backed by the largest and highest-rated review base of any product in this comparison.",
    specs: ["Letter size", "Mix of note pages and undated planning templates", "26,593 reviews at 4.6 stars"],
    pros: ["Most proven product in this entire category", "Genuinely combines free-write pages and planning structure"],
    cons: ["Full letter size, not compact"],
    bestFor: "Buyers who want the most proven notebook-planner combo available.",
  },
  {
    id: "b07zhyz32m-plannercombo",
    rank: 2,
    badge: "Best Compact Combo",
    name: "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8",
    price: "$29.99",
    rating: "4.4",
    reviews: "23,751",
    imageUrl: "https://m.media-amazon.com/images/I/41VG6OVaZCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHYZ32M?tag=deskfinds0d-20",
    description: "Same note-page-plus-planner-template combo in a smaller, bag-friendly footprint, with nearly the same scale of review evidence.",
    specs: ["6 x 8.8 in", "Mix of note pages and planning templates", "23,751 reviews at 4.4 stars"],
    pros: ["Massive proven review base for a compact combo notebook", "More portable than the letter-size Fusion"],
    cons: ["Smaller page reduces room per planning template"],
    bestFor: "Buyers who want the same combo concept in a more portable size.",
  },
  {
    id: "b0clppzzjl-plannercombo",
    rank: 3,
    badge: "Newest Template Set",
    name: "Rocketbook Fusion Plus Reusable Notebook Planner, Executive 6x8.8",
    price: "$31.99",
    rating: "4.4",
    reviews: "3,200",
    imageUrl: "https://m.media-amazon.com/images/I/416XcHl7ssL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLPPZZJL?tag=deskfinds0d-20",
    description: "An updated combo of note pages and planning templates at the same Executive size, with a smaller review base since it's the newer revision.",
    specs: ["6 x 8.8 in", "Updated note-and-planner template mix", "3,200 reviews at 4.4 stars"],
    pros: ["Newest template revision"],
    cons: ["Meaningfully smaller review base than the standard Fusion Hybrid"],
    bestFor: "Buyers who want the newest template layout in the combo format.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine note-plus-planner mix required", description: "We only included products with both free-write note pages and structured planning templates in the same notebook, not plain notebooks or calendar-only products." },
  { title: "Overlap disclosure", description: "We flagged the substantial product overlap with our digital notebooks with calendars guide, since both draw from the same Rocketbook Fusion lineup." },
  { title: "Review volume as reliability evidence", description: "We weighted the very large review bases of the standard Fusion products as strong evidence the combo format holds up over time." },
  { title: "Size against portability", description: "We compared letter-size against the more compact Executive size for how much room each gives the planning templates." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "This Overlaps With Our Calendar-Focused Guide",
    note: "If a printed calendar grid specifically is what you're after, our digital notebooks with calendars guide covers the same products from that angle. This page focuses on the combined note-plus-planner format specifically.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Require both free-write pages and planning templates", explanation: "A genuine combo notebook needs both, not just a calendar grid or just blank pages. Only the Fusion line qualifies here." },
  { criterion: "Check overlap with our calendar-focused guide before buying twice", explanation: "The same core products serve both searches — no need to treat them as separate purchases." },
  { criterion: "Use review count as your reliability signal", explanation: "The standard Fusion products' large review bases are the strongest evidence available that the combo format holds up long-term." },
  { criterion: "Match size to how much planning room you need", explanation: "Letter size gives more room per template; Executive size trades some of that room for portability." },
  { criterion: "Confirm you have the right pen", explanation: "These require Pilot FriXion pens to erase correctly." },
];

export const faq: FaqItem[] = [
  { q: "What makes this different from your digital notebooks with calendars guide?", a: "The product pool overlaps substantially, but this guide requires both free-write note pages and planning templates together, not just a calendar grid." },
  { q: "Which is the most proven combo notebook?", a: "The letter-size Rocketbook Fusion, with 26,593 reviews at 4.6 stars." },
  { q: "Do I need a special pen?", a: "Yes, Pilot FriXion pens, required for the pages to erase and reuse correctly." },
  { q: "Is there a more compact combo option?", a: "Yes, the Rocketbook Fusion Hybrid at Executive size (6x8.8 in), with nearly the same scale of proven reviews as the letter-size version." },
  { q: "Should I get the newer Fusion Plus instead?", a: "It has an updated template set but a much smaller review base at time of writing. Worth checking current buyer feedback before choosing it over the more established standard Fusion." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-with-calendars", title: "Best Digital Notebooks with Calendars (2026)" },
  { href: "/guide/best-reusable-digital-notebooks", title: "Best Reusable Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
