export const guideSlug = "best-air-purifiers-for-smoke";
export const guideTitle = "5 Best Air Purifiers for Smoke in 2026";
export const metaTitle = "Best Air Purifiers for Smoke, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers we evaluated for smoke, with the CADR-for-smoke specificity competitors skip: a general CADR rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number on the same box.";
export const mainKeyword = "air purifier for smoke";
export const introParagraphs = [
  "A general CADR (Clean Air Delivery Rate) rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number printed on the same box, since smoke particles are finer and behave differently in airflow.",
  "Activated carbon mass, not just HEPA filtration, is what actually captures smoke odor at the molecular level, a HEPA-only unit removes visible particulate but does little for the lingering smell without a substantial carbon stage.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "levoit-core300-smoke",
    rank: 1,
    badge: "Best Air Purifier for Smoke Overall",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=deskfinds0d-20",
    description:
      "Explicitly marketed for smoke with by far the largest review base of any pick here as real-world evidence, True HEPA H13 captures fine smoke particulate at 99.97%.\n\nA HEPA-only design removes visible particulate but does little for lingering smell without a substantial carbon stage, check whether persistent odor is your bigger concern than particulate.",
    specs: ["True HEPA H13, marketed for smoke", "24dB quoted noise level", "Removes 99.97% of particulates", "Largest review base in this guide"],
    pros: ["Explicitly marketed and reviewed for smoke", "By far the largest review base of any pick here", "Certified True HEPA H13 filtration", "Affordable price"],
    cons: ["Standard carbon layer, not the deepest odor-control pick here", "No smart app control", "Smoke-specific CADR not separately published"],
    bestFor: "Buyers wanting the most-proven pick for smoke particulate",
  },
  {
    id: "winix5520-smoke",
    rank: 2,
    badge: "Best for Lingering Smoke Odor",
    name: "WINIX 5520 Air Purifier with PlasmaWave Technology",
    price: "$179.99",
    rating: "4.6 stars from 31,954 Amazon ratings",
    reviews: "31,954 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Wb8TGSnPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT4F8T4L?tag=deskfinds0d-20",
    description:
      "PlasmaWave technology adds a genuine odor-neutralizing layer beyond mechanical carbon filtration alone, meaningful for lingering smoke smell rather than just particulate removal.\n\nActivated carbon mass, not HEPA alone, is what actually captures smoke odor at the molecular level, this unit's added PlasmaWave layer complements that mechanical carbon stage.",
    specs: ["PlasmaWave odor-neutralizing technology", "Large, established review base", "True HEPA filtration", "Multi-stage filtration"],
    pros: ["PlasmaWave specifically targets lingering smoke odor", "Large, well-established review base", "True HEPA captures fine smoke particulate too", "Proven, established design"],
    cons: ["Higher price than the top pick", "Larger footprint than compact alternatives", "Carbon and plasma stages still saturate and need periodic filter replacement"],
    bestFor: "Buyers dealing with lingering smoke odor beyond particulate",
  },
  {
    id: "nuwave-oxypure-smoke",
    rank: 3,
    badge: "Best High-Capacity Smoke Pick",
    name: "Nuwave OxyPure Smart Air Purifier",
    price: "$799.99",
    rating: "4.6 stars from 616 Amazon ratings",
    reviews: "616 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31CulL9tCOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08K3R8QPF?tag=deskfinds0d-20",
    description:
      "A multi-stage design with a substantial carbon mass genuinely built for heavier smoke exposure, appropriate for a wildfire-smoke season or a heavy indoor-smoking household.\n\nThe higher price reflects genuinely more carbon mass and filtration stages than a standard HEPA-only unit, worth it for a heavier or more persistent smoke exposure scenario.",
    specs: ["Multi-stage filtration with substantial carbon mass", "Smart app control", "5-stage filtration system", "Higher capacity for heavy smoke exposure"],
    pros: ["Substantial carbon mass genuinely built for heavy smoke odor", "Multi-stage filtration for both particulate and odor", "Smart app control for monitoring", "Higher capacity for wildfire-season or heavy indoor smoke"],
    cons: ["Highest price in this guide by a wide margin", "Smaller review base than budget alternatives", "Overkill for occasional light smoke exposure"],
    bestFor: "Wildfire-smoke season or heavy indoor-smoking households",
  },
  {
    id: "germguardian-smoke",
    rank: 4,
    badge: "Best Budget Smoke Pick",
    name: "Germ Guardian True HEPA Filter Air Purifier for Home",
    price: "$80.74",
    rating: "4.6 stars from 63,485 Amazon ratings",
    reviews: "63,485 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316AtkHoSdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004VGIGVY?tag=deskfinds0d-20",
    description:
      "A large review base at the lowest price in this guide, genuinely capable for occasional light smoke exposure rather than heavy or persistent smoke odor.\n\nOccasional light exposure is a reasonable fit here, a heavier or more persistent smoke scenario likely needs one of the deeper-carbon picks in this guide instead.",
    specs: ["True HEPA filtration", "Large review base", "Budget-friendly", "Compact design"],
    pros: ["Lowest price in this guide", "Large, well-established review base", "True HEPA captures fine smoke particulate", "Compact footprint"],
    cons: ["Not built for heavy or persistent smoke odor", "Standard carbon layer, saturates faster under heavy smoke load", "Fewer smart features than premium alternatives"],
    bestFor: "Budget-conscious buyers with occasional light smoke exposure",
  },
  {
    id: "levoit-vital200s-smoke",
    rank: 5,
    badge: "Best High-Coverage Smoke Pick",
    name: "LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S-P",
    price: "$174.99",
    rating: "4.7 stars from 14,571 Amazon ratings",
    reviews: "14,571 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGPF71Q6?tag=deskfinds0d-20",
    description:
      "Rated up to 1875 sq ft with smart app control, genuine headroom for a larger room affected by smoke where the smoke-specific CADR runs lower than the general dust or pollen number.\n\nSize up from a standard-capacity unit for a larger affected room, since a general CADR rating overstates real smoke-clearing speed for that specific space.",
    specs: ["Up to 1875 sq ft rated (open room)", "Smart app control", "Large review base", "Extra headroom for larger smoke-affected rooms"],
    pros: ["Large rated coverage compensates for lower smoke-specific CADR", "Smart app control for monitoring", "Large, well-established review base", "Genuine headroom for a larger room"],
    cons: ["Higher price than budget alternatives", "Larger footprint than compact picks", "Smoke-specific CADR not separately published, sizing up is still the safest approach"],
    bestFor: "Larger rooms affected by smoke needing extra coverage headroom",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Smoke-specific CADR versus general CADR", description: "Considered that a general CADR rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number on the same box." },
  { title: "Carbon mass as the actual odor-capture mechanism", description: "Weighed that activated carbon mass, not HEPA filtration alone, is what actually captures smoke odor at the molecular level, a HEPA-only unit does little for lingering smell." },
  { title: "Exposure intensity matched to filtration depth", description: "Distinguished occasional light smoke exposure from heavy or persistent exposure (wildfire season, indoor smoking), matching filtration depth and coverage to the real scenario." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "A General CADR Number Overstates Smoke-Clearing Speed",
    note: "A general CADR (Clean Air Delivery Rate) rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number on the same box, since smoke particles are finer and behave differently in airflow. Size up in rated coverage to compensate rather than trusting the general number.",
  },
  {
    subheading: "Carbon Mass, Not HEPA Alone, Controls Smoke Odor",
    note: "Activated carbon mass, not just HEPA filtration, is what actually captures smoke odor at the molecular level. A HEPA-only unit removes visible particulate but does little for the lingering smell without a substantial carbon stage, prioritize a pick with an explicit odor-control feature if lingering smell is your main concern.",
  },
  {
    subheading: "Match Filtration Depth to Your Actual Smoke Exposure",
    note: "Occasional light smoke exposure is a reasonable fit for a standard budget unit. A wildfire-smoke season or a heavy indoor-smoking household needs the deeper carbon mass and multi-stage filtration of a higher-capacity pick.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "General CADR overstates real smoke-clearing speed", explanation: "The smoke-specific CADR is often meaningfully lower than the dust or pollen number on the same box, since smoke particles are finer and behave differently in airflow." },
  { criterion: "Carbon mass, not HEPA alone, controls lingering smoke odor", explanation: "A HEPA-only unit removes visible particulate but does little for the lingering smell without a substantial activated carbon stage." },
  { criterion: "Match filtration depth to your real smoke exposure level", explanation: "Occasional light exposure suits a standard budget unit, a wildfire-smoke season or heavy indoor-smoking household needs deeper carbon mass and multi-stage filtration." },
  { criterion: "Size up coverage to compensate for the smoke-specific CADR gap", explanation: "Since a general CADR rating overstates smoke-clearing speed, choosing a unit rated for a larger room than your actual space gives real-world headroom." },
];

export const faq: FaqItem[] = [
  { q: "Does a high CADR rating mean fast smoke clearing?", a: "Not necessarily. A general CADR rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number on the same box, since smoke particles behave differently in airflow." },
  { q: "Will a HEPA filter alone remove smoke smell?", a: "Not fully. HEPA filtration removes visible smoke particulate, but activated carbon mass is what actually captures smoke odor at the molecular level, a HEPA-only unit does little for lingering smell." },
  { q: "Do I need a more powerful air purifier for wildfire smoke season?", a: "Yes. Heavy or persistent smoke exposure like wildfire season needs deeper carbon mass and multi-stage filtration than a standard budget unit designed for occasional light exposure." },
  { q: "Should I size up coverage rating for a smoke-affected room?", a: "Yes. Since a general CADR rating overstates real smoke-clearing speed for that specific space, choosing a unit rated for a larger room than your actual space gives useful real-world headroom." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-for-odors", title: "Best Air Purifiers for Odors (2026)" },
  { href: "/guide/best-air-purifiers-for-vocs", title: "Best Air Purifiers for VOCs (2026)" },
  { href: "/guide/best-hepa-and-carbon-air-purifiers", title: "Best HEPA and Carbon Air Purifiers (2026)" },
];
