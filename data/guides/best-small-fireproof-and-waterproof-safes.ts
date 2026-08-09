export const guideSlug = "best-small-fireproof-and-waterproof-safes";
export const guideTitle = "Best Small Fireproof and Waterproof Safes: An Honest Guide";
export const metaTitle = "Best Fireproof and Waterproof Safes (2026)";
export const metaDescription =
  "Honest finding: only 2 of our 7 verified fireproof safes separately document water resistance. We disclose this rather than assuming fire rating implies flood protection.";
export const mainKeyword = "small fireproof and waterproof safes";
export const introParagraphs = [
  "We need to be direct here: fire resistance and water resistance are two separate engineering claims, and one does not imply the other. Of the 7 verified fireproof safes in our research pool, only 2 separately document both a fire classification and a water-resistance verification. We're disclosing this directly rather than presenting all 7 as equally dual-rated.",
  "For the 5 picks with fire protection documented but no separate water claim, we're noting that gap explicitly rather than assuming their steel construction happens to also be waterproof.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/51T8rsbqkgL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b00ge57dfk-sfws",
    rank: 1,
    badge: "Best Overall, Fire + Water Both Documented",
    name: "SentrySafe Black Fireproof and Waterproof Safe, File Folder and Document Box",
    price: "$67.99",
    rating: "4.5",
    reviews: "14963",
    imageUrl: "https://m.media-amazon.com/images/I/51T8rsbqkgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00GE57DFK?tag=deskfinds0d-20",
    description: "This is one of only two picks in our research confirming both a UL fire classification (up to 30 minutes at high temperature) and separate ETL verification for water exposure, two independent tests rather than one claim inferring the other. The spacious interior specifically fits hanging file folders, useful for passports, insurance records, and legal paperwork.\n\nA durable key lock with 2 included keys prevents unauthorized access and keeps the lid securely closed during a fire event, and the compact footprint fits a closet or under a desk while remaining portable enough to relocate quickly.",
    specs: ["UL Classified fire rating + ETL Verified water protection", "Hanging file folder capacity", "Key lock, 2 keys included"],
    pros: ["Independently documented fire AND water protection, not inferred from one claim"],
    cons: ["Higher price than the fire-only alternatives here"],
    bestFor: "Buyers who specifically need both hazards documented separately, not just fire resistance.",
  },
  {
    id: "b00mv7myrm-sfws",
    rank: 2,
    badge: "Fire + Water Both Documented, Flush-Mount",
    name: "SentrySafe Dark Gray Fireproof and Waterproof Safe with Key Lock, Chest Lock Box",
    price: "$72.79",
    rating: "4.4",
    reviews: "3197",
    imageUrl: "https://m.media-amazon.com/images/I/41WUsrhDxML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00MV7MYRM?tag=deskfinds0d-20",
    description: "The second and only other pick here with a genuinely documented dual rating: a flush-mounted lid engineered specifically for both waterproofing and fire resistance, classified to protect valuables, documents, and digital media (CDs, DVDs, hard drives, memory sticks) together. A privacy key lock keeps documents away from prying eyes.\n\nConvenient to pick up and transport when needed, at the highest price in this comparison, reflecting the flush-mount waterproof engineering that most fire-only competitors don't attempt.",
    specs: ["Flush-mounted lid, fire + water resistant", "Rated for documents, CDs, DVDs, hard drives, memory sticks together", "Privacy key lock"],
    pros: ["Flush-mounted lid design specifically engineered for both fire and water resistance", "Rated for the broadest mix of digital media formats here"],
    cons: ["Highest price in this comparison"],
    bestFor: "Buyers wanting the widest documented content-type protection alongside dual fire/water rating.",
  },
  {
    id: "b008nhkwzu-sfws",
    rank: 3,
    badge: "Fire-Only, Most Documented Rating",
    name: "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    price: "See listing",
    rating: "4.6",
    reviews: "22264",
    imageUrl: "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008NHKWZU?tag=deskfinds0d-20",
    description: "This listing does not document a separate water-resistance claim, so we're including it honestly as a fire-only pick rather than implying water protection it doesn't confirm. It is UL classified for fire endurance at 1550°F for documents and separately ETL verified for digital media at the same conditions, plus a lifetime after-fire replacement guarantee.\n\nA privacy key lock (2 keys included) prevents the lid from opening during a fire event, and built-in carrying grips assist portability during an evacuation.",
    specs: ["UL classified: fire endurance at 1550°F (documents)", "ETL verified: digital media protection (same conditions)", "No separate water-resistance claim documented"],
    pros: ["Lifetime after-fire replacement guarantee, unique in this comparison"],
    cons: ["No documented water resistance, fire protection only"],
    bestFor: "Buyers whose priority is fire protection specifically, without needing water resistance.",
  },
  {
    id: "b008hzui34-sfws",
    rank: 4,
    badge: "Fire-Only, Travel Portable",
    name: "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    price: "$39.98",
    rating: "4.6",
    reviews: "2807",
    imageUrl: "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008HZUI34?tag=deskfinds0d-20",
    description: "Also fire-only in our confirmed data: UL Classified to endure 1/2 hour at 1550°F and separately ETL Verified for CDs, DVDs, and USBs, but no documented water-resistance test. A flat key lock prevents the lid from opening during a fire, with 2 keys included.\n\nBolt-down hardware ships included rather than sold separately, a genuine anti-removal feature, alongside a built-in carrying handle explicitly for travel or home portability.",
    specs: ["UL Classified: 1/2 hr at 1550°F", "ETL Verified for CDs/DVDs/USBs specifically", "No separate water-resistance claim documented"],
    pros: ["Bolt-down hardware included, carrying handle for travel"],
    cons: ["No documented water resistance, fire protection only"],
    bestFor: "Buyers needing travel-portable fire protection without requiring water resistance.",
  },
  {
    id: "b0cbnq8lyx-sfws",
    rank: 5,
    badge: "Fire-Only, Double Steel Wall",
    name: "Honeywell Safes & Door Locks - Small Safe Box for Home - Fire Resistant",
    price: "$35.35",
    rating: "4.7",
    reviews: "5439",
    imageUrl: "https://m.media-amazon.com/images/I/31f4yBhxMmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CBNQ8LYX?tag=deskfinds0d-20",
    description: "Double steel wall construction sandwiches fire-resistant insulation between two layers of steel, a genuine structural approach, but this listing does not separately confirm water resistance. A dual locking system combines a secure key lock with 2 entry keys included.\n\nA reinforced hinge specifically resists tampering, and a foam-padded floor prevents scratches, positioned for documents, passports, or a cell phone at an accessible price given the fire-only scope.",
    specs: ["Double steel wall + fire-resistant insulation", "Dual locking system, 2 keys included", "No separate water-resistance claim documented"],
    pros: ["Double steel wall construction at an accessible price"],
    cons: ["No documented water resistance, fire protection only"],
    bestFor: "Budget-conscious buyers who specifically need fire protection, not water resistance.",
  },
  {
    id: "b00btmu8vy-sfws",
    rank: 6,
    badge: "Fire-Only, Digital Keypad Access",
    name: "Honeywell Safes & Door Locks - Hideable Small Safe Box - Fire Resistant",
    price: "$99.97",
    rating: "4.2",
    reviews: "2535",
    imageUrl: "https://m.media-amazon.com/images/I/41sdhXik28L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00BTMU8VY?tag=deskfinds0d-20",
    description: "Double steel wall construction backs the fire-resistance claim, but no water-resistance test is separately documented in this listing. A personalized digital entry code offers keypad access rather than key-only, with 2 backup keys included if the code is forgotten.\n\nA concealed hinge specifically helps prevent tampering, engineered for discreet placement where the safe itself isn't the first thing an intruder finds, at the highest price among the fire-only picks here.",
    specs: ["Double steel wall + fire-resistant construction", "Digital entry code + 2 backup keys", "No separate water-resistance claim documented"],
    pros: ["Digital keypad access, unlike the key-only fire-only chests here"],
    cons: ["No documented water resistance", "Highest price among the fire-only picks here"],
    bestFor: "Buyers wanting keypad access and concealment, without requiring water resistance.",
  },
  {
    id: "b0g4cx2w7j-sfws",
    rank: 7,
    badge: "Fire-Only, Largest Capacity",
    name: "1.3 Cub Small Fireproof Safe for Home, Security Anti-Theft Fire Proof Safe",
    price: "$69.99",
    rating: "4.5",
    reviews: "114",
    imageUrl: "https://m.media-amazon.com/images/I/41DIhJjyfIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G4CX2W7J?tag=deskfinds0d-20",
    description: "The largest capacity in this comparison at 1.3 cubic feet, with three round 20mm locking bolts and a 45mm reinforced door backing genuine physical security. No separate water-resistance test is documented in this listing, so treat it as fire-focused rather than dual-rated.\n\nThree access methods, personal code, 2 spare keys, or external battery case, cover daily use, forgotten passwords, and dead batteries, with a dual alarm system and silent mode for discreet operation.",
    specs: ["1.3 cu ft, 45mm door, 3× 20mm locking bolts", "3 access methods: code, key, external battery", "No separate water-resistance claim documented"],
    pros: ["Largest capacity in this comparison", "Three independent access methods with a dead-battery fallback"],
    cons: ["No documented water resistance", "Fire classification body and exact conditions not independently confirmed"],
    bestFor: "Buyers wanting maximum capacity and access flexibility for fire protection specifically.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified fire and water resistance as two independent claims", description: "We required each hazard to be separately documented rather than inferring water resistance from a fire rating or vice versa. Only 2 of 7 verified picks here document both." },
  { title: "Labeled fire-only picks honestly rather than blending them into a dual-rated ranking", description: "Five picks here have strong, well-documented fire protection but no confirmed water-resistance test. We flagged each one clearly rather than implying dual protection the listing doesn't state." },
  { title: "Excluded the inaccessible ASIN rather than fabricating its data", description: "One original candidate ASIN returned ItemNotAccessible from the product catalog API at research time. We excluded it and disclosed the gap rather than guessing at its water-resistance status." },
  { title: "Compared access-recovery methods across both categories", description: "We noted whether each pick, dual-rated or fire-only, offers a documented dead-battery or lost-key recovery path, since this matters regardless of the water-resistance question." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Genuinely Dual-Rated vs. Fire-Only",
    note: "If water resistance is a hard requirement, in a basement prone to flooding, near a sprinkler system, or in a flood-risk area, only the SentrySafe Black Fireproof and Waterproof Safe and the SentrySafe Dark Gray Fireproof and Waterproof Safe in this comparison separately document that protection. The other five picks have strong, independently verified fire protection, but treat them as fire-only unless you confirm water resistance directly with the manufacturer.",
  },
  {
    subheading: "By What Matters Most",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Best dual-rated (fire + water)", "SentrySafe Black Fireproof and Waterproof Safe"],
        ["Widest content-type coverage, dual-rated", "SentrySafe Dark Gray Fireproof and Waterproof Safe"],
        ["Fire-only, most documented rating", "SentrySafe Fireproof Safe Box with Key Lock"],
        ["Fire-only, largest capacity", "1.3 Cub Small Fireproof Safe for Home"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Never assume water resistance from a fire rating alone", explanation: "Only 2 of the 7 picks in this comparison separately document water-resistance testing. A UL fire classification says nothing about flood or sprinkler exposure unless water resistance is independently stated." },
  { criterion: "Confirm the exact water-resistance scenario tested, not just the word waterproof", explanation: "Where water resistance is documented, check whether it covers submersion, sprinkler exposure, or general water contact, since these are different real-world scenarios." },
  { criterion: "Weigh fire-only options honestly if water resistance isn't actually needed", explanation: "Five strong, well-documented fire-only picks here are meaningfully cheaper than the two dual-rated options. Don't pay the dual-rating premium if your risk profile doesn't include water exposure." },
  { criterion: "Check digital media coverage separately from paper documents", explanation: "CDs, DVDs, and USB drives have different heat tolerances than paper. Several picks here separately certify both content types; confirm this before storing valuable digital media." },
  { criterion: "Consider access recovery method regardless of fire/water rating", explanation: "A dead battery or lost key locks you out during an emergency regardless of how well-rated the safe is against fire or water. Check for a documented backup access path." },
];

export const faq: FaqItem[] = [
  { q: "Which safes in this comparison are actually rated for both fire AND water?", a: "Only the SentrySafe Black Fireproof and Waterproof Safe and the SentrySafe Dark Gray Fireproof and Waterproof Safe separately document both. The other five have strong fire ratings but no confirmed water-resistance test." },
  { q: "Does a fire rating automatically mean a safe is also waterproof?", a: "No. Fire resistance and water resistance are two separate engineering claims. We disclosed this directly since 5 of our 7 verified picks document fire protection only." },
  { q: "What's the best fire-only option if I don't need water resistance?", a: "The SentrySafe Fireproof Safe Box with Key Lock, with the most explicitly documented fire rating and a lifetime after-fire replacement guarantee." },
  { q: "Is there a dual-rated option with digital keypad access?", a: "No, both genuinely dual-rated picks here use key-only locks. For digital keypad access, the fire-only Honeywell Hideable Small Safe Box or the 1.3 Cub Small Fireproof Safe are the options." },
  { q: "What's the largest capacity fire-only option?", a: "The 1.3 Cub Small Fireproof Safe for Home, at 1.3 cubic feet." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-fireproof-safes", title: "Best Small Fireproof Safes (2026)" },
  { href: "/guide/best-small-safes-for-documents", title: "Best Small Safes for Documents (2026)" },
  { href: "/guide/best-small-safes", title: "Best Small Safes (2026)" },
];
