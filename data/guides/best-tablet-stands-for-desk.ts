import type { ProductReviewCardProps } from "@/components/product/ProductReviewCard";
import type { AtAGlanceItem } from "@/components/product/AtAGlance";

const BASE = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/best-tablet-stands-for-desk";

export const guideSlug = "best-tablet-stands-for-desk";
export const guideTitle = "Best Tablet Stands for Desk: Stable Picks for Work, Study, and Video Calls";
export const guideDescription =
  "Compare the best tablet stands for desk setups, including adjustable, desktop, universal, compact, and premium options for work, study, and small spaces.";
export const mainKeyword = "best tablet stands for desk";
export const lastUpdated = "2026-05-24";
export const readTime = "7 min";
export const heroImage = `${BASE}/hero.jpg`;

export const products: ProductReviewCardProps[] = [
  {
    rank: 1,
    badge: "Best Overall",
    name: "Lamicall Adjustable iPad Stand for Desk",
    brand: "Lamicall",
    price: "$9.99",
    imageUrl: `${BASE}/lamicall-desk.jpg`,
    affiliateUrl: "https://amzn.to/4o5N77r",
    pros: [
      { text: "Folds flat to 0.59\" thick - slides into any bag or drawer" },
      { text: "360 degree base rotation for instant screen sharing without moving the tablet" },
      { text: "Two adjustable hinges set height and tilt independently" },
      { text: "Widened hooks fit devices in cases up to 0.75\" thick" },
    ],
    cons: [
      { text: "Hinge tightness requires manual adjustment with included wrench" },
      { text: "Not ideal for tablets heavier than 12.9\" iPad Pro" },
    ],
    reviewText:
      "At $9.99, the Lamicall stand punches well above its price. The 360 degree rotating base is the standout feature - spin it toward a colleague without touching the tablet. Two independent hinges let you dial in exactly the height and viewing angle you want, and the whole thing folds to under 6mm thick when you pack up.",
    scoreOverall: 8.8,
  },
  {
    rank: 2,
    badge: "Most Adjustable",
    name: "LISEN Tablet Stand - Dual Clamp Desk Mount",
    brand: "LISEN",
    price: "$24.99",
    imageUrl: `${BASE}/lisen-desk.jpg`,
    affiliateUrl: "https://amzn.to/49iDk7N",
    pros: [
      { text: "Dual clamps hold tablet and phone side by side simultaneously" },
      { text: "6 adjustable joints with 360 degree rotation - most flexible in this list" },
      { text: "Carbon steel construction - 500% more stable than standard gooseneck stands" },
      { text: "Mounts to desks, dining tables, kitchen counters up to 2.83\" thick" },
    ],
    cons: [
      { text: "Not recommended for metallic surfaces" },
      { text: "Multiple joints take a few minutes to set the right position initially" },
    ],
    reviewText:
      "The LISEN is for people who want total control over device positioning. Six pivot joints mean you can place a tablet at any height, angle, or orientation - useful for drawing, video recording, or dual-screen setups. The carbon steel arm holds its position without sagging, even with larger iPads.",
    scoreOverall: 8.9,
  },
  {
    rank: 3,
    badge: "Best for Large Tablets",
    name: "Quality Tablet Stand - Heavy Duty Aluminum",
    brand: "Quality",
    price: "$29.99",
    imageUrl: `${BASE}/quality-stand.jpg`,
    affiliateUrl: "https://amzn.to/3RvrXDi",
    pros: [
      { text: "Al-Ti alloy + high-strength steel - strongest build in this guide" },
      { text: "Supports tablets up to 15\" including Surface Pro and portable monitors" },
      { text: "Platform hole improves airflow to prevent device overheating" },
      { text: "4.8 stars across 9,471 ratings - most reviewed and highest rated here" },
    ],
    cons: [
      { text: "Angle adjustment is intentionally stiff - needs firm pressure to reposition" },
      { text: "Heavier than foldable options - stays on one desk rather than traveling" },
    ],
    reviewText:
      "If you need a stand that genuinely holds a 15\" Surface Pro or a portable monitor without any wobble, the Quality stand is the answer. The Al-Ti alloy frame is noticeably stiffer than consumer-grade aluminum, and 9,471 verified reviews back up the stability claims. The stiff hinges are a feature, not a bug - once set, the angle never drifts.",
    scoreOverall: 9.1,
  },
  {
    rank: 4,
    badge: "Best Compact",
    name: "Anozer Tablet Stand - Wide Base Foldable",
    brand: "Anozer",
    price: "$9.99",
    imageUrl: `${BASE}/anozer-stand.jpg`,
    affiliateUrl: "https://amzn.to/4uzrpeg",
    pros: [
      { text: "Wide 5.55\" x 3.94\" weighted base - 10x more stable than narrow stands" },
      { text: "Height adjusts from 3.16\" to 6.26\" to suit sitting or standing desks" },
      { text: "Folds completely flat - fits in a jacket pocket" },
      { text: "4 rubber feet prevent sliding on any desk surface" },
    ],
    cons: [
      { text: "Tablets over 2 lbs may wobble slightly during active use" },
      { text: "Height lock is manual pull-to-extend - no click-lock mechanism" },
    ],
    reviewText:
      "The Anozer solves the problem most budget stands have: they tip over. The extra-wide 322g base keeps it planted even on slippery desk surfaces, and it folds completely flat when you need to pack it away. Best suited for tablets under 2 lbs - for heavier iPads, step up to the Quality stand.",
    scoreOverall: 8.2,
  },
  {
    rank: 5,
    badge: "Best Premium",
    name: "Nulaxy A5 Aluminum Dual Foldable iPad Stand",
    brand: "Nulaxy",
    price: "$9.99",
    imageUrl: `${BASE}/nulaxy-stand.jpg`,
    affiliateUrl: "https://amzn.to/4uvOvCH",
    pros: [
      { text: "Space-grade aluminum alloy - premium finish that looks at home on any desk" },
      { text: "Two independent shafts adjust height and viewing angle separately" },
      { text: "Fully foldable - goes from desk to bag in seconds" },
      { text: "Clean minimal design works for home office, coffee shop, or client meetings" },
    ],
    cons: [
      { text: "Fits up to 11\" only - not suitable for iPad Pro 12.9\" or larger" },
      { text: "Less range of motion than multi-joint stands" },
    ],
    reviewText:
      "The Nulaxy A5 is the stand you buy when aesthetics matter as much as function. The anodized aluminum finish has the same premium feel as the devices it holds, and the two-shaft design keeps adjustments simple - height on one shaft, angle on the other. Ideal for 11\" iPads and smaller tablets used at a clean desk.",
    scoreOverall: 8.5,
  },
];

