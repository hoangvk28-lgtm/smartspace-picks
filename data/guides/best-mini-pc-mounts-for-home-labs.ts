export const guideSlug = "best-mini-pc-mounts-for-home-labs";
export const guideTitle = "5 Best Mini PC Mounts for Home Labs in 2026";
export const metaTitle = "Best Mini PC Mounts for Home Labs (2026)";
export const metaDescription =
  "5 mounting options for home-lab mini PCs, covering both 10-inch rack shelves and non-rack wall/under-desk mounts for buyers without a dedicated rack.";
export const mainKeyword = "mini PC rack mount for home lab";
export const introParagraphs = [
  "This overlaps with our 10-inch rack mounts guide for buyers who have a dedicated rack, but we're also including non-rack wall and desk options here for home-lab builders who mount mini PCs without a full rack setup.",
  "Home labs vary widely in scale, from a single Mac mini running a few services to a full 10-inch rack with multiple nodes, so we covered both ends of that range.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41KVUYtCF9L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0g9c4s2mg-homelabmount",
    rank: 1,
    badge: "Best Overall",
    name: "Freejia 10inch 1U Mini PC Rack Mount Shelf Compatible with Dell Micro OptiPlex, Lenovo, HP",
    price: "$25.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41KVUYtCF9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G9C4S2MG?tag=deskfinds0d-20",
    description: "For home labs with a dedicated 10-inch rack, this shelf works across Dell, Lenovo, and HP mini PCs with cable-routing cutouts, the most flexible rack-format option in this comparison.",
    specs: ["1U, 10 inch rack shelf", "Compatible with Dell, Lenovo, HP mini PCs", "RJ45 CAT6 and HDMI port cutouts"],
    pros: ["Widest confirmed brand compatibility for a rack shelf", "Purpose-built for home-lab rack use"],
    cons: ["Requires an existing 10-inch rack"],
    bestFor: "Home-lab builders with a dedicated 10-inch rack who want multi-brand compatibility.",
  },
  {
    id: "b0gtwyjtr8-homelabmount",
    rank: 2,
    badge: "Best Space-Efficient Rack Option",
    name: "SplashNColor Mac mini Rack Mount for 10 Inch Server Rack – Half Width Shelf Bracket",
    price: "$14.99",
    rating: "4.4",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31qkrJ347eL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTWYJTR8?tag=deskfinds0d-20",
    description: "A half-width rack shelf, useful for home labs where you want to pack more devices per rack unit.",
    specs: ["Half-width, 10 inch rack shelf", "4.4 stars"],
    pros: ["Space-efficient half-width design for dense home-lab racks"],
    cons: ["Half-width sizing limits which mini PC chassis fit"],
    bestFor: "Home-lab builders optimizing rack-unit density.",
  },
  {
    id: "b07ky3lhvg-homelabmount",
    rank: 3,
    badge: "Best Non-Rack Option",
    name: "HumanCentric Thin Client Mount Bracket Mini PC VESA Monitor Arm, Under Desk",
    price: "$26.99",
    rating: "4.4",
    reviews: "702",
    imageUrl: "https://m.media-amazon.com/images/I/41nWvL8pqlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KY3LHVG?tag=deskfinds0d-20",
    description: "For home labs without a dedicated rack, this VESA bracket mounts under a desk, to a pole, or on a surface, with by far the largest review base in this comparison.",
    specs: ["Fits 0.65-2.55 in device depth", "Under-desk, pole, or surface mount", "702 reviews at 4.4 stars"],
    pros: ["Largest, most proven review base in this comparison", "No rack required"],
    cons: ["Not a rack-format product if you specifically want rack organization"],
    bestFor: "Home-lab builders without a dedicated rack who want a proven, flexible mount.",
  },
  {
    id: "b0cj7bk9cm-homelabmount",
    rank: 4,
    badge: "Best Wall-Mount Alternative",
    name: "Monzlteck Adjustable Small Device Wall Mount Or VESA Mount Behind the Monitor",
    price: "$19.99",
    rating: "4.6",
    reviews: "190",
    imageUrl: "https://m.media-amazon.com/images/I/31l-EL12D-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJ7BK9CM?tag=deskfinds0d-20",
    description: "The highest rating in this comparison, useful for a home-lab node mounted directly to a wall in a closet or utility space rather than a formal rack.",
    specs: ["Wall mount or VESA behind-monitor mount", "190 reviews at 4.6 stars"],
    pros: ["Highest rating in this comparison", "Wall-mount option for a closet or utility-space home lab"],
    cons: ["Not a rack-format product"],
    bestFor: "Home-lab builders who want to wall-mount a node in a closet or utility space.",
  },
  {
    id: "b0g2y8b6j3-homelabmount",
    rank: 5,
    badge: "Best Budget Wall Shelf",
    name: "NOTMBESTM Adjustable Wall Mount Shelf for Mini PC, WiFi Router",
    price: "$12.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31mtZrZsgiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2Y8B6J3?tag=deskfinds0d-20",
    description: "The cheapest option in this comparison, a simple wall-mounted shelf that also accommodates a router, useful for a minimal home-lab setup with a mini PC and networking gear together.",
    specs: ["Adjustable wall mount shelf", "Also fits WiFi routers"],
    pros: ["Cheapest option in this comparison", "Fits both a mini PC and a router on the same shelf"],
    cons: ["No review history available yet", "Not a rack-format product"],
    bestFor: "Budget-focused home-lab builders who want to combine mini PC and router placement.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Covered both rack and non-rack home-lab setups", description: "We included genuine 10-inch rack shelves for buyers with a dedicated rack, and non-rack wall/desk mounts for those without one." },
  { title: "Multi-brand compatibility noted where confirmed", description: "We flagged where a rack shelf explicitly supports multiple mini PC brands versus single-brand or Mac mini-specific designs." },
  { title: "Space efficiency for rack-unit density", description: "We noted where a half-width shelf helps pack more devices into a limited rack setup." },
  { title: "Review volume and rating together", description: "We weighted both metrics across the mixed rack and non-rack product pool." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Do You Have a Dedicated 10-Inch Rack?",
    cards: [
      { label: "Yes, I have a rack", text: "Choose the Freejia multi-brand shelf or the SplashNColor half-width option for rack-format mounting." },
      { label: "No dedicated rack yet", text: "The HumanCentric, Monzlteck, or NOTMBESTM options mount to a desk, pole, or wall without needing a rack at all." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Decide if you have or want a dedicated 10-inch rack", explanation: "Rack shelves require an actual rack; non-rack mounts (wall, under-desk, pole) work without one." },
  { criterion: "Check multi-brand compatibility for rack shelves", explanation: "The Freejia shelf confirms Dell, Lenovo, and HP compatibility in one product, useful if your home lab mixes brands." },
  { criterion: "Consider half-width shelves for rack-unit density", explanation: "If you're optimizing a small rack for multiple devices, a half-width shelf frees up space for another unit." },
  { criterion: "Weigh review volume for the non-rack options", explanation: "The HumanCentric and Monzlteck non-rack mounts have the strongest review evidence in this comparison." },
  { criterion: "Consider combining mini PC and router placement", explanation: "The NOTMBESTM shelf accommodates both, useful for a compact home-lab networking setup." },
];

export const faq: FaqItem[] = [
  { q: "Do I need a dedicated rack for a home lab?", a: "No — several options here mount to a desk, wall, or pole without requiring a rack at all, useful for smaller home-lab setups." },
  { q: "Which rack shelf works with the most brands?", a: "The Freejia 10inch 1U Mini PC Rack Mount Shelf, explicitly compatible with Dell, Lenovo, and HP." },
  { q: "What's the best non-rack option?", a: "The HumanCentric Thin Client Mount Bracket, with the largest review base in this comparison and flexible under-desk or pole mounting." },
  { q: "Is there an option that also fits a router?", a: "Yes, the NOTMBESTM Adjustable Wall Mount Shelf accommodates both a mini PC and a WiFi router." },
  { q: "How does this overlap with your 10-inch rack mounts guide?", a: "Substantially for the rack-format products, though this guide also covers non-rack alternatives for home labs without a dedicated rack." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-10-inch-rack-mounts-for-mini-pcs", title: "Best 10-Inch Rack Mounts for Mini PCs (2026)" },
  { href: "/guide/best-mini-pc-desk-mounts", title: "Best Mini PC Desk Mounts (2026)" },
  { href: "/guide/best-mini-pc-mounts", title: "Best Mini PC Mounts (2026)" },
];
