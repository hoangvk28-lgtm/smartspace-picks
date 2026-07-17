export const guideSlug = "best-tv-stand-solid-wood";
export const guideTitle = "8 Best Solid Wood TV Stands in 2026";
export const metaTitle = "Best Solid Wood TV Stands 2026 – Real Hardwood Picks";
export const metaDescription =
  "Best solid wood TV stands in 2026: genuine acacia, pine, and rubberwood picks, with notes on which options are true solid wood vs veneer.";
export const mainKeyword = "tv stand solid wood";
export const introParagraphs = [
  "\"Solid wood\" gets used loosely in furniture listings. A lot of TV stands marketed with wood-grain fronts are actually engineered wood or MDF cores wrapped in a printed laminate or thin veneer that only looks like real timber up close. That difference matters for durability, weight capacity, and how the piece ages over years of daily use.",
  "Every pick below is described by its manufacturer as genuine solid wood, such as acacia, pine, or rubberwood, rather than an engineered substrate with a wood-look finish. We evaluated the specs and buyer feedback each brand provides and flagged where a listing mixes solid wood with a plywood back panel or veneer accent, so you know exactly what you are buying before it arrives.",
];

export const lastUpdated = "2026-07-16";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41DXIpRJ-4L._SL500_.jpg";

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
    id: "bme-georgina-65-acacia",
    rank: 1,
    badge: "Best Overall",
    name: "Bme Georgina 65\" Solid Acacia Wood TV Stand",
    price: "$489.99",
    rating: "4.7 stars",
    reviews: "278 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41DXIpRJ-4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BYNCTX3N?tag=deskfinds0d-20",
    description: "The Bme Georgina is built from 100% natural acacia wood, a dense hardwood that holds up well to daily use and shows a distinct grain pattern rather than a printed laminate. A geometric-pattern front, three drawers, and one adjustable shelf give it enclosed storage plus one flexible display space, all sitting on metal legs that add a lighter, more modern base than a solid wood plinth.\n\nAt 4.7 stars across 278 ratings it holds the highest rating in this roundup, which is a meaningful signal given acacia furniture can vary in quality between batches. Assembly is described as quick relative to other solid wood stands here, since the metal legs bolt on rather than requiring a full wood frame to be built from scratch.",
    specs: ["65\" width", "100% natural acacia wood", "Geometric pattern front", "3 drawers + 1 adjustable shelf", "Metal legs", "Teak Brown finish"],
    pros: ["Highest rating in this roundup at 4.7 stars", "100% natural acacia, not a veneer or laminate", "3 drawers plus an adjustable shelf for flexible storage", "Quick assembly thanks to bolt-on metal legs"],
    cons: ["Most expensive pick in this roundup", "Acacia grain and color vary piece to piece", "Metal legs won't suit buyers who want an all-wood look"],
    bestFor: "Buyers who want the highest-rated genuine solid wood stand and don't mind paying a premium for it.",
  },
  {
    id: "martin-svensson-65-pine-barn-door",
    rank: 2,
    badge: "Most Reviewed",
    name: "Martin Svensson Home 65\" Solid Pine Wood Entertainment Center",
    price: "$497.48",
    rating: "4.6 stars",
    reviews: "2,030 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41JU678R6nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B06XQ5N85B?tag=deskfinds0d-20",
    description: "This Martin Svensson stand pairs natural solid pine wood with metal accents in a barn-door front design, giving it a rustic farmhouse look that is genuinely built from timber rather than a printed panel. With 2,030 ratings it is by far the most-reviewed stand in this roundup, giving buyers a much larger sample size to judge consistency and long-term durability against.\n\nThe sliding barn doors conceal storage behind them while the metal accent hardware breaks up the all-wood surface for a mixed farmhouse-industrial look. At 4.6 stars across that large review base, the rating is well validated rather than resting on a small handful of early reviews.",
    specs: ["65\" width", "Solid pine wood + metal accents", "Barn door sliding front", "Adjustable shelves", "Cable management", "Black and Honey finish"],
    pros: ["Largest review base in this roundup by far (2,030 ratings)", "Genuine solid pine, not engineered wood", "Barn-door design hides storage cleanly", "Well-validated 4.6-star rating"],
    cons: ["Near the top of the price range in this roundup", "Metal accents mean it's not a pure all-wood look", "Barn doors take more floor clearance to slide open"],
    bestFor: "Buyers who want the most review-validated solid wood stand and like a farmhouse barn-door look.",
  },
  {
    id: "simplihome-draper-60-rubberwood",
    rank: 3,
    badge: "Best Handcrafted Build",
    name: "SIMPLIHOME Draper 60\" Solid Rubberwood Hardwood TV Stand",
    price: "$427.99",
    rating: "4.6 stars",
    reviews: "393 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31pFca2yerL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B079YC99ZL?tag=deskfinds0d-20",
    description: "The SIMPLIHOME Draper is handcrafted from solid rubberwood, a genuine hardwood, and finished with a Teak Brown stain under an NC lacquer topcoat for a durable, hand-applied finish rather than a sprayed laminate coating. Antique brass handles and tapered mid-century legs give it a distinct silhouette among the stands here, and it carries the highest weight capacity relative to its size at 220 lbs.\n\nOf the picks in this roundup, this is the most premium handcrafted build, with joinery and finishing details that go beyond a mass-produced flat-pack stand. That craftsmanship shows up in the price-to-size ratio, since the Draper is narrower than several other picks here but still commands a comparable price.",
    specs: ["60\" width", "Solid rubberwood hardwood", "Teak Brown stain + NC lacquer finish", "220 lb capacity", "Antique brass handles", "Tapered mid-century legs"],
    pros: ["Most premium handcrafted build in this roundup", "Genuine solid rubberwood hardwood construction", "220 lb weight capacity", "Distinct mid-century tapered leg design"],
    cons: ["Narrower than several other picks at 60\"", "Hand-applied lacquer finish needs careful cleaning", "Premium price for its size"],
    bestFor: "Buyers who want the most handcrafted, furniture-grade build quality in a solid wood stand.",
  },
  {
    id: "simplihome-amherst-72-pine",
    rank: 4,
    badge: "Best for Large TVs",
    name: "SIMPLIHOME Amherst 72\" Solid Pine Wood TV Stand",
    price: "$491.29",
    rating: "4.0 stars",
    reviews: "636 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/317P-Jv2ViL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGJ6CHTZ?tag=deskfinds0d-20",
    description: "The SIMPLIHOME Amherst is built from natural kiln-dried solid pine wood, a drying process that reduces warping and cracking compared to air-dried lumber over time. At 72 inches wide it is one of the longer stands in this roundup, giving it a natural fit for larger TVs and living rooms that need the extra surface length.\n\nAt 4.0 stars across 636 ratings, the Amherst sits at the lower end of the rating range in this roundup, though the review count is solid enough to trust the average. Buyers should weigh the extra width and kiln-dried construction against the comparatively lower rating versus the top picks here.",
    specs: ["72\" width", "Natural kiln-dried solid pine wood", "Transitional style", "Cable management", "Shelves for storage", "Brunette Brown finish"],
    pros: ["72\" width suits larger TVs and rooms", "Kiln-dried pine resists warping better than air-dried lumber", "636 ratings gives a reasonably solid sample size", "Transitional style fits a range of decor"],
    cons: ["4.0 stars, lower rating than most other picks here", "Large 72\" footprint needs more wall space", "Pine is softer than acacia or rubberwood and can dent more easily"],
    bestFor: "Buyers with large TVs or long walls who want extra surface width in solid pine.",
  },
  {
    id: "tribewood-63-solid-wood",
    rank: 5,
    badge: "Best Weight Capacity",
    name: "TRIBEWOOD 63\" Solid Wood TV Stand",
    price: "$239.99",
    rating: "4.5 stars",
    reviews: "28 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51fRgZ27TIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FS1G1JQJ?tag=deskfinds0d-20",
    description: "TRIBEWOOD describes this 63 inch stand as 100% genuine solid wood, with distinctive curved legs and an embossed natural surface texture that shows the timber's grain rather than a flat printed finish. It carries a 350 lb weight capacity, the highest in this roundup, which gives real headroom for a large TV plus a soundbar and console stacked on top.\n\nAssembly is a simple 4-step process according to the listing, and non-slip floor pads help keep the stand steady on hardwood or tile. With only 28 ratings, the 4.5-star average is a smaller sample than most other picks here, so treat it as a promising early signal rather than a fully proven track record.",
    specs: ["63\" width", "100% genuine solid wood", "Curved legs", "Embossed natural surface", "350 lb capacity (highest in list)", "Non-slip floor pads", "4-step assembly"],
    pros: ["350 lb capacity, the highest in this roundup", "Genuine 100% solid wood construction", "Simple 4-step assembly", "Non-slip pads add stability on hard flooring"],
    cons: ["Only 28 ratings, smallest sample size in this roundup", "Distinctive curved-leg look may not suit every decor", "Embossed texture is more casual than a smooth hardwood finish"],
    bestFor: "Buyers who want the highest weight capacity in genuine solid wood and are comfortable with a newer, less-reviewed listing.",
  },
  {
    id: "walker-edison-millie-70-fsc-pine",
    rank: 6,
    badge: "Best Sustainable Build",
    name: "Walker Edison Millie 70\" Solid Pine Wood TV Stand",
    price: "$399.99",
    rating: "4.6 stars",
    reviews: "39 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31niIIqPPcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MFTMNSF?tag=deskfinds0d-20",
    description: "The Walker Edison Millie is built from FSC-certified solid pine wood sourced from sustainably managed forests, which is the only pick in this roundup that specifically calls out third-party forestry certification. Scandinavian styling keeps the lines simple, with three drawers and three open compartments splitting the storage between hidden and display space.\n\nCable management routing and a rating for TVs up to 80 inches make it a practical fit for a larger living room setup. At 4.6 stars the rating is strong, though with only 39 reviews the sample size is on the smaller side, similar to a few other picks in this roundup.",
    specs: ["70\" width", "FSC-certified solid pine wood", "3 drawers + 3 open compartments", "Cable management", "Fits TV up to 80\"", "Scandinavian design", "Caramel finish"],
    pros: ["FSC-certified sustainably sourced solid pine", "Fits TVs up to 80\", among the largest supported here", "Mix of drawers and open compartments for flexible storage", "Clean Scandinavian styling"],
    cons: ["Only 39 ratings, a smaller review sample", "Pine is softer than acacia or rubberwood", "Open compartments leave some items visible"],
    bestFor: "Buyers who care about sustainably sourced, FSC-certified solid wood and want a large-TV-friendly stand.",
  },
  {
    id: "tribesigns-63-farmhouse",
    rank: 7,
    badge: "Best Value",
    name: "Tribesigns 63\" Solid Wood TV Stand",
    price: "$215.99",
    rating: "4.5 stars",
    reviews: "8 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41tVqoH1ufL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FZK53G2C?tag=deskfinds0d-20",
    description: "The Tribesigns stand is listed as 100% genuine solid wood and comes in at the lowest price for a true solid wood option in this entire roundup. Three open shelves in a farmhouse style give it a simple, airy storage layout with a 200 lb weight capacity and non-slip pads for stability on hard flooring.\n\nAt $215.99 it undercuts every other genuine solid wood pick here by a wide margin, though buyers should note the review count is very small at only 8 ratings. The 4.5-star average is encouraging but not yet backed by a meaningful sample size, so this is a value pick with more uncertainty than the higher-priced, more established options above.",
    specs: ["63\" width", "100% genuine solid wood", "Farmhouse style", "3 open shelves", "200 lb capacity", "Fits TV up to 75\"", "Non-slip pads", "Rustic Brown finish"],
    pros: ["Lowest price for genuine solid wood in this roundup", "100% solid wood, not engineered or veneer", "Fits TVs up to 75\"", "Non-slip pads add floor stability"],
    cons: ["Only 8 ratings, the smallest sample size here by far", "Open shelving leaves items visible", "200 lb capacity is on the lower end of this roundup"],
    bestFor: "Budget-focused buyers who want genuine solid wood without paying $400-plus.",
  },
  {
    id: "simplihome-harper-72-rubberwood-plywood",
    rank: 8,
    badge: "Best Low-Profile Design",
    name: "SIMPLIHOME Harper 72\" Solid Wood Low TV Stand",
    price: "$479.16",
    rating: "4.4 stars",
    reviews: "87 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31z34HnMFxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1521679?tag=deskfinds0d-20",
    description: "The SIMPLIHOME Harper is handcrafted from solid rubberwood combined with plywood in its construction, which means it is not entirely solid wood the way the Tribesigns, TRIBEWOOD, or Walker Edison picks are. Buyers who want a fully solid build with zero engineered components should note that plywood is used in part of this piece, most likely in the back panel or drawer bottoms, a common practice even in otherwise hardwood furniture.\n\nWhat it does offer is a low-profile mid-century design with a walnut brown stain and NC lacquer finish, hidden notched handles for a clean front face, and a rating for TVs up to 80 inches. A 1-year warranty backs the build, and at 4.4 stars across 87 ratings it has a solid, if not class-leading, track record.",
    specs: ["72\" width", "Solid rubberwood + plywood construction", "Walnut Brown stain + NC lacquer finish", "Low-profile mid-century design", "Hidden notched handles", "1-year warranty", "Fits TV up to 80\""],
    pros: ["Low-profile mid-century design suits modern living rooms", "Fits TVs up to 80\"", "1-year warranty included", "Hidden handles keep the front face clean"],
    cons: ["Uses plywood in part of the build, not fully solid wood", "Near the top of the price range in this roundup", "Lower rating than the top solid-wood-only picks here"],
    bestFor: "Buyers who want a low-profile mid-century look and can accept partial plywood construction alongside solid rubberwood.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Solid wood vs veneer vs engineered wood",
    explanation: "\"Solid wood\" means the visible panels are cut from real timber all the way through, not a thin wood layer glued over particleboard or MDF (veneer), and not a printed laminate that only looks like wood (engineered wood). Most picks in this roundup are labeled 100% solid wood by their manufacturer. The SIMPLIHOME Harper is the one exception here, combining solid rubberwood with plywood in part of its construction, so read the material description carefully rather than assuming every wood-look stand is fully solid.",
  },
  {
    criterion: "Wood species and hardness",
    explanation: "Acacia and rubberwood are denser hardwoods that resist dents and scratches better than pine, which is a softer wood more prone to surface marks from keys, remotes, or pet claws. If your household is rough on furniture, the Bme Georgina (acacia) or SIMPLIHOME Draper (rubberwood) will hold up better over years than the pine-based picks like the Martin Svensson, Amherst, or Walker Edison Millie.",
  },
  {
    criterion: "Weight capacity vs your TV and equipment",
    explanation: "Weight capacities in this roundup range from 200 lbs to 350 lbs. Add up your TV's weight plus any soundbar, console, or streaming equipment you plan to place on top, then choose a stand with clear headroom above that total rather than cutting it close to the stated maximum.",
  },
  {
    criterion: "Finish type and maintenance",
    explanation: "Stains and lacquer topcoats, like the NC lacquer used on the SIMPLIHOME Draper and Harper, tend to be more durable and easier to spot-clean than raw or lightly sealed wood surfaces. Embossed or textured finishes, like the TRIBEWOOD, hide minor scuffs better but show dust differently than a smooth lacquered surface.",
  },
  {
    criterion: "Review sample size",
    explanation: "Ratings in this roundup range from 8 reviews up to over 2,000. A 4.5-star average built on 8 ratings, like the Tribesigns pick, carries far less statistical confidence than a 4.6-star average built on 2,030 ratings, like the Martin Svensson. Weigh newer, lightly reviewed listings as promising rather than proven.",
  },
  {
    criterion: "Sustainability certification",
    explanation: "Only the Walker Edison Millie in this roundup specifically calls out FSC certification, meaning its solid pine is sourced from forests managed under third-party sustainability standards. If sourcing matters to your purchase decision, this is currently the only pick here with that specific certification disclosed.",
  },
  {
    criterion: "Storage style: drawers, open shelves, or barn doors",
    explanation: "Enclosed drawers and barn-door cabinets, like the Martin Svensson and Bme Georgina, hide cable boxes and clutter from view. Open shelving, like the Tribesigns and Walker Edison's compartments, keeps devices ventilated but visible. Choose based on how much you want your media equipment to show.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "How can I tell if a TV stand is really solid wood and not veneer?",
    a: "Check the product's material description for wording like \"100% solid wood\" or a named hardwood species such as acacia, pine, or rubberwood, rather than terms like \"wood grain finish\" or \"engineered wood.\" Every pick in this roundup except the SIMPLIHOME Harper is described by its manufacturer as fully solid wood; the Harper mixes solid rubberwood with plywood in part of its build, which is worth knowing before you buy if a fully solid construction matters to you.",
  },
  {
    q: "Is solid wood better than engineered wood for a TV stand?",
    a: "Solid wood generally holds up better to years of daily use, resists moisture damage more effectively, and can often be sanded and refinished if it gets scratched, none of which is true for engineered wood with a printed laminate surface. The tradeoff is weight and price: solid wood stands, like the ones in this roundup, tend to cost more and weigh more than comparable engineered wood alternatives.",
  },
  {
    q: "Which solid wood TV stand has the best rating in this roundup?",
    a: "The Bme Georgina 65\" Solid Acacia Wood TV Stand has the highest rating at 4.7 stars across 278 ratings. The Martin Svensson Home 65\" Solid Pine Wood Entertainment Center is close behind at 4.6 stars but with the largest review base in the roundup at 2,030 ratings, giving it a more statistically validated track record.",
  },
  {
    q: "What is the most affordable genuine solid wood TV stand?",
    a: "The Tribesigns 63\" Solid Wood TV Stand at $215.99 is the lowest-priced fully solid wood option in this roundup. It is listed as 100% genuine solid wood, though it has a small review sample of only 8 ratings, so treat the 4.5-star average as an early signal rather than a fully proven record.",
  },
  {
    q: "Does pine wood hold up as well as acacia or rubberwood for a TV stand?",
    a: "Pine is a softer wood than acacia or rubberwood, so it is more prone to dents and surface marks from daily household use like keys, remotes, or pet claws. It's still genuine solid wood and several picks here, including the Martin Svensson and Walker Edison Millie, use kiln-dried or FSC-certified pine, which is a reasonable choice if you don't expect heavy wear and tear.",
  },
  {
    q: "How much weight can a solid wood TV stand hold?",
    a: "Capacities in this roundup range from 200 lbs on the Tribesigns pick up to 350 lbs on the TRIBEWOOD stand. Add up your TV's weight plus any soundbar or console you plan to place on top, and choose a stand with clear headroom above that total.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-narrow", title: "Best Narrow TV Stands (2026)" },
  { href: "/guide/best-tv-stand-cheap", title: "Best Cheap TV Stands (2026)" },
  { href: "/guide/best-tv-stand-rustic", title: "Best Rustic TV Stands (2026)" },
];
