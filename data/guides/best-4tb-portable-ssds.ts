export const guideSlug = "best-4tb-portable-ssds";
export const guideTitle = "Best High-Capacity Portable SSDs in 2026";
export const metaTitle = "Best High-Capacity Portable SSDs (2026)";
export const metaDescription = "Verified 4TB-specific listings were limited at research time, so we cover the highest-capacity genuinely verified 2TB portable SSDs instead.";
export const mainKeyword = "best 4tb portable ssd";
export const introParagraphs = [
  "We want to be upfront here: genuinely verified 4TB portable SSD listings were limited at the time of our research, so rather than force-fit a product into a 4TB claim it does not meet, we are presenting the highest-capacity portable SSDs we could actually verify, which top out at 2TB.",
  "If you specifically need 4TB or more in a single portable drive, check current Amazon listings directly before buying, since capacity availability shifts and a genuinely verified 4TB option may exist by the time you are shopping. The three drives below are strong picks if 2TB meets your actual storage need.",
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
    id: "b0dr381n86-p1",
    rank: 1,
    badge: "Best High-Capacity Pick with Thunderbolt Speed",
    name: "Corsair EX400U 2TB USB4 Portable External Type-C SSD - Up to 4,000MB/s Read, 3,600MB/s Write, Thunderbolt 4, MagSafe, Includes 40Gbps Cable - Gray",
    price: "$399.99",
    rating: "4.1 stars from Amazon ratings",
    reviews: "382 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21F-0rmbcOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DR381N86?tag=deskfinds0d-20",
    description:
      "Corsair's EX400U 2TB is the highest genuinely verified capacity in our pool that also offers Thunderbolt 4 compatible USB4 speed, rated up to 4000MB/s read.\n\nMagSafe compatibility and an included properly rated cable make it a strong pick for buyers who want both real capacity and a fast interface in one drive.",
    specs: ["2TB capacity (highest verified in this pool)", "Up to 4000MB/s read rated", "USB4, Thunderbolt 4 compatible", "MagSafe compatible"],
    pros: ["Highest genuinely verified capacity with top-tier speed", "MagSafe compatibility adds real convenience", "Includes a properly rated 40Gbps cable", "Strong ceiling for demanding transfers"],
    cons: ["Not a true 4TB drive, verify your actual capacity need", "Needs a USB4 or Thunderbolt host port to matter", "More moderate 4.1-star rating, worth checking current reviews"],
    bestFor: "Buyers who want the highest genuinely verified capacity paired with fast Thunderbolt speed",
  },
  {
    id: "b09vlhr4jc-p2",
    rank: 2,
    badge: "Best High-Capacity Pick for Reliability",
    name: "Samsung T7 Shield Portable SSD 2TB, USB 3.2 Gen 2, Up to 1,050 MB/s",
    price: "$399.75",
    rating: "4.7 stars from Amazon ratings",
    reviews: "16,380 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21mARCvUWxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VLHR4JC?tag=deskfinds0d-20",
    description:
      "Samsung's T7 Shield 2TB offers the same rugged, reliable platform as its 1TB sibling scaled up to the highest capacity Samsung offers in this line.\n\nIts large review base and rugged shell make it a dependable choice for buyers who want proven reliability at the top of the verified capacity range.",
    specs: ["2TB capacity (highest verified in this pool)", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Rugged shield"],
    pros: ["Large, well-established review base", "Rugged shell adds real everyday protection", "Reliable platform at the top of verified capacity", "Realistic USB 3.2 Gen 2 speed ceiling"],
    cons: ["Not a true 4TB drive, verify your actual capacity need", "1050MB/s ceiling trails the USB4 option here", "Premium price versus USB 3.0 alternatives"],
    bestFor: "Buyers who want proven reliability at the highest genuinely verified capacity",
  },
  {
    id: "b08y1q2ksz-p3",
    rank: 3,
    badge: "Best High-Capacity Budget Pick",
    name: "Seagate 2TB Game Drive for Xbox, USB 3.0 (STKX2000400)",
    price: "$119.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "20,657 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31+UCQHBazL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08Y1Q2KSZ?tag=deskfinds0d-20",
    description:
      "Seagate's Game Drive 2TB delivers the same high verified capacity at a noticeably lower price than the Thunderbolt or shielded alternatives.\n\nFor buyers whose priority is simply maximizing capacity per dollar rather than chasing top speed, this is the most economical way to get to 2TB.",
    specs: ["2TB capacity (highest verified in this pool)", "USB 3.0", "Purpose-built for game libraries", "Large review base"],
    pros: ["Best price per gigabyte at the highest verified capacity", "Large, consistent review base", "Simple plug-and-play setup", "Good fit for large game or media libraries"],
    cons: ["Not a true 4TB drive, verify your actual capacity need", "USB 3.0 caps speed below newer drives", "Bulkier design than slim ultraportables"],
    bestFor: "Budget-conscious buyers who want maximum verified capacity per dollar",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Honest capacity verification", description: "Verified each drive's actual advertised capacity rather than assuming a 4TB claim, and were transparent when genuinely verified 4TB listings were not available." },
  { title: "Highest verified capacity prioritized", description: "Selected the highest-capacity drives we could genuinely verify from real product listings, currently topping out at 2TB in our research pool." },
  { title: "Speed tier at high capacity", description: "Compared interface speed tiers across the highest-capacity verified drives, since a slower bridge chip matters more on large libraries." },
  { title: "Price per gigabyte at scale", description: "Compared price per gigabyte specifically among the highest-capacity options to judge real value for buyers prioritizing storage volume." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Verify Actual 4TB Availability Directly",
    note: "Genuinely verified 4TB portable SSD listings were limited when we researched this guide. Check current Amazon listings directly if you specifically need 4TB or more, and be wary of unusually cheap 4TB listings, which are a common target for counterfeit fake-capacity firmware.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Highest verified capacity plus fast Thunderbolt speed", "Corsair EX400U 2TB"], ["Highest verified capacity with proven reliability", "Samsung T7 Shield 2TB"], ["Highest verified capacity at the lowest price", "Seagate Game Drive 2TB"]] },
  },
  {
    subheading: "Consider Two Drives Instead of One Large Drive",
    note: "If you need more than 2TB of genuinely verified capacity today, splitting your library across two verified 2TB drives is often more reliable and better value than chasing an unverified high-capacity listing.",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify capacity claims before buying, especially above 2TB", explanation: "High-capacity portable SSD listings above 2TB are a common target for counterfeit fake-capacity firmware, verify the seller and check formatted capacity immediately on arrival." },
  { criterion: "Check current listings if you specifically need 4TB", explanation: "Genuinely verified 4TB options were limited at research time, search current Amazon listings directly and read verified buyer feedback carefully." },
  { criterion: "Weigh two drives against one high-capacity drive", explanation: "Splitting storage across two verified 2TB drives can be more reliable and better value than an unverified higher-capacity listing." },
  { criterion: "Match interface speed to your real workload", explanation: "A high-capacity drive with a slow interface will bottleneck large library transfers regardless of total storage." },
  { criterion: "Budget for real usable space", explanation: "Even a verified 2TB drive reads closer to 1.8TB after formatting overhead, plan storage needs around the real figure." }
];

export const faq: FaqItem[] = [
  { q: "Do any of these drives actually offer 4TB?", a: "No, genuinely verified 4TB listings were limited when we researched this guide. These are the highest-capacity portable SSDs we could verify, currently 2TB." },
  { q: "Should I buy a cheap 4TB listing I found elsewhere?", a: "Be cautious. High-capacity listings are a common target for counterfeit fake-capacity firmware, verify the seller and check real buyer feedback first." },
  { q: "Is splitting storage across two 2TB drives a good alternative?", a: "Yes, for many buyers two verified 2TB drives are more reliable and better value than an unverified high-capacity listing." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-2tb-portable-ssds", title: "Best 2TB Portable SSDs in 2026" },
  { href: "/guide/best-thunderbolt-portable-ssds", title: "Best Thunderbolt Portable SSDs in 2026" }
];
