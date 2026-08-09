export const guideSlug = "best-tourbillon-desk-clocks";
export const guideTitle = "5 Best Tourbillon Desk Clocks in 2026";
export const metaTitle = "Best Tourbillon Desk Clocks (2026)";
export const metaDescription =
  "5 tourbillon-mechanism desk clocks, including genuine 3D wooden and 3D-printed escapement puzzle builds, distinguished from decorative-only rotating clocks.";
export const mainKeyword = "tourbillon desk clock";
export const introParagraphs = [
  "This search resolves mostly to build-it-yourself mechanical puzzle clocks with a genuine rotating escapement structure, from UGEARS wooden kits to 3D-printed model builds, rather than luxury table-clock tourbillons.",
  "We distinguished these hobbyist mechanical builds from premium mantel and anniversary clocks that also showed up in this research, since they're genuinely different products at very different price points and purposes.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41PeCofUgxL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b09lgtwhkf-tourbillonclock",
    rank: 1,
    badge: "Best Overall",
    name: "UGEARS Astronomer Table Clock with Tourbillon - 3D Wooden Puzzles for Adults",
    price: "$103.99",
    rating: "4.1",
    reviews: "1,329",
    imageUrl: "https://m.media-amazon.com/images/I/41PeCofUgxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LGTWHKF?tag=deskfinds0d-20",
    description: "A genuine build-it-yourself 3D wooden puzzle clock with an actual tourbillon rotating escapement mechanism, by far the largest review base in this comparison for its category.",
    specs: ["3D wooden puzzle build", "Genuine tourbillon rotating escapement", "1,329 reviews at 4.1 stars"],
    pros: ["Largest, most proven review base in this comparison", "Genuine mechanical tourbillon mechanism, not decorative"],
    cons: ["Requires assembly, not a ready-made display piece"],
    bestFor: "Buyers who want a genuine build-it-yourself mechanical tourbillon experience.",
  },
  {
    id: "b0ds26j419-tourbillonclock",
    rank: 2,
    badge: "Best 3D-Printed Escapement Model",
    name: "MagicTech 3D Printing Making Tourbillon Imitation Movement Model Escapement",
    price: "$65.99",
    rating: "4.0",
    reviews: "3",
    imageUrl: "https://m.media-amazon.com/images/I/516EanREgQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DS26J419?tag=deskfinds0d-20",
    description: "Being direct about the labeling here: this is described as an imitation movement model, so verify current listing language on mechanism authenticity before assuming genuine escapement function.",
    specs: ["3D-printed build", "Described as imitation movement model", "3 reviews at 4.0 stars"],
    pros: ["Lower price than the UGEARS wooden puzzle"],
    cons: ["Labeled as \"imitation\" movement — verify actual mechanism function on the current listing", "Very small review base"],
    bestFor: "Budget-focused hobbyists who verify the mechanism function directly before buying.",
  },
  {
    id: "b0bx9fkdcc-tourbillonclock",
    rank: 3,
    badge: "Best Budget Entry Point",
    name: "MagicTech 3D Printing Making Tourbillon Escapement Structure Clock Imitation",
    price: "$31.99",
    rating: "4.4",
    reviews: "15",
    imageUrl: "https://m.media-amazon.com/images/I/41WBbpK+7sL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BX9FKDCC?tag=deskfinds0d-20",
    description: "The cheapest entry point in this comparison, also labeled as an imitation structure — verify mechanism authenticity on the current listing before purchase.",
    specs: ["3D-printed build", "Described as imitation escapement structure", "15 reviews at 4.4 stars"],
    pros: ["Cheapest option in this comparison", "Solid rating despite the small review sample"],
    cons: ["Labeled as \"imitation\" structure — verify actual mechanism function on current listing"],
    bestFor: "Budget hobbyists who want the lowest-cost entry into this build category.",
  },
  {
    id: "b09q7pz9qv-tourbillonclock",
    rank: 4,
    badge: "Best Ready-Made Rotating Design",
    name: "Bulova B8821 Heather Anniversary Clock, 9\" Glass Dome, Rotating Crystal",
    price: "$97.95",
    rating: "4.2",
    reviews: "257",
    imageUrl: "https://m.media-amazon.com/images/I/41ookx2nhgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09Q7PZ9QV?tag=deskfinds0d-20",
    description: "Not a tourbillon mechanism specifically, but a genuine rotating crystal display under glass, a ready-made alternative for buyers who want visible rotating motion without assembly.",
    specs: ["9 inch glass dome", "Rotating crystal, not a tourbillon escapement", "257 reviews at 4.2 stars"],
    pros: ["No assembly required, unlike the puzzle-build options", "Solid, established review base"],
    cons: ["Not a genuine tourbillon mechanism — a rotating anniversary-clock display instead"],
    bestFor: "Buyers who want rotating visual interest without building a puzzle mechanism, understanding it's not a true tourbillon.",
  },
  {
    id: "b000bunklu-tourbillonclock",
    rank: 5,
    badge: "Most Premium Ready-Made Option",
    name: "Bulova B7520 Largo Clock, Dark Mahogany Finish",
    price: "$175.99",
    rating: "4.0",
    reviews: "57",
    imageUrl: "https://m.media-amazon.com/images/I/41HYB7M0qKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B000BUNKLU?tag=deskfinds0d-20",
    description: "The most premium ready-made piece here, though again not a genuine tourbillon mechanism — included as a high-end statement-piece alternative to the mechanical puzzle builds.",
    specs: ["Dark mahogany finish", "Premium mantel clock, no tourbillon mechanism"],
    pros: ["Most substantial, premium ready-made piece in this comparison"],
    cons: ["Not a genuine tourbillon mechanism at all — a standard premium mantel clock"],
    bestFor: "Buyers who want a premium statement piece and don't need an actual tourbillon mechanism.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Authenticated the mechanism claim per listing", description: "We checked each listing's own description for \"tourbillon,\" \"imitation,\" or \"rotating\" language rather than assuming every rotating clock qualifies as a genuine tourbillon." },
  { title: "Separated build-it-yourself puzzles from ready-made clocks", description: "UGEARS and MagicTech are hobbyist assembly kits; the Bulova options are ready-made display pieces without a genuine tourbillon mechanism at all." },
  { title: "Flagged \"imitation\" labeling directly", description: "Several MagicTech listings use \"imitation\" in their own product names — we disclosed this rather than implying genuine escapement function." },
  { title: "Review volume as evidence within each category", description: "We weighted established review history, noting the UGEARS pick's much larger review base within the assembly-kit category." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Genuine Tourbillon Build vs. Ready-Made Rotating Display",
    cards: [
      { label: "Genuine mechanism (UGEARS, MagicTech)", text: "Build-it-yourself puzzles with a real rotating escapement, though some listings use \"imitation\" language — verify current claims." },
      { label: "Ready-made, not a true tourbillon (Bulova)", text: "No assembly required, but the rotation is a decorative crystal display, not a genuine escapement mechanism." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify \"tourbillon\" vs. \"imitation\" language on the current listing", explanation: "Some MagicTech products explicitly use \"imitation\" in their own naming — check the current listing to understand exactly what mechanism you're getting." },
  { criterion: "Decide between a build-it-yourself experience and a ready-made piece", explanation: "UGEARS and MagicTech require assembly; the Bulova options are ready-made but don't have a genuine tourbillon mechanism." },
  { criterion: "Weigh review volume heavily for the small-sample MagicTech listings", explanation: "Some MagicTech options have very small review samples (3-15 reviews) — read current feedback carefully given the limited data." },
  { criterion: "Consider the UGEARS pick for the most proven genuine mechanism", explanation: "It has by far the largest review base of any confirmed tourbillon-mechanism product in this comparison." },
  { criterion: "Understand ready-made \"rotating\" clocks aren't true tourbillons", explanation: "The Bulova options offer genuine rotating motion but not an actual escapement mechanism — a real distinction worth understanding before buying." },
];

export const faq: FaqItem[] = [
  { q: "Which has the most genuine, proven tourbillon mechanism?", a: "The UGEARS Astronomer Table Clock, a build-it-yourself 3D wooden puzzle with a real rotating escapement and by far the largest review base in this comparison." },
  { q: "Are the MagicTech options genuine tourbillons?", a: "Some are explicitly labeled \"imitation\" in their own product names — verify the current listing language before assuming genuine escapement function." },
  { q: "Do I need to assemble these myself?", a: "The UGEARS and MagicTech options require assembly. The Bulova options are ready-made but don't have a genuine tourbillon mechanism at all." },
  { q: "Is the Bulova B8821 a real tourbillon?", a: "No — it has a rotating crystal display under glass, which looks similar but isn't a genuine escapement mechanism." },
  { q: "What's the cheapest option?", a: "The MagicTech 3D Printing Escapement Structure Clock at $31.99, though it's labeled \"imitation\" — verify the current listing." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-pendulum-desk-clocks", title: "Best Pendulum Desk Clocks (2026)" },
  { href: "/guide/best-brass-desk-clocks", title: "Best Brass Desk Clocks (2026)" },
  { href: "/guide/best-desk-clocks", title: "Best Desk Clocks (2026)" },
];
