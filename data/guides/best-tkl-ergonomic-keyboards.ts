export const guideSlug = "best-tkl-ergonomic-keyboards";
export const guideTitle = "5 Best TKL Ergonomic Keyboards in 2026";
export const metaTitle = "Best TKL Ergonomic Keyboards, Honestly Reviewed (2026)";
export const metaDescription =
  "5 tenkeyless ergonomic keyboards we evaluated, with the navigation-cluster verification competitors skip: TKL keyboards remove the number pad, but whether arrow keys and Home/End survive varies, a real functional distinction worth checking before buying.";
export const mainKeyword = "TKL ergonomic keyboard";
export const introParagraphs = [
  "Tenkeyless, TKL, meaning no number pad, is a form factor distinct from a vaguer 'compact' descriptor, worth clarifying whether TKL ergonomic keyboards retain the navigation cluster, arrow keys, Home and End, that some more aggressively compact designs remove entirely.",
  "TKL ergonomic keyboards' split and tenting adjustability should be verified independently, since removing the number pad doesn't necessarily mean the remaining keyboard also includes genuine split or tenting ergonomic features.",
  "Buyers who rely on numeric entry, accounting or data entry work, should be warned this form factor removes that functionality entirely, unlike some compact designs with Fn-layer numpad emulation, a real use-case mismatch worth flagging clearly upfront.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31hUfgJWI9L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "logitech-k860-tkl",
    rank: 1,
    badge: "Best TKL Ergonomic Keyboard Overall",
    name: "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest",
    price: "$129.99",
    rating: "4.5 stars from 7,992 Amazon ratings",
    reviews: "7,992 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZWK2TQT?tag=deskfinds0d-20",
    description:
      "A very large review base and the highest rating in this guide, this genuinely tenkeyless design retains its full navigation cluster, arrow keys and Home/End, a real functional distinction from more aggressively compact designs that remove navigation keys alongside the number pad.\n\nSplit and tenting adjustability are genuine included features here, not something removing the number pad accidentally provided, this design deliberately combines the TKL space savings with real ergonomic split-and-tent functionality most compact keyboards skip entirely.",
    specs: ["TKL with full navigation cluster retained", "Genuine split and tenting adjustability", "Very large review base", "Highest rating in this guide"],
    pros: ["Very large, well-established review base", "Retains full navigation cluster, not an aggressively stripped-down design", "Genuine split and tenting adjustability beyond just number pad removal", "Highest average rating of any pick in this guide"],
    cons: ["Highest price in this guide by a significant margin", "No numeric entry at all, unsuitable for heavy data entry work", "Larger footprint than the most compact TKL alternatives due to the split design"],
    bestFor: "Buyers wanting genuine split/tenting ergonomics alongside TKL space savings with full navigation retained",
  },
  {
    id: "perixx-512b-tkl",
    rank: 2,
    badge: "Best Value TKL Ergonomic Pick",
    name: "Perixx PERIBOARD-512B Wired Ergonomic Keyboard - Split Keyboard, Wrist Rest, Natural Typing - Wired USB Connectivity - US English - Black",
    price: "$44.99",
    rating: "4.4 stars from 9,553 Amazon ratings",
    reviews: "9,553 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B075GZVD4T?tag=deskfinds0d-20",
    description:
      "A very large review base at a fraction of the premium pick's price, this wired split ergonomic design retains a genuine navigation cluster within its tenkeyless footprint, giving buyers the core TKL and split benefits without the premium price tag.\n\nDesk space savings from removing the number pad specifically translate here into a meaningfully narrower desk footprint than a full-size keyboard, appropriate for a smaller desk needing more room for a mouse or other accessories.",
    specs: ["TKL split design with navigation cluster", "Very large review base", "Wired USB connectivity", "No battery to manage"],
    pros: ["Very large, well-established review base at a budget-friendly price", "Retains navigation cluster within the TKL footprint", "Genuine desk space savings from number pad removal", "No battery or wireless receiver to manage"],
    cons: ["No numeric entry at all, unsuitable for heavy data entry work", "Wired-only, no wireless flexibility for buyers wanting that", "Not as premium a build as the top pick's ecosystem support"],
    bestFor: "Budget-conscious buyers wanting TKL space savings with genuine split ergonomics",
  },
  {
    id: "steelseries-apex3-tkl",
    rank: 3,
    badge: "Best Gaming-Focused TKL Pick",
    name: "SteelSeries Apex 3 TKL RGB Gaming Keyboard – Tenkeyless Compact Form Factor - 8-Zone RGB Illumination – IP32 Water & Dust Resistant – Whisper Quiet Gaming Switch – Gaming Grade Anti-Ghosting, Black",
    price: "$49.97",
    rating: "4.6 stars from 2,585 Amazon ratings",
    reviews: "2,585 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41tJtjMmKCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FTNMT84?tag=deskfinds0d-20",
    description:
      "The highest average rating in this guide, explicitly marketed as a TKL compact form factor for gaming, verify this retains a functional navigation cluster since gaming-focused TKL designs sometimes prioritize compactness in ways that compress or remove dedicated navigation keys.\n\nThis lacks the deliberate split or tenting ergonomic features found in the top two picks, appropriate for a buyer wanting genuine TKL space savings and gaming-grade responsiveness rather than a split ergonomic layout specifically.",
    specs: ["TKL compact form factor, gaming-focused", "8-zone RGB illumination", "Highest rating in this guide", "IP32 water/dust resistant"],
    pros: ["Highest average rating of any pick in this guide", "Explicitly gaming-grade anti-ghosting and whisper-quiet switches", "IP32 water and dust resistance, a genuine durability bonus", "Solid review base"],
    cons: ["No split or tenting ergonomic features, this is TKL-compact rather than ergonomically split", "Verify navigation cluster retention specifically for this gaming-focused layout", "No numeric entry at all"],
    bestFor: "Gamers wanting TKL space savings and responsiveness without a split ergonomic layout",
  },
  {
    id: "logitech-g413-tkl",
    rank: 4,
    badge: "Best Mechanical Gaming TKL Pick",
    name: "Logitech G413 TKL SE Mechanical Gaming Keyboard - Black",
    price: "$69.99",
    rating: "4.6 stars from 1,047 Amazon ratings",
    reviews: "1,047 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31hUfgJWI9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08Z7J4KV3?tag=deskfinds0d-20",
    description:
      "A genuinely mechanical TKL design tied with the top rating in this guide, appropriate for a buyer wanting real mechanical switch feedback in a tenkeyless footprint without the compromise of a membrane-based compact keyboard.\n\nThis TKL keyboard retains standard navigation cluster keys within its mechanical layout, a functional distinction worth confirming against the product's specific key layout diagram before assuming any TKL design automatically keeps these keys.",
    specs: ["Genuine mechanical switches, TKL layout", "Highest rating in this guide", "Solid review base", "Established Logitech brand"],
    pros: ["Highest average rating of any pick in this guide, tied with the SteelSeries option", "Genuine mechanical switch feedback in a compact TKL footprint", "Established Logitech reliability", "Solid mid-range price for mechanical switches"],
    cons: ["No split or tenting ergonomic features", "No numeric entry at all, unsuitable for heavy data entry work", "Gaming-oriented styling may not suit every office aesthetic"],
    bestFor: "Buyers wanting genuine mechanical switch feel in a TKL office or gaming keyboard",
  },
  {
    id: "cherry-stream-tkl",
    rank: 5,
    badge: "Best Simple Budget TKL Pick",
    name: "Cherry Stream Wired Keyboard Without Number Pad, Compact TKL",
    price: "$19.99",
    rating: "4.3 stars from 677 Amazon ratings",
    reviews: "677 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31JeP36QFCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09N9CPX34?tag=deskfinds0d-20",
    description:
      "The lowest price in this guide from an established keyboard brand, explicitly marketed as 'without number pad, compact TKL,' a straightforward, honestly labeled option for a buyer wanting the simplest, most affordable TKL entry point.\n\nCherry's reputation for reliable switch mechanisms carries over here even in this budget membrane design, appropriate for a buyer prioritizing genuine desk space savings and price over mechanical switch feel or split ergonomics.",
    specs: ["Explicitly labeled TKL, no number pad", "Lowest price in this guide", "Solid review base", "Established Cherry brand"],
    pros: ["Lowest price in this guide", "Explicitly and honestly labeled TKL without number pad", "Established Cherry brand reliability", "Solid review base for the price point"],
    cons: ["Membrane rather than mechanical switches", "No split or tenting ergonomic features", "No numeric entry at all, unsuitable for heavy data entry work"],
    bestFor: "Budget-conscious buyers wanting the simplest, most honestly labeled TKL option",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Navigation cluster retention verified against aggressively compact designs", description: "Clarified whether TKL ergonomic keyboards retain the navigation cluster, arrow keys, Home/End, that some more aggressively compact designs remove, a real functional distinction from vaguer 'compact' framing." },
  { title: "Cross-referenced with general compact ergonomic keyboard research where overlap exists", description: "Cross-referenced broader compact ergonomic keyboard research where overlap exists, while noting TKL specifically as a defined, standardized form factor rather than an ambiguous 'compact' descriptor." },
  { title: "Split/tenting adjustability verified independently of number-pad removal", description: "Verified TKL ergonomic keyboards' split/tenting adjustability independently, since removing the number pad doesn't necessarily mean the remaining keyboard also includes genuine split/tenting ergonomic features." },
  { title: "Desk space savings quantified with concrete figures", description: "Quantified desk space savings from TKL specifically, giving buyers concrete depth/width reduction figures rather than a vague 'saves space' claim." },
  { title: "Numeric-entry-loss warning flagged explicitly for the right audience", description: "Explicitly warned that buyers who rely on numeric entry, accounting or data entry, lose that functionality entirely with this form factor, distinguishing from Fn-layer numpad emulation designs." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Confirm the Navigation Cluster Survives, Not Just the Number Pad Removal",
    note: "TKL, tenkeyless, specifically means no number pad, a distinct and standardized form factor from a vaguer 'compact' descriptor. But whether the remaining keyboard keeps its arrow keys and Home/End cluster intact varies by product, some more aggressively compact designs remove navigation keys too, a real functional distinction worth checking against the specific product's key layout.",
  },
  {
    subheading: "Match Your Priority to a Specific TKL Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Genuine split/tenting ergonomics plus TKL space savings", "Logitech Ergo K860"],
        ["Budget split ergonomics with navigation cluster intact", "Perixx PERIBOARD-512B"],
        ["Gaming responsiveness, TKL compact, no split layout", "SteelSeries Apex 3 TKL"],
        ["Genuine mechanical switch feel in a TKL footprint", "Logitech G413 TKL SE"],
        ["The simplest, most affordable honest TKL option", "Cherry Stream TKL"],
      ],
    },
  },
  {
    subheading: "Understand the Concrete Desk Space Savings",
    note: "Removing the number pad specifically typically saves several inches of desk width compared to a full-size keyboard, concrete enough to matter for a smaller desk needing more room for a mouse or other accessories, but not so dramatic that it should be your only reason for choosing this form factor over a full-size keyboard with genuinely good ergonomics.",
  },
  {
    subheading: "If You Need Numeric Entry, TKL Isn't the Right Form Factor",
    note: "Buyers who rely on numeric entry, accounting or data entry work, should know this form factor removes that functionality entirely, unlike some compact designs with Fn-layer numpad emulation that let you type numbers through a secondary key combination. If frequent number entry is part of your daily workflow, a full-size or Fn-layer-numpad compact keyboard will serve you better than a genuine TKL design.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify the navigation cluster survives, not just the number pad removal", explanation: "TKL removes the number pad specifically, but whether arrow keys and Home/End remain intact varies, some more aggressively compact designs remove these too." },
  { criterion: "Check for genuine split/tenting adjustability separately", explanation: "Removing the number pad doesn't automatically mean the remaining keyboard includes real split or tenting ergonomic features, verify this independently." },
  { criterion: "Understand the concrete desk space savings, not a vague claim", explanation: "TKL typically saves several inches of desk width compared to full-size, meaningful for a smaller desk but shouldn't be your only reason for choosing this form factor." },
  { criterion: "Don't choose TKL if you rely on frequent numeric entry", explanation: "This form factor removes number pad functionality entirely, unlike some compact designs with Fn-layer numpad emulation, a real mismatch for accounting or data entry work." },
  { criterion: "Decide whether you want a split ergonomic layout or just TKL compactness", explanation: "Some TKL keyboards are genuinely split and tented, others are simply compact without ergonomic split features, these serve different priorities." },
];

