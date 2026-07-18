export const guideSlug = "best-room-divider-freestanding";
export const guideTitle = "8 Best Freestanding Room Dividers in 2026";
export const metaTitle = "Best Freestanding Room Dividers in 2026 (No Assembly Screens)";
export const metaDescription =
  "8 best freestanding room dividers in 2026, from authentic shoji screens to wheeled fabric panels. Compare panel count, weight, and no-assembly setup.";
export const mainKeyword = "room dividers free standing";
export const introParagraphs = [
  "A freestanding room divider needs to do the opposite job of a wall-mounted bookcase: stand on its own, angle into a stable zigzag, and fold flat when you want the room back. That means panel count, hinge type, and base footprint matter more here than raw weight capacity.",
  "Below are 8 freestanding room dividers we evaluated on stability without wall support, material quality, and how easily they set up, ranging from a $31 lightweight single panel to a 6-panel authentic shoji screen with nearly 5,000 ratings.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51xVErogV9L._SL500_.jpg";

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
    id: "legacy-decor-6-panel-shoji",
    rank: 1,
    badge: "Best-Selling",
    name: "Legacy Decor 6-Panel Shoji Room Divider",
    price: "$179.00",
    rating: "4.6",
    reviews: "4,805",
    imageUrl: "https://m.media-amazon.com/images/I/51xVErogV9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00YFQ3F52?tag=deskfinds0d-20",
    description:
      "With nearly 4,800 ratings, Legacy Decor's shoji screen is the best-selling freestanding divider in this list by a wide margin. A real solid wood grid, not printed vinyl or laminate, holds translucent rice-paper-style panels that let daylight filter through while still creating a genuine visual boundary.\n\nAt 22 lbs it's the lightest 6-panel wood screen here, and two-way hinges plus a fully assembled, ready-to-unfold design mean it goes from box to standing in minutes.",
    specs: [
      "105\"W x 71\"H (6 panels)",
      "Solid wood frame + translucent panels",
      "No assembly required",
      "Two-way hinges",
      "22 lbs (lightest 6-panel wood screen here)",
    ],
    pros: [
      "Best-selling pick with 4,805 ratings",
      "Genuine solid wood grid, not printed vinyl",
      "Translucent panels let light filter through",
      "Lightest 6-panel wood screen in this list at 22 lbs",
    ],
    cons: [
      "Most expensive pick in this list",
      "Translucent panels offer less full privacy than opaque fabric",
      "Wide 105\" span needs a proportionally wide room",
    ],
    bestFor: "Buyers who want the most-proven, authentic wood shoji screen",
  },
  {
    id: "rhf-rattan-4-panel",
    rank: 2,
    badge: "Best Handmade Look",
    name: "RHF 6 ft. 4-Panel Rattan Room Divider",
    price: "$34.28",
    rating: "4.5",
    reviews: "2,024",
    imageUrl: "https://m.media-amazon.com/images/I/518FUSm-OqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07QQ25W3P?tag=deskfinds0d-20",
    description:
      "RHF's screen is handmade by professional carpenters using a 5-medallion diamond weave pattern in 100% woven fabric over a rattan-style frame, giving it a bohemian, artisanal look most mass-produced fabric screens can't match. Two-way hinges and a fully ready-to-use design mean no assembly.\n\nAt this price point, it undercuts nearly every other pick in this list while still delivering a genuinely handcrafted appearance, making it the best value for buyers who want a decorative, rustic-leaning divider.",
    specs: [
      "63\"W x 72\"H (4 panels)",
      "Rattan-style frame + 100% woven fabric",
      "No assembly required",
      "Two-way hinges",
      "5-medallion diamond weave pattern",
    ],
    pros: [
      "Handmade diamond weave pattern",
      "Cheapest quality pick in this list at $34.28",
      "Bohemian, artisanal aesthetic",
      "No assembly required",
    ],
    cons: [
      "Narrower 63\" width than most other picks",
      "Woven fabric is less durable than solid wood or thick polyester",
      "Rattan-style construction shows wear faster in high-traffic spots",
    ],
    bestFor: "Buyers who want a handcrafted, boho-styled divider without a high price tag",
  },
  {
    id: "rantila-single-panel",
    rank: 3,
    badge: "Lightest & Most Flexible",
    name: "RANTILA Single Large Panel Room Divider",
    price: "$30.99",
    rating: "4.3",
    reviews: "1,590",
    imageUrl: "https://m.media-amazon.com/images/I/414lHGwu+qL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BMTBSB7R?tag=deskfinds0d-20",
    description:
      "RANTILA takes a different approach with a single 71-inch-wide panel instead of multiple hinged panels, built from HDPE with a steel frame and UV-protected, waterproof fabric. At just 8.8 lbs it's the lightest divider in this entire list, and 4 stiffeners keep the single panel from sagging or toppling.\n\nBecause there's only one panel, there's no zigzag angle needed for stability, making it the simplest to set up and the easiest to move or store when you don't need it.",
    specs: [
      "71\"W x 69.5\"H",
      "HDPE + steel frame",
      "UV protected + waterproof fabric",
      "4 stiffeners for stability",
      "8.8 lbs (lightest in this list)",
    ],
    pros: [
      "Lightest divider in this list at 8.8 lbs",
      "Single-panel design needs no angling for stability",
      "UV protected and waterproof, suitable near a window or patio door",
      "Easiest to move or store of any pick here",
    ],
    cons: [
      "Single panel offers less width coverage per unit than multi-panel screens",
      "4.3-star rating is on the lower end of this list",
      "Less decorative than the wood or rattan alternatives",
    ],
    bestFor: "Buyers who want the lightest, simplest single-panel divider to move often",
  },
  {
    id: "homscreener-4-panel-fabric",
    rank: 4,
    badge: "Widest 4-Panel",
    name: "HOMSCREENER 4-Panel Fabric Room Divider",
    price: "$56.99",
    rating: "4.1",
    reviews: "1,715",
    imageUrl: "https://m.media-amazon.com/images/I/31IhKdy8YFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BQMR29TC?tag=deskfinds0d-20",
    description:
      "HOMSCREENER's steel-frame screen covers 88 inches wide, the widest 4-panel pick in this list, using a heavier 240g polyester coating than most competing fabric screens. Triple-buckle hinges and extra-wide 17.7-inch feet give it a noticeably more stable base than thinner-footed alternatives.\n\nThe fabric is treated to resist wrinkling, so it looks presentable straight out of the box rather than needing to hang and relax first.",
    specs: [
      "88\"W x 71.3\"H (4 panels)",
      "240g polyester + steel frame",
      "Triple-buckle hinges",
      "17.7\" wide feet",
      "Wrinkle-resistant fabric",
    ],
    pros: [
      "Widest 4-panel pick in this list at 88 inches",
      "Thicker 240g fabric than most competing screens",
      "Extra-wide 17.7\" feet add stability",
      "Wrinkle-resistant, looks finished immediately",
    ],
    cons: [
      "Lowest rating in this list at 4.1 stars",
      "Fabric panels offer less structure than solid wood",
      "Wide feet need more floor clearance than a slimmer base",
    ],
    bestFor: "Buyers who need the widest coverage from a 4-panel fabric screen",
  },
  {
    id: "mayoliah-6-panel-120-wide",
    rank: 5,
    badge: "Widest Overall",
    name: "MAYOLIAH 6-Panel Folding Privacy Screen",
    price: "$89.99",
    rating: "4.2",
    reviews: "1,063",
    imageUrl: "https://m.media-amazon.com/images/I/31WhDsMWr+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B42BP1HF?tag=deskfinds0d-20",
    description:
      "At 120 inches wide, MAYOLIAH is the widest divider in this entire list, built from 180g polyester over an iron powder-coated frame. Because it's a genuine 6-panel design, you're not locked into using all 6, it reconfigures down to 2, 3, 4, or 5 panels depending on how much width you actually need.\n\nWider support feet than a typical 4-panel screen help it stay stable across that longer span, and it's backed by a 1-year warranty, a rarity among the fabric screens in this list.",
    specs: [
      "120\"W x 72\"H (6 panels, reconfigurable to 2-6)",
      "180g polyester + iron powder-coated frame",
      "Wider support feet",
      "1-year warranty",
      "5 configuration options",
    ],
    pros: [
      "Widest divider in this list at 120 inches",
      "Reconfigurable from 2 to 6 panels for different room widths",
      "1-year warranty, uncommon among fabric screens",
      "Wider feet add stability across its long span",
    ],
    cons: [
      "Large, heavy package to unbox and set up",
      "4.2-star rating trails the top picks",
      "Full 120\" span needs a genuinely wide room",
    ],
    bestFor: "Large rooms that need the widest possible single divider",
  },
  {
    id: "fdw-wood-mesh-4-panel",
    rank: 6,
    badge: "Best-Selling Wood Mesh",
    name: "FDW 4-Panel Wood Mesh Room Divider",
    price: "$63.99",
    rating: "4.4",
    reviews: "7,623",
    imageUrl: "https://m.media-amazon.com/images/I/51eN5STzThL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0135AV5XC?tag=deskfinds0d-20",
    description:
      "FDW's hand-woven wood mesh is the most-reviewed pick in this entire list at over 7,600 ratings, combining an eco wood frame with a classic woven-mesh panel design that reads as more substantial than a fabric screen without the price of a full solid-wood shoji.\n\nAt 15.4 lbs it folds down compactly for storage, and metal hinges hold up better over repeated folding than the plastic hinges found on some cheaper fabric screens.",
    specs: [
      "70.5\"W x 71\"H (4 panels)",
      "Wood frame + hand-woven mesh",
      "Metal hinges",
      "15.4 lbs",
      "Foldable, compact storage",
    ],
    pros: [
      "Most-reviewed pick in this entire list at 7,623 ratings",
      "Hand-woven mesh looks more substantial than plain fabric",
      "Metal hinges outlast plastic alternatives",
      "Lightweight and foldable for storage",
    ],
    cons: [
      "Mesh weave offers less full privacy than a solid panel",
      "Narrower than the widest picks in this list",
      "Eco wood is lighter-duty than a solid hardwood frame",
    ],
    bestFor: "Buyers who want the most-proven wood-look divider at a mid-range price",
  },
  {
    id: "sunally-wheeled-4-panel",
    rank: 7,
    badge: "Only Lockable Wheels",
    name: "SUNALLY 4-Panel Room Divider with Lockable Wheels",
    price: "$58.49",
    rating: "4.2",
    reviews: "554",
    imageUrl: "https://m.media-amazon.com/images/I/412nDJFwHPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMDTGYK2?tag=deskfinds0d-20",
    description:
      "SUNALLY is the only divider in this list mounted on lockable wheels, letting you roll it to a new position and lock it in place rather than lifting and repositioning a static base. That's a genuine advantage if your room's layout changes often, like a shared home office that becomes a guest space on weekends.\n\n240g polyester fabric over a powder-coated steel frame with extended, widened feet keeps it stable even with the added weight and mobility of the wheels.",
    specs: [
      "88\"W x 72\"H (4 panels)",
      "240g polyester + powder-coated steel",
      "Lockable wheels (unique in this list)",
      "Extended, widened feet",
      "88\" width",
    ],
    pros: [
      "Only pick in this list with lockable wheels",
      "Easiest to reposition of any pick here",
      "Thick 240g fabric",
      "Extended feet keep it stable despite the wheels",
    ],
    cons: [
      "Smallest review sample among the fabric screens at 554 ratings",
      "Wheels add bulk to the base compared to a flat-footed screen",
      "4.2-star rating trails the top picks",
    ],
    bestFor: "Rooms where the layout changes often and you need to roll the divider around",
  },
  {
    id: "homcom-6-panel-pp-woven",
    rank: 8,
    badge: "Most Durable Woven",
    name: "HOMCOM 6-Panel PP Hand-Woven Room Divider",
    price: "$98.99",
    rating: "4.5",
    reviews: "371",
    imageUrl: "https://m.media-amazon.com/images/I/51gHMv9twBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1V2K8XC?tag=deskfinds0d-20",
    description:
      "HOMCOM swaps traditional paper-fiber weave for polypropylene panels on a paulownia wood frame, a durability upgrade since PP resists tearing and moisture far better than paper-based woven screens over time. An arched top design gives it a softer, more finished silhouette than a flat-topped screen.\n\nIt requires no assembly and comes with a 90-day warranty, and the 6-panel width gives it enough coverage for a standard room divide without reaching the extreme widths of the MAYOLIAH.",
    specs: [
      "106.3\"W x 70.9\"H (6 panels)",
      "Paulownia wood frame + PP panels",
      "Arched top design",
      "No assembly required",
      "90-day warranty",
    ],
    pros: [
      "PP panels are more durable than traditional paper-fiber weave",
      "Arched top adds a more finished silhouette",
      "No assembly required",
      "Wide 106.3\" coverage",
    ],
    cons: [
      "Second most expensive pick in this list",
      "Smaller review sample than the best-selling picks",
      "PP panels have a more synthetic look than natural wood or rattan",
    ],
    bestFor: "Buyers who want a woven-look screen that holds up better than paper-fiber alternatives",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Freestanding stability",
    description: "Scored on panel count, hinge type, and foot width, since a freestanding screen relies entirely on its own base and angle to stay upright with no wall support.",
  },
  {
    title: "Material durability",
    description: "Compared solid wood, rattan-style weave, polypropylene, and polyester fabric panels against how well each resists tearing, moisture, and wear over repeated folding.",
  },
  {
    title: "Setup and portability",
    description: "Assessed assembly requirements, weight, and how easily one person can fold, move, or store the divider when it's not needed.",
  },
  {
    title: "Light and privacy trade-off",
    description: "Weighed how much visual privacy each design offers against how much light and air it lets through, from fully opaque fabric to translucent shoji panels.",
  },
  {
    title: "Value for price",
    description: "Weighed panel count, material quality, and included features like warranties or wheels against price across a $31 to $179 range.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "More panels means a smaller footprint when angled",
    explanation:
      "A 6-panel screen can fold into a tighter zigzag and take up less floor depth than a 4-panel screen covering the same width, because each panel is narrower and the angle needed for stability is shallower. If floor space in front of the divider is tight, favor more panels over fewer, wider ones.",
  },
  {
    criterion: "Check the foot width, not just the panel width",
    explanation:
      "Two screens with the same panel width can have very different base footprints depending on how wide the support feet extend. Wider feet, like the 17.7 inches on the HOMSCREENER pick, add real stability but also eat into the floor space directly in front of the divider.",
  },
  {
    criterion: "Weight capacity numbers here refer to the frame, not shelving",
    explanation:
      "None of the freestanding screens in this list are designed to hold books or decor the way a room-divider bookcase can. If you want storage as well as division, look at a bookcase-style room divider instead.",
  },
  {
    criterion: "Hinge type affects long-term durability",
    explanation:
      "Metal hinges, like those on the FDW wood mesh screen, hold up better to repeated folding over years than plastic hinges found on some cheaper fabric screens, which can crack or loosen with heavy use.",
  },
  {
    criterion: "Material choice signals the intended use",
    explanation:
      "Fabric and steel-frame screens are lightest and cheapest, best for a studio or office that needs frequent repositioning. Solid wood or PP-woven screens cost more but hold up longer and read as furniture rather than a temporary fix.",
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
    subheading: "By How Often You'll Move It",
    table: {
      headers: ["Usage pattern", "Best pick", "Why"],
      rows: [
        ["Set it once and leave it", "Legacy Decor 6-Panel Shoji or MAYOLIAH 120\"", "Wider, heavier screens that prioritize coverage over portability"],
        ["Reposition occasionally", "FDW Wood Mesh (15.4 lbs) or RHF Rattan", "Light enough for one person to move without wheels"],
        ["Move it constantly, different layouts", "SUNALLY Wheeled 4-Panel", "Only pick with lockable wheels for repeated repositioning"],
        ["Move it and store it away often", "RANTILA Single Panel (8.8 lbs)", "Lightest pick in this list, simplest to tuck away"],
      ],
    },
  },
  {
    subheading: "By Material Priority",
    cards: [
      {
        label: "Authentic, premium look",
        text: "Legacy Decor's solid wood shoji screen is the only pick with a genuine wood grid rather than printed or laminate panels.",
      },
      {
        label: "Budget with handmade character",
        text: "RHF's rattan-style weave delivers an artisanal look for under $35, the best value in this list for a decorative screen.",
      },
      {
        label: "Durability over aesthetics",
        text: "HOMCOM's PP-woven panels resist moisture and tearing better than paper-fiber weave, worth the extra cost if the screen sees heavy daily use.",
      },
      {
        label: "Simple and functional",
        text: "HOMSCREENER and MAYOLIAH's polyester fabric screens are the most straightforward, lowest-maintenance option if aesthetics are secondary to function.",
      },
    ],
  },
  {
    subheading: "By Room Width",
    table: {
      headers: ["Space to cover", "Best pick", "Panel count"],
      rows: [
        ["Under 65\"", "RHF Rattan (63\") or RANTILA Single Panel (71\")", "4 panels or 1 panel"],
        ["65-90\"", "FDW Wood Mesh (70.5\"), Roundhill-style, HOMSCREENER (88\")", "4 panels"],
        ["90\"+", "Legacy Decor Shoji (105\"), HOMCOM (106.3\"), MAYOLIAH (120\")", "6 panels"],
      ],
    },
    note: "Remember that a screen's stated width is its flat, unfolded measurement. Once angled into a stable zigzag for freestanding use, the actual space it covers shrinks by roughly 30-40%, so measure your gap generously.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "How do freestanding room dividers stay up without a wall?",
    a: "They rely on their own base design rather than wall support. Multi-panel screens stay upright by angling their panels into a zigzag shape, which creates lateral stability, while single-panel designs like the RANTILA use a wider steel-reinforced foot instead.",
  },
  {
    q: "How many panels should a freestanding room divider have?",
    a: "More panels let the screen fold into a tighter, more stable zigzag and take up less floor depth for a given width, which is why 6-panel screens like the Legacy Decor Shoji or HOMCOM tend to feel sturdier at wide spans than a 4-panel screen covering the same width.",
  },
  {
    q: "Which freestanding room divider is easiest to move?",
    a: "The SUNALLY 4-Panel with Lockable Wheels is the only pick built for frequent repositioning, since it rolls and locks in place. For occasional moves without wheels, the RANTILA Single Panel at 8.8 lbs and the FDW Wood Mesh at 15.4 lbs are both light enough for one person to carry.",
  },
  {
    q: "Do fabric room dividers sag or lose shape over time?",
    a: "Lower-grade fabric can sag or wrinkle with repeated folding, which is why the thicker 240g polyester used in the HOMSCREENER and SUNALLY picks holds its shape better than thinner fabric screens. PP-woven panels, like HOMCOM's, resist sagging and moisture even better than polyester.",
  },
  {
    q: "What's the actual footprint of a screen once it's set up?",
    a: "A screen's listed width is measured flat and unfolded. Once you angle the panels into the zigzag needed for freestanding stability, the real footprint shrinks by roughly 30-40% compared to that flat measurement, so leave extra room when planning where it will go.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-room-divider-studio-apartment", title: "Best Room Dividers for Studio Apartments (2026)" },
  { href: "/guide/best-room-divider-with-shelves", title: "Best Room Dividers with Shelves (2026)" },
  { href: "/guide/best-room-divider-bookcase", title: "Best Room Divider Bookcases (2026)" },
];
