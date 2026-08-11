export const guideSlug = "best-clamp-on-phone-arms-for-desks";
export const guideTitle = "5 Best Clamp-On Phone Arms for Desks in 2026";
export const metaTitle = "Best Clamp-On Phone Arms for Desks (2026)";
export const metaDescription =
  "5 clamp-on phone arms researched for desk edge compatibility, clamp torque, and surface marking risk, no drilling required for any pick.";
export const mainKeyword = "clamp-on phone arms for desks";
export const introParagraphs = [
  "Nearly every arm across our phone arm guides already uses a clamp mount, so this guide's real value is a closer look at the clamp mechanism itself, not a distinct product category. We focus specifically on desk edge thickness compatibility and the cosmetic risk of clamp torque marking softer desk surfaces.",
  "All five picks below require no drilling and attach in seconds, differing mainly in clamp opening range, contact-point padding, and how firmly they lock once tightened.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0ckys81t4-copa",
    rank: 1,
    badge: "Best Overall Pick",
    name: "LISEN Cell Phone Holder for Bed Desk, Bi-Directional Clamp Base",
    price: "$19.68",
    rating: "4.4",
    reviews: "2,655",
    imageUrl: "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKYS81T4?tag=deskfinds0d-20",
    description:
      "This clamp base is genuinely bi-directional, adjusting to fit desks, bedside tables, and other edge types without drilling. Cable storage is built into the base, keeping a charging cable tidy rather than dangling loose near the clamp point.",
    specs: ["Bi-directional adjustable clamp base", "Cable storage built in", "Steel body construction", "No drilling required"],
    pros: ["Adapts to multiple edge types", "Built-in cable management", "Reinforced steel clamp", "Foldable for storage"],
    cons: ["Higher price than basic clamps", "Bulkier clamp footprint", "More setup than a simple squeeze clamp"],
    bestFor: "Buyers who want a versatile clamp that adapts to different desk and furniture edges.",
  },
  {
    id: "b07p2vk93p-copa",
    rank: 2,
    badge: "Best Budget Pick",
    name: "SAIJI Gooseneck Bed Phone Holder, Anti-Slip Silicone Clamp Base",
    price: "$12.99",
    rating: "4.3",
    reviews: "32,606",
    imageUrl: "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07P2VK93P?tag=deskfinds0d-20",
    description:
      "The anti-slip silicone base pad on this clamp is explicitly designed not to damage furniture, addressing the marking-risk concern this guide highlights. It remains the most proven clamp design by review volume across our phone arm research.",
    specs: ["Anti-slip silicone clamp base", "No-damage design per listing", "33.46in reach", "Standard squeeze clamp"],
    pros: ["Widely proven, non-marking clamp base", "Affordable", "Long reach", "Simple to attach"],
    cons: ["Standard clamp, no locking knob for extra security", "Narrower clip width than some alternatives", "No cable management"],
    bestFor: "Budget buyers who want a reliable, non-marking clamp without extra features.",
  },
  {
    id: "b079qy6rfq-copa",
    rank: 3,
    badge: "Best Wide Clamp Opening",
    name: "MAGIPEA Gooseneck Phone Holder, 3-Inch Wide Base Clamp",
    price: "$14.99",
    rating: "4.4",
    reviews: "23,326",
    imageUrl: "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B079QY6RFQ?tag=deskfinds0d-20",
    description:
      "This clamp opens up to 3 inches, the widest opening in this comparison, securely fitting thick bed frames, headboards, and raised standing-desk edges other clamps in this cluster can't reach around. Anti-slip EVA pads protect the surface without scratching.",
    specs: ["3in wide clamp opening", "EVA anti-slip, anti-scratch pads", "No drilling required", "Fits 3.5-7in devices"],
    pros: ["Widest clamp opening in this comparison", "EVA pads protect desk finish", "Secures well on thick edges", "Good for standing desks"],
    cons: ["Bulkier clamp footprint than slim designs", "Two-handed arm repositioning", "Similar price to SAIJI"],
    bestFor: "Buyers with thick desk edges, standing desks, or raised lips other clamps can't fit around.",
  },
  {
    id: "b0d5yj42cx-copa",
    rank: 4,
    badge: "Best Locking Clamp",
    name: "SMALLRIG Crab Clamp with Friction-Knob Locking, 22\" Magic Arm",
    price: "$33.90",
    rating: "4.4",
    reviews: "1,732",
    imageUrl: "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5YJ42CX?tag=deskfinds0d-20",
    description:
      "This crab clamp opens to 63.5mm and uses a friction knob to lock down rather than spring tension alone, the firmest hold of any clamp in this comparison. Twelve silicone contact points across the clamp and arm prevent both slipping and desk-surface marking under that added torque.",
    specs: ["Crab clamp opens to 63.5mm", "Friction-knob locking", "12 anti-slip/scratch silicone points", "Also fits round tubes/tripods"],
    pros: ["Firmest, most secure clamp lock in this comparison", "Extensive scratch/slip protection", "Versatile, fits round surfaces too", "Rated 600g load capacity"],
    cons: ["Most expensive pick here", "Bulkiest clamp footprint", "Overkill for basic phone viewing"],
    bestFor: "Buyers who want the firmest possible clamp lock and don't mind the premium price.",
  },
  {
    id: "b0dn1c9rh2-copa",
    rank: 5,
    badge: "Best Anti-Twist Clamp",
    name: "NEEWER Desk C Clamp with Anti-Twist Mounting Pins",
    price: "$33.99",
    rating: "4.5",
    reviews: "988",
    imageUrl: "https://m.media-amazon.com/images/I/31jBgnNJK5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DN1C9RH2?tag=deskfinds0d-20",
    description:
      "This C clamp uses anti-twist pins at each mounting interface to keep the connection from rotating unexpectedly, a genuine stability feature over a simple friction-only clamp. It carries the highest rating of any clamp-on pick in this comparison.",
    specs: ["C clamp with anti-twist mounting pins", "Non-slip clamp pads", "No drilling required", "1/4in and 3/8in threading"],
    pros: ["Highest-rated pick in this comparison", "Anti-twist connection resists rotation", "Non-slip desk-protective pads", "Multi-device threading"],
    cons: ["Same premium price as SMALLRIG", "Bulky clamp footprint", "Phone holder sold as separate attachment"],
    bestFor: "Buyers who want the highest-rated, most twist-resistant clamp regardless of price.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Desk edge thickness compatibility", description: "We compared each clamp's opening range against common desk, bed frame, and standing-desk edge thicknesses." },
  { title: "Surface marking and scratch risk", description: "We checked for silicone or EVA padding at the clamp contact points, since firm clamp torque can otherwise mark softer desk finishes." },
  { title: "Clamp locking mechanism", description: "We compared simple spring-squeeze clamps against friction-knob-locked clamps for hold security under sustained or repeated use." },
  { title: "No-drilling verification", description: "We confirmed every pick attaches without drilling or permanent modification, consistent with genuine clamp-on design." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Your Desk Edge",
    table: {
      headers: ["Desk edge type", "Recommended pick"],
      rows: [
        ["Standard desk or bedside table", "LISEN Cell Phone Holder"],
        ["Budget standard desk clamp", "SAIJI Gooseneck Bed Phone Holder"],
        ["Thick standing-desk top or raised lip", "MAGIPEA Gooseneck Phone Holder"],
        ["Want the firmest possible lock", "SMALLRIG Crab Clamp Magic Arm"],
        ["Want twist-resistant, highest-rated clamp", "NEEWER Desk C Clamp"],
      ],
    },
  },
  {
    subheading: "Spring Clamp vs. Friction-Knob Clamp",
    cards: [
      { label: "Spring clamp", text: "Squeeze-open, release-to-clamp mechanism. Fast to attach, adequate for light desks, found on the SAIJI and MAGIPEA picks." },
      { label: "Friction-knob clamp", text: "Manually tightened for a firmer, more secure hold. Better for heavier accessories or frequent readjustment, found on the SMALLRIG and NEEWER picks." },
    ],
  },
  {
    subheading: "This Guide Overlaps With Our Other Phone Arm Guides",
    note: "Since nearly every desk phone arm uses a clamp base by default, this guide isn't a distinct product category so much as a focused look at the clamp mechanism itself. If you've read our other phone arm guides, these picks will look familiar.",
  },
  {
    subheading: "Protect Your Desk Finish",
    note: "Always check for silicone or EVA padding at the clamp jaws before tightening firmly onto a glossy or painted desk surface. Every pick in this guide includes some form of protective padding, but pad thickness and material vary.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Measure your desk edge thickness before buying", explanation: "Clamp opening ranges span roughly 1.5 to 3 inches across this comparison. A clamp too large for your desk edge grips loosely and wobbles under phone weight." },
  { criterion: "Check for protective padding at the clamp jaws", explanation: "Silicone or EVA padding prevents marking on wood, laminate, or painted desk finishes. Confirm this is present, especially for a glossy or delicate desk surface." },
  { criterion: "Spring clamps suit quick, light-duty attachment", explanation: "If you rarely move the arm, a simple squeeze clamp like the SAIJI or MAGIPEA pick is fast to attach and sufficiently secure." },
  { criterion: "Friction-knob clamps suit heavier or frequently adjusted setups", explanation: "For heavier accessories or daily repositioning, a manually tightened friction-knob clamp like the SMALLRIG or NEEWER pick holds more reliably over time." },
  { criterion: "Confirm no drilling is genuinely required", explanation: "All five picks here are true clamp-on designs. Double check any similar-looking product's listing to confirm it isn't actually a screw-mounted or adhesive base marketed loosely as 'clamp-on.'" },
];

