export const guideSlug = "best-portable-office-booths";
export const guideTitle = "4 Best Portable Office Booths in 2026";
export const metaTitle = "Best Portable Office Booths (2026)";
export const metaDescription =
  "4 fully enclosed office booths we evaluated, with an honest note that none of the verified listings are open-front booth-style designs.";
export const mainKeyword = "portable office booths";
export const introParagraphs = [
  "\"Booth\" often implies an open-front, standing-height design in furniture retail, but every verified product in this niche is a fully enclosed pod with a door, not an open-front booth. We're framing this guide around the enclosed products actually available rather than a genuine booth-style category, which doesn't currently exist as an Amazon listing here.",
  "\"Soundproof\" in a listing title is marketing language, not a test result, none of the verified listings in this niche publish an STC or NRC number, and real sound leakage most often comes through door seals, floor gaps, or ventilation openings rather than the wall panels the marketing photos highlight.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31pJxaKyuAL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0f3w1s3st-pod",
    rank: 1,
    badge: "Best Fully Enclosed Single-Person Booth",
    name: "Portable Soundproof Office Pod Booth, Quiet Meeting Pod with Acoustic Panels, Single Person Workspace (H92in W43in D40in)",
    price: "$4,888.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31pJxaKyuAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F3W1S3ST?tag=deskfinds0d-20",
    description:
      "A single-person soundproof pod booth with acoustic panels, sized for one occupant at H92in W43in D40in exterior dimensions. Amazon's listing does not include a star rating or review count, so buyers are working from the manufacturer's own description rather than verified feedback.\n\nSince acoustic-insulating wall thickness eats into interior space, the usable footprint inside will be meaningfully smaller than the 43in by 40in exterior dimensions suggest, plan a physical mockup or ask the seller for interior clearances before ordering. No formal STC or NRC test data is disclosed for the acoustic claim.",
    specs: ["Single-person workspace", "Exterior dimensions H92in W43in D40in", "Acoustic panel interior", "Generic/private-label manufacturer"],
    pros: ["Exact exterior dimensions disclosed in the listing (H92 x W43 x D40in)", "Acoustic panel construction for a single-occupant workspace", "Priced in the mid-range of this product pool", "No star rating or review count to independently verify against the marketing copy"],
    cons: ["No star rating or review count available from Amazon", "No formal STC/NRC sound-isolation data disclosed", "Interior usable space will be smaller than exterior dimensions imply"],
    bestFor: "Buyers wanting a fully enclosed single-occupant structure with disclosed dimensions.",
  },
  {
    id: "b0f62z8cff-pod",
    rank: 2,
    badge: "Best 1-2 Person Enclosed Booth",
    name: "Soundproof Office Pod Booth, Quiet Meeting Pod with Acoustic Panels, One to Two Person Workspace (W55in D48in H92in)",
    price: "$4,999.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31KSQuhuwNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F62Z8CFF?tag=deskfinds0d-20",
    description:
      "A one-to-two-person pod at W55in D48in H92in exterior dimensions, one of the few listings in this pool to explicitly state a small occupancy range rather than a single fixed number. Amazon's listing does not include a star rating or review count.\n\nThe wider W55in footprint compared to the strictly solo pods gives a bit more room for a second occupant or a visitor chair, though interior usable space will still run smaller than the exterior dimensions once acoustic wall thickness is accounted for. No STC/NRC data or ventilation specs are disclosed.",
    specs: ["1 to 2 person capacity", "Exterior dimensions W55in D48in H92in", "Acoustic panel interior", "Generic/private-label manufacturer"],
    pros: ["Explicit 1-2 person occupancy range disclosed in the title", "Exact exterior dimensions disclosed (W55 x D48 x H92in)", "Mid-range price relative to the rest of this pool", "No star rating or review count to independently verify against the marketing copy"],
    cons: ["No star rating or review count available from Amazon", "No formal STC/NRC sound-isolation data disclosed", "No ventilation specs disclosed for two-occupant use"],
    bestFor: "Buyers wanting occasional second-occupant capacity in a fully enclosed structure.",
  },
  {
    id: "b0drnjws8q-pod",
    rank: 3,
    badge: "Best Group-Capacity Enclosed Booth",
    name: "Soundproof Office Pod Booth, Quiet Meeting Pod with Acoustic Panels, Sound Proof Room with Desk (4-6 People, H92in W91in D70in)",
    price: "$7,999.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31FLR-RdCvL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DRNJWS8Q?tag=deskfinds0d-20",
    description:
      "The largest and most expensive pod in this research pool, sized for 4 to 6 people at H92in W91in D70in exterior dimensions and shipping with a desk included. Amazon's listing does not include a star rating or review count, so group-size claims and build quality are unverified beyond the manufacturer's own description.\n\nA structure this large means real freight delivery logistics, multi-person assembly, and floor-loading verification are not optional, budget for professional installation and confirm ceiling height and doorway clearance well before delivery. Ventilation for a 4-6 person enclosed space over a multi-hour meeting is not addressed in the listing, worth asking the seller about directly.",
    specs: ["4 to 6 person capacity", "Exterior dimensions H92in W91in D70in", "Ships with a desk", "Largest and highest-priced pod in this pool"],
    pros: ["Largest stated capacity in this pool at 4 to 6 people", "Ships with a desk included", "Exact exterior dimensions disclosed (H92 x W91 x D70in)", "No star rating or review count to independently verify against the marketing copy"],
    cons: ["No star rating or review count available from Amazon", "Highest price in this pool at $7,999", "No ventilation data disclosed for a multi-person enclosed space"],
    bestFor: "Teams needing a 4-6 person fully enclosed meeting structure.",
  },
  {
    id: "b0h4412y7j-pod",
    rank: 4,
    badge: "Largest Group-Capacity Enclosed Booth",
    name: "Soundproof Office Pod Booth for 5-7 People, Quiet Meeting Pod with Acoustic Panels, Mobile Focus Room",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/411xViXeChL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H4412Y7J?tag=deskfinds0d-20",
    description:
      "The largest stated occupancy in this research pool at 5 to 7 people, marketed as a mobile focus room for group meetings. Amazon's listing does not include a star rating or review count, and unlike some other large pods in this pool it does not disclose exterior dimensions in the title.\n\nA structure sized for up to 7 occupants raises real ventilation and airflow questions for multi-hour use that the listing does not address, and \"mobile\" in the name should not be assumed to mean lightweight or easy to relocate without professional help given the likely weight of a structure this size. Confirm freight delivery, assembly crew requirements, and floor loading directly with the seller.",
    specs: ["5 to 7 person capacity", "Largest stated occupancy in this pool", "Marketed as a \"Mobile Focus Room\"", "No exterior dimensions disclosed in the title"],
    pros: ["Largest stated occupancy in this pool at 5 to 7 people", "Positioned for group meeting and focus-room use cases", "No star rating or review count to independently verify against the marketing copy"],
    cons: ["No star rating or review count available from Amazon", "No exterior dimensions disclosed in the listing title", "Price not returned by the listing data, check current Amazon price directly"],
    bestFor: "Larger teams needing a 5-7 person fully enclosed meeting structure.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Enclosure style verified against \"booth\" terminology", description: "Checked each listing's description for door, wall, and enclosure details, confirming all nine verified products in this niche are fully enclosed rather than open-front." },
  { title: "Occupancy claims taken directly from listing titles", description: "Used only the occupancy figures explicitly stated in each product's title or description, not inferred from dimensions alone." },
  { title: "Acoustic claims flagged as unverified", description: "Noted that no listing in this niche publishes formal STC or NRC sound test data despite \"soundproof\" and \"acoustic\" language throughout." },
  { title: "Verified listing data only", description: "Used only prices, dimensions, and features actually printed in each Amazon listing, no invented ratings or review counts." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "There Is No Open-Front \"Booth\" in This Category Right Now",
    note: "Every verified product in this niche is a fully enclosed pod with a door, not an open-front, standing-height booth. If you specifically want an open-front acoustic booth, none of the currently available Amazon listings in this research pass match that design, plan accordingly.",
  },
  {
    subheading: "\"Soundproof\" Claims Need Independent Verification",
    note: "\"Soundproof\" in a listing title is marketing language, not a test result, none of the verified listings in this niche publish an STC or NRC number, and real sound leakage most often comes through door seals, floor gaps, or ventilation openings rather than the wall panels the marketing photos highlight.",
  },
  {
    subheading: "Match Group Size to a Specific Pick, Not Just a Label",
    note: "Occupancy language varies across listings (\"single person,\" \"1-2 person,\" \"4-6 people,\" \"5-7 people\"), match your actual headcount need to the specific stated capacity rather than assuming \"booth\" implies any particular size.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Single-occupant enclosed structure", "Portable Soundproof Office Pod Booth"],
        ["1-2 person enclosed structure", "Soundproof Office Pod Booth"],
        ["4-6 person group meetings", "Soundproof Office Pod Booth"],
        ["5-7 person group meetings", "Soundproof Office Pod Booth for 5-7 People"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Don't expect an open-front booth design", explanation: "Every verified listing in this niche is a fully enclosed pod with a door, if you specifically want an open-front acoustic booth, that design was not found in this research pass." },
  { criterion: "Match occupancy language to your real headcount", explanation: "\"Booth\" doesn't imply a specific size, check the stated occupancy (single, 1-2, 4-6, or 5-7 person) against your actual use case before ordering." },
  { criterion: "Verify acoustic claims independently", explanation: "No listing in this niche publishes formal STC or NRC data, treat \"soundproof\" and \"acoustic\" as descriptive marketing language rather than tested specs." },
  { criterion: "Plan for freight delivery regardless of size", explanation: "Even the smallest single-person structures in this pool ship as large freight items requiring delivery and assembly planning." },
];

export const faq: FaqItem[] = [
  { q: "Are these office booths open-front or fully enclosed?", a: "All verified products in this niche are fully enclosed pods with a door, we did not find any open-front, standing-height booth designs in this research pass." },
  { q: "What's the largest group-capacity booth available?", a: "The largest verified listing in this pool states a 5 to 7 person capacity, though exterior dimensions are not disclosed for that specific listing." },
  { q: "Do these booths have verified soundproofing test data?", a: "No, none of the listings in this niche publish formal STC or NRC sound test numbers despite using \"soundproof\" and \"acoustic\" in their titles." },
  { q: "Is a small single-person booth still a large freight delivery?", a: "Yes, even the smallest single-occupant structures in this pool ship as large freight items requiring delivery scheduling and assembly." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-office-pods", title: "Best Portable Office Pods (2026)" },
  { href: "/guide/best-acoustic-office-booths", title: "Best Acoustic Office Booths (2026)" },
  { href: "/guide/best-soundproof-home-office-booths", title: "Best Soundproof Home Office Booths (2026)" },
];
