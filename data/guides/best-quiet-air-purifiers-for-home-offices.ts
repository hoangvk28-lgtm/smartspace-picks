export const guideSlug = "best-quiet-air-purifiers-for-home-offices";
export const guideTitle = "5 Best Quiet Air Purifiers for Home Offices in 2026";
export const metaTitle = "Best Quiet Air Purifiers for Home Offices, Honestly Reviewed (2026)";
export const metaDescription =
  "5 quiet air purifiers we evaluated for home offices, with the disclosure gap competitors skip: decibel ratings are almost universally quoted at the lowest fan speed, which also delivers the lowest, often inadequate, CADR.";
export const mainKeyword = "quiet air purifier";
export const introParagraphs = [
  "Decibel ratings are almost universally quoted at the lowest fan speed, which also delivers the lowest, often inadequate, CADR, the genuinely relevant spec is noise at the speed needed for real air cleaning, rarely disclosed.",
  "Microphone pickup sensitivity on video calls can pick up purifier fan noise even when it's subjectively unnoticeable to the room's occupants, quiet enough for me doesn't guarantee inaudible to call participants.",
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
    id: "levoit-core300-quiet",
    rank: 1,
    badge: "Best Quiet Air Purifier for Home Offices Overall",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=deskfinds0d-20",
    description:
      "By far the largest review base of any pick in this guide, quoted 24dB, though verify this figure reflects the lowest fan speed rather than the speed needed for real air changes. True HEPA H13 filtration.\n\nA higher-pitched hum at a lower dB can be more distracting on a video call's microphone pickup than a lower-pitched hum at a slightly higher dB, subjective in-room quietness doesn't guarantee inaudibility to call participants.",
    specs: ["True HEPA H13 filter", "24dB quoted noise level", "Removes 99.97% of particulates", "Largest review base in this guide"],
    pros: ["By far the largest review base of any pick in this guide", "True HEPA H13 filtration", "Established, well-reviewed design", "Reasonable price"],
    cons: ["24dB likely reflects lowest speed, not effective-CADR speed", "Video-call microphone pickup not independently verified", "No smart features"],
    bestFor: "Buyers who want the most-proven quiet air purifier for a home office",
  },
  {
    id: "levoit-smallquiet-quietalt",
    rank: 2,
    badge: "Best Compact Quiet Pick",
    name: "Levoit Air Purifiers for Home Bedroom Dorm Room, Small Quiet Air Purifiers",
    price: "$44.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31e6d46ZnyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LMF648R?tag=deskfinds0d-20",
    description:
      "A large review base for a genuinely quiet-focused design, more affordable than the top pick while still emphasizing low-noise operation for home-office use.\n\nSome quiet purifiers achieve lower noise through a larger, slower-spinning fan rather than genuinely superior engineering, a compact unit's quiet claim deserves proportionally more scrutiny.",
    specs: ["Small, quiet-focused design", "Large review base", "Affordable", "Compact footprint"],
    pros: ["Large, well-established review base", "Quiet-focused design at an affordable price", "Compact for a home office desk area", "Very affordable"],
    cons: ["Compact size makes achieving genuine quiet-at-effective-CADR a harder engineering claim", "Filter replacement more frequent given compact media", "No smart features"],
    bestFor: "Budget-conscious buyers who want a compact, quiet-focused home office purifier",
  },
  {
    id: "coway-mighty-quietalt2",
    rank: 3,
    badge: "Best Established Brand Quiet Pick",
    name: "COWAY Air Purifier for Home Up to 1,748ft², HEPA Filter for Smoke, Allergies, Pet Dander, Odor, Air Quality Monitor, Auto&Eco Mode, Timer, Filter Indicator, 3yr Warranty, Mighty AP-1512HH, Black",
    price: "$229.99",
    rating: "4.6 stars from 28,866 Amazon ratings",
    reviews: "28,866 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419pAe7T0EL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00BTKAPUU?tag=deskfinds0d-20",
    description:
      "An established, larger-body design with a large review base and Eco mode, its larger size correlates with a more credible quiet-at-effective-speed claim than an ultra-compact unit.\n\nNoise can increase measurably over the unit's lifespan as bearings wear or the filter clogs, a longevity dimension of noise performance essentially never tested in initial reviews, worth checking recent feedback for.",
    specs: ["Up to 1748 sq ft rated (open room)", "Air quality monitor, Auto/Eco mode", "3-year warranty", "Large review base"],
    pros: ["Large, well-established review base", "Larger body design more credibly supports quiet-at-effective-speed claims", "Built-in air quality monitor", "3-year warranty"],
    cons: ["Higher price than compact alternatives", "Noise may increase over the unit's lifespan as it ages", "No activated carbon layer confirmed"],
    bestFor: "Buyers who want a larger, more credibly engineered quiet design with a warranty",
  },
  {
    id: "membrane-solutions-quietalt3",
    rank: 4,
    badge: "Best Budget Quiet Pick",
    name: "Membrane Solutions MSA3 Air Purifier for Home",
    price: "$99.39",
    rating: "4.5 stars from 10,110 Amazon ratings",
    reviews: "10,110 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31CcBFzC6wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08ND7C7P4?tag=deskfinds0d-20",
    description:
      "A genuinely more affordable option with a solid review base, appropriate for a home office with modest quiet-operation needs.\n\nRead recent reviews specifically for noise mentions at real operating speeds, since manufacturer-quoted dB figures rarely reflect actual working conditions.",
    specs: ["HEPA filtration", "Solid review base", "Budget-friendly", "Compact design"],
    pros: ["More affordable than premium alternatives", "Solid review base", "Compact for a home office desk area", "Reasonable performance for the price"],
    cons: ["Verify certified True HEPA vs. HEPA-type claim", "No independently verified noise level at effective speed", "No smart features"],
    bestFor: "Budget-conscious buyers with modest quiet-operation needs",
  },
  {
    id: "levoit-vital200s-quietalt4",
    rank: 5,
    badge: "Best Quiet Pick for Larger Home Offices",
    name: "LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S-P",
    price: "$174.99",
    rating: "4.7 stars from 14,571 Amazon ratings",
    reviews: "14,571 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGPF71Q6?tag=deskfinds0d-20",
    description:
      "Rated up to 1875 sq ft, meaning it can run at a lower, quieter speed for a typical home office while still hitting adequate air changes, genuine headroom that helps with the noise-vs-CADR tradeoff. Smart app control.\n\nThis headroom is genuinely useful for the noise problem, a unit sized above your actual room need can run quieter while still delivering real air cleaning at that lower speed.",
    specs: ["Up to 1875 sq ft rated (open room)", "Smart app control", "Large review base", "Higher capacity for quieter effective operation"],
    pros: ["Large rated coverage allows quieter operation at effective speed", "Smart app control for monitoring", "Large, well-established review base", "Genuine headroom for the noise-vs-CADR tradeoff"],
    cons: ["Higher price than compact alternatives", "Larger footprint for a small office", "Video-call microphone pickup not independently verified"],
    bestFor: "Buyers who want headroom to run quieter while still hitting adequate air changes",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Full-speed-range noise disclosure matched to effective CADR speed", description: "Flagged that decibel ratings are almost universally quoted at the lowest fan speed, which also delivers the lowest CADR, the genuinely relevant spec is noise at the speed needed for real air cleaning." },
  { title: "Video-call microphone pickup considered beyond in-room perception", description: "Noted that microphone pickup sensitivity on video calls can pick up purifier fan noise even when subjectively unnoticeable to the room's occupants, a distinction generic 'quiet' claims don't address." },
  { title: "Size-to-achievable-quietness relationship and lifespan noise increase noted", description: "Explained the size/quietness relationship (larger units can more credibly claim quiet-at-effective-speed) and that noise can increase over a unit's lifespan as bearings wear or the filter clogs." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Check Noise at the Speed You'll Actually Use, Not the Marketed Minimum",
    note: "Decibel ratings are almost universally quoted at the lowest fan speed, which also delivers the lowest, often inadequate, CADR. The genuinely relevant spec for home-office use is noise at the speed needed for real air cleaning, rarely disclosed, look for recent buyer reviews mentioning actual operating noise, not just the marketed dB figure.",
  },
  {
    subheading: "In-Room Quiet Doesn't Guarantee Call-Inaudible",
    note: "Microphone pickup sensitivity on video calls can pick up purifier fan noise even when it's subjectively unnoticeable to the room's occupants. A higher-pitched hum at a lower dB can be more distracting on a call's microphone than a lower-pitched hum at a slightly higher dB, a psychoacoustic factor untested in spec-only comparisons.",
  },
  {
    subheading: "Bigger Units Can More Credibly Claim Quiet-at-Effective-Speed",
    note: "Some 'quiet' purifiers achieve lower noise through a larger, slower-spinning fan design rather than genuinely superior engineering, meaning physical unit size correlates with achievable quietness-at-effective-CADR. Be skeptical of ultra-compact 'whisper quiet' claims specifically.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check noise at the speed needed for real air changes, not the lowest speed", explanation: "Decibel ratings are almost universally quoted at the lowest fan speed, which also delivers the lowest CADR, the genuinely relevant spec is noise at effective-CADR speed, rarely disclosed by manufacturers." },
  { criterion: "In-room quietness doesn't guarantee inaudibility on a video call", explanation: "Microphone pickup sensitivity can pick up fan noise even when subjectively unnoticeable to the room's occupants, a real gap between perceived and call-audible quietness." },
  { criterion: "Larger units more credibly achieve quiet-at-effective-speed", explanation: "Physical unit size correlates with achievable quietness at effective CADR, be skeptical of ultra-compact 'whisper quiet' claims, which are a harder engineering feat to trust." },
  { criterion: "Noise can increase over a unit's lifespan as it ages", explanation: "A unit tested quiet when new may become noticeably louder after months of use as bearings wear or the filter clogs, forcing the fan to work harder for the same airflow." },
];

