export const guideSlug = "best-compact-under-desk-treadmill";
export const guideTitle = "4 Best Compact Under-Desk Treadmills in 2026";
export const metaTitle = "Best Compact Under-Desk Treadmills in 2026 (Under 4.5 Inches Thin)";
export const metaDescription =
  "4 best compact under-desk treadmills in 2026 for tight desk clearance, from a 4.1-inch ultra-slim pad to a handlebar-equipped incline model. Compare thickness, speed, and price.";
export const mainKeyword = "under desk treadmill small";
export const introParagraphs = [
  "A compact under-desk treadmill is built specifically around one constraint: fitting into the narrow gap between the floor and the underside of a desk without needing to be dragged out for every walking session. That means overall thickness matters more here than in the wider treadmill category, since a couple extra inches of height can be the difference between sliding smoothly under a desk and not fitting at all.",
  "Below are 4 compact under-desk treadmills we evaluated specifically on thickness, weight, and how well each one fits a genuinely tight desk clearance, ranging from a $79.99 lightweight pad to a $119.89 model with a handlebar and incline.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ZbsmaRmVL._SL500_.jpg";

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
    id: "buztrio-walking-pad",
    rank: 1,
    badge: "Thinnest + Highest-Rated",
    name: "Buztrio Walking Pad",
    price: "$89.99",
    rating: "4.6",
    reviews: "680",
    imageUrl: "https://m.media-amazon.com/images/I/41ZbsmaRmVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GVNFJJSG?tag=deskfinds0d-20",
    description:
      "At only 4.1 inches tall, the Buztrio is among the thinnest walking pads in this compact guide, built on a carbon steel frame with a 2.5HP motor covering 0.6-4 mph. It ships with no assembly required and slides easily under a desk, bed, or sofa when it's not in use.\n\nAn LED display and remote control let you adjust speed without bending over, and built-in wheels and an anti-slip belt round out the design. It's the highest-rated pick in this entire guide.",
    specs: [
      "2.5HP motor, 0.6-4 mph speed range",
      "4.1 inches tall",
      "Carbon steel frame, anti-slip belt",
      "LED display, remote control, built-in wheels",
      "No assembly required",
    ],
    pros: [
      "Highest-rated pick in this entire guide",
      "Among the thinnest profiles in this guide",
      "No assembly required",
      "Built-in wheels for easy repositioning",
    ],
    cons: [
      "No incline adjustment",
      "No handlebar for balance support",
      "Top speed capped at 4 mph",
    ],
    bestFor: "Buyers who want the thinnest, best-reviewed compact treadmill",
  },
  {
    id: "vhorilix-walking-pad-compact",
    rank: 2,
    badge: "Best Warranty",
    name: "Vhorilix Walking Pad",
    price: "$89.98",
    rating: "4.4",
    reviews: "486",
    imageUrl: "https://m.media-amazon.com/images/I/51JbSk7t+uL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GGB9BV77?tag=deskfinds0d-20",
    description:
      "The Vhorilix runs a nearly identical 2.5HP motor and 0.6-4 mph range to our top pick, at a slightly thicker but still compact 4.33 inches tall. A carbon steel frame, 5-layer anti-slip belt, and silicone shock absorbers give it a sturdy feel for its size.\n\nNo assembly is required, and built-in wheels make it simple to move between spots. It carries a 2-year warranty, the longest coverage of any pick in this guide.",
    specs: [
      "2.5HP motor, 0.6-4 mph speed range",
      "4.33 inches tall",
      "Carbon steel frame, 5-layer anti-slip belt",
      "Silicone shock absorbers, built-in wheels",
      "2-year warranty, longest in this guide",
    ],
    pros: [
      "Longest warranty in this guide at 2 years",
      "Still a compact 4.33-inch profile",
      "No assembly required",
      "Silicone shock absorbers add cushioning",
    ],
    cons: [
      "Slightly thicker than the Buztrio",
      "No incline adjustment",
      "No handlebar for balance support",
    ],
    bestFor: "Buyers who want the longest warranty on a compact treadmill",
  },
  {
    id: "rythkore-walking-pad",
    rank: 3,
    badge: "Thinnest Overall + Lightest",
    name: "Rythkore Walking Pad",
    price: "$79.99",
    rating: "4.2",
    reviews: "331",
    imageUrl: "https://m.media-amazon.com/images/I/41x4f3fulZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FXLYZSGB?tag=deskfinds0d-20",
    description:
      "The Rythkore runs on a 2.0HP quiet vortex motor across a 0.6-4 mph range, and at just 10.5cm, about 4.1 inches thick, it matches the thinnest profile in this guide while being the lightest pick here by weight. That combination makes it especially easy to slide fully out of the way after a walking session.\n\nOmnidirectional wheels make repositioning simple in any direction, not just forward and back. It's also the cheapest pick in this entire guide.",
    specs: [
      "2.0HP vortex quiet motor, 0.6-4 mph speed range",
      "About 10.5cm (4.1 inches) thick",
      "Lightest pick in this guide",
      "Omnidirectional wheels",
    ],
    pros: [
      "Cheapest pick in this entire guide",
      "Thinnest and lightest profile in this guide",
      "Omnidirectional wheels for easy repositioning",
      "Quiet vortex motor design",
    ],
    cons: [
      "Lower rating than the top two picks",
      "No incline adjustment",
      "No handlebar for balance support",
    ],
    bestFor: "Buyers who want the lightest, cheapest treadmill that's still ultra-thin",
  },
  {
    id: "viamotion-walking-pad-compact",
    rank: 4,
    badge: "Best Incline + Handlebar Support",
    name: "Viamotion Walking Pad",
    price: "$119.89",
    rating: "4.4",
    reviews: "1,226",
    imageUrl: "https://m.media-amazon.com/images/I/41HOnI215TL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GGLS9NQV?tag=deskfinds0d-20",
    description:
      "The Viamotion is the only pick in this guide with a handlebar, giving it an edge for anyone who wants something to hold onto for balance while walking and typing. A manually adjustable incline up to 4 degrees adds a bit more intensity than the completely flat pads above.\n\nIts 2.5HP brushless motor runs quietly at around 45dB and covers a 0.6-3.8 mph range, with a 265 lb max user weight. It's also the most-reviewed pick in this entire guide, giving it the largest track record here.",
    specs: [
      "2.5HP brushless motor, 0.6-3.8 mph speed range",
      "Manually adjustable incline up to 4 degrees",
      "Handlebar for support, only pick in this guide with one",
      "Max user weight 265 lbs",
      "Quiet motor, rated around 45dB",
    ],
    pros: [
      "Most-reviewed pick in this entire guide",
      "Only pick in this guide with a handlebar",
      "Only pick in this guide with incline adjustment",
      "Solid 265 lb weight capacity",
    ],
    cons: [
      "Thicker and pricier than the other 3 picks in this guide",
      "Slightly slower top speed at 3.8 mph",
      "Handlebar adds a bit of footprint versus a bare pad",
    ],
    bestFor: "Buyers who want handlebar support and incline in a still-compact footprint",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Overall thickness",
    description: "Compared stated height in inches across every pick, since this guide specifically targets the thinnest treadmills for the tightest desk clearances rather than general under-desk fit.",
  },
  {
    title: "Weight and portability",
    description: "Checked total unit weight and wheel design, since a genuinely compact treadmill should be easy for one person to slide out of the way or reposition without help.",
  },
  {
    title: "Noise level",
    description: "Weighed motor type and stated dB ratings against the reality of taking calls nearby, since quiet operation matters even more in a small home office where the treadmill sits close to a desk.",
  },
  {
    title: "Feature tradeoffs at a compact size",
    description: "Compared which picks add a handlebar or incline versus which stay completely flat and bare, since added features generally come with a small increase in thickness or footprint.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Measure real desk clearance before assuming any pick fits",
    explanation:
      "Compact under-desk treadmills still generally need around 9-12 inches of vertical clearance between the floor and the underside of the desk, even at a thin 4.1-inch treadmill height, since you need room for your feet and stride, not just the unit itself. Standard desks run 28-30 inches tall, but crossbars and drawers can reduce the usable gap, so measure your actual clearance rather than relying on the desk's listed height.",
  },
  {
    criterion: "A couple tenths of an inch in thickness can matter at the margin",
    explanation:
      "The picks in this guide range from about 4.1 to 4.33 inches thick, a small difference on paper but one that can decide whether a treadmill clears a desk's crossbar or drawer track. If your clearance is genuinely tight, prioritize the Buztrio or Rythkore over the slightly thicker Vhorilix or the feature-added Viamotion.",
  },
  {
    criterion: "Quiet motors matter more in a small home office",
    explanation:
      "Aim for equipment rated under 15dB for near-silent operation during calls, with up to 30dB still tolerable but noticeable. The Viamotion's stated rating of around 45dB is audible enough to notice on a call, a real tradeoff for the only pick in this guide with a handlebar and incline.",
  },
  {
    criterion: "Weight matters for a genuinely compact, movable setup",
    explanation:
      "If you plan to slide the treadmill fully out from under the desk after each session rather than leaving it in place, the Rythkore's lighter weight makes that daily routine easier than a heavier unit, even when the thickness difference is minor.",
  },
  {
    criterion: "Route the power cord away from your walking path",
    explanation:
      "Cable management matters more on a treadmill than most desk gear specifically because you're walking on or near the unit while it runs. Route the power cord along a wall or under a cord cover rather than leaving it loose on the floor, since a snagged cord is a real trip hazard on a moving belt.",
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
    subheading: "By Desk Clearance",
    intro:
      "Every pick in this guide is compact, but the small differences in thickness matter most when your clearance is genuinely tight.",
    table: {
      headers: ["Clearance available", "Best pick", "Why"],
      rows: [
        ["Extremely tight", "Buztrio Walking Pad (4.1\") or Rythkore (~4.1\")", "Thinnest profiles in this guide"],
        ["Tight but slightly more room", "Vhorilix Walking Pad (4.33\")", "Still compact, with the longest warranty"],
        ["Standard clearance, room for extra features", "Viamotion Walking Pad", "Only pick with a handlebar and incline"],
      ],
    },
  },
  {
    subheading: "By What Matters Most to You",
    cards: [
      {
        label: "Want the best rating in a compact size",
        text: "The Buztrio Walking Pad is the highest-rated pick in this guide while also being among the thinnest.",
      },
      {
        label: "Want the longest warranty",
        text: "The Vhorilix Walking Pad backs its compact build with a 2-year warranty, longer than any other pick here.",
      },
      {
        label: "Want the lowest price and lightest weight",
        text: "The Rythkore Walking Pad is the cheapest and lightest pick in this guide, ideal if you plan to move it in and out often.",
      },
      {
        label: "Want a handlebar and incline in a still-compact footprint",
        text: "The Viamotion Walking Pad is the only pick here with both features, at the cost of being the thickest and priciest of the four.",
      },
    ],
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Budget", "Best pick", "Tradeoff"],
      rows: [
        ["Under $85", "Rythkore Walking Pad", "Lowest rating of the four, but cheapest and lightest"],
        ["$85-$95", "Buztrio or Vhorilix Walking Pad", "Best rating or best warranty, similar price"],
        ["$120", "Viamotion Walking Pad", "Adds handlebar and incline, slightly thicker"],
      ],
    },
  },
  {
    subheading: "Safety Setup Reality Check",
    intro:
      "None of the four listings in this guide detail a specific auto-stop sensor or safety clip in their published specs, so treat these as general safety practices to apply regardless of which pick you choose.",
    note: "Check for a physical or magnetic auto-stop mechanism before your first walking session, keep a safety clip attached to your clothing if the unit includes one, and route the power cord along a wall or under a cord cover rather than across your walking path, since a snagged cord is a real trip hazard on a moving belt.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What's the thinnest under-desk treadmill for a tight desk clearance?",
    a: "The Buztrio Walking Pad and the Rythkore Walking Pad are the thinnest picks in this guide, both around 4.1 inches tall. Even at that thickness, plan for roughly 9-12 inches of total vertical clearance under your desk, since you need room for your feet and stride, not just the unit's own height.",
  },
  {
    q: "Do I need to measure my desk before buying a compact treadmill?",
    a: "Yes. Standard desks run 28-30 inches tall, but crossbars, drawers, and cable trays can reduce the usable clearance well below that. Measure the actual gap between the floor and the underside of your desk rather than assuming any compact treadmill in this guide will fit based on the desk's listed height alone.",
  },
  {
    q: "Which compact treadmill has the longest warranty?",
    a: "The Vhorilix Walking Pad carries a 2-year warranty, the longest of the 4 picks in this guide, while still keeping a compact 4.33-inch profile.",
  },
  {
    q: "Is it worth paying more for a handlebar and incline on a compact treadmill?",
    a: "The Viamotion Walking Pad is the only pick in this guide with both a handlebar and adjustable incline, useful if you want extra balance support or a bit more workout intensity. It's also the thickest and priciest of the four, so it's a tradeoff against the ultra-thin, bare-bones designs of the other picks.",
  },
  {
    q: "Which compact treadmill is the cheapest?",
    a: "The Rythkore Walking Pad is the cheapest pick in this guide at $79.99, and it's also the lightest, making it easy to slide fully out of the way after a walking session.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-under-desk-treadmill", title: "Best Under-Desk Treadmills in 2026" },
  { href: "/guide/best-desk-bike-chair", title: "Best Desk Bike Chairs in 2026" },
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under-Desk Footrests" },
];
