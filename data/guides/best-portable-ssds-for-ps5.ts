export const guideSlug = "best-portable-ssds-for-ps5";
export const guideTitle = "4 Best Portable SSDs for PS5 in 2026";
export const metaTitle = "Best Portable SSDs for PS5 in 2026";
export const metaDescription = "4 storage options we evaluated for PS5, with a clear breakdown of which drives let you play PS5 games directly and which are backup only.";
export const mainKeyword = "best portable ssd for ps5";
export const introParagraphs = [
  "It is important to understand a real PS5 limitation before buying storage: PS5 only allows PS4, backward-compatible games to run directly from an external USB drive. PS5-native games must be copied back to internal storage or an officially Sony-certified internal expansion NVMe drive before they can actually be played, an external USB drive alone cannot run them directly.",
  "The first time you connect a new drive to a PS5, the console typically requires formatting it specifically for PS5 use, which erases any existing data on that drive, a real risk worth backing up for before you connect anything you have used elsewhere.",
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
    id: "b09bjyxmdw-p1",
    rank: 1,
    badge: "Best Internal Expansion Pick, Play PS5 Games Directly",
    name: "Seagate Storage Expansion Card 2TB Solid State Drive - NVMe SSD for Xbox Series X|S, Quick Resume, Plug & Play, Licensed",
    price: "Check current price on Amazon",
    rating: "4.8 stars from Amazon ratings",
    reviews: "30,738 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316Its027kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09BJYXMDW?tag=deskfinds0d-20",
    description:
      "Seagate's Storage Expansion Card is an internal NVMe expansion card built to fit the PS5's internal expansion slot and meet Sony's official certification requirements, meaning PS5-native games installed on it can be played directly, unlike any external USB drive.\n\nThis is the only product in this guide that lets you play PS5-native games without first copying them back to internal storage, a meaningful distinction from the external USB drives below.",
    specs: ["2TB capacity", "Internal NVMe expansion card for PS5's internal slot", "Sony-certified, Quick Resume compatible", "Plug and play, licensed for PS5"],
    pros: ["The only pick here that runs PS5-native games directly", "Officially Sony-certified for PS5's internal expansion slot", "Supports Quick Resume for PS5-native titles", "Straightforward plug-and-play internal installation"],
    cons: ["Price varies, check current listing before buying", "Requires opening the PS5's expansion slot cover to install", "Cannot be used externally like a USB storage drive"],
    bestFor: "PS5 owners who want to expand internal storage and play PS5-native games directly from the added space",
  },
  {
    id: "b09zrd38d8-p2",
    rank: 2,
    badge: "Best External Pick for Backup and PS4 Game Play",
    name: "Western Digital 1TB P40 Game Drive SSD - Up to 2,000MB/s, RGB Lighting, Compatible with Playstation, Xbox, PC, & Mac",
    price: "$177.99",
    rating: "4.7 stars from Amazon ratings",
    reviews: "1,598 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31szhVvwXYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09ZRD38D8?tag=deskfinds0d-20",
    description:
      "Western Digital's P40 Game Drive SSD is explicitly compatible with PlayStation, Xbox, PC, and Mac, and works well as external USB storage for a PS5, storing PS4 backward-compatible games that can be played directly, and PS5-native games that must be copied back to internal storage first before playing.\n\nRGB lighting and up to 2000MB/s rated speed make it a well-rounded external drive, but it is important to understand this drive functions as storage and PS4-game playback, not direct PS5-native game play.",
    specs: ["1TB capacity", "Up to 2000MB/s rated", "External USB, PlayStation, Xbox, PC, Mac compatible", "RGB lighting"],
    pros: ["Directly plays PS4 backward-compatible games from external USB", "Solid external backup and storage option for PS5-native games", "Broad cross-platform compatibility", "Strong rated speed for an external USB drive"],
    cons: ["Cannot run PS5-native games directly, they must be copied to internal storage first", "Will likely need reformatting specifically for PS5 use on first connection, erasing existing data", "RGB lighting is cosmetic, not a functional benefit"],
    bestFor: "PS5 owners who want external backup storage and the ability to play PS4 games directly",
  },
  {
    id: "b08y1q2ksz-p3",
    rank: 3,
    badge: "Best Budget External Pick for Backup and PS4 Game Play",
    name: "Seagate 2TB Game Drive for Xbox, USB 3.0 (STKX2000400)",
    price: "$119.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "20,657 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31+UCQHBazL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08Y1Q2KSZ?tag=deskfinds0d-20",
    description:
      "Seagate's 2TB Game Drive for Xbox works equally well as generic external USB storage for a PS5 despite the Xbox branding, suitable for backing up PS5-native game installs and directly playing PS4 backward-compatible titles.\n\nAs with any external USB drive on PS5, PS5-native games stored here cannot be played directly and must be copied back to internal storage first, and the console will likely require formatting this drive specifically for PS5 use on first connection.",
    specs: ["2TB capacity", "USB 3.0", "External USB storage, works with PS5 despite Xbox branding", "Large review base"],
    pros: ["Large 2TB capacity for backup storage at a budget price", "Directly plays PS4 backward-compatible games from external USB", "Large, consistent review base", "Good value per gigabyte for backup storage"],
    cons: ["Cannot run PS5-native games directly, they must be copied to internal storage first", "Will likely need reformatting specifically for PS5 use, erasing existing data", "USB 3.0 caps speed below newer external drives"],
    bestFor: "Budget-conscious PS5 owners who mainly need external backup storage",
  },
  {
    id: "b0874xn4d8-p4",
    rank: 4,
    badge: "Best Compact External Pick for Backup and PS4 Game Play",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "Samsung's T7 offers a slim, reliable external USB drive for PS5 backup storage, with 1050MB/s USB 3.2 Gen 2 speed and the same PS4 direct-play, PS5 copy-back limitation as any external USB drive on this console.\n\nIts compact size makes it easy to keep alongside a PS5 for backing up game installs and screenshots, understanding that PS5-native games stored here need to be copied back to internal storage to actually play.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2, external USB", "Slim metal body"],
    pros: ["Compact, easy to keep alongside a PS5 for backup storage", "Directly plays PS4 backward-compatible games from external USB", "Reliable, widely reviewed platform", "Good everyday backup speed"],
    cons: ["Cannot run PS5-native games directly, they must be copied to internal storage first", "Will likely need reformatting specifically for PS5 use, erasing existing data", "No official IP rating"],
    bestFor: "PS5 owners who want a compact external backup drive",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Internal expansion versus external USB function distinguished", description: "Clearly separated the one internal NVMe expansion card, which plays PS5-native games directly, from external USB drives, which only play PS4 games directly and require copy-back for PS5-native titles." },
  { title: "Sony certification for internal expansion verified", description: "Confirmed the internal expansion pick meets Sony's official certification requirements for the PS5 internal expansion slot." },
  { title: "First-connection formatting risk flagged", description: "Flagged that PS5 typically requires formatting a new external drive specifically for PS5 use on first connection, which erases existing data." },
  { title: "Cross-platform external compatibility checked", description: "Verified external USB picks work across PlayStation and other platforms as backup and PS4-compatible game storage." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "The Single Most Important Thing to Understand About PS5 Storage",
    note: "PS5 only allows PS4, backward-compatible games to run directly from an external USB drive. PS5-native games must be copied back to internal storage or an officially Sony-certified internal expansion NVMe drive before they can be played. An external USB drive alone, no matter how fast, cannot run PS5-native games directly.",
  },
  {
    subheading: "Match Your Need to the Right Product Type",
    table: { headers: ["What you want to do", "Recommended pick"], rows: [["Expand internal storage and play PS5-native games directly", "Seagate Storage Expansion Card 2TB (internal NVMe)"], ["Back up PS5-native games and directly play PS4 games externally", "WD P40 Game Drive SSD 1TB"], ["Budget external backup storage", "Seagate 2TB Game Drive"], ["Compact external backup drive", "Samsung T7 1TB"]] },
  },
  {
    subheading: "Back Up Before You Connect a New External Drive",
    note: "The first time you connect a new external drive to a PS5, the console typically requires formatting it specifically for PS5 use, which erases any existing data. Back up anything important on that drive before connecting it to your PS5 for the first time.",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Understand internal expansion versus external USB storage are different", explanation: "Only an officially Sony-certified internal NVMe expansion card lets you play PS5-native games directly. External USB drives only directly play PS4 backward-compatible games, PS5-native games must be copied back to internal storage first." },
  { criterion: "Verify Sony certification before buying an internal expansion drive", explanation: "PS5's internal expansion slot requires an officially certified NVMe drive, an uncertified drive may not work correctly or at all." },
  { criterion: "Back up your external drive before first PS5 connection", explanation: "PS5 typically requires formatting a new external drive specifically for PS5 use on first connection, which erases existing data on that drive." },
  { criterion: "Match capacity to whether you need play-storage or backup-only", explanation: "An internal expansion drive needs enough capacity for the PS5-native games you want to actually play, an external drive can be sized more generously for backup and PS4 titles." },
  { criterion: "Do not assume external drive speed enables PS5-native play", explanation: "No external USB drive speed, however fast, allows direct play of PS5-native games, that limitation is set by the PS5 system software, not the drive's performance." }
];

export const faq: FaqItem[] = [
  { q: "Can I play PS5 games directly from an external USB SSD?", a: "No. PS5 only allows PS4 backward-compatible games to run directly from external USB storage. PS5-native games must be copied back to internal storage or a certified internal expansion drive before playing." },
  { q: "What is the difference between the internal expansion card and the external drives in this guide?", a: "The internal NVMe expansion card installs inside the PS5 and lets you play PS5-native games directly from it. The external USB drives are for backup storage and directly playing PS4 games only." },
  { q: "Will I lose data when I connect a new drive to my PS5?", a: "Likely yes on first connection. PS5 typically requires formatting a new external drive specifically for PS5 use, which erases existing data, back up first." },
  { q: "Do I need an officially certified drive for the PS5 internal expansion slot?", a: "Yes, Sony requires the internal expansion drive to meet specific certification and speed requirements, an uncertified drive may not function correctly." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-gaming", title: "Best Portable SSDs for PC Gaming in 2026" },
  { href: "/guide/best-portable-ssds-for-xbox-series-x-and-s", title: "Best Portable SSDs for Xbox Series X and S" },
  { href: "/guide/best-nvme-portable-ssds", title: "Best NVMe Portable SSDs in 2026" }
];