export const atAGlanceItems: AtAGlanceItem[] = products.map((p) => ({
  rank: p.rank,
  badge: p.badge,
  name: p.name,
  brand: p.brand,
  imageUrl: p.imageUrl,
  affiliateUrl: p.affiliateUrl,
  price: p.price,
  pros: p.pros,
  cons: p.cons,
  anchorId: `pick-${p.rank}`,
}));

export const faq = [
  {
    question: "What is the best tablet stand for a desk?",
    answer:
      "For most users, the Lamicall Adjustable Stand at $9.99 is the best starting point - it is slim, rotates 360 degrees for screen sharing, and folds flat. If you need to hold a 15\" Surface Pro or portable monitor without wobble, upgrade to the Quality Heavy Duty stand at $29.99.",
  },
  {
    question: "What tablet stand is best for video calls and Zoom meetings?",
    answer:
      "A stand with 360 degree base rotation makes video calls easiest - you can spin the screen toward whoever you are talking to without repositioning the whole stand. The Lamicall stand and the Nulaxy A5 both have this. For standing desk use, a tall adjustable stand like the LISEN clamp mount lets you position the tablet at exact eye level.",
  },
  {
    question: "Can a tablet stand hold a portable monitor?",
    answer:
      "Yes, but you need a stand rated for larger and heavier screens. The Quality Tablet Stand supports up to 15\" monitors and is built from Al-Ti alloy that handles the extra weight. The Anozer wide-base stand also supports up to 15.6\" but may wobble slightly with heavier monitors.",
  },
  {
    question: "What is the most stable tablet stand for a desk?",
    answer:
      "The Quality Tablet Stand (Al-Ti alloy, rated 4.8 stars from 9,471 reviews) and the LISEN dual-clamp mount (carbon steel, 500% more stable than gooseneck designs) are the most stable options in this guide. Both are engineered for desk use where stability matters more than portability.",
  },
  {
    question: "Are cheap tablet stands worth buying for desk use?",
    answer:
      "Yes - several options under $10 in this guide are genuinely good. The Lamicall at $9.99 has premium features like 360 degree rotation and fold-flat design. The key is checking the base width - narrow stands tip over easily. The Anozer's wide weighted base solves this at the same price.",
  },
];
