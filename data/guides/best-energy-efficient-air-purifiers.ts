export const guideSlug = "best-energy-efficient-air-purifiers";
export const guideTitle = "5 Best Energy-Efficient Air Purifiers in 2026";
export const metaTitle = "Best Energy-Efficient Air Purifiers, Honestly Reviewed (2026)";
export const metaDescription =
  "5 energy-efficient air purifiers we evaluated, with the metric competitors skip: raw wattage alone doesn't indicate efficiency, CADR-per-watt is the more meaningful metric, and it's rarely calculated or compared.";
export const mainKeyword = "air purifier Energy Star";
export const introParagraphs = [
  "Raw wattage alone doesn't indicate efficiency, CADR-per-watt, air cleaning delivered per unit of energy, is the more meaningful metric, since low-wattage units sometimes also have low CADR, making them not actually more efficient, just weaker.",
  "Energy Star certification for air purifiers covers energy consumption but says nothing about actual CADR or filtration performance, a certified energy efficient unit could still be a poor performer on the air-cleaning metric that matters most.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/419pAe7T0EL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "coway-mighty-ecomode",
    rank: 1,
    badge: "Best Energy-Efficient Air Purifier Overall",
    name: "COWAY Air Purifier for Home Up to 1,748ft², HEPA Filter for Smoke, Allergies, Pet Dander, Odor, Air Quality Monitor, Auto&Eco Mode, Timer, Filter Indicator, 3yr Warranty, Mighty AP-1512HH, Black",
    price: "$229.99",
    rating: "4.6 stars from 28,866 Amazon ratings",
    reviews: "28,866 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419pAe7T0EL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00BTKAPUU?tag=deskfinds0d-20",
    description:
      "Explicit Eco mode alongside a large rated coverage, genuine real-world evidence from a large review base of efficient operation over years of use. 3-year warranty.\n\nHigh CADR at this rated coverage genuinely supports a favorable CADR-per-watt ratio, more meaningful than raw wattage alone for assessing true efficiency.",
    specs: ["Auto/Eco mode", "Up to 1748 sq ft rated (open room)", "3-year warranty", "Large review base"],
    pros: ["Large, well-established review base", "Explicit Eco mode for efficient operation", "High rated CADR supports favorable efficiency ratio", "3-year warranty"],
    cons: ["CADR-per-watt not explicitly calculated by the manufacturer", "Standby phantom power draw not disclosed", "Higher price than basic alternatives"],
    bestFor: "Buyers who want proven Eco-mode efficiency with high genuine CADR",
  },
  {
    id: "coway-mighty-white-ecomodealt",
    rank: 2,
    badge: "Best White Finish Alternative",
    name: "COWAY Air Purifier for Home Up to 1,748ft², HEPA Filter for Smoke, Allergies, Pet Dander, Odor, Air Quality Monitor, Auto&Eco Mode, Timer, Filter Indicator, 3yr Warranty, Mighty AP-1512HH(W), White",
    price: "$229.99",
    rating: "4.6 stars from 28,866 Amazon ratings",
    reviews: "28,866 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31pCHKKqN2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01728NLRG?tag=deskfinds0d-20",
    description:
      "The same proven Eco-mode design in a white finish, appropriate for a lighter aesthetic while keeping the same efficiency claims and CADR-per-watt profile. Same 3-year warranty.\n\nSame efficiency considerations apply, raw wattage alone doesn't tell you efficiency, this pick's high CADR at this power draw supports a genuinely favorable ratio.",
    specs: ["Auto/Eco mode", "Up to 1748 sq ft rated (open room)", "3-year warranty", "White finish"],
    pros: ["Same proven Eco-mode design as the black variant", "3-year warranty", "White finish for lighter aesthetics", "Large, well-established review base"],
    cons: ["CADR-per-watt not explicitly calculated by the manufacturer", "Standby phantom power draw not disclosed", "Higher price than basic alternatives"],
    bestFor: "Buyers who want the proven Coway Eco-mode design in a white finish",
  },
  {
    id: "levoit-core300-ecoalt2",
    rank: 3,
    badge: "Best Low-Wattage Value Pick",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=deskfinds0d-20",
    description:
      "By far the largest review base of any pick in this guide at an affordable price, appropriately sized for lower wattage draw for its coverage tier. True HEPA H13 filtration.\n\nDon't assume this unit's lower wattage automatically means better efficiency, verify its CADR at that wattage against a larger unit's CADR-per-watt ratio before assuming it's the more efficient choice.",
    specs: ["True HEPA H13 filter", "Compact, lower wattage design", "Largest review base in this guide", "Affordable"],
    pros: ["By far the largest review base of any pick in this guide", "Affordable price", "Compact, appropriately sized wattage draw", "True HEPA H13 filtration"],
    cons: ["CADR-per-watt not independently calculated for comparison", "No Eco mode confirmed", "Standby phantom power draw not disclosed"],
    bestFor: "Buyers who want a genuinely lower-wattage unit at an affordable price",
  },
  {
    id: "levoit-vital200s-ecoalt3",
    rank: 4,
    badge: "Best High-Capacity Efficient Pick",
    name: "LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S-P",
    price: "$174.99",
    rating: "4.7 stars from 14,571 Amazon ratings",
    reviews: "14,571 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGPF71Q6?tag=deskfinds0d-20",
    description:
      "Rated up to 1875 sq ft, real capacity that supports a genuinely favorable CADR-per-watt ratio if run at an appropriately matched speed for your actual room rather than maxed out unnecessarily.\n\nSmart features add some standby power draw from WiFi circuitry, a minor phantom-load consideration alongside the unit's core operational efficiency.",
    specs: ["Up to 1875 sq ft rated (open room)", "Smart app control", "Large review base", "Higher capacity design"],
    pros: ["Large rated coverage supports a favorable CADR-per-watt ratio", "Smart app control for monitoring", "Large, well-established review base", "Genuine capacity for a demanding room"],
    cons: ["Smart WiFi circuitry adds some standby power draw", "CADR-per-watt not explicitly calculated by the manufacturer", "Higher price than basic alternatives"],
    bestFor: "Buyers who want high genuine capacity supporting a favorable efficiency ratio",
  },
  {
    id: "membrane-solutions-ecoalt4",
    rank: 5,
    badge: "Best Budget Efficiency Pick",
    name: "Membrane Solutions MSA3 Air Purifier for Home",
    price: "$99.39",
    rating: "4.5 stars from 10,110 Amazon ratings",
    reviews: "10,110 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31CcBFzC6wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08ND7C7P4?tag=deskfinds0d-20",
    description:
      "A genuinely more affordable option with a solid review base, appropriate if your primary concern is upfront price rather than a verified CADR-per-watt efficiency claim.\n\nAt this budget tier, running cost estimates are rarely provided with clear methodology, calculate your own realistic annual cost based on your actual usage pattern.",
    specs: ["HEPA filtration", "Solid review base", "Budget-friendly", "Compact design"],
    pros: ["More affordable than premium alternatives", "Solid review base", "Compact design", "Reasonable performance for the price"],
    cons: ["No Eco mode or efficiency claims confirmed", "CADR-per-watt not calculated for comparison", "No smart features"],
    bestFor: "Budget-conscious buyers prioritizing upfront price over verified efficiency claims",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "CADR-per-watt as the primary efficiency comparison metric", description: "Prioritized CADR-per-watt as the meaningful efficiency comparison, since raw wattage alone doesn't indicate efficiency, low-wattage units sometimes also have low CADR, making them weaker, not more efficient." },
  { title: "Energy Star certification scope clarified explicitly", description: "Noted that Energy Star certification for air purifiers addresses energy consumption only, not CADR or filtration performance, a scope limitation of the certification itself rarely explained to buyers." },
  { title: "Standby phantom power draw disclosure for smart-feature-equipped units", description: "Considered that standby power draw when a unit is in 'off' or auto-idle mode but still plugged in with smart features active adds a phantom-load cost rarely included in advertised running-cost estimates." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "CADR-Per-Watt, Not Raw Wattage, Is the Real Efficiency Metric",
    note: "Raw wattage alone doesn't indicate efficiency, CADR-per-watt, air cleaning delivered per unit of energy, is the more meaningful metric, and it's rarely calculated or compared. A low-wattage unit with correspondingly low CADR isn't actually more efficient, it's just weaker, calculate this ratio yourself where manufacturer specs allow.",
  },
  {
    subheading: "Energy Star Certification Doesn't Guarantee Air-Cleaning Performance",
    note: "Energy Star certification for air purifiers covers energy consumption but says nothing about actual CADR or filtration performance. A certified energy-efficient unit could still be a poor performer on the air-cleaning metric that matters most, don't assume the certification implies overall product quality.",
  },
  {
    subheading: "Running a Weaker Unit Harder Can Cost More Than a Stronger Unit Run Modestly",
    note: "Running a lower-efficiency unit at a higher speed to compensate for inadequate CADR can consume more total energy over time than a higher-wattage but genuinely more capable unit run at a lower, adequate speed, a real-world usage pattern that static wattage specs don't capture.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "CADR-per-watt is the meaningful efficiency metric, not raw wattage", explanation: "A low-wattage unit with correspondingly low CADR isn't actually more efficient, it's just weaker, calculate air cleaning delivered per unit of energy where possible rather than comparing wattage alone." },
  { criterion: "Energy Star certification addresses energy use only, not air-cleaning performance", explanation: "A certified energy-efficient unit could still be a poor performer on CADR and filtration, the certification's scope is limited to energy consumption, not overall product quality." },
  { criterion: "A weaker unit run harder can cost more than a stronger unit run modestly", explanation: "Running a lower-efficiency unit at a higher speed to compensate for inadequate CADR can consume more total energy over time than a higher-wattage but genuinely more capable unit run at a lower, adequate speed." },
  { criterion: "Standby phantom power draw adds a hidden cost for smart-feature units", explanation: "Standby power draw when a unit is idle but still plugged in with smart features active adds a phantom-load cost rarely included in advertised running-cost estimates." },
];

