export const guideSlug = "best-digital-notebook-pads";
export const guideTitle = "5 Best Digital Notebook Pads in 2026";
export const metaTitle = "Best Digital Notebook Pads (2026)";
export const metaDescription =
  "5 Rocketbook reusable-paper pads compared directly, since that's the actual product family this exact search resolves to rather than E Ink tablets or graphics pads.";
export const mainKeyword = "digital notebook pad";
export const introParagraphs = [
  "\"Digital notebook pad\" is a broad phrase that could mean an E Ink tablet, a graphics drawing pad, or a reusable paper notepad. We checked which products actually surface for this exact search, and it's consistently the Rocketbook reusable-paper lineup.",
  "If you were picturing a device with an actual screen, see our digital notebooks that feel like paper guide instead — that covers the E Ink tablet category, a genuinely different product type from what's ranked here.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07zhz82dk-padsdn",
    rank: 1,
    badge: "Best Overall",
    name: "Rocketbook Fusion Reusable Undated Productivity Planner, Letter Size",
    price: "$34.99",
    rating: "4.6",
    reviews: "26,593",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHZ82DK?tag=deskfinds0d-20",
    description: "The highest-rated and most-reviewed pad in this comparison by a wide margin, combining note pages with planner templates.",
    specs: ["Letter size", "Planner templates plus note pages", "26,593 reviews at 4.6 stars"],
    pros: ["Largest, highest-rated review base of any pad here"],
    cons: ["Full letter size, not compact"],
    bestFor: "Buyers who want the single most proven reusable pad available.",
  },
  {
    id: "b0dw9jz1mf-padsdn",
    rank: 2,
    badge: "Smallest Pad Format",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5",
    price: "$17.99",
    rating: "4.4",
    reviews: "281",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DW9JZ1MF?tag=deskfinds0d-20",
    description: "A genuine notepad-format product, the smallest in the entire search, fitting a coat pocket without a folio.",
    specs: ["3.5 x 5.5 in", "Notepad format", "281 reviews at 4.4 stars"],
    pros: ["Smallest, most pocket-friendly format here", "Cheapest option in this comparison"],
    cons: ["Small page limits notes per page before erasing"],
    bestFor: "Buyers who want the most compact reusable pad.",
  },
  {
    id: "b0dp3jmp14-padsdn",
    rank: 3,
    badge: "Best Plain Pages",
    name: "Rocketbook Core Reusable Smart Notebook, Letter Size 8.5x11",
    price: "$26.99",
    rating: "4.5",
    reviews: "100",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JMP14?tag=deskfinds0d-20",
    description: "Full letter-size dot-grid pages without built-in planning templates, for buyers who want a blank writing surface.",
    specs: ["8.5 x 11 in", "Plain dot-grid pages"],
    pros: ["Full writing area", "No pre-built templates if you prefer blank pages"],
    cons: ["Much smaller review count than the Fusion line at time of writing"],
    bestFor: "Buyers who want a blank reusable pad without planner structure.",
  },
  {
    id: "b07czf628c-padsdn",
    rank: 4,
    badge: "Most Field-Tested Small Pad",
    name: "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook",
    price: "$14.99",
    rating: "4.4",
    reviews: "11,065",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CZF628C?tag=deskfinds0d-20",
    description: "The cheapest option here with a very large proven review base, spiral-bound for lying flat while writing.",
    specs: ["Mini spiral-bound", "11,065 reviews at 4.4 stars"],
    pros: ["Cheapest option here", "Massive proven review base"],
    cons: ["Small format limits per-page writing area"],
    bestFor: "Buyers who want the most field-tested budget pad.",
  },
  {
    id: "b0clppzzjl-padsdn",
    rank: 5,
    badge: "Newest Template Revision",
    name: "Rocketbook Fusion Plus Reusable Notebook Planner, Executive 6x8.8",
    price: "$31.99",
    rating: "4.4",
    reviews: "3,200",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLPPZZJL?tag=deskfinds0d-20",
    description: "An updated version of the planning templates at a compact Executive size, with a smaller review base as the newer revision.",
    specs: ["6 x 8.8 in", "Updated template set", "3,200 reviews at 4.4 stars"],
    pros: ["Newest template revision available"],
    cons: ["Smaller review base than the standard Fusion Hybrid at the same size"],
    bestFor: "Buyers who want the newest template layout in a compact pad.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified the real product match before ranking", description: "We checked what products actually surface for this search rather than assuming it means E Ink hardware." },
  { title: "Page format and size differences", description: "We compared plain dot-grid pages against planner-template pages, and letter size against the more compact formats." },
  { title: "Review volume as reliability evidence", description: "Since the erase mechanism is shared across this product family, we weighted established review history heavily." },
  { title: "Price relative to format", description: "We compared cost against page count, size, and whether planning templates are included." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Looking for an E Ink Device Instead?",
    note: "If you wanted a device with an actual screen, see our digital notebooks that feel like paper guide — that's a genuinely different product category from the reusable-paper pads listed here.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm you want real paper, not a screen", explanation: "Every current result for this search is a Rocketbook reusable-paper product. For E Ink hardware, see our feel-like-paper guide instead." },
  { criterion: "Decide between plain pages and planner templates", explanation: "Fusion and Fusion Plus include built-in planning templates; Core is plain dot-grid pages only." },
  { criterion: "Match size to your actual use", explanation: "Mini fits a coat pocket; Executive fits a bag; letter size gives the most writing room." },
  { criterion: "Use review count as reliability evidence", explanation: "A large, established review base is the strongest signal a specific pad's erase mechanism holds up over time." },
  { criterion: "Confirm you have the right pen", explanation: "These require Pilot FriXion pens to erase correctly." },
];

export const faq: FaqItem[] = [
  { q: "Is a digital notebook pad an E Ink device?", a: "Based on current search results, no — it's consistently a Rocketbook reusable-paper product. For an E Ink screen device, see our feel-like-paper guide." },
  { q: "What's the smallest pad option?", a: "The Rocketbook Mini at 3.5x5.5 inches, which fits a coat pocket." },
  { q: "Which is the most proven overall?", a: "The letter-size Rocketbook Fusion, with 26,593 reviews at 4.6 stars." },
  { q: "Do I need a special pen?", a: "Yes, Pilot FriXion pens are required for these to erase correctly." },
  { q: "What's the cheapest option?", a: "The Rocketbook Mini Spiral Notebook at $14.99, backed by over 11,000 reviews." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
  { href: "/guide/best-small-digital-notebooks", title: "Best Small Digital Notebooks (2026)" },
  { href: "/guide/best-reusable-digital-notebooks", title: "Best Reusable Digital Notebooks (2026)" },
];
