export const guideSlug = "best-iphone-desk-arms";
export const guideTitle = "5 Best iPhone Desk Arms in 2026";
export const metaTitle = "Best iPhone Desk Arms (2026)";
export const metaDescription =
  "5 desk arms we checked for real iPhone width compatibility across base, Plus, and Pro Max models, plus Lightning vs USB-C charging notes.";
export const mainKeyword = "iPhone desk arms";
export const introParagraphs = [
  "None of the arms in this comparison are marketed as iPhone-exclusive; they are general phone arms whose clip width happens to accommodate the current iPhone lineup. Since iPhone models vary meaningfully in size, from the compact base model to the wider Pro Max, clip width compatibility is the main thing worth checking here.",
  "We also note charging cable compatibility, since Apple's Lightning to USB-C transition means the mounted position and cable routing can differ depending on which iPhone generation you own.",
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
    id: "b07p2vk93p-ida",
    rank: 1,
    badge: "Best Overall Pick",
    name: "SAIJI Gooseneck Bed Phone Holder, Flexible Long Arm Phone Mount",
    price: "$12.99",
    rating: "4.3",
    reviews: "32,606",
    imageUrl: "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07P2VK93P?tag=deskfinds0d-20",
    description:
      "This clip's 4.0-6.3 inch width range comfortably fits the base iPhone through the Pro Max without a case, though buyers with a thick case on the wider Pro Max models should double check the actual cased width before assuming a snug fit. It is not MagSafe compatible, this is a physical spring clip.\n\nAt this price and review volume, it remains the most proven basic option for mounting any current iPhone at a desk.",
    specs: ["Clip fits 4.0-6.3in, covers current iPhone lineup bare", "Standard spring clip, not MagSafe", "33.46in reach", "Anti-slip base"],
    pros: ["Covers the full current iPhone width range bare", "Affordable", "Long reach", "Proven track record"],
    cons: ["Not MagSafe, physical clip only", "Case-inclusive width may be tight on Pro Max", "No charging pass-through"],
    bestFor: "Buyers who want an affordable physical clip that fits any current iPhone model bare.",
  },
  {
    id: "b079qy6rfq-ida",
    rank: 2,
    badge: "Best for Cases",
    name: "MAGIPEA Gooseneck Phone Holder, Compatible with iPhone 17 16 15 Pro Max",
    price: "$14.99",
    rating: "4.4",
    reviews: "23,326",
    imageUrl: "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B079QY6RFQ?tag=deskfinds0d-20",
    description:
      "MAGIPEA explicitly lists compatibility with the iPhone 17, 16, and 15 Pro Max lines, and its 3.5-7 inch clip range is generous enough to hold a Pro Max with most protective cases attached, unlike narrower clips in this comparison. This is again a physical clip, not a MagSafe magnetic mount.",
    specs: ["Explicitly lists iPhone 17/16/15 Pro Max fit", "3.5-7in clip range with TPE pads", "Not MagSafe", "360° rotation"],
    pros: ["Widest case-inclusive fit for Pro Max models", "Explicit current-generation iPhone compatibility listed", "Soft pads protect the case", "Stable stiff-core arm"],
    cons: ["Not MagSafe magnetic mounting", "Two-handed repositioning", "Slightly pricier than SAIJI"],
    bestFor: "Pro Max owners with a thick case who need the widest clip range.",
  },
  {
    id: "b0ckys81t4-ida",
    rank: 3,
    badge: "Best Adjustable Fit",
    name: "LISEN Cell Phone Holder for Bed Desk, Overhead Phone Mount",
    price: "$19.68",
    rating: "4.4",
    reviews: "2,655",
    imageUrl: "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKYS81T4?tag=deskfinds0d-20",
    description:
      "The one-touch spring clip on this arm matches its bite force to the phone size automatically, addressing the too-tight grip risk on a Pro Max with a bulky MagSafe-compatible case. Tension knobs let you fine-tune further for your specific iPhone and case combination.",
    specs: ["Self-matching bite-force clip", "Silicone-padded grip", "Adjustable tension per joint", "Not MagSafe"],
    pros: ["Adjustable grip suited to any iPhone size", "Case-friendly padding", "Reinforced steel build", "One-touch release"],
    cons: ["No MagSafe magnetic option", "Higher price than basic clips", "Bulkier design"],
    bestFor: "Buyers who want a fine-tunable physical grip for a specific iPhone and case.",
  },
  {
    id: "b0d5yj42cx-ida",
    rank: 4,
    badge: "Best for Video Calls",
    name: "SMALLRIG 22\" Magic Arm Clamp, Overhead Phone Mount Holder Stand",
    price: "$33.90",
    rating: "4.4",
    reviews: "1,732",
    imageUrl: "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5YJ42CX?tag=deskfinds0d-20",
    description:
      "This magic arm's phone clamp fits 5.5-8.5cm wide, enough for a cased iPhone Pro Max, and locks via friction for a position that won't drift during a video call, a real consideration for Face ID unlock and camera framing that benefits from a stable, repeatable angle.\n\nIt is not a MagSafe mount, and the phone clamp is a separate attachment rather than integrated into the arm.",
    specs: ["Phone clamp fits 5.5-8.5cm width", "Friction-locked, no drift", "600g load capacity", "Not MagSafe"],
    pros: ["Stable, repeatable position for Face ID and video calls", "Fits cased Pro Max models", "Multi-device compatible arm", "Rated load capacity"],
    cons: ["Most expensive pick here", "No MagSafe magnetic mounting", "Phone clip is a separate piece"],
    bestFor: "Buyers who want a stable, non-drifting position for video calls or Face ID framing.",
  },
  {
    id: "b0b9n41mcs-ida",
    rank: 5,
    badge: "Best Long-Reach Pick",
    name: "Lamicall Nylon Braided Gooseneck Phone Holder for Bed",
    price: "$24.99",
    rating: "4.3",
    reviews: "11,813",
    imageUrl: "https://m.media-amazon.com/images/I/31HD++Czq5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9N41MCS?tag=deskfinds0d-20",
    description:
      "At 38 inches this is the longest arm in this comparison, useful for positioning an iPhone farther from a cramped desk clamp point. The clip itself is a standard spring design without MagSafe, sized for typical iPhone widths including cased models.",
    specs: ["38in nylon-braided gooseneck", "Standard spring clip, not MagSafe", "Abrasion-resistant sleeve", "Clamp base mount"],
    pros: ["Longest reach in this comparison", "Braided sleeve resists wear", "Fits cased iPhones", "Reputable brand"],
    cons: ["No MagSafe option", "Longer arm can sag more under sustained weight", "Standard clip, no tension adjustment"],
    bestFor: "Buyers who need to position an iPhone far from a limited desk clamp point.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "iPhone width compatibility", description: "We checked each clip's stated range against current iPhone base, Plus, and Pro Max dimensions, both bare and with a typical case." },
  { title: "MagSafe honesty", description: "We confirmed none of these picks are genuine MagSafe magnetic mounts, and disclosed this clearly rather than implying magnetic compatibility." },
  { title: "Charging cable routing", description: "We considered whether the mounted angle allows a Lightning or USB-C cable to route comfortably without straining the port." },
  { title: "Face ID and camera framing", description: "We evaluated whether the mounted angle and position stability support comfortable Face ID unlock and video call framing." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by iPhone Model and Case",
    table: {
      headers: ["Your situation", "Recommended pick"],
      rows: [
        ["Base or standard iPhone, no case or thin case", "SAIJI Gooseneck Bed Phone Holder"],
        ["Pro Max with a thick case", "MAGIPEA Gooseneck Phone Holder"],
        ["Want fine-tunable clip tension", "LISEN Cell Phone Holder"],
        ["Stable position for video calls", "SMALLRIG 22\" Magic Arm"],
        ["Need extra reach from the clamp point", "Lamicall Nylon Braided Gooseneck"],
      ],
    },
  },
  {
    subheading: "None of These Are MagSafe Mounts",
    note: "Every pick in this guide uses a physical spring or friction clip, not a magnetic MagSafe mount. If you specifically want magnetic mounting, look for a product explicitly labeled MagSafe-compatible rather than a general phone clip arm.",
  },
  {
    subheading: "Lightning vs. USB-C Charging While Mounted",
    cards: [
      { label: "USB-C iPhones (15 and later)", text: "Most third-party USB-C cables route easily regardless of mount angle, since the connector is more universally compatible with common charging cables." },
      { label: "Lightning iPhones (14 and earlier)", text: "Check that the mounted angle doesn't force an awkward cable bend at the Lightning port, which can strain the connector over time." },
    ],
  },
  {
    subheading: "Case Compatibility Is the Real Fit Variable",
    note: "iPhone body dimensions alone rarely cause fit problems; a thick protective case is what typically pushes a phone outside a clip's rated width. Measure your cased phone's width before ordering.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify clip width against your specific iPhone model with case", explanation: "The current iPhone lineup ranges from a compact base model to a wide Pro Max. Measure your exact model plus case before checking a clip's stated range." },
  { criterion: "Don't assume MagSafe compatibility", explanation: "None of the arms in this guide are genuine magnetic MagSafe mounts. If magnetic attachment matters to you, look specifically for that labeling on a different product." },
  { criterion: "Check charging cable routing at your mounted angle", explanation: "A steep or awkward mounted angle can strain a Lightning or USB-C cable over repeated use. Test the angle you plan to use before leaving the phone charging unattended." },
  { criterion: "Prioritize stable, non-drifting arms for video calls", explanation: "Friction-locked arms like the SMALLRIG magic arm hold a Face ID-friendly angle more reliably than a simple spring gooseneck during active calls." },
  { criterion: "Measure clamp-to-position distance for your desk", explanation: "Reach ranges from about 22 to 38 inches across this comparison. Confirm the arm reaches your intended eye-level position from your available clamp point." },
];

