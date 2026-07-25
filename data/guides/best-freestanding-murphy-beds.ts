export const guideSlug = "best-freestanding-murphy-beds";
export const guideTitle = "8 Best Freestanding Murphy Beds in 2026";
export const metaTitle = "Best Freestanding Murphy Beds in 2026 (Renter-Friendly Reality Check)";
export const metaDescription =
  "8 freestanding murphy beds compared with an honest look at anchor requirements, renter lease reality, cabinet weight stability, and mattress compatibility before you buy.";
export const mainKeyword = "freestanding murphy bed";
export const introParagraphs = [
  "Freestanding murphy beds are marketed heavily to renters as a wall-drilling-free alternative, but the honest truth is that freestanding means no wall mount, not no anchor at all. Most freestanding units still require a floor cleat or wall backing anchor for stability, and that anchoring can trigger the same lease restrictions as drilling into a wall, so the renter-friendly claim is often overstated compared to what the listing implies.",
  "This guide focuses on that reality: what freestanding actually means, whether floor anchoring genuinely avoids lease issues, cabinet base weight as a stability indicator, and the room clearance a freestanding unit still needs. Below are the 8 picks we evaluated based on product specs and buyer feedback, including 4 newer listings with no rating history yet, which we call out honestly rather than treating them the same as established picks.",
];
export const lastUpdated = "2026-07-26";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41OjvkczeAL._SL500_.jpg";

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
    id: "peanu-queen-freestanding-frame",
    rank: 1,
    badge: "Best Confirmed Freestanding Design",
    name: "Peanu Queen Bed Frame, Freestanding Murphy Bed, Gray Finish, Wooden Doors",
    price: "$752.52",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41OjvkczeAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H6J86PS3?tag=deskfinds0d-20",
    description:
      "This is the clearest confirmed freestanding design in this guide, with the term used directly in the listing title alongside a queen bed frame and gray wooden door finish. Freestanding here means the cabinet does not require a wall mount bracket, but it still needs wall backing or a floor anchor for tipping stability, and the listing does not specify which.\n\nAs a new listing with no rating history yet, treat this as an unproven product and read any early buyer photos or questions closely before ordering. Confirm the specific anchor method and cabinet base weight with the seller before assuming it is fully self-supporting without any wall contact.",
    specs: [
      "Queen size freestanding bed frame",
      "Gray finish with wooden doors",
      "No wall mount bracket required",
      "New listing, verify anchor method before ordering",
    ],
    pros: [
      "Explicitly confirmed freestanding design in the listing title",
      "No wall mount bracket required for basic setup",
      "Wooden door finish gives a furniture-like appearance when closed",
    ],
    cons: [
      "New listing with no rating history to verify real-world stability",
      "Anchor method not specified, verify with the seller before assuming zero anchoring is needed",
      "No desk surface included",
    ],
    bestFor: "Buyers who specifically want a confirmed freestanding queen frame and are comfortable ordering a new, unrated listing after direct seller verification",
  },
  {
    id: "peanu-queen-cabinet-foldout",
    rank: 2,
    badge: "Freestanding Claim Not Explicit, Verify Before Ordering",
    name: "Peanu Queen Murphy Bed Cabinet, Fold Out Cabinet Bed, Built in Shelf, White",
    price: "$752.52",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41NToyVxpBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H6JFQKW7?tag=deskfinds0d-20",
    description:
      "Flagging this honestly: unlike its sibling Peanu listing above, this one describes a fold out cabinet bed with a built-in shelf but does not use the word freestanding anywhere in the title. It may share the same underlying design as the confirmed freestanding Peanu frame, but that is not stated here, so verify directly with the seller before assuming it needs no wall mount.\n\nLike the confirmed Peanu pick, this is a new listing with no rating history. The built-in shelf is a genuine storage feature, but there is no desk surface, and the freestanding claim specifically needs seller confirmation before you rely on it for a rental where wall mounting is restricted.",
    specs: [
      "Queen size fold-out cabinet bed",
      "Built-in shelf",
      "White finish",
      "New listing, freestanding claim not explicit, verify before ordering",
    ],
    pros: [
      "Built-in shelf adds storage",
      "Similar design language to the confirmed freestanding Peanu frame",
      "White finish suits a range of room decor",
    ],
    cons: [
      "Freestanding claim not explicitly stated in this specific listing",
      "New listing with no rating history",
      "No desk surface included",
    ],
    bestFor: "Buyers open to the Peanu cabinet design who will confirm the freestanding claim directly with the seller before ordering",
  },
  {
    id: "roomfitters-queen-freestanding",
    rank: 3,
    badge: "Best Confirmed Freestanding with Storage",
    name: "roomfitters Queen Size Wood Murphy Cabinet Bed with Rattan Storage Drawer, Free Standing",
    price: "$504.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/51UKKBXP5+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H94FKL7V?tag=deskfinds0d-20",
    description:
      "roomfitters explicitly confirms Free Standing in this listing title, paired with a large underbed rattan storage drawer on a queen size cabinet. Like the Peanu freestanding frame, freestanding here means no wall mount bracket, but a floor anchor or wall backing plate is still commonly required for tipping stability, which the listing does not detail.\n\nThis is a new listing with no rating history, so treat the stability and build quality claims as unverified until buyer feedback accumulates. The rattan storage drawer is a genuine functional feature, though there is no desk surface included.",
    specs: [
      "Queen size freestanding cabinet bed",
      "Large underbed rattan storage drawer",
      "White finish",
      "New listing, verify anchor method before ordering",
    ],
    pros: [
      "Explicitly confirmed freestanding in the listing title",
      "Large storage drawer included",
      "Queen size accommodates most sleepers",
    ],
    cons: [
      "New listing with no rating history",
      "Anchor method not detailed, verify with the seller",
      "No desk surface included",
    ],
    bestFor: "Buyers who want confirmed freestanding design with real storage and are comfortable ordering a new, unrated listing",
  },
  {
    id: "roomfitters-full-freestanding",
    rank: 4,
    badge: "Best Confirmed Freestanding, Full Size",
    name: "roomfitters Full Size Wood Murphy Cabinet Bed with Rattan Storage Drawer, Free Standing",
    price: "$532.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/51m3v9ZznPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H94DMCSW?tag=deskfinds0d-20",
    description:
      "This is the full-size version of the roomfitters freestanding cabinet above, also explicitly confirming Free Standing in the title, with the same large rattan storage drawer design in a green finish. Full size means a smaller footprint than the queen version, which can matter if floor clearance for the open bed is tight.\n\nLike its queen sibling, this is a new listing with no rating history, so treat build quality and stability claims as unverified for now. Confirm the anchor method with the seller before ordering, especially if you are relying on the freestanding claim to avoid lease restrictions on wall drilling.",
    specs: [
      "Full size freestanding cabinet bed",
      "Large underbed rattan storage drawer",
      "Green finish",
      "New listing, verify anchor method before ordering",
    ],
    pros: [
      "Explicitly confirmed freestanding in the listing title",
      "Full size footprint requires less floor clearance than queen",
      "Large storage drawer included",
    ],
    cons: [
      "New listing with no rating history",
      "Anchor method not detailed, verify with the seller",
      "No desk surface included",
    ],
    bestFor: "Smaller rooms wanting a confirmed freestanding full-size cabinet, for buyers comfortable ordering a new, unrated listing",
  },
  {
    id: "livauvead-farmhouse-queen-charging",
    rank: 5,
    badge: "Established Rating, Freestanding Not Confirmed",
    name: "LIVAUVEAD Farmhouse Queen Size Murphy Bed with Charging Station, White",
    price: "$344.99",
    rating: "4.0 stars from 120 Amazon ratings",
    reviews: "120 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51jUTZEm-VL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GS52M63V?tag=deskfinds0d-20",
    description:
      "Flagging this honestly: the listing does not claim freestanding design at all, and based on standard farmhouse-style murphy bed construction, it most likely requires a conventional wall mount. It appears in this guide's underlying data because it is commonly cross-shopped, but it is not a verified freestanding pick.\n\nWith 120 ratings at 4.0 stars, it has the most established review base among freestanding-adjacent searches in this guide, and includes a built-in charging station. If freestanding design specifically matters to you, confirm directly with the seller rather than assuming this qualifies.",
    specs: [
      "Queen size murphy bed (wall mount likely required)",
      "Built-in charging station",
      "Farmhouse white finish",
      "Freestanding claim not stated in listing",
    ],
    pros: [
      "Most established review base among picks in this guide at 120 ratings",
      "Built-in charging station",
      "Lowest price among the queen picks here",
    ],
    cons: [
      "Freestanding design not confirmed, likely requires standard wall mounting",
      "No desk surface included",
      "Verify mounting requirements directly before assuming renter-friendly use",
    ],
    bestFor: "Buyers who want an established, well-reviewed queen cabinet and are fine with standard wall mounting rather than a confirmed freestanding design",
  },
  {
    id: "yoobure-queen-murphy-charging-37",
    rank: 6,
    badge: "Established Rating, Freestanding Not Confirmed",
    name: "Yoobure Queen Murphy Bed with Charging Station, Rattan Cabinet Bed with Storage Drawers",
    price: "$459.99",
    rating: "4.5 stars from 19 Amazon ratings",
    reviews: "19 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51JtI3bjGFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GQM56Y2N?tag=deskfinds0d-20",
    description:
      "This listing also makes no freestanding claim, so treat it as a standard wall-mounted cabinet bed rather than a verified freestanding option, despite appearing in freestanding-related searches. It includes a charging station and storage drawers in a rattan finish.\n\nWith only 19 ratings, buyer feedback is thin. If avoiding wall mounting for lease reasons is your priority, the confirmed freestanding Peanu or roomfitters picks above are a better fit, provided you also confirm their anchor requirements directly.",
    specs: [
      "Queen size foldable platform (wall mount likely required)",
      "Built-in charging station",
      "Storage drawers included",
      "Freestanding claim not stated in listing",
    ],
    pros: [
      "Built-in charging station",
      "Storage drawers add functional space",
      "Fully assembled cabinet",
    ],
    cons: [
      "Freestanding design not confirmed",
      "No desk surface included",
      "Very small review base at 19 ratings",
    ],
    bestFor: "Buyers not specifically requiring freestanding design who want charging convenience in an assembled queen cabinet",
  },
  {
    id: "create-a-bed-queen-vertical-37",
    rank: 7,
    badge: "Not Freestanding: Wall-Mounted Hardware Kit",
    name: "Create-A-Bed Queen Size Deluxe Murphy Bed Kit, Vertical",
    price: "$299.00",
    rating: "4.6 stars from 2,138 Amazon ratings",
    reviews: "2,138 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51H6j9qVxwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00CYPV29W?tag=deskfinds0d-20",
    description:
      "Flagging this clearly: this is a wall bed hardware kit explicitly designed to be mounted to a wall, the opposite of freestanding. It appears in this guide's underlying data because it is frequently cross-shopped, but if avoiding wall mounting is your reason for searching freestanding, this pick does not solve that problem.\n\nIt does have the largest review base in this entire guide at 2,138 ratings, and is a well-regarded piston mechanism if you have already decided wall mounting is acceptable in your space.",
    specs: [
      "Vertical queen size mechanism, wall-mounted design",
      "Gas piston operation",
      "Hardware kit, cabinet not included",
      "Made in North America",
    ],
    pros: [
      "Largest review base in this guide at 2,138 ratings",
      "Well-regarded piston mechanism if wall mounting is acceptable",
      "Lowest price in this guide",
    ],
    cons: [
      "Not freestanding, requires standard wall mounting",
      "No desk surface included",
      "Does not solve the problem freestanding buyers are typically searching for",
    ],
    bestFor: "Buyers who realize wall mounting is fine in their space and want a proven, well-reviewed mechanism instead of a freestanding design",
  },
  {
    id: "queen-murphy-hardware-kit-vertical-37",
    rank: 8,
    badge: "Not Freestanding: Wall-Mounted Hardware Kit",
    name: "Queen Size Murphy Bed Hardware Kit, Vertical Wall Bed Frame with Gas Pistons",
    price: "$197.00",
    rating: "4.6 stars from 1,610 Amazon ratings",
    reviews: "1,610 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51h1vyv6ZdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B017701FUE?tag=deskfinds0d-20",
    description:
      "Like the Create-A-Bed kit above, this is explicitly a wall bed frame kit, not a freestanding product, and it appears here only because it is commonly cross-shopped with freestanding searches. It will require standard wall mounting hardware and does not avoid the anchoring question freestanding buyers are typically trying to solve.\n\nAt $197.00 it is the lowest price in this guide, with a strong 1,610-rating review base, but it is not a fit if avoiding wall mounting is the reason you are shopping for a freestanding murphy bed.",
    specs: [
      "Vertical queen size mechanism, wall-mounted design",
      "Gas piston operation",
      "Hardware kit, cabinet not included",
      "Made in North America",
    ],
    pros: [
      "Large review base at 1,610 ratings",
      "Lowest price in this guide",
      "Well-regarded piston mechanism if wall mounting is acceptable",
    ],
    cons: [
      "Not freestanding, requires standard wall mounting",
      "No desk surface included",
      "Does not solve the problem freestanding buyers are typically searching for",
    ],
    bestFor: "Budget-focused buyers who have decided wall mounting is acceptable and do not strictly need a freestanding design",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Verified freestanding claim against the listing title",
    description:
      "Checked whether each listing explicitly uses the term freestanding or free standing, since only 4 of 8 picks in this guide's underlying data confirm it, 2 make no mounting claim either way, and 2 are explicitly wall-mounted hardware kits.",
  },
  {
    title: "Anchor requirement disclosure, even on confirmed freestanding picks",
    description:
      "Noted that even confirmed freestanding listings rarely specify whether a floor cleat or wall backing anchor is still required, since freestanding means no wall mount bracket, not necessarily no anchor of any kind.",
  },
  {
    title: "Renter lease compliance reality check",
    description:
      "Weighed whether a freestanding claim genuinely avoids lease restrictions, since floor anchoring can trigger the same lease terms as wall drilling in many rental agreements.",
  },
  {
    title: "Cabinet base weight as a stability proxy",
    description:
      "Considered cabinet base weight and construction as a proxy for tipping stability during mid-deployment, since a freestanding unit relies more on its own base weight and footprint than a wall-anchored cabinet does.",
  },
  {
    title: "Rating maturity, especially on new listings",
    description:
      "Distinguished established, rated products from 4 new listings with no rating history at all, treating the newer listings as unverified rather than assigning them the same confidence as rated picks.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Freestanding means no wall mount, not no anchor at all",
    explanation:
      "This is the single most misunderstood claim in this category. Freestanding murphy beds skip the wall mount bracket, but most still require a floor cleat or wall backing anchor for tipping stability. Confirm the exact anchor method with the seller before assuming a freestanding unit needs zero attachment to your floor or wall.",
  },
  {
    criterion: "Floor anchoring can violate a rental lease just like wall drilling",
    explanation:
      "The renter-friendly claim attached to freestanding murphy beds is often overstated. Floor anchoring, which many freestanding units still require, can trigger the same lease restrictions on modifying the unit as drilling into a wall. Get written landlord approval before installing any anchored freestanding unit in a rental.",
  },
  {
    criterion: "4 of these 8 picks have no rating history yet",
    explanation:
      "The Peanu queen frame, Peanu queen cabinet, and both roomfitters freestanding cabinets in this guide are new listings with zero ratings. Treat their build quality and stability claims as unverified, and check for recently posted buyer photos or questions before ordering.",
  },
  {
    criterion: "Cabinet base weight is a real stability proxy",
    explanation:
      "A freestanding cabinet with a lighter base is more prone to tipping risk during mid-deployment, when the bed is partially lowered and the center of gravity shifts forward. Heavier, wider-footprint cabinets are generally more stable freestanding, so check the product weight and base dimensions, not just the price, when comparing options.",
  },
  {
    criterion: "\"Anywhere in the room\" is not accurate for most freestanding units",
    explanation:
      "Despite marketing language suggesting a freestanding bed can go anywhere, most units still need wall backing contact plus 85-90 inches of open floor clearance when deployed. Measure your actual intended location before assuming true placement flexibility.",
  },
  {
    criterion: "Mattress thickness compatibility is often narrower than expected",
    explanation:
      "Freestanding mechanisms are frequently calibrated for lighter or thinner mattresses in the 8-10 inch range. A thick 12 inch foam mattress may exceed the mechanism's calibration and cause an unbalanced or difficult fold, so verify the manufacturer's recommended mattress thickness before ordering one for a freestanding unit.",
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
    subheading: "By Confirmed Freestanding Status",
    intro: "Only 4 of the 8 picks in this guide's underlying research explicitly confirm freestanding design.",
    table: {
      headers: ["Freestanding status", "Products", "Recommendation"],
      rows: [
        ["Explicitly confirmed freestanding", "Peanu Queen Bed Frame, roomfitters Queen, roomfitters Full", "Verify anchor method directly with the seller before ordering"],
        ["Similar design, freestanding claim not stated", "Peanu Queen Cabinet Fold Out", "Confirm with the seller whether it shares the confirmed sibling's freestanding design"],
        ["No mounting claim either way", "LIVAUVEAD Farmhouse Queen, Yoobure Queen", "Assume standard wall mounting unless the seller confirms otherwise"],
        ["Explicitly wall-mounted, not freestanding", "Create-A-Bed Queen Vertical, Queen Murphy Bed Hardware Kit", "Skip if freestanding is a hard requirement"],
      ],
    },
  },
  {
    subheading: "Renter Lease Reality Check",
    cards: [
      {
        label: "Floor anchoring required",
        text: "Get written landlord approval first. Many leases restrict floor anchoring the same way they restrict wall drilling, even on a technically freestanding unit.",
      },
      {
        label: "No anchor at all, purely freestanding",
        text: "Rare in practice for a bed of this size and weight class. Confirm this explicitly with the seller rather than assuming it based on marketing language alone.",
      },
    ],
    note: "Never rely on the word freestanding alone to justify skipping a lease conversation with your landlord.",
  },
  {
    subheading: "Cabinet Base Weight vs Stability",
    table: {
      headers: ["Cabinet base weight", "Stability during mid-deployment", "Guidance"],
      rows: [
        ["Lighter, narrow-footprint cabinets", "Higher tipping risk when partially lowered", "Confirm anchor requirement is non-negotiable for these units"],
        ["Heavier, wider-footprint cabinets", "More stable freestanding", "roomfitters Queen and Full picks have wider rattan-drawer bases that add ballast"],
      ],
    },
  },
  {
    subheading: "Room Layout and Wall Backing Clarification",
    table: {
      headers: ["Requirement", "Typical amount needed", "Note"],
      rows: [
        ["Open floor clearance when deployed", "85-90 inches", "Applies even to confirmed freestanding units, not just wall-mounted ones"],
        ["Wall backing contact", "Often still needed even without a mount bracket", "Verify with the seller rather than assuming full placement freedom"],
      ],
    },
  },
  {
    subheading: "Mattress Weight and Thickness Compatibility",
    table: {
      headers: ["Mattress thickness", "Freestanding mechanism fit", "Guidance"],
      rows: [
        ["8-10 inches", "Generally within standard freestanding calibration", "Safe default for most picks in this guide"],
        ["12 inches or thicker", "May exceed mechanism calibration", "Verify with the manufacturer before ordering a thick mattress for any freestanding pick here"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "Does freestanding really mean no anchoring at all?",
    a: "No. Freestanding means the cabinet does not require a wall mount bracket, but most freestanding murphy beds still need a floor cleat or wall backing anchor for tipping stability. Confirm the exact anchor requirement with the seller before assuming a freestanding unit needs zero attachment to your floor or wall.",
  },
  {
    q: "Will a freestanding murphy bed avoid lease restrictions in my apartment?",
    a: "Not necessarily. Floor anchoring, which many freestanding units still require, can trigger the same lease restrictions as wall drilling. Get written approval from your landlord before installing any anchored freestanding unit, since the renter-friendly marketing claim is often overstated relative to actual lease terms.",
  },
  {
    q: "Why do 4 of the picks in this guide have no ratings?",
    a: "The Peanu Queen Bed Frame, Peanu Queen Cabinet, and both roomfitters freestanding cabinets are newer listings without an established rating history yet. We include them because they are genuinely relevant freestanding options, but we flag them as unverified and recommend checking for recent buyer photos or questions before ordering.",
  },
  {
    q: "How do I know if a freestanding murphy bed will be stable?",
    a: "Cabinet base weight and footprint are the best available proxy. Heavier, wider-footprint cabinets are generally more stable freestanding, especially during mid-deployment when the bed is partially lowered and the center of gravity shifts forward. Check the product weight and base dimensions rather than relying on price alone.",
  },
  {
    q: "Can I place a freestanding murphy bed anywhere in the room?",
    a: "Usually not entirely. Most freestanding units still need wall backing contact plus roughly 85-90 inches of open floor clearance when deployed, so true placement flexibility is more limited than marketing language suggests. Measure your intended location before assuming full freedom of placement.",
  },
  {
    q: "What mattress thickness works best on a freestanding murphy bed?",
    a: "Freestanding mechanisms are frequently calibrated for mattresses in the 8-10 inch range. A thick 12 inch foam mattress may exceed the mechanism's calibration and cause an unbalanced fold, so verify the manufacturer's recommended mattress thickness before ordering a thicker mattress for any freestanding pick.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-horizontal-murphy-beds-with-desks", title: "Best Horizontal Murphy Beds with Desks (2026)" },
  { href: "/guide/best-murphy-beds-for-small-spaces", title: "Best Murphy Beds for Small Spaces (2026)" },
  { href: "/guide/best-murphy-beds-with-desks", title: "Best Murphy Beds with Desks (2026)" },
  { href: "/guide/best-cabinet-beds-with-desks", title: "Best Cabinet Beds with Desks (2026)" },
];
