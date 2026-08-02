export const guideSlug = "best-horizontal-under-desk-pc-mounts";
export const guideTitle = "4 Best Horizontal Under-Desk PC Mounts in 2026";
export const metaTitle = "Best Horizontal Under-Desk PC Mounts (2026)";
export const metaDescription =
  "4 vertical/horizontal under-desk PC mounts we evaluated for the extra clearance horizontal mounting needs, cable routing, and case airflow orientation.";
export const mainKeyword = "horizontal under desk pc mount";
export const introParagraphs = [
  "Horizontal orientation requires meaningfully more under-desk clearance width and depth than vertical mounting, worth measuring your desk's actual under-desk space before assuming any mount that supports horizontal orientation will physically fit, and cable routing differs in this orientation since ports face a different direction relative to where you sit, worth verifying realistic cable-access ergonomics rather than assuming it matches vertical mounting.",
  "Airflow through a horizontally-oriented case can differ from how the case was originally designed, since some cases are optimized for vertical airflow specifically, worth noting this thermal consideration, and heavy graphics cards not designed for horizontal mounting can experience sag differently since gravity now pulls in a different direction relative to the PCIe slot, a genuine consideration for a GPU-equipped tower.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41H5F8LUWzL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "putorsen-full-mid",
    rank: 1,
    badge: "Best Horizontal Mount Overall",
    name: "PUTORSEN Under Desk PC Mount for Full/Mid-Tower Cases, Vertical/Horizontal CPU Holder up to 77 lbs",
    price: "$37.49",
    rating: "4.3 stars from Amazon ratings",
    reviews: "44 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41H5F8LUWzL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GWGZCWWX?tag=deskfinds0d-20",
    description:
      "Explicitly supports both vertical and horizontal orientation for full and mid-tower cases, with a genuinely high 77-pound rated capacity, appropriate for buyers wanting horizontal mounting without sacrificing weight headroom.\n\nHorizontal orientation on this mount needs meaningfully more under-desk width and depth than the vertical setting, measure your available under-desk space before ordering rather than assuming it fits based on the mount's compact vertical footprint alone.",
    specs: ["Vertical or horizontal orientation", "Up to 77 lbs capacity", "Full/mid-tower compatible", "Budget-friendly price"],
    pros: ["Explicit vertical and horizontal orientation support", "High 77lb capacity in either orientation", "Budget-friendly price for the capacity", "Fits full and mid-tower cases"],
    cons: ["Horizontal orientation needs meaningfully more under-desk clearance", "Verify case airflow design is suited to horizontal orientation", "GPU sag risk in horizontal orientation for heavier graphics cards"],
    bestFor: "Buyers wanting genuine horizontal orientation flexibility at a budget price",
  },
  {
    id: "putorsen-mid-mini",
    rank: 2,
    badge: "Best for Mid/Mini-Tower Horizontal Mounting",
    name: "PUTORSEN Under Desk PC Mount for Mid/Mini-Tower Cases, Vertical/Horizontal CPU Holder up to 77 lbs",
    price: "$37.98",
    rating: "4.3 stars from Amazon ratings",
    reviews: "44 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31FzJr+WRPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DZXWGNRY?tag=deskfinds0d-20",
    description:
      "The mid and mini-tower focused sibling of our top pick, offering the same vertical or horizontal orientation flexibility and 77-pound capacity but sized for smaller cases needing meaningfully less under-desk clearance in horizontal mode.\n\nCable routing in horizontal orientation still differs from vertical, ports face a different direction relative to your seated position, verify realistic access before committing to horizontal mounting.",
    specs: ["Vertical or horizontal orientation", "Up to 77 lbs capacity", "Mid/mini-tower compatible", "Smaller footprint than full-tower version"],
    pros: ["Vertical or horizontal orientation for smaller cases", "High 77lb capacity for a mid/mini-tower mount", "Smaller footprint needs less clearance than the full-tower version", "Same budget-friendly price point"],
    cons: ["Still requires more clearance in horizontal mode than vertical", "Not sized for full-tower cases", "Verify cable-access ergonomics for horizontal port orientation"],
    bestFor: "Buyers with a mid or mini-tower case wanting horizontal mounting with less clearance need",
  },
  {
    id: "77lb-value-horiz",
    rank: 3,
    badge: "Best High-Capacity Adjustable Pick",
    name: "Heavy Duty Under Desk PC Holder, Up to 77 lbs Load Capacity, Adjustable Computer Tower Holder",
    price: "$49.90",
    rating: "4.6 stars from Amazon ratings",
    reviews: "433 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31DzC4Wn1JL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGQR4DNJ?tag=deskfinds0d-20",
    description:
      "Adjustable and rated for 77 pounds with a strong review base, this mount's adjustable design accommodates horizontal positioning for buyers with limited vertical under-desk space, though verify orientation flexibility specifics against your exact clearance.\n\nDust accumulation on the now-upward-facing top surface is a genuine consideration for horizontal orientation, worth factoring into cleaning routines that a vertically-mounted side panel wouldn't need.",
    specs: ["Up to 77 lbs capacity", "Adjustable positioning", "Strong review base", "Mid-range price"],
    pros: ["High 77lb capacity with a strong, sizable review base", "Adjustable design accommodates varied desk clearance", "Strong 4.6-star rating", "Reasonable price for the capacity"],
    cons: ["Verify orientation flexibility specifics against your exact under-desk space", "Dust accumulates on the upward-facing top surface in horizontal mode", "Airflow design suited to the case's original vertical orientation may be affected"],
    bestFor: "Buyers wanting high capacity and adjustability for a horizontal setup",
  },
  {
    id: "66lb-highrated-horiz",
    rank: 4,
    badge: "Best Compact Pick for Limited Clearance",
    name: "Heavy Duty Under Desk PC Mount, Height Adjustable, Max Load 66 lbs, Black",
    price: "$45.58",
    rating: "4.8 stars from Amazon ratings",
    reviews: "49 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41uzdCGRrbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G6YWLKQH?tag=deskfinds0d-20",
    description:
      "The highest average rating in this guide, this compact mount suits buyers with genuinely limited under-desk depth who need to keep the horizontal footprint as small as possible while still holding a 66-pound rated case.\n\nAs with any horizontal mount, verify your specific case's cooling design tolerates the orientation change, since some cases are optimized for vertical airflow and horizontal mounting can shift thermal performance.",
    specs: ["Max 66 lbs capacity", "Height adjustable", "Highest average rating", "Compact footprint"],
    pros: ["Highest average rating in this guide", "Compact footprint suits limited under-desk clearance", "66lb capacity covers most mid-tower cases", "Height adjustable for varied positioning"],
    cons: ["Smaller review base than the higher-volume picks", "Verify case cooling design tolerates horizontal orientation", "66lb capacity is lower than the 77lb picks in this guide"],
    bestFor: "Buyers with limited under-desk clearance wanting the strongest available rating",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Under-desk clearance requirements checked for horizontal mode", description: "Checked that horizontal orientation requires meaningfully more under-desk clearance width and depth than vertical mounting, against common desk dimensions." },
  { title: "Cable routing ergonomics verified for horizontal port orientation", description: "Verified realistic cable-access ergonomics given that ports face a different direction relative to the user in horizontal orientation compared to vertical." },
  { title: "Case airflow orientation impact considered", description: "Noted that airflow through a horizontally-oriented case may differ from the case's originally intended vertical airflow design, a real thermal consideration." },
  { title: "GPU sag and dust accumulation in horizontal mode noted", description: "Noted that heavy graphics cards not designed for horizontal mounting can sag differently, and dust accumulates on the now-upward-facing top surface differently than vertical side panels." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Measure Your Under-Desk Clearance Before Choosing Horizontal",
    note: "Horizontal orientation requires meaningfully more under-desk width and depth than vertical mounting. Measure your actual available under-desk space against the mount's horizontal footprint dimensions, not just its compact vertical footprint, before ordering.",
  },
  {
    subheading: "Check Cable Access From the Horizontal Orientation",
    note: "Ports face a different direction relative to where you sit once a case is mounted horizontally. Verify realistic cable-access ergonomics for your specific desk layout rather than assuming it matches how you'd reach ports on a vertically-mounted case.",
  },
  {
    subheading: "Consider Airflow and GPU Sag in Horizontal Mode",
    note: "Some cases are optimized specifically for vertical airflow, and horizontal mounting can shift thermal performance. A heavy graphics card not designed for horizontal mounting can also sag differently since gravity now pulls in a different direction relative to the PCIe slot.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Full/mid-tower horizontal mounting", "PUTORSEN Full/Mid-Tower Mount"],
        ["Mid/mini-tower with less clearance needed", "PUTORSEN Mid/Mini-Tower Mount"],
        ["Highest capacity with adjustability", "Heavy Duty PC Holder, 77 lbs"],
        ["Limited clearance, strongest rating", "Heavy Duty PC Mount, 66 lbs"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Measure under-desk clearance for horizontal orientation specifically", explanation: "Horizontal mounting needs meaningfully more width and depth than vertical, verify against your actual desk dimensions before ordering." },
  { criterion: "Verify cable access from the horizontal port orientation", explanation: "Ports face a different direction relative to you in horizontal mode, confirm realistic day-to-day cable access for your desk layout." },
  { criterion: "Check whether your case's cooling design suits horizontal orientation", explanation: "Some cases are optimized for vertical airflow specifically, horizontal mounting can shift thermal performance, worth noting for a case generating meaningful heat." },
  { criterion: "Consider GPU sag risk in horizontal mode", explanation: "A heavy graphics card not designed for horizontal mounting can sag differently since gravity pulls in a different direction relative to the PCIe slot." },
];

export const faq: FaqItem[] = [
  { q: "Does a horizontal PC mount need more space than a vertical one?", a: "Yes, meaningfully more under-desk width and depth, measure your actual available space against the mount's horizontal footprint before ordering." },
  { q: "Will cable access be harder with a horizontally mounted PC?", a: "It can be different, ports face a different direction relative to where you sit, verify realistic access for your specific desk layout before committing to horizontal mounting." },
  { q: "Does horizontal mounting affect my PC's cooling?", a: "It can, some cases are optimized for vertical airflow specifically, so horizontal orientation may shift thermal performance for a case generating meaningful heat." },
  { q: "Is horizontal mounting bad for my graphics card?", a: "It can increase sag risk for a heavy GPU not designed for horizontal mounting, since gravity pulls in a different direction relative to the PCIe slot." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-under-desk-gaming-pc-mounts", title: "Best Under-Desk Gaming PC Mounts (2026)" },
  { href: "/guide/best-heavy-duty-under-desk-pc-mounts", title: "Best Heavy-Duty Under-Desk PC Mounts (2026)" },
  { href: "/guide/best-under-desk-pc-tower-holders", title: "Best Under-Desk PC Tower Holders (2026)" },
];
