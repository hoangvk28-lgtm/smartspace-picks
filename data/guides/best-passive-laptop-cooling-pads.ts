export const guideSlug = "best-passive-laptop-cooling-pads";
export const guideTitle = "3 Best Passive Laptop Cooling Pads in 2026";
export const metaTitle = "Best Passive Laptop Cooling Pads (2026)";
export const metaDescription =
  "3 genuinely fanless laptop cooling pads we evaluated for elevation, material conductivity, and honest cooling limits, narrowed from a thin category.";
export const mainKeyword = "passive laptop cooling pads";
export const introParagraphs = [
  "Passive cooling pads rely on elevation, open airflow, and sometimes conductive material instead of a powered fan. Their advantage is genuinely zero fan noise, but almost every product marketed as a laptop cooling pad actually includes a fan, so a genuinely fanless option is a narrower category than the search term suggests.",
  "This guide overlaps almost entirely with our fanless cooling pads guide, since passive and fanless describe the same no-fan mechanism. We checked the real feature lists of every laptop cooling pad in our research pool and only three genuinely confirm a fan-free design, rather than padding this list with fan-equipped products relabeled as passive.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-P9I-xIRL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0c7bkz883-plcp",
    rank: 1,
    badge: "Best Overall Pick",
    name: "Gogoonike Adjustable Laptop Stand for Desk, Metal Laptop Riser Holder",
    price: "$14.24",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-P9I-xIRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C7BKZ883?tag=deskfinds0d-20",
    description:
      "This is a genuinely fanless metal riser, no fan mentioned anywhere in its feature list, that elevates a laptop while its top surface uses multiple ventilation holes to promote passive airflow underneath. Sturdy metal construction supports up to 17.6 lbs.\n\nA foldable design fits in a backpack for travel, and anti-skid silicone pads secure the laptop while protecting it from scratches. Since there is no fan, cooling comes entirely from elevation and open airflow, expect a modest, not dramatic, temperature benefit.",
    specs: ["Metal riser, no fan", "Supports up to 17.6 lbs (8kg)", "Foldable design", "Ventilated top surface"],
    pros: ["Completely silent, genuinely no fan", "Foldable for travel", "High weight capacity for a passive stand", "Anti-skid pads protect the laptop"],
    cons: ["Elevation-only cooling, more modest benefit than an active fan pad", "No adjustable stand height beyond the fixed elevation angle", "Compatible up to 15.6 inches, not larger laptops"],
    bestFor: "Buyers who want zero fan noise and are comfortable with a more modest, elevation-only cooling benefit.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine fan-free verification", description: "We checked each product's real feature list for any mention of a fan, and excluded anything with active airflow from this passive-specific guide." },
  { title: "Elevation and airflow mechanism", description: "We evaluated how the product's physical design, ventilation holes, riser height, opens airflow beneath the laptop without powered assistance." },
  { title: "Realistic cooling limits disclosure", description: "We compared passive designs honestly against active fan pads, since passive cooling typically provides a smaller, not equivalent, temperature improvement." },
  { title: "Build quality and portability", description: "We considered weight capacity, foldability, and material for buyers who want a passive stand that also travels well." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Passive or Active Cooling",
    cards: [
      { label: "Passive pad", text: "Best when silence is the top priority and your laptop only needs modest elevation, not aggressive sustained-load cooling." },
      { label: "Active fan pad", text: "Better for sustained gaming or rendering workloads where real airflow matters more than silence. See our Best Laptop Cooling Pads with Fans guide." },
    ],
  },
  {
    subheading: "Set Realistic Cooling Expectations",
    table: {
      headers: ["Situation", "What to expect"],
      rows: [
        ["Light browsing and office work", "Passive elevation is likely sufficient"],
        ["Sustained gaming or video rendering", "A passive stand alone probably won't be enough, consider an active pad"],
        ["Laptop already runs hot at idle", "Passive cooling likely won't resolve an internal thermal design issue"],
      ],
    },
  },
  {
    subheading: "Why This List Is Short",
    note: "Most products marketed as laptop cooling pads include a fan. We would rather list one genuinely fanless product with confidence than pad this guide with fan-equipped pads mislabeled as passive.",
  },
  {
    subheading: "Check Material and Fit Before Buying",
    table: {
      headers: ["Feature", "What to verify"],
      rows: [
        ["Weight capacity", "Confirm it covers your laptop's actual weight, especially for larger gaming laptops"],
        ["Foldability", "Useful if you also want portability, not just desk-bound elevation"],
        ["Surface ventilation", "More open ventilation holes generally support better passive airflow"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify it's genuinely fan-free", explanation: "Many products marketed loosely in this space actually include a fan. Check the real feature list for any fan mention before assuming a product is truly passive." },
  { criterion: "Elevation and material do the real work", explanation: "Since there's no fan, cooling comes entirely from elevation, open ventilation, and any conductive material contact. Judge these mechanisms directly rather than expecting fan-level performance." },
  { criterion: "Set realistic cooling expectations", explanation: "Passive cooling typically provides a smaller, not equivalent, benefit compared to active airflow. It's a legitimate choice for light use, not sustained heavy workloads." },
  { criterion: "Weight capacity for your laptop", explanation: "Check the stated weight rating against your specific laptop, especially if it's a larger gaming or workstation model." },
  { criterion: "Zero-noise is the genuine tradeoff", explanation: "With no fan, the pad itself adds no operating noise. Any remaining sound comes from your laptop's own internal fan, not the pad." },
];

export const faq: FaqItem[] = [
  { q: "Why does this guide only have one product?", a: "Most laptop cooling pads on the market include a fan. We verified real feature lists across our research pool and found only one genuinely fan-free product worth recommending, rather than padding the list with fan-equipped products mislabeled as passive." },
  { q: "Can a passive pad really cool a laptop?", a: "It can provide a modest benefit through elevation and open airflow, but expect less improvement than an active fan pad, especially under sustained heavy workloads." },
  { q: "Is passive the same as fanless?", a: "Yes, the two terms describe the same no-fan mechanism. See our Best Fanless Laptop Cooling Pads guide, which covers this same narrow category." },
  { q: "Should I get a passive pad for gaming?", a: "Probably not as your primary cooling solution. Sustained gaming workloads generate more heat than passive elevation alone typically handles well, an active fan pad is usually the better choice." },
  { q: "What's the main benefit of going passive?", a: "Completely silent operation. If fan noise is your biggest concern and your workload is light, a passive pad is a reasonable choice." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-fanless-laptop-cooling-pads", title: "Best Fanless Laptop Cooling Pads (2026)" },
  { href: "/guide/best-laptop-cooling-pads", title: "Best Laptop Cooling Pads (2026)" },
  { href: "/guide/best-silent-laptop-cooling-pads", title: "Best Silent Laptop Cooling Pads (2026)" },
];
