export const guideSlug = "best-small-office-pods";
export const guideTitle = "2 Best Small Office Pods in 2026";
export const metaTitle = "Best Small Office Pods (2026)";
export const metaDescription =
  "2 small-footprint office pods we evaluated with actual dimensions where disclosed, cross-referenced against our mini and one-person pod guides.";
export const mainKeyword = "small office pods";
export const introParagraphs = [
  "This guide overlaps heavily with our mini portable offices and one-person office pods guides, since the same limited pool of compact, solo-oriented products keeps surfacing as the smallest verified options in this niche. Rather than duplicate that content, we cross-reference both and focus here on quantifying \"small\" with actual stated dimensions.",
  "One of these two picks discloses an exact exterior footprint (W55in D48in H92in), the other does not state dimensions in its title, worth asking the seller directly for exact measurements before assuming either fits a specific room.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41DQC0oZUHL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dsblcyzx-pod",
    rank: 1,
    badge: "Smallest Footprint, Mobile",
    name: "Mobile Office Pod Booth, Solo Soundproof Pod with High-Density Acoustic Panels, Wheels, USB Ports (White-Grey)",
    price: "$4,399.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41DQC0oZUHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DSBLCYZX?tag=deskfinds0d-20",
    description:
      "A solo, single-occupant pod on wheels and feet, with a built-in table, LED lighting, and USB ports, positioned as the most mobile option in this pool. Its listing is one of the few in this category that mentions ventilation at all, describing it as \"Silent Ventilation,\" though no airflow rate, CFM figure, or independent test data backs that claim.\n\nAmazon's listing does not include a star rating or review count. The wheels make repositioning within a room realistic, but this is still a heavy, large structure that needs freight delivery and real floor-loading consideration, wheels do not substitute for verifying weight limits on an upper-floor apartment or shared office.",
    specs: ["Solo (single-occupant) pod", "Wheels and feet for repositioning", "Built-in table, LED lighting, USB ports", "Listing states \"Silent Ventilation\" as a feature"],
    pros: ["Solo occupancy pod on wheels for easier repositioning within a room", "Built-in table, LED lighting, and USB ports included", "One of the few listings in this pool to mention ventilation at all, though unverified", "Lowest price point among the fully-featured single-person pods in this pool"],
    cons: ["No star rating or review count available from Amazon", "\"Silent Ventilation\" is a marketing claim with no CFM or airflow-rate data to verify it", "Still requires freight delivery and floor-loading planning despite the wheels"],
    bestFor: "Buyers wanting the most compact mobile pod verified in this niche.",
  },
  {
    id: "b0f62z8cff-pod",
    rank: 2,
    badge: "Smallest Footprint with Disclosed Dimensions",
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
    bestFor: "Buyers who want exact exterior dimensions (W55in D48in H92in) before committing to a small-footprint pod.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Quantified \"small\" with actual dimensions where available", description: "Used the exact exterior dimensions stated in listings where disclosed, rather than relying on marketing words like \"compact\" alone." },
  { title: "Cross-referenced overlapping guides rather than duplicating", description: "Confirmed this guide's product pool substantially overlaps with our mini portable offices and one-person office pods guides and cross-linked rather than presenting it as a distinct product set." },
  { title: "Mobility and footprint compared directly", description: "Compared wheel-based mobility against stated footprint dimensions to differentiate the two qualifying picks." },
  { title: "Verified listing data only", description: "Used only prices, dimensions, and features actually printed in each Amazon listing, no invented ratings or review counts." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "This Overlaps With Our Mini and One-Person Guides",
    note: "The same two products top our mini portable offices and one-person office pods guides. If you've already read those, this guide adds dimension-focused framing rather than a new product set, cross-reference rather than treating all three as independent research.",
  },
  {
    subheading: "Quantify \"Small\" With Real Dimensions",
    note: "One pick discloses an exact W55in D48in H92in exterior footprint, the other does not state dimensions in its listing title. Request exact measurements from the seller before assuming either fits a specific room layout.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most compact, mobile option", "Mobile Office Pod Booth"],
        ["Exact disclosed footprint for room planning", "Soundproof Office Pod Booth"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Use actual stated dimensions, not just \"small\" marketing language", explanation: "Only one of these two picks discloses an exact exterior footprint, request measurements directly for the other before assuming it fits your space." },
  { criterion: "Cross-check our mini and one-person guides before deciding", explanation: "This product pool substantially overlaps with two other guides in this cluster, review all three together rather than treating this as a separate research pass." },
  { criterion: "Weigh mobility against a slightly wider footprint", explanation: "The more mobile pick has a narrower stated design, the disclosed-dimension pick is wider but supports an occasional second occupant." },
  { criterion: "Confirm doorway clearance for either pick", explanation: "Even the smallest verified pods in this niche require doorway clearance planning for freight delivery, measure your access path before ordering." },
];

export const faq: FaqItem[] = [
  { q: "How small are the smallest verified office pods on Amazon?", a: "One listing discloses an exact W55in D48in H92in exterior footprint, the smallest confirmed dimensions in this research pool, the other qualifying small pick does not state dimensions in its title." },
  { q: "Is this guide different from the mini portable offices guide?", a: "Not substantially in product selection, both guides draw from the same limited compact-pod pool, this guide adds dimension-focused framing." },
  { q: "Do small office pods still require freight delivery?", a: "Yes, even the smallest verified pods in this niche ship as large freight items requiring delivery and doorway clearance planning." },
  { q: "Which small pod is best for an occasional second occupant?", a: "The 1-2 person pick with a disclosed W55in D48in footprint supports an occasional second occupant better than the strictly solo-marketed option." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-portable-offices", title: "Best Mini Portable Offices (2026)" },
  { href: "/guide/best-one-person-office-pods", title: "Best One-Person Office Pods (2026)" },
  { href: "/guide/best-office-pods-for-small-apartments", title: "Best Office Pods for Small Apartments (2026)" },
];
