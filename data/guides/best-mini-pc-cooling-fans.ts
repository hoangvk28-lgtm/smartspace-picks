export const guideSlug = "best-mini-pc-cooling-fans";
export const guideTitle = "7 Best Mini PC Cooling Fans in 2026";
export const metaTitle = "Best Mini PC Cooling Fans (2026)";
export const metaDescription =
  "7 compact USB cooling fans we evaluated for Mini PCs, with honest notes on airflow direction, noise ratings, and mounting compatibility.";
export const mainKeyword = "mini PC cooling fans";
export const introParagraphs = [
  "Standalone Mini PC cooling fans are different from cooling stands and pads because the fan is the product, not part of a support platform. Their usefulness depends on where the fan sits, where it points, how it attaches, and whether the directed airflow reaches an actual intake or exhaust instead of simply moving room air around the chassis.",
  "Worth noting upfront: none of the fans in this guide are marketed exclusively for Mini PCs. They're general-purpose compact USB fans also sold for routers, TV boxes, and game consoles, which is genuinely how most buyers use them since dedicated Mini PC-only fans are rare. This guide compares seven based on attachment method, airflow direction, noise rating, and power source.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41lX2RvlrbL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07r659j8z-mpcf",
    rank: 1,
    badge: "Best Overall Pick",
    name: "Wathai Cooling Case Fan, 120mm x 25mm, 5V USB",
    price: "$15.99",
    rating: "4.6",
    reviews: "1,542",
    imageUrl: "https://m.media-amazon.com/images/I/41lX2RvlrbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07R659J8Z?tag=deskfinds0d-20",
    description:
      "This 120mm USB fan is explicitly marketed for Mini PCs alongside routers, modems, and Xbox consoles, and its listing states a specific noise figure of 23 dBA along with a 56.7 CFM airflow rating. Both numbers give you something concrete to compare against other fans rather than relying on a vague quiet claim.\n\nIt includes a protective net, mounting screws, and foot columns, so it can sit freestanding on a desk or be more permanently positioned near a Mini PC's vent. At 1500 RPM it's rated for a relatively low, steady speed rather than high-RPM aggressive cooling.",
    specs: ["120mm x 120mm x 25mm", "5V 0.2A, 1500 RPM", "56.7 CFM airflow, 23 dBA noise", "Sleeve bearing, 35,000 hour rated life"],
    pros: ["Specific CFM and dBA figures instead of vague marketing claims", "Explicitly lists Mini PC as an intended use", "Includes mounting hardware for a more permanent setup", "Long rated bearing life"],
    cons: ["120mm size needs more desk space than the smaller 40mm fans in this list", "Freestanding placement means it can be bumped or moved accidentally", "No adjustable speed control, runs at a single rated RPM"],
    bestFor: "Buyers who want documented airflow and noise numbers rather than a vague quiet claim.",
  },
  {
    id: "b0fqmp5zf8-mpcf",
    rank: 2,
    badge: "Best Documented Noise Rating",
    name: "GSCOLER X1 USB Cooling Fan, 18dB Ultra Quiet",
    price: "$9.99",
    rating: "4.3",
    reviews: "73",
    imageUrl: "https://m.media-amazon.com/images/I/41DGdx-u6QL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FQMP5ZF8?tag=deskfinds0d-20",
    description:
      "This 120mm fan lists an 18dB noise rating, quieter than the Wathai above on paper, alongside a stated 20 percent temperature drop and 55.8 CFM airflow. The listing explicitly names Mini PC among its intended devices, along with routers, PS5, and streaming boxes.\n\nFour shock-absorbing pads and a built-in 20.87 inch USB cable let it sit flat or upright in a tight space. With a smaller review base than some other picks here, treat the exact dBA figure as a manufacturer claim worth confirming against your own experience.",
    specs: ["130mm x 130mm x 48.6mm", "120mm fan, 850 RPM, 55.8 CFM", "18dB(A) rated noise", "Integrated 20.87in USB cable, 40,000 hour rated life"],
    pros: ["Lowest stated noise rating in this guide", "Explicitly lists Mini PC as an intended device", "Built-in cable simplifies setup", "Withstands up to 11 lbs of weight per the listing"],
    cons: ["Smaller review base (73 ratings) than several other picks", "850 RPM is on the lower end, less airflow than higher-RPM options", "Shock pads help but the housing is described as ABS plastic, less durable than metal-framed alternatives"],
    bestFor: "Noise-sensitive desks where the lowest possible fan sound matters more than maximum airflow.",
  },
  {
    id: "b0gjj6p1ft-mpcf",
    rank: 3,
    badge: "Best Adjustable Speed Control",
    name: "Marame Quiet Router Cooling Fan Stand, 3 Adjustable Speeds",
    price: "$13.29",
    rating: "4.9",
    reviews: "22",
    imageUrl: "https://m.media-amazon.com/images/I/41B3e-6btEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GJJ6P1FT?tag=deskfinds0d-20",
    description:
      "This 120mm fan includes a 3-speed switch (low, medium, high), letting you dial down noise for light use and increase airflow for sustained workloads on the same device. Eight rubber shock-absorbing feet aim to reduce vibration buzz, a detail smaller fans in this list don't mention.\n\nIts 4.9-star rating is the highest here, though with only 22 ratings it's too small a sample to weigh as heavily as the higher-volume picks above. The metal safety grille doubles as scratch protection for whatever sits on top of it.",
    specs: ["120mm fan", "3-speed switch: low/medium/high", "8 anti-vibration rubber feet", "Metal safety wire grille"],
    pros: ["Adjustable 3-speed control on one unit", "Anti-vibration feet reduce buzz and desk noise", "Metal grille protects against scratches and finger contact", "Highest star rating in this guide"],
    cons: ["Very small review base (22 ratings), less statistically reliable than the top picks", "Long flexible cable can add desk clutter if not routed carefully", "No stated CFM or dBA figures to compare directly against the Wathai or GSCOLER"],
    bestFor: "Buyers who want to switch between quiet and high-airflow modes on the same fan rather than buying two.",
  },
  {
    id: "b0fj24t3km-mpcf",
    rank: 4,
    badge: "Best Value 2-Pack",
    name: "Easy Cloud 120mm USB Fan, 3 Speeds, 2-Pack",
    price: "$19.49",
    rating: "4.5",
    reviews: "225",
    imageUrl: "https://m.media-amazon.com/images/I/41dzDJ+4mTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FJ24T3KM?tag=deskfinds0d-20",
    description:
      "This listing includes two 120mm fans for under $20 total, useful if you want to cool both intake and exhaust sides of a Mini PC setup, or simply want a spare. Eight anti-vibration feet and a 3-speed controller are included on each unit.\n\nMaximum speed is rated at 2000 RPM, on the higher end of this list, with a stated low-speed mode for bedroom or office use. Dual-ball bearings are pitched for quiet, stable long-term operation.",
    specs: ["120mm fan x2", "3-speed controller, up to 2000 RPM", "8 anti-vibration feet per fan", "Dual-ball bearings"],
    pros: ["Two fans for under $20 total", "Higher max RPM than several single-fan alternatives", "Anti-vibration feet on each unit", "Can be positioned at both intake and exhaust simultaneously"],
    cons: ["No specific CFM or dBA figures published", "Higher top speed likely means more noise at max setting", "225 ratings is a moderate but not large sample"],
    bestFor: "Buyers who want to cool two locations on their setup, or keep a spare, without buying two separate listings.",
  },
  {
    id: "b08zy7x4cr-mpcf",
    rank: 5,
    badge: "Best Compact Dual-Fan Pick",
    name: "ELUTENG Dual 40mm USB Fan, 3 Speeds",
    price: "$12.99",
    rating: "4.4",
    reviews: "2,005",
    imageUrl: "https://m.media-amazon.com/images/I/41ylokGU3jL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08ZY7X4CR?tag=deskfinds0d-20",
    description:
      "This is two 40mm fans on one USB cord, small enough to tuck into a tight gap next to a Mini PC rather than sitting as a large freestanding unit. The listing notes some audible noise at higher speeds given the small fan size, which is a fair tradeoff for the compact footprint.\n\nWith over 2,000 ratings it has the largest review base of the compact 40mm options here, and the 3-speed control lets you back off noise when the extra airflow isn't needed.",
    specs: ["40mm x 40mm x 25mm fans, dual", "3-speed control (low/medium/high)", "Metal frame with finger safety protection", "Hydraulic bearing motor"],
    pros: ["Small enough to fit tight gaps a 120mm fan can't", "Large review base for a compact fan", "Dual fans cool from two angles at once", "3-speed adjustability"],
    cons: ["Small fan size means audible noise at higher speeds per the listing", "Lower airflow volume than the 120mm options in this list", "No specific CFM or dBA rating published"],
    bestFor: "Tight desk setups where a full-size 120mm fan won't physically fit next to the Mini PC.",
  },
  {
    id: "b07cnj4dyx-mpcf",
    rank: 6,
    badge: "Quietest Documented 40mm Pick",
    name: "AC Infinity MULTIFAN Mini, Compact 40mm x 20mm USB Fan",
    price: "$14.99",
    rating: "4.4",
    reviews: "1,146",
    imageUrl: "https://m.media-amazon.com/images/I/31OMXsv3wWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CNJ4DYX?tag=deskfinds0d-20",
    description:
      "AC Infinity states specific figures for this fan, 12 CFM airflow and 18 dBA noise, at a compact 40mm size that fits in a small gap beside a Mini PC. Dual-ball bearings are rated for a 67,000 hour lifespan, notably longer than several other picks here.\n\nA multi-speed controller lets you trade airflow for quiet, and it can sit flat or stand upright depending on your setup. As with the ELUTENG dual-fan pick, expect lower total airflow than a 120mm fan given the smaller size.",
    specs: ["40mm x 40mm x 20mm", "12 CFM airflow, 18 dBA noise", "Dual-ball bearings, 67,000 hour rated life", "Multi-speed controller"],
    pros: ["Specific CFM and dBA figures published", "Longest rated bearing lifespan in this guide", "Fits flat or upright depending on desk layout", "Established brand with a large review base"],
    cons: ["Lower total airflow than the 120mm fans in this list, appropriate mainly for smaller devices", "Single fan versus the dual-fan ELUTENG at a similar price", "Small size limits how much heat it can move from a larger Mini PC chassis"],
    bestFor: "Buyers who want a documented, reputable-brand compact fan for a tight space and don't need maximum airflow.",
  },
  {
    id: "b071jb9wyb-mpcf",
    rank: 7,
    badge: "Best Budget Pick",
    name: "ELUTENG 40mm USB Fan with 3 Speed Control",
    price: "$9.99",
    rating: "4.3",
    reviews: "1,149",
    imageUrl: "https://m.media-amazon.com/images/I/41cEKT7EI6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B071JB9WYB?tag=deskfinds0d-20",
    description:
      "The lowest-priced fan in this guide at under $10, this single 40mm unit offers 3-speed control with stated CFM figures ranging from 3.5 to 4.4 depending on speed. It's a reasonable low-risk way to test whether directed airflow near your Mini PC's vents makes a noticeable difference before spending more.\n\nA metal grill protects the blades and cable, and it's rated for 5V/1A max input, with the listing warning that exceeding that can damage the motor. At this size and price, treat it as a supplementary spot-cooling fan rather than a primary cooling solution.",
    specs: ["40mm fan", "3-speed: 3.5/3.88/4.4 CFM at 3.5/4.2/5V", "Metal grill front", "100cm USB cable"],
    pros: ["Lowest price in this guide", "Specific CFM figures at each speed setting", "Metal grill protects cable and hands", "Compact enough for tight spaces"],
    cons: ["Lowest airflow figures of any pick in this guide", "Best suited as supplementary spot cooling, not a primary solution", "Requires care not to exceed the 5V/1A input rating"],
    bestFor: "Buyers on a tight budget who want to test directed spot-cooling before investing in a larger fan.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Placement effectiveness", description: "We evaluated whether each fan can be aimed at a real Mini PC intake or exhaust instead of relying on broad desk airflow." },
  { title: "Documented performance figures", description: "We gave more weight to listings that state specific CFM airflow or dBA noise numbers over vague quiet or powerful claims." },
  { title: "Mounting and size flexibility", description: "We compared 40mm compact fans against 120mm larger fans for fit in different desk setups and gap sizes." },
  { title: "Power and cable setup", description: "We considered USB power draw, cable length, and whether powering the fan from the Mini PC creates an unnecessary port tradeoff." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "These Are General-Purpose Fans, Not Mini PC-Exclusive",
    note: "Every fan in this guide is also sold for routers, TV boxes, game consoles, and other small electronics. That's genuinely how most Mini PC owners source cooling fans, since dedicated Mini PC-only fan products are rare. Compatibility comes down to physical placement, not a device-specific design.",
  },
  {
    subheading: "Choose by Space Available",
    table: {
      headers: ["Available space", "Recommended pick"],
      rows: [
        ["Full desk space, freestanding fan is fine", "Wathai 120mm Cooling Case Fan"],
        ["Tight gap next to the Mini PC", "ELUTENG Dual 40mm USB Fan or AC Infinity MULTIFAN Mini"],
        ["Want to cool two spots at once", "Easy Cloud 120mm USB Fan, 2-Pack"],
      ],
    },
  },
  {
    subheading: "Aim Airflow at the Right Place",
    table: {
      headers: ["Airflow target", "Why it matters"],
      rows: [
        ["Cool-air intake", "Can improve the temperature of air entering the chassis"],
        ["Hot-air exhaust area", "Can help prevent exhaust from recirculating near the case"],
        ["Closed chassis panel", "Usually less useful than targeting a vent directly"],
      ],
    },
  },
  {
    subheading: "Balance Noise and Documented Performance",
    table: {
      headers: ["Priority", "What to look for"],
      rows: [
        ["Quietest possible operation", "GSCOLER X1 (18dB rated) or AC Infinity MULTIFAN Mini (18dBA rated)"],
        ["Maximum stated airflow", "Wathai 120mm (56.7 CFM) or GSCOLER X1 (55.8 CFM)"],
        ["Adjustable on the fly", "Marame or Easy Cloud, both with 3-speed switches"],
      ],
    },
  },
  {
    subheading: "Plan the Power Setup",
    table: {
      headers: ["Power source", "Tradeoff"],
      rows: [
        ["USB from Mini PC", "Simple, but occupies a port and draws power from the host"],
        ["Separate USB adapter or power bank", "Keeps Mini PC ports free but adds a cable and outlet"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Look for a documented CFM figure", explanation: "Airflow claims without a CFM number are hard to compare. The Wathai (56.7 CFM) and GSCOLER X1 (55.8 CFM) publish specific figures, while several budget picks don't, making direct comparison harder for those." },
  { criterion: "Look for a documented dBA figure", explanation: "A stated noise rating, like the GSCOLER X1's 18dB or the Wathai's 23dBA, is more trustworthy than a generic 'quiet' claim with no number attached." },
  { criterion: "Match fan size to available space", explanation: "A 120mm fan moves more air but needs more desk room. A 40mm fan fits tight gaps but moves noticeably less air per the CFM figures in this guide." },
  { criterion: "Targeted airflow direction matters more than fan count", explanation: "A fan should blow toward an intake or help hot exhaust move away from the chassis. General ambient airflow can feel noticeable without producing a meaningful temperature change inside the Mini PC." },
  { criterion: "Check the USB power rating before connecting", explanation: "Several fans in this guide specify a max input like 5V/1A. Exceeding it, per one listing's own warning, can damage the fan's motor, so confirm your USB source matches the rating." },
];

export const faq: FaqItem[] = [
  { q: "Are these fans made specifically for Mini PCs?", a: "No. All seven are general-purpose compact USB fans also marketed for routers, TV boxes, and game consoles. That's the normal way most Mini PC owners source a cooling fan, since dedicated Mini PC-only fans are uncommon." },
  { q: "Where should I place a Mini PC cooling fan?", a: "Place it so airflow reaches the Mini PC's real intake or helps hot exhaust move away. Avoid blowing against a closed panel while leaving the intake starved for air." },
  { q: "Is a 120mm fan always better than a 40mm fan?", a: "Not necessarily. A 120mm fan moves more air per the CFM figures in this guide, but a 40mm fan fits tight gaps a larger fan physically cannot, which matters more in a cramped desk setup." },
  { q: "How much fan noise is acceptable?", a: "That depends on your desk environment. Fans with a stated dBA rating, like the GSCOLER X1 at 18dB, give you a number to compare rather than guessing from a vague 'quiet' claim." },
  { q: "Should I power the fan from the Mini PC?", a: "USB power is convenient but uses a port and draws power from the host. A separate USB adapter or power bank keeps your Mini PC's ports free." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-external-cooling-fans-for-mini-pcs", title: "Best External Cooling Fans for Mini PCs (2026)" },
  { href: "/guide/best-mini-pc-cooling-stands", title: "Best Mini PC Cooling Stands (2026)" },
  { href: "/guide/best-mini-pc-stands-with-fans", title: "Best Mini PC Stands with Fans (2026)" },
];
