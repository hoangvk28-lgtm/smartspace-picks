export const guideSlug = "best-paper-based-digital-notebooks";
export const guideTitle = "5 Best Paper-Based Digital Notebooks in 2026";
export const metaTitle = "Best Paper-Based Digital Notebooks (2026)";
export const metaDescription =
  "5 real-paper capture notebooks from the Rocketbook lineup, kept separate from E Ink tablets, since these use actual paper and a scan-to-app workflow rather than a digital screen.";
export const mainKeyword = "digital notebook real paper";
export const introParagraphs = [
  "\"Paper-based digital notebook\" is a genuinely different product category from the E Ink tablets in our feel-like-paper guide: these use real paper pages, and the \"digital\" part comes from scanning the page into an app, not from a screen. Every current result for this search is a Rocketbook.",
  "We separated this from reusable notebooks and small notebooks by focusing specifically on the capture accuracy and page compatibility of the scan-to-app step, since that's the part unique to real-paper products.",
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
    id: "b07zhz82dk-paperbaseddn",
    rank: 1,
    badge: "Best Overall",
    name: "Rocketbook Fusion Reusable Undated Productivity Planner, Letter Size",
    price: "$34.99",
    rating: "4.6",
    reviews: "26,593",
    imageUrl: "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHZ82DK?tag=deskfinds0d-20",
    description: "Real paper pages captured through the Rocketbook app, with the highest review count and rating of any product we found for this search. The undated planner templates work alongside blank capture pages.",
    specs: ["Letter size, real paper pages", "Scan-to-app capture via Rocketbook app", "26,593 reviews at 4.6 stars"],
    pros: ["Largest review base and highest rating in this category", "Combines planner templates with free-write capture pages"],
    cons: ["Requires the Rocketbook app and a FriXion pen to work as intended", "Full letter size, not compact"],
    bestFor: "Buyers who want the most proven real-paper capture notebook available.",
  },
  {
    id: "b07zhyz32m-paperbaseddn",
    rank: 2,
    badge: "Best Compact Option",
    name: "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8",
    price: "$29.99",
    rating: "4.4",
    reviews: "23,751",
    imageUrl: "https://m.media-amazon.com/images/I/41VG6OVaZCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHYZ32M?tag=deskfinds0d-20",
    description: "Same real-paper capture concept in the smaller Executive size, with a nearly-as-large review base as the letter-size version above.",
    specs: ["6 x 8.8 in", "Scan-to-app capture via Rocketbook app", "23,751 reviews at 4.4 stars"],
    pros: ["Massive proven review base for a smaller-format option", "More portable than the letter-size Fusion"],
    cons: ["Smaller page means less capture area before you need to erase"],
    bestFor: "Buyers who want the proven capture technology in a more portable size.",
  },
  {
    id: "b07czf628c-paperbaseddn",
    rank: 3,
    badge: "Best Budget Pick",
    name: "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook",
    price: "$14.99",
    rating: "4.4",
    reviews: "11,065",
    imageUrl: "https://m.media-amazon.com/images/I/41E9SFRPDeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CZF628C?tag=deskfinds0d-20",
    description: "The cheapest real-paper capture notebook we tracked, still backed by over 11,000 reviews, in a mini spiral format for quick capture rather than planning.",
    specs: ["Mini spiral-bound", "Scan-to-app capture via Rocketbook app", "11,065 reviews at 4.4 stars"],
    pros: ["Lowest price of any product in this comparison", "Very large, well-established review base"],
    cons: ["Small page limits how much can be captured per page", "No planner templates, plain pages only"],
    bestFor: "Buyers who want low-cost, proven real-paper capture without planner features.",
  },
  {
    id: "b0dp3jmp14-paperbaseddn",
    rank: 4,
    badge: "Best Full-Size Plain Pages",
    name: "Rocketbook Core Reusable Smart Notebook, Letter Size 8.5x11",
    price: "$26.99",
    rating: "4.5",
    reviews: "100",
    imageUrl: "https://m.media-amazon.com/images/I/41RhAqe3azL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JMP14?tag=deskfinds0d-20",
    description: "Plain dot-grid, full letter-size paper pages for real-paper capture without the Fusion's built-in planner templates.",
    specs: ["8.5 x 11 in", "Plain dot-grid pages", "Scan-to-app capture via Rocketbook app"],
    pros: ["Full-size writing area", "No pre-built templates if you want a blank canvas"],
    cons: ["Much smaller review count than the Fusion line at time of writing"],
    bestFor: "Buyers who want full-size real-paper capture without planner structure.",
  },
  {
    id: "b0clppzzjl-paperbaseddn",
    rank: 5,
    badge: "Best Upgraded Template Set",
    name: "Rocketbook Fusion Plus Reusable Notebook Planner, Executive 6x8.8",
    price: "$31.99",
    rating: "4.4",
    reviews: "3,200",
    imageUrl: "https://m.media-amazon.com/images/I/416XcHl7ssL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLPPZZJL?tag=deskfinds0d-20",
    description: "The newer template revision of the Fusion line at Executive size, with real-paper capture and updated page layouts.",
    specs: ["6 x 8.8 in", "Fusion Plus template revision", "3,200 reviews at 4.4 stars"],
    pros: ["Newest template set in the lineup", "Same proven capture technology as the rest of the Fusion line"],
    cons: ["Smaller review base than the standard Fusion at the same size", "Costs more than the standard Fusion Hybrid"],
    bestFor: "Buyers who want the newest template layout on real paper.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Real paper as the writing surface", description: "We only included products where the actual pages are physical paper, captured via a scanning app, rather than E Ink tablets that merely visually resemble paper." },
  { title: "Capture reliability via review volume", description: "Since the app-based scan step is where real-paper capture can fail (missed pages, poor OCR), we weighted review count heavily as the best available evidence." },
  { title: "Plain pages vs. planner templates", description: "We noted which products are Fusion (built-in planner templates) versus Core (plain dot-grid), since that changes what kind of capture workflow each is suited for." },
  { title: "Price against proven track record", description: "We flagged where a newer, more expensive template revision (Fusion Plus) has a smaller review base than the cheaper, older standard Fusion." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "This Is a Real-Paper Category, Not E Ink",
    intro: "If you actually want a device with an electronic display rather than a paper page you photograph, see our digital notebooks that feel like paper guide instead — that's a different product category entirely.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm you want real paper you photograph, not a screen", explanation: "Every product here is real paper captured via an app. If you wanted a device with a digital display, check our feel-like-paper E Ink guide instead." },
  { criterion: "Use review count as capture-reliability evidence", explanation: "The scan/OCR step is the part most likely to have quirks. A large, well-established review base is the best signal that capture works reliably." },
  { criterion: "Decide between planner templates and plain pages", explanation: "Fusion and Fusion Plus include built-in planner templates; Core is plain dot-grid pages only." },
  { criterion: "Confirm you have the right pen", explanation: "These require Pilot FriXion pens to erase and reuse correctly." },
  { criterion: "Match size to your actual capture habit", explanation: "Larger pages capture more per page but are less portable; mini sizes are cheaper and more portable but fill up faster." },
];

export const faq: FaqItem[] = [
  { q: "Is this different from your \"feels like paper\" guide?", a: "Yes. That guide covers E Ink tablets with a screen. This one covers real paper pages captured with a scanning app, which is a genuinely different product category." },
  { q: "How reliable is the scan-to-app capture?", a: "We used review count as the best evidence available, since that's where quirks in this workflow would surface. The Fusion line has the largest, most established review base." },
  { q: "Do I need a special pen?", a: "Yes, Pilot FriXion pens are required for the pages to erase correctly." },
  { q: "What's the cheapest option here?", a: "The Rocketbook Mini Spiral Notebook at $14.99, backed by over 11,000 reviews." },
  { q: "Can I get planner templates with real-paper capture?", a: "Yes, the Fusion and Fusion Plus lines include built-in planner and calendar templates alongside capture pages." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-that-feel-like-paper", title: "Best Digital Notebooks That Feel Like Paper (2026)" },
  { href: "/guide/best-reusable-digital-notebooks", title: "Best Reusable Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
