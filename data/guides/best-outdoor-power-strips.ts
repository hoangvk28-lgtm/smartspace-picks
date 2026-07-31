export const guideSlug = "best-outdoor-power-strips";
export const guideTitle = "3 Best Outdoor Power Strips in 2026";
export const metaTitle = "Best Outdoor Power Strips, Honestly Reviewed (2026)";
export const metaDescription =
  "3 outdoor power strips we evaluated, with the distinction competitors blur: genuine outdoor electrical safety requires GFCI protection, a separate, more critical feature than basic weather-resistant casing alone.";
export const mainKeyword = "outdoor power strip";
export const introParagraphs = [
  "Genuine outdoor electrical safety requires GFCI (Ground Fault Circuit Interrupter) protection, a separate, more critical safety feature than basic weather-resistant casing, an outdoor power strip's housing being water-resistant doesn't address the shock-hazard risk of moisture contacting live electrical contacts.",
  "IP (Ingress Protection) rating specifics matter far more than a generic weatherproof label, a product needs a specific IP rating like IP44 for splash resistance or IP65 for stronger water and dust resistance to make a verifiable outdoor-suitability claim.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41by4E3zbML._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "ipx6-outdoor-overall",
    rank: 1,
    badge: "Best Outdoor Power Strip Overall",
    name: "IPX6 Outdoor Power Strip Weatherproof, Waterproof Overload Protector with 6 Wide Outlet 3 USB Ports, 6FT Long Extension Cord, Wall Mountable for Outside Decorations and More UL Listed, Black",
    price: "$26.99",
    rating: "4.6 stars from 2,224 Amazon ratings",
    reviews: "2,224 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41by4E3zbML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09YYDSGLK?tag=deskfinds0d-20",
    description:
      "An explicit IPX6 rating, genuinely a verifiable water-resistance standard rather than a vague weatherproof claim, alongside UL listing and overload protection. 6 wide outlets and 3 USB ports, wall mountable.\n\nIPX6 addresses water resistance, verify a GFCI-protected source outlet separately per local electrical code requirements for outdoor circuits regardless of this strip's own rating.",
    specs: ["IPX6 rated, UL listed", "6 wide outlets, 3 USB ports", "6ft cord, wall mountable", "Overload protection"],
    pros: ["Explicit IPX6 rating, a genuinely verifiable standard", "UL listed for safety verification", "Wide outlet spacing for bulky adapters", "Wall mountable design"],
    cons: ["Doesn't include built-in GFCI, verify source outlet protection separately", "Higher price than basic outdoor strips", "6 outlets, not the highest count available"],
    bestFor: "Buyers who want a verifiably IP-rated, UL-listed outdoor power strip",
  },
  {
    id: "iwister-outdoor-alt",
    rank: 2,
    badge: "Best Compact Outdoor Pick",
    name: "Iwister Outdoor Power Strip Weatherproof, 3 AC Outlets, 5FT Extension Cord",
    price: "$17.99",
    rating: "4.6 stars from 255 Amazon ratings",
    reviews: "255 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51TaI4FfoCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G8GN8PMS?tag=deskfinds0d-20",
    description:
      "A genuinely more affordable, compact outdoor option with 3 AC outlets, appropriate for lighter outdoor decoration or small appliance needs rather than a full outdoor workstation. Weatherproof housing.\n\nVerify the specific IP rating on this listing rather than relying on the general 'weatherproof' term alone, and confirm your source outlet has GFCI protection per code.",
    specs: ["3 AC outlets, weatherproof", "5ft cord", "Compact design", "Budget-friendly"],
    pros: ["More affordable than the top pick", "Compact for lighter outdoor needs", "Weatherproof housing", "Reasonable rating base for a newer product"],
    cons: ["Fewer outlets than the top pick", "Smaller review base", "No explicit IP rating number disclosed"],
    bestFor: "Budget-conscious buyers with lighter outdoor power needs",
  },
  {
    id: "flemoon-outdoorbox-alt",
    rank: 3,
    badge: "Best Outdoor Electrical Box Pick",
    name: "Flemoon Large Outdoor Electrical Box Waterproof, for Outdoor Plug",
    price: "$23.78",
    rating: "4.6 stars from 5,517 Amazon ratings",
    reviews: "5,517 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/516J9Te+EVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09NLW5HMX?tag=deskfinds0d-20",
    description:
      "A genuine outdoor electrical box designed to house and waterproof an existing outdoor plug or connection point, a different but complementary product to a standalone outdoor power strip. Large, well-established review base.\n\nThis product protects an existing connection point rather than adding outlets itself, pair it with a standard outdoor-rated strip or use it to protect a single outdoor plug connection.",
    specs: ["Waterproof outdoor electrical box", "Large size for housing plug connections", "Large, well-established review base", "For outdoor plug protection"],
    pros: ["Large, well-established review base", "Genuinely protects an existing outdoor plug connection from weather", "Complements a standalone outdoor power strip", "Reasonable price"],
    cons: ["Doesn't add outlets itself, it's a protective enclosure", "Not a standalone power strip", "Verify it fits your specific existing plug and cord size"],
    bestFor: "Buyers who need to weatherproof an existing outdoor plug connection rather than add new outlets",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "GFCI protection established as the primary outdoor safety spec", description: "Prioritized GFCI protection presence, either built-in or an explicit source-outlet requirement, ahead of general weather-resistant casing claims, since GFCI addresses the actual shock-hazard risk of outdoor moisture exposure." },
  { title: "Specific IP rating disclosure verified per pick", description: "Checked for a specific, verifiable IP rating like IPX6 rather than accepting a generic 'weatherproof' label without a stated rating." },
  { title: "In-use vs. non-in-use weatherproof cover design distinguished", description: "Considered whether a weatherproof cover protects only when not in use versus staying sealed even while cords are plugged in, since only in-use-rated covers protect during actual outdoor operation." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "GFCI Protection Matters More Than Weather-Resistant Casing",
    note: "An outdoor power strip's housing being water-resistant doesn't address the shock-hazard risk of moisture contacting live electrical contacts. GFCI (Ground Fault Circuit Interrupter) protection, either built into the strip or required at the source outlet per electrical code, is the actual safety-critical feature for outdoor or damp-location use.",
  },
  {
    subheading: "Check the Specific IP Rating, Not Just 'Weatherproof'",
    note: "A product needs a specific IP rating, like IP44 for splash resistance or IP65 for stronger water and dust resistance, to make a verifiable outdoor-suitability claim. Many products marketed as weatherproof provide no actual IP rating at all, making the claim unverifiable, look for an explicit rating like the top pick's IPX6.",
  },
  {
    subheading: "Local Electrical Code Requires GFCI at the Source Outlet",
    note: "Even a well-designed outdoor power strip doesn't replace the need for a properly GFCI-protected source outlet per most electrical codes for outdoor circuits. Verify your outdoor outlet itself has GFCI protection regardless of which strip you choose.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "GFCI protection is the real outdoor safety spec, not weather-resistant casing", explanation: "A water-resistant housing doesn't address the shock-hazard risk of moisture contacting live electrical contacts, GFCI protection, either built-in or at the source outlet, is what actually matters for outdoor safety." },
  { criterion: "Look for a specific IP rating, not a generic 'weatherproof' label", explanation: "A product needs a verifiable IP rating like IPX6 or IP65 to substantiate an outdoor-suitability claim, many products marketed as weatherproof provide no actual rating, making the claim unverifiable." },
  { criterion: "In-use weatherproof covers protect during actual operation, non-in-use covers don't", explanation: "A weatherproof cover that must be left open to accommodate plugged-in cords provides essentially no protection during actual outdoor use, look for an 'in-use' rated cover design." },
  { criterion: "Local electrical code still requires GFCI at the source outlet", explanation: "Even a well-designed outdoor power strip doesn't replace the need for a properly GFCI-protected source outlet per most electrical codes, verify this separately regardless of the strip's own features." },
];

