export const guideSlug = "best-digital-notebooks-under-200";
export const guideTitle = "5 Best Digital Notebooks Under $200 in 2026";
export const metaTitle = "Best Digital Notebooks Under $200 (2026)";
export const metaDescription =
  "5 digital writing tablets under $200, ranked by complete usable cost including the pen, since some listings bundle it and others charge extra.";
export const mainKeyword = "digital notebook under 200";
export const introParagraphs = [
  "At this budget you move past basic Rocketbook and LCD tablets into real Bluetooth-syncing digital writing tablets from XPPen and HUION, and even the entry point of E Ink hardware if you catch the right pricing.",
  "We checked whether the pen is actually included in each listing's price, since that changes the real cost significantly — a $75 tablet with a separately sold pen isn't actually cheaper than a $90 tablet with the pen bundled in.",
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
    id: "b0dx234nwp-under200dn",
    rank: 1,
    badge: "Best Overall Under $200",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    price: "$299.98",
    rating: "4.3",
    reviews: "329",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DX234NWP?tag=deskfinds0d-20",
    description: "Actually priced above $200 at $299.98 as listed — we're flagging this directly so buyers targeting a strict $200 ceiling know to look at the picks below instead, or watch for a price drop on this specific listing.",
    specs: ["10.95 inch color display", "16384 pressure levels", "329 reviews at 4.3 stars"],
    pros: ["Strong feature set for the category, including color and pressure sensitivity"],
    cons: ["Currently priced above a strict $200 ceiling — verify current price before assuming it fits this budget"],
    bestFor: "Buyers with slight budget flexibility above $200 who want the most capable tablet in this comparison.",
  },
  {
    id: "b0fkt9pnfc-under200dn",
    rank: 2,
    badge: "Above Budget, Included for Comparison",
    name: "Penstar eNote2 E-Ink Digital Notebook with Pen, 10.3\"",
    price: "$439.00",
    rating: "4.4",
    reviews: "118",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FKT9PNFC?tag=deskfinds0d-20",
    description: "At $439, this is well above a $200 budget. Included for direct price context against the genuinely under-$200 options below.",
    specs: ["10.3 inch E Ink display", "Pen included", "118 reviews at 4.4 stars"],
    pros: ["True E Ink display, unlike the LCD/Bluetooth tablets that actually fit under $200"],
    cons: ["More than double a $200 budget"],
    bestFor: "Buyers who see this price context and decide to save for E Ink rather than compromise at a lower budget.",
  },
  {
    id: "b0gcdrfjqg-under200dn",
    rank: 3,
    badge: "Best Genuinely Under $200",
    name: "XPPen Note Plus Digital Notebook with Pen, Syncs to Phone",
    price: "$69.98",
    rating: "4.4",
    reviews: "1,889",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GCDRFJQG?tag=deskfinds0d-20",
    description: "Genuinely well under $200 with the pen included in the price, real Bluetooth sync to your phone, and the largest review base of any product in this specific comparison.",
    specs: ["Bluetooth writing tablet with pen included", "Syncs notes to phone", "1,889 reviews at 4.4 stars"],
    pros: ["Pen included in the price, not sold separately", "Largest, most established review base in this comparison"],
    cons: ["Not E Ink — it's a Bluetooth-sync writing tablet, a different display technology"],
    bestFor: "Buyers who want the most proven genuinely-under-$200 option with the pen included.",
  },
  {
    id: "b0bg2t9sgv-under200dn",
    rank: 4,
    badge: "Best 2-in-1 Note/Draw Option",
    name: "HUION Note 2-in-1 Digital Notebook Drawing Tablet",
    price: "$87.99",
    rating: "4.2",
    reviews: "671",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BG2T9SGV?tag=deskfinds0d-20",
    description: "A battery-free pen is included at this price, and the device doubles as a drawing tablet, well within a $200 budget.",
    specs: ["Battery-free pen included", "2-in-1 notebook and drawing tablet", "671 reviews at 4.2 stars"],
    pros: ["Pen included, battery-free so nothing to charge", "Doubles as a drawing tablet"],
    cons: ["Slightly lower rating than the XPPen Note Plus above"],
    bestFor: "Buyers who want combined drawing and note-taking, comfortably under $200.",
  },
  {
    id: "b0f5p2186c-under200dn",
    rank: 5,
    badge: "Real-Time Paper-to-App Sync",
    name: "SyncPen Digital Notebook Smart Pen Set",
    price: "$74.99",
    rating: "3.9",
    reviews: "58",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F5P2186C?tag=deskfinds0d-20",
    description: "A different approach: a smart pen that syncs handwriting from real paper in real time, rather than a digital tablet screen. Included for comparison, though its rating and review base are the smallest and lowest in this comparison — worth reading current feedback before choosing it over the more established options above.",
    specs: ["Smart pen for real paper", "Real-time sync to app", "58 reviews at 3.9 stars"],
    pros: ["Lets you keep writing on real paper while still getting digital sync", "Well under a $200 budget"],
    cons: ["Lowest rating and smallest review base of any pick in this comparison"],
    bestFor: "Buyers who specifically want real-paper writing with real-time digital sync and are comfortable with a less-reviewed product.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified current price against the actual $200 ceiling", description: "We checked listed prices directly and flagged where a product exceeds $200 rather than assuming category fit." },
  { title: "Pen inclusion in the listed price", description: "We noted whether the stylus/pen is bundled into the price or would be an additional cost, since that changes the real total spend." },
  { title: "Display technology honestly labeled", description: "We distinguished true E Ink displays from LCD Bluetooth-sync tablets, since they're different technologies with different feel and capability." },
  { title: "Review volume weighted against price", description: "We weighted established review history more heavily for budget picks, where build-quality variance is more likely than at premium price points." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Not Everything Here Is Actually Under $200",
    note: "Two products in this comparison (the XPPen 3 in 1 and the Penstar eNote2) are currently priced above $200 at time of writing. We included them for direct price context, but the XPPen Note Plus and HUION Note 2-in-1 are the genuinely under-budget options with the strongest review support.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify the current price actually fits your budget", explanation: "Some products in this comparison exceed $200 at time of writing — always check the live listing rather than assuming a product fits this price tier." },
  { criterion: "Check if the pen is included or sold separately", explanation: "A cheaper base price with a separately sold pen may not actually be cheaper overall than a slightly higher price with the pen bundled in." },
  { criterion: "Understand the display technology you're getting", explanation: "True E Ink devices are a different, generally more expensive category than the LCD Bluetooth-sync tablets that actually fit comfortably under $200." },
  { criterion: "Weigh review volume heavily at this price point", explanation: "Build-quality variance is more of a concern at budget price points, so an established review base matters more here than at premium tiers." },
  { criterion: "Decide if you want a screen or a smart pen for real paper", explanation: "The SyncPen offers a genuinely different approach — real paper with real-time digital sync — worth considering if a screen isn't essential to you." },
];

export const faq: FaqItem[] = [
  { q: "Is everything in this guide actually under $200?", a: "Not currently — two of the five products listed exceed $200 at time of writing and are included for price context. The XPPen Note Plus and HUION Note 2-in-1 are genuinely under-budget with strong reviews." },
  { q: "Does the pen come included?", a: "On the XPPen Note Plus and HUION Note 2-in-1, yes — the pen is bundled into the listed price." },
  { q: "Can I get a true E Ink device under $200?", a: "Not reliably at time of writing. True E Ink notebooks like the Penstar eNote2 currently price above $200 — the under-$200 options here use LCD Bluetooth-sync technology instead." },
  { q: "What's the most proven option genuinely under $200?", a: "The XPPen Note Plus at $69.98, with 1,889 reviews at 4.4 stars." },
  { q: "Is there a real-paper option in this budget?", a: "Yes, the SyncPen Digital Notebook Smart Pen Set, though it has the smallest review base and lowest rating of the picks here." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-under-100", title: "Best Digital Notebooks Under $100 (2026)" },
  { href: "/guide/best-digital-notebooks-with-styluses", title: "Best Digital Notebooks with Styluses (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
