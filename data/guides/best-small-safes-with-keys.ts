export const guideSlug = "best-small-safes-with-keys";
export const guideTitle = "8 Best Small Safes With Keys in 2026";
export const metaTitle = "Best Small Safes With Keys (2026)";
export const metaDescription =
  "8 key-lock safes compared on keyway exposure, spare-key policy, and no-battery reliability, avoiding the code-management overhead of digital keypads.";
export const mainKeyword = "small safes with keys";
export const introParagraphs = [
  "A key-only lock avoids battery dependency entirely, but it shifts the reliability question to key custody: where you keep the spare, how exposed the keyway is, and what happens if you lose the only copy. We compared confirmed key-count, spare-key availability, and physical lock construction across these picks rather than treating key access as a single undifferentiated feature.",
  "Several picks here are fire-rated chest safes with key locks specifically to keep the lid closed during a fire event, a distinct engineering purpose from a security-box key lock meant to deter theft.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/51iNMIzAY4L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0crh4r471-sswk",
    rank: 1,
    badge: "Best Overall Key-Only Security Box",
    name: "Bonsaii Security Safe Box with Key Lock, 0.23 Cu.Ft for Cash Jewelry Home",
    price: "$29.99",
    rating: "4.5",
    reviews: "612",
    imageUrl: "https://m.media-amazon.com/images/I/51iNMIzAY4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH4R471?tag=deskfinds0d-20",
    description: "Durable SPCC steel with a pry-resistant door and hidden hinges keeps unwanted viewers out, and a classic flat-key design is genuinely simple to use, insert, turn, done, with no code to remember or batteries to replace. The listing directly advises storing the spare key in a separate location from the safe itself.\n\nAt 9.06\" W x 6.69\" D x 6.69\" H exterior (8.98\" x 6.46\" x 6.61\" interior), pre-drilled installation holes on the back and bottom let you mount it under a closet, drawer, or table for genuine anti-removal security.",
    specs: ["0.23 cu ft, mountable, flat-key lock design", "Pry-resistant door, hidden hinges", "Explicit spare-key storage guidance"],
    pros: ["Explicit guidance to store the spare key separately from the safe", "Simple flat-key design with no code or batteries to manage"],
    cons: ["Key-only, no digital backup access method"],
    bestFor: "Buyers wanting the simplest reliable key-only security box.",
  },
  {
    id: "b0f2931wmq-sswk",
    rank: 2,
    badge: "Best Versatile Placement",
    name: "Yuanshikj Steel Small Safe Lock Box with Key Security, 0.23 Cu Ft, Black",
    price: "$22.99",
    rating: "4.4",
    reviews: "389",
    imageUrl: "https://m.media-amazon.com/images/I/31MabNsZGWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F2931WMQ?tag=deskfinds0d-20",
    description: "The listing directly recommends locking the door promptly after storing items, a small but practical reminder for a key-only design where there's no auto-lock feature to fall back on. High-strength steel with scratch-resistant, stain-resistant powder coating protects against damage and rust.\n\nTwo unique keys are included, and installation screws with pre-drilled holes let you mount on a wall, floor, or cabinet, or use it as a portable cash box, at 9.1\" x 6.7\" x 6.7\" exterior (6.5\" x 8.9\" x 4.3\" interior), genuinely versatile for either fixed or portable use.",
    specs: ["0.23 cu ft, wall/floor/cabinet mountable OR portable", "2 unique keys included", "Scratch and stain-resistant powder coating"],
    pros: ["Genuinely versatile between fixed mounting and portable cash-box use"],
    cons: ["No auto-lock feature, requires manually locking after each use"],
    bestFor: "Buyers wanting the flexibility to mount it or carry it as a portable cash box.",
  },
  {
    id: "b07ddfqhvp-sswk",
    rank: 3,
    badge: "Best for Cash Organization",
    name: "KYODOLED Small Metal Lock Box with Key for Cash and Medication, 2 Keys",
    price: "$13.49",
    rating: "4.6",
    reviews: "17441",
    imageUrl: "https://m.media-amazon.com/images/I/41rUL1UQtbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07DDFQHVP?tag=deskfinds0d-20",
    description: "A 2-layer design specifically organizes what you're storing: the upper removable tray has 5 compartments for sorting coins and small bills, while the bottom space holds checks, receipts, or larger bills. Remove the tray entirely for extra room when needed.\n\n2 keys ship included for backup use so losing one isn't catastrophic, and a built-in handle makes this a genuinely portable box rather than a fixed installation, at the lowest price in this entire comparison.",
    specs: ["Portable, 2-layer design with removable 5-compartment coin tray", "2 keys included for backup", "Built-in carry handle"],
    pros: ["Best cash-specific organization of any key-lock pick here", "Lowest price in this comparison by a wide margin"],
    cons: ["Portable design, not mountable for anti-removal security"],
    bestFor: "Buyers wanting organized, portable cash storage at the lowest price here.",
  },
  {
    id: "b008nhkwzu-sswk",
    rank: 4,
    badge: "Best Fire-Rated Key Lock",
    name: "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    price: "See listing",
    rating: "4.6",
    reviews: "22264",
    imageUrl: "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008NHKWZU?tag=deskfinds0d-20",
    description: "This key lock serves a distinct purpose beyond theft deterrence: it specifically prevents the lid from opening in the event of a fire, working alongside a UL classification for 30-minute fire endurance at 1550°F. A separate ETL verification covers digital media like CDs and USB drives.\n\nTwo keys are included, and a lifetime after-fire replacement guarantee backs the safe directly. Built-in carrying grips assist portability, genuinely useful if you need to grab this safe during an evacuation.",
    specs: ["Key lock specifically prevents lid opening during fire", "UL Classified: 1/2 hr at 1550°F", "Lifetime after-fire replacement guarantee, 2 keys included"],
    pros: ["Key lock engineered specifically to stay closed during a fire event, not just deter theft", "Lifetime after-fire replacement guarantee"],
    cons: ["No digital keypad alternative if you'd prefer code access"],
    bestFor: "Buyers wanting a fire-rated safe where the key lock's job is staying shut during a fire.",
  },
  {
    id: "b008hzui34-sswk",
    rank: 5,
    badge: "Best for Travel Key Lock",
    name: "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    price: "$39.98",
    rating: "4.6",
    reviews: "2807",
    imageUrl: "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008HZUI34?tag=deskfinds0d-20",
    description: "A flat key lock design specifically prevents the lid from opening during a fire event, with the same UL classification and ETL digital-media verification as SentrySafe's other chest safes. Two keys are included.\n\nBolt-down hardware ships in the box for at-home anchoring, and a built-in carrying handle explicitly supports travel use, letting the key-locked safe move between a home and a trip while keeping the same physical key access throughout.",
    specs: ["Flat key lock, UL Classified: 1/2 hr at 1550°F", "Bolt-down hardware included, carrying handle", "2 keys included"],
    pros: ["Bolt-down hardware plus travel handle covers both fixed and portable key-lock use"],
    cons: ["No digital keypad alternative"],
    bestFor: "Buyers wanting one key-locked safe that works both at home and while traveling.",
  },
  {
    id: "b00ge57dfk-sswk",
    rank: 6,
    badge: "Best for Hanging File Key Storage",
    name: "SentrySafe Black Fireproof and Waterproof Safe, File Folder and Document Box",
    price: "$67.99",
    rating: "4.5",
    reviews: "14963",
    imageUrl: "https://m.media-amazon.com/images/I/51T8rsbqkgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00GE57DFK?tag=deskfinds0d-20",
    description: "A durable key lock keeps the lid securely closed during a fire event specifically, on a safe whose interior is genuinely organized for hanging file folders, a real organizational advantage over the more basic key-lock chests here. UL Classified fire protection pairs with separate ETL water-resistance verification.\n\nTwo keys are included, and the compact footprint fits a closet or under a desk while remaining portable enough to relocate, at the highest price among the key-lock picks in this comparison.",
    specs: ["Hanging file folder capacity, key lock", "UL Classified fire + ETL Verified water protection", "2 keys included"],
    pros: ["Only key-lock pick here specifically organized for hanging file folders", "Independently documented fire AND water protection"],
    cons: ["Highest price among the key-lock picks here"],
    bestFor: "Buyers wanting key-locked, hanging-folder document organization with dual fire/water protection.",
  },
  {
    id: "b0crr524vk-sswk",
    rank: 7,
    badge: "Combination Lock, Not Key-Only",
    name: "DocSafe 5200°F Fireproof Document Organizer Box with Lock, Heat Insulated",
    price: "$31.33",
    rating: "4.5",
    reviews: "312",
    imageUrl: "https://m.media-amazon.com/images/I/51xzFNOAeLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRR524VK?tag=deskfinds0d-20",
    description: "We're disclosing this honestly: this actually uses a combination password lock rather than a physical key, included here since document-organizer searches surface it alongside key-lock options. Made of thickened silicone-coated fireproof cotton with 8 layers, claimed to withstand up to 5200°F.\n\nThe soft-bag interior includes 8 passport mesh bags, 16 card slots, 4 USB drive pockets, and 7 folder layers, extensive organization no key-lock steel box here matches, closed with waterproof zippers rated for a high-speed fire hose spray.",
    specs: ["Combination lock, NOT a physical key", "Claimed 5200°F fire resistance, soft bag construction", "8 passport bags, 16 card slots, 4 USB pockets, 7 folder layers"],
    pros: ["Extensive document organization unmatched by the key-lock steel boxes here"],
    cons: ["Uses a combination lock, not an actual physical key, despite surfacing in this search category"],
    bestFor: "Buyers wanting extensive document organization who are open to a combination lock instead of a key.",
  },
  {
    id: "b004lamjvi-sswk",
    rank: 8,
    badge: "Combination Lock, Not Key-Only (Tethered)",
    name: "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    price: "$21.99",
    rating: "4.3",
    reviews: "2541",
    imageUrl: "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004LAMJVI?tag=deskfinds0d-20",
    description: "Also honestly disclosed: this uses a resettable three-digit mechanical combination, not a physical key, though it shares the key-free reliability advantage of no batteries needed. A tethering cable secures it to a fixed object for campus, coffee shop, or office use.\n\nSolid steel construction backs the physical protection, at a compact 2.6\" H x 5.9\" W x 8.0\" D exterior, best suited to compact items like keys, cash, credit cards, and USB drives.",
    specs: ["Resettable 3-digit combination, NOT a physical key", "Tethering cable, solid steel construction", "Compact-item sized (2.6×5.9×8.0 in exterior)"],
    pros: ["No-battery mechanical reliability, similar advantage to a key-only design"],
    cons: ["Uses a mechanical combination, not an actual physical key, despite surfacing in this search category"],
    bestFor: "Buyers wanting no-battery reliability without managing a physical key, in a compact tethered box.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Distinguished genuine physical-key locks from combination locks in this search category", description: "Two picks here surfaced in a key-lock search but actually use a combination lock, not a physical key. We disclosed this honestly rather than blending them into a key-only ranking." },
  { title: "Separated theft-deterrent key locks from fire-safety key locks", description: "Several key locks here are specifically engineered to keep a safe's lid shut during a fire event, a different purpose from a security box's theft-deterrent key lock, though both use the same mechanism." },
  { title: "Checked spare-key guidance and included key count", description: "We noted where a listing explicitly recommends storing the spare key separately, and confirmed how many keys ship in the box (typically 2)." },
  { title: "Compared portable versus mountable key-lock designs", description: "Some picks here are genuinely portable cash boxes; others include mounting hardware for fixed installation. We flagged this distinction directly." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By What Matters Most",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Best overall key-only security box", "Bonsaii Security Safe Box with Key Lock"],
        ["Best cash organization, key-locked", "KYODOLED Small Metal Lock Box"],
        ["Fire-rated key lock for lid protection", "SentrySafe Fireproof Safe Box with Key Lock"],
        ["Hanging-folder document storage, key-locked", "SentrySafe Black Fireproof and Waterproof Safe"],
      ],
    },
  },
  {
    subheading: "Managing Your Spare Key",
    note: "Every genuine key-lock pick here ships with 2 keys. Store the spare somewhere separate from the safe itself, not taped underneath it or in an obvious nearby drawer, since a spare key stored beside the safe defeats the purpose of the lock. If you lose both keys, most of these picks require contacting the manufacturer for a replacement, verify this process before you actually need it.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the lock is actually a physical key, not a combination", explanation: "Two picks in this comparison surfaced in our key-lock research but actually use a combination lock. Verify the actual mechanism before assuming key-only operation." },
  { criterion: "Store your spare key separately from the safe, always", explanation: "Every key-lock pick here includes 2 keys specifically so you have a backup. A spare key stored beside or inside the safe defeats its purpose entirely." },
  { criterion: "Distinguish fire-safety key locks from theft-deterrent key locks", explanation: "Several picks here use a key lock specifically to keep the lid shut during a fire, not primarily to deter theft. Both use the same mechanism but serve different purposes." },
  { criterion: "Weigh portable versus mountable key-lock designs based on your actual use", explanation: "A portable cash box with a key lock suits temporary or mobile use; a mountable steel box with a key lock suits fixed, anti-removal security." },
  { criterion: "Verify the lost-key replacement process before you need it", explanation: "If you lose both included keys, most manufacturers require a specific replacement process. Check this directly rather than assuming a simple locksmith visit will work." },
];

export const faq: FaqItem[] = [
  { q: "What's the best overall key-only safe?", a: "The Bonsaii Security Safe Box with Key Lock, with explicit spare-key storage guidance and pry-resistant construction." },
  { q: "Which key-lock safe organizes cash the best?", a: "The KYODOLED Small Metal Lock Box, with a removable 5-compartment coin tray, at the lowest price in this comparison." },
  { q: "Are any picks here actually combination locks, not physical keys?", a: "Yes, the DocSafe Fireproof Document Organizer and the SentrySafe Small Safe with Combination Lock both use combination locks rather than physical keys, disclosed here for transparency." },
  { q: "What should I do with the spare key?", a: "Store it somewhere separate from the safe itself, never taped to or stored inside the safe, which defeats the purpose of the lock." },
  { q: "Is there a fire-rated safe with a key lock?", a: "Yes, several SentrySafe picks here use a key lock specifically engineered to keep the lid shut during a fire event, alongside UL fire classification." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-combination-small-safes", title: "Best Combination Small Safes (2026)" },
  { href: "/guide/best-small-safe-lock-boxes", title: "Best Small Safe Lock Boxes (2026)" },
  { href: "/guide/best-small-fireproof-safes", title: "Best Small Fireproof Safes (2026)" },
];
