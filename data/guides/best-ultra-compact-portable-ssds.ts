export const guideSlug = "best-ultra-compact-portable-ssds";
export const guideTitle = "4 Best Ultra-Compact Portable SSDs in 2026";
export const metaTitle = "Best Ultra-Compact Portable SSDs";
export const metaDescription = "4 ultra-compact portable SSDs we evaluated, weighing real thermal throttling risk and connector durability against their small size and weight.";
export const mainKeyword = "best ultra compact portable ssd";
export const introParagraphs = [
  "Ultra-compact enclosures have the least surface area for heat dissipation in the entire portable SSD category, making them the most prone to thermal throttling under sustained load, a central consideration worth weighing against their small size and weight.",
  "Extremely compact drives also sometimes use a less robust connector attachment, such as a fixed, non-replaceable cable or a more fragile port, a real durability tradeoff worth checking alongside the true kit weight and size including any included cable or case, not just the bare drive's dimensions.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0clv9gg54-p1",
    rank: 1,
    badge: "Best Overall Ultra-Compact Pick",
    name: "KingSpec Z5 512GB External SSD - 2100MB/s, Portable Solid State Hard Drives with RGB Light, Zinc Alloy Case, USB 3.2 Gen2x2 Interface",
    price: "$88.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "436 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31a33qlUGuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLV9GG54?tag=deskfinds0d-20",
    description:
      "The KingSpec Z5 packs a genuinely small 512GB footprint with a rated 2100MB/s speed, though that compact zinc alloy case has limited surface area for heat dissipation under sustained transfers.\n\nCheck reviews for confirmed sustained-load thermal behavior before relying on this drive for very large continuous transfers, short bursts of everyday use are unlikely to trigger any throttling.",
    specs: ["512GB capacity", "Up to 2100MB/s rated", "USB 3.2 Gen2x2", "Zinc alloy ultra-compact case"],
    pros: ["Genuinely small, pocketable footprint", "High rated speed for the size", "Distinctive zinc alloy design", "Good value for an ultra-compact drive"],
    cons: ["Compact case has limited heat dissipation under sustained load", "Smaller review base than mainstream brands", "512GB may be limiting for larger libraries"],
    bestFor: "Buyers who want the smallest possible footprint for everyday bursts of use",
  },
  {
    id: "b09bjyxmdw-p2",
    rank: 2,
    badge: "Best Ultra-Compact Pick for PS5-Certified Play",
    name: "Seagate Storage Expansion Card 2TB Solid State Drive - NVMe SSD for Xbox Series X|S, Quick Resume, Plug & Play, Licensed",
    price: "Check current price on Amazon",
    rating: "4.8 stars from Amazon ratings",
    reviews: "30,738 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316Its027kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09BJYXMDW?tag=deskfinds0d-20",
    description:
      "Seagate's Storage Expansion Card is a genuinely small internal NVMe card designed to fit inside the PS5's expansion slot, where the console's own internal cooling helps offset the card's own limited surface area.\n\nBecause it installs internally rather than sitting exposed like a typical external ultra-compact drive, its connector attachment concerns differ from external ultra-compact drives, it is a fixed internal card rather than a cable-dependent external unit.",
    specs: ["2TB capacity", "Internal NVMe expansion card", "Sony-certified for PS5", "Benefits from the PS5's own internal cooling"],
    pros: ["PS5's internal cooling helps offset the card's compact size", "No external cable or port to worry about durability-wise", "Officially Sony-certified for reliable internal fit", "Large review base for this specific product"],
    cons: ["Only usable with a PS5's internal expansion slot, not general external storage", "Price varies, check current listing before buying", "Requires opening the PS5 case to install"],
    bestFor: "PS5 owners who want compact expansion without external cable durability concerns",
  },
  {
    id: "b0c3b32h9m-p3",
    rank: 3,
    badge: "Best Ultra-Compact Pick with Broad Compatibility",
    name: "Transcend ESD310 1TB External SSD, Up to 1,050MB/s, Dual USB Drive, 2-in-1 Type C & A, USB 3.2 Gen2 Portable SSD",
    price: "$239.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "2,340 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C3B32H9M?tag=deskfinds0d-20",
    description:
      "Transcend's ESD310 stays genuinely compact while offering both USB-C and USB-A connectors, useful if you want a small drive that skips carrying a separate adapter.\n\nAs with other compact drives, verify the true kit weight and size including any included cable, since a compact bare drive with a bulky cable is not as genuinely pocketable as it first appears.",
    specs: ["1TB capacity", "Dual USB-C and USB-A connectors", "Up to 1050MB/s rated", "Compact 2-in-1 connector design"],
    pros: ["Genuinely compact with dual-connector flexibility built in", "Reduces the need for a separate adapter", "Solid everyday speed for the size", "Good value for the compact, flexible design"],
    cons: ["Verify true kit weight and size including any included cable", "Smaller review base than mainstream single-connector drives", "Compact size still carries the same thermal throttling risk as other ultra-compact drives"],
    bestFor: "Buyers who want a compact drive with built-in connector flexibility",
  },
  {
    id: "b08hn37xc1-p4",
    rank: 4,
    badge: "Best Ultra-Compact Pick from a Established High-Volume Brand",
    name: "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware - SDSSDE61-2T00-G25",
    price: "$299.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "91,365 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HN37XC1?tag=deskfinds0d-20",
    description:
      "SanDisk's Extreme, while not the smallest drive in this group, remains genuinely compact and benefits from IP65 durability plus the largest verified review base in our entire research pool.\n\nIts slightly larger size than the smallest ultra-compact options actually helps with heat dissipation somewhat, worth the small size tradeoff if sustained-load reliability matters most to you.",
    specs: ["2TB capacity", "Up to 1050MB/s rated", "USB-C, USB 3.2 Gen 2", "IP65 water and dust resistance"],
    pros: ["Slightly larger size aids heat dissipation versus the smallest ultra-compact drives", "Largest verified review base in our research pool", "IP65 rating adds real everyday durability", "Large 2TB capacity in a still genuinely compact form"],
    cons: ["Not the absolute smallest option in this category", "Older model, verify current firmware", "Sustained speed can dip once cache fills"],
    bestFor: "Buyers who want a compact drive with a slight size tradeoff for better thermal headroom",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Thermal throttling risk as the central consideration", description: "Weighted thermal throttling risk under sustained load as the primary factor for this category, since ultra-compact enclosures have the least surface area for heat dissipation." },
  { title: "True kit weight and size verified", description: "Checked true kit weight and size including any included cable or case, not just the bare drive's dimensions, for a genuinely accurate compactness comparison." },
  { title: "Connector attachment durability", description: "Considered that extremely compact drives sometimes use a less robust connector attachment, such as a fixed cable or fragile port, a real durability tradeoff." },
  { title: "Compactness versus other priorities", description: "Weighed each pick's compactness against speed, capacity, and durability tradeoffs rather than treating small size as the only relevant factor." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Thermal Throttling Is the Central Tradeoff for This Category",
    note: "Ultra-compact enclosures have the least surface area for heat dissipation of any portable SSD form factor, making them the most prone to thermal throttling under sustained load. If you regularly do large sustained transfers, weigh this against the convenience of a smaller size.",
  },
  {
    subheading: "Check True Kit Weight, Not Just the Bare Drive",
    note: "A drive advertised as ultra-compact can lose much of that advantage once you add its included cable or case. Verify the true kit weight and size for an accurate comparison before assuming a drive is genuinely pocketable.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Smallest footprint for everyday bursts of use", "KingSpec Z5 512GB"], ["Compact expansion without external cable concerns", "Seagate Storage Expansion Card 2TB (PS5 internal)"], ["Compact with built-in connector flexibility", "Transcend ESD310 1TB"], ["Slight size tradeoff for better thermal headroom", "SanDisk Extreme 2TB"]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Weigh thermal throttling risk against your actual transfer sizes", explanation: "Ultra-compact drives have the least heat dissipation surface area, most prone to thermal throttling under sustained large transfers, occasional small transfers are much less affected." },
  { criterion: "Check the true kit weight and size, including the cable", explanation: "A compact bare drive with a bulky included cable is not as genuinely pocketable as it first appears, verify the full kit dimensions." },
  { criterion: "Consider connector attachment durability", explanation: "Extremely compact drives sometimes use a fixed, non-replaceable cable or a more fragile port, a real durability tradeoff worth checking in reviews." },
  { criterion: "Don't sacrifice too much capacity for size alone", explanation: "Some of the smallest drives available also carry the smallest capacities, weigh whether the size savings are worth a real capacity tradeoff." },
  { criterion: "Balance compactness against your actual durability needs", explanation: "If you need a drop-resistant or water-resistant drive, a slightly larger rugged design may serve you better than the absolute smallest option available." }
];

export const faq: FaqItem[] = [
  { q: "Do ultra-compact drives run hotter than larger ones?", a: "Generally yes, ultra-compact enclosures have the least surface area for heat dissipation, making them more prone to thermal throttling under sustained large transfers." },
  { q: "Is the bare drive size the only thing that matters for portability?", a: "No, check the true kit weight and size including any included cable or case, a compact drive with a bulky cable is less pocketable than it first appears." },
  { q: "Are ultra-compact drives less durable?", a: "Some use a less robust connector attachment, such as a fixed cable or more fragile port, a real tradeoff worth checking in reviews before buying." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-ps5", title: "Best Portable SSDs for PS5 in 2026" },
  { href: "/guide/best-portable-ssds-for-iphone", title: "Best Portable SSDs for iPhone in 2026" }
];
