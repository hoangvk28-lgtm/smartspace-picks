export const guideSlug = "best-wooden-desk-clocks";
export const guideTitle = "2 Best Wooden Desk Clocks in 2026";
export const metaTitle = "Best Wooden Desk Clocks (2026)";
export const metaDescription =
  "An honest, short guide to genuinely wood-material desk clocks. Only two verified real-wood picks turned up in our research, here they are.";
export const mainKeyword = "wooden desk clock";
export const introParagraphs = [
  "Many desk clocks marketed with a wood-look or walnut-style finish are actually plastic or composite material printed to resemble wood grain, which makes shopping for a genuinely wood-material clock harder than it should be. Rather than pad this guide with wood-look products we couldn't verify as real wood, we're covering only the two clocks in our research pool with confirmed wood construction.",
  "Both picks below take different approaches, a small minimalist analog clock built entirely from wood, and a flip clock that pairs a wood base with an electronic display. If neither fits your style, our modern and vintage desk clock guides cover a wider range of materials and finishes.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "5 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-TkueeUEL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b093wgr49d-wood",
    rank: 1,
    badge: "Best Overall Wooden Desk Clock",
    name: "Navaris Small Modern Desk Clock, 4-3/8 Inch Diameter Real Wood Analog Clock for Shelf, Table, Desktop, Silent Tick Battery Operated Clock, Light Brown",
    price: "See price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-TkueeUEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B093WGR49D?tag=deskfinds0d-20",
    description:
      "This is a genuinely wood-built clock, the listing confirms real wood construction rather than a printed wood-look finish, at a compact 4-3/8 inch diameter. The light brown tone shows real wood grain in a way plastic alternatives cannot replicate.\n\nThe silent tick movement makes it comfortable to keep close on a desk, and its small size means it adds warmth to a workspace without demanding much room. It leads this short list as the more purely wood-focused of the two picks here.",
    specs: ["4-3/8 inch diameter", "Real wood construction", "Silent tick analog movement", "Battery operated"],
    pros: ["Confirmed real wood material, not a printed finish", "Silent movement, no ticking distraction", "Compact size for tight desks", "Genuine wood grain visible in the finish"],
    cons: ["Small face limits visual impact from a distance", "Fewer wood-tone options available at this size", "Verify current review data on the listing"],
    bestFor: "Buyers wanting a genuinely wood-built, compact, silent analog clock.",
  },
  {
    id: "b0crbjj6w4-wood",
    rank: 2,
    badge: "Best Wood-Base Flip Clock",
    name: "FOSA Flip Desk Clock, Black",
    price: "$51.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41yZW1xjgmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRBJJ6W4?tag=deskfinds0d-20",
    description:
      "Unlike the fully wood-built pick above, this flip clock pairs a walnut wood base with a black flip display and electronic movement, so the wood construction covers the base rather than the entire housing. It still gives real wood material presence on a desk, just combined with a different display style.\n\nThe silent electronic movement avoids the mechanical click of some flip clocks, and the wood base adds a furniture-like grounding to what is otherwise a display-forward design. It suits buyers who want wood material alongside a flip-clock display rather than a fully analog wood clock.",
    specs: ["Walnut wood base", "Silent electronic movement", "Black flip display", "Desk placement"],
    pros: ["Confirmed wood base material", "Silent movement, no mechanical click", "Combines wood material with flip-clock styling", "Distinct look from a fully wood clock"],
    cons: ["Wood covers only the base, not the full housing", "Higher price than the fully wood pick above", "Verify current review data on the listing"],
    bestFor: "Buyers wanting wood material combined with flip-clock display styling rather than a fully analog wood clock.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified genuine wood material from listing details before including any product", description: "Confirmed real wood construction claims in the product listing rather than assuming a wood-look finish or wood-toned plastic qualifies." },
  { title: "Declined to pad the list with wood-look plastic clocks", description: "Kept this guide to only the two confirmed wood-material products in our research pool rather than stretching wood-toned finishes to inflate the count." },
  { title: "Distinguished full wood construction from a wood base or accent", description: "Called out clearly which pick is entirely wood-built versus which uses wood only as a base component." },
  { title: "Compared movement type and noise level for both picks", description: "Checked silent movement on both clocks, since a genuinely wood-material clock is often sat close to a desk where noise matters." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why This Guide Is Short",
    note: "Genuinely wood-material desk clocks are less common than wood-look plastic or composite finishes, and our verified research pool turned up only two confirmed real-wood products. We'd rather give you two accurate picks than pad this list with unverifiable wood-look items.",
  },
  {
    subheading: "Full Wood Construction vs a Wood Base",
    cards: [
      { label: "Entirely wood-built", text: "The Navaris clock's housing and face surround are real wood throughout." },
      { label: "Wood base with a different display", text: "The FOSA flip clock uses wood only for its base, with an electronic flip display above it." },
    ],
  },
  {
    subheading: "If Neither Pick Fits Your Style",
    note: "See our modern desk clocks guide for a wider material range, or our marble desk clocks guide if you want a different premium material entirely.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check listing language for confirmed wood, not just a wood-look description", explanation: "Many desk clocks describe a wood-look or wood-style finish without actually using wood material. Look for explicit real wood or solid wood language before assuming." },
  { criterion: "Decide if you want full wood construction or a wood accent", explanation: "A fully wood-built clock and a clock with only a wood base look and feel different, decide which matters more before choosing." },
  { criterion: "Wood clocks are less common, expect a smaller selection", explanation: "This is a genuinely thin category compared to plastic and quartz-standard clocks, don't assume you'll find the same range of sizes and styles as other materials." },
  { criterion: "Match wood tone to your existing desk furniture", explanation: "A light brown wood clock pairs differently with your desk than a darker walnut tone, check the finish color against your actual furniture before buying." },
];

export const faq: FaqItem[] = [
  { q: "Why does this guide only have two products?", a: "Genuinely wood-material desk clocks, confirmed real wood rather than a wood-look plastic finish, are a small category in our verified research. We chose accuracy over padding the list." },
  { q: "How do I know if a desk clock is really made of wood?", a: "Check the listing for explicit language like real wood or solid wood construction. A wood-look or wood-style description often means a printed plastic or composite finish instead." },
  { q: "Is the FOSA flip clock fully made of wood?", a: "No, only its base is wood, the display housing above it is a separate electronic flip mechanism." },
  { q: "What if I want more wood clock options?", a: "Our research didn't turn up additional confirmed wood-material desk clocks at this time, check our modern or marble desk clock guides for other genuine material options." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-modern-desk-clocks", title: "Best Modern Desk Clocks (2026)" },
  { href: "/guide/best-flip-desk-clocks", title: "Best Flip Desk Clocks (2026)" },
  { href: "/guide/best-marble-desk-clocks", title: "Best Marble Desk Clocks (2026)" },
];
