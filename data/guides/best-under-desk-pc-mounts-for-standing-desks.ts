export const guideSlug = "best-under-desk-pc-mounts-for-standing-desks";
export const guideTitle = "4 Best Under-Desk PC Mounts for Standing Desks in 2026";
export const metaTitle = "Best PC Mounts for Standing Desks (2026)";
export const metaDescription =
  "4 under-desk PC mounts we evaluated for standing desks, covering cable slack across the full height range and added dynamic lift load on the desk motor.";
export const mainKeyword = "under desk pc mount for standing desk";
export const introParagraphs = [
  "A PC's substantial weight adds meaningfully to a standing desk's dynamic lift load, worth checking your desk motor's rated lift capacity against your desk's existing load plus the mounted PC's weight, rather than assuming any standing desk handles any mounted PC weight without issue.",
  "Cable slack needs to accommodate the desk's full height-adjustment range without straining connectors at either extreme, worth calculating against your desk's actual travel distance, and repeated height-cycling introduces vibration and flex at the mount's connection points over time in a way a fixed-height desk mount never experiences.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31eCcCtZEoL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "vivo-clampleg-pc01c",
    rank: 1,
    badge: "Best for Standing Desks Overall",
    name: "VIVO Adjustable Clamp-on Desk Leg PC Mount, Under Desk PC Mount, MOUNT-PC01C",
    price: "$39.99",
    rating: "4.1 stars from Amazon ratings",
    reviews: "396 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31eCcCtZEoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BHF5W87B?tag=deskfinds0d-20",
    description:
      "This clamp attaches to the desk leg itself rather than the desktop surface, meaning it travels with the desk through its full height range and avoids the cable-slack strain a desktop-clamped mount can experience at extreme heights.\n\nTool-free installation is a genuine convenience, though verify your desk leg's shape and thickness are compatible before assuming a universal fit, and check your desk motor's rated lift capacity against the added PC weight before committing.",
    specs: ["Clamps to desk leg, moves with height adjustment", "Tool-free installation", "Solid review base", "Budget price"],
    pros: ["Attaches to the leg, travels with the desk through its full height range", "Tool-free installation", "Large review base for real-world reliability data", "Budget-friendly price"],
    cons: ["Verify desk leg shape and thickness compatibility before buying", "Check your desk motor's rated lift capacity against the added PC weight", "Repeated height-cycling adds long-term stress at the clamp connection"],
    bestFor: "Standing desk owners wanting a leg-mounted design that travels with height changes",
  },
  {
    id: "joyworker-clamp-basic",
    rank: 2,
    badge: "Best Clamp-On Leg Pick for Standing Desks",
    name: "JOY worker Under Desk PC Mount for Standing Desk, Clamp-On Leg CPU Holder",
    price: "$43.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "54 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/416Qk72eERL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FCY4Q147?tag=deskfinds0d-20",
    description:
      "Explicitly marketed for standing desk use, this clamp-on leg mount carries a strong 4.5-star rating that suggests reasonable confidence in surviving repeated height-cycling, though weigh this against the more moderate review count relative to the top pick.\n\nAs with any leg-clamped mount, calculate your cable slack against your desk's full travel distance before installing, so cables aren't strained taut at either the lowest or highest setting.",
    specs: ["Clamp-on leg design for standing desks", "Strong rating", "Moderate review base", "Mid-range price"],
    pros: ["Strong 4.5-star rating specifically for standing desk use", "Leg-clamp design travels with height adjustment", "Reasonable price for the rating quality", "Explicitly marketed for this use case"],
    cons: ["Smaller review base than the top pick", "Calculate cable slack against your desk's full travel range before install", "Vibration at connection points should be checked periodically over time"],
    bestFor: "Buyers wanting a strongly rated, purpose-marketed standing desk mount",
  },
  {
    id: "joyworker-protective-arms",
    rank: 3,
    badge: "Best Reinforced Pick for Standing Desks",
    name: "JOY worker Under Desk PC Mount with Protective Arms, Clamp-On Leg CPU Mount",
    price: "$52.99",
    rating: "4.0 stars from Amazon ratings",
    reviews: "47 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31jUgclGAWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FBTV38DN?tag=deskfinds0d-20",
    description:
      "The added protective arms give extra lateral support to the mounted case, a genuine benefit during height transitions where off-center load can cause wobble, especially at the top and bottom of a standing desk's travel range.\n\nThis is a higher price point in this guide, appropriate for buyers specifically concerned about stability during frequent height cycling rather than the most budget-conscious shoppers.",
    specs: ["Protective arms for lateral support", "Clamp-on leg design", "Higher price for reinforcement", "Moderate review base"],
    pros: ["Protective arms add lateral stability during height transitions", "Leg-clamp design travels with the desk", "Reduces off-center wobble risk versus a basic clamp", "Purpose-built for standing desk use"],
    cons: ["Highest price in this guide", "More moderate 4.0-star rating and smaller review base", "Verify your desk motor's rated lift capacity against the total added weight"],
    bestFor: "Buyers wanting extra lateral stability during frequent height transitions",
  },
  {
    id: "budget-leg-clamp-square",
    rank: 4,
    badge: "Best Budget Pick for Standing Desks",
    name: "Under Desk PC Mount & CPU Holder, No-Drill Clamp-On Stand for Standing Desk (Fits 75x45mm Square Legs)",
    price: "$25.99",
    rating: "4.7 stars from Amazon ratings",
    reviews: "12 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41GUZbBysDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G4VWDDQF?tag=deskfinds0d-20",
    description:
      "Purpose-built for a specific square leg profile, this budget pick carries a strong average rating from a small sample, worth verifying your desk's exact leg dimensions match before ordering.\n\nAt roughly 40 pounds of rated capacity, this suits a lighter mid-tower build rather than a heavier modern gaming tower, and the small review base means long-term standing-desk-cycle durability is less proven than the top picks.",
    specs: ["Fits 75x45mm square legs specifically", "Approx. 40lb capacity", "Lowest price in this guide", "Small review base"],
    pros: ["Lowest price in this guide", "Strong average rating from available reviews", "No-drill clamp-on installation", "Purpose-built for a specific standing desk leg profile"],
    cons: ["Only fits 75x45mm square legs, verify your desk's exact profile first", "Small review base limits confidence in long-term durability", "Lower weight capacity than the other picks, suits lighter towers"],
    bestFor: "Budget-conscious buyers with a compatible square-leg standing desk and a lighter tower",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Cable slack checked against full height-adjustment range", description: "Considered whether cable slack accommodates a standing desk's full travel distance without straining connectors at either the lowest or highest setting." },
  { title: "Added dynamic lift load weighed against desk motor capacity", description: "Weighed how a mounted PC's substantial weight adds to a standing desk's dynamic lift load, rather than assuming any standing desk handles any mounted PC weight." },
  { title: "Height-cycling stress on mount connection points considered", description: "Considered how repeated height-cycling introduces vibration and flex at the mount's connection points over time, a stress pattern a fixed-height desk mount never experiences." },
  { title: "Clearance verified across the full motion range", description: "Checked whether the mounted PC avoids contact with the floor or a crossbar at the desk's lowest setting, and noted off-center-load wobble risk during height transitions." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Check Your Desk Motor's Rated Lift Capacity First",
    note: "A mounted PC's substantial weight adds meaningfully to your standing desk's dynamic lift load. Add the PC's real weight to whatever else already sits on your desk, and compare that total against your desk motor's rated lift capacity before assuming it can handle the extra load through its full range of motion.",
  },
  {
    subheading: "Calculate Cable Slack Against the Full Travel Range",
    note: "Cable slack needs enough length to reach comfortably at both the lowest and highest desk settings without straining connectors. Measure your desk's actual travel distance and route cables with enough loose length at the mid-point to flex both directions.",
  },
  {
    subheading: "Verify Clearance at the Lowest Setting",
    note: "A mounted PC that clears the floor and any crossbar at a mid-height setting can still make contact once the desk drops to its lowest position. Test or measure clearance at the full range before finalizing mount placement, and watch for off-center wobble during the height transition itself.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Leg-mounted design that travels with the desk", "VIVO MOUNT-PC01C"],
        ["Strongest rating for standing desk use", "JOY worker Clamp-On Leg CPU Holder"],
        ["Extra lateral stability during transitions", "JOY worker Protective Arms Mount"],
        ["Budget pick for a compatible square leg", "75x45mm Square Leg Clamp Mount"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify your desk motor's rated lift capacity against total added weight", explanation: "A mounted PC adds meaningfully to a standing desk's dynamic lift load, don't assume any standing desk handles any mounted PC weight without checking the motor's rating." },
  { criterion: "Calculate cable slack against the desk's full travel range", explanation: "Cables need enough length to reach comfortably at both the lowest and highest height settings without straining connectors." },
  { criterion: "Confirm clearance at the desk's lowest height setting", explanation: "A mount that clears the floor at mid-height can still make contact once the desk drops fully, test the full range before finalizing placement." },
  { criterion: "Check for off-center wobble during height transitions", explanation: "A mounted PC's weight sitting off-center from the desk's lift mechanism can cause noticeable wobble as the desk moves, worth checking during a test cycle." },
];

export const faq: FaqItem[] = [
  { q: "Will mounting a PC under my standing desk overload the lift motor?", a: "It can if you don't check, add the PC's real weight to your desk's existing load and compare against the motor's rated lift capacity before assuming any standing desk handles any mounted PC weight." },
  { q: "How much cable slack do I need for a standing desk PC mount?", a: "Enough to comfortably reach both the lowest and highest height settings without straining connectors, measure your desk's actual travel distance before routing cables." },
  { q: "Should I clamp to the desk leg or the desktop surface for a standing desk?", a: "A leg-mounted clamp travels with the desk through its full height range, which generally avoids the cable-slack and clearance issues a desktop-clamped mount can run into at extreme heights." },
  { q: "Does repeated height-cycling loosen a PC mount over time?", a: "It can introduce vibration and flex at the connection points over time, a stress pattern a fixed-height desk mount never experiences, worth periodically checking mount tightness." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-under-desk-pc-mounts", title: "Best Under-Desk PC Mounts (2026)" },
  { href: "/guide/best-clamp-on-under-desk-pc-mounts", title: "Best Clamp-On Under-Desk PC Mounts (2026)" },
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under-Desk Footrests (2026)" },
];
