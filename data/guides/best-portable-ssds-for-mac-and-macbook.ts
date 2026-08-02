export const guideSlug = "best-portable-ssds-for-mac-and-macbook";
export const guideTitle = "4 Best Portable SSDs for Mac and MacBook in 2026";
export const metaTitle = "Best Portable SSDs for Mac in 2026";
export const metaDescription = "4 portable SSDs we evaluated for Mac and MacBook, covering Time Machine reformatting needs and realistic sustained backup speed.";
export const mainKeyword = "best portable ssd for mac";
export const introParagraphs = [
  "Most portable SSDs ship pre-formatted in NTFS or exFAT, Windows-oriented formats, so Mac buyers who specifically want to use a drive for Time Machine backups will typically need to reformat it to APFS first through Disk Utility.",
  "Time Machine backups benefit more from sustained write consistency over time than from a drive's peak burst speed, worth weighing reviews that specifically discuss long-term backup reliability rather than just headline transfer numbers.",
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
    id: "b09vlk9w3s-p1",
    rank: 1,
    badge: "Best Overall Pick for Mac",
    name: "Samsung T7 Shield Portable SSD 1TB, USB 3.2 Gen 2, Up to 1,050 MB/s",
    price: "$286.88",
    rating: "4.7 stars from Amazon ratings",
    reviews: "16,380 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21mARCvUWxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VLK9W3S?tag=deskfinds0d-20",
    description:
      "Samsung's T7 Shield pairs a rugged shell with genuine 1050MB/s USB 3.2 Gen 2 speed, a reliable everyday companion for MacBook users who want durability alongside solid transfer performance.\n\nLike most drives, it ships pre-formatted for Windows, Mac users planning to use it for Time Machine should reformat to APFS first via Disk Utility.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Rugged shield"],
    pros: ["Rugged shell suits MacBook users on the go", "Reliable, well-reviewed platform", "Realistic USB 3.2 Gen 2 speed ceiling", "Good sustained-speed reputation among reviewers"],
    cons: ["Ships pre-formatted for Windows, needs APFS reformatting for Time Machine", "Bulkier than the non-shielded T7", "Sustained speed can dip once cache fills"],
    bestFor: "MacBook users who want everyday durability alongside solid backup speed",
  },
  {
    id: "b0fvmgfpht-p2",
    rank: 2,
    badge: "Best Fast USB4 Pick for Mac",
    name: "Corsair EX400U Survivor 1TB USB4 External SSD - Up to 4000 MB/s, IP55 Rugged Drive, Plug & Play for PC, Mac & iPad - Black",
    price: "$238.58",
    rating: "4.8 stars from Amazon ratings",
    reviews: "60 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21K3rg5MWlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FVMGFPHT?tag=deskfinds0d-20",
    description:
      "Corsair's EX400U Survivor uses a genuine USB4 bridge rated up to 4000MB/s, a speed tier that MacBooks with Thunderbolt or USB4 ports can genuinely take advantage of.\n\nIP55 rugged rating is a bonus, and reformatting to APFS is a quick one-time step in Disk Utility if you want to use this for native Mac backups.",
    specs: ["1TB capacity", "Up to 4000MB/s rated", "USB4 bridge", "IP55 rugged rating"],
    pros: ["Genuinely fast USB4 speed for Thunderbolt-equipped MacBooks", "IP55 rating adds real everyday durability", "Compact for the speed and durability tier", "Strong sustained-speed reputation among reviewers"],
    cons: ["Needs a genuine Thunderbolt or USB4 MacBook port to matter", "Smaller review base than mainstream picks", "Requires APFS reformatting for native Time Machine use"],
    bestFor: "MacBook users with Thunderbolt or USB4 ports who want top-tier speed",
  },
  {
    id: "b0874xn4d8-p3",
    rank: 3,
    badge: "Best Slim Everyday Pick for Mac",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "The standard Samsung T7 offers the same 1050MB/s USB 3.2 Gen 2 speed as the Shield in a slimmer, lighter body better suited to minimalist MacBook setups.\n\nReformatting to APFS through Disk Utility takes just a few minutes if you plan to use this specifically for Time Machine backups.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Slim metal body"],
    pros: ["Slim, lightweight design pairs well with a MacBook", "Reliable, widely reviewed platform", "Good sustained speed for everyday backup use", "Comes in multiple colors"],
    cons: ["No official IP rating", "Ships pre-formatted for Windows, needs APFS reformatting", "1050MB/s ceiling is not the fastest tier available"],
    bestFor: "MacBook users who want the slimmest everyday drive",
  },
  {
    id: "b0f3377jbn-p4",
    rank: 4,
    badge: "Best High-Speed Pick for Video Work on Mac",
    name: "Crucial X10 1TB Portable SSD, Up to 2,100MB/s, USB 3.2 USB-C, Durable Storage for Games, Photos & Files, Blue",
    price: "$207.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "2,363 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/312gFk3+1CL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F3377JBN?tag=deskfinds0d-20",
    description:
      "Crucial's X10 rates up to 2100MB/s over USB 3.2, a genuine step up for MacBook users doing video work who do not have a Thunderbolt or USB4 port.\n\nIts durable casing suits both desk and mobile use, and like the others, reformatting to APFS is needed for native Time Machine compatibility.",
    specs: ["1TB capacity", "Up to 2100MB/s rated", "USB 3.2 Type-C", "Durable casing"],
    pros: ["Faster rated bridge than standard Gen 2 drives", "Durable casing for mobile MacBook use", "Competitive price for the speed tier", "Good fit for MacBook video work without Thunderbolt"],
    cons: ["Needs a matching high-speed MacBook port to hit rated speed", "Newer entrant with a smaller review base", "Ships pre-formatted for Windows, needs APFS reformatting"],
    bestFor: "MacBook users doing video work without a Thunderbolt port",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "APFS reformatting requirement flagged", description: "Noted that every pick ships pre-formatted for Windows and needs a one-time APFS reformat through Disk Utility for native Time Machine use." },
  { title: "Sustained speed for backup consistency", description: "Weighted sustained write consistency over peak burst speed, since Time Machine backups benefit more from steady performance over time." },
  { title: "Mac port compatibility", description: "Compared each drive's required interface tier against typical MacBook USB-C, USB4, and Thunderbolt port capabilities." },
  { title: "Everyday durability for mobile Mac use", description: "Weighed build quality and IP or rugged ratings for MacBook users who carry a drive between locations." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Reformat to APFS Before Setting Up Time Machine",
    note: "Nearly every portable SSD ships pre-formatted in exFAT or NTFS. Open Disk Utility, erase the drive, and choose APFS before using it for Time Machine, this is a one-time step that takes a few minutes.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Rugged everyday MacBook companion", "Samsung T7 Shield 1TB"], ["Fastest speed for Thunderbolt or USB4 MacBooks", "Corsair EX400U Survivor 1TB"], ["Slimmest everyday drive", "Samsung T7 1TB"], ["Faster speed without needing Thunderbolt", "Crucial X10 1TB"]] },
  },
  {
    subheading: "Time Machine Cares About Consistency, Not Just Peak Speed",
    note: "A drive that sustains steady write speed over a long backup session serves Time Machine better than one with a high peak number that drops off during sustained use. Check reviews specifically discussing long-term backup reliability.",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Plan to reformat to APFS for Time Machine", explanation: "Nearly every drive ships in exFAT or NTFS, format to APFS through Disk Utility before setting up Time Machine, a quick one-time step." },
  { criterion: "Prioritize sustained speed over peak burst numbers", explanation: "Time Machine backups benefit more from steady, sustained write consistency than a high peak burst speed that drops off." },
  { criterion: "Match interface tier to your specific MacBook's ports", explanation: "A USB4 rated drive only performs at that tier on a MacBook with an actual Thunderbolt or USB4 port." },
  { criterion: "Consider ruggedization if you travel with your MacBook", explanation: "A rugged or IP-rated drive is a sensible pairing for a MacBook that regularly leaves the house." },
  { criterion: "Check exFAT compatibility if you also use Windows", explanation: "If you need cross-platform access without reformatting, exFAT, the default on most drives, works on both Mac and Windows." }
];

export const faq: FaqItem[] = [
  { q: "Do I need to reformat a new SSD to use it with my Mac?", a: "For Time Machine specifically, yes, reformat to APFS through Disk Utility. For general file transfer, the default exFAT format already works fine on Mac." },
  { q: "What speed do I actually need for Time Machine?", a: "Sustained write consistency matters more than peak speed. A standard USB 3.2 Gen 2 drive rated around 1050MB/s is sufficient for most Time Machine setups." },
  { q: "Can I use the same drive for both Mac and Windows?", a: "Yes, if you keep it formatted in exFAT, though Time Machine specifically requires APFS, which is not natively readable on Windows." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-macbook-pro", title: "Best Portable SSDs for MacBook Pro in 2026" },
  { href: "/guide/best-thunderbolt-portable-ssds", title: "Best Thunderbolt Portable SSDs in 2026" },
  { href: "/guide/best-portable-ssds-for-video-editing", title: "Best Portable SSDs for Video Editing in 2026" }
];
