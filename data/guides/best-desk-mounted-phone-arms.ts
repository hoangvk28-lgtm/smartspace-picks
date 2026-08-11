export const guideSlug = "best-desk-mounted-phone-arms";
export const guideTitle = "5 Best Desk-Mounted Phone Arms in 2026";
export const metaTitle = "Best Desk-Mounted Phone Arms (2026)";
export const metaDescription =
  "5 clamp-mounted phone arms we researched for desk edge compatibility and hold stability, the desk-specific subset of our general phone arm guide.";
export const mainKeyword = "desk-mounted phone arms";
export const introParagraphs = [
  "\"Desk-mounted\" specifically means a clamp or screw-base arm that attaches to a desk edge, as opposed to a floor stand or wall bracket. This overlaps substantially with our general best desk phone arms guide, since nearly every arm in that category is already desk-clamped by default.",
  "This narrower guide exists for buyers specifically comparing clamp mounting hardware. The picks below are the same clamp-based arms, evaluated here with more focus on desk-edge compatibility across glass, wood, and standing-desk surfaces.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07p2vk93p-dmpa",
    rank: 1,
    badge: "Best Overall Pick",
    name: "SAIJI Gooseneck Bed Phone Holder, Flexible Long Arm Phone Mount",
    price: "$12.99",
    rating: "4.3",
    reviews: "32,606",
    imageUrl: "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07P2VK93P?tag=deskfinds0d-20",
    description:
      "This gooseneck arm clamps to desk edges via an anti-slip silicone base pad that the listing specifies will not mark furniture, a genuine desk-mounting concern this narrower guide focuses on. The 33.46 inch aluminum arm reaches well above a standard desk surface for hands-free viewing.\n\nAt this price and review volume it is the most proven desk-clamp option in this cluster, though the clip's 4.0-6.3 inch phone width tolerance should be checked against your phone plus case combined.",
    specs: ["33.46in flexible aluminum arm", "Anti-slip silicone desk clamp", "Fits phones 4.0-6.3in wide", "360° rotation"],
    pros: ["Widely proven desk clamp design", "Non-marking silicone base pad", "Affordable", "Long reach"],
    cons: ["Narrower clip width than some alternatives", "No tension knobs for fine-tuning", "Can require two hands to reposition"],
    bestFor: "Buyers who want a proven, affordable desk-clamped arm without extra features.",
  },
  {
    id: "b079qy6rfq-dmpa",
    rank: 2,
    badge: "Best for Thick Desk Edges",
    name: "MAGIPEA Gooseneck Phone Holder, Flexible Overhead Mount for Desk",
    price: "$14.99",
    rating: "4.4",
    reviews: "23,326",
    imageUrl: "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B079QY6RFQ?tag=deskfinds0d-20",
    description:
      "MAGIPEA's clamp opens to 3 inches, wider than most competitors in this cluster, making it a better fit for thick standing-desk tops or desks with a raised edge lip. EVA pads at the contact points protect the desk finish.\n\nThe arm itself uses a stiff aluminum core rather than a spring, so repositioning takes two hands, but the tradeoff is minimal sag over time once set.",
    specs: ["3in wide clamp opening", "Stiff-core aluminum gooseneck", "EVA desk-protective pads", "Fits 3.5-7in devices"],
    pros: ["Widest clamp opening in this cluster", "Minimal long-term sagging", "EVA pads protect desk finish", "Fits larger phones"],
    cons: ["Two-handed repositioning", "Similar price to the SAIJI pick with less proven track record", "Bulkier clamp footprint"],
    bestFor: "Buyers with thick desk edges or standing desks who need a wider clamp opening.",
  },
  {
    id: "b0ckys81t4-dmpa",
    rank: 3,
    badge: "Best for Multi-Surface Use",
    name: "LISEN Cell Phone Holder for Bed Desk, Overhead Phone Mount",
    price: "$19.68",
    rating: "4.4",
    reviews: "2,655",
    imageUrl: "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKYS81T4?tag=deskfinds0d-20",
    description:
      "This LISEN arm's bi-directional clamp base is designed to work equally well on a desk, bed frame, or nightstand, useful if you move the arm between locations rather than leaving it permanently desk-mounted. Tension knobs at each joint let you dial in exact clip firmness for your phone and case combination.",
    specs: ["Bi-directional clamp base", "Tension-adjustable joints", "Steel body construction", "Foldable for storage"],
    pros: ["Works across multiple surface types", "Adjustable tension per joint", "Reinforced steel build", "Folds for portability"],
    cons: ["Higher price than dedicated desk-only arms", "Bulkier than a simple clamp", "More assembly to dial in tension"],
    bestFor: "Buyers who want one arm that moves reliably between a desk and other surfaces.",
  },
  {
    id: "b0d5yj42cx-dmpa",
    rank: 4,
    badge: "Best Locking Clamp",
    name: "SMALLRIG 22\" Magic Arm Clamp, Overhead Phone Mount Holder Stand",
    price: "$33.90",
    rating: "4.4",
    reviews: "1,732",
    imageUrl: "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5YJ42CX?tag=deskfinds0d-20",
    description:
      "The crab clamp on this magic arm opens to 63.5mm and locks via a friction knob rather than spring tension alone, giving it the most secure desk-edge grip in this cluster. Twelve silicone contact points protect both the clamp and the desk surface from scratches.",
    specs: ["Crab clamp opens to 63.5mm", "Friction-knob locking", "600g load capacity", "12 anti-slip/scratch points"],
    pros: ["Most secure locking clamp mechanism", "Protects desk surface at 12 contact points", "Multi-device compatible", "Rated load capacity disclosed"],
    cons: ["Most expensive pick in this cluster", "Bulkier than a simple gooseneck clamp", "Overkill for basic phone viewing"],
    bestFor: "Buyers who want the most secure, scratch-protective clamp regardless of price.",
  },
  {
    id: "b0dn1c9rh2-dmpa",
    rank: 5,
    badge: "Best Value Magic Arm",
    name: "NEEWER 22\" Magic Arm with Desk C Clamp, Overhead Camera Mount",
    price: "$33.99",
    rating: "4.5",
    reviews: "988",
    imageUrl: "https://m.media-amazon.com/images/I/31jBgnNJK5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DN1C9RH2?tag=deskfinds0d-20",
    description:
      "NEEWER's C clamp uses anti-twist mounting pins at each interface, keeping the connection secure specifically at the desk-edge attachment point even under repeated adjustment. It carries the highest rating of this cluster's magic arms, at a nearly identical price to the SMALLRIG pick.",
    specs: ["C clamp with anti-twist pins", "1/4in and 3/8in threads", "Non-slip clamp pads", "Phone holder fits 2.2-3.2in"],
    pros: ["Highest-rated pick in this cluster", "Anti-twist desk clamp connection", "Multi-device threading", "Non-slip desk pads"],
    cons: ["Same premium price as SMALLRIG", "Phone clip sold as separate attachment piece", "Large footprint versus simple goosenecks"],
    bestFor: "Buyers comparing magic arms who want the highest-rated desk clamp option.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Desk edge clamp range", description: "We compared each clamp's opening range against common desk thicknesses, including thicker standing-desk tops." },
  { title: "Desk surface protection", description: "We checked for silicone, EVA, or rubber padding at clamp contact points to reduce marking risk on wood, glass, or laminate desks." },
  { title: "Hold security under adjustment", description: "We compared spring-based versus friction-locked clamp mechanisms for how securely they hold the desk edge over repeated repositioning." },
  { title: "Overlap with our general phone arm guide", description: "We confirmed which picks are genuinely desk-clamp-specific versus multi-surface arms, to keep this guide's focus distinct." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Your Desk Type",
    table: {
      headers: ["Desk situation", "Recommended pick"],
      rows: [
        ["Standard desk, proven budget clamp", "SAIJI Gooseneck Bed Phone Holder"],
        ["Thick standing-desk top or raised edge", "MAGIPEA Gooseneck Phone Holder"],
        ["Moves between desk and other surfaces", "LISEN Cell Phone Holder"],
        ["Most secure locking desk clamp, budget flexible", "SMALLRIG or NEEWER Magic Arm"],
      ],
    },
  },
  {
    subheading: "Is This Guide Different From Our General Phone Arm Guide?",
    note: "Mostly overlapping. Nearly every desk phone arm is desk-clamped by default, so if you've already read our best desk phone arms guide, the picks here will look familiar. Use this guide specifically if desk-edge clamp compatibility is your main concern.",
  },
  {
    subheading: "Spring Clamp vs. Friction-Locked Clamp",
    cards: [
      { label: "Spring clamp", text: "Simple, affordable, adequate for lighter desks and occasional repositioning. Found on the SAIJI and MAGIPEA picks." },
      { label: "Friction-locked clamp", text: "More secure grip, better for frequent adjustment or heavier attached devices. Found on the SMALLRIG and NEEWER magic arms." },
    ],
  },
  {
    subheading: "Measure Before You Buy",
    note: "Measure your desk edge thickness at the exact spot you plan to clamp. A clamp rated for up to 3 inches may not close securely on an edge under 1 inch without extra padding.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Measure your desk edge thickness first", explanation: "Clamp opening ranges vary from about 1.5 to 3 inches across this cluster. A clamp too large for your desk edge will grip loosely and wobble under phone weight." },
  { criterion: "Check for desk-protective padding", explanation: "Silicone or EVA pads at the clamp jaws prevent marking on wood, laminate, or glass desks. All five picks here include some form of protective padding." },
  { criterion: "Spring clamps are fine for light, occasional use", explanation: "If you rarely reposition the arm, a simple spring clamp like the SAIJI or MAGIPEA pick is sufficient and more affordable than a friction-locked magic arm." },
  { criterion: "Friction-locked clamps suit frequent repositioning", explanation: "If you adjust the arm daily or mount heavier accessories, the knob-locked crab clamps on the SMALLRIG and NEEWER picks hold more securely over repeated use." },
  { criterion: "Don't assume desk-mounted means exclusively desk-only", explanation: "Several picks here, like the LISEN arm, also clamp to bed frames and nightstands. Check whether you want a dedicated desk arm or one that moves between locations." },
];