export const faq: FaqItem[] = [
  { q: "Is a weatherproof power strip automatically safe for outdoor use?", a: "Not entirely. Weather-resistant casing addresses water intrusion into the housing, but GFCI (Ground Fault Circuit Interrupter) protection is the separate, more critical feature that addresses the actual shock-hazard risk of moisture contacting live electrical contacts." },
  { q: "What does an IP rating like IPX6 actually mean?", a: "It's a verifiable Ingress Protection standard indicating a specific level of water and dust resistance, IPX6 indicates strong water-jet resistance. Many products marketed as simply 'weatherproof' provide no actual IP rating, making the claim unverifiable." },
  { q: "Do I still need a GFCI outlet if my power strip is weatherproof?", a: "Yes. Local electrical code typically requires GFCI protection at the source outlet for any outdoor electrical use regardless of the power strip's own features, a well-designed outdoor strip doesn't replace this requirement." },
  { q: "What's the difference between an outdoor power strip and an outdoor electrical box?", a: "An outdoor power strip adds new outlets with its own protection, an outdoor electrical box (like the Flemoon pick) weatherproofs an existing plug or connection point instead, these are complementary but different products." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-weatherproof-outdoor-power-strips", title: "Best Weatherproof Outdoor Power Strips (2026)" },
  { href: "/guide/best-wall-mounted-power-strips", title: "Best Wall-Mounted Power Strips (2026)" },
  { href: "/guide/best-heavy-duty-power-strips", title: "Best Heavy-Duty Power Strips (2026)" },
];