export const faq: FaqItem[] = [
  { q: "Are any of these arms MagSafe compatible?", a: "No. All five picks use a physical spring or friction clip rather than magnetic MagSafe mounting. If you want magnetic attachment, look for a product explicitly labeled MagSafe." },
  { q: "Will these fit an iPhone Pro Max with a case?", a: "The MAGIPEA pick's 3.5-7 inch clip range is the most generous for a cased Pro Max in this comparison. Check your exact cased width against each clip's stated range before buying." },
  { q: "Can I charge my iPhone while it's mounted?", a: "Yes, all these arms leave the charging port accessible. Check that your mounted angle doesn't create an awkward cable bend at the Lightning or USB-C port." },
  { q: "Which pick is best for video calls?", a: "The SMALLRIG magic arm's friction-locked clamp holds the most stable, non-drifting position, useful for consistent Face ID unlock and camera framing during calls." },
  { q: "Do I need a different arm for an older Lightning iPhone versus a newer USB-C model?", a: "No, the clip mechanism itself is agnostic to charging port type. Just verify your cable routes comfortably at your chosen mount angle regardless of connector type." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desk-phone-arms", title: "Best Desk Phone Arms (2026)" },
  { href: "/guide/best-phone-holder-arms-for-desks", title: "Best Phone Holder Arms for Desks (2026)" },
  { href: "/guide/best-overhead-phone-arms-for-desks", title: "Best Overhead Phone Arms for Desks (2026)" },
];
