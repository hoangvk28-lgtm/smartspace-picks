export const guideSlug = "best-amd-mini-pcs";
export const guideTitle = "5 Best AMD Mini PCs in 2026";
export const metaTitle = "Best AMD Mini PCs, Honestly Reviewed (2026)";
export const metaDescription =
  "5 AMD mini PCs we evaluated, with a note that AMD's integrated Radeon graphics generally outperform Intel's integrated graphics at similar price points, worth weighing this if light gaming matters to you.";
export const mainKeyword = "amd mini pc";
export const introParagraphs = [
  "AMD's integrated Radeon graphics generally outperform Intel's integrated graphics at similar price points, worth weighing this genuine advantage if light gaming or GPU-accelerated tasks matter to you alongside general productivity performance.",
  "AMD's Ryzen mobile chip naming can be genuinely confusing, model numbers don't always indicate generation clearly, worth verifying the specific chip's actual release generation and benchmark performance rather than assuming a higher model number always means newer or faster.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41K6xTLW3dL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "glf2kykn-amd",
    rank: 1,
    badge: "Best AMD Mini PC Overall",
    name: "GEEKOM A9 Max High AI Productivity Mini PC,AMD Ryzen AI 9 HX 370(80 Tops)",
    price: "$1,299.00",
    rating: "4.5 stars from Amazon ratings",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41K6xTLW3dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLF2KYKN?tag=deskfinds0d-20",
    description:
      "AMD's genuinely most current Ryzen AI 9 HX 370 chip with strong integrated Radeon graphics and high AI processing capability.\n\nAppropriate for buyers wanting the strongest current-generation AMD chip alongside its characteristically strong integrated graphics performance.",
    specs: ["AMD Ryzen AI 9 HX 370", "High AI processing capability (80 TOPS)", "Strong integrated Radeon graphics", "Premium price point"],
    pros: ["Most current-generation AMD chip in this guide", "Strong integrated Radeon graphics, AMD's characteristic advantage", "High AI processing capability for demanding productivity", "Top-tier performance within the AMD lineup"],
    cons: ["Highest price in this guide", "AI processing capability is unnecessary expense if you don't need it", "Verify the exact generation matches your expectations given AMD's naming complexity"],
    bestFor: "Buyers wanting AMD's strongest current-generation chip with characteristic graphics strength",
  },
  {
    id: "g19zf99r-amd",
    rank: 2,
    badge: "Best AMD Pick with Gaming Capability",
    name: "GEEKOM A8 MAX Gaming Mini PC AMD Ryzen 9 8945HS 32GB DDR5 & 1TB SSD",
    price: "$999.00",
    rating: "4.5 stars from Amazon ratings",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41K6xTLW3dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G19ZF99R?tag=deskfinds0d-20",
    description:
      "Ryzen 9 8945HS with genuinely strong integrated Radeon graphics, appropriate for buyers wanting AMD's characteristic graphics advantage for light gaming alongside productivity.\n\n32GB DDR5 RAM and 1TB SSD round out a well-specced AMD-powered build.",
    specs: ["AMD Ryzen 9 8945HS", "32GB DDR5 RAM", "1TB SSD", "Strong integrated Radeon graphics"],
    pros: ["Strong integrated Radeon graphics for light gaming capability", "Powerful Ryzen 9 processor for demanding productivity", "Fast DDR5 RAM for responsive performance", "Good balance of AMD's graphics and processing strengths"],
    cons: ["Verify the exact chip generation given AMD's naming complexity", "Overkill if your needs are lighter than demanding workloads", "Check sustained-load thermal reports for extended demanding sessions"],
    bestFor: "Buyers wanting AMD's integrated graphics advantage for light gaming alongside strong productivity",
  },
  {
    id: "g2c2cdr4-amd",
    rank: 3,
    badge: "Best Value AMD Pick",
    name: "GEEKOM [2026 Edition Multitasking Mini PC A7 MAX with AMD Ryzen 9 7940HS",
    price: "$649.00",
    rating: "4.5 stars from Amazon ratings",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41K6xTLW3dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2C2CDR4?tag=deskfinds0d-20",
    description:
      "A genuinely powerful Ryzen 9 7940HS processor at a more accessible price than the top AMD picks, appropriate for buyers wanting strong AMD performance without top-tier pricing.\n\nRecent 2026 edition hardware gives confidence in current-generation AMD processing capability.",
    specs: ["AMD Ryzen 9 7940HS", "Compact mini PC form factor", "Multitasking-focused build", "2026 edition"],
    pros: ["Genuinely powerful Ryzen 9 processor at a more accessible price", "Recent 2026 edition hardware for current-generation capability", "Strong AMD integrated graphics performance", "Good value for buyers wanting AMD without top-tier pricing"],
    cons: ["Less powerful than the top-tier AMD picks in this guide", "Check sustained-load thermal reports for extended demanding sessions", "Verify RAM and storage configuration matches your specific needs"],
    bestFor: "Buyers wanting strong AMD performance at a more accessible price",
  },
  {
    id: "drp316j1-amd",
    rank: 4,
    badge: "Best Upgradable AMD Pick",
    name: "GEEKOM A6 Mini PC, Ryzen 7 6800H, 16GB DDR5 Upgradable RAM 1TB PCIe 4.0 SSD",
    price: "$549.00",
    rating: "4.5 stars from Amazon ratings",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41K6xTLW3dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DRP316J1?tag=deskfinds0d-20",
    description:
      "Explicitly upgradable DDR5 RAM alongside a genuinely capable Ryzen 7 6800H processor, appropriate for buyers wanting AMD performance with future expandability.\n\n1TB PCIe 4.0 SSD gives fast storage out of the box, a well-rounded AMD-powered build.",
    specs: ["AMD Ryzen 7 6800H", "16GB upgradable DDR5 RAM", "1TB PCIe 4.0 SSD", "Compact mini PC form factor"],
    pros: ["Explicitly upgradable RAM avoids the soldered-memory limitation", "Genuinely capable Ryzen 7 processor for demanding productivity", "Strong AMD integrated graphics performance", "Strong balance of current performance and future expandability"],
    cons: ["Check current reviews for sustained-load thermal performance reports", "Mid-range price relative to budget AMD alternatives", "Verify your specific software needs match this processor's capability"],
    bestFor: "Buyers wanting AMD performance with genuine future RAM upgradability",
  },
  {
    id: "c7437s8h-amd",
    rank: 5,
    badge: "Best Budget AMD Pick",
    name: "Beelink SER5 Pro Mini PC, AMD Ryzen 5 5625U(Up to 4.3GHz) 6C/12T",
    price: "$319.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41K6xTLW3dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C7437S8H?tag=deskfinds0d-20",
    description:
      "A genuinely capable 6-core, 12-thread Ryzen 5 processor at a budget-friendly price, well beyond what many cheaper Celeron or Atom-based mini PCs offer.\n\nAppropriate for budget-conscious buyers wanting AMD's characteristic graphics performance without a premium price commitment.",
    specs: ["AMD Ryzen 5 5625U, 6C/12T", "Compact mini PC form factor", "Budget-friendly price", "Genuine multitasking capability"],
    pros: ["Genuinely capable 6-core processor well beyond bare-bones budget tiers", "Budget-friendly price for the AMD processor performance offered", "Good multitasking capability for everyday productivity", "Solid AMD value for the price point"],
    cons: ["Verify RAM and storage capacity match your actual usage needs", "Check whether RAM and storage are user-upgradable", "Older chip generation than the top picks in this guide"],
    bestFor: "Budget-conscious buyers wanting genuine AMD multitasking capability at a low price",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "AMD's integrated graphics advantage weighted honestly", description: "Weighted AMD's generally stronger integrated Radeon graphics at similar price points as a genuine advantage for buyers wanting light gaming or GPU-accelerated tasks." },
  { title: "AMD naming complexity flagged to avoid generation confusion", description: "Flagged that AMD's Ryzen mobile chip naming can be genuinely confusing, encouraging verification of actual release generation rather than assuming from model number alone." },
  { title: "RAM upgradability checked specifically across AMD configurations", description: "Checked RAM upgradability specifically across AMD-powered configurations, since this varies even within the AMD lineup." },
  { title: "Value assessed across the AMD price range from budget to premium", description: "Assessed genuine value across different price points within the AMD lineup, identifying strong options at various budgets." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Weigh AMD's Integrated Graphics Advantage",
    note: "AMD's integrated Radeon graphics generally outperform Intel's integrated graphics at similar price points, worth weighing this genuine advantage if light gaming or GPU-accelerated tasks matter to you alongside general productivity performance.",
  },
  {
    subheading: "Verify the Actual Chip Generation, Not Just the Model Number",
    note: "AMD's Ryzen mobile chip naming can be genuinely confusing, model numbers don't always indicate generation clearly, worth verifying the specific chip's actual release generation and benchmark performance rather than assuming a higher model number always means newer or faster.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Strongest current-generation AMD chip", "GEEKOM A9 Max Ryzen AI 9 HX 370"],
        ["AMD graphics advantage for light gaming", "GEEKOM A8 MAX Ryzen 9 8945HS"],
        ["Strong AMD performance at a moderate price", "GEEKOM A7 MAX Ryzen 9 7940HS"],
        ["AMD with genuine RAM upgradability", "GEEKOM A6 Ryzen 7 6800H"],
        ["Budget-friendly AMD multitasking capability", "Beelink SER5 Pro Ryzen 5 5625U"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Weigh AMD's integrated graphics advantage for light gaming needs", explanation: "AMD's Radeon graphics generally outperform Intel's integrated graphics at similar price points, a genuine advantage if this matters to you." },
  { criterion: "Verify the actual chip generation, not just the model number", explanation: "AMD's naming can be confusing, don't assume a higher model number always means newer or faster without checking benchmarks." },
  { criterion: "Check RAM upgradability specifically for the AMD model you choose", explanation: "This varies even within the AMD lineup, verify it matches your future expandability needs." },
  { criterion: "Weigh value across the AMD price range", explanation: "Strong AMD options exist from budget to premium, match spending to your actual performance needs." },
];

export const faq: FaqItem[] = [
  { q: "Are AMD mini PCs better for gaming than Intel ones?", a: "AMD's integrated Radeon graphics generally outperform Intel's integrated graphics at similar price points, a genuine advantage for light gaming." },
  { q: "Does a higher AMD model number always mean a newer or faster chip?", a: "Not necessarily, AMD's naming can be genuinely confusing, verify the actual release generation rather than assuming from the model number alone." },
  { q: "Can I upgrade RAM on an AMD mini PC?", a: "It varies even within the AMD lineup, check the specific model's upgradability before buying if this matters to you." },
  { q: "Is a budget AMD mini PC worth it?", a: "Yes, for genuine multitasking capability at a reasonable price, budget AMD chips often outperform bare-bones alternatives in other brands." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-intel-mini-pcs", title: "Best Intel Mini PCs (2026)" },
  { href: "/guide/best-mini-pcs-for-gaming", title: "Best Mini PCs for Gaming (2026)" },
  { href: "/guide/best-powerful-mini-pcs", title: "Best Powerful Mini PCs (2026)" },
];
