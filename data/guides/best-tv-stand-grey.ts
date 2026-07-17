export const guideSlug = "best-tv-stand-grey";
export const guideTitle = "8 Best Grey TV Stands in 2026";
export const metaTitle = "Best Grey TV Stands in 2026 (Barn Door, LED & Farmhouse)";
export const metaDescription =
  "8 best grey TV stands in 2026, from budget open-shelf consoles to barn door and LED cabinets. Compare storage, weight capacity, and TV size fit.";
export const mainKeyword = "tv stand grey";
export const introParagraphs = [
  "Grey has settled in as one of the most versatile TV stand finishes for 2026, pairing easily with farmhouse, mid-century, and industrial living room styles without clashing with existing furniture.",
  "Below are 8 grey TV stands we evaluated on storage layout, weight capacity, and TV size fit, ranging from a budget open-shelf console under $40 to a taller cabinet with built-in LED lighting and power outlets.",
];
export const lastUpdated = "2026-07-17";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41pt-JSZM8L._SL500_.jpg";

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
    id: "furinno-turn-s-tube-wide",
    rank: 1,
    badge: "Most Reviewed",
    name: "Furinno Turn-S-Tube Wide TV Stand",
    price: "$41.39",
    rating: "4.2",
    reviews: "24,107",
    imageUrl: "https://m.media-amazon.com/images/I/41pt-JSZM8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00EDTE2Q2?tag=deskfinds0d-20",
    description:
      "The Furinno Turn-S-Tube Wide TV Stand is by far the most-reviewed grey TV stand on Amazon, with over 24,000 ratings backing up its simple, no-frills design. Four open shelves in a black and grey combination fit a TV up to 55 inches, and rounded safety corners cut down on sharp edges around the piece.\n\nThe frame is FSC-certified and goes together tool-free in about 10 minutes, which makes it an easy first apartment or dorm pick. A 1-year warranty backs the build, and while it lacks enclosed storage, the open shelving keeps a streaming box, router, and game console all within easy reach.",
    specs: [
      "Fits TV up to 55 inches",
      "47.25\" W x 13.4\" D x 15.9\" H",
      "4 open shelves",
      "Black/Grey finish",
      "Tool-free 10-minute assembly",
      "40 lb capacity",
    ],
    pros: [
      "Largest review base of any grey stand on Amazon (24,107 ratings)",
      "Tool-free assembly in about 10 minutes",
      "FSC-certified construction",
      "Rounded corners for safety",
    ],
    cons: [
      "No enclosed storage, everything sits on open shelves",
      "Lower max TV size (55 inches) than most other picks here",
      "Basic finish compared to the barn door and cabinet designs below",
    ],
    bestFor: "Budget-focused buyers who want the most-proven, tool-free grey TV stand for a smaller TV",
  },
  {
    id: "yeshomy-barn-door-wide",
    rank: 2,
    badge: "Best Farmhouse Look",
    name: "YESHOMY Grey Wash Barn Door TV Stand",
    price: "$119.99",
    rating: "4.2",
    reviews: "1,399",
    imageUrl: "https://m.media-amazon.com/images/I/51eM2j8dEoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LTCXX5X?tag=deskfinds0d-20",
    description:
      "The YESHOMY Grey Wash Barn Door TV Stand fits TVs up to 65 inches behind a pair of sliding barn doors finished in a distinctive grey wash that reads more rustic than the flat grey tones on some competitors. Adjustable interior shelving lets you configure the enclosed space around a cable box, gaming console, or media accessories.\n\nCable routing holes keep wiring tucked away, and the overall proportions land squarely in farmhouse-modern territory. At 58 inches wide, it suits a mid-size living room without overwhelming the wall, and the barn door styling gives it a distinct look next to plainer flat-panel stands.",
    specs: [
      "Fits TV up to 65 inches",
      "58\" L x 15.5\" W x 23.8\" H",
      "2 sliding barn doors",
      "Adjustable interior shelves",
      "Cable routing holes",
      "Grey wash finish",
    ],
    pros: [
      "Distinctive grey wash barn door styling",
      "Adjustable interior shelving",
      "Built-in cable routing",
      "Fits TVs up to 65 inches",
    ],
    cons: [
      "Smaller review sample than the Furinno budget pick",
      "Barn doors only allow access to one side of the cabinet at a time",
      "Farmhouse look may not suit more minimalist rooms",
    ],
    bestFor: "Buyers who want a rustic grey wash barn door look in a mid-size living room",
  },
  {
    id: "jummico-mid-century-push",
    rank: 3,
    badge: "Best Handle-Free Design",
    name: "JUMMICO Grey Mid-Century TV Stand",
    price: "$72.99",
    rating: "4.5",
    reviews: "1,137",
    imageUrl: "https://m.media-amazon.com/images/I/51tMrZuG0UL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BQMDQ9G9?tag=deskfinds0d-20",
    description:
      "The JUMMICO Grey Mid-Century TV Stand fits TVs up to 65 inches and swaps traditional handles for push-to-open cabinet doors, giving the front a cleaner, handle-free look that suits mid-century minimalist rooms. Five floor-protecting legs distribute weight evenly and keep the frame stable on hardwood or laminate flooring.\n\nCable management holes route wiring behind the two enclosed cabinets, and the tabletop is rated to hold up to 220 pounds, more than enough margin for a large TV plus a soundbar. At 4.5 stars, it holds one of the stronger ratings in this list, and the combination of push-to-open doors and a solid 220 lb rating makes it a standout at its price point.",
    specs: [
      "Fits TV up to 65 inches",
      "58\" W x 14\" D x 19\" H",
      "220 lb tabletop capacity",
      "2 push-to-open cabinets",
      "5 floor-protecting legs",
      "Cable management holes",
    ],
    pros: [
      "Handle-free push-to-open cabinet doors",
      "220 lb tabletop capacity, high for its price",
      "5 legs improve stability on hard flooring",
      "Strong 4.5 star rating",
    ],
    cons: [
      "Push-to-open doors can be less convenient with full hands than a pull handle",
      "Mid-century minimalist look may not suit farmhouse-style rooms",
      "Fewer total reviews than the barn door picks above",
    ],
    bestFor: "Buyers who want a clean, handle-free mid-century grey stand with strong weight capacity",
  },
  {
    id: "yeshomy-sliding-barn-door-tall",
    rank: 4,
    badge: "Best Space-Saving Doors",
    name: "YESHOMY Grey Sliding Barn Door TV Stand",
    price: "$149.99",
    rating: "4.5",
    reviews: "1,681",
    imageUrl: "https://m.media-amazon.com/images/I/51IKM2VXu7L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BSR7W2MZ?tag=deskfinds0d-20",
    description:
      "The YESHOMY Grey Sliding Barn Door TV Stand fits TVs up to 65 inches and stands taller than most picks here at 27.6 inches, putting the screen closer to a comfortable sofa eye line. Metal-rail sliding barn doors glide open without swinging into the room, which saves floor clearance in tighter layouts compared to standard hinged cabinet doors.\n\nAdjustable interior shelving accommodates different equipment sizes, and cable routing holes keep cords organized at the back. With 1,681 ratings at 4.5 stars, it carries a solid, well-established review base, and the farmhouse grey finish matches the styling of its sibling barn door model above while adding extra height.",
    specs: [
      "Fits TV up to 65 inches",
      "58\" L x 15.5\" W x 27.6\" H",
      "2 metal-rail sliding doors",
      "Adjustable interior shelving",
      "Cable routing holes",
      "Farmhouse grey finish",
    ],
    pros: [
      "Metal-rail sliding doors save clearance space",
      "Taller 27.6 inch height for a more comfortable eye line",
      "Well-established review base (1,681 ratings)",
      "Adjustable shelving inside",
    ],
    cons: [
      "Higher price than the shorter YESHOMY barn door pick above",
      "Sliding doors only expose one cabinet side at a time",
      "Extra height takes up more vertical wall space",
    ],
    bestFor: "Buyers who want a taller barn door stand with clearance-saving sliding doors",
  },
  {
    id: "vasagle-barn-door-compartments",
    rank: 5,
    badge: "Best Storage Flexibility",
    name: "VASAGLE Grey Barn Door TV Stand",
    price: "$119.99",
    rating: "4.6",
    reviews: "1,803",
    imageUrl: "https://m.media-amazon.com/images/I/41ntioa1yFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H4Z8Q1GK?tag=deskfinds0d-20",
    description:
      "The VASAGLE Grey Barn Door TV Stand fits TVs up to 65 inches and splits storage across 4 flexible compartments plus an adjustable shelf, giving more configuration options than most single-cabinet barn door designs. Sleek metal knobs contrast against the cozy farmhouse grey finish, and the tabletop supports up to 170 pounds.\n\nBuilt from premium particleboard and MDF, the frame holds up well to daily use, and cable routing keeps wiring tidy behind the closed doors. At 4.6 stars across 1,803 ratings, it has both a strong rating and a solid review base, making it one of the more well-rounded picks in this list for buyers who want maximum interior flexibility.",
    specs: [
      "Fits TV up to 65 inches",
      "58\" L x 16\" W x 24\" H",
      "170 lb tabletop capacity",
      "4 compartments + 1 adjustable shelf",
      "Sleek metal knob hardware",
      "Premium particleboard + MDF build",
    ],
    pros: [
      "4 flexible storage compartments plus an adjustable shelf",
      "Strong 4.6 star rating with a solid review base",
      "170 lb tabletop capacity",
      "Sturdy particleboard and MDF construction",
    ],
    cons: [
      "Barn doors still limit access to one cabinet side at a time",
      "Not the tallest option if you want a higher eye line",
      "Mid-range price relative to the budget picks in this list",
    ],
    bestFor: "Buyers who want the most flexible interior storage layout among the barn door designs",
  },
  {
    id: "linsy-washed-glass-doors",
    rank: 6,
    badge: "Highest Weight Capacity",
    name: "LINSY HOME Washed Grey TV Stand",
    price: "$191.99",
    rating: "4.6",
    reviews: "1,010",
    imageUrl: "https://m.media-amazon.com/images/I/41Wc4UcBmZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FP16T67B?tag=deskfinds0d-20",
    description:
      "The LINSY HOME Washed Grey TV Stand fits TVs up to 75 inches and carries a 360 pound weight capacity, the highest of any stand in this list by a wide margin. A washed grey and brown vintage blend gives it a slightly warmer look than the flat grey finishes elsewhere here, and 2 glass cabinet doors reveal contents while still keeping them enclosed.\n\nThree height-adjustable shelves let you reconfigure the interior, and the surface resists water and general wear. At 66 inches wide and 22 inches deep, it's one of the larger-footprint stands in this list, suited to bigger living rooms with a large TV and additional stacked media equipment.",
    specs: [
      "Fits TV up to 75 inches",
      "66\" W x 15.7\" D x 22\" H",
      "360 lb weight capacity",
      "2 glass cabinet doors",
      "3 adjustable shelves",
      "Water-resistant surface",
    ],
    pros: [
      "Highest weight capacity in this list at 360 lbs",
      "Glass cabinet doors show contents while staying enclosed",
      "Fits the largest TVs in this list, up to 75 inches",
      "Water-resistant surface",
    ],
    cons: [
      "Most expensive pick in this list aside from the LED option",
      "Washed grey/brown blend reads warmer than flat grey finishes",
      "Glass doors need more upkeep to stay free of fingerprints",
    ],
    bestFor: "Buyers who want maximum weight capacity for a large TV and stacked media equipment",
  },
  {
    id: "yitahome-led-outlets",
    rank: 7,
    badge: "Best Built-in Power",
    name: "YITAHOME Grey LED TV Stand with Outlets",
    price: "$199.99",
    rating: "4.5",
    reviews: "120",
    imageUrl: "https://m.media-amazon.com/images/I/51NqQi5WU8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F1CPSHSQ?tag=deskfinds0d-20",
    description:
      "The YITAHOME Grey LED TV Stand with Outlets fits TVs up to 75 inches and is the tallest pick in this list at 32 inches, plus it's the only one here with built-in power. Multi-color LED lighting sets an ambient glow behind the TV, while 2 built-in AC outlets and 2 USB ports let you charge devices or plug in a streaming box without running an extension cord across the room.\n\nTwo tempered glass doors add a premium look up front, and 3 adjustable shelves inside handle different equipment sizes. It's the priciest pick in this list, but between the LED lighting, integrated power, and tall 32 inch profile, it's built for buyers who want their TV stand to double as a design centerpiece.",
    specs: [
      "Fits TV up to 75 inches",
      "66\" W x 15.7\" D x 32\" H",
      "Multi-color LED lighting",
      "2 AC outlets + 2 USB ports",
      "2 tempered glass doors",
      "3 adjustable shelves",
    ],
    pros: [
      "Only pick in this list with built-in AC outlets and USB ports",
      "Multi-color LED lighting for ambiance",
      "Tallest stand in this list at 32 inches",
      "Tempered glass doors for a premium look",
    ],
    cons: [
      "Most expensive pick in this list",
      "Smallest review sample here (120 ratings)",
      "Extra height and features add more setup complexity",
    ],
    bestFor: "Buyers who want built-in power, USB charging, and LED ambiance in a tall grey stand",
  },
  {
    id: "luplom-rustic-industrial",
    rank: 8,
    badge: "Best Budget Pick",
    name: "Luplom Rustic Grey TV Stand",
    price: "$39.99",
    rating: "4.2",
    reviews: "603",
    imageUrl: "https://m.media-amazon.com/images/I/41Btet45+eL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F83ZMQ65?tag=deskfinds0d-20",
    description:
      "The Luplom Rustic Grey TV Stand is the most affordable pick in this list at under $40, sized for TVs up to 50 inches in smaller bedrooms or apartments. A metal frame paired with engineered wood shelving gives it an industrial look, and 3 open shelves keep a streaming box, router, and game console all within easy reach.\n\nEight adjustable anti-wobble feet compensate for uneven flooring, and assembly takes about 20 minutes. At 100 pounds of stated capacity and a compact 45 inch width, it's built for small rooms rather than large living spaces, and it's a straightforward, no-frills option for anyone who just needs a simple stand under a smaller TV.",
    specs: [
      "Fits TV up to 50 inches",
      "45\" W x 11.8\" D x 19\" H",
      "100 lb capacity",
      "Metal + engineered wood frame",
      "3 open shelves",
      "8 adjustable anti-wobble feet",
    ],
    pros: [
      "Least expensive pick in this list",
      "8 adjustable feet handle uneven flooring",
      "Quick 20-minute assembly",
      "Compact footprint suits small rooms",
    ],
    cons: [
      "Smallest max TV size in this list at 50 inches",
      "Open shelving only, no enclosed storage",
      "Smaller footprint limits use in larger living rooms",
    ],
    bestFor: "Budget buyers with a smaller TV and a compact bedroom or apartment space",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "TV size fit",
    explanation:
      "Each stand lists a maximum supported TV size, but bigger isn't always better. A 50 inch TV on a 75 inch capacity stand will look undersized, so match the stand's width to your actual screen for the best visual proportion.",
  },
  {
    criterion: "Enclosed vs open storage",
    explanation:
      "Barn door and cabinet designs hide cable boxes and clutter behind doors, while open-shelf stands like the Furinno keep everything visible and instantly accessible. Decide how much you want on display before choosing a style.",
  },
  {
    criterion: "Weight capacity",
    explanation:
      "Weight capacity covers the TV plus anything else stacked on top, like a soundbar or decor. If you have a heavier TV or plan to stack multiple items, prioritize higher-rated stands like the LINSY HOME (360 lbs).",
  },
  {
    criterion: "Grey tone variation",
    explanation:
      "Grey finishes range from flat, cool greys to warmer washed or vintage-blend tones. Since product photos can shift under different lighting, check close-up review photos before committing to a specific shade for your room.",
  },
  {
    criterion: "Door type and clearance",
    explanation:
      "Sliding barn doors save floor clearance in front of the stand but only expose one cabinet side at a time. Hinged or push-to-open doors give full access to both sides but need more room to swing open.",
  },
  {
    criterion: "Built-in features",
    explanation:
      "A handful of grey TV stands now include LED lighting, AC outlets, or USB ports built into the frame. These add convenience but also add cost and complexity, so weigh whether you'll actually use the extra features.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What is the best grey TV stand overall?",
    a: "The Furinno Turn-S-Tube Wide TV Stand (Pick 1) is the most-reviewed grey TV stand on Amazon with over 24,000 ratings and a budget-friendly price. For enclosed storage and a higher rating, the VASAGLE Grey Barn Door TV Stand (Pick 5) at 4.6 stars is also a strong all-around choice.",
  },
  {
    q: "Which grey TV stand fits the largest TVs?",
    a: "The LINSY HOME (Pick 6) and YITAHOME LED (Pick 7) both fit TVs up to 75 inches, the widest range in this list. If your TV is 65 inches or smaller, most of the other picks here will fit comfortably.",
  },
  {
    q: "What is the most affordable grey TV stand in this list?",
    a: "The Luplom Rustic Grey TV Stand (Pick 8) is the most affordable at $39.99, though it's sized for TVs up to 50 inches. For a larger TV on a budget, the Furinno (Pick 1) at $41.39 fits up to 55 inches.",
  },
  {
    q: "Which grey TV stand has the highest weight capacity?",
    a: "The LINSY HOME Washed Grey TV Stand (Pick 6) has the highest rated weight capacity in this list at 360 lbs, useful if you plan to stack a heavier TV along with a soundbar or other equipment on top.",
  },
  {
    q: "Do any grey TV stands include built-in power outlets?",
    a: "Yes, the YITAHOME Grey LED TV Stand (Pick 7) is the only pick in this list with built-in AC outlets and USB ports, along with multi-color LED lighting, though it's also the most expensive option here.",
  },
  {
    q: "Are barn door TV stands harder to access than cabinet doors?",
    a: "Sliding barn doors only expose one side of the cabinet at a time, since the door has to slide in front of the other opening. Hinged or push-to-open cabinet doors, like the JUMMICO (Pick 3), give full simultaneous access to both sides but need more floor clearance to swing open.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-oak", title: "Best Oak TV Stands in 2026" },
  { href: "/guide/best-tv-stand-universal", title: "Best Universal TV Stands in 2026" },
  { href: "/guide/best-tv-stand-heavy-duty", title: "Best Heavy Duty TV Stands in 2026" },
];
