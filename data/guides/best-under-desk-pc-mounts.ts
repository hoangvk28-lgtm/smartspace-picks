export const guideSlug = "best-under-desk-pc-mounts";
export const guideTitle = "4 Best Under-Desk PC Mounts in 2026";
export const metaTitle = "Best Under-Desk PC Mounts (2026)";
export const metaDescription =
  "4 under-desk PC mounts we evaluated for real weight capacity, rear-IO cable access once installed, and airflow, not just spec-sheet claims.";
export const mainKeyword = "under desk pc mount";
export const introParagraphs = [
  "Weight capacity numbers on most under-desk PC mounts are calculated against a generic mid-tower assumption, worth checking your actual tower's weight with drives, a full-size power supply, and any extra cards installed before trusting a rated figure, since a case that looks mid-tower-sized can weigh well beyond what a budget mount is rated to hold.",
  "Rear-IO and cable access matters far more once the PC is actually mounted and in daily use than a mount's static weight rating ever reflects, worth checking whether a mount lets you reach the ports to plug in a new peripheral or troubleshoot a cable without fully unmounting the tower first, since under-desk placement also traps warm air near the floor with limited airflow compared to open desk-side placement.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41GmNtILiJL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "vivo-mount-pc01",
    rank: 1,
    badge: "Best Under-Desk PC Mount Overall",
    name: "VIVO Black Under Desk and Wall Office PC Mount, MOUNT-PC01",
    price: "$34.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "2,617 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41GmNtILiJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01MEDE9WO?tag=deskfinds0d-20",
    description:
      "By far the largest review base of any pick in this guide, this VIVO mount uses a straightforward under-desk or wall-mount bracket appropriate for a standard mid-tower case rather than an oversized modern build.\n\nThe budget price makes it an easy first pick, but verify your specific tower's actual loaded weight, including drives and power supply, against the rated capacity rather than assuming any mid-tower-sized case qualifies.",
    specs: ["Under-desk or wall mount", "Budget price point", "Standard mid-tower fit", "Massive review base"],
    pros: ["Largest review base of any pick, strong long-term reliability signal", "Lowest price in this guide", "Works as either under-desk or wall mount", "Simple, proven bracket design"],
    cons: ["Rated capacity assumes a standard mid-tower, verify against your actual loaded case weight", "Rear-IO access is limited once mounted, plan cable routing before install", "Steel bracket adds some weight to the desk itself"],
    bestFor: "Buyers with a standard mid-tower case wanting the most-proven budget mount",
  },
  {
    id: "vivo-mount-pc04b",
    rank: 2,
    badge: "Best High-Capacity Pick",
    name: "VIVO Heavy Duty Adjustable Under-Desk PC Mount, Supports up to 66 lbs, MOUNT-PC04B",
    price: "$59.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "222 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31t8nBX+HEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DBB2W47P?tag=deskfinds0d-20",
    description:
      "A disclosed 66-pound capacity gives real headroom for a heavier modern tower with multiple drives or a large power supply, closer to what a genuinely loaded case weighs than the generic mid-tower assumption most budget mounts are rated against.\n\nThe secure locking mechanism is worth noting for stability, though rear-IO access still requires some planning since the case sits closer to the desk underside once locked in place.",
    specs: ["Up to 66 lbs capacity", "Secure locking mechanism", "Adjustable design", "Mid-range price"],
    pros: ["66lb capacity covers realistic loaded modern tower weights", "Secure locking beyond simple friction", "Adjustable fit for varied case sizes", "Solid review base and rating"],
    cons: ["Higher price than the most basic mounts", "Rear-IO access still requires some cable-routing planning at install", "Locking mechanism adds a small extra step versus a simple clamp"],
    bestFor: "Buyers with a heavier modern tower needing real headroom above generic mid-tower ratings",
  },
  {
    id: "heavy-duty-77lb-black",
    rank: 3,
    badge: "Best Value Heavy-Capacity Pick",
    name: "Heavy Duty Under Desk PC Holder, Up to 77 lbs Load Capacity, Adjustable Computer Tower Holder",
    price: "$49.90",
    rating: "4.6 stars from Amazon ratings",
    reviews: "433 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31DzC4Wn1JL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGQR4DNJ?tag=deskfinds0d-20",
    description:
      "A 77-pound rated capacity at a mid-range price gives genuine room above what most mid-tower cases weigh even when fully loaded with drives and a full-size power supply.\n\nThe adjustable design accommodates a range of case widths, and the strong rating across a sizable review base is worth weighing against the more basic budget picks that carry lower disclosed capacities.",
    specs: ["Up to 77 lbs capacity", "Adjustable width design", "Strong review rating", "Mid-range price"],
    pros: ["77lb capacity is the highest disclosed rating in this guide", "Strong 4.6-star rating across a sizable review base", "Adjustable fit for varied case widths", "Reasonable price for the stated capacity"],
    cons: ["Verify rear-IO reach with your specific case orientation once mounted", "Steel construction adds meaningful weight to the desk underside", "Adjustment mechanism should be checked for holding position under full load"],
    bestFor: "Buyers wanting the highest disclosed weight capacity at a reasonable price",
  },
  {
    id: "heavy-duty-66lb-black",
    rank: 4,
    badge: "Best Compact Heavy-Duty Pick",
    name: "Heavy Duty Under Desk PC Mount, Height Adjustable, Max Load 66 lbs, Black",
    price: "$45.58",
    rating: "4.8 stars from Amazon ratings",
    reviews: "49 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41uzdCGRrbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G6YWLKQH?tag=deskfinds0d-20",
    description:
      "The highest average rating in this guide, though from a smaller review base, this mount offers a 66-pound capacity with height adjustment for varied case sizes.\n\nGiven the smaller sample size, weigh the strong rating against the larger, more proven review bases of the top two picks before assuming equivalent long-term reliability.",
    specs: ["Max 66 lbs capacity", "Height adjustable", "Highest average rating", "Smaller review base"],
    pros: ["Highest average rating of any pick in this guide", "66lb capacity covers most loaded mid-tower cases", "Height adjustable for varied case sizes", "Compact footprint under the desk"],
    cons: ["Smaller review base limits confidence versus the top two picks", "Verify rear-IO access for your specific case orientation", "Height adjustment range should be checked against your desk clearance"],
    bestFor: "Buyers prioritizing the strongest available rating on a compact, capable mount",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Weight capacity checked against realistic loaded tower weight", description: "Cross-checked disclosed capacity ratings against what a genuinely loaded modern tower, with drives, a full-size power supply, and extra cards, actually weighs, not the generic mid-tower assumption most spec sheets use." },
  { title: "Rear-IO and cable access considered post-installation", description: "Weighed how reachable rear ports are once the PC is actually mounted and in daily use, not just how easy the initial mounting process looks." },
  { title: "Under-desk airflow and thermal impact noted", description: "Noted that under-desk placement traps warm air near the floor with more limited airflow than open desk-side placement, a consideration a mount's weight-capacity spec never addresses." },
  { title: "Mount material and desk-load impact weighed", description: "Weighed steel versus lighter-gauge material construction, since a heavier mount bracket itself adds real load to the desk underside beyond the PC's own weight." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Weigh Your Actual Loaded Tower, Not Just Its Size Category",
    note: "A case that looks mid-tower-sized can weigh well beyond a budget mount's rated capacity once you account for multiple drives, a full-size power supply, and any add-in cards. Weigh or estimate your tower's real loaded weight before trusting a spec-sheet number, especially if it houses a discrete GPU or several storage drives.",
  },
  {
    subheading: "Plan Rear-IO Access Before You Mount, Not After",
    note: "Under-desk mounts make plugging in a new peripheral or troubleshooting a port meaningfully harder once installed, since the case sits recessed and often facing away from easy reach. Decide where your case's rear panel will face relative to your seated position before finalizing mount placement, not after the PC is already up.",
  },
  {
    subheading: "Consider the Airflow Tradeoff of Under-Desk Placement",
    note: "Under-desk placement traps warm air near the floor with more limited airflow than open desk-side placement, which can raise internal temperatures for a PC generating meaningful heat under load. This matters most for a tower with a discrete GPU or multiple drives, less for a lighter general-use build.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Standard mid-tower, most-proven budget option", "VIVO MOUNT-PC01"],
        ["Heavier modern tower needing real headroom", "VIVO MOUNT-PC04B (66 lbs)"],
        ["Highest disclosed weight capacity", "Heavy Duty PC Holder, 77 lbs"],
        ["Strongest available rating on a compact mount", "Heavy Duty PC Mount, 66 lbs"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify weight capacity against your actual loaded tower weight", explanation: "Most rated capacities assume a generic mid-tower, not a modern build with multiple drives and a full-size power supply. Weigh or estimate your case's real loaded weight first." },
  { criterion: "Check rear-IO access with the PC actually installed", explanation: "A mount's static weight rating says nothing about how easily you can reach ports once the tower is mounted and in daily use. Plan cable and port access before installing." },
  { criterion: "Consider the thermal impact of under-desk airflow", explanation: "Under-desk placement traps warm air near the floor with more limited airflow than open desk-side placement, worth factoring in for a tower generating meaningful heat." },
  { criterion: "Factor in mount material and its own added desk load", explanation: "A steel bracket adds real weight to the desk underside beyond the PC itself, worth considering alongside the mount's weight-capacity rating for your case." },
];

export const faq: FaqItem[] = [
  { q: "Is my mid-tower case actually within a mount's rated weight capacity?", a: "Don't assume so from the case size category alone, weigh or estimate your tower's real loaded weight including drives and power supply, then compare it against the mount's disclosed rating." },
  { q: "Can I still reach the rear ports once my PC is mounted under the desk?", a: "It depends on the mount and orientation, plan where the rear panel will face relative to your seated position before installing, since access gets meaningfully harder once mounted." },
  { q: "Does mounting a PC under the desk affect its temperatures?", a: "It can, under-desk placement traps warm air near the floor with more limited airflow than open desk-side placement, which matters most for towers generating meaningful heat under load." },
  { q: "Does the mount itself add noticeable weight to my desk?", a: "Yes, especially steel-construction mounts, worth factoring into your desk's total load alongside the PC's own weight." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-heavy-duty-under-desk-pc-mounts", title: "Best Heavy-Duty Under-Desk PC Mounts (2026)" },
  { href: "/guide/best-adjustable-under-desk-pc-mounts", title: "Best Adjustable Under-Desk PC Mounts (2026)" },
  { href: "/guide/best-under-desk-pc-mount-brackets", title: "Best Under-Desk PC Mount Brackets (2026)" },
];
