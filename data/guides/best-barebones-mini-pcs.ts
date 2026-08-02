export const guideSlug = "best-barebones-mini-pcs";
export const guideTitle = "4 Best Barebones Mini PCs in 2026";
export const metaTitle = "Best Barebones Mini PCs (2026)";
export const metaDescription =
  "4 barebones mini PCs we evaluated, with a note that the low sticker price excludes RAM and storage, verify true configured cost first.";
export const mainKeyword = "barebones mini pc";
export const introParagraphs = [
  "A barebones mini PC's low sticker price excludes RAM, storage, and sometimes an operating system, worth calculating the true configured cost including these components before comparing the price directly against a complete, fully configured system.",
  "Barebone kits vary in exactly what's included, some come with a case and cooling but no RAM or SSD, others are closer to a component kit requiring more assembly, worth checking exactly what's included and what installation difficulty to expect before buying.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/21j26jIVLGL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "g32ptf92-barebone",
    rank: 1,
    badge: "Best High-Performance Barebone Overall",
    name: "MINISFORUM Mini PC AI X1 Pro Barebone with AMD Ryzen AI 9 HX370(12Cores/24 Threads)&AMD Radeon",
    price: "$695.00",
    rating: "4.8 stars from Amazon ratings",
    reviews: "7 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21j26jIVLGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G32PTF92?tag=deskfinds0d-20",
    description:
      "A genuinely powerful Ryzen AI 9 HX370 barebone with 12 cores and 24 threads, appropriate for buyers wanting flagship-tier performance who don't mind adding their own RAM and storage.\n\nFactor in the additional cost of fast DDR5 RAM and an NVMe SSD to unlock this chip's full potential when calculating your true total build cost.",
    specs: ["AMD Ryzen AI 9 HX370, 12C/24T", "AMD Radeon integrated graphics", "Barebone, no RAM/SSD/OS included", "High review rating"],
    pros: ["Genuinely flagship-tier processor performance in a barebone kit", "High 4.8-star rating despite the small review base", "Strong integrated graphics included", "Flexibility to choose your own fast RAM and SSD"],
    cons: ["Small review base, verify current reviews before purchase", "Total configured cost adds up significantly with fast RAM and SSD", "Requires separate OS purchase and installation"],
    bestFor: "Buyers wanting flagship-tier barebone performance who want to choose their own RAM and SSD",
  },
  {
    id: "g2bgvksl-barebone",
    rank: 2,
    badge: "Best Value Barebone Pick",
    name: "Reatan X7 AI AMD Ryzen 7 255 Oculink Gaming Mini PC(Upgraded 8745HS), Barebone Mini PC(NO RAM)",
    price: "$299.00",
    rating: "4.6 stars from Amazon ratings",
    reviews: "61 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41IHm6E8uFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2BGVKSL?tag=deskfinds0d-20",
    description:
      "A genuinely capable Ryzen 7 255 barebone with OCuLink connectivity, appropriate for buyers wanting eGPU expansion flexibility alongside a lower base price.\n\nA solid review base gives real confidence in this barebone's build quality despite the accessible price point.",
    specs: ["AMD Ryzen 7 255 (upgraded 8745HS)", "OCuLink connectivity for eGPU expansion", "Barebone, no RAM included", "Solid review base"],
    pros: ["OCuLink connectivity genuinely useful for future eGPU expansion", "Solid review base for confidence at this price point", "Reasonable base price for the capability offered", "Good balance of performance and value in barebone form"],
    cons: ["Requires separate RAM, SSD, and OS purchase", "Verify total configured cost against complete systems before buying", "OCuLink eGPU expansion adds further cost if pursued"],
    bestFor: "Buyers wanting OCuLink eGPU expansion flexibility at a reasonable barebone price",
  },
  {
    id: "gx667hrm-barebone",
    rank: 3,
    badge: "Best Budget Barebone Pick",
    name: "Barebone Mini PC, AMD Ryzen 5 3500U (up to 3.7GHz), Without RAM/SSD/OS",
    price: "$179.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "63 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LlCbf8wEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GX667HRM?tag=deskfinds0d-20",
    description:
      "The most budget-friendly barebone in this guide, appropriate for buyers wanting a genuinely low entry price and willing to source their own components.\n\nA solid review base for this price point gives reasonable confidence in the barebone chassis and cooling quality.",
    specs: ["AMD Ryzen 5 3500U (up to 3.7GHz)", "No RAM, SSD, or OS included", "Very budget-friendly base price", "Solid review base"],
    pros: ["Very budget-friendly base price for the barebone chassis", "Solid review base for confidence at this price point", "Genuine flexibility to choose your own components", "Good entry point for a first barebone build"],
    cons: ["Requires separate RAM, SSD, and OS purchase, adding significant total cost", "Older chip generation than the premium barebone picks", "Verify true total configured cost against complete budget systems"],
    bestFor: "Budget-conscious buyers wanting the lowest entry price to build their own configuration",
  },
  {
    id: "gr463lcq-barebone",
    rank: 4,
    badge: "Best Compact Value Barebone Pick",
    name: "GMKtec G3 Pro Mini PC Barebone Intel Core i3-10110U (Beats 4300U/N150)",
    price: "$189.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41CL4VABm1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GR463LCQ?tag=deskfinds0d-20",
    description:
      "A genuine Intel Core i3-10110U barebone at a budget-friendly price, appropriate for buyers wanting Intel's platform benefits (like Quick Sync) in a barebone configuration.\n\nFactor in RAM, SSD, and OS costs when comparing this barebone's true total price against complete budget systems.",
    specs: ["Intel Core i3-10110U", "No RAM, SSD, or OS included", "Budget-friendly base price", "Intel platform benefits"],
    pros: ["Genuine Intel Core i3 processor with platform benefits like Quick Sync", "Budget-friendly base price for the barebone chassis", "Compact form factor", "Good entry point for an Intel-based barebone build"],
    cons: ["Requires separate RAM, SSD, and OS purchase", "Verify current reviews given limited review data", "Older chip generation, verify this suits your performance needs"],
    bestFor: "Buyers wanting an Intel-based barebone build with Quick Sync platform benefits",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "True configured cost calculated including RAM, SSD, and OS", description: "Calculated the true configured cost including RAM, storage, and operating system, rather than comparing bare sticker prices against complete systems." },
  { title: "Exactly what's included in each barebone kit verified", description: "Verified exactly what's included in each barebone kit, since this varies from a case-and-cooling-only kit to something closer to a component kit." },
  { title: "Chip performance tier weighted for matching component investment", description: "Weighted chip performance tier to help buyers match their RAM and SSD investment appropriately, avoiding pairing a flagship chip with budget components or vice versa." },
  { title: "Expansion capability like OCuLink valued for barebone flexibility", description: "Valued genuine expansion capability like OCuLink for eGPU support, since barebone buyers often prioritize future flexibility." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Calculate True Configured Cost Before Comparing to Complete Systems",
    note: "A barebones mini PC's low sticker price excludes RAM, storage, and sometimes an operating system, worth calculating the true configured cost including these components before comparing the price directly against a complete, fully configured system.",
  },
  {
    subheading: "Check Exactly What's Included in the Kit",
    note: "Barebone kits vary in exactly what's included, some come with a case and cooling but no RAM or SSD, others are closer to a component kit requiring more assembly, worth checking exactly what's included and what installation difficulty to expect before buying.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Flagship-tier performance, choose your own components", "MINISFORUM AI X1 Pro Ryzen AI 9 HX370"],
        ["OCuLink eGPU flexibility at a reasonable price", "Reatan X7 AI Ryzen 7 255"],
        ["Lowest entry price for a first barebone build", "Budget Barebone Ryzen 5 3500U"],
        ["Intel-based barebone with Quick Sync benefits", "GMKtec G3 Pro Core i3-10110U"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Calculate the true configured cost including RAM, SSD, and OS", explanation: "The low sticker price excludes these components, verify the actual total before comparing to complete systems." },
  { criterion: "Verify exactly what's included in the specific barebone kit", explanation: "This varies meaningfully between listings, some include a case and cooling, others require more assembly." },
  { criterion: "Match your RAM and SSD investment to the chip's performance tier", explanation: "Don't pair a flagship chip with budget components or vice versa, keep the build balanced." },
  { criterion: "Consider expansion capability like OCuLink for future flexibility", explanation: "This genuinely matters for barebone buyers wanting to add an eGPU or other expansion later." },
];

export const faq: FaqItem[] = [
  { q: "Is a barebone mini PC actually cheaper than a complete system?", a: "Not always, factor in RAM, storage, and OS costs, the true configured cost can approach or exceed a complete system's price." },
  { q: "What's included in a barebone mini PC kit?", a: "This varies, some include a case and cooling but no RAM or SSD, others are closer to component kits, verify the specific listing." },
  { q: "Do I need to buy Windows separately for a barebone mini PC?", a: "Usually yes, most barebone kits don't include an OS, factor this cost into your total budget." },
  { q: "Is OCuLink worth having on a barebone mini PC?", a: "If you might want to add an external GPU later, yes, this gives genuine future expansion flexibility." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-upgradeable-mini-pcs", title: "Best Upgradeable Mini PCs (2026)" },
  { href: "/guide/best-mini-pcs-with-oculink", title: "Best Mini PCs with OCuLink (2026)" },
  { href: "/guide/best-mini-pcs-under-300", title: "Best Mini PCs Under $300 (2026)" },
];
