export const guideSlug = "best-digital-notebooks-with-expandable-storage";
export const guideTitle = "5 Best Digital Notebooks with Expandable Storage in 2026";
export const metaTitle = "Best Digital Notebooks with Expandable Storage (2026)";
export const metaDescription =
  "Honest disclosure: true removable-card expandable storage is rare on premium E Ink notebooks. We ranked by actual fixed storage tier instead, since that's the real lever available on most current devices.";
export const mainKeyword = "digital notebook expandable storage";
export const introParagraphs = [
  "We need to correct an assumption here: none of the leading E Ink notebooks — Kindle Scribe, reMarkable, XPPen, BOOX — currently ship with a user-accessible microSD or removable storage slot as a standard feature across the board. What buyers actually control is which fixed storage tier they purchase.",
  "So instead of a false expandable-storage roundup, we ranked these by their largest available fixed storage tier, since that's the real lever for anyone who needs more room for notes, PDFs, or books.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0fc1vjjfp-storagedn",
    rank: 1,
    badge: "Largest Fixed Storage",
    name: "Amazon Kindle Scribe Colorsoft 64GB",
    price: "$679.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=deskfinds0d-20",
    description: "64GB is the largest fixed capacity in this comparison, not expandable via removable card but the most storage you can buy in a single configuration.",
    specs: ["64GB fixed storage", "Color E Ink display", "No removable card slot"],
    pros: ["Largest fixed storage tier in this comparison"],
    cons: ["Not truly expandable — capacity is fixed at purchase, no removable card slot"],
    bestFor: "Buyers who want maximum available storage and understand it's a fixed tier, not expandable.",
  },
  {
    id: "b0fr4kxmkf-storagedn",
    rank: 2,
    badge: "Best Android-Based Storage Flexibility",
    name: "BOOX Note Air 5 C, 6GB RAM / 64GB Storage",
    price: "$529.99",
    rating: "4.3",
    reviews: "310",
    imageUrl: "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4KXMKF?tag=deskfinds0d-20",
    description: "64GB fixed storage matched with Android's cloud-storage app flexibility — you can offload files to cloud services more easily than on closed ecosystems, effectively extending usable capacity even without a physical expansion slot.",
    specs: ["64GB fixed storage, 6GB RAM", "Runs Android for cloud storage app flexibility", "310 reviews at 4.3 stars"],
    pros: ["Same top-tier fixed storage as the Kindle Scribe Colorsoft", "Android cloud app flexibility extends practical usable capacity"],
    cons: ["Still no physical removable card slot"],
    bestFor: "Buyers who want to supplement fixed storage with flexible cloud app options via Android.",
  },
  {
    id: "b0d4jkm1s7-storagedn",
    rank: 3,
    badge: "Best Value High-Capacity Option",
    name: "Like-New Amazon Kindle Scribe (64GB)",
    price: "$323.99",
    rating: "4.3",
    reviews: "425",
    imageUrl: "https://m.media-amazon.com/images/I/31vXCSmH+ML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D4JKM1S7?tag=deskfinds0d-20",
    description: "Same 64GB fixed capacity as the new Colorsoft above, in Like-New refurbished condition at less than half the price.",
    specs: ["64GB fixed storage, Like-New condition", "425 reviews at 4.3 stars"],
    pros: ["Same top storage tier as the new Colorsoft at a fraction of the price"],
    cons: ["Like-New condition means light cosmetic wear is possible"],
    bestFor: "Budget-focused buyers who want maximum storage without paying full price.",
  },
  {
    id: "b0cz9vfqp-storagedn",
    rank: 4,
    badge: "Lower Storage, New Condition",
    name: "Amazon Kindle Scribe (16GB, New)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=deskfinds0d-20",
    description: "A quarter of the storage of the top picks above at a higher price than the refurbished 64GB option — included so buyers can see this isn't the best value if storage is the priority.",
    specs: ["16GB fixed storage", "New condition, full warranty"],
    pros: ["Full manufacturer warranty as a new unit"],
    cons: ["Least storage of any pick here, at a higher price than the refurbished 64GB option"],
    bestFor: "Buyers who specifically want a new-unit warranty and don't need maximum storage.",
  },
  {
    id: "b08hdl3xjr-storagedn",
    rank: 5,
    badge: "Most Proven, Fixed Storage Tier",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "The largest, highest-rated review base of any device here, though storage is a fixed tier without a removable expansion option, same as the rest of the lineup.",
    specs: ["Fixed storage tier — check current spec", "Marker Plus stylus included", "1,354 reviews at 4.4 stars"],
    pros: ["Largest, most proven review base in this comparison"],
    cons: ["No removable storage expansion, same limitation as the rest of the lineup"],
    bestFor: "Buyers who prioritize the most field-tested device and can work within its fixed storage tier.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Honest disclosure of no removable storage", description: "We verified no current leading E Ink notebook ships with a user-accessible microSD or removable card slot as standard, and said so directly." },
  { title: "Fixed storage tier as the real lever", description: "We ranked by the largest available fixed storage configuration for each product line, since that's what buyers actually control." },
  { title: "Price against storage tier", description: "We compared refurbished versus new pricing at the same storage tier, since the value gap can be significant." },
  { title: "Cloud/Android flexibility as a partial substitute", description: "We noted where Android-based devices offer more flexible cloud storage app options that can extend practical usable capacity." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "There Is No True Removable-Card Expansion on These Devices",
    note: "\"Expandable storage\" in this category currently means choosing a larger fixed capacity at purchase, not adding a memory card later. Decide your storage needs before buying, since you generally can't add more afterward.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Understand storage is fixed at purchase, not truly expandable", explanation: "None of the leading devices here have a standard removable card slot. Choose your storage tier carefully at purchase time." },
  { criterion: "Compare refurbished against new at the same storage tier", explanation: "The refurbished 64GB Kindle Scribe costs less than half the new Colorsoft price for the same fixed capacity." },
  { criterion: "Consider Android for cloud-storage flexibility", explanation: "The BOOX Note Air 5 C's Android base allows more flexible cloud app options that can supplement fixed on-device storage." },
  { criterion: "Estimate your actual storage needs before buying", explanation: "Handwritten notes use little storage; a large PDF or book library fills capacity much faster." },
  { criterion: "Don't assume \"expandable\" claims without verifying the current listing", explanation: "Some retailer listings use \"expandable\" loosely — confirm directly whether a device has a physical card slot before assuming it does." },
];

export const faq: FaqItem[] = [
  { q: "Do any digital notebooks have a removable microSD card slot?", a: "Not as a standard feature on the leading current devices we checked — Kindle Scribe, reMarkable, XPPen, and BOOX all use fixed internal storage." },
  { q: "What's the best way to get more storage?", a: "Choose the largest fixed storage tier at purchase, since you generally can't add capacity afterward. The 64GB configurations are the largest we found." },
  { q: "Is refurbished a good way to get more storage for less?", a: "Yes — the Like-New 64GB Kindle Scribe costs less than half the price of the new Colorsoft for the same storage tier." },
  { q: "Does Android help with storage limitations?", a: "Indirectly — the BOOX Note Air 5 C's Android base allows more flexible cloud storage app options, which can supplement fixed on-device capacity." },
  { q: "How much storage do I actually need?", a: "Handwritten notes use very little space. If you plan to store a large PDF or book library, prioritize the 64GB tier over 16GB or 32GB options." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-for-pdfs", title: "Best Digital Notebooks for PDFs (2026)" },
  { href: "/guide/best-refurbished-digital-notebooks", title: "Best Refurbished Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
