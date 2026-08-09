export const guideSlug = "best-digital-notebooks-with-paper";
export const guideTitle = "5 Best Digital Notebooks with Paper in 2026";
export const metaTitle = "Best Digital Notebooks with Paper (2026)";
export const metaDescription =
  "5 devices split between real-paper Rocketbook notebooks and E Ink tablets designed to visually resemble paper, so you can pick the category that actually matches what you want.";
export const mainKeyword = "digital notebook paper";
export const introParagraphs = [
  "This search mixes two genuinely different product types: Rocketbook notebooks that use real physical paper captured via an app, and E Ink tablets like the reMarkable that only visually and texturally resemble paper but have no actual paper page.",
  "We're covering both categories directly rather than picking one, since the search term itself is ambiguous — check which one actually matches what you're picturing before choosing a pick.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b08hdl3xjr-withpaperdn",
    rank: 1,
    badge: "Best E Ink \"Paper-Like\" Option",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "No real paper here — a textured E Ink screen and friction-tip stylus simulate the paper feel. Largest, highest-rated review base of any device in this comparison.",
    specs: ["Textured E Ink display, no real paper", "Marker Plus stylus included", "1,354 reviews at 4.4 stars"],
    pros: ["Most proven paper-feel E Ink device here", "No paper to buy, scan, or run out of"],
    cons: ["Not actual paper — verify this matches what you're looking for"],
    bestFor: "Buyers who want the paper-like feel without real paper.",
  },
  {
    id: "b07zhz82dk-withpaperdn",
    rank: 2,
    badge: "Best Real-Paper Option",
    name: "Rocketbook Fusion Reusable Undated Productivity Planner",
    price: "$34.99",
    rating: "4.6",
    reviews: "26,593",
    imageUrl: "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHZ82DK?tag=deskfinds0d-20",
    description: "Actual physical paper pages, scanned via app and erased with a damp cloth — the highest-rated, most-reviewed real-paper option in this entire comparison.",
    specs: ["Real paper pages", "Scan-to-app capture, reusable", "26,593 reviews at 4.6 stars"],
    pros: ["Genuinely real paper, unlike the E Ink options", "Most proven product across this whole comparison"],
    cons: ["Requires scanning each page before erasing, no live digital sync"],
    bestFor: "Buyers who specifically want real paper with digital capture, not a screen.",
  },
  {
    id: "b0gvkbljk2-withpaperdn",
    rank: 3,
    badge: "Most Distraction-Free E Ink Option",
    name: "reMarkable Paper Pure with Marker",
    price: "$399.00",
    rating: "4.1",
    reviews: "18",
    imageUrl: "https://m.media-amazon.com/images/I/31KAykcDD+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GVKBLJK2?tag=deskfinds0d-20",
    description: "Same paper-feel E Ink technology as the reMarkable 2 without real paper, in a distraction-free device, with a smaller review base as a newer entry.",
    specs: ["Textured E Ink display, no real paper", "Marker stylus included", "18 reviews at 4.1 stars"],
    pros: ["Distraction-free device, no app-store clutter"],
    cons: ["Much smaller review base than the reMarkable 2"],
    bestFor: "Buyers who want the newest paper-feel device without app distractions.",
  },
  {
    id: "b0dp3jmp14-withpaperdn",
    rank: 4,
    badge: "Cheapest Real-Paper Option",
    name: "Rocketbook Core Reusable Smart Notebook, Letter Size",
    price: "$26.99",
    rating: "4.5",
    reviews: "100",
    imageUrl: "https://m.media-amazon.com/images/I/41RhAqe3azL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JMP14?tag=deskfinds0d-20",
    description: "Real paper, plain dot-grid pages, at a fraction of the cost of the E Ink tablets in this comparison.",
    specs: ["Real paper pages", "Plain dot-grid layout", "8.5 x 11 in"],
    pros: ["Real paper at a much lower price than the E Ink options"],
    cons: ["No pre-built planning templates", "Smaller review count than the Fusion line"],
    bestFor: "Budget-focused buyers who want real paper with digital capture.",
  },
  {
    id: "b0dgbdr2pm-withpaperdn",
    rank: 5,
    badge: "Most Premium E Ink \"Paper-Like\" Option",
    name: "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    price: "$779.00",
    rating: "4.2",
    reviews: "540",
    imageUrl: "https://m.media-amazon.com/images/I/41yKUd9lhbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGBDR2PM?tag=deskfinds0d-20",
    description: "The flagship of the paper-feel E Ink lineup, with color display and bundled accessories, at nearly double the price of the base reMarkable 2.",
    specs: ["Color E Ink display, no real paper", "Marker Plus stylus and Basalt Book Folio included", "540 reviews at 4.2 stars"],
    pros: ["Bundles a folio and upgraded pen that are sold separately for other models"],
    cons: ["Significantly more expensive than the base reMarkable 2 for a color upgrade"],
    bestFor: "Buyers who want the top-tier paper-feel E Ink experience and don't mind the premium.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Real paper vs. paper-feel E Ink, clearly separated", description: "We labeled each product explicitly as either real physical paper or a textured screen that only simulates the paper feel, so buyers don't confuse the two categories." },
  { title: "Review volume within each category", description: "We compared review count and rating separately within the real-paper and E Ink groups, since they're not directly comparable products." },
  { title: "Price against category", description: "We noted that real-paper options are dramatically cheaper than E Ink tablets, which is a real factor if paper technology isn't the priority." },
  { title: "Capture and export workflow", description: "We compared the scan-and-erase workflow of real paper against the digital note storage of E Ink devices." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Real Paper or Paper-Feel Screen?",
    cards: [
      { label: "Real paper (Rocketbook)", text: "Actual physical pages, scanned via app, erased with a damp cloth. Much cheaper." },
      { label: "Paper-feel E Ink (reMarkable)", text: "No real paper — a textured screen and friction-tip stylus simulate the feel. More expensive, but digital-native." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Decide which category you actually want", explanation: "\"Paper\" here can mean real physical pages (Rocketbook) or a screen designed to feel like paper (reMarkable). These are genuinely different products." },
  { criterion: "Weigh price against category", explanation: "Real-paper options are dramatically cheaper than paper-feel E Ink tablets — factor that in if budget matters." },
  { criterion: "Check review volume within your chosen category", explanation: "Don't compare a real-paper product's reviews directly against an E Ink device's — they solve different problems for different buyers." },
  { criterion: "Understand the capture workflow difference", explanation: "Real paper requires scanning each page before erasing; E Ink devices store notes digitally without a separate scan step." },
  { criterion: "Confirm you have the right accessories", explanation: "Real paper Rocketbooks need Pilot FriXion pens; E Ink devices come with their own dedicated stylus." },
];

export const faq: FaqItem[] = [
  { q: "Is this about real paper or a screen that feels like paper?", a: "Both — the search term is ambiguous, so we covered real-paper Rocketbook notebooks and paper-feel E Ink tablets like the reMarkable separately." },
  { q: "Which is cheaper, real paper or E Ink?", a: "Real paper, significantly. The Rocketbook Core starts at $26.99 versus $399+ for the E Ink options." },
  { q: "Which is the most proven real-paper option?", a: "The Rocketbook Fusion, with 26,593 reviews at 4.6 stars." },
  { q: "Which is the most proven E Ink option?", a: "The reMarkable 2, with 1,354 reviews at 4.4 stars." },
  { q: "Do I need a special pen for either category?", a: "Yes — real paper Rocketbooks require Pilot FriXion pens; E Ink devices use their own dedicated stylus." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-paper-based-digital-notebooks", title: "Best Paper-Based Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-that-feel-like-paper", title: "Best Digital Notebooks That Feel Like Paper (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
