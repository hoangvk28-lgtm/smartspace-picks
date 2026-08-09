export const guideSlug = "best-mini-pc-mounts-for-tvs";
export const guideTitle = "5 Best Mini PC Mounts for TVs in 2026";
export const metaTitle = "Best Mini PC Mounts for TVs (2026)";
export const metaDescription =
  "5 VESA-compatible mounts suited to attaching a mini PC behind a wall-mounted TV, sharing VESA holes or mounting to a nearby pole/surface.";
export const mainKeyword = "mount mini PC to back of TV";
export const introParagraphs = [
  "Our original candidate ASINs for this article were no longer valid, so we researched the current real product pool. Mounting a mini PC behind a TV means either sharing the TV's VESA mounting holes with the mount bracket, or mounting nearby to a pole or the wall itself.",
  "We prioritized mounts that explicitly support behind-monitor/behind-display placement, since that's the closest documented use case to behind-TV mounting.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31L4FiZcVdL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dzbpr859-tvmount",
    rank: 1,
    badge: "Best Overall",
    name: "Yimaut Adjustable Mini PC Vesa Mount Bracket Behind Monitor, Under Desk",
    price: "$21.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31L4FiZcVdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DZBPR859?tag=deskfinds0d-20",
    description: "Explicitly designed for behind-display mounting, supports up to 12 lbs, and lists wide device compatibility including HP, Dell, KAMRUI, Mac Mini, and GMKtec devices — verify weight and VESA compatibility with your specific TV mount.",
    specs: ["Fits 0.63-2.8 in device width", "Supports up to 12 lbs", "Behind-monitor/display mounting"],
    pros: ["Explicitly designed for behind-display mounting", "Wide brand compatibility claimed"],
    cons: ["No review history available yet on this specific listing"],
    bestFor: "Buyers who want a mount explicitly designed for behind-display placement.",
  },
  {
    id: "b07ky3lhvg-tvmount",
    rank: 2,
    badge: "Most Proven",
    name: "HumanCentric Thin Client Mount Bracket Mini PC VESA Monitor Arm, Under Desk",
    price: "$26.99",
    rating: "4.4",
    reviews: "702",
    imageUrl: "https://m.media-amazon.com/images/I/41nWvL8pqlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KY3LHVG?tag=deskfinds0d-20",
    description: "The largest review base in this comparison, supports both major VESA patterns and multiple mounting locations including pole mounting, which can help route around a wall-mounted TV setup.",
    specs: ["Fits 0.65-2.55 in device depth", "75x75 and 100x100mm VESA", "702 reviews at 4.4 stars"],
    pros: ["Largest, most proven review base in this comparison", "Pole-mounting option for flexible placement near a wall-mounted TV"],
    cons: ["Higher price than the budget options"],
    bestFor: "Buyers who want the most proven bracket for a behind-TV setup.",
  },
  {
    id: "b0cj7bk9cm-tvmount",
    rank: 3,
    badge: "Best Dedicated Wall/VESA Option",
    name: "Monzlteck Adjustable Small Device Wall Mount Or VESA Mount Behind the Monitor",
    price: "$19.99",
    rating: "4.6",
    reviews: "190",
    imageUrl: "https://m.media-amazon.com/images/I/31l-EL12D-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJ7BK9CM?tag=deskfinds0d-20",
    description: "Explicitly supports both wall mounting and behind-monitor VESA mounting, the highest rating in this comparison, useful for buyers who want to mount directly to the wall near a TV rather than sharing VESA holes.",
    specs: ["Wall mount or VESA behind-monitor mount", "190 reviews at 4.6 stars"],
    pros: ["Highest rating in this comparison", "Explicit wall-mounting option, useful if you don't want to share TV VESA holes"],
    cons: ["Smaller review base than the HumanCentric pick"],
    bestFor: "Buyers who prefer mounting to the wall directly rather than sharing the TV's VESA holes.",
  },
  {
    id: "b076n6b6gq-tvmount",
    rank: 4,
    badge: "Best From an Established Hardware Brand",
    name: "StarTech Thin Client Mount, Adjustable .7 to 2.8\", Mac Mini Monitor Mount",
    price: "$32.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41Ohj6NQqpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B076N6B6GQ?tag=deskfinds0d-20",
    description: "From StarTech, an established computer-hardware brand, with multiple mounting options including behind-display, at the highest price in this comparison.",
    specs: ["Fits 0.7-2.8 in device depth", "Behind-monitor, pole, or under-desk mount"],
    pros: ["From a well-established computer-hardware brand", "Multiple mounting configurations"],
    cons: ["Highest price in this comparison", "No review history available yet"],
    bestFor: "Buyers who want a trusted brand for their behind-TV mounting setup.",
  },
  {
    id: "b0f66mhhwh-tvmount",
    rank: 5,
    badge: "Best Compact Bracket",
    name: "Mini PC Thin Client Adjustable Mounting Bracket - Compact VESA Wall/Desk Hanging Stand",
    price: "$33.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31NPNbWgygL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F66MHHWH?tag=deskfinds0d-20",
    description: "A compact VESA bracket supporting both wall and desk-hanging configurations, useful for tight spaces behind a wall-mounted TV where a bulkier bracket won't fit.",
    specs: ["Compact VESA bracket", "Wall or desk-hanging configuration"],
    pros: ["Compact design suited to tight behind-TV spaces"],
    cons: ["Highest price of the compact options, with no review history yet"],
    bestFor: "Buyers with limited clearance behind their wall-mounted TV.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Re-verified the actual current product pool", description: "Our original candidate ASINs were no longer accessible, so we confirmed real, currently listed products before ranking anything." },
  { title: "Behind-display mounting explicitly confirmed", description: "We prioritized mounts specifically described for behind-monitor or behind-display placement, the closest documented use case to behind-TV mounting." },
  { title: "Wall-mounting alternative noted", description: "We flagged where a bracket supports direct wall mounting, useful if a buyer doesn't want to share the TV's own VESA holes." },
  { title: "Weight capacity and device compatibility", description: "We compared stated weight limits and device depth ranges against typical mini PC dimensions." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Sharing VESA Holes vs. Separate Wall Mounting",
    cards: [
      { label: "Behind-display VESA mounting", text: "The bracket shares the TV's existing VESA mount holes — check your TV mount's weight capacity accounts for the added mini PC." },
      { label: "Separate wall mounting", text: "The bracket mounts directly to the wall near the TV, avoiding any TV-mount weight concerns entirely." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check your TV mount's weight capacity if sharing VESA holes", explanation: "Adding a mini PC bracket to your TV's existing VESA mount adds weight — verify your TV mount's rated capacity accounts for this." },
  { criterion: "Consider a separate wall mount if unsure about TV mount capacity", explanation: "The Monzlteck pick supports direct wall mounting, avoiding any question about your TV mount's weight limits." },
  { criterion: "Verify device depth clearance behind the TV", explanation: "Wall-mounted TVs often sit close to the wall — confirm your mini PC and bracket combination fits in the available clearance." },
  { criterion: "Weigh established brand reputation against price", explanation: "StarTech and HumanCentric are more established brands; some cheaper newer listings lack extensive review history yet." },
  { criterion: "Plan cable routing before finalizing your mount choice", explanation: "HDMI and power cables need a path from the mini PC to your TV and outlet — consider this alongside the physical mount." },
];

export const faq: FaqItem[] = [
  { q: "Will this share my TV's existing wall mount?", a: "Several picks here explicitly support behind-monitor/display VESA mounting, which would share the TV's mount holes — verify weight capacity before combining them." },
  { q: "Is there an option that mounts separately from the TV?", a: "Yes, the Monzlteck pick supports direct wall mounting as an alternative to sharing the TV's VESA holes." },
  { q: "Which has the most reviews?", a: "The HumanCentric Thin Client Mount Bracket, with 702 reviews at 4.4 stars." },
  { q: "What's the best option for tight clearance behind the TV?", a: "The compact VESA bracket from the Mini PC Thin Client listing, designed for tight wall/desk spaces." },
  { q: "Do I need to worry about my mini PC's weight?", a: "Yes — verify the bracket's stated weight capacity against your specific mini PC and check that your TV mount (if sharing VESA holes) can handle the added weight too." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pc-desk-mounts", title: "Best Mini PC Desk Mounts (2026)" },
  { href: "/guide/best-mini-pc-mounts-behind-monitors", title: "Best Mini PC Mounts Behind Monitors (2026)" },
  { href: "/guide/best-mini-pc-mounts", title: "Best Mini PC Mounts (2026)" },
];
