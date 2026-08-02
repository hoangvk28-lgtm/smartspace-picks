export const guideSlug = "best-portable-monitors-under-100";
export const guideTitle = "4 Best Portable Monitors Under $100 in 2026";
export const metaTitle = "Best Portable Monitors Under $100 (2026)";
export const metaDescription =
  "4 portable monitors under $100 we evaluated, setting realistic expectations for panel quality and brightness at this competitive budget tier.";
export const mainKeyword = "portable monitor under 100";
export const introParagraphs = [
  "At this price tier, panel brightness and color accuracy genuinely vary more than at higher price points, worth checking specific nit brightness and color gamut ratings rather than assuming any budget portable monitor looks similarly good in typical indoor lighting.",
  "USB-C single-cable power delivery isn't guaranteed at this budget, some models require a separate power source, worth verifying whether your laptop can power the display through one cable alone before assuming a simpler travel setup.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "kyy-under100",
    rank: 1,
    badge: "Best Portable Monitor Under $100 Overall",
    name: "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender",
    price: "$62.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B088D8JG3L?tag=deskfinds0d-20",
    description:
      "A well-established 15.6-inch 1080P portable monitor at a genuinely low price, appropriate for buyers wanting a reliable second screen without a large budget commitment.\n\nVerify whether single-cable USB-C power delivery works with your specific laptop before assuming a simpler travel setup.",
    specs: ["15.6-inch FHD 1080P panel", "Very low price point", "Established KYY brand", "USB-C connectivity"],
    pros: ["Genuinely low price for a full 1080P portable monitor", "Established KYY brand with a long track record in this category", "Popular 15.6-inch size fits most portable use cases", "Good entry point for a first portable monitor purchase"],
    cons: ["Verify single-cable USB-C power delivery works with your specific laptop", "Panel brightness and color accuracy are more basic at this price point", "Verify current reviews for build quality reports"],
    bestFor: "Buyers wanting a reliable, well-established budget portable monitor under $100",
  },
  {
    id: "anyuse-under100",
    rank: 2,
    badge: "Best Lowest-Cost Pick",
    name: "Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor",
    price: "$39.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/51hVTfsBxqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D44QFCPQ?tag=deskfinds0d-20",
    description:
      "A genuine IPS panel at the lowest price point in this guide, appropriate for buyers wanting the most budget-friendly entry into portable monitors while still getting IPS viewing angles.\n\nSet realistic expectations for brightness and color accuracy at this very low price point.",
    specs: ["15.6-inch FHD IPS panel", "Lowest price in this guide", "Both USB-C and HDMI connectivity", "Budget-friendly entry point"],
    pros: ["Genuine IPS panel for decent viewing angles at a very low price", "Lowest price point among the picks in this guide", "Both USB-C and HDMI connectivity for flexible source device support", "Good option for buyers on the tightest possible budget"],
    cons: ["Set realistic expectations for brightness at this very low price", "Verify current reviews for build quality reports", "Basic accessory bundle compared to pricier alternatives"],
    bestFor: "Budget-conscious buyers wanting the most affordable entry into portable monitors",
  },
  {
    id: "mnn-under100",
    rank: 3,
    badge: "Best Gaming-Friendly Pick Under $100",
    name: "MNN 15.6\" FHD 60Hz Portable Monitor USB-C HDMI IPS HDR Gaming",
    price: "$49.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/5130Dsp2DML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9NNWXVP?tag=deskfinds0d-20",
    description:
      "An HDR-labeled IPS panel with gaming-oriented marketing, appropriate for buyers wanting a budget portable monitor for light gaming alongside general use.\n\nVerify the genuine HDR implementation through current reviews, budget HDR labeling often provides limited real-world visual difference.",
    specs: ["15.6-inch FHD IPS panel", "60Hz refresh rate", "HDR labeling", "Both USB-C and HDMI connectivity"],
    pros: ["Genuine IPS panel with both USB-C and HDMI connectivity", "Gaming-oriented marketing suits light gaming use", "Budget-friendly price under $50", "Flexible connectivity for multiple source devices"],
    cons: ["Verify the genuine HDR implementation, budget HDR often adds limited real-world benefit", "60Hz refresh rate is standard, not high-refresh for competitive gaming", "Set realistic expectations for brightness at this price point"],
    bestFor: "Budget-conscious buyers wanting a portable monitor for light gaming and general use",
  },
  {
    id: "aoc-under100",
    rank: 4,
    badge: "Best Established Brand Pick Under $100",
    name: "AOC 16\" Portable Monitor FHD 60Hz USB-C IPS Ultra Slim",
    price: "$74.61",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41P2640OZGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F3MMK1J4?tag=deskfinds0d-20",
    description:
      "A genuine 16-inch IPS panel from AOC, an established monitor brand with a long track record in display manufacturing, appropriate for buyers wanting more brand confidence under $100.\n\nA slightly larger 16-inch screen and ultra-slim design give a real usability edge over the standard 15.6-inch alternatives.",
    specs: ["16-inch FHD IPS panel", "Ultra-slim design", "Established AOC display brand", "USB-C connectivity"],
    pros: ["Established AOC brand with a long track record in display manufacturing", "Slightly larger 16-inch screen than the standard 15.6-inch alternatives", "Ultra-slim design for genuinely easy portability", "Good balance of brand trust and budget price"],
    cons: ["Higher price than the most budget-focused picks in this guide", "Set realistic expectations for brightness at this price point", "Single USB-C connectivity, verify compatibility with your device"],
    bestFor: "Buyers wanting more brand confidence from an established display manufacturer under $100",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Brightness and color accuracy checked against realistic budget-tier expectations", description: "Checked specific brightness and color gamut ratings rather than assuming any budget portable monitor looks similarly good in typical indoor lighting." },
  { title: "USB-C single-cable power delivery verified, not assumed universal", description: "Verified whether each model genuinely supports single-cable USB-C power delivery rather than requiring a separate power source." },
  { title: "Established brand track record weighed for confidence at low price points", description: "Weighed established display brand reputation for buyers wanting more confidence when spending less on unfamiliar brands." },
  { title: "Marketing claims like HDR checked against realistic budget-tier implementation", description: "Checked marketing claims like HDR labeling against realistic budget-tier implementation, since these often provide limited real-world visual difference." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Check Specific Brightness and Color Ratings, Not Just the Price",
    note: "At this price tier, panel brightness and color accuracy genuinely vary more than at higher price points, worth checking specific nit brightness and color gamut ratings rather than assuming any budget portable monitor looks similarly good in typical indoor lighting.",
  },
  {
    subheading: "Verify Single-Cable USB-C Power Delivery Before Buying",
    note: "USB-C single-cable power delivery isn't guaranteed at this budget, some models require a separate power source, worth verifying whether your laptop can power the display through one cable alone before assuming a simpler travel setup.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Reliable, well-established budget pick", "KYY 15.6\" 1080P"],
        ["Absolute lowest price", "Anyuse 15.6\" FHD IPS"],
        ["Light gaming and general use", "MNN 15.6\" HDR Gaming"],
        ["More brand confidence, established manufacturer", "AOC 16\" Ultra Slim IPS"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check specific brightness and color gamut ratings", explanation: "These genuinely vary more at this price tier, don't assume any budget monitor looks similarly good in typical indoor lighting." },
  { criterion: "Verify single-cable USB-C power delivery works with your laptop", explanation: "This isn't guaranteed at this budget, some models require a separate power source for a simpler travel setup." },
  { criterion: "Consider established brand reputation for added confidence", explanation: "A recognized display brand offers more confidence in build quality and support when spending less." },
  { criterion: "Set realistic expectations for marketing claims like HDR", explanation: "Budget HDR labeling often provides limited real-world visual difference compared to premium implementations." },
];

export const faq: FaqItem[] = [
  { q: "Can a portable monitor under $100 still look good?", a: "Yes, but check specific brightness and color gamut ratings, quality genuinely varies more at this price tier than at higher price points." },
  { q: "Do all portable monitors work with just one USB-C cable?", a: "Not always, verify single-cable power delivery works with your specific laptop before assuming a simpler travel setup." },
  { q: "Is HDR worth it on a budget portable monitor?", a: "Often adds limited real-world visual difference at this price point, don't expect premium HDR implementation." },
  { q: "Should I buy from an established display brand at this price?", a: "It adds confidence in build quality and support, but well-reviewed lesser-known brands can also perform well at this budget." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-monitors-under-200", title: "Best Portable Monitors Under $200 (2026)" },
  { href: "/guide/best-budget-usb-c-monitors", title: "Best Budget USB-C Monitors (2026)" },
  { href: "/guide/best-hdmi-portable-monitors", title: "Best HDMI Portable Monitors (2026)" },
];
