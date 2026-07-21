export const guideSlug = "best-under-desk-bike-pedal-exerciser";
export const guideTitle = "8 Best Under Desk Bike Pedal Exercisers in 2026";
export const metaTitle = "Best Under Desk Bike Pedal Exercisers in 2026 (Quiet & Compact)";
export const metaDescription =
  "8 best under desk bike pedal exercisers in 2026, from a $31.64 budget pick to a quiet 3-in-1 magnetic design. Compare resistance, noise, and desk clearance.";
export const mainKeyword = "under desk bike pedal exerciser";
export const introParagraphs = [
  "An under desk bike pedal exerciser is the simplest way to add movement to a workday, but the category ranges widely, from basic $30 friction-resistance units to app-connected magnetic models rated under 10dB. The gap between a good and a frustrating pick usually comes down to how much desk clearance it actually needs, how quiet the resistance mechanism is, and whether the pedal stride fits your foot size.",
  "Below are 8 under desk bike pedal exercisers we evaluated on resistance type and range, noise level, footprint, and desk clearance, ranging from a $31.64 no-assembly budget pick to a $172.17 motorized model that pedals without active effort.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41vbdc4txHL._SL500_.jpg";

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
    id: "vaunn-pedal-exerciser",
    rank: 1,
    badge: "Most-Reviewed Overall",
    name: "Vaunn Under Desk Bike Pedal Exerciser",
    price: "$35.99",
    rating: "4.2",
    reviews: "16,185",
    imageUrl: "https://m.media-amazon.com/images/I/41vbdc4txHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07XLP3WZK?tag=deskfinds0d-20",
    description:
      "The Vaunn uses manual friction resistance across 5 levels in an alloy steel frame built for basic, no-frills pedaling. An LCD tracks cycle count and calories, and quick-release folding makes it easy to store when not in use.\n\nNon-skid rubber feet keep it planted during use, and at 5.4 lbs it's light enough to move between rooms without effort. It works for both arms and legs, making it flexible beyond just under-desk leg cycling.",
    specs: [
      "Manual friction resistance, 5 levels",
      "LCD: cycle count and calories",
      "Quick-release folding",
      "Non-skid rubber feet",
      "5.4 lbs, works for arms or legs",
    ],
    pros: [
      "Most-reviewed pick in this entire guide",
      "Quick-release folding for easy storage",
      "Lightweight at 5.4 lbs",
      "Works for both arms and legs",
    ],
    cons: [
      "Friction resistance is louder than magnetic designs in this guide",
      "Only 5 resistance levels, fewer than the magnetic picks",
      "4.2 rating is on the lower end for this guide",
    ],
    bestFor: "Buyers who want the most proven, widely-used pick at a low price",
  },
  {
    id: "himaly-mini-exercise-bike",
    rank: 2,
    badge: "Most-Reviewed Magnetic",
    name: "himaly Mini Exercise Bike",
    price: "$44.09",
    rating: "4.0",
    reviews: "18,313",
    imageUrl: "https://m.media-amazon.com/images/I/41+7zbVyflL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07JFTQ2MS?tag=deskfinds0d-20",
    description:
      "The himaly Mini uses magnetic belt-drive resistance across 8 levels, quieter than the friction-type designs common at this price point. An LCD covers time, count, calories, and distance, giving a fuller picture of each session than a basic counter.\n\nAnti-slip pedals and a non-slip base add stability, and at 4kg it's easy to lift and reposition. It works for both arms and legs, and it's the most-reviewed magnetic-resistance pick in this guide by a wide margin.",
    specs: [
      "Magnetic belt-drive resistance, 8 levels",
      "LCD: time, count, calories, distance",
      "Anti-slip pedal + non-slip base",
      "4kg, works for arms or legs",
      "Quieter than friction-resistance designs",
    ],
    pros: [
      "Most-reviewed magnetic-resistance pick in this guide",
      "Quieter than friction-based designs",
      "More detailed LCD tracking than basic counters",
      "Lightweight and easy to reposition",
    ],
    cons: [
      "4.0 rating is the lowest in this guide",
      "No app connectivity",
      "Base may feel less sturdy than the heavier picks in this guide",
    ],
    bestFor: "Buyers who want a widely-used magnetic pick quieter than basic friction models",
  },
  {
    id: "wakeman-pedal-exerciser",
    rank: 3,
    badge: "Cheapest + No Assembly Required",
    name: "Wakeman Fitness Folding Pedal Exerciser",
    price: "$31.64",
    rating: "4.0",
    reviews: "9,859",
    imageUrl: "https://m.media-amazon.com/images/I/41cUJFooYIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01E3CPAK0?tag=deskfinds0d-20",
    description:
      "The Wakeman uses manual friction resistance with an adjustable dial and a 5-function LCD covering time, rev count, RPM, calories, and scan. It arrives fully assembled out of the box, the only step-free setup among the budget picks in this guide.\n\nA non-slip base and foldable design keep it easy to store, and at 5.82 lbs it moves easily between rooms. It works for arms or legs and is the cheapest pick in this entire guide.",
    specs: [
      "Manual friction resistance, adjustable dial",
      "5-function LCD: time, rev count, RPM, calories, scan",
      "No assembly required",
      "Foldable, non-slip base",
      "5.82 lbs, works for arms or legs",
    ],
    pros: [
      "Cheapest pick in this entire guide",
      "No assembly required out of the box",
      "5-function LCD, more detailed than most budget picks",
      "Foldable for easy storage",
    ],
    cons: [
      "Friction resistance is louder than magnetic designs",
      "4.0 rating is tied for the lowest in this guide",
      "Adjustable dial offers less precision than stepped resistance levels",
    ],
    bestFor: "Buyers who want the lowest price and zero assembly effort",
  },
  {
    id: "sunny-sf-b023005-pedal-exerciser",
    rank: 4,
    badge: "Best Budget App Connectivity",
    name: "Sunny Health & Fitness SF-B023005",
    price: "$69.99",
    rating: "4.3",
    reviews: "8,023",
    imageUrl: "https://m.media-amazon.com/images/I/41EfhD7GoGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C15YQW98?tag=deskfinds0d-20",
    description:
      "The SF-B023005 uses stepless friction resistance across 16 levels for finer control than a stepped dial, in a 2-in-1 design that works for both arms and legs. Bluetooth connects to the SunnyFit App, unlocking over 1,000 workouts plus 10,000 virtual scenic routes, the strongest budget app ecosystem in this guide.\n\nA mesh belt-drive design keeps operation quieter than a standard friction unit, and an LCD covers the core session metrics. At 11.7 lbs, it's light enough to move but sturdier than the entry-level picks below it in price.",
    specs: [
      "Stepless friction resistance, 16 levels",
      "Bluetooth to SunnyFit App (1,000+ workouts, 10,000+ routes)",
      "Mesh belt-drive design for quieter operation",
      "LCD display",
      "11.7 lbs, works for arms or legs",
    ],
    pros: [
      "Best app ecosystem among the budget picks in this guide",
      "16 stepless resistance levels for finer control",
      "Mesh belt drive runs quieter than basic friction units",
      "Strong 4.3 rating for this price range",
    ],
    cons: [
      "Pricier than the entry-level friction picks in this guide",
      "App dependency may not appeal to buyers who want a simple unit",
      "Stepless resistance can feel less predictable than fixed levels",
    ],
    bestFor: "Buyers who want app-based workout tracking without paying for a premium magnetic unit",
  },
  {
    id: "sunny-sf-b020026smart-pedal-exerciser",
    rank: 5,
    badge: "Most-Complete 3-in-1 Value Pick",
    name: "Sunny Health & Fitness SF-B020026SMART",
    price: "$152.99",
    rating: "4.4",
    reviews: "5,061",
    imageUrl: "https://m.media-amazon.com/images/I/51rsj24ng8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D85WGTCQ?tag=deskfinds0d-20",
    description:
      "The SF-B020026SMART runs magnetic resistance across 8 levels in a 3-in-1 design, arms, legs, and a set of included 20 lb resistance bands, giving it the widest single-unit workout range in this guide alongside the YOSUDA Pro. The SunnyFit App and a whisper-quiet mechanism round out a genuinely feature-complete package.\n\nAt 20.5 lbs with a max user weight of 200 lbs, it's built cordless and portable with a floor stabilizer for added stability during use. It sits at a mid-to-premium price point, reflecting its broader feature set compared to the simpler picks in this guide.",
    specs: [
      "Magnetic resistance, 8 levels",
      "3-in-1: arms, legs, plus 20 lb resistance bands",
      "SunnyFit App, whisper-quiet",
      "Cordless/portable with floor stabilizer",
      "20.5 lbs, max user weight 200 lbs",
    ],
    pros: [
      "3-in-1 design adds resistance bands beyond pedaling",
      "Whisper-quiet magnetic resistance",
      "Floor stabilizer adds stability during use",
      "Strong 4.4 rating",
    ],
    cons: [
      "Pricier than most picks in this guide",
      "200 lb max user weight is lower than some competing picks",
      "Bulkier than the basic budget pedal exercisers",
    ],
    bestFor: "Buyers who want pedaling plus resistance-band training in one unit",
  },
  {
    id: "deskcycle-v2-pedal-exerciser",
    rank: 6,
    badge: "Editor's Choice + Strongest Resistance",
    name: "DeskCycle V2 Under Desk Bike",
    price: "$159.99",
    rating: "4.5",
    reviews: "5,983",
    imageUrl: "https://m.media-amazon.com/images/I/317D79BdGEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07BDRFMZK?tag=deskfinds0d-20",
    description:
      "The DeskCycle V2 runs magnetic resistance across 8 levels reaching up to 39 lbs of resistance, the strongest in this guide, driven by a high-inertia flywheel for a smoother pedal feel. Height adjusts from 9 to 10 inches to dial in fit under a specific desk, and it's rated to fit under desks as low as 27 inches.\n\nStrap-in pedals keep feet secure during faster resistance levels, and a detachable LCD stays visible without sitting underfoot. At 24.7 lbs with a 270 lb max user weight, it's the highest-rated pick in this entire guide and widely cited as an editor's pick across review sites.",
    specs: [
      "Magnetic resistance, 8 levels, up to 39 lbs (strongest in this guide)",
      "High-inertia flywheel",
      "Height adjustable 9-10 inches, fits desks as low as 27 inches",
      "Detachable LCD, strap-in pedals",
      "24.7 lbs, max user weight 270 lbs",
    ],
    pros: [
      "Strongest resistance in this guide at up to 39 lbs",
      "Highest-rated pick in this entire guide at 4.5 stars",
      "Adjustable height dials in desk clearance precisely",
      "Strap-in pedals add security at higher resistance",
    ],
    cons: [
      "Pricier than most picks in this guide",
      "Heavier than the basic budget picks",
      "39 lbs of resistance may be more than casual users need",
    ],
    bestFor: "Buyers who want the strongest resistance range and the most widely recommended pick",
  },
  {
    id: "yosuda-under-desk-bike-pro",
    rank: 7,
    badge: "Most Resistance + Quietest",
    name: "YOSUDA Under Desk Bike Pro",
    price: "$119.99",
    rating: "4.5",
    reviews: "3,559",
    imageUrl: "https://m.media-amazon.com/images/I/51HpgYlwtaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJNPBTJ4?tag=deskfinds0d-20",
    description:
      "The YOSUDA Pro runs magnetic resistance across 16 levels, tied for the most in this guide, and is rated under 10dB, the quietest pick here, well below the roughly 15dB threshold that feels nearly silent during a call. Bluetooth connects to Kinomap and Zwift, adding structured workout and route options beyond a basic tracking app.\n\nIts 3-in-1 design covers arms, legs, and resistance bands, and dual anti-slip gripper feet plus a non-slip mat keep it stable during use. At 17.9 lbs and shipping 95% pre-assembled, it strikes a strong balance between features and setup convenience for a max user weight of 220 lbs.",
    specs: [
      "Magnetic resistance, 16 levels",
      "Rated under 10dB (quietest in this guide)",
      "Bluetooth to Kinomap and Zwift apps",
      "3-in-1: arms, legs, plus resistance bands",
      "17.9 lbs, ships 95% pre-assembled",
    ],
    pros: [
      "Quietest pick in this guide at under 10dB",
      "16 resistance levels, tied for the most in this guide",
      "Connects to established fitness apps like Zwift",
      "Ships 95% pre-assembled",
    ],
    cons: [
      "220 lb max user weight is lower than the DeskCycle V2",
      "Smaller review sample than the top budget picks",
      "3-in-1 design adds some bulk versus a pure pedal-only unit",
    ],
    bestFor: "Buyers who want the quietest possible operation and app-based structured workouts",
  },
  {
    id: "exerpeutic-2000m-pedal-exerciser",
    rank: 8,
    badge: "Only Electric-Motor Pick",
    name: "Exerpeutic 2000M Motorized Elliptical",
    price: "$172.17",
    rating: "4.3",
    reviews: "976",
    imageUrl: "https://m.media-amazon.com/images/I/41-ppoSRPiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B085DBBQM9?tag=deskfinds0d-20",
    description:
      "The Exerpeutic 2000M is the only motorized pick in this guide, using an electric motor to move the pedals rather than requiring active pedaling effort from the user. A remote control on a 6-foot cord adjusts speed, and an automatic 15-minute timer keeps sessions simple to manage.\n\nFoldable pedals with adjustable straps work for arms as well as legs, and a floor mat comes included. Rated for users up to 286 lbs, it suits buyers recovering from an injury or anyone who wants passive movement rather than active pedaling.",
    specs: [
      "Electric motor (only motorized pick in this guide)",
      "Remote control on 6-foot cord",
      "Automatic 15-minute timer",
      "Foldable pedals, floor mat included",
      "Max user weight: 286 lbs",
    ],
    pros: [
      "Only pick offering passive, motor-driven movement",
      "Remote control adjusts speed without bending down",
      "Works for both arms and legs",
      "Includes a floor mat",
    ],
    cons: [
      "Passive motion is a different workout than active pedaling",
      "Most expensive pick in this guide",
      "4.3 rating is on the lower end for this guide",
    ],
    bestFor: "Buyers recovering from an injury who want passive movement rather than active pedaling",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Resistance type and range",
    description: "Compared friction versus magnetic resistance mechanisms and how many levels each pick offers, from 5-level friction dials to 16-level magnetic systems.",
  },
  {
    title: "Noise level",
    description: "Weighed resistance mechanism against likely noise output, since magnetic and belt-drive designs consistently run quieter than basic friction units.",
  },
  {
    title: "Desk clearance and footprint",
    description: "Checked height, adjustability, and overall footprint against the roughly 9-12 inches of clearance most under-desk units need beneath a standard desk.",
  },
  {
    title: "Pedal size and stride fit",
    description: "Compared pedal size and stride length against typical foot sizes, since a cramped pedal design can feel uncomfortable for larger feet regardless of resistance quality.",
  },
  {
    title: "Value for price",
    description: "Weighed resistance range, app connectivity, and build quality against price, from the $31.64 Wakeman to the $172.17 Exerpeutic 2000M.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Measure your desk clearance before assuming any pedal exerciser fits",
    explanation:
      "Most under-desk pedal exercisers need about 9-12 inches of vertical clearance between the floor and the underside of the desk, and standard desks run 28-30 inches tall. Desk crossbars or drawers can eat into that space even on a taller desk, so measure your actual clearance rather than relying on the desk's listed height, and note that the DeskCycle V2 is rated to fit under desks as low as 27 inches thanks to its adjustable height.",
  },
  {
    criterion: "Magnetic and belt-drive resistance run noticeably quieter than friction",
    explanation:
      "A unit rated under 15dB, like the YOSUDA Pro's sub-10dB rating, feels nearly silent during a call, while up to 30dB is still tolerable but noticeable. Friction-resistance picks like the Vaunn and Wakeman are more likely to produce audible clicking or resistance noise than the magnetic designs in this guide.",
  },
  {
    criterion: "Check pedal size against your foot size, not just resistance levels",
    explanation:
      "A unit with a short stride or small pedal can feel cramped for taller users or larger shoe sizes, regardless of how many resistance levels it offers. If you wear a larger shoe size, prioritize pedal dimensions in the listing over resistance range alone.",
  },
  {
    criterion: "Stepped resistance levels give more predictable control than stepless dials",
    explanation:
      "A stepped system like the himaly Mini's 8 levels or the YOSUDA Pro's 16 levels lets you return to an exact known setting session after session. A stepless dial like the Wakeman's can feel less predictable if you're trying to replicate a specific workout intensity.",
  },
  {
    criterion: "3-in-1 designs add value but also add bulk",
    explanation:
      "Picks like the SF-B020026SMART and YOSUDA Pro bundle in resistance bands for upper-body work, which is a real value-add if you want more than leg movement. But that added hardware means a larger footprint than a pure pedal-only unit, worth weighing against your actual desk clearance.",
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
    subheading: "By Budget",
    intro:
      "Prices in this guide range from $31.64 up to $172.17, and the jump in price generally buys quieter resistance and more features, not just a bigger brand name.",
    table: {
      headers: ["Budget", "What you get", "Best pick"],
      rows: [
        ["Under $40", "Basic friction resistance, no frills", "Wakeman Fitness, Vaunn"],
        ["$40-$75", "Magnetic resistance or app connectivity", "himaly Mini, Sunny SF-B023005"],
        ["$100-$175", "Strongest resistance, quietest operation, or motorized", "DeskCycle V2, YOSUDA Pro, Exerpeutic 2000M"],
      ],
    },
  },
  {
    subheading: "By Noise Sensitivity",
    cards: [
      {
        label: "Frequent video calls or shared office",
        text: "The YOSUDA Under Desk Bike Pro is rated under 10dB, the quietest pick in this guide, well below what's noticeable on a call.",
      },
      {
        label: "Occasional calls, mostly solo work",
        text: "The himaly Mini or Sunny SF-B023005's mesh belt-drive design run quieter than basic friction units without the YOSUDA's premium price.",
      },
      {
        label: "Noise isn't a major concern",
        text: "The Vaunn or Wakeman's friction resistance is louder but perfectly usable outside of calls.",
      },
    ],
  },
  {
    subheading: "By Resistance Strength Needed",
    table: {
      headers: ["Fitness goal", "Resistance needed", "Best pick"],
      rows: [
        ["Light movement during desk work", "Basic 5-level friction", "Vaunn, Wakeman Fitness"],
        ["Moderate workout with more control", "8-16 stepped levels", "himaly Mini, Sunny SF-B023005"],
        ["Serious resistance training", "Up to 39 lbs of resistance", "DeskCycle V2"],
      ],
    },
  },
  {
    subheading: "By Desk Clearance",
    intro:
      "Measure your actual under-desk clearance, not just the desk's listed height, before choosing a pick.",
    table: {
      headers: ["Your clearance", "What fits", "Best pick"],
      rows: [
        ["Tight, under 9 inches, or a lower desk", "Adjustable-height unit", "DeskCycle V2 (fits desks as low as 27 inches)"],
        ["Standard 9-12 inches", "Most compact picks in this guide", "Vaunn, himaly Mini, Wakeman Fitness"],
        ["Spacious, 12+ inches", "3-in-1 designs with more bulk", "Sunny SF-B020026SMART, YOSUDA Pro"],
      ],
    },
  },
  {
    subheading: "By Workout Goal",
    cards: [
      {
        label: "Just want light leg movement during the day",
        text: "The Vaunn or Wakeman Fitness cover the basics at the lowest price in this guide.",
      },
      {
        label: "Want structured app-based workouts",
        text: "The Sunny SF-B023005's SunnyFit App or the YOSUDA Pro's Kinomap and Zwift connectivity add real workout structure.",
      },
      {
        label: "Want arms, legs, and resistance bands in one unit",
        text: "The Sunny SF-B020026SMART or YOSUDA Pro's 3-in-1 designs cover the widest range of movement.",
      },
      {
        label: "Recovering from injury or want passive movement",
        text: "The Exerpeutic 2000M is the only motorized pick in this guide, moving the pedals without active effort.",
      },
    ],
    note: "If you're recovering from an injury, check with a doctor or physical therapist before starting any new pedaling routine, motorized or manual.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "How much desk clearance do I need for an under desk bike pedal exerciser?",
    a: "Most under-desk pedal exercisers need about 9-12 inches of vertical clearance between the floor and the underside of the desk, and standard desks run 28-30 inches tall. Desk crossbars or drawers can reduce usable clearance even on a taller desk, so measure your actual space rather than relying on the desk's listed height. The DeskCycle V2 is rated to fit under desks as low as 27 inches thanks to its adjustable height.",
  },
  {
    q: "Which under desk bike pedal exerciser is the quietest?",
    a: "The YOSUDA Under Desk Bike Pro is rated under 10dB, the quietest pick in this guide. A unit under 15dB feels nearly silent during a call, while up to 30dB is still tolerable but noticeable, and friction-resistance picks like the Vaunn or Wakeman tend to run louder than magnetic designs.",
  },
  {
    q: "What's the difference between friction and magnetic resistance?",
    a: "Friction resistance, used in the Vaunn and Wakeman, is simpler and cheaper but tends to be louder and less smooth at higher settings. Magnetic resistance, used in the himaly Mini, DeskCycle V2, and YOSUDA Pro, runs quieter and generally feels smoother across resistance levels, but costs more.",
  },
  {
    q: "Which pick has the strongest resistance for a serious workout?",
    a: "The DeskCycle V2 offers up to 39 lbs of resistance across 8 magnetic levels, the strongest in this guide, driven by a high-inertia flywheel for a smoother pedal feel at higher settings.",
  },
  {
    q: "Does pedal size matter if I have larger feet?",
    a: "Yes. A short stride or small pedal can feel cramped for larger shoe sizes regardless of resistance range. Check the pedal dimensions in the listing against your foot size and desired range of motion before buying, rather than assuming any pedal exerciser will fit comfortably.",
  },
  {
    q: "Is there a motorized option that doesn't require active pedaling?",
    a: "Yes, the Exerpeutic 2000M is the only motorized pick in this guide, using an electric motor to move the pedals for you. It's a good fit for anyone recovering from an injury or who wants passive movement rather than an active pedaling workout.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-under-desk-elliptical", title: "Best Under Desk Ellipticals (2026)" },
  { href: "/guide/best-under-desk-elliptical-for-seniors", title: "Best Under Desk Ellipticals for Seniors (2026)" },
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under Desk Footrests (2026)" },
];
