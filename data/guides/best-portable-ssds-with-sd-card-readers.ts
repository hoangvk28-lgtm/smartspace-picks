export const guideSlug = "best-portable-ssds-with-sd-card-readers";
export const guideTitle = "Best Portable SSDs (and When to Add a Card Reader)";
export const metaTitle = "Best Portable SSDs and Card Readers";
export const metaDescription = "Verified SD card reader combo SSDs were limited at research time, so we cover 3 standalone portable SSDs and when to add a separate reader.";
export const mainKeyword = "portable ssd with sd card reader";
export const introParagraphs = [
  "We want to be upfront: our verified research pool did not include a genuine SD-card-reader-and-SSD combo drive, that specific product category had limited verified options at the time of writing, so we are not going to claim any of the drives below have a built-in card reader when they do not.",
  "Instead, this guide features three well-reviewed standalone portable SSDs, and practical advice for pairing one with a separate dedicated card reader if you cannot find a genuine combo unit that meets your needs.",
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
    id: "b08hn37xc1-p1",
    rank: 1,
    badge: "Best Standalone Pick to Pair with a Card Reader",
    name: "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware - SDSSDE61-2T00-G25",
    price: "$299.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "91,365 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HN37XC1?tag=deskfinds0d-20",
    description:
      "SanDisk's Extreme delivers reliable 1050MB/s speed with IP65 durability, a strong standalone destination drive for photos and video offloaded from a separate SD card reader.\n\nThis drive does not include a built-in SD card slot, pair it with a dedicated card reader if your workflow involves regularly offloading camera media.",
    specs: ["2TB capacity", "Up to 1050MB/s rated", "USB-C, USB 3.2 Gen 2", "IP65 water and dust resistance", "No built-in SD card reader"],
    pros: ["Reliable destination drive for offloaded camera media", "IP65 rating suits field use alongside a card reader", "Large 2TB capacity for extensive photo and video libraries", "Well-established, large review base"],
    cons: ["No built-in SD card reader, a separate reader is required", "Older model, verify current firmware", "Sustained speed can dip once cache fills"],
    bestFor: "Photographers and videographers who want a reliable destination drive paired with a separate card reader",
  },
  {
    id: "b0874xn4d8-p2",
    rank: 2,
    badge: "Best Slim Standalone Pick",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "Samsung's T7 offers a slim, lightweight standalone SSD well suited to a minimal field kit alongside a compact separate card reader.\n\nLike the Extreme above, this drive does not include an integrated card slot, budget for a small dedicated reader if you need one.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Slim metal body", "No built-in SD card reader"],
    pros: ["Slim design pairs well with a compact separate card reader in a field kit", "Reliable, widely reviewed platform", "Good everyday speed for offloaded media", "Comes in multiple colors"],
    cons: ["No built-in SD card reader, a separate reader is required", "No official IP rating", "1TB may be limiting for large video libraries"],
    bestFor: "Buyers who want the slimmest possible standalone destination drive",
  },
  {
    id: "b0c3b32h9m-p3",
    rank: 3,
    badge: "Best Dual-Connector Standalone Pick",
    name: "Transcend ESD310 1TB External SSD, Up to 1,050MB/s, Dual USB Drive, 2-in-1 Type C & A, USB 3.2 Gen2 Portable SSD",
    price: "$239.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "2,340 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C3B32H9M?tag=deskfinds0d-20",
    description:
      "Transcend's ESD310 includes both USB-C and USB-A connectors, useful flexibility when your separate card reader and computer use different connector types.\n\nThis drive still does not include a built-in SD slot itself, but the dual-connector design reduces the number of adapters you need in a field kit overall.",
    specs: ["1TB capacity", "Dual USB-C and USB-A connectors", "Up to 1050MB/s rated", "No built-in SD card reader"],
    pros: ["Dual connectors reduce adapter clutter in a field kit", "Solid everyday speed for offloaded camera media", "Compact, travel-friendly design", "Good value for the dual-connector convenience"],
    cons: ["No built-in SD card reader, a separate reader is still required", "Smaller review base than mainstream single-connector drives", "USB 3.2 Gen2 tier, not the fastest available"],
    bestFor: "Buyers who want connector flexibility across their card reader and other devices",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Honest disclosure of a limited product category", description: "Verified that genuine SD-card-reader-and-SSD combo drives had limited verified options in our research pool, and disclosed this clearly rather than mislabeling standalone drives." },
  { title: "Standalone drive quality as a destination for offloaded media", description: "Evaluated each standalone pick specifically as a destination drive for media offloaded via a separate card reader." },
  { title: "Connector flexibility for field kits", description: "Weighed dual-connector designs as a genuine convenience for buyers assembling a field kit with a separate card reader." },
  { title: "Durability for field use", description: "Compared IP ratings and build quality relevant to photographers and videographers working in the field alongside a card reader." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why This Guide Doesn't Feature a True Combo Drive",
    note: "Genuine SD-card-reader-and-SSD combo drives had limited verified options in our research pool at the time of writing. Rather than mislabel a standalone drive as having a card reader, we are recommending strong standalone drives and practical advice on pairing one with a separate reader.",
  },
  {
    subheading: "Choosing a Separate Card Reader",
    cards: [{ label: "Match reader speed to your card type", text: "A UHS-II rated reader is necessary to get full speed from UHS-II SD cards, a cheaper UHS-I reader will bottleneck faster cards." }, { label: "Consider a multi-format reader", text: "If you shoot on both SD and CFexpress or microSD, a multi-format reader reduces the number of separate devices you carry." }, { label: "Check the reader's own connector matches your SSD and computer", text: "Match USB-C to USB-C where possible to avoid needing extra adapters in your field kit." }],
  },
  {
    subheading: "Match Your Priority to a Specific Standalone Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Rugged destination drive for field use", "SanDisk Extreme 2TB"], ["Slimmest possible field kit drive", "Samsung T7 1TB"], ["Connector flexibility across devices", "Transcend ESD310 1TB"]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm whether a drive genuinely includes a card reader before buying", explanation: "Combo SD-reader-and-SSD products are a genuinely small category, verify the actual listing includes a real integrated card slot rather than assuming from the product name." },
  { criterion: "Match a separate card reader's speed to your card type", explanation: "A UHS-II card needs a UHS-II rated reader to reach full speed, a mismatched cheaper reader will bottleneck a faster card." },
  { criterion: "Consider a multi-format reader if you shoot multiple card types", explanation: "A reader supporting SD, microSD, and CFexpress in one unit reduces the number of separate devices in your field kit." },
  { criterion: "Choose a standalone destination drive with enough capacity", explanation: "Since offloaded footage accumulates over a shoot, prioritize a standalone drive with real headroom over the card's own capacity." },
  { criterion: "Match connector types across your reader, drive, and computer", explanation: "Matching USB-C throughout your kit reduces the number of adapters and potential points of failure in the field." }
];

export const faq: FaqItem[] = [
  { q: "Do any portable SSDs have a built-in SD card reader?", a: "Genuine combo drives are a small, limited category, verify a specific listing actually includes an integrated card slot before assuming it from the product name alone." },
  { q: "What should I look for in a separate card reader?", a: "Match the reader's speed tier, such as UHS-II, to your card type, and consider a multi-format reader if you shoot on more than one card type." },
  { q: "Is a standalone SSD plus a separate reader worse than a combo unit?", a: "Not necessarily, a well-matched separate reader and destination drive can perform just as well, and often gives you more flexibility to upgrade each piece independently." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-photo-storage", title: "Best Portable SSDs for Photo Storage in 2026" },
  { href: "/guide/best-rugged-portable-ssds", title: "Best Rugged Portable SSDs in 2026" },
  { href: "/guide/best-portable-ssds", title: "Best Portable SSDs in 2026" }
];