export const faq: FaqItem[] = [
  { q: "Is a purifier's quoted decibel rating accurate for real use?", a: "Usually not at the speed you'll actually need. Decibel ratings are almost universally quoted at the lowest fan speed, which also delivers the lowest, often inadequate, CADR, look for reviews mentioning noise at real operating speeds instead." },
  { q: "Can a video call pick up my air purifier's fan noise even if I can't hear it?", a: "Yes, potentially. Microphone pickup sensitivity can pick up fan noise even when it's subjectively unnoticeable to the room's occupants, quiet enough for you doesn't guarantee inaudible to call participants." },
  { q: "Are compact air purifiers as quiet as larger ones?", a: "Not necessarily. Some quiet claims are achieved through a larger, slower-spinning fan design rather than genuinely superior engineering, be skeptical of ultra-compact 'whisper quiet' claims specifically." },
  { q: "Does an air purifier get louder as it ages?", a: "It can. Noise level can increase measurably over the unit's lifespan as bearings wear or the filter clogs, forcing the fan to work harder for the same airflow, a longevity dimension rarely tested in initial reviews." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-for-home-offices", title: "Best Air Purifiers for Home Offices (2026)" },
  { href: "/guide/best-air-purifiers-for-bedrooms-and-home-offices", title: "Best Air Purifiers for Bedrooms and Home Offices (2026)" },
  { href: "/guide/best-desktop-air-purifiers", title: "Best Desktop Air Purifiers (2026)" },
];
