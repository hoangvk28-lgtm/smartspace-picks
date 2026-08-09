export const guideSlug = "best-small-safes-for-closets";
export const guideTitle = "8 Best Small Safes for Closets in 2026";
export const metaTitle = "Best Small Safes for Closets (2026)";
export const metaDescription =
  "8 safes compared for closet placement: shelf and floor load, anchor access, and low-light usability, since a closet installation has real constraints.";
export const mainKeyword = "small safes for closets";
export const introParagraphs = [
  "A closet installation has constraints most safe listings don't address directly: shelf load limits, whether floor or wall anchoring is actually accessible behind baseboards or shelving, and whether you can see the keypad or dial in a dim space. We compared confirmed weight, mounting hardware, and access-lighting features with closet placement specifically in mind.",
  "We also checked which picks include an interior light or illuminated keypad, since a closet is one of the dimmer common placement spots for a small safe.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0ckpf8gf9-ssfc",
    rank: 1,
    badge: "Best Overall for Closet Shelving",
    name: "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    price: "$52.24",
    rating: "4.6",
    reviews: "1326",
    imageUrl: "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKPF8GF9?tag=deskfinds0d-20",
    description: "A removable shelf lets you split closet-stored valuables across layers rather than piling everything in one compartment, and a felt-lined bottom prevents scratching against a wooden closet shelf. Pre-drilled installation holes with two included expansion screws let you actually anchor it inside a wall cabinet or closet shelf.\n\nThree access methods, personal code, emergency override key, or Type-C emergency power, mean you're not locked out if a battery dies in a closet you don't check daily. FCC certified with professional support behind it.",
    specs: ["0.6 cu ft, removable shelf, mountable design", "3 access methods: code, key, or USB-C emergency power", "FCC certified"],
    pros: ["Largest closet-appropriate capacity in this comparison", "Multiple access methods reduce lockout risk in a rarely-checked closet"],
    cons: ["No confirmed interior light for low-light closet access"],
    bestFor: "Buyers wanting the roomiest closet-mountable safe with backup access.",
  },
  {
    id: "b0crh68745-ssfc",
    rank: 2,
    badge: "Best Compact Closet Footprint",
    name: "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    price: "$37.99",
    rating: "4.6",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH68745?tag=deskfinds0d-20",
    description: "At 9.06\" W x 6.69\" D x 6.69\" H, this genuinely fits a standard closet shelf without dominating the space, with two pre-drilled installation holes on the back and bottom for mounting under a shelf or on the floor. Two 0.71-inch steel reinforcement bolts back the physical security.\n\nThe USB-C emergency power interface is particularly relevant for closet placement: if you rarely check the safe and the battery dies unnoticed, an external power bank still gets you in rather than requiring a locksmith or emergency key hunt.",
    specs: ["0.23 cu ft, compact closet footprint", "Two pre-drilled installation holes for shelf/floor mounting", "USB-C emergency power backup"],
    pros: ["Compact footprint fits a standard closet shelf without crowding it", "USB-C backup is genuinely useful for a rarely-checked closet safe"],
    cons: ["No confirmed usage history for this specific listing yet"],
    bestFor: "Buyers wanting a compact safe that fits standard closet shelving without crowding it.",
  },
  {
    id: "b000z8r73u-ssfc",
    rank: 3,
    badge: "Best for Closet Floor Placement",
    name: "SentrySafe Shelf Safe with Digital Keypad Lock, Steel Safe with Interior Light",
    price: "$101.96",
    rating: "4.4",
    reviews: "3891",
    imageUrl: "https://m.media-amazon.com/images/I/31NRp-xRm+S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B000Z8R73U?tag=deskfinds0d-20",
    description: "This is the only pick here explicitly confirming an interior light, genuinely useful for a dim closet where you're trying to see what's inside without hauling it into a lit room. At 16.9\" W x 14.6\" D x 7.1\" H and 17 pounds, this is sized more for closet floor placement than a shelf.\n\nBolt-down hardware is included for floor anchoring specifically, with a carpeted floor and concealed hinges. Note this is explicitly not a fireproof or waterproof safe, a basic security deterrent rather than disaster protection.",
    specs: ["16.9×14.6×7.1 in, 17 lbs, floor-oriented design", "Confirmed interior light", "Bolt-down hardware for floor anchoring, NOT fireproof"],
    pros: ["Only pick here with a confirmed interior light for dim closet visibility", "Bolt-down hardware specifically suited to closet floor anchoring"],
    cons: ["Explicitly not fireproof or waterproof", "Too large and heavy for a typical shelf, floor placement only"],
    bestFor: "Buyers wanting closet floor placement with genuine low-light visibility.",
  },
  {
    id: "b078myjyd5-ssfc",
    rank: 4,
    badge: "Most Proven Compact Option",
    name: "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    price: "$23.99",
    rating: "4.4",
    reviews: "22969",
    imageUrl: "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B078MYJYD5?tag=deskfinds0d-20",
    description: "A magnetic auto-locking door means you can't accidentally leave a closet-stored safe unlocked between visits, since it secures itself the moment you close it. Reinforced solid steel construction with dual door locking bolts backs the physical security at a compact 9.05 x 6.69 x 6.69 inches.\n\nPre-drilled mounting holes with included bolts let you anchor it to a closet shelf or floor, and the corrosion-resistant powder coat finish holds up in a closet that might see occasional humidity.",
    specs: ["0.2 cu ft, mountable, corrosion-resistant finish", "Magnetic auto-lock door", "Pre-drilled mounting holes + bolts included"],
    pros: ["Self-locking door prevents accidentally leaving a closet safe unlocked", "Corrosion-resistant finish suited to closet humidity"],
    cons: ["No confirmed interior light for low-light access"],
    bestFor: "Buyers wanting a self-locking, humidity-resistant closet safe at a low price.",
  },
  {
    id: "b09sz6gpgr-ssfc",
    rank: 5,
    badge: "Best Low-Light Keypad Access",
    name: "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    price: "$31.99",
    rating: "4.5",
    reviews: "3167",
    imageUrl: "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SZ6GPGR?tag=deskfinds0d-20",
    description: "An automatic interior light switches on for 30 seconds when the keypad opens the door, directly addressing the low-light closet placement problem without needing to prop the closet door open or use a phone flashlight. The keypad confirms correct entries with an indicator light too.\n\nReinforced alloy steel with pry-resistant concealed hinges backs the security, and a low-battery warning light matters specifically for a closet safe you might not check daily, catching a dying battery before it fully locks you out.",
    specs: ["0.23 cu ft, mountable steel box", "Auto interior light, low-battery warning", "3-wrong-entry lockout (5 min)"],
    pros: ["Auto interior light directly solves dim-closet visibility", "Low-battery warning catches issues before a full lockout"],
    cons: ["Compact interior similar to other budget options"],
    bestFor: "Buyers wanting the most closet-optimized visibility features at this price point.",
  },
  {
    id: "b0d1x55sw4-ssfc",
    rank: 6,
    badge: "Best Concealed Design",
    name: "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    price: "$29.99",
    rating: "4.2",
    reviews: "4957",
    imageUrl: "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1X55SW4?tag=deskfinds0d-20",
    description: "A smart concealed design is explicitly built to blend into a closet, and two pegs let you hide it on a shelf, wall, or cabinet rather than sitting in plain sight. SPCC steel construction with 18mm dual locking bolts backs the physical security at a compact 6.7\" x 9.0\" x 6.7\" footprint.\n\nHidden pry-resistant hinges reinforce the concealment approach, and two separate access codes support shared closet access if more than one household member needs entry.",
    specs: ["4.6L, SPCC steel, concealment-focused mounting via pegs", "2 independent access codes supported", "Fits perfectly in a closet, drawer, or under a table"],
    pros: ["Peg-mounting system specifically designed for closet concealment", "Supports two independent codes for shared closet access"],
    cons: ["4-step setup process is more involved than simpler competitors"],
    bestFor: "Buyers wanting a safe explicitly designed to disappear into closet shelving.",
  },
  {
    id: "b00ug9hb1q-ssfc",
    rank: 7,
    badge: "Best Adjustable Interior Shelf",
    name: "Amazon Basics Steel Security Safe and Lock Box with Electronic Keypad",
    price: "$57.74",
    rating: "4.5",
    reviews: "8214",
    imageUrl: "https://m.media-amazon.com/images/I/41RK6qkncSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00UG9HB1Q?tag=deskfinds0d-20",
    description: "At 0.5 cubic feet with an adjustable, removable interior shelf, this genuinely lets you reconfigure the internal layout for what your closet actually needs to store, taller items on one level, flat items separated below. Three operation indicator lights confirm keypad status.\n\nA carpeted floor protects against scratches, and pre-drilled mounting holes with four included expansion bolts let you mount to wall, floor, or a closet shelf specifically. Two emergency override keys back up the keypad if batteries die.",
    specs: ["0.5 cu ft, adjustable removable interior shelf", "3 operation indicator lights, carpeted floor", "4 expansion bolts included, wall/floor/shelf mountable"],
    pros: ["Adjustable interior shelf lets you reconfigure for your closet's specific items"],
    cons: ["Requires 4 AA batteries, not included"],
    bestFor: "Buyers wanting a reconfigurable interior layout matched to specific closet storage needs.",
  },
  {
    id: "b0crh4r471-ssfc",
    rank: 8,
    badge: "Best No-Battery Closet Option",
    name: "Bonsaii Security Safe Box with Key Lock, 0.23 Cu.Ft for Cash Jewelry Home",
    price: "$29.99",
    rating: "4.5",
    reviews: "612",
    imageUrl: "https://m.media-amazon.com/images/I/51iNMIzAY4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH4R471?tag=deskfinds0d-20",
    description: "A key lock means zero battery dependency for a closet safe you might not check for weeks, no risk of returning to a dead battery and no code to forget. Durable SPCC steel with a pry-resistant door and hidden hinges backs the physical security.\n\nPre-drilled installation holes on the back and bottom let you mount it under a closet shelf or floor, with explicit advice to store the spare key somewhere other than the closet itself.",
    specs: ["0.23 cu ft, mountable, key-only (no battery)", "Pry-resistant door, hidden hinges", "Explicit spare-key storage guidance"],
    pros: ["Zero battery dependency, ideal for a rarely-checked closet safe"],
    cons: ["Key-only, no digital backup access method"],
    bestFor: "Buyers wanting a closet safe with no battery to ever die unnoticed.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Checked for interior lighting given closet placement is typically dim", description: "Only two picks here confirm an interior light or auto-illumination on keypad entry. We flagged this as a genuine usability factor specific to closet installation." },
  { title: "Verified mounting hardware works for shelf, wall, or floor closet installation", description: "We checked which picks confirm pre-drilled holes and included hardware suited to typical closet mounting surfaces (wood shelving, drywall, or floor)." },
  { title: "Weighed dead-battery risk higher given closets are often checked infrequently", description: "A closet safe may go unopened for weeks. We prioritized picks with a documented backup access method (key, USB-C power) or no battery dependency at all (key-only lock)." },
  { title: "Noted concealment-specific design features", description: "One pick specifically confirms a peg-mounting system for closet concealment, a genuinely different approach from generic pre-drilled mounting holes." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Closet Placement Type",
    table: {
      headers: ["Placement", "Recommended pick"],
      rows: [
        ["Closet shelf, roomiest capacity", "Bonsaii Safe Box with Electronic Keypad, 0.6 Cu.Ft"],
        ["Closet floor, needs interior light", "SentrySafe Shelf Safe with Digital Keypad Lock"],
        ["Concealed behind shelving via pegs", "Digital Electronic Money Safe, Steel Security Lock Box"],
        ["Rarely-checked closet, zero battery risk", "Bonsaii Security Safe Box with Key Lock"],
      ],
    },
  },
  {
    subheading: "Closet Access You Won't Check Often",
    note: "If your closet safe won't be opened daily, prioritize either a key-only design (zero battery dependency) or a confirmed backup power method like USB-C. A dead battery on a keypad-only safe you haven't checked in weeks means either finding the emergency key anyway or contacting the manufacturer, neither of which is convenient in the moment you actually need access.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check shelf weight capacity before mounting a heavier safe", explanation: "The heaviest pick here weighs 17 pounds; verify your closet shelf or its brackets can support that weight before mounting, especially for wire or particleboard shelving." },
  { criterion: "Consider an interior light or illuminated access for dim closets", explanation: "Only two picks here address low-light visibility directly. If your closet lacks good lighting, this genuinely matters for daily usability." },
  { criterion: "Weigh dead-battery risk higher for a safe you check infrequently", explanation: "A closet safe often goes unopened for weeks. Prioritize a documented backup power method or a key-only design with zero battery dependency." },
  { criterion: "Verify anchor points are accessible behind your specific closet shelving", explanation: "Pre-drilled mounting holes only help if you can actually reach the mounting surface behind existing shelving or baseboards. Check clearance before ordering." },
  { criterion: "Consider concealment features if the safe itself shouldn't be visible", explanation: "One pick here specifically uses a peg-mounting system for closet concealment, worth considering if you want the safe hidden behind hanging clothes or shelving." },
];