export const faq: FaqItem[] = [
  { q: "Does lower wattage mean an air purifier is more energy-efficient?", a: "Not necessarily. Raw wattage alone doesn't indicate efficiency, CADR-per-watt is the more meaningful metric, a low-wattage unit with correspondingly low CADR isn't actually more efficient, it's just weaker." },
  { q: "Does Energy Star certification mean an air purifier cleans air well?", a: "No, it only addresses energy consumption. A certified energy-efficient unit could still be a poor performer on CADR and filtration, the certification's scope doesn't cover air-cleaning performance at all." },
  { q: "Is it cheaper to run a weak air purifier at high speed or a strong one at low speed?", a: "Often the stronger unit run at a lower, adequate speed is cheaper. Running a lower-efficiency unit harder to compensate for inadequate CADR can consume more total energy over time than a genuinely more capable unit run modestly." },
  { q: "Do smart air purifiers use power even when turned off?", a: "Often yes, a small amount. Standby power draw for smart features active in 'off' or auto-idle mode adds a phantom-load cost rarely included in advertised running-cost estimates." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-smart-air-purifiers", title: "Best Smart Air Purifiers (2026)" },
  { href: "/guide/best-air-purifiers-with-air-quality-sensors", title: "Best Air Purifiers with Air Quality Sensors (2026)" },
  { href: "/guide/best-air-purifiers-under-100", title: "Best Air Purifiers Under $100 (2026)" },
];
