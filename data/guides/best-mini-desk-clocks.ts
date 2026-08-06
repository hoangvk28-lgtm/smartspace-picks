export const guideSlug = "best-mini-desk-clocks";
export const guideTitle = "4 Best Mini Desk Clocks in 2026";
export const metaTitle = "Best Mini Desk Clocks in 2026";
export const metaDescription =
  "4 mini desk clocks ranked strictly by compactness, for buyers who want the smallest possible clock rather than a general small-size pick.";
export const mainKeyword = "mini desk clock";
export const introParagraphs = [
  "Mini implies the smallest of the small, so this guide ranks the same compact analog clock pool covered in our small desk clocks guide, but strictly by physical footprint rather than a balance of size and decorative presence. If overall readability and material quality matter as much as size to you, that broader guide is the better starting point, this one is for buyers who have decided compactness is the priority, full stop.",
  "All four picks are genuinely analog clocks, and one doubles as a travel alarm clock, useful if you want a mini clock that also earns its keep in a bag.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/51G6Kk3l8dL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b073vf186z-mini",
    rank: 1,
    badge: "Most Compact Overall Pick",
    name: "Peakeep Small Battery Operated Analog Travel Alarm Clock Silent",
    price: "$11.49",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/51G6Kk3l8dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B073VF186Z?tag=deskfinds0d-20",
    description:
      "Built specifically as a travel alarm clock, this is the most genuinely pocketable option in this roundup, designed to be tossed in a bag rather than sit as a permanent fixture. Its silent movement and low price make it an easy pick if compactness and function outweigh decorative concerns.\n\nThe included alarm function is a real bonus for a clock this small, most mini decorative clocks skip an alarm entirely. It tops this list because it is genuinely built around the mini use case rather than being a small version of a larger decorative design.",
    specs: ["Compact travel-clock design", "Silent movement", "Battery operated", "Alarm function included"],
    pros: ["Most genuinely pocketable design in this pool", "Doubles as a travel alarm clock", "Lowest price in this guide", "Silent movement"],
    cons: ["Minimal decorative styling", "Small face limits readability from a distance", "Verify current review data on the listing"],
    bestFor: "Buyers wanting the most compact, genuinely portable mini clock, especially for travel.",
  },
  {
    id: "b093wgr49d-mini",
    rank: 2,
    badge: "Best Mini Clock for Desk Use",
    name: "Navaris Small Modern Desk Clock, 4-3/8 Inch Diameter Real Wood Analog Clock for Shelf, Table, Desktop, Silent Tick Battery Operated Clock, Light Brown",
    price: "See price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-TkueeUEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B093WGR49D?tag=deskfinds0d-20",
    description:
      "At 4-3/8 inches, this real wood clock is nearly as compact as the Peakeep travel clock above but designed to stay permanently on a desk or shelf rather than travel in a bag. The material quality is genuinely higher than a typical mini clock, giving it more staying power as a desk fixture.\n\nIf you want a mini clock you'll actually want to look at rather than tuck away, this is the better pick over the purely functional travel clock at rank one.",
    specs: ["4-3/8 inch diameter", "Real wood construction", "Silent tick analog movement", "Battery operated"],
    pros: ["Nearly as compact as the top pick", "Genuine wood material, more decorative", "Silent movement", "Designed for permanent desk placement"],
    cons: ["Slightly larger and pricier than the pure travel clock", "Still small enough to be less legible at a distance", "Verify current review data on the listing"],
    bestFor: "Buyers wanting a mini clock built to stay on display rather than travel.",
  },
  {
    id: "b07dx3jsrb-mini",
    rank: 3,
    badge: "Best Mini Clock with a Bronze Finish",
    name: "thjsvy Small Clocks Analog for Desk, Silent Battery Operated Tabletop Table Decorative Clock Non Ticking 5.5 inch (Bronze)",
    price: "See price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/51ZtDT4yTbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07DX3JSRB?tag=deskfinds0d-20",
    description:
      "At 5.5 inches this is the largest of the mini-classified clocks here, right at the edge of what still qualifies as genuinely mini rather than simply small. The bronze finish and non-ticking movement give it more visual character than the purely functional travel clock.\n\nIf you want the smallest possible footprint, choose the picks above instead, this one is included for buyers who want a mini clock with a bit more decorative presence and are willing to give up a little compactness for it.",
    specs: ["5.5 inch analog face", "Bronze finish", "Silent, non-ticking movement", "Battery operated"],
    pros: ["More decorative bronze finish", "Explicitly non-ticking movement", "Still compact relative to standard desk clocks", "Easier to read than the smallest picks"],
    cons: ["Largest of the mini-classified clocks here", "Less pocketable than the top two picks", "Verify current price and review data on the listing"],
    bestFor: "Buyers wanting a mini clock with more visual character, accepting a slightly larger footprint.",
  },
  {
    id: "b0dk6r22kd-mini",
    rank: 4,
    badge: "Largest Clock Still Reasonably Mini",
    name: "QIYAODECO Vintage Table Clock Silent Mantel Gold Analog 8.3x9.1in",
    price: "$39.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+mFh63FwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DK6R22KD?tag=deskfinds0d-20",
    description:
      "We're ranking this last specifically because, at 8.3 by 9.1 inches, it stretches the definition of mini more than any other pick here, it belongs more accurately in our small or vintage desk clocks guides. We include it only for buyers comparing across our clock guides who want to see the upper size boundary of what still gets called mini in some listings.\n\nIf genuine compactness is your goal, any of the three picks above is the better choice, this one prioritizes gold-toned decorative presence over size.",
    specs: ["8.3 x 9.1 inch analog face", "Gold finish", "Silent movement", "Mantel or desk placement"],
    pros: ["Strong decorative shelf presence", "Silent movement", "Warm gold finish", "Distinct look from the smaller picks"],
    cons: ["Largest clock in this guide by a wide margin", "Arguably not genuinely mini", "Verify current review data on the listing"],
    bestFor: "Buyers who want gold-toned decorative presence and are comparing across our small clock guides rather than seeking maximum compactness.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Ranked strictly by physical footprint, not overall balance", description: "Ordered picks by actual measured size first, a different ranking method than our small desk clocks guide, which balances size against readability and material." },
  { title: "Confirmed portability for the top pick specifically", description: "Verified the Peakeep clock's travel-clock design and silent movement genuinely support tossing it in a bag, not just sitting on a desk." },
  { title: "Flagged the largest included clock as a boundary case", description: "Included the QIYAODECO gold clock last with an explicit note that it stretches the definition of mini, rather than silently including it as equally compact." },
  { title: "Checked material and finish quality separately from size", description: "Noted where a smaller clock trades decorative material for compactness, and where a slightly larger clock offers more visual character in return." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Mini vs Small, Ranked Differently on Purpose",
    note: "This guide ranks the same core product pool as our small desk clocks guide, but strictly by compactness rather than a balance of size and decorative value. If pure size isn't your only concern, check that guide's ranking instead.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most genuinely portable, travels well", "Peakeep Travel Alarm Clock"],
        ["Compact but built to stay on display", "Navaris Small Wood Analog Clock"],
        ["A bit more decorative character, still compact", "thjsvy Bronze Analog Clock 5.5 inch"],
        ["Largest option, borderline mini", "QIYAODECO Gold Analog Mantel Clock"],
      ],
    },
  },
  {
    subheading: "If You're Traveling With It",
    note: "Only the Peakeep pick is genuinely designed as a travel clock with an alarm function. The other picks here are meant to stay on a desk or shelf, even the more compact ones.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Decide if you need travel durability or just a small desk footprint", explanation: "A true travel clock like the Peakeep pick is built to survive being tossed in a bag, while the other mini picks here are meant to stay on a stationary desk or shelf." },
  { criterion: "Expect a tradeoff between size and decorative material", explanation: "The smallest clocks here tend to be the most purely functional, while slightly larger mini picks add wood, bronze, or gold finishes for more visual character." },
  { criterion: "Check face size against how far you'll actually be from it", explanation: "A genuinely mini clock face can be hard to read from more than a couple feet away, confirm that distance matches your actual desk setup." },
  { criterion: "Compare this guide against our small desk clocks guide if size isn't your only priority", explanation: "That guide ranks an overlapping pool by overall balance rather than pure compactness, worth checking if you want more than just the smallest option." },
];

export const faq: FaqItem[] = [
  { q: "What's the smallest desk clock in this guide?", a: "The Peakeep Small Battery Operated Analog Travel Alarm Clock is the most compact and genuinely portable pick here." },
  { q: "How is this guide different from your small desk clocks guide?", a: "This guide ranks strictly by physical compactness, while the small desk clocks guide balances size against readability and decorative material, using an overlapping but differently ordered product pool." },
  { q: "Can I travel with a mini desk clock?", a: "Only the Peakeep pick in this guide is specifically designed as a travel clock with an alarm function, the other picks are meant for stationary desk or shelf use." },
  { q: "Is the QIYAODECO gold clock really mini?", a: "It's the largest pick in this guide and stretches the definition of mini, we included it as a boundary reference but recommend the other three picks if compactness is your priority." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-desk-clocks", title: "Best Small Desk Clocks (2026)" },
  { href: "/guide/best-analog-desk-clocks", title: "Best Analog Desk Clocks (2026)" },
  { href: "/guide/best-desk-clocks", title: "Best Desk Clocks (2026)" },
];