export const faq: FaqItem[] = [
  { q: "Will a clamp-on phone arm damage my desk?", a: "Not if it includes protective padding at the clamp jaws, which all five picks in this guide do. Very high clamp torque on soft or lacquered wood can still leave faint marks over long-term use, so avoid over-tightening." },
  { q: "What's the difference between a spring clamp and a friction-knob clamp?", a: "A spring clamp squeezes open and clamps shut automatically when released, fast but less firm. A friction-knob clamp is manually tightened for a more secure, adjustable hold." },
  { q: "How do I know my desk edge will fit a given clamp?", a: "Measure your desk edge thickness at the exact spot you plan to clamp, then compare it against the product's stated clamp opening range before ordering." },
  { q: "Do these clamps work on glass desks?", a: "Yes, as long as the clamp has protective padding, which all five picks here include. Avoid clamping directly onto glass without that padding in place to prevent scratching or chipping." },
  { q: "Is this guide different from your other phone arm guides?", a: "There's substantial overlap, since nearly every phone arm we've researched uses a clamp base. This guide specifically focuses on comparing the clamp mechanisms themselves." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desk-phone-arms", title: "Best Desk Phone Arms (2026)" },
  { href: "/guide/best-desk-mounted-phone-arms", title: "Best Desk-Mounted Phone Arms (2026)" },
  { href: "/guide/best-flexible-gooseneck-phone-arms", title: "Best Flexible Gooseneck Phone Arms (2026)" },
];
