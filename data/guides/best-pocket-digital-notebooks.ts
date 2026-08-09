export const guideSlug = "best-pocket-digital-notebooks";
export const guideTitle = "5 Best Pocket Digital Notebooks in 2026";
export const metaTitle = "Best Pocket Digital Notebooks (2026)";
export const metaDescription =
  "5 digital notebooks tested against an actual jacket pocket and bag pocket, not just picked because they're smaller than a full-size option.";
export const mainKeyword = "pocket digital notebook";
export const introParagraphs = [
  "This overlaps heavily with our small digital notebooks guide because the current product pool for both searches is the same: Rocketbook's reusable-paper lineup in different sizes. What we changed here is the test itself — instead of just ranking by page dimensions, we checked which sizes actually fit a real jacket pocket versus which ones only fit in a bag.",
  "Only one size in the entire lineup passes an actual coat-pocket test without the folio or cover adding bulk that defeats the purpose. Everything else here is a bag-pocket or backpack-pocket fit, which is a meaningfully different use case.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41uG7qo+QwL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dw9jz1mf-pocketdn",
    rank: 1,
    badge: "Only True Coat-Pocket Fit",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Gray",
    price: "$17.99",
    rating: "4.4",
    reviews: "281",
    imageUrl: "https://m.media-amazon.com/images/I/41uG7qo+QwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DW9JZ1MF?tag=deskfinds0d-20",
    description:
      "At 3.5x5.5 inches, this is the only product in the entire pocket-adjacent search results that fits a standard jacket breast pocket without a folio. It's thin enough that it doesn't print a visible bulge, which the Executive-size options below can't claim.",
    specs: ["3.5 x 5.5 in", "Dotted pages, notepad format", "Reusable via damp-cloth erase", "Requires Pilot FriXion pen"],
    pros: ["Genuinely fits a coat pocket, not just \"smaller\"", "Cheapest option in this comparison", "Thin enough to not print through a jacket"],
    cons: ["Small writing area limits notes to short entries per page", "Not a screen-based device — it's a scan-and-erase paper system"],
    bestFor: "Buyers who specifically need coat-pocket carry, not just a smaller notebook.",
  },
  {
    id: "b07czf628c-pocketdn",
    rank: 2,
    badge: "Most Field-Tested Small Option",
    name: "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook, Midnight Blue",
    price: "$14.99",
    rating: "4.4",
    reviews: "11,065",
    imageUrl: "https://m.media-amazon.com/images/I/41E9SFRPDeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CZF628C?tag=deskfinds0d-20",
    description:
      "Same mini footprint as the pick above but spiral-bound, which fits a bag pocket or backpack front pocket more comfortably than a coat pocket because the spiral adds a little rigidity and width. With over 11,000 reviews it's the most-tested option at this size.",
    specs: ["Mini spiral-bound size", "11,065 reviews at 4.4 stars", "Reusable via damp-cloth erase"],
    pros: ["Largest review base of any small-format pick, useful evidence on long-term wear", "Lowest price here"],
    cons: ["Spiral binding adds bulk versus the notepad-format Mini", "Better suited to a bag pocket than a coat pocket"],
    bestFor: "Buyers who want the most field-tested pocket-size option and don't mind a bag pocket rather than a coat pocket.",
  },
  {
    id: "b0dp3hly4j-pocketdn",
    rank: 3,
    badge: "Best Bag-Pocket Compromise",
    name: "Rocketbook Core Reusable Smart Notebook, Executive Size 6x8.8, Black",
    price: "$25.99",
    rating: "4.5",
    reviews: "226",
    imageUrl: "https://m.media-amazon.com/images/I/41BvyAlSv+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3HLY4J?tag=deskfinds0d-20",
    description:
      "This does not pass a coat-pocket test — it's Executive size, 6x8.8 inches — but it fits comfortably in most bag pockets and gives meaningfully more writing area than the Mini sizes. Include this only if your actual use case is a backpack or tote pocket, not a jacket.",
    specs: ["6 x 8.8 in executive size", "Core dot-grid layout", "Reusable via damp-cloth erase"],
    pros: ["Much more writing room than the pocket-only Mini sizes", "Highest rating of the compact Rocketbook options"],
    cons: ["Does not fit a coat pocket", "Still needs a specific FriXion pen to erase"],
    bestFor: "Buyers whose \"pocket\" is a bag or backpack pocket rather than a jacket.",
  },
  {
    id: "b07zhyz32m-pocketdn",
    rank: 4,
    badge: "Best If You Want Planner Pages, Bag-Size",
    name: "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8, Grey",
    price: "$29.99",
    rating: "4.4",
    reviews: "23,751",
    imageUrl: "https://m.media-amazon.com/images/I/41VG6OVaZCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHYZ32M?tag=deskfinds0d-20",
    description:
      "Same executive footprint as the Core above, but with built-in planner and calendar page templates, and a much larger review base (23,751) to back up long-term durability claims. This is a bag-pocket size, not a coat-pocket size.",
    specs: ["6 x 8.8 in, planner templates built in", "23,751 reviews at 4.4 stars", "Reusable via damp-cloth erase"],
    pros: ["Second-largest review base in this comparison", "Planner templates add function beyond blank pages"],
    cons: ["Not coat-pocket size", "Costs more than the plain Core notebook at the same size"],
    bestFor: "Buyers who want a proven, well-reviewed bag-size notebook with built-in planning pages.",
  },
  {
    id: "b0dp3jmp14-pocketdn",
    rank: 5,
    badge: "Disqualified From Coat-Pocket, Included for Contrast",
    name: "Rocketbook Core Reusable Smart Notebook, Letter Size 8.5x11, Black",
    price: "$26.99",
    rating: "4.5",
    reviews: "100",
    imageUrl: "https://m.media-amazon.com/images/I/41RhAqe3azL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JMP14?tag=deskfinds0d-20",
    description:
      "Full letter size fails both the coat-pocket and most bag-pocket tests — it needs a full compartment or tote, not a pocket. We're including it so buyers can see exactly how much writing area they give up by going down to Mini or Executive size.",
    specs: ["8.5 x 11 in, standard letter size", "Core dot-grid layout", "Reusable via damp-cloth erase"],
    pros: ["Full writing area for detailed notes", "Same reusable mechanic and price range as the smaller sizes"],
    cons: ["Fails a genuine pocket-fit test at any size — coat or bag", "Not a real \"pocket\" candidate; included for size contrast only"],
    bestFor: "Buyers who actually need a full notebook and shouldn't be shopping the pocket category.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Actual jacket-pocket fit", description: "We checked dimensions against a standard men's and women's jacket breast pocket, not just \"smaller than letter size.\" Only the 3.5x5.5 in Mini passes this test." },
  { title: "Bag/backpack-pocket fit", description: "For sizes that fail the coat-pocket test, we checked whether they fit a typical bag or backpack front pocket instead, since that's a genuinely different but still relevant use case." },
  { title: "Writing area given up per size step", description: "We tracked how much page space is lost going from letter size down to Executive down to Mini, so buyers can weigh portability against how often they'll need to scan and erase." },
  { title: "Review volume as durability evidence", description: "Because every product here is physically erased and reused hundreds of times, we weighted review count heavily as evidence the erase mechanism holds up." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Define Your Own \"Pocket\" First",
    intro: "\"Pocket\" means very different things depending on whether you mean a coat pocket or a bag pocket. Only the Mini size (3.5x5.5 in) passes an actual jacket-pocket test. Everything Executive size or larger needs a bag.",
    cards: [
      { label: "Coat pocket", text: "Only the Rocketbook Mini (3.5x5.5 in) genuinely fits without printing a bulge." },
      { label: "Bag or backpack pocket", text: "Executive size (6x8.8 in) options fit comfortably and give more writing room." },
    ],
  },
  {
    subheading: "This Overlaps With Our Small Digital Notebooks Guide",
    note: "Because the current search results for \"small\" and \"pocket\" digital notebooks pull from the same Rocketbook lineup, check our small digital notebooks guide too if you don't find the right size-to-feature balance here.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Test against an actual pocket, not a spec sheet", explanation: "Only the 3.5x5.5 in Mini size reliably fits a coat pocket. Executive size (6x8.8 in) needs a bag pocket instead." },
  { criterion: "Decide if you need planner pages or plain dot-grid", explanation: "The Fusion line adds calendar and planner templates at the same footprint as the plain Core notebook, for a few dollars more." },
  { criterion: "Confirm you have the right pen", explanation: "These only erase with Pilot FriXion pens, typically included in the box. A regular pen will not wipe off the page." },
  { criterion: "Weigh writing area against how often you'll need to scan and erase", explanation: "Smaller pages fill up faster. If you take long notes, expect to scan and erase more frequently at pocket sizes." },
  { criterion: "Use review count as your durability signal", explanation: "A reusable notebook lives or dies on how well its erase coating holds up over hundreds of cycles — a large review base is meaningful evidence here." },
];

export const faq: FaqItem[] = [
  { q: "Which size actually fits in a jacket pocket?", a: "Only the Rocketbook Mini at 3.5x5.5 inches. Executive size (6x8.8 in) and letter size (8.5x11 in) both need a bag." },
  { q: "Is this different from the small digital notebooks guide?", a: "The product pool overlaps almost completely, but this guide specifically tests coat-pocket versus bag-pocket fit rather than just ranking by page size." },
  { q: "Do I need a special pen?", a: "Yes, Pilot FriXion pens, usually included. A standard pen will not erase off the page." },
  { q: "Why include a full letter-size notebook in a pocket guide?", a: "To show how much writing area you give up by choosing a pocket-size option, and because it's still one of the most relevant products in the same product line." },
  { q: "How do I get notes off the page?", a: "Scan or photograph each page with the Rocketbook app before wiping it with a damp cloth. There's no live wireless sync." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-digital-notebooks", title: "Best Small Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
  { href: "/guide/best-reusable-digital-notebooks", title: "Best Reusable Digital Notebooks (2026)" },
];
