export const guideSlug = "best-mini-portable-offices";
export const guideTitle = "2 Best Mini Portable Offices in 2026";
export const metaTitle = "Best Mini Portable Offices (2026)";
export const metaDescription =
  "2 compact office pods we evaluated, with an honest note that a true \"mini\" size tier isn't clearly differentiated in current Amazon listings.";
export const mainKeyword = "mini portable offices";
export const introParagraphs = [
  "None of the nine verified listings in this niche use the word \"mini\" or state a compact-specific size tier distinct from a standard single-occupant pod. Rather than force a mini category that doesn't clearly exist yet, we're featuring the two most compact-sounding, solo-oriented listings and being transparent that the sizing distinction is ours, not the manufacturer's.",
  "A smaller enclosed volume also compounds the ventilation disclosure gap seen across this niche, less interior air volume means faster CO2 buildup for a given airflow rate, worth asking the seller directly about ventilation if you're specifically shopping for a compact pod for sustained daily use.",
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
    badge: "Most Compact-Oriented Pod (Mobile, Solo)",
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
    bestFor: "Buyers wanting the most compact, mobile solo-occupant option in this pool.",
  },
  {
    id: "b0f62z8cff-pod",
    rank: 2,
    badge: "Most Compact Multi-Occupant Pod (1-2 Person)",
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
    bestFor: "Buyers wanting a small footprint that still fits an occasional second occupant.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Checked for an explicit \"mini\" size tier", description: "Searched all nine verified listings for explicit mini or compact sizing language, found none, and disclosed that gap rather than inventing a size tier." },
  { title: "Selected by solo/mobile framing instead", description: "Used solo occupancy and mobility framing (wheels, single-person capacity) as the closest available proxy for a compact use case." },
  { title: "Ventilation-at-smaller-volume flagged as a compounding concern", description: "Noted that a smaller interior volume makes the niche-wide lack of disclosed ventilation specs more consequential, not less." },
  { title: "Verified listing data only", description: "Used only prices, dimensions, and features actually printed in each Amazon listing, no invented ratings or review counts." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "\"Mini\" Isn't a Defined Size Tier in This Category Yet",
    note: "No verified listing in this niche uses \"mini\" or a comparable compact-specific label. We selected the most solo- and mobility-oriented options as the closest match, but this is an editorial judgment, not a manufacturer-stated size class.",
  },
  {
    subheading: "Smaller Volume Makes Ventilation More Important, Not Less",
    note: "A smaller interior volume means CO2 can build up faster for a given airflow rate. Since no listing in this niche discloses a specific ventilation spec, ask the seller directly before committing to a compact pod for full workday use.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most compact, mobile solo option", "Mobile Office Pod Booth"],
        ["Small footprint with occasional second occupant", "Soundproof Office Pod Booth"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Don't expect a manufacturer-defined \"mini\" tier", explanation: "No listing in this niche uses mini or compact sizing language, compare actual exterior dimensions rather than trusting a size label." },
  { criterion: "Ask about ventilation before committing to a compact pod", explanation: "Smaller interior volume compounds CO2 buildup concerns, and no listing in this niche discloses airflow specs, ask directly for multi-hour use." },
  { criterion: "Check for wheels or mobility features if repositioning matters", explanation: "Only one product in this pool is explicitly described with wheels for repositioning, verify this feature directly rather than assuming all compact pods are equally mobile." },
  { criterion: "Compare exterior dimensions directly, not marketing size language", explanation: "Words like \"solo\" or \"compact\" aren't standardized across sellers, compare actual stated dimensions where available." },
];

export const faq: FaqItem[] = [
  { q: "Is there a true \"mini\" office pod category on Amazon?", a: "Not clearly, none of the verified listings in this niche use mini or compact-specific sizing language, we selected the most solo- and mobility-oriented options as the closest match." },
  { q: "Does a smaller pod have worse ventilation?", a: "Not necessarily worse, but the ventilation disclosure gap across this niche matters more in a smaller volume, since CO2 can build up faster, ask the seller directly." },
  { q: "Which pick is more mobile?", a: "The mobile solo pod is explicitly described with wheels and feet for repositioning, the 1-2 person pick does not mention wheels in its listing." },
  { q: "Should I compare this guide to the small office pod guide?", a: "Yes, this guide and our small office pods guide draw from an overlapping, very limited product pool, cross-check both before deciding." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-office-pods", title: "Best Small Office Pods (2026)" },
  { href: "/guide/best-one-person-office-pods", title: "Best One-Person Office Pods (2026)" },
  { href: "/guide/best-office-pods-for-small-apartments", title: "Best Office Pods for Small Apartments (2026)" },
];