export const faq: FaqItem[] = [
  { q: "Is this guide different from your general desk phone arm guide?", a: "They overlap substantially, since most desk phone arms are clamp-mounted by default. This guide focuses more narrowly on desk-edge clamp compatibility across desk types." },
  { q: "Will the clamp fit a thick standing-desk top?", a: "The MAGIPEA pick has the widest clamp opening in this cluster at 3 inches, making it the best fit for thicker standing-desk edges." },
  { q: "Can I use these arms on a glass desk?", a: "Yes, as long as the clamp includes protective padding, which all five picks here do. Avoid over-tightening a metal clamp directly against glass without the padding in place." },
  { q: "Do I need a friction-locked clamp instead of a spring clamp?", a: "Only if you reposition the arm frequently or mount a heavier device. For occasional phone viewing, a spring clamp like the SAIJI or MAGIPEA pick holds fine." },
  { q: "Which pick is best if I want to move the arm between my desk and bed?", a: "The LISEN pick's bi-directional clamp base is specifically designed for multi-surface use, including desks, bed frames, and nightstands." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desk-phone-arms", title: "Best Desk Phone Arms (2026)" },
  { href: "/guide/best-clamp-on-phone-arms-for-desks", title: "Best Clamp-On Phone Arms for Desks (2026)" },
  { href: "/guide/best-flexible-gooseneck-phone-arms", title: "Best Flexible Gooseneck Phone Arms (2026)" },
];
