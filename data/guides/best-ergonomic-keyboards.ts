export const guideSlug = "best-ergonomic-keyboards";
export const guideTitle = "7 Best Ergonomic Keyboards in 2026";
export const metaTitle = "Best Ergonomic Keyboards in 2026 (Wave, Split & Curved Picks)";
export const metaDescription =
  "7 best ergonomic keyboards in 2026, from wave-style options to true split layouts. Compare tenting range, wrist support, and price before you switch.";
export const mainKeyword = "ergonomic keyboard";
export const introParagraphs = [
  "An ergonomic keyboard covers a wider range of designs than most buyers expect, from a one-piece wave layout that gently curves the keys apart to a true split keyboard whose two halves separate shoulder-width. That range matters because a wave keyboard and a full split keyboard solve different problems and demand a different adjustment period, so the right pick depends on how much your wrists actually need to change position, not just on price.",
  "Below are 7 ergonomic keyboards we evaluated on tenting range, wrist support quality, build, and how honestly each one is marketed relative to what it actually does for forearm position, ranging from a $44.99 wired split board to a $229.95 wireless split keyboard built for business use.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg";

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "logitech-ergo-k860-wireless",
    rank: 1,
    badge: "Best True Split Wireless",
    name: "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest",
    price: "$148.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZWK2TQT?tag=deskfinds0d-20",
    description:
      "The Ergo K860 uses a true split layout with a domed, curved center that keeps wrists in a more neutral position than a flat keyboard, paired with a built-in negative-tilt frame that drops the front edge below the back. That negative tilt is the detail most competing keyboards skip, and it is the single biggest factor in reducing wrist extension while typing.\n\nA padded palm rest ships attached, and the whole unit pairs over Bluetooth or a USB receiver for use across multiple devices. It is heavier and pricier than a wave-style board, which fits buyers who want a genuine split rather than a curved single unit.",
    specs: [
      "True split, domed layout",
      "Built-in negative tilt",
      "Attached cushioned palm rest",
      "Bluetooth + USB receiver",
      "Multi-device pairing",
    ],
    pros: [
      "Negative tilt reduces wrist extension by design",
      "True split shape, not just a curved single unit",
      "Attached palm rest needs no separate purchase",
      "Works across multiple paired devices",
    ],
    cons: [
      "Pricier than wave-style alternatives",
      "Fixed split angle, halves don't fully separate",
      "Larger footprint than a compact board",
    ],
    bestFor: "Buyers who want a genuine split shape with negative tilt built in",
  },
  {
    id: "logitech-wave-keys-graphite",
    rank: 2,
    badge: "Best Budget Entry Point",
    name: "Logitech Wave Keys Wireless Ergonomic Keyboard - Graphite",
    price: "$59.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/4114VdW9JcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTNY72VD?tag=deskfinds0d-20",
    description:
      "Wave Keys is a one-piece wave-shaped board rather than a true split, meaning the keys curve gently apart but the two halves stay fixed together. That makes it a much easier first step for someone who has never used an ergonomic layout, with a far shorter adjustment period than a full split keyboard.\n\nA cushioned rest is built into the front edge, and the whole board runs wirelessly for months on two AAA batteries. It is a reasonable stepping stone toward a full split keyboard later, not a final destination for buyers who already know they need maximum wrist separation.",
    specs: [
      "One-piece wave layout",
      "Built-in cushioned wrist rest",
      "Wireless, AAA battery powered",
      "Bluetooth or USB receiver",
      "Compact footprint vs. split boards",
    ],
    pros: [
      "Most affordable pick in this list",
      "Easiest adjustment period of any pick here",
      "Built-in cushioned rest",
      "Long battery life on standard AAAs",
    ],
    cons: [
      "Not a true split, halves are fixed together",
      "Less forearm relief than a full split layout",
      "No adjustable tenting angle",
    ],
    bestFor: "First-time buyers easing into an ergonomic layout without a steep learning curve",
  },
  {
    id: "arteck-split-ergonomic",
    rank: 3,
    badge: "Best Adjustable Tenting",
    name: "Arteck Split Ergonomic Keyboard with Cushioned Wrist and Palm Rest",
    price: "$54.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BKKYRQ31?tag=deskfinds0d-20",
    description:
      "The Arteck splits into two halves connected by a hinge that supports an adjustable tenting angle, letting each side tilt outward to reduce forearm pronation more than a fixed wave design can. That adjustability is worth calling out since most keyboards in this price range fix the angle at the factory.\n\nA cushioned wrist and palm rest runs the width of both halves, and the 2.4GHz USB connection keeps input latency low for everyday typing. It is a genuine split at a wave-keyboard price, which makes it a strong middle ground for a hand size or comfort preference the flat wave design doesn't suit.",
    specs: [
      "True split, hinged halves",
      "Adjustable tenting angle",
      "Cushioned wrist and palm rest",
      "2.4GHz USB wireless",
      "Compatible with Windows desktop and laptop",
    ],
    pros: [
      "Adjustable tenting angle at a wave-keyboard price",
      "True split shape for real forearm relief",
      "Full-width cushioned rest included",
      "Low-latency 2.4GHz connection",
    ],
    cons: [
      "Windows-focused compatibility",
      "Bulkier than a fixed wave board",
      "Tenting hinge adds moving parts to maintain",
    ],
    bestFor: "Buyers who want adjustable tenting without paying for a premium split board",
  },
  {
    id: "logitech-wave-keys-sand",
    rank: 4,
    badge: "Best Color Alternative",
    name: "Logitech Wave Keys Wireless Ergonomic Keyboard with Cushioned Palm - Sand",
    price: "$59.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41t-gi6gelL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GVQ99JB5?tag=deskfinds0d-20",
    description:
      "This is the same Wave Keys design as our budget pick above, built in a lighter Sand colorway for a desk setup that leans neutral rather than graphite or black. The wave-shaped key layout and built-in cushioned palm rest carry over unchanged, so the ergonomic behavior is identical to the graphite version.\n\nIt suits buyers who have already decided a wave keyboard fits their needs and simply want a finish that matches a lighter desk aesthetic, rather than someone still comparing wave against a true split layout.",
    specs: [
      "One-piece wave layout",
      "Built-in cushioned palm rest",
      "Sand colorway",
      "Wireless, AAA battery powered",
      "Bluetooth or USB receiver",
    ],
    pros: [
      "Lighter colorway for neutral desk setups",
      "Same easy adjustment period as the graphite version",
      "Built-in cushioned rest",
      "Long battery life on standard AAAs",
    ],
    cons: [
      "Same ergonomic limits as the standard Wave Keys",
      "Not a true split layout",
      "No adjustable tenting angle",
    ],
    bestFor: "Buyers who want the Wave Keys ergonomics in a lighter finish",
  },
  {
    id: "perixx-peri-512b-wired-split",
    rank: 5,
    badge: "Best Budget Wired Split",
    name: "Perixx PERIBOARD-512B Wired Ergonomic Keyboard",
    price: "$44.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B075GZVD4T?tag=deskfinds0d-20",
    description:
      "The PERIBOARD-512B is the cheapest pick in this list and the only wired option, which removes battery and pairing concerns entirely for a desk that stays in one spot. Its split, curved key field follows the same natural-typing principle as pricier wireless boards, just without the tenting hinge.\n\nAn attached wrist rest supports the palm through longer sessions, and the plain USB cable means zero setup beyond plugging it in. It is a practical entry point for someone who wants to try a split layout before committing to a $100-plus wireless model.",
    specs: [
      "Split, curved key layout",
      "Attached wrist rest",
      "Wired USB connectivity",
      "US English layout",
      "No pairing or battery needed",
    ],
    pros: [
      "Lowest price in this list",
      "No battery or pairing setup required",
      "Split curved layout at a budget price",
      "Attached wrist rest included",
    ],
    cons: [
      "Wired only, no wireless option",
      "Fixed angle, no tenting adjustment",
      "Basic build compared to premium picks",
    ],
    bestFor: "Buyers who want to try a split layout on a fixed desk without spending much",
  },
  {
    id: "microsoft-surface-ergonomic",
    rank: 6,
    badge: "Best Premium Build",
    name: "Microsoft Surface Ergonomic Wireless Keyboard",
    price: "$229.95",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/515R435nUaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01MFCTRZM?tag=deskfinds0d-20",
    description:
      "The Surface Ergonomic Keyboard uses a wave-shaped curve with a plush faux-leather palm rest and a domed number pad that keeps the mouse closer to center, reducing reach distance for the right hand. Build quality is the standout here, with a fabric-wrapped deck and a dedicated cutout for a smartphone or tablet stand.\n\nIt is the most expensive pick in this list, positioned for a buyer who wants a wave-style keyboard with premium materials rather than the maximum ergonomic benefit of a full split layout.",
    specs: [
      "Wave-shaped layout",
      "Faux-leather palm rest",
      "Domed, offset number pad",
      "Bluetooth wireless",
      "Fabric-wrapped deck finish",
    ],
    pros: [
      "Premium materials and finish",
      "Offset number pad keeps the mouse closer to center",
      "Plush palm rest",
      "Reliable Bluetooth pairing",
    ],
    cons: [
      "Most expensive pick in this list",
      "Not a true split, so less pronation relief than a hinged board",
      "No adjustable tenting angle",
    ],
    bestFor: "Buyers who want premium materials in a wave-style keyboard",
  },
  {
    id: "logitech-ergo-k860-business",
    rank: 7,
    badge: "Best for Business Fleets",
    name: "Logitech Ergo K860 Split for Business Wireless Keyboard - Graphite",
    price: "$159.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41UUVLpm0DL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09DKMB981?tag=deskfinds0d-20",
    description:
      "This is the business-focused edition of the Ergo K860, carrying the same true split, domed shape, and built-in negative tilt as the standard model, with added enterprise pairing and fleet management support through Logitech's business software. The core ergonomic design is unchanged.\n\nIt fits a buyer outfitting a home office through a company IT purchase or one who wants the added device management options, rather than someone shopping purely on price who is better served by the standard consumer K860.",
    specs: [
      "True split, domed layout",
      "Built-in negative tilt",
      "Business-tier pairing and fleet support",
      "Bluetooth + USB receiver",
      "Attached cushioned palm rest",
    ],
    pros: [
      "Same proven negative-tilt split design as the standard K860",
      "Business pairing and device management support",
      "Attached palm rest",
      "Multi-device Bluetooth pairing",
    ],
    cons: [
      "Priced above the standard consumer K860",
      "Business features add no benefit for a single home user",
      "Same fixed split angle as the standard model",
    ],
    bestFor: "IT-managed or business-purchased setups that want the K860's ergonomics with fleet support",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Split type and tenting range",
    description: "Distinguished true split keyboards, where the halves separate or hinge apart, from one-piece wave designs that curve keys without separating, and noted which picks support an adjustable tenting angle.",
  },
  {
    title: "Wrist and palm support quality",
    description: "Checked whether a cushioned rest was built in and full-width, since a rest meant only to be leaned on during pauses behaves very differently from one used while actively typing.",
  },
  {
    title: "Connectivity and setup",
    description: "Compared wired, Bluetooth, and USB receiver options, since a wired board removes battery concerns entirely while wireless models add multi-device pairing flexibility.",
  },
  {
    title: "Adjustment period realism",
    description: "Weighed how large a layout change each pick asks of a new user, a one-piece wave board is a much smaller adjustment than a full split, hinged layout.",
  },
  {
    title: "Value for price",
    description: "Weighed build materials, included rest quality, and tenting adjustability against price, from the $44.99 wired split board to the $229.95 premium wave keyboard.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Expect a real transition period, not instant comfort",
    explanation:
      "Typing speed commonly drops 20-40% for the first 2-4 weeks after switching to a wave or split layout, and many people quit before adapting. Plan on a deliberate practice period rather than judging the keyboard by your first few days.",
  },
  {
    criterion: "Wave and true split solve different problems",
    explanation:
      "A wave keyboard like the Logitech Wave Keys is still one fixed unit that curves the keys but never separates, while a true split like the Ergo K860 or Arteck lets each half move independently or tent outward. If your goal is maximum forearm relief, a true split does more than a wave design ever will.",
  },
  {
    criterion: "The keyboard alone won't fix a bad setup",
    explanation:
      "An ergonomic keyboard only helps if your monitor sits at eye level, your chair is at the right height, and your elbows stay near 90 degrees. Buyers who switch keyboards but leave the rest of their desk setup unchanged often keep hurting.",
  },
  {
    criterion: "Tenting angle reduces forearm pronation, but not every keyboard offers it",
    explanation:
      "Tilting the two halves outward, tenting, is one of the most effective ways to reduce the twist in your forearms while typing. Only hinged designs like the Arteck in this list support adjustable tenting; fixed wave keyboards do not offer this at all.",
  },
  {
    criterion: "Match wrist rest height to a taller keyboard body",
    explanation:
      "Ergonomic keyboards are often taller than a standard flat board, which can leave your wrist rest sitting too low relative to the new key height. Check that your rest, or the board's built-in cushion, actually meets your wrist at the new elevation rather than forcing your hand to reach down.",
  },
  {
    criterion: "Fixed-size boards don't suit every hand",
    explanation:
      "A fixed wave or split shape assumes an average hand span, which can feel cramped for larger hands or oversized for smaller ones. Adjustable-tenting options like the Arteck give more room to fine-tune fit, though they typically cost more than a fixed wave design.",
  },
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By How Much Ergonomic Change You're Ready For",
    intro:
      "The picks in this list range from a gentle wave curve to a fully hinged split, so match the design to how big a change you actually want to make.",
    table: {
      headers: ["Where you're starting from", "Recommended design", "Best pick"],
      rows: [
        ["First time trying anything ergonomic", "One-piece wave layout", "Logitech Wave Keys (Graphite or Sand)"],
        ["Ready for a real split but want it affordable", "True split, budget price", "Arteck Split Ergonomic, Perixx PERIBOARD-512B"],
        ["Want maximum split with negative tilt", "True split, premium build", "Logitech Ergo K860 Wireless"],
        ["Buying through a company or IT department", "True split with fleet support", "Logitech Ergo K860 Split for Business"],
      ],
    },
  },
  {
    subheading: "Wave vs. True Split, Explained",
    cards: [
      {
        label: "Wave keyboards",
        text: "A wave board like the Logitech Wave Keys curves the keys into a gentle arc but keeps the whole unit as one fixed piece. It's the easiest adjustment and the smallest footprint, but it doesn't let your hands actually separate shoulder-width.",
      },
      {
        label: "True split keyboards",
        text: "A true split like the Ergo K860 or Arteck lets the two halves move independently, or hinge outward for tenting. This gives real forearm relief a wave design can't match, at the cost of a longer adjustment period and a larger desk footprint.",
      },
    ],
  },
  {
    subheading: "Tenting Angle Comparison",
    intro:
      "Only a subset of picks in this list let you adjust the angle each half tilts outward.",
    table: {
      headers: ["Pick", "Tenting adjustable?", "Notes"],
      rows: [
        ["Arteck Split Ergonomic", "Yes, hinged", "Best tenting range at this price point"],
        ["Logitech Ergo K860 (both versions)", "Fixed, built-in negative tilt", "No manual tenting, but tilt is designed in"],
        ["Logitech Wave Keys (both colors)", "No", "Fixed wave curve only"],
        ["Perixx PERIBOARD-512B", "No", "Fixed split angle"],
        ["Microsoft Surface Ergonomic", "No", "Fixed wave curve only"],
      ],
    },
  },
  {
    subheading: "Setting Up the Rest of Your Desk",
    intro:
      "A new keyboard only helps as much as the rest of your setup supports it.",
    cards: [
      { label: "Monitor height", text: "Top of the screen should sit at or just below eye level so you're not tilting your neck down while your wrists adjust to the new layout." },
      { label: "Chair height", text: "Elbows should rest near 90 degrees with feet flat on the floor, matching the wrist angle the new keyboard is trying to correct." },
      { label: "Mouse placement", text: "Keep the mouse level with the new, often taller, keyboard body so one wrist isn't reaching up or down relative to the other." },
      { label: "Wrist rest height", text: "If your board doesn't have a built-in rest, choose one tall enough to meet the elevated key deck rather than forcing your wrist to dip." },
    ],
  },
  {
    subheading: "Wired vs. Wireless for Your Setup",
    table: {
      headers: ["Situation", "Recommendation", "Best pick"],
      rows: [
        ["Desk stays in one place, want zero setup", "Wired", "Perixx PERIBOARD-512B"],
        ["Multiple devices to pair", "Wireless with multi-device support", "Logitech Ergo K860 Wireless"],
        ["Company-managed device fleet", "Wireless with business pairing", "Logitech Ergo K860 Split for Business"],
      ],
    },
    note: "A wired board removes battery and pairing concerns entirely, which is worth considering if your desk never moves and you'd rather not think about batteries.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "How long does it take to adjust to an ergonomic keyboard?",
    a: "Expect typing speed to drop 20-40% for the first 2-4 weeks, especially on a true split layout like the Ergo K860 or Arteck. A one-piece wave keyboard like the Wave Keys is a gentler adjustment. Give yourself several weeks of regular use before judging comfort or speed.",
  },
  {
    q: "What's the difference between a wave keyboard and a true split keyboard?",
    a: "A wave keyboard is one fixed unit that curves the keys apart without separating, offering an easier transition but less forearm relief. A true split keyboard lets the two halves move independently or tent outward, giving more real ergonomic benefit at the cost of a longer adjustment period and larger footprint.",
  },
  {
    q: "Do I need an ergonomic keyboard if I only type a few hours a day?",
    a: "Ergonomic keyboards help most with cumulative strain, so the benefit scales with how many hours you type daily. Light, occasional use may not need a full split layout, a wave-style board like the Wave Keys is a reasonable middle ground for moderate daily use.",
  },
  {
    q: "Will an ergonomic keyboard fix wrist pain on its own?",
    a: "A keyboard alone rarely solves wrist discomfort if the rest of your desk setup, monitor height, chair height, and mouse position, is still off. Pair a new keyboard with correcting those other factors for the best chance at real relief.",
  },
  {
    q: "What is tenting and do I need it?",
    a: "Tenting means tilting the two keyboard halves outward so your palms face more toward each other, reducing forearm twist. Only hinged true split boards like the Arteck in this list support adjustable tenting; if that's a priority, skip the fixed wave options.",
  },
  {
    q: "Is a wired or wireless ergonomic keyboard better?",
    a: "A wired board like the Perixx PERIBOARD-512B removes battery and pairing concerns entirely, which suits a desk that never moves. A wireless board like the Ergo K860 adds multi-device pairing flexibility if you switch between a laptop and desktop.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-ergonomic-keyboard-and-mouse-combos", title: "Best Ergonomic Keyboard and Mouse Combos (2026)" },
  { href: "/guide/best-split-ergonomic-keyboards", title: "Best Split Ergonomic Keyboards (2026)" },
  { href: "/guide/best-small-keyboards", title: "Best Small Keyboards for Small Desks (2026)" },
];
