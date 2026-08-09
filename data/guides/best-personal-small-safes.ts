export const guideSlug = "best-personal-small-safes";
export const guideTitle = "8 Best Personal Small Safes in 2026";
export const metaTitle = "Best Personal Small Safes (2026)";
export const metaDescription =
  "8 safes compared for personal storage, passports, medication, and small valuables, in shared bedrooms, dorms, or offices where privacy matters most.";
export const mainKeyword = "personal small safes";
export const introParagraphs = [
  "Personal storage prioritizes discreet fit and individual access over institutional theft resistance, since the goal is usually privacy from roommates or family rather than defending against a break-in. We compared confirmed interior dimensions against realistic personal items, passports, wallets, medication, and evaluated access methods for a single user rather than a shared household.",
  "We also checked portability versus mounting, since a personal safe used in a dorm or rental may need to move with you rather than stay bolted in one place.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b005k6jqxq-pss",
    rank: 1,
    badge: "Best for Travel and Dorm Portability",
    name: "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    price: "$16.17",
    rating: "4.3",
    reviews: "18027",
    imageUrl: "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B005K6JQXQ?tag=deskfinds0d-20",
    description: "A tether cable secures this to a bed frame, desk, or radiator rather than requiring permanent mounting, genuinely useful for a dorm room or rental where you can't drill into a wall. A set-your-own four-digit combination avoids carrying a key that could be lost or borrowed.\n\nA dedicated ear bud or charging cable access port lets you charge a phone while it stays locked inside, and shock-absorbing foam construction is designed to be water-resistant for a bag or backpack.",
    specs: ["Travel safe with tether cable", "4-digit combination, no key needed", "Charging cable access port, water-resistant"],
    pros: ["Tether cable specifically fits dorm/rental settings without drilling", "Only pick here with a dedicated charging cable access port"],
    cons: ["Tether-only anti-removal, not mounted like a fixed steel box"],
    bestFor: "Students or renters needing a personal safe that moves with them.",
  },
  {
    id: "b077k1yh8z-pss",
    rank: 2,
    badge: "Best for Broad Personal Item Coverage",
    name: "Amazon Basics Portable Security Case Lock Box Safe with Combination Lock",
    price: "$17.84",
    rating: "4.4",
    reviews: "9964",
    imageUrl: "https://m.media-amazon.com/images/I/31iXiZaJiIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B077K1YH8Z?tag=deskfinds0d-20",
    description: "Anti-pry steel construction with a foam-padded interior is explicitly rated for cash, jewelry, documents, and firearms together, a genuinely broad personal-item scope. A zinc alloy combination lock avoids managing a physical key.\n\nSmall enough to store discreetly in a closet or under a bed, and portable enough to relocate between a dorm room, apartment, or office desk drawer as your living situation changes.",
    specs: ["Portable, anti-pry steel construction", "Foam-padded interior", "Zinc alloy combination lock"],
    pros: ["Explicitly rated for a broad range of personal item types", "Genuinely portable between living situations"],
    cons: ["Portable design, not mountable for anti-removal security"],
    bestFor: "Buyers wanting one safe covering a wide range of personal valuables across moves.",
  },
  {
    id: "b078myjyd5-pss",
    rank: 3,
    badge: "Best Self-Locking Design",
    name: "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    price: "$23.99",
    rating: "4.4",
    reviews: "22969",
    imageUrl: "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B078MYJYD5?tag=deskfinds0d-20",
    description: "A magnetic auto-locking door closes and secures itself the instant you shut it, genuinely useful for personal privacy since there's no risk of leaving it accidentally unlocked in a shared bedroom or apartment. Reinforced solid steel wall construction with dual door locking bolts backs the physical security.\n\nPre-drilled mounting holes let you fix it in place if your living situation allows drilling, at a compact 9.05 x 6.69 x 6.69 inches suited to a closet shelf or desk drawer.",
    specs: ["0.2 cu ft, mountable steel construction", "Dual steel locking bolts, magnetic auto-lock door", "Pre-drilled mounting holes + bolts included"],
    pros: ["Self-locking door removes the risk of accidentally leaving personal items exposed"],
    cons: ["Compact interior, verify your specific personal items fit"],
    bestFor: "Buyers in a shared living space wanting a self-locking, hard-to-forget-to-lock design.",
  },
  {
    id: "b09sz6gpgr-pss",
    rank: 4,
    badge: "Best for Low-Light Personal Access",
    name: "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    price: "$31.99",
    rating: "4.5",
    reviews: "3167",
    imageUrl: "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SZ6GPGR?tag=deskfinds0d-20",
    description: "An automatic interior light switches on for 30 seconds when opened via keypad, genuinely useful if this lives in a dim closet where you're accessing personal items like medication or documents without fumbling. The keypad confirms correct entries with an indicator light.\n\nAn included waterproof and fireproof document bag protects paper items like passports specifically, and a three-wrong-entries lockout adds a real deterrent if a roommate or family member tries guessing your code.",
    specs: ["0.23 cu ft, mountable steel box", "Auto interior light, low-battery warning", "3-wrong-entry lockout (5 min)"],
    pros: ["Auto interior light genuinely helps with personal items in a dim closet", "Lockout deters roommates or family members guessing your code"],
    cons: ["Compact interior similar to other budget options"],
    bestFor: "Buyers wanting privacy protection against a roommate or family member attempting access.",
  },
  {
    id: "b0d1x55sw4-pss",
    rank: 5,
    badge: "Best for Individual + Shared Access",
    name: "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    price: "$29.99",
    rating: "4.2",
    reviews: "4957",
    imageUrl: "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1X55SW4?tag=deskfinds0d-20",
    description: "Two separate access codes work simultaneously, useful for a personal safe that also needs occasional trusted access, a partner, roommate, or parent, without sharing your primary code. SPCC steel construction with 18mm dual locking bolts backs the physical security at a 4.6-liter capacity.\n\nHidden pry-resistant hinges reinforce privacy, and the package includes an anti-scratch carpet liner plus a full manual walking through the two-code setup.",
    specs: ["4.6L, SPCC steel, mountable design", "2 independent access codes supported", "Includes anti-scratch carpet liner + manual"],
    pros: ["Two independent codes support occasional trusted access without sharing your primary code"],
    cons: ["4-step setup process is more involved than simpler competitors"],
    bestFor: "Buyers wanting primarily personal access with an occasional trusted second code.",
  },
  {
    id: "b0dwmhjghp-pss",
    rank: 6,
    badge: "Best Key-Storage Guidance",
    name: "PATRON Small Safe Box for Money with Code and Keys, Solid Mini Safe for Kids",
    price: "$28.99",
    rating: "4.5",
    reviews: "298",
    imageUrl: "https://m.media-amazon.com/images/I/41iTPTu+ahL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DWMHJGHP?tag=deskfinds0d-20",
    description: "The listing carries an explicit, genuinely useful warning for personal safe use specifically: never store the emergency keys inside the box itself, a common mistake that defeats a safe's purpose. Two solid anti-pry bolts and a corrosion-resistant coating back the physical construction.\n\nA full accessory bundle, two emergency keys, two mounting bolts, a scratch-resistant carpet liner, and a manual, matches pricier picks at a lower cost, at 6.7 x 9.0 x 6.7 inches for a drawer, cabinet, or nightstand.",
    specs: ["0.236 cu ft, mountable design", "2 anti-pry steel bolts, corrosion-resistant coating", "Explicit warning against storing keys inside the box"],
    pros: ["Explicit key-storage warning, genuinely useful for a first personal safe"],
    cons: ["Compact capacity similar to other budget mountable options"],
    bestFor: "First-time buyers, including students, wanting clear personal-safe setup guidance.",
  },
  {
    id: "b0crh68745-pss",
    rank: 7,
    badge: "Best Backup Power for Reliable Personal Access",
    name: "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    price: "$37.99",
    rating: "4.6",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH68745?tag=deskfinds0d-20",
    description: "A USB-C interface supporting an external power bank means you're never locked out of your own personal items over a dead battery, genuinely useful if you need something like medication urgently. Two 0.71-inch steel reinforcement bolts and hidden hinges back the mounting.\n\nPersonal password or emergency key both work for access, with pre-drilled installation holes to fix it under a closet, drawer, or table.",
    specs: ["0.23 cu ft, mountable steel security box", "USB-C emergency power backup", "Pre-drilled installation holes"],
    pros: ["USB-C emergency power backup ensures reliable access to personal items like medication"],
    cons: ["No confirmed usage history for this specific listing yet"],
    bestFor: "Buyers wanting guaranteed access to personal items even on a dead battery.",
  },
  {
    id: "b0f7x326zf-pss",
    rank: 8,
    badge: "Best for Flat Personal Documents",
    name: "KYODOLED Safe Box with Digital Keypad Lock, Lock Box with Code for Personal Items",
    price: "$39.99",
    rating: "4.2",
    reviews: "93",
    imageUrl: "https://m.media-amazon.com/images/I/41oAH0K-frL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F7X326ZF?tag=deskfinds0d-20",
    description: "Interior dimensions of 11.7\" x 9.12\" x 2.75\" give a wide, flat layout genuinely suited to personal documents like a passport, checkbook, or watch without folding or stacking awkwardly. A customizable 3-8 digit code plus 2 emergency keys cover daily and backup access.\n\nA soft sponge-lined interior protects delicate personal items like jewelry or a watch from scratches, though the manufacturer directly states the thin metal casing has limits under pry tools or blunt force, worth weighing for a personal rather than high-security use case.",
    specs: ["11.7×9.12×2.75 in wide flat interior", "3-8 digit customizable code + 2 emergency keys", "Sponge-lined interior for delicate items"],
    pros: ["Wide flat interior specifically suits passports and personal documents without folding"],
    cons: ["Manufacturer discloses thin casing has limited force resistance"],
    bestFor: "Buyers storing flat personal documents like a passport or checkbook.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Prioritized privacy from roommates or family over institutional theft resistance", description: "Personal safes are usually about discretion in a shared living space, not defending against a break-in. We weighted self-locking design, lockout deterrents, and discreet fit accordingly." },
  { title: "Checked portability for dorm, rental, and moving scenarios", description: "The Master Lock and Amazon Basics picks are genuinely portable via tether or carry design; the mountable steel options assume a more permanent personal storage location." },
  { title: "Verified interior dimensions against realistic personal items", description: "We checked confirmed interior measurements against passports, wallets, medication, and small jewelry rather than assuming any small safe fits a personal item set equally well." },
  { title: "Passed through manufacturer force-resistance disclosures honestly", description: "One listing directly states its thin casing has limits under pry tools. We flagged this since a personal safe's threat model (roommate curiosity) differs from a high-security threat model." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Living Situation",
    table: {
      headers: ["Situation", "Recommended pick"],
      rows: [
        ["Dorm or rental, needs to move", "Master Lock Small Travel Safe with Cable"],
        ["Shared bedroom, privacy from roommates", "Yuanshikj Small Steel Security Safe Box (self-locking)"],
        ["Broad personal item coverage across moves", "Amazon Basics Portable Security Case"],
        ["Flat documents like a passport", "KYODOLED Safe Box (wide flat interior)"],
      ],
    },
  },
  {
    subheading: "Personal Privacy vs. High-Security Threat Model",
    note: "Most picks here are built to deter casual access by a roommate, family member, or houseguest, not to resist a determined break-in. If your threat model genuinely includes forced entry, look toward a heavier mountable safe with confirmed bolt-down hardware rather than these lighter personal options.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Choose portability or mounting based on how permanent your living situation is", explanation: "A tether-cable design like the Master Lock pick suits a dorm or rental; a mountable steel box suits a more permanent personal space where you can drill." },
  { criterion: "Weigh self-locking doors for shared-space privacy", explanation: "A magnetic auto-locking design like the Yuanshikj pick removes the risk of accidentally leaving personal items exposed in a shared bedroom." },
  { criterion: "Check interior shape against your specific personal items", explanation: "A wide, flat interior suits documents; a deeper compartment suits a mix of cash, jewelry, and medication. Match the shape to what you're actually storing." },
  { criterion: "Consider a lockout deterrent if roommate or family privacy is the actual concern", explanation: "Several picks here trigger a cooldown after repeated wrong entries, a real deterrent against someone attempting to guess your personal code." },
  { criterion: "Match the threat model to the product, not the marketing", explanation: "These are personal-privacy safes, not high-security vaults. If you need genuine forced-entry resistance, look toward heavier bolt-down safes instead." },
];

export const faq: FaqItem[] = [
  { q: "What's the best personal safe for a dorm room?", a: "The Master Lock Small Travel Safe with Cable, which tethers to a fixed object without needing to drill into dorm walls." },
  { q: "Is there a self-locking option so I don't forget to lock it?", a: "Yes, the Yuanshikj Small Steel Security Safe Box uses a magnetic auto-locking door that secures itself the moment you close it." },
  { q: "Which pick best fits a passport without folding it?", a: "The KYODOLED Safe Box with Digital Keypad Lock, with a wide flat interior at 11.7 x 9.12 x 2.75 inches." },
  { q: "Is there an option for occasional trusted access by someone else?", a: "Yes, the Digital Electronic Money Safe supports two independent access codes." },
  { q: "Do these safes resist a determined break-in?", a: "Not necessarily. These are built primarily for privacy from roommates or family, not forced entry. For genuine high-security needs, look toward a heavier bolt-down safe." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-small-safes", title: "Best Portable Small Safes (2026)" },
  { href: "/guide/best-small-safes-for-dorm-rooms", title: "Best Small Safes for Dorm Rooms (2026)" },
  { href: "/guide/best-small-safe-lock-boxes", title: "Best Small Safe Lock Boxes (2026)" },
];
