export const guideSlug = "best-portable-small-safes";
export const guideTitle = "7 Best Portable Small Safes in 2026";
export const metaTitle = "Best Portable Small Safes (2026)";
export const metaDescription =
  "7 verified portable safes compared on tether options, carry weight, and travel-specific features, after excluding one ASIN not accessible in our research.";
export const mainKeyword = "portable small safes";
export const introParagraphs = [
  "Portability trades off against anti-removal security by definition: a safe light enough to carry easily is also light enough for someone else to carry away. We compared confirmed tether options, carry handles, and travel-specific features across these picks rather than treating portable as automatically less secure without qualification.",
  "One original candidate ASIN was not accessible through the product catalog at research time, so we're presenting the 7 we could verify.",
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
    id: "b005k6jqxq-pss2",
    rank: 1,
    badge: "Best for Hotel/Rental Tethering",
    name: "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    price: "$16.17",
    rating: "4.3",
    reviews: "18027",
    imageUrl: "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B005K6JQXQ?tag=deskfinds0d-20",
    description: "A tether cable is the core of this portable design: secure it to a bed frame, radiator, or luggage rack in a hotel room rather than a permanent mount, addressing the exact tradeoff portable safes face. A set-your-own four-digit combination avoids carrying a key that could be lost while traveling.\n\nA dedicated ear bud or charging cable access port lets you charge a phone while it stays locked and cabled in place, and shock-absorbing foam construction is designed to be water-resistant for a bag or backpack during transit.",
    specs: ["Tether cable for hotel/rental anchoring", "4-digit combination, no key to lose", "Charging cable access port, water-resistant"],
    pros: ["Tether cable directly addresses the portability-versus-removal tradeoff", "Only pick here with a dedicated charging cable access port"],
    cons: ["Tether-only anti-removal, lighter than a fixed steel box"],
    bestFor: "Travelers wanting to secure valuables to a fixed object in a hotel room or rental.",
  },
  {
    id: "b077k1yh8z-pss2",
    rank: 2,
    badge: "Best for Broad Travel Item Coverage",
    name: "Amazon Basics Portable Security Case Lock Box Safe with Combination Lock",
    price: "$17.84",
    rating: "4.4",
    reviews: "9964",
    imageUrl: "https://m.media-amazon.com/images/I/31iXiZaJiIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B077K1YH8Z?tag=deskfinds0d-20",
    description: "Anti-pry steel construction with a foam-padded interior is explicitly rated for cash, jewelry, documents, and firearms together, a genuinely broad travel-item scope. A zinc alloy combination lock avoids managing a physical key while moving between locations.\n\nSmall enough to store discreetly in a suitcase or vehicle, and genuinely lightweight for carrying, the compact design trades mounting capability entirely for ease of transport between a car, hotel, or temporary living situation.",
    specs: ["Portable, anti-pry steel construction", "Foam-padded interior, explicitly rated for firearms", "Zinc alloy combination lock"],
    pros: ["Explicitly rated for a broad range of travel-relevant items including firearms", "Genuinely lightweight and easy to pack"],
    cons: ["No tether or mounting option, purely portable"],
    bestFor: "Buyers wanting one lightweight case covering a wide range of travel valuables.",
  },
  {
    id: "b0fx2969y8-pss2",
    rank: 3,
    badge: "Best for Roommate/Shared-Space Deterrence",
    name: "Small Safe for Home, 6.69\"H Safe Box with Fireproof Waterproof Bag",
    price: "$34.99",
    rating: "4.5",
    reviews: "298",
    imageUrl: "https://m.media-amazon.com/images/I/41L5x2i66HL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FX2969Y8?tag=deskfinds0d-20",
    description: "At 10.63\" W x 6.69\" D x 6.69\" H, this genuinely fits tiny apartment or dorm spaces, and reserved holes inside let you secure it in a concealed cabinet or on a wall, a middle ground between fully portable and fully mounted. A wrong password entered 3 times triggers a 60-second alarm with mute mode for discreet use, specifically framed by the manufacturer as a deterrent against roommates or guests.\n\nThree unlocking ways, keypad, key, and external battery case, mean no single point of failure if you're moving between locations frequently. Two steel lock bolts provide physical protection, though the safe body itself is not fireproof despite the included fireproof bag.",
    specs: ["10.63×6.69×6.69 in, semi-portable with optional anchoring", "Alarm system with mute mode, explicitly for shared-space deterrence", "3 unlocking ways: keypad, key, external battery"],
    pros: ["Alarm deterrent specifically framed for roommate or guest access scenarios", "Reserved anchor holes offer optional semi-permanent security"],
    cons: ["Safe body itself is explicitly not fireproof"],
    bestFor: "Buyers in shared housing wanting a portable option with an active deterrent, not just a lock.",
  },
  {
    id: "b004lamjvi-pss2",
    rank: 4,
    badge: "Best Compact Travel Tether",
    name: "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    price: "$21.99",
    rating: "4.3",
    reviews: "2541",
    imageUrl: "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004LAMJVI?tag=deskfinds0d-20",
    description: "A resettable three-digit combination provides keyless convenience with no batteries, genuinely useful for portable use where you don't want to track a physical key. A tethering cable secures it to a fixed object, explicitly marketed for campus, coffee shops, or office use, settings where you're not the one controlling the walls.\n\nAt a compact 2.6\" H x 5.9\" W x 8.0\" D exterior, solid steel construction handles compact items like keys, cash, credit cards, and USB drives, small enough to genuinely travel in a bag.",
    specs: ["Resettable 3-digit combination, no batteries", "Tethering cable for public/shared spaces", "Compact-item sized, solid steel"],
    pros: ["Purpose-built for public and semi-public spaces (campus, coffee shops)", "No-battery mechanical reliability"],
    cons: ["Small interior, compact items only"],
    bestFor: "Students or remote workers needing a compact tetherable safe in public spaces.",
  },
  {
    id: "b0crr524vk-pss2",
    rank: 5,
    badge: "Best for Travel Document Bulk",
    name: "DocSafe 5200°F Fireproof Document Organizer Box with Lock, Heat Insulated",
    price: "$31.33",
    rating: "4.5",
    reviews: "312",
    imageUrl: "https://m.media-amazon.com/images/I/51xzFNOAeLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRR524VK?tag=deskfinds0d-20",
    description: "A soft-bag design is genuinely lighter and easier to pack than any steel safe in this comparison, with a strong handle specifically designed to insert into a suitcase handle sleeve for travel. Waterproof zippers seal the bag closed with a combination lock.\n\nInternal organization includes 8 passport mesh bags, 16 card slots, 4 USB drive pockets, and 7 folder layers, the most travel-document-specific organization here, genuinely useful if you're carrying passports, cards, and files together while moving.",
    specs: ["Soft bag, suitcase-handle-compatible carry design", "8 passport bags, 16 card slots, 4 USB pockets, 7 folder layers", "Waterproof zippers, combination lock"],
    pros: ["Lightest, most travel-packable design in this comparison", "Most extensive document-specific organization for travel"],
    cons: ["Soft bag construction offers less physical impact resistance than a steel box"],
    bestFor: "Travelers carrying a large volume of documents, cards, and files who want organized, lightweight portability.",
  },
  {
    id: "b008nhkwzu-pss2",
    rank: 6,
    badge: "Best Portable Fire Protection",
    name: "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    price: "See listing",
    rating: "4.6",
    reviews: "22264",
    imageUrl: "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008NHKWZU?tag=deskfinds0d-20",
    description: "Built-in carrying grips make this genuinely portable while still delivering UL classified fire endurance at 1550°F for documents, unlike the lighter-duty combination lock boxes here. A separate ETL verification covers digital media specifically.\n\nA privacy key lock (2 keys included) prevents unauthorized access, and a lifetime after-fire replacement guarantee backs the safe directly, a meaningful assurance for a portable safe you might be relying on during an actual emergency.",
    specs: ["Carrying grips, UL Classified: 1/2 hr at 1550°F", "ETL Verified for digital media", "Lifetime after-fire replacement guarantee"],
    pros: ["Only portable-friendly pick here with a genuine fire classification", "Lifetime after-fire replacement guarantee"],
    cons: ["Heavier than the lighter combination-lock travel boxes here"],
    bestFor: "Buyers wanting portable fire protection, not just theft deterrence, for documents on the move.",
  },
  {
    id: "b008hzui34-pss2",
    rank: 7,
    badge: "Best Portable Fire Protection With Bolt-Down Option",
    name: "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    price: "$39.98",
    rating: "4.6",
    reviews: "2807",
    imageUrl: "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008HZUI34?tag=deskfinds0d-20",
    description: "This is explicitly marketed for both home and travel use, with a built-in carrying handle for portability and bolt-down hardware included for when it's staying put at home instead. UL Classified fire endurance and ETL digital-media verification match the sibling SentrySafe pick above.\n\nA flat key lock design specifically prevents the lid from opening during a fire, with 2 keys included, genuinely useful whether this safe is traveling with you or anchored at home for a season.",
    specs: ["Carrying handle + bolt-down hardware for dual use", "UL Classified: 1/2 hr at 1550°F", "2 keys included"],
    pros: ["Only pick here offering both genuine portability AND a bolt-down option for the same unit"],
    cons: ["Heavier than the lighter combination-lock travel boxes here"],
    bestFor: "Buyers wanting one safe that moves between traveling and anchored home use.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified tether or carry-specific features rather than assuming portable means less secure", description: "We checked for confirmed tether cables, carrying handles, and travel-specific details (like a suitcase-handle-compatible carry design) rather than treating every portable pick identically." },
  { title: "Separated fire-rated portable safes from combination-lock-only travel boxes", description: "Two picks here confirm genuine UL fire classification alongside portability; the lighter combination-lock boxes offer theft deterrence and convenience but no documented fire protection." },
  { title: "Noted where a portable design also offers an optional anchor point", description: "One pick includes reserved holes for optional wall or cabinet mounting despite its compact, semi-portable size, a genuine middle ground worth flagging." },
  { title: "Excluded the inaccessible ASIN rather than fabricating its data", description: "One original candidate ASIN returned ItemNotAccessible from the product catalog API at research time. We excluded it and disclosed the gap rather than guessing." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Travel or Portable Use Case",
    table: {
      headers: ["Use case", "Recommended pick"],
      rows: [
        ["Hotel room, need to tether", "Master Lock Small Travel Safe with Cable"],
        ["Broad item coverage including firearms", "Amazon Basics Portable Security Case"],
        ["Large document volume, lightweight", "DocSafe 5200°F Fireproof Document Organizer"],
        ["Portable AND fire-rated", "SentrySafe Fireproof Safe Box with Key Lock"],
      ],
    },
  },
  {
    subheading: "The Portability-Security Tradeoff",
    note: "A portable safe should not be considered equivalent to a properly anchored fixed safe for burglary resistance, its entire design premise trades weight and mobility for convenience. If genuine anti-theft security is your priority, look at a mountable steel safe instead and actually anchor it. These portable picks suit temporary situations (travel, dorms, shared housing) where mobility matters more than resisting a determined thief.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Don't treat portable as equivalent to anchored security", explanation: "A portable safe, however well locked, can simply be picked up and carried away. If genuine theft resistance matters more than mobility, choose a mountable safe instead." },
  { criterion: "Check for a tether cable if you need semi-anchored security in a temporary space", explanation: "A tether cable, like the Master Lock and SentrySafe combination picks, secures the safe to a fixed object without needing permanent mounting hardware." },
  { criterion: "Weigh soft-bag organizers against rigid steel boxes for your specific carry needs", explanation: "The DocSafe soft organizer is lighter and more travel-packable but offers less physical impact resistance than a steel chest." },
  { criterion: "Confirm fire protection is documented if that's actually your priority, not just theft deterrence", explanation: "Only two picks here confirm a genuine UL fire classification. The lighter combination-lock boxes prioritize convenience and theft deterrence, not fire survival." },
  { criterion: "Consider a dual-use pick if the safe moves between traveling and staying anchored at home", explanation: "One pick here confirms both a carrying handle and bolt-down hardware, useful if your safe's role changes between seasons or living situations." },
];

export const faq: FaqItem[] = [
  { q: "What's the best portable safe for a hotel room?", a: "The Master Lock Small Travel Safe with Cable, which tethers to a fixed object like a bed frame or luggage rack." },
  { q: "Is there a portable safe rated for firearms?", a: "Yes, the Amazon Basics Portable Security Case explicitly rates for firearms alongside cash, jewelry, and documents." },
  { q: "Is there a portable option with genuine fire protection?", a: "Yes, both SentrySafe picks here confirm UL fire classification alongside portable carrying handles." },
  { q: "What's the lightest option for traveling with a lot of documents?", a: "The DocSafe 5200°F Fireproof Document Organizer, a soft bag with extensive document-specific organization." },
  { q: "Why does this list have 7 products instead of 8?", a: "One original candidate ASIN was not accessible through the Amazon catalog API at research time, so we excluded it rather than fabricating its data." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-safe-lock-boxes", title: "Best Small Safe Lock Boxes (2026)" },
  { href: "/guide/best-personal-small-safes", title: "Best Personal Small Safes (2026)" },
  { href: "/guide/best-small-safes-for-dorm-rooms", title: "Best Small Safes for Dorm Rooms (2026)" },
];
