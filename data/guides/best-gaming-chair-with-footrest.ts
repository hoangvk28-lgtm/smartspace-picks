export const guideSlug = "best-gaming-chair-with-footrest";
export const guideTitle = "6 Best Gaming Chairs with Footrest in 2026";
export const metaTitle = "Best Gaming Chairs with Footrest in 2026 - Top 8 Picks";
export const metaDescription =
  "The 8 best gaming chairs with a built-in footrest in 2026, covering pull-out, detachable, and recliner-style designs for every budget.";
export const mainKeyword = "gaming chair with footrest";
export const introParagraphs = [
  "A built-in footrest turns a gaming chair into a place you can actually rest between rounds, not just sit upright at a desk, but footrest quality varies a lot between a flimsy pull-out tray and a sturdy platform that supports your legs at full recline.",
  "We evaluated these eight footrest-equipped chairs based on product specs and buyer feedback, ranking them by footrest durability, recline range, and overall build quality across a wide range of prices.",
];
export const lastUpdated = "2026-07-16";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/418XL3oa87L._SL500_.jpg";

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
    id: "respawn-110-pro-footrest",
    rank: 1,
    badge: "Editor's Choice 2026",
    name: "RESPAWN 110 Pro Gaming Chair (Gray, Fabric + Footrest)",
    price: "$206.99",
    rating: "4.2 stars",
    reviews: "11,049 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/418XL3oa87L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B6JN5TK4?tag=deskfinds0d-20",
    description: "The RESPAWN 110 Pro pairs a sturdy pull-out footrest with 2-layer thick foam cushioning, and its 11,049 ratings make it the most reviewed chair in this guide by a wide margin. Recline up to 155 degrees turns the chair into a proper resting position rather than a barely-tilted seat.\n\n4D armrests and a 275 lb capacity round out the package, and a 5-year warranty backs up a chair that has clearly held up for a large number of buyers over time.",
    specs: ["Sturdy pull-out footrest", "Reclines to 155°", "2-layer thick foam", "4D armrests", "275 lb capacity", "5-year warranty"],
    pros: ["11,049 ratings, most reviewed in guide", "5-year warranty", "4D armrests", "155° recline"],
    cons: ["4.2 stars slightly below top-rated picks", "Footrest tray is fixed length, not extendable"],
    bestFor: "Buyers who want the most proven, widely reviewed footrest chair at a mid-range price.",
  },
  {
    id: "gtplayer-big-tall-footrest",
    rank: 2,
    badge: "Best Big & Tall",
    name: "GTPLAYER Big & Tall Gaming Chair (400 lbs, Pocket Spring)",
    price: "$99.96",
    rating: "4.4 stars",
    reviews: "3,278 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41rfEKecDtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FZHHL9LP?tag=deskfinds0d-20",
    description: "The GTPLAYER Big & Tall chair supports 400 lbs, the highest capacity in this guide, and pairs that with a premium pocket spring cushion rather than standard foam. The pull-out footrest and recline range from 90 to 150 degrees make it a genuine rest-and-recline chair, not just a seat with a footnote feature.\n\nA saddle-shaped ergonomic seat and integrated spring lumbar add comfort details rarely seen under $100, making this one of the strongest value picks in the guide.",
    specs: ["400 lb capacity", "Pocket spring cushion", "Pull-out footrest", "Reclines 90-150°", "Integrated spring lumbar", "Saddle-shaped seat"],
    pros: ["400 lb capacity", "Pocket spring cushion under $100", "Saddle-shaped ergonomic seat", "4.4 stars"],
    cons: ["No 4D armrests", "Bulkier frame due to big and tall sizing"],
    bestFor: "Larger buyers who want the highest weight capacity and a premium cushion feel at a budget price.",
  },
  {
    id: "lemberi-footrest-massage",
    rank: 3,
    badge: "Best Price-to-Quality",
    name: "LEMBERI Gaming Chair (400 lbs, Gray + Footrest + Massage)",
    price: "$99.99",
    rating: "4.4 stars",
    reviews: "10,743 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41C1HWbEZDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07X5WDP2L?tag=deskfinds0d-20",
    description: "The LEMBERI chair combines a detachable footrest with a USB massage lumbar feature, and its 10,743 ratings at 4.4 stars suggest that combination has held up well for a large number of buyers. A 400 lb capacity matches the highest in this guide.\n\nRecline up to 155 degrees and casters rated for 1000 miles round out a chair that offers strong price-to-quality ratio, backed by nearly as many reviews as the top-ranked RESPAWN pick.",
    specs: ["400 lb capacity", "USB massage lumbar", "Detachable footrest", "Reclines to 155°", "1000-mile rated casters"],
    pros: ["10,743 ratings at 4.4 stars", "USB massage lumbar included", "400 lb capacity", "Detachable footrest"],
    cons: ["Massage motor adds a component that can wear out over years", "PU leather construction reflects the budget price"],
    bestFor: "Buyers who want a massage lumbar feature and detachable footrest at the lowest price in this guide.",
  },
  {
    id: "dowinx-footrest-fabric",
    rank: 4,
    badge: "Best Fabric Pick",
    name: "Dowinx Gaming Chair Fabric (Pocket Spring + Footrest, 300 lbs)",
    price: "$109.99",
    rating: "4.3 stars",
    reviews: "2,629 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41VyP4utKyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DDCK8JPB?tag=deskfinds0d-20",
    description: "The Dowinx swaps typical PU leather for breathable mesh fabric over a sofa-like pocket spring cushion, giving it a distinct seat feel among footrest chairs in this price range. A USB massage lumbar and pull-out footrest add comfort features that pair well with the softer cushion.\n\nWith a 300 lb capacity and recline up to 135 degrees, it prioritizes seat comfort and breathability over the deeper recline angles offered by some competitors.",
    specs: ["Breathable mesh fabric", "Pocket spring cushion", "USB massage lumbar", "Pull-out footrest", "Reclines to 135°", "300 lb capacity"],
    pros: ["Breathable fabric alternative to leather", "Pocket spring cushion", "USB massage lumbar", "300 lb capacity"],
    cons: ["135° recline is lower than most other picks", "Fabric requires different cleaning care than leather"],
    bestFor: "Buyers who prioritize breathable fabric and a soft seat feel over maximum recline angle.",
  },
  {
    id: "yaheetech-footrest-massage",
    rank: 5,
    badge: "Best Value in Segment",
    name: "Yaheetech Gaming Chair (Massage Lumbar + Footrest, 300 lbs)",
    price: "$79.99",
    rating: "4.3 stars",
    reviews: "17,438 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Sr+W5wr3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DFGH7R5J?tag=deskfinds0d-20",
    description: "The Yaheetech chair has the highest review count in this entire guide at over 17,000 ratings, and at $79.99 it is also the lowest priced. A pull-out footrest and USB massage lumbar pack real comfort features into a budget frame with a reinforced steel base.\n\nRecline range from 90 to 135 degrees and a 300 lb capacity match the segment standard, making this the best value pick when weighing price against proven buyer satisfaction at scale.",
    specs: ["Pull-out footrest", "USB massage lumbar", "Reclines 90-135°", "300 lb capacity", "2D armrests", "Reinforced steel frame"],
    pros: ["17,438 ratings, most in guide", "Lowest price in guide", "USB massage lumbar", "Reinforced steel frame"],
    cons: ["2D armrests only", "135° recline cap"],
    bestFor: "Budget-conscious buyers who want the most widely proven footrest chair at the lowest price.",
  },
  {
    id: "respawn-900-console",
    rank: 6,
    badge: "Best for Console Gaming",
    name: "RESPAWN 900 Console Gaming Chair (Recliner + Footrest, 275 lbs)",
    price: "$199.99",
    rating: "4.2 stars",
    reviews: "3,107 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41XTooEFbuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D9H3PDSY?tag=deskfinds0d-20",
    description: "The RESPAWN 900 breaks from the desk-chair format entirely, built as a full-body recliner with an integrated footrest and a stable pedestal base designed specifically for console gaming setups on the floor or in front of a TV. A 360-degree swivel lets you turn toward the screen or a nearby table without standing up.\n\nWith a 275 lb capacity and recline up to 135 degrees, it trades desk compatibility for a couch-like console gaming experience that none of the desk-style chairs in this guide can replicate.",
    specs: ["Full-body recliner console style", "Integrated footrest", "Reclines to 135°", "275 lb capacity", "360° swivel", "Stable pedestal base"],
    pros: ["Purpose-built for console gaming", "360° swivel", "Couch-like integrated footrest", "Stable pedestal base"],
    cons: ["Not designed for desk use", "135° recline is limited compared to desk-chair picks"],
    bestFor: "Console gamers who want a recliner-style chair with a footrest instead of a desk chair.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Pull-out vs detachable footrests serve different habits", explanation: "Pull-out footrests, like on the RESPAWN 110 Pro and GTPLAYER Big & Tall, stay attached and slide out on a track, which is convenient for buyers who use the footrest often. Detachable footrests, like the LEMBERI's, can be fully removed when not needed, which suits buyers who only want the feature occasionally and prefer a cleaner desk-chair look the rest of the time." },
  { criterion: "Recline range determines whether the footrest is actually usable", explanation: "A footrest is most comfortable when paired with a deep recline, since resting your legs while sitting upright at 90 degrees feels awkward. Chairs like the RESPAWN 110 Pro (155°) and GTPLAYER Big & Tall (150°) pair footrests with recline ranges deep enough to actually lean back and use the footrest as intended." },
  { criterion: "Massage lumbar is a nice-to-have, not a durability feature", explanation: "USB massage lumbar, found on the LEMBERI, Dowinx, and Yaheetech, adds a motorized component that can wear out over years of use, unlike passive foam or pillow lumbar support. It is worth choosing if the massage feature matters to you, but don't expect it to outlast the chair's frame." },
  { criterion: "Weight capacity affects footrest durability too, not just the seat", explanation: "A footrest under a heavier user experiences more downward stress than the seat cushion. The GTPLAYER (400 lbs) and LEMBERI (400 lbs) are built with reinforced frames that account for this, while lower-capacity picks like the Dowinx (300 lbs) are tuned for lighter loads." },
  { criterion: "Desk-style chairs and console recliners solve different problems", explanation: "The RESPAWN 900 is a pedestal-based recliner meant for floor or TV setups, not desk use, while every other chair in this guide is a standard desk-height gaming chair. Decide whether you're shopping for a desk chair with a footrest bonus or a dedicated console recliner before comparing specs." },
];