export const faq: FaqItem[] = [
  { q: "What's the best overall closet safe?", a: "The Bonsaii Safe Box with Electronic Keypad, 0.6 Cu.Ft, with the roomiest capacity and three access methods reducing lockout risk." },
  { q: "Is there an option with an interior light for a dim closet?", a: "Yes, the SentrySafe Shelf Safe confirms an interior light, and the Voncabay pick auto-illuminates on keypad entry." },
  { q: "What if I don't check my closet safe often and the battery dies?", a: "Choose a key-only design like the Bonsaii Security Safe Box with Key Lock for zero battery dependency, or a pick confirming USB-C emergency power backup." },
  { q: "Is there a design specifically for hiding the safe behind closet shelving?", a: "Yes, the Digital Electronic Money Safe uses a peg-mounting system explicitly designed for concealment." },
  { q: "How heavy is the heaviest closet-appropriate pick here?", a: "The SentrySafe Shelf Safe weighs 17 pounds; verify your shelf can support that weight before mounting." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-safes-for-home", title: "Best Small Safes for Home (2026)" },
  { href: "/guide/best-small-safes-that-bolt-to-the-floor", title: "Best Small Safes That Bolt to the Floor (2026)" },
  { href: "/guide/best-hidden-small-safes", title: "Best Hidden Small Safes (2026)" },
];
