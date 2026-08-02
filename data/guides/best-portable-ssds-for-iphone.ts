export const guideSlug = "best-portable-ssds-for-iphone";
export const guideTitle = "4 Best Portable SSDs for iPhone in 2026";
export const metaTitle = "Best Portable SSDs for iPhone in 2026";
export const metaDescription = "4 portable SSDs we evaluated for iPhone use, including ProRes recording speed requirements and older Lightning-port compatibility notes.";
export const mainKeyword = "best portable ssd for iphone";
export const introParagraphs = [
  "iPhone Pro models that support ProRes recording directly to an external drive require the drive to meet Apple's specific minimum sustained write speed, not every 'for iPhone' marketed drive actually meets this consistently, worth checking verified reviews for confirmed ProRes recording success.",
  "Older iPhones with a Lightning port, anything before iPhone 15, are not directly compatible with a USB-C drive without an adapter, a real compatibility gap worth checking before buying if you have not yet upgraded to a USB-C iPhone.",
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
    badge: "Best MagSafe Pick for iPhone",
    name: "Corsair EX400U 2TB USB4 Portable External Type-C SSD - Up to 4,000MB/s Read, 3,600MB/s Write, Thunderbolt 4, MagSafe, Includes 40Gbps Cable - Gray",
    price: "$399.99",
    rating: "4.1 stars from Amazon ratings",
    reviews: "382 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21F-0rmbcOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DR381N86?tag=deskfinds0d-20",
    description:
      "Corsair's EX400U 2TB offers genuine MagSafe magnetic compatibility for hands-free attachment to a MagSafe-equipped iPhone, alongside USB4 and Thunderbolt 4 compatible speed up to 4000MB/s.\n\nThat sustained speed tier is a strong candidate for ProRes direct recording, though buyers should confirm current reviews specifically mention successful ProRes recording before relying on it for that use case.",
    specs: ["2TB capacity", "MagSafe compatible", "Up to 4000MB/s read rated", "USB4, Thunderbolt 4 compatible"],
    pros: ["Genuine MagSafe magnetic compatibility for iPhone", "Strong sustained speed tier for demanding recording use", "Includes a properly rated cable", "Large 2TB capacity for extensive iPhone media"],
    cons: ["Confirm ProRes recording compatibility in current reviews before relying on it", "Premium price versus standard iPhone-compatible drives", "Requires USB-C, not compatible with older Lightning iPhones without an adapter"],
    bestFor: "iPhone Pro users who want MagSafe convenience and strong sustained speed",
  },
  {
    id: "b0c3b32h9m-p2",
    rank: 2,
    badge: "Best Dual-Connector Pick for iPhone",
    name: "Transcend ESD310 1TB External SSD, Up to 1,050MB/s, Dual USB Drive, 2-in-1 Type C & A, USB 3.2 Gen2 Portable SSD",
    price: "$239.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "2,340 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C3B32H9M?tag=deskfinds0d-20",
    description:
      "Transcend's ESD310 includes both USB-C and USB-A connectors in one drive, useful for buyers who move files between an iPhone, a USB-C laptop, and an older USB-A accessory.\n\nRated up to 1050MB/s, it is a practical everyday choice for iPhone photo and video backups rather than a ProRes-specific recording drive.",
    specs: ["1TB capacity", "Dual USB-C and USB-A connectors", "Up to 1050MB/s rated", "USB 3.2 Gen2"],
    pros: ["Dual connector design adds real flexibility across devices", "Solid everyday speed for iPhone photo and video backups", "Compact, travel-friendly design", "Good value for the dual-connector convenience"],
    cons: ["Not explicitly confirmed for ProRes direct recording", "Requires USB-C, not compatible with older Lightning iPhones without an adapter", "Smaller review base than mainstream single-connector drives"],
    bestFor: "Buyers who want one drive that works across an iPhone and multiple other devices",
  },
  {
    id: "b08hn37xc1-p3",
    rank: 3,
    badge: "Best Rugged Pick for iPhone Photographers",
    name: "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware - SDSSDE61-2T00-G25",
    price: "$299.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "91,365 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HN37XC1?tag=deskfinds0d-20",
    description:
      "SanDisk's Extreme pairs IP65 water and dust resistance with 1050MB/s USB-C speed, a sensible choice for iPhone photographers backing up shoots in the field.\n\nAs with any USB-C drive, older Lightning-port iPhones need an adapter to connect directly, worth confirming your specific iPhone model's port before buying.",
    specs: ["2TB capacity", "Up to 1050MB/s rated", "USB-C, USB 3.2 Gen 2", "IP65 water and dust resistance"],
    pros: ["IP65 rating suits field use for iPhone photographers", "Large 2TB capacity for extensive photo libraries", "Well-established, large review base", "Realistic everyday speed ceiling"],
    cons: ["Requires USB-C, older Lightning iPhones need an adapter", "Not explicitly confirmed for ProRes direct recording at this speed tier", "Older model, verify current firmware"],
    bestFor: "iPhone photographers who want rugged field-use durability",
  },
  {
    id: "b0874xn4d8-p4",
    rank: 4,
    badge: "Best Slim Everyday Pick for iPhone",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "Samsung's T7 offers a slim, lightweight USB-C drive rated up to 1050MB/s, a straightforward everyday backup companion for an iPhone's photo and video library.\n\nIt is not marketed specifically for ProRes recording, so buyers with that specific need should confirm sustained write speed in verified reviews before relying on this drive for that purpose.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Slim metal body"],
    pros: ["Slim, lightweight design pairs well with an iPhone on the go", "Reliable, widely reviewed platform", "Good everyday backup speed", "Comes in multiple colors"],
    cons: ["Requires USB-C, older Lightning iPhones need an adapter", "Not explicitly marketed for ProRes recording", "No official IP rating"],
    bestFor: "Buyers who want a slim everyday iPhone backup companion",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "ProRes sustained speed requirement checked", description: "Noted which drives' sustained write speed tier is a realistic candidate for iPhone Pro ProRes direct recording, and where that needs independent verification." },
  { title: "Lightning versus USB-C compatibility flagged", description: "Flagged that all picks require USB-C, and that older Lightning-port iPhones before iPhone 15 need an adapter to connect directly." },
  { title: "Field durability for photography use", description: "Weighed IP ratings and build quality for buyers backing up iPhone photo and video shoots in real field conditions." },
  { title: "MagSafe compatibility where relevant", description: "Credited genuine MagSafe compatibility as a real convenience feature for hands-free iPhone attachment, not just a marketing label." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Check ProRes Direct-Recording Requirements First",
    note: "iPhone Pro models recording ProRes directly to an external drive need the drive to sustain a specific minimum write speed set by Apple. Not every 'for iPhone' drive confirms this consistently in reviews, verify before relying on a drive for ProRes recording specifically.",
  },
  {
    subheading: "Confirm Your iPhone's Port Before Buying",
    note: "All drives in this guide use USB-C. If you have an iPhone older than the 15 series with a Lightning port, you will need a Lightning to USB-C adapter to connect directly, factor that into your setup.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["MagSafe convenience plus strong speed", "Corsair EX400U 2TB"], ["Flexibility across multiple devices", "Transcend ESD310 1TB"], ["Rugged field use for photography", "SanDisk Extreme 2TB"], ["Slim, simple everyday backup", "Samsung T7 1TB"]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify ProRes sustained write speed if you need direct recording", explanation: "Apple sets a specific minimum sustained write speed for ProRes direct recording, confirm a drive meets it consistently in verified reviews, not just its peak rated speed." },
  { criterion: "Confirm your iPhone's actual port before buying", explanation: "Older Lightning-port iPhones need an adapter to connect to any USB-C drive, check your specific model first." },
  { criterion: "Consider MagSafe compatibility for convenience", explanation: "A genuinely MagSafe-compatible drive attaches directly to a compatible iPhone without a separate mount, a real everyday convenience if supported." },
  { criterion: "Weigh field durability for photography use", explanation: "An IP-rated drive is worth the extra cost for buyers backing up shoots outdoors or in unpredictable conditions." },
  { criterion: "Plan for real usable capacity given iPhone media file sizes", explanation: "4K and ProRes video files consume space quickly, plan around 7 percent less usable capacity than advertised when budgeting storage." }
];

export const faq: FaqItem[] = [
  { q: "Can I record ProRes directly to any external SSD from my iPhone?", a: "Only if the drive sustains Apple's specific minimum write speed requirement. Check verified reviews for confirmed ProRes recording success, not just the drive's peak rated speed." },
  { q: "Do I need an adapter to use these drives with my iPhone?", a: "If your iPhone is older than the 15 series with a Lightning port, yes, you will need a Lightning to USB-C adapter." },
  { q: "Is a MagSafe-compatible drive worth it?", a: "If you want hands-free attachment to a MagSafe iPhone for convenience, yes. Otherwise a standard non-magnetic drive with similar specs is usually cheaper." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-magnetic-portable-ssds", title: "Best Magnetic Portable SSDs in 2026" },
  { href: "/guide/best-portable-ssds-for-photo-storage", title: "Best Portable SSDs for Photo Storage in 2026" },
  { href: "/guide/best-ultra-compact-portable-ssds", title: "Best Ultra-Compact Portable SSDs in 2026" }
];
