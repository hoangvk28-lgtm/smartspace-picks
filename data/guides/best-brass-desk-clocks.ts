export const guideSlug = "best-brass-desk-clocks";
export const guideTitle = "5 Best Brass Desk Clocks in 2026";
export const metaTitle = "Best Brass Desk Clocks (2026)";
export const metaDescription =
  "5 desk clocks compared for actual brass or brass-toned metal construction, since \"brass\" in a listing title can mean solid metal or simply a brass-colored finish.";
export const mainKeyword = "brass desk clock";
export const introParagraphs = [
  "Genuine solid brass desk clocks are less common than brass-toned or brass-finish clocks. We checked each listing's described construction and flagged where a product is metal with a brass-like finish rather than confirmed solid brass.",
  "This category overlaps somewhat with our gold desk clocks guide, since brass and gold finishes look similar and often come from the same manufacturers.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41k3GTPieAL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07wmvhp2j-brassclock",
    rank: 1,
    badge: "Best Overall",
    name: "Maxspace Metal Golden Table Clock, Retro Vintage Non-Ticking Small Alarm Clock",
    price: "$19.99",
    rating: "4.4",
    reviews: "1,700",
    imageUrl: "https://m.media-amazon.com/images/I/41k3GTPieAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07WMVHP2J?tag=deskfinds0d-20",
    description: "A genuine metal body clock in a brass-adjacent gold tone, with the largest review base and highest rating in this comparison, non-ticking for quiet desk use.",
    specs: ["Metal body, gold/brass-toned finish", "Non-ticking movement", "1,700 reviews at 4.4 stars"],
    pros: ["Largest review base and highest rating in this comparison", "Non-ticking movement for quiet work"],
    cons: ["Verify current listing for exact brass vs. brass-toned finish"],
    bestFor: "Buyers who want the most proven brass-toned clock at a reasonable price.",
  },
  {
    id: "b0cfdws9r8-brassclock",
    rank: 2,
    badge: "Best Vintage Mantel Style",
    name: "HZDHCLH Vintage Table Clock Battery Operated, Retro Mantel Clock",
    price: "$29.99",
    rating: "4.3",
    reviews: "62",
    imageUrl: "https://m.media-amazon.com/images/I/41k3GTPieAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CFDWS9R8?tag=deskfinds0d-20",
    description: "A mantel-style vintage clock with brass-tone detailing, battery operated, at a higher price than the basic table clocks in this comparison but with a smaller review base.",
    specs: ["Mantel-style, vintage design", "Battery operated", "62 reviews at 4.3 stars"],
    pros: ["More substantial mantel-style design than basic table clocks"],
    cons: ["Much smaller review base than the top pick"],
    bestFor: "Buyers who want a more substantial vintage mantel-style piece.",
  },
  {
    id: "b09sb6zy4p-brassclock",
    rank: 3,
    badge: "Cheapest Option",
    name: "rjuwurv Metal Desk Clock, Retro Bedroom Table Vintage Analog Alarm Clock",
    price: "$9.99",
    rating: "4.4",
    reviews: "1,512",
    imageUrl: "https://m.media-amazon.com/images/I/41k3GTPieAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SB6ZY4P?tag=deskfinds0d-20",
    description: "A genuine metal body clock at the lowest price in this comparison, with a large, well-established review base for the price point.",
    specs: ["Metal body", "Retro analog design", "1,512 reviews at 4.4 stars"],
    pros: ["Cheapest option with a genuine metal body", "Large, proven review base"],
    cons: ["Basic design compared to the mantel-style options"],
    bestFor: "Budget-focused buyers who want a proven metal clock.",
  },
  {
    id: "b0dk6r22kd-brassclock",
    rank: 4,
    badge: "Most Premium",
    name: "QIYAODECO Vintage Table Clock Silent Mantel Gold Analog 8.3×9.1in",
    price: "$39.99",
    rating: "4.2",
    reviews: "63",
    imageUrl: "https://m.media-amazon.com/images/I/41k3GTPieAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DK6R22KD?tag=deskfinds0d-20",
    description: "The largest, most premium option in this comparison, a mantel-style clock with a silent movement, at the highest price and a smaller review base.",
    specs: ["8.3 x 9.1 in, mantel style", "Silent movement", "63 reviews at 4.2 stars"],
    pros: ["Largest, most substantial piece in this comparison", "Silent movement"],
    cons: ["Highest price and smallest review base"],
    bestFor: "Buyers who want the most substantial mantel-style piece and don't mind the premium.",
  },
  {
    id: "b07pyn9yzn-brassclock",
    rank: 5,
    badge: "Best Flip-Style Alternative",
    name: "mooas Flip Desk Clock (Black), Retro Vintage Design Auto Flip Table Clock",
    price: "$39.90",
    rating: "4.4",
    reviews: "822",
    imageUrl: "https://m.media-amazon.com/images/I/41k3GTPieAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07PYN9YZN?tag=deskfinds0d-20",
    description: "A genuinely different mechanism — an auto-flip display rather than a traditional dial — with brass-adjacent retro styling, at a solid review base for its category.",
    specs: ["Auto-flip mechanism", "Retro vintage design", "822 reviews at 4.4 stars"],
    pros: ["Distinctive flip mechanism, not just another traditional dial", "Solid review base"],
    cons: ["Same price tier as the mantel-style option above without the same substantial size"],
    bestFor: "Buyers who want a genuinely different flip-clock mechanism in a vintage brass-toned aesthetic.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified brass vs. brass-toned finish per listing", description: "We checked each product's described construction and flagged where confirmation of solid brass versus a brass-colored finish wasn't clear." },
  { title: "Price against design substance", description: "We compared value from basic $9.99 metal clocks up to $39.99 mantel-style pieces." },
  { title: "Movement type and mechanism", description: "We noted where a clock uses a distinctive mechanism (like the auto-flip mooas pick) versus a standard dial." },
  { title: "Review volume and rating together", description: "We weighted both metrics, since some budget options have far larger, more proven review histories than pricier alternatives." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Brass vs. Gold Desk Clocks",
    note: "This category overlaps substantially with our gold desk clocks guide, since brass and gold finishes look similar and are sometimes sold interchangeably by the same manufacturers. Check both guides for the fullest range of options.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm solid brass vs. brass-toned finish", explanation: "Verify the current listing's construction details before assuming solid brass — many products are metal with a brass-colored finish rather than solid brass." },
  { criterion: "Weigh price against design substance", explanation: "This category ranges from under $10 basic clocks to nearly $40 mantel-style pieces — decide what tier fits your desk." },
  { criterion: "Consider a non-ticking or silent movement", explanation: "Several picks here specifically advertise quiet movements, useful for a desk near focused work." },
  { criterion: "Check overlap with our gold desk clocks guide", explanation: "Brass and gold finishes are similar enough that checking both guides may surface more options." },
  { criterion: "Weigh review volume for confidence at each price tier", explanation: "The cheapest and most proven options here have much larger review bases than the pricier mantel-style picks." },
];

export const faq: FaqItem[] = [
  { q: "Are these solid brass or brass-colored?", a: "Verify the current listing for each product — most are metal with a brass-toned finish rather than confirmed solid brass construction." },
  { q: "Which is the most proven option?", a: "The Maxspace Metal Golden Table Clock, with 1,700 reviews at 4.4 stars." },
  { q: "What's the cheapest option?", a: "The rjuwurv Metal Desk Clock at $9.99." },
  { q: "Is there a non-traditional clock mechanism available?", a: "Yes, the mooas Flip Desk Clock uses an auto-flip display mechanism instead of a standard dial." },
  { q: "How does this overlap with your gold desk clocks guide?", a: "Substantially — brass and gold finishes are visually similar and often made by the same manufacturers, so check both guides for the full range of options." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-gold-desk-clocks", title: "Best Gold Desk Clocks (2026)" },
  { href: "/guide/best-bronze-desk-clocks", title: "Best Bronze Desk Clocks (2026)" },
  { href: "/guide/best-desk-clocks", title: "Best Desk Clocks (2026)" },
];
