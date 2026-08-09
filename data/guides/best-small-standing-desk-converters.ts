export const guideSlug = "best-small-standing-desk-converters";
export const guideTitle = "5 Best Small Standing Desk Converters in 2026";
export const metaTitle = "Best Small Standing Desk Converters (2026)";
export const metaDescription =
  "5 standing desk converters under 30 inches wide compared for genuine single-monitor or laptop fit, distinct from our compact guide's broader range.";
export const mainKeyword = "small standing desk converter";
export const introParagraphs = [
  "We defined \"small\" as under 30 inches in platform width, a tighter threshold than our compact converter guide, to keep this page distinct rather than duplicating that broader comparison.",
  "Every pick here still needs to fit a genuinely usable single monitor or laptop setup with keyboard and mouse space, not just a tiny platform that technically qualifies as small.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Eh8j3wCSL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b09vmnymy3-small",
    rank: 1,
    badge: "Best Overall",
    name: "VIVO Black 26 in Standing Desk Converter, DESK-V026KB",
    price: "$107.99",
    rating: "4.6",
    reviews: "15,583",
    imageUrl: "https://m.media-amazon.com/images/I/41Eh8j3wCSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VMNYMY3?tag=deskfinds0d-20",
    description: "At 26 inches, well under our 30 inch small threshold, with the largest review base of any converter in our research.\n\nStill large enough for a single monitor and keyboard comfortably, the strongest option in this narrower size category.",
    specs: ["26 inch platform"],
    pros: ["Largest review base of any converter in our research, well under 30 inches"],
    cons: ["Limited surface for more than a single monitor"],
    bestFor: "Buyers who want the most proven small converter for a single-monitor setup.",
  },
  {
    id: "b07sd7yh8t-small",
    rank: 2,
    badge: "Best Value Single-Top",
    name: "VIVO Black Small Single Top 28 inch Standing Desk Converter, Tabletop",
    price: "$69.99",
    rating: "4.5",
    reviews: "987",
    imageUrl: "https://m.media-amazon.com/images/I/411ZEuCs0FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07SD7YH8T?tag=deskfinds0d-20",
    description: "Explicitly labeled \"small\" directly in the product name, a 28 inch single-top design at a lower price than the 26 inch top pick.\n\nA solid review base for a genuinely small, budget-friendly option.",
    specs: ["28 inch platform, single-top, explicitly labeled small"],
    pros: ["Explicitly labeled small in the product name", "Lower price than the top pick"],
    cons: ["Smaller review base than the 26 inch VIVO top pick"],
    bestFor: "Budget-focused buyers who want an explicitly small, proven single-top design.",
  },
  {
    id: "b07k8wz19k-small",
    rank: 3,
    badge: "Best Single-Top at 29 Inches",
    name: "VIVO Black 29 in Single Top Standing Desk Converter, DESK-V000U",
    price: "$99.99",
    rating: "4.5",
    reviews: "632",
    imageUrl: "https://m.media-amazon.com/images/I/41Br1CxfavL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07K8WZ19K?tag=deskfinds0d-20",
    description: "At 29 inches, just under our small threshold, with a solid review base and single-top design.\n\nA slightly larger platform than the smallest options here while still qualifying as genuinely small.",
    specs: ["29 inch platform, single-top design"],
    pros: ["Solid review base at just under our small size threshold"],
    cons: ["Higher price than the 28 inch alternative at a similar size"],
    bestFor: "Buyers who want the largest platform that still qualifies as genuinely small.",
  },
  {
    id: "b0765bq7rn-small",
    rank: 4,
    badge: "Best From an Ergonomic-Focused Brand",
    name: "Mount-It! Standing Desk Converter, Compact Design",
    price: "See listing",
    rating: "4.4",
    reviews: "381",
    imageUrl: "https://m.media-amazon.com/images/I/41Br1CxfavL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0765BQ7RN?tag=deskfinds0d-20",
    description: "A compact design from Mount-It!, an ergonomic-focused brand, though exact platform width wasn't confirmed against our small threshold.\n\nVerify the exact dimensions on the current listing to confirm it fits within our small category before ordering.",
    specs: ["Compact platform, gas-spring lift"],
    pros: ["From a brand specifically focused on ergonomic mounting products"],
    cons: ["Exact width not confirmed against our small threshold, verify on listing"],
    bestFor: "Buyers who want an ergonomic-focused brand and will verify exact dimensions.",
  },
  {
    id: "b0f8vr922c-small",
    rank: 5,
    badge: "Smallest, Cheapest Bamboo Option",
    name: "Amazer 22 inch Standing Desk Converter, Bamboo Desk Riser with Lap Desk",
    price: "$64.99",
    rating: "4.5",
    reviews: "318",
    imageUrl: "https://m.media-amazon.com/images/I/41eSj5kZ-BL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F8VR922C?tag=deskfinds0d-20",
    description: "The smallest platform in this comparison at 22 inches, with genuine bamboo construction and a dual-purpose lap desk function.\n\nA solid review base for the smallest, most budget-friendly option here, well suited to a laptop-only setup.",
    specs: ["22 inch platform, bamboo, lap desk function"],
    pros: ["Smallest platform in this comparison", "Genuine bamboo construction with lap desk versatility"],
    cons: ["Very limited surface area, suited only to a single laptop"],
    bestFor: "Buyers with the tightest space constraints who want the smallest possible platform.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Defined \"small\" as a stricter threshold than our compact guide", description: "We set a maximum 30 inch width for this comparison specifically, to keep it distinct from our broader compact converter guide." },
  { title: "Required genuine usability for a single monitor or laptop, not just a tiny platform", description: "Every pick here still fits a realistic single-device setup with keyboard and mouse space, not simply the smallest technically-qualifying platform." },
  { title: "Prioritized products explicitly labeled \"small\" in the listing", description: "One pick specifically uses this word directly, which we treated as a genuine confirmation signal alongside the measured dimensions." },
  { title: "Flagged where exact width wasn't confirmed against our specific threshold", description: "For one pick, we noted that exact dimensions need verification directly on the listing to confirm it qualifies as small under our definition." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By What Matters Most",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Most proven small converter", "VIVO Black 26 in Standing Desk Converter"],
        ["Explicitly labeled small, budget", "VIVO Black Small Single Top 28 inch"],
        ["Largest platform still qualifying as small", "VIVO Black 29 in Single Top Standing Desk Converter"],
        ["Smallest platform, laptop-only", "Amazer 22 inch Standing Desk Converter, Bamboo"],
      ],
    },
  },
  {
    subheading: "Small vs. Compact: Check Which Guide Fits Your Need",
    note: "This guide applies a stricter under-30-inch threshold; our broader compact standing desk converter guide covers a wider range including some larger options still considered space-saving. If a 26-29 inch platform feels too tight, check the compact guide for slightly larger alternatives.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the platform genuinely fits your device plus keyboard and mouse", explanation: "A small platform must still support a usable setup; verify dimensions against your actual monitor or laptop and input devices." },
  { criterion: "Check whether you need this stricter small threshold or our broader compact guide", explanation: "This page applies a tighter under-30-inch definition; our compact guide covers a somewhat wider range if that better fits your needs." },
  { criterion: "Weigh review volume against the smallest platform options", explanation: "The largest review base here belongs to the 26 inch VIVO pick; the smallest 22 inch option has a smaller but still meaningful review history." },
  { criterion: "Verify exact dimensions for any pick without confirmed size data", explanation: "One pick in this comparison didn't have confirmed width in our specific research; check the current listing before assuming it qualifies as small." },
  { criterion: "Consider a bamboo or material-specific option if that also matters", explanation: "The smallest pick here happens to be confirmed bamboo, useful if both small size and material matter to your decision." },
];

export const faq: FaqItem[] = [
  { q: "What counts as a \"small\" standing desk converter?", a: "We defined this as under 30 inches in platform width, a stricter threshold than our broader compact converter guide." },
  { q: "Which small converter has the most reviews?", a: "The VIVO Black 26 in Standing Desk Converter, with 15,583 reviews." },
  { q: "What's the smallest platform in this comparison?", a: "The Amazer 22 inch Standing Desk Converter, Bamboo Desk Riser, at 22 inches." },
  { q: "Is there a converter explicitly labeled small?", a: "Yes, the VIVO Black Small Single Top 28 inch Standing Desk Converter uses this word directly in its name." },
  { q: "Should I check the compact guide instead?", a: "If a 26-29 inch platform feels too tight, our compact standing desk converter guide covers a somewhat broader range." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-compact-standing-desk-converters", title: "Best Compact Standing Desk Converters (2026)" },
  { href: "/guide/best-narrow-standing-desk-converters", title: "Best Narrow Standing Desk Converters (2026)" },
  { href: "/guide/best-standing-desk-converters", title: "Best Standing Desk Converters (2026)" },
];
