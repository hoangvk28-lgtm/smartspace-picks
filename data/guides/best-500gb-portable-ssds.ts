export const guideSlug = "best-500gb-portable-ssds";
export const guideTitle = "3 Best Compact-Capacity Portable SSDs in 2026";
export const metaTitle = "Best Compact-Capacity Portable SSDs";
export const metaDescription = "3 compact-capacity portable SSDs we evaluated, with honest capacity notes since true 500GB listings were limited in our verified research pool.";
export const mainKeyword = "best 500gb portable ssd";
export const introParagraphs = [
  "We want to be upfront about capacity here: our verified research pool did not include a drive that is exactly 500GB. The closest genuine match is a 512GB model, and we are also including two well-reviewed 1TB drives as nearby budget-tier alternatives, with actual capacities noted clearly in each description.",
  "If 500GB specifically, not 512GB or 1TB, is a hard requirement for your use case, treat that as a reason to check current listings directly rather than assume any drive in this guide hits that exact number.",
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
    badge: "Closest Genuine Match to 500GB",
    name: "KingSpec Z5 512GB External SSD - 2100MB/s, Portable Solid State Hard Drives with RGB Light, Zinc Alloy Case, USB 3.2 Gen2x2 Interface",
    price: "$88.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "436 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31a33qlUGuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLV9GG54?tag=deskfinds0d-20",
    description:
      "The KingSpec Z5 is genuinely 512GB, the closest real match to a 500GB capacity target in our verified pool, rated up to 2100MB/s over USB 3.2 Gen2x2.\n\nIts zinc alloy case and RGB lighting are aimed at budget gaming buyers, and the price is the lowest in this group, making it a reasonable pick if 512GB rather than exactly 500GB works for you.",
    specs: ["512GB capacity (closest verified match to 500GB)", "Up to 2100MB/s rated", "USB 3.2 Gen2x2", "Zinc alloy case with RGB lighting"],
    pros: ["Genuinely closest capacity match to 500GB in our verified pool", "High rated speed for the price tier", "Lowest price in this group", "Distinctive RGB design for gaming setups"],
    cons: ["512GB, not exactly 500GB, confirm this works for your need", "Smaller review base than mainstream brands", "RGB lighting and case material are a style choice, not a durability upgrade"],
    bestFor: "Buyers who specifically want the closest genuine match to a 500GB drive",
  },
  {
    id: "b0bgl4shy8-p2",
    rank: 2,
    badge: "Nearby Budget Option, Actually 1TB",
    name: "SSK Portable SSD 1TB External Solid State Hard Drive USB C Up to 1050MB/s",
    price: "$143.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "3,542 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31PngdJb7FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGL4SHY8?tag=deskfinds0d-20",
    description:
      "SSK's Portable SSD is actually a 1TB drive, not 500GB, but its low price puts it in similar budget territory, rated up to 1050MB/s over USB-C.\n\nWe are including it as a nearby-tier option for buyers who started out looking for something small and affordable and would be equally happy with double the capacity at a similar price point.",
    specs: ["1TB capacity (not 500GB, included as a nearby budget option)", "Up to 1050MB/s rated", "USB-C", "Budget price"],
    pros: ["Actually double the capacity of a 500GB drive at a similar budget price", "Solid USB 3.2 Gen 2 speed rating", "Compact, lightweight design", "Good value if 1TB rather than 500GB works for you"],
    cons: ["Not a 500GB drive, be clear on your actual capacity need", "Smaller review base than the top mainstream brands", "No official IP rating"],
    bestFor: "Buyers open to 1TB at a budget price instead of exactly 500GB",
  },
  {
    id: "b0c5jq68fy-p3",
    rank: 3,
    badge: "Nearby Budget Option with Broader Reliability",
    name: "SANDISK 1TB Portable SSD - Up to 800MB/s, USB-C, USB 3.2 Gen 2, Updated Firmware - SDSSDE30-1T00-G26",
    price: "$164.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "10,968 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5JQ68FY?tag=deskfinds0d-20",
    description:
      "SanDisk's standard Portable SSD is also genuinely 1TB rather than 500GB, but its larger review base and established brand track record add real reliability confidence.\n\nRated up to 800MB/s, it trades some speed for a lower price and a more proven reputation than smaller, newer brands at the true 512GB tier.",
    specs: ["1TB capacity (not 500GB, included as a nearby budget option)", "Up to 800MB/s rated", "USB-C, USB 3.2 Gen 2", "Established brand reliability"],
    pros: ["Larger, more established review base than niche 512GB brands", "Actually double the capacity of 500GB at a competitive price", "Reliable brand with a long track record", "Good backup and everyday-file companion"],
    cons: ["Not a 500GB drive, be clear on your actual capacity need", "800MB/s ceiling trails the KingSpec Z5's rated speed", "No official IP rating"],
    bestFor: "Buyers who want established brand reliability over an exact 500GB match",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Honest capacity disclosure", description: "Verified each drive's actual capacity and were explicit when a pick is 512GB or 1TB rather than exactly 500GB." },
  { title: "Closest genuine match prioritized", description: "Led with the drive genuinely closest to 500GB in our verified pool rather than stretching a 1TB drive's marketing to fit." },
  { title: "Price-tier consistency", description: "Confirmed each pick sits in genuine budget territory consistent with what a 500GB-seeking buyer is typically shopping for." },
  { title: "Speed and interface verification", description: "Compared rated speed and interface across the group to help buyers weigh capacity against real transfer performance." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Be Clear on 500GB vs 512GB vs 1TB",
    note: "No drive in our verified pool is exactly 500GB. 512GB is the closest genuine match, while two well-reviewed 1TB drives are included as nearby budget-tier alternatives. Confirm which capacity actually matches your need before buying.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Closest genuine match to 500GB", "KingSpec Z5 512GB"], ["Budget 1TB with fast USB-C speed", "SSK Portable SSD 1TB"], ["Budget 1TB with established brand reliability", "SanDisk Portable SSD 1TB"]] },
  },
  {
    subheading: "When to Just Buy 1TB Instead",
    note: "If the price difference between a true 512GB drive and a 1TB drive is small, as it often is at this budget tier, the extra headroom of 1TB is usually worth the small premium over chasing an exact 500GB match.",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the actual advertised capacity before buying", explanation: "Very few portable SSDs are marketed as exactly 500GB, most nearby options are genuinely 512GB or 1TB, check the listing carefully." },
  { criterion: "Weigh the small price gap between 512GB and 1TB", explanation: "At this budget tier the price difference to double your capacity is often modest, making 1TB a better long-term value in many cases." },
  { criterion: "Check NAND type at the budget tier", explanation: "Budget-tier drives at this capacity are more likely to use DRAM-less controllers, which can reduce performance under multiple simultaneous file operations." },
  { criterion: "Verify seller legitimacy at low price points", explanation: "Unusually cheap listings at any capacity carry elevated risk of counterfeit fake-capacity firmware, buy from verified sellers." },
  { criterion: "Match rated speed to your actual use case", explanation: "For everyday document and photo transfers, the speed difference between these picks rarely matters in daily use." }
];

export const faq: FaqItem[] = [
  { q: "Is there a drive that is exactly 500GB?", a: "Not in our verified research pool. 512GB is the closest genuine match, and two 1TB drives are included as nearby budget alternatives." },
  { q: "Should I just buy 1TB instead of 512GB?", a: "If the price gap is small, yes, most budget buyers get better long-term value from the extra headroom of 1TB." },
  { q: "Are budget drives at this tier reliable?", a: "Reasonably, for everyday use, though budget-tier drives are more likely to use DRAM-less controllers that can slow down under heavy multi-file operations." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-budget-portable-ssds", title: "Best Budget Portable SSDs in 2026" },
  { href: "/guide/best-1tb-portable-ssds", title: "Best 1TB Portable SSDs in 2026" }
];
