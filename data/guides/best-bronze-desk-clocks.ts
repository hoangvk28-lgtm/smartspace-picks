export const guideSlug = "best-bronze-desk-clocks";
export const guideTitle = "5 Best Bronze Desk Clocks in 2026";
export const metaTitle = "Best Bronze Desk Clocks (2026)";
export const metaDescription =
  "5 bronze and bronze-toned desk clocks compared by actual price and construction, spanning budget metal clocks to genuine bronze-finish mantel pieces.";
export const mainKeyword = "bronze desk clock";
export const introParagraphs = [
  "We checked each listing's described construction rather than assuming every product using \"bronze\" in its title has the same material quality. Prices range from under $13 for basic metal clocks to nearly $60 for a genuine bronze-finish revolving mantel piece.",
  "This overlaps with our brass and gold desk clocks guides, since these warm metal finishes are visually similar and often sold by overlapping manufacturers.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41KKs7gB4tL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0csk1prgv-bronzeclock",
    rank: 1,
    badge: "Best Overall",
    name: "FOUNTAIN DESIGNS 9\" Genevieve Mantel Clock with Revolving Pendulum, Bronze",
    price: "$59.99",
    rating: "4.1",
    reviews: "46",
    imageUrl: "https://m.media-amazon.com/images/I/41KKs7gB4tL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CSK1PRGV?tag=deskfinds0d-20",
    description: "A confirmed bronze finish with a genuine revolving pendulum mechanism, the most substantial mantel-style piece in this comparison.",
    specs: ["9 inch mantel clock, bronze finish", "Genuine revolving pendulum", "46 reviews at 4.1 stars"],
    pros: ["Confirmed bronze finish with genuine pendulum mechanism", "Most substantial piece in this comparison"],
    cons: ["Highest price of the confirmed-bronze options here"],
    bestFor: "Buyers who want a genuine bronze-finish mantel clock with a real moving mechanism.",
  },
  {
    id: "b0g785c5d9-bronzeclock",
    rank: 2,
    badge: "Best Silent Small Option",
    name: "NIKKY HOME Vintage Bronze Small Table Clock, Silent Decorative Desk Clock",
    price: "$28.98",
    rating: "4.0",
    reviews: "6",
    imageUrl: "https://m.media-amazon.com/images/I/41EgSE7MtOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G785C5D9?tag=deskfinds0d-20",
    description: "A genuinely bronze-labeled small table clock with a silent movement, though with a very small review sample worth noting.",
    specs: ["Small table clock, bronze finish", "Silent movement", "6 reviews at 4.0 stars"],
    pros: ["Confirmed bronze in the product name", "Silent movement for quiet desk use"],
    cons: ["Very small review base — read current feedback carefully"],
    bestFor: "Buyers who want a small, quiet bronze-finish table clock and accept the limited review history.",
  },
  {
    id: "b0cfdws9r8-bronzeclock",
    rank: 3,
    badge: "Best Vintage Mantel Style",
    name: "HZDHCLH Vintage Table Clock Battery Operated, Retro Mantel Clock",
    price: "$29.99",
    rating: "4.3",
    reviews: "62",
    imageUrl: "https://m.media-amazon.com/images/I/51vOzTtxG9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CFDWS9R8?tag=deskfinds0d-20",
    description: "A vintage mantel-style piece with bronze-adjacent tones, battery operated, at a solid rating with a moderate review base.",
    specs: ["Mantel-style, vintage design", "Battery operated", "62 reviews at 4.3 stars"],
    pros: ["Solid rating with a reasonable review base", "Substantial mantel-style presence"],
    cons: ["Verify current listing for exact bronze vs. bronze-adjacent finish"],
    bestFor: "Buyers who want a moderately priced vintage mantel piece with bronze-toned styling.",
  },
  {
    id: "b08cmpgyn9-bronzeclock",
    rank: 4,
    badge: "Best Alarm-Equipped Mantel Clock",
    name: "Presentime Lewis Mantel Alarm Clock",
    price: "$24.99",
    rating: "4.2",
    reviews: "447",
    imageUrl: "https://m.media-amazon.com/images/I/41n3D2P5IpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08CMPGYN9?tag=deskfinds0d-20",
    description: "The largest review base among the mantel-style options in this comparison, combining a bronze-toned finish with alarm functionality.",
    specs: ["Mantel style, bronze-toned finish", "Alarm function", "447 reviews at 4.2 stars"],
    pros: ["Largest review base among mantel-style options here", "Combines decorative mantel styling with alarm functionality"],
    cons: ["If you want a genuinely alarm-free clock, this isn't it"],
    bestFor: "Buyers who want a proven mantel-style clock and don't mind alarm functionality.",
  },
  {
    id: "b06xrxn7qt-bronzeclock",
    rank: 5,
    badge: "Best Budget Option",
    name: "Königswerk Vintage Analog Alarm Clock",
    price: "$12.99",
    rating: "4.4",
    reviews: "3,530",
    imageUrl: "https://m.media-amazon.com/images/I/41QEWuh36ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B06XRXN7QT?tag=deskfinds0d-20",
    description: "The cheapest and by far the most-reviewed option in this comparison, a vintage-styled analog clock with bronze-adjacent tones.",
    specs: ["Vintage analog design", "3,530 reviews at 4.4 stars"],
    pros: ["Cheapest option in this comparison, by a wide margin", "Largest, most proven review base in this entire comparison"],
    cons: ["Verify current listing for exact bronze tone versus general vintage finish"],
    bestFor: "Budget-focused buyers who want the most proven vintage-toned clock available.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified bronze vs. bronze-adjacent finish per listing", description: "We checked whether \"bronze\" appears directly in the product name and description, flagging where it's more of a general vintage-toned finish." },
  { title: "Real price spread across this category", description: "We compared value from under $13 basic clocks to nearly $60 mantel pieces with genuine moving mechanisms." },
  { title: "Silent movement noted where confirmed", description: "We flagged where a product specifically advertises silent operation, relevant for desk placement." },
  { title: "Review volume weighted heavily, especially for small-sample options", description: "We noted where a bronze-labeled product has a very small review base, worth reading current feedback on before buying." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "This Overlaps With Our Brass and Gold Desk Clocks Guides",
    note: "Bronze, brass, and gold finishes are visually similar warm metal tones often sold by overlapping manufacturers. Check our brass desk clocks and gold desk clocks guides for additional options.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify \"bronze\" is confirmed, not just a general vintage tone", explanation: "Check the current listing for explicit bronze naming versus a more general vintage-toned description." },
  { criterion: "Weigh price against mechanism substance", explanation: "This category ranges from under $13 basic clocks to nearly $60 mantel pieces with genuine pendulum mechanisms." },
  { criterion: "Consider a silent movement if desk noise matters", explanation: "The NIKKY HOME pick specifically advertises silent operation." },
  { criterion: "Weigh review volume heavily, especially for small-sample listings", explanation: "Some bronze-specific listings here have very small review bases — read current feedback carefully before buying." },
  { criterion: "Check overlap with brass and gold guides", explanation: "These warm metal tones are visually similar and often made by the same manufacturers — check both other guides for the fullest range." },
];

export const faq: FaqItem[] = [
  { q: "Which is the most proven overall?", a: "The Königswerk Vintage Analog Alarm Clock, with 3,530 reviews at 4.4 stars, by far the largest review base in this comparison." },
  { q: "Which has a confirmed bronze finish?", a: "The FOUNTAIN DESIGNS Genevieve Mantel Clock and the NIKKY HOME Vintage Bronze Table Clock both confirm bronze directly in their product names." },
  { q: "What's the cheapest option?", a: "The Königswerk Vintage Analog Alarm Clock at $12.99." },
  { q: "Is there a genuine moving mechanism option?", a: "Yes, the FOUNTAIN DESIGNS bronze mantel clock has a confirmed revolving pendulum." },
  { q: "How does this overlap with your brass and gold guides?", a: "Substantially — bronze, brass, and gold are visually similar warm metal finishes often from overlapping manufacturers. Check both other guides for more options." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-brass-desk-clocks", title: "Best Brass Desk Clocks (2026)" },
  { href: "/guide/best-gold-desk-clocks", title: "Best Gold Desk Clocks (2026)" },
  { href: "/guide/best-desk-clocks", title: "Best Desk Clocks (2026)" },
];
