export const guideSlug = "best-512gb-portable-ssds";
export const guideTitle = "3 Best 512GB Portable SSDs in 2026";
export const metaTitle = "Best 512GB Portable SSDs in 2026";
export const metaDescription = "The genuinely verified 512GB pick, plus two nearby compact-budget options, evaluated on real capacity, speed, and price per gigabyte.";
export const mainKeyword = "best 512gb portable ssd";
export const introParagraphs = [
  "Only one drive in our verified research pool is a genuine 512GB model, so this guide leads with that pick and rounds out the list with two closely priced compact and budget options whose actual capacities, mostly 1TB, are clearly noted rather than implied to be 512GB.",
  "If you specifically need 512GB and not more, our lead pick is the only genuinely verified match, the other two are included as fair comparison points for buyers deciding whether the extra capacity of 1TB is worth a similar price.",
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
    badge: "Only Genuine 512GB Pick",
    name: "KingSpec Z5 512GB External SSD - 2100MB/s, Portable Solid State Hard Drives with RGB Light, Zinc Alloy Case, USB 3.2 Gen2x2 Interface",
    price: "$88.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "436 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31a33qlUGuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLV9GG54?tag=deskfinds0d-20",
    description:
      "The KingSpec Z5 is the one drive in our verified research pool that is genuinely 512GB, rated up to 2100MB/s over USB 3.2 Gen2x2, a fast rating for a compact budget drive.\n\nIts zinc alloy case and RGB accent are a style choice for gaming setups rather than a durability claim, and the price is the lowest in this group.",
    specs: ["512GB capacity (genuinely verified)", "Up to 2100MB/s rated", "USB 3.2 Gen2x2", "Zinc alloy case with RGB lighting"],
    pros: ["The only genuinely verified 512GB drive in our research pool", "High rated speed for a compact budget drive", "Lowest price in this comparison", "Distinctive design for gaming setups"],
    cons: ["Smaller review base than mainstream brands", "RGB and case material are cosmetic, not durability features", "512GB may feel tight for larger media libraries"],
    bestFor: "Buyers who specifically want a genuine 512GB drive",
  },
  {
    id: "b0bgl4shy8-p2",
    rank: 2,
    badge: "Nearby 1TB Comparison Pick",
    name: "SSK Portable SSD 1TB External Solid State Hard Drive USB C Up to 1050MB/s",
    price: "$143.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "3,542 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31PngdJb7FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGL4SHY8?tag=deskfinds0d-20",
    description:
      "SSK's Portable SSD is actually 1TB rather than 512GB, included here as a direct price comparison point, rated up to 1050MB/s over USB-C.\n\nFor a similar or only slightly higher price than a 512GB drive, this shows buyers exactly what doubling their capacity costs in this budget tier.",
    specs: ["1TB capacity (not 512GB, included for comparison)", "Up to 1050MB/s rated", "USB-C", "Budget price"],
    pros: ["Shows the real price gap between 512GB and double the capacity", "Solid USB 3.2 Gen 2 speed rating", "Compact, lightweight design", "Good value if 1TB fits your budget similarly"],
    cons: ["Not a 512GB drive, confirm your actual capacity need", "Smaller review base than top mainstream brands", "No official IP rating"],
    bestFor: "Buyers comparing whether 1TB is worth a similar price to 512GB",
  },
  {
    id: "b0c5jq68fy-p3",
    rank: 3,
    badge: "Nearby 1TB Pick with Established Reliability",
    name: "SANDISK 1TB Portable SSD - Up to 800MB/s, USB-C, USB 3.2 Gen 2, Updated Firmware - SDSSDE30-1T00-G26",
    price: "$164.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "10,968 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5JQ68FY?tag=deskfinds0d-20",
    description:
      "SanDisk's standard Portable SSD is also genuinely 1TB, not 512GB, but its established brand reputation and larger review base add reliability confidence at a similarly accessible price.\n\nRated up to 800MB/s, it is a fair alternative for buyers who value a longer track record over an exact 512GB capacity match.",
    specs: ["1TB capacity (not 512GB, included for comparison)", "Up to 800MB/s rated", "USB-C, USB 3.2 Gen 2", "Established brand reliability"],
    pros: ["Larger, more established review base than niche 512GB brands", "Doubles the capacity of 512GB at a comparable price", "Reliable brand with a long track record", "Good backup and everyday-file companion"],
    cons: ["Not a 512GB drive, confirm your actual capacity need", "800MB/s ceiling trails the KingSpec Z5's rated speed", "No official IP rating"],
    bestFor: "Buyers who want established brand reliability over an exact 512GB match",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine 512GB verification", description: "Confirmed the lead pick is genuinely 512GB and were explicit that the comparison picks are actually 1TB." },
  { title: "Fair price-per-gigabyte comparison", description: "Included nearby 1TB options specifically to give buyers an honest comparison of what more capacity costs at this budget tier." },
  { title: "Speed and interface verification", description: "Compared rated speed and interface across all three picks to help buyers weigh capacity against performance." },
  { title: "Review base and brand track record", description: "Weighed review base size and brand reputation as a real reliability signal, particularly for the newer 512GB brand." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Only One Pick Here Is Genuinely 512GB",
    note: "The KingSpec Z5 is the sole genuinely verified 512GB drive in this guide. The other two picks are actually 1TB, included specifically so you can compare whether the extra capacity is worth a similar price.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Genuine 512GB capacity", "KingSpec Z5 512GB"], ["Double the capacity at a similar price, fast USB-C", "SSK Portable SSD 1TB"], ["Double the capacity with established brand reliability", "SanDisk Portable SSD 1TB"]] },
  },
  {
    subheading: "When 512GB Is Genuinely Enough",
    note: "512GB comfortably covers a moderate photo library, documents, and a handful of installed games or applications. If you are archiving large video files or a big modern game library, the 1TB comparison picks are worth the extra cost.",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm you are buying a genuine 512GB drive, not a mislabeled one", explanation: "Only one pick in this guide is truly 512GB, check the actual listing capacity carefully before buying any similarly priced drive." },
  { criterion: "Compare the real price gap to 1TB before deciding", explanation: "At this budget tier the price difference between 512GB and 1TB is often small enough that doubling capacity is worth it for many buyers." },
  { criterion: "Check for DRAM-less controllers at this budget tier", explanation: "Budget drives around this capacity and price are more likely to use DRAM-less controllers, which can slow down under multiple simultaneous file operations." },
  { criterion: "Verify seller legitimacy at low price points", explanation: "Unusually cheap listings carry elevated counterfeit fake-capacity risk, buy from verified sellers and check formatted capacity on arrival." },
  { criterion: "Match capacity to your actual library size", explanation: "512GB suits moderate photo and document libraries well, but heavier video or game libraries will outgrow it faster than expected." }
];

export const faq: FaqItem[] = [
  { q: "Which pick in this guide is actually 512GB?", a: "Only the KingSpec Z5. The other two picks are genuinely 1TB, included as fair price comparisons." },
  { q: "Is it worth paying a little more for 1TB instead of 512GB?", a: "Often yes, at this budget tier the price gap is frequently small enough that doubling your capacity is a good value trade." },
  { q: "Will 512GB be enough for me?", a: "For documents, photos, and a moderate number of installed applications, yes. Larger video or game libraries will fill it faster than expected." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-budget-portable-ssds", title: "Best Budget Portable SSDs in 2026" },
  { href: "/guide/best-ultra-compact-portable-ssds", title: "Best Ultra-Compact Portable SSDs in 2026" }
];
