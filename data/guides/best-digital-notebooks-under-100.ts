export const guideSlug = "best-digital-notebooks-under-100";
export const guideTitle = "5 Best Digital Notebooks Under $100 in 2026";
export const metaTitle = "Best Digital Notebooks Under $100 (2026)";
export const metaDescription =
  "Honest category disclosure: under $100 you're choosing between Rocketbook reusable paper notebooks and basic LCD writing tablets, not a true E Ink smart notebook with cloud sync.";
export const mainKeyword = "digital notebook under 100";
export const introParagraphs = [
  "We need to set expectations clearly: nothing genuinely comparable to a reMarkable or Kindle Scribe exists under $100. What you actually get at this price is either a Rocketbook reusable-paper notebook (real paper, scan-and-erase workflow) or a basic LCD writing tablet (an erasable digital drawing pad with no note-saving or export function at all).",
  "We're ranking within that honest reality rather than implying any of these match the feature set of a $300+ E Ink tablet.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41XNHQEwuyL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dp3jf67q-under100dn",
    rank: 1,
    badge: "Best Overall Under $100",
    name: "Rocketbook Core Reusable Smart Notebook, Letter Size, Blue",
    price: "$26.99",
    rating: "4.5",
    reviews: "100",
    imageUrl: "https://m.media-amazon.com/images/I/41XNHQEwuyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JF67Q?tag=deskfinds0d-20",
    description: "Full letter-size real paper, scanned via app and erased with a damp cloth — genuine app-based capture at under $30, which is the best functional value in this price tier.",
    specs: ["8.5 x 11 in, real paper", "Scan-to-app capture, reusable via damp-cloth erase", "4.5 stars"],
    pros: ["Real note capture and export via app, unlike LCD tablets in this price range", "Full letter size at a very low price"],
    cons: ["Requires the Rocketbook app and a specific pen to work correctly", "Not a screen-based device"],
    bestFor: "Buyers who want genuine note capture and export well under $100.",
  },
  {
    id: "b0dp3hly4j-under100dn",
    rank: 2,
    badge: "Best Compact Real-Paper Option",
    name: "Rocketbook Core Reusable Smart Notebook, Executive Size 6x8.8",
    price: "$25.99",
    rating: "4.5",
    reviews: "226",
    imageUrl: "https://m.media-amazon.com/images/I/41BvyAlSv+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3HLY4J?tag=deskfinds0d-20",
    description: "Same real-paper capture and app export as the letter-size pick above, in a more portable Executive size, actually slightly cheaper.",
    specs: ["6 x 8.8 in, real paper", "Scan-to-app capture", "226 reviews at 4.5 stars"],
    pros: ["Slightly cheaper than the letter-size Core notebook", "More portable while keeping the same capture technology"],
    cons: ["Smaller writing area per page than the letter-size version"],
    bestFor: "Buyers who want the same value with more portability.",
  },
  {
    id: "b07czf628c-under100dn",
    rank: 3,
    badge: "Most Reviewed Budget Option",
    name: "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook",
    price: "$14.99",
    rating: "4.4",
    reviews: "11,065",
    imageUrl: "https://m.media-amazon.com/images/I/41E9SFRPDeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CZF628C?tag=deskfinds0d-20",
    description: "The cheapest genuine app-capture notebook in this comparison, backed by over 11,000 reviews, in a compact mini size for quick notes.",
    specs: ["Mini spiral-bound, real paper", "Scan-to-app capture", "11,065 reviews at 4.4 stars"],
    pros: ["Cheapest option with real app-based capture", "Massive proven review base"],
    cons: ["Small page limits how much can be written before scanning and erasing"],
    bestFor: "Buyers who want the lowest-cost proven notebook with genuine app capture.",
  },
  {
    id: "b0gcdrfjqg-under100dn",
    rank: 4,
    badge: "Best Actual Digital Screen Under $100",
    name: "XPPen Note Plus Digital Notebook with Pen, Syncs to Phone",
    price: "$69.98",
    rating: "4.4",
    reviews: "1,889",
    imageUrl: "https://m.media-amazon.com/images/I/31djMiO0-jL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GCDRFJQG?tag=deskfinds0d-20",
    description: "This is the closest thing to a true digital note-taking screen under $100, with an actual writing tablet that syncs to your phone via Bluetooth rather than the scan-based Rocketbook workflow. It's a genuinely different category from the Core E Ink tablets covered elsewhere in our guides, at a fraction of the price.",
    specs: ["Bluetooth writing tablet with pen", "Syncs notes to phone", "1,889 reviews at 4.4 stars"],
    pros: ["Real Bluetooth sync to phone, unlike the scan-based Rocketbook workflow", "Large, well-established review base"],
    cons: ["Not the same category or capability as a $300+ E Ink notebook — verify feature expectations before buying"],
    bestFor: "Buyers who specifically want live Bluetooth note sync rather than a scan-based paper workflow, under $100.",
  },
  {
    id: "b0bg2t9sgv-under100dn",
    rank: 5,
    badge: "Best Battery-Free Pen Option",
    name: "HUION Note 2-in-1 Digital Notebook Drawing Tablet",
    price: "$87.99",
    rating: "4.2",
    reviews: "671",
    imageUrl: "https://m.media-amazon.com/images/I/41PJ-F0w37L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BG2T9SGV?tag=deskfinds0d-20",
    description: "A dual-purpose digital notebook and drawing tablet with a battery-free pen, near the top of what's realistic under $100 for actual electronic writing hardware.",
    specs: ["Battery-free pen", "2-in-1 notebook and drawing tablet", "671 reviews at 4.2 stars"],
    pros: ["Battery-free pen means one less thing to charge or lose", "Doubles as a drawing tablet, not just a note-taker"],
    cons: ["Highest price in this comparison, right at the $100 ceiling", "Slightly lower rating than the other picks here"],
    bestFor: "Buyers who want combined note-taking and drawing tablet functionality near the top of this budget.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Honest category disclosure at this price point", description: "We stated directly that nothing under $100 matches a $300+ E Ink tablet's feature set, and separated real-paper capture products from actual digital-screen writing tablets." },
  { title: "Complete price under the $100 ceiling", description: "We verified each product's actual listed price stays under $100, rather than assuming a category fits without checking." },
  { title: "Genuine capture and export capability", description: "We distinguished products with real app-based capture or Bluetooth sync (Rocketbook, XPPen, HUION) from basic LCD drawing pads with no export function at all." },
  { title: "Review volume for confidence at a budget price point", description: "We weighted large, established review bases heavily, since budget electronics quality can vary more than premium products." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Real Paper vs. Actual Digital Screen Under $100",
    cards: [
      { label: "Rocketbook (real paper)", text: "You write on real paper, scan the page with an app, then erase it with a damp cloth. Cheapest and most proven option." },
      { label: "XPPen / HUION (electronic tablet)", text: "An actual writing surface that syncs notes to your phone via Bluetooth — closer to a true digital notebook, at a higher price within this budget." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Understand what \"digital\" means at this price tier", explanation: "Under $100, that's either real paper scanned via an app (Rocketbook) or a basic Bluetooth writing tablet (XPPen, HUION) — not a full E Ink smart notebook." },
  { criterion: "Decide between real-paper capture and an actual electronic screen", explanation: "Rocketbook products are cheaper and more proven; XPPen and HUION options give you a genuine digital writing surface with phone sync at a higher price within this budget." },
  { criterion: "Verify the current price stays under $100", explanation: "Prices can shift — confirm the current listing price before assuming a product still fits this budget." },
  { criterion: "Check for genuine export or sync capability", explanation: "Cheap LCD drawing pads with no save or export function exist at this price too — verify the product actually captures and exports notes before buying." },
  { criterion: "Weigh review volume for budget electronics confidence", explanation: "A large, established review base matters more at budget price points where build quality can vary." },
];

export const faq: FaqItem[] = [
  { q: "Can I get a real E Ink smart notebook under $100?", a: "No, not currently. Under $100 you're choosing between Rocketbook's real-paper reusable notebooks or basic electronic writing tablets, not a true E Ink device like the reMarkable or Kindle Scribe." },
  { q: "What's the closest thing to a real digital notebook under $100?", a: "The XPPen Note Plus at $69.98, which syncs notes to your phone via Bluetooth rather than requiring a paper scan." },
  { q: "What's the cheapest option with genuine note capture?", a: "The Rocketbook Mini Spiral Notebook at $14.99, backed by over 11,000 reviews." },
  { q: "Do these save notes automatically?", a: "Rocketbook products require you to scan each page with an app before erasing it. XPPen and HUION tablets sync to your phone via Bluetooth more directly." },
  { q: "Is there a real risk of buying something with no export function at all?", a: "Yes — some very cheap LCD writing pads have no save or export capability whatsoever. We verified every product in this list captures notes in some usable way before including it." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-under-200", title: "Best Digital Notebooks Under $200 (2026)" },
  { href: "/guide/best-reusable-digital-notebooks", title: "Best Reusable Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