export const faq: FaqItem[] = [
  { q: "Is a pull-out or detachable footrest better?", a: "Pull-out footrests, like on the RESPAWN 110 Pro, are more convenient for frequent use since they're always attached and slide out on a track. Detachable footrests, like the LEMBERI's, let you remove the footrest entirely for a cleaner look when you don't need it. Choose based on how often you expect to actually use the footrest." },
  { q: "Do footrest chairs recline further than regular gaming chairs?", a: "Not necessarily, but the best footrest chairs pair a wide recline range with the footrest so you can actually lean back and rest your legs. The RESPAWN 110 Pro reclines to 155 degrees and the GTPLAYER Big & Tall to 150 degrees, both deep enough to make the footrest genuinely useful rather than decorative." },
  { q: "Can a footrest chair replace a recliner for console gaming?", a: "The RESPAWN 900 is purpose-built for this, using a pedestal base and full-body recliner design instead of a standard desk chair frame. The other seven chairs in this guide are desk-style gaming chairs that happen to include a footrest, which work fine for casual recline but aren't a true recliner replacement." },
  { q: "Does a massage lumbar feature affect footrest chair durability?", a: "The massage motor itself is a separate component from the footrest mechanism, so it doesn't affect footrest durability directly. Based on product specs and buyer feedback, the LEMBERI, Dowinx, and Yaheetech all combine massage lumbar with footrests, and the massage motor is more likely than the footrest track to wear out first over years of use." },
  { q: "What weight capacity should I look for in a footrest gaming chair?", a: "Look for a capacity comfortably above your body weight, since the footrest bears extra downward stress under heavier users. The GTPLAYER and LEMBERI both offer 400 lb capacity, the highest in this guide, while most other picks range from 275 to 350 lbs." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-gaming-chair-for-adults", title: "Best Gaming Chairs for Adults (2026)" },
  { href: "/guide/best-gaming-chair-with-speakers", title: "Best Gaming Chairs with Speakers (2026)" },
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under-Desk Footrests (2026)" },
  { href: "/guide/best-office-chair-for-back-pain", title: "Best Office Chairs for Back Pain (2026)" },
];