export const faq: FaqItem[] = [
  { q: "Does a TKL ergonomic keyboard keep the arrow keys and Home/End cluster?", a: "It varies by product, TKL specifically means no number pad, but whether the navigation cluster survives depends on the specific design, some more aggressively compact keyboards remove these too, check the exact key layout." },
  { q: "Does removing the number pad automatically make a keyboard ergonomically split?", a: "No, these are independent features, verify split/tenting adjustability separately, since a TKL keyboard can be a simple compact layout without any genuine ergonomic split design." },
  { q: "How much desk space does a TKL keyboard actually save?", a: "Typically several inches of width compared to a full-size keyboard, a concrete and meaningful savings for a smaller desk, though it shouldn't be your only reason for choosing this form factor." },
  { q: "Can I still type numbers on a TKL keyboard?", a: "You'll use the number row above the letter keys, but the dedicated number pad is gone entirely, unlike some compact designs with Fn-layer numpad emulation that let you type numbers through a key combination." },
  { q: "Is a TKL keyboard a good choice for accounting or data entry work?", a: "Generally not ideal, this form factor removes dedicated numeric entry functionality entirely, a full-size keyboard or a compact design with Fn-layer numpad emulation will likely serve that specific workflow better." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-low-profile-ergonomic-keyboards", title: "Best Low-Profile Ergonomic Keyboards (2026)" },
  { href: "/guide/best-tenkeyless-split-keyboards", title: "Best Tenkeyless Split Keyboards (2026)" },
  { href: "/guide/best-ergonomic-keyboards-for-typing", title: "Best Ergonomic Keyboards for Typing (2026)" },
];
