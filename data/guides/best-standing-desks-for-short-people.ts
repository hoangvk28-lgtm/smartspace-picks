const BASE = "/images/guides/best-standing-desks-for-short-people";

export const guideSlug = "best-standing-desks-for-short-people";
export const guideTitle = "8 Best Standing Desks for Short People in 2026";
export const metaTitle = "Best Standing Desks for Short People 2026 – Low Height Picks";
export const metaDescription =
  "Best standing desks for short people in 2026, ranked by minimum sitting height and low-range fit, with a formula to calculate the height you actually need.";
export const lastUpdated = "2026-07-25";
export const readTime = "11 min";
export const heroImage = `${BASE}/hero.webp`;

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

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const products: GuideProduct[] = [
  {
    id: "ergear-low-height-kids",
    rank: 1,
    badge: "Lowest Minimum Height",
    name: "ErGear 35 x 20 Inch Low Height Electric Standing Desk",
    price: "$109.99",
    rating: "4.6 stars from 19 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/ergear-low-height-kids.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GDDH14P5?tag=deskfinds0d-20",
    description: "ErGear designed this desk with a lower starting height than standard adult standing desks, which makes it the best fit in this guide for shorter adults or anyone under about 5'2\" who finds typical desks bottom out too high even at their lowest setting. The 35x20 inch top is compact, suited to a laptop or a single small monitor.\n\nThe review count here is still small since this is a newer listing, so weigh the low-height advantage against a shorter track record than the more established picks below. It's electric with height memory, not a manual crank.",
    specs: ["35x20 in top", "Electric", "Low starting height", "Natural finish"],
    pros: ["Lowest minimum height in this guide", "Electric height adjustment", "Compact top for tight rooms"],
    cons: ["Small review count so far", "Compact top limits dual-monitor setups", "Lower weight capacity than full-size desks"],
    bestFor: "Shorter adults who need the lowest achievable sitting height a standard desk can offer.",
  },
  {
    id: "huanuo-32-small-electric",
    rank: 2,
    badge: "Best Overall",
    name: "HUANUO 32-Inch Small Electric Standing Desk",
    price: "$75.99",
    rating: "4.6 stars from 2,226 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/huanuo-32-small-electric.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0F9X3FDYY?tag=deskfinds0d-20",
    description: "HUANUO's 32-inch desk combines a compact top with 4 memory height presets, which matters if you share the desk with a taller household member since you can save your ideal low setting and switch back to it instantly. The price is low relative to its feature set.\n\nAt 32 inches wide it fits tight bedrooms or dorm corners without dominating the room, though it limits you to a laptop and maybe one small monitor. Strong review volume backs up its reliability at this price.",
    specs: ["32 in wide", "Electric", "4 memory presets", "Compact footprint"],
    pros: ["4 memory presets for shared use", "Strong review count", "Compact 32-inch top", "Budget-friendly price"],
    cons: ["Narrow top limits multi-monitor setups", "Not the absolute lowest minimum height", "Single motor on a small frame"],
    bestFor: "Short users who want a proven, budget-friendly compact desk with saved height presets.",
  },
  {
    id: "topsky-dual-motor-frame",
    rank: 3,
    badge: "Best Frame-Only Flexibility",
    name: "TOPSKY Dual Motor Electric Standing Desk Frame",
    price: "$150.99",
    rating: "4.6 stars from 4,345 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/topsky-dual-motor-frame.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B08C2LC3H2?tag=deskfinds0d-20",
    description: "This frame-only option lets you pair it with whatever desktop size and thickness suits your room, up to 70.8x31.5 inches, and dual motors keep the lift even at low heights where single-motor desks can feel less stable. Since you supply the desktop, you can choose a thinner top to shave a bit more off the effective minimum sitting height.\n\nBuying frame-only means an extra purchase and assembly step for the desktop, and you'll want to measure the frame's minimum height with your chosen desktop thickness added on top before assuming it reaches low enough for you.",
    specs: ["Frame only", "Dual motor", "Fits tops up to 70.8x31.5 in", "225 lb capacity"],
    pros: ["Pair with any desktop for a custom fit", "Dual motor stability", "225 lb capacity", "High review count"],
    cons: ["Desktop sold separately", "Final sitting height depends on desktop thickness chosen", "Higher total cost once desktop is added"],
    bestFor: "Buyers who want to control desktop thickness to fine-tune their minimum sitting height.",
  },
  {
    id: "flexispot-e6-standard",
    rank: 4,
    badge: "Best with Memory Presets",
    name: "FLEXISPOT E6 3-Stage Dual Motor Standing Desk 55x28",
    price: "$284.99",
    rating: "4.4 stars from 311 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/flexispot-e6-standard.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0BVQMQMY2?tag=deskfinds0d-20",
    description: "FLEXISPOT's E6 uses a 3-stage dual-motor frame, which typically reaches a lower minimum height than 2-stage frames because the extra telescoping stage lets the columns nest more compactly. This matters directly for short users, since a lower minimum height means less risk of the desk bottoming out above a comfortable sitting position.\n\nAt 55x28 inches it fits a dual-monitor setup comfortably, larger than the compact picks above. It holds up to 220 lbs and includes memory presets, useful if the desk is shared.",
    specs: ["55x28 in top", "3-stage dual motor", "220 lb capacity", "Memory presets", "One-piece desktop"],
    pros: ["3-stage frame reaches lower minimum height", "Full-size 55x28 in top", "220 lb capacity", "Memory presets for shared use"],
    cons: ["Higher price than compact picks", "Ships in 2 boxes, longer assembly", "Larger footprint than compact desks"],
    bestFor: "Short users who need a full-size desktop without sacrificing a low minimum height.",
  },
  {
    id: "flexispot-e6-bamboo",
    rank: 5,
    badge: "Best Bamboo Desktop",
    name: "FlexiSpot E6 Bamboo 3-Stage Dual Motor Standing Desk 55x28",
    price: "$329.99",
    rating: "4.4 stars from 763 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/flexispot-e6-bamboo.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B09DYF1SRQ?tag=deskfinds0d-20",
    description: "This is the bamboo-top version of the E6 above, with the same 3-stage dual-motor frame that reaches a lower minimum height than standard 2-stage desks. Solid bamboo adds a warmer look and slightly more rigidity than the laminate desktop on the standard E6.\n\nThe bamboo desktop is a bit thicker than laminate, which can add a small amount to the effective sitting height compared to a thin desktop on a frame-only build. It carries the same 220 lb capacity and memory presets as the standard E6.",
    specs: ["55x28 in bamboo top", "3-stage dual motor", "220 lb capacity", "Memory presets"],
    pros: ["3-stage frame for a lower minimum height", "Solid bamboo desktop", "220 lb capacity", "Memory presets"],
    cons: ["Higher price than the laminate E6", "Bamboo thickness adds slightly to sitting height", "Ships in 2 boxes"],
    bestFor: "Short users who want the E6's low-height frame with a premium bamboo top.",
  },
  {
    id: "qzmdsm-rolling-desk",
    rank: 6,
    badge: "Best Budget Rolling Desk",
    name: "QZMDSM Portable Rolling Desk on Wheels, 32 Inch",
    price: "$49.99",
    rating: "4.4 stars from 1,899 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/qzmdsm-rolling-desk.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0BVR3RKLZ?tag=deskfinds0d-20",
    description: "This manually adjustable rolling desk is the lowest-cost option here and rolls on wheels for easy repositioning, useful in a small shared space. Manual height adjustment means no motor to reach a minimum height, and the range on compact manual desks like this often sits lower than electric competitors.\n\nBecause adjustment is manual rather than push-button, switching height between users takes more effort than an electric desk with memory presets. It includes storage shelves, adding function beyond just a work surface.",
    specs: ["32 in top", "Manual height adjustment", "Rolling wheels", "Storage shelves"],
    pros: ["Lowest price in this guide", "Rolls for easy repositioning", "Includes storage shelves", "Compact 32-inch top"],
    cons: ["Manual adjustment, no memory presets", "Lower weight capacity than electric desks", "Smaller work surface"],
    bestFor: "Tight budgets that want a low, rolling desk without paying for an electric motor.",
  },
  {
    id: "aconcept-desk-converter",
    rank: 7,
    badge: "Best Converter for a Low Existing Desk",
    name: "Aconcept Extra-Slim 24 x 14 Inch Standing Desk Converter",
    price: "$49.99",
    rating: "4.0 stars from 61 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/aconcept-desk-converter.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0D1C9LBN5?tag=deskfinds0d-20",
    description: "Rather than replacing your desk, this converter sits on top of an existing low desk and lifts a monitor or laptop for standing use, which sidesteps the minimum-height problem entirely since your existing desk sets the base height. It's manually adjustable and extra-slim to fit a compact desk surface.\n\nBecause it sits on top of your current desk, the combined resting height when lowered depends on your desk's own height, so this only works well if your existing desk is already at a comfortable seated height for you.",
    specs: ["24x14 in platform", "Manual lift", "Extra-slim design", "Monitor/laptop compatible"],
    pros: ["Works with your existing low desk", "Sidesteps the minimum-height frame problem", "Compact, slim footprint", "Budget price"],
    cons: ["Requires your base desk to already be a good seated height", "Smaller platform than a full desk", "Manual adjustment only"],
    bestFor: "Short users who already have a good low desk and just need standing capability added.",
  },
  {
    id: "techni-mobili-laptop-cart",
    rank: 8,
    badge: "Best Rolling Laptop Cart",
    name: "Techni Mobili Sit-to-Stand Rolling Laptop Cart",
    price: "$28.80",
    rating: "4.5 stars from 7,239 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/techni-mobili-laptop-cart.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B003M96GY0?tag=deskfinds0d-20",
    description: "This rolling cart is the lowest-priced pick here and a strong option for laptop-only setups, with adjustable height and casters for moving it between rooms. Its compact 22x16 inch top isn't meant for a full multi-monitor setup, but for a short user who just needs a laptop station that adjusts low enough, it's an easy budget entry point.\n\nWith the highest review count in this guide, it's a well-proven choice, though the narrow top and lack of memory presets mean it's best suited to single-device use rather than a full workstation.",
    specs: ["22x16 in top", "Manual height adjustment", "Rolling casters", "Laptop-focused"],
    pros: ["Lowest price in this guide", "Highest review count here", "Rolls between rooms easily", "Compact for tight spaces"],
    cons: ["Small top fits laptop only", "Manual adjustment, no presets", "Not suited to dual monitors"],
    bestFor: "Short users who need a budget laptop-only standing station that rolls between rooms.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Calculate your actual minimum height need", explanation: "A rough formula: divide your height in inches by 5.5, then add 1, to estimate the desk height that keeps your elbows near 90 degrees while typing standing. For a 5'2\" user (62 in), that's roughly 12.3 in, though this is a starting estimate, not a substitute for adjusting to feel." },
  { criterion: "Memory presets matter more on shared desks", explanation: "If a taller household member shares the desk, look for at least 4 memory presets so you can return to your saved low height with one press instead of manually dialing it in each time. Two-preset desks are less convenient for households with a significant height difference." },
  { criterion: "Keyboard tray height at low desk settings", explanation: "At a desk set near its lowest 22-inch height, a keyboard tray can drop as low as 18 to 20 inches, below the roughly 23-inch target for ergonomic typing. If you're setting a desk unusually low, check whether a keyboard tray at that height still feels comfortable, or skip the tray and type on the desktop directly." },
  { criterion: "Monitor height needs a monitor arm at low settings", explanation: "When the desk is set low for a shorter user, a monitor sitting directly on the desktop can end up too low, forcing the neck to bend forward. A monitor arm that raises the screen independently of desk height avoids this and is worth budgeting for separately." },
  { criterion: "Anti-fatigue mats add to effective floor height", explanation: "A 3/4 to 1 inch anti-fatigue mat, plus shoes, effectively raises your standing height by close to an inch. Factor this into your desk height calculation if you plan to stand on a mat regularly, or the desk may end up slightly higher than intended once you're standing on it." },
  { criterion: "3-stage frames reach lower than 2-stage frames", explanation: "Standing desk frames with 3 telescoping stages generally nest down to a lower minimum height than 2-stage frames of similar price, because the extra stage lets the columns compress more. If minimum height is your top priority, check the stage count before comparing price." },
];

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Minimum sitting height", description: "We prioritized desks and converters with the lowest stated minimum height, since that's the binding constraint for shorter users, not maximum standing height." },
  { title: "Adjustment type and presets", description: "Electric desks were assessed on memory preset count for shared-desk convenience; manual desks were assessed on adjustment ease." },
  { title: "Desktop size vs. footprint", description: "We weighed desktop width against typical small-room space, since compact desks suited to short users often trade surface area for a lower frame." },
  { title: "Stability at low height", description: "Dual-motor and 3-stage frames were favored for steadier lift at low settings versus single-motor 2-stage frames." },
  { title: "Value and buyer feedback", description: "Price was weighed against verified Amazon rating volume and consistency across each listing." },
];

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Find Your Minimum Height Number",
    intro: "Use this rough formula to estimate the desk height you need, then match it against a desk's stated minimum height.",
    table: {
      headers: ["Your height", "Estimated desk height needed", "Recommended pick"],
      rows: [
        ["4'10\"-5'0\"", "~26-27 in", "ErGear 35 x 20 Inch Low Height Electric Standing Desk"],
        ["5'1\"-5'3\"", "~27-28 in", "HUANUO 32-Inch Small Electric Standing Desk"],
        ["5'4\"-5'6\"", "~28-29 in", "FLEXISPOT E6 3-Stage Dual Motor Standing Desk 55x28"],
        ["Already have a low desk you like", "N/A, add standing capability instead", "Aconcept Extra-Slim Standing Desk Converter"],
      ],
    },
    note: "Formula: (height in inches / 5.5) + 1 ≈ estimated elbow-height desk setting. Treat this as a starting point and fine-tune once the desk arrives.",
  },
  {
    subheading: "By Household Sharing Needs",
    cards: [
      { label: "Solo use, no sharing", text: "Any pick in this guide works; prioritize whichever has the lowest minimum height for your specific height." },
      { label: "Shared with a taller household member", text: "Choose a desk with 4+ memory presets, such as the HUANUO 32-Inch or FLEXISPOT E6, so switching heights is one button press." },
      { label: "Budget-limited shared use", text: "The QZMDSM Rolling Desk is manual but affordable, though switching height between users takes more manual effort." },
    ],
  },
  {
    subheading: "Keyboard and Monitor Setup at Low Heights",
    intro: "A desk set unusually low for a short user changes how a keyboard tray and monitor should be positioned.",
    table: {
      headers: ["Desk situation", "Adjustment needed", "Recommendation"],
      rows: [
        ["Desk set near 22-24 in", "Skip a keyboard tray, type on the desktop", "Keyboard tray would drop below ergonomic typing height"],
        ["Monitor on desktop directly", "Add a monitor arm", "Raises screen independently of low desk height"],
        ["Standing on an anti-fatigue mat", "Account for ~1 in of added height", "Re-check desk height once standing on the mat regularly"],
      ],
    },
  },
  {
    subheading: "Desk Type by Room and Use Case",
    cards: [
      { label: "Full-size desktop needed", text: "FLEXISPOT E6 or the bamboo E6 reach a lower minimum height via their 3-stage frame while still offering a 55x28 in surface." },
      { label: "Custom desktop thickness control", text: "The TOPSKY frame-only option lets you choose a thin desktop to shave a bit more off the sitting height." },
      { label: "Laptop-only, tight budget", text: "The Techni Mobili Rolling Laptop Cart is the cheapest way to get a low, adjustable laptop station." },
    ],
  },
  {
    subheading: "When to Choose a Converter Instead of a New Desk",
    note: "If your existing desk already sits at a comfortable seated height for you, a converter like the Aconcept sidesteps the minimum-frame-height problem entirely since it uses your current desk as the base rather than requiring the frame itself to reach a low enough setting.",
  },
];

export const faq: { q: string; a: string }[] = [
  { q: "How do I calculate the right standing desk height for a short person?", a: "A rough formula is to divide your height in inches by 5.5 and add 1, which estimates the desk height that keeps your elbows near 90 degrees while typing standing. For example, a 5'2\" (62 in) user gets roughly 12.3 as the result of that formula, used as a starting point for the desk's typing surface height. Fine-tune from there based on how it feels." },
  { q: "Do all standing desks go low enough for shorter users?", a: "No. Many standard standing desks have a minimum height around 28 to 29 inches, which can still feel too high for users under about 5'2\". Desks with a 3-stage frame, or dedicated low-height models, reach lower minimum settings than typical 2-stage electric desks." },
  { q: "Why does my keyboard tray feel too low when my desk is set for my height?", a: "At a desk set near its lowest setting, around 22 inches, a keyboard tray mounted underneath can drop to 18 to 20 inches, below the roughly 23-inch height that's comfortable for typing. If you're using a desk set unusually low, consider skipping the tray and typing directly on the desktop instead." },
  { q: "Do I need a monitor arm if I'm short and my desk is set low?", a: "Likely yes. When the desk surface sits low to match a shorter user's ergonomic typing height, a monitor resting directly on the desktop can end up below eye level, forcing the neck to bend down. A monitor arm raises the screen independently of the desk height and avoids that strain." },
  { q: "Can I just use a desk converter instead of buying a new standing desk?", a: "Yes, if your existing desk is already at a comfortable seated height for you. A converter sits on top of your current desk and lifts a monitor or laptop for standing use, which avoids the problem of a full standing-desk frame not reaching low enough, since your existing desk sets the base height." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-standing-desks-with-storage", title: "Best Standing Desks with Storage (2026)" },
  { href: "/guide/best-4-leg-standing-desks", title: "Best 4-Leg Standing Desks (2026)" },
  { href: "/guide/best-small-standing-desk", title: "Best Small Standing Desks (2026)" },
  { href: "/guide/best-standing-desk-for-tall-person", title: "Best Standing Desks for Tall People (2026)" },
];
