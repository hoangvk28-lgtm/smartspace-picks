export const guideSlug = "best-small-digital-notebooks";
export const guideTitle = "5 Best Small Digital Notebooks in 2026";
export const metaTitle = "Best Small Digital Notebooks (2026)";
export const metaDescription =
  "5 small digital notebooks compared by actual footprint and writing area, after finding the current search results are dominated by Rocketbook's reusable-paper lineup rather than E Ink tablets.";
export const mainKeyword = "small digital notebook";
export const introParagraphs = [
  "Every current product that shows up for \"small digital notebook\" turned out to be a Rocketbook reusable-paper notebook in a different size, not a compact E Ink tablet. That's a real finding, not a coincidence: E Ink devices like the reMarkable and Kindle Scribe are built around a fixed 10-11 inch writing surface, so \"small\" in this category almost always means a smaller reusable paper notebook you erase with a damp cloth, not a smaller electronic screen.",
  "We set a real size cutoff instead of just repeating whichever product had \"small\" in the title: to qualify here, a notebook has to be genuinely pocket- or bag-friendly on its own, not merely smaller than the largest option in the lineup.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dw9jz1mf-smalldn",
    rank: 1,
    badge: "Smallest Overall",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Gray",
    price: "$17.99",
    rating: "4.4",
    reviews: "281",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DW9JZ1MF?tag=deskfinds0d-20",
    description:
      "At 3.5x5.5 inches this is genuinely pocket-sized, not just smaller than a full letter pad. It's a reusable paper notepad: you write with a Pilot FriXion pen, scan pages into the Rocketbook app, then wipe the page clean with a damp cloth to reuse it. There's no screen and no battery to charge, which is the tradeoff for the small size and low price.",
    specs: ["3.5 x 5.5 in dotted pages", "Reusable via damp-cloth erase", "Requires Pilot FriXion pen (included)", "Scans to Rocketbook app"],
    pros: ["Actually fits a jacket pocket, unlike letter-size competitors", "Lowest price in this comparison", "No battery or charging needed"],
    cons: ["Writing area is small enough to limit note length per page", "Requires a specific pen type to erase correctly", "Not a true digital display — it's a scan-and-erase paper system"],
    bestFor: "Buyers who want something they can genuinely carry in a coat pocket for quick notes.",
  },
  {
    id: "b07czf628c-smalldn",
    rank: 2,
    badge: "Best Spiral-Bound Small Option",
    name: "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook, Midnight Blue",
    price: "$14.99",
    rating: "4.4",
    reviews: "11,065",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CZF628C?tag=deskfinds0d-20",
    description:
      "The most reviewed product in this comparison by a wide margin, which matters for a reusable-paper product where the erase mechanism and page durability need to hold up over many cycles. Spiral binding makes it lie flatter on a small surface than the Mini's notepad format.",
    specs: ["Mini spiral-bound size", "Reusable via damp-cloth erase", "11,065 reviews at 4.4 stars", "Same FriXion-pen erase system as other Rocketbook sizes"],
    pros: ["Largest review base of any pick here, useful evidence of long-term durability", "Lowest price in this comparison", "Spiral binding lies flat for writing"],
    cons: ["Same scan-and-erase limitation as the rest of the Rocketbook lineup", "Spiral wire can catch on bag pockets over time"],
    bestFor: "Buyers who want the most field-tested small reusable notebook rather than a newer, less-reviewed size.",
  },
  {
    id: "b0dp3hly4j-smalldn",
    rank: 3,
    badge: "Best Mid-Size Compromise",
    name: "Rocketbook Core Reusable Smart Notebook, Executive Size 6x8.8, Black",
    price: "$25.99",
    rating: "4.5",
    reviews: "226",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3HLY4J?tag=deskfinds0d-20",
    description:
      "Executive size (6x8.8 in) is the middle ground between the pocket-only Mini and a full letter pad: still small enough for most bags, but with meaningfully more writing area per page than the Mini. This is the Core line, Rocketbook's standard dot-grid notebook rather than the planner-formatted Fusion line.",
    specs: ["6 x 8.8 in executive size", "Core (dot-grid) page layout", "Reusable via damp-cloth erase", "4.5 stars"],
    pros: ["Noticeably more writing area than the Mini without becoming bag-unfriendly", "Highest rating of the small-format Rocketbook options", "Standard dot-grid works for both notes and light sketching"],
    cons: ["Not pocket-size — needs a bag, not just a coat pocket", "Still requires the specific FriXion pen to erase properly"],
    bestFor: "Buyers who found the Mini's writing area too cramped but still want something bag-portable.",
  },
  {
    id: "b0dp3jmp14-smalldn",
    rank: 4,
    badge: "Best If You Want a Full Page",
    name: "Rocketbook Core Reusable Smart Notebook, Letter Size 8.5x11, Black",
    price: "$26.99",
    rating: "4.5",
    reviews: "100",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JMP14?tag=deskfinds0d-20",
    description:
      "This is the honest disqualifier pick: full letter size is what most people picture when they search \"digital notebook,\" but it is not actually small by any physical measure. We're including it so buyers can see exactly how much writing area they're giving up by choosing the Mini or Executive sizes above, and so anyone who really needs full-page notes doesn't end up with something too cramped.",
    specs: ["8.5 x 11 in, standard letter size", "Core (dot-grid) page layout", "Reusable via damp-cloth erase", "Same erase system as the smaller sizes"],
    pros: ["Full writing area for detailed notes or diagrams", "Same low price and reusable mechanic as the smaller sizes"],
    cons: ["Does not fit in a coat pocket or most small bags", "Doesn't meet a genuine \"small\" bar — included only for size comparison"],
    bestFor: "Buyers who searched \"small\" but actually just want an affordable reusable notebook and are fine with a normal notebook footprint.",
  },
  {
    id: "b07zhz82dk-smalldn",
    rank: 5,
    badge: "Best for Planning in a Compact Format",
    name: "Rocketbook Fusion Reusable Undated Productivity Planner, Letter Size",
    price: "$34.99",
    rating: "4.6",
    reviews: "26,593",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHZ82DK?tag=deskfinds0d-20",
    description:
      "The highest-rated and most-reviewed product across the entire small-digital-notebook search, but it's a letter-size planner, not a compact notebook. It's included because it shows the ceiling of what this product family can do (calendar pages, to-do templates, goal trackers built into the reusable pages), which the truly small formats above don't offer.",
    specs: ["Letter size, undated planner layout", "Fusion line: built-in planner/calendar page templates", "Reusable via damp-cloth erase", "26,593 reviews at 4.6 stars"],
    pros: ["Highest rating and by far the largest review count in this entire comparison", "Built-in planning templates beyond plain dot-grid pages"],
    cons: ["Full letter size, not compact", "Planner templates add cost most small-notebook buyers don't need"],
    bestFor: "Buyers who want the most proven product in the Rocketbook lineup and don't actually need a small footprint.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Actual measured footprint", description: "We used the manufacturer-listed page dimensions for each size (Mini 3.5x5.5, Executive 6x8.8, Letter 8.5x11) rather than relying on marketing language like \"compact\" or \"travel-friendly.\"" },
  { title: "Product category, not just page size", description: "We flagged that every result here is a reusable-paper Rocketbook, not an E Ink tablet, since the two solve different problems and buyers searching \"small digital notebook\" may actually want either." },
  { title: "Review volume as a durability signal", description: "For a reusable notebook, the erase cycle and page coating are the parts most likely to wear out. We weighted review count as evidence of how many people have put a given size through repeated use." },
  { title: "Writing area vs. portability tradeoff", description: "We ranked from most pocket-friendly to least, so buyers can see exactly how much page space they give up at each size step down." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "\"Small Digital Notebook\" Mostly Means a Small Rocketbook",
    intro: "Every product that surfaces for this exact search term is a Rocketbook reusable notebook in one size or another — not a compact E Ink tablet. If you actually want a small electronic writing device with a screen, look at our digital notebooks that feel like paper guide instead; the E Ink category doesn't currently offer a genuinely pocket-size option.",
  },
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Fits in a coat pocket", "Rocketbook Mini Reusable Smart Notepad, 3.5x5.5"],
        ["Best-tested small option", "Rocketbook Smart Reusable Notebook, Mini Spiral"],
        ["More writing room, still bag-portable", "Rocketbook Core Executive Size 6x8.8"],
        ["Actually just want the best-reviewed Rocketbook, size aside", "Rocketbook Fusion Reusable Productivity Planner"],
      ],
    },
  },
  {
    subheading: "What a Reusable Notebook Can't Do",
    note: "None of these have a screen, battery, or wireless sync in real time — you write with a special pen, photograph or scan the page into the Rocketbook app, then physically wipe the page with a damp cloth to reuse it. If you want live digital ink with cloud sync, that's a different product category (E Ink tablets), covered in our other digital notebook guides.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm you actually want reusable paper, not an E Ink screen", explanation: "Every result for this search term is a Rocketbook. If you wanted a device with an electronic display, none of these will do that — check our digital notebooks that feel like paper guide instead." },
  { criterion: "Measure against a real pocket or bag, not the marketing copy", explanation: "Only the Mini (3.5x5.5 in) reliably fits a coat pocket. Executive size (6x8.8 in) needs a bag. Letter size (8.5x11 in) is a normal notebook footprint, not compact." },
  { criterion: "Check you have or will buy the correct pen", explanation: "The erase mechanism only works with Pilot FriXion-brand pens (usually included). A regular pen will not erase off the page." },
  { criterion: "Weigh writing area against portability", explanation: "Smaller sizes mean less room per page before you have to scan and erase. If you take long notes, the smallest size will mean scanning more often." },
  { criterion: "Use review count as a durability signal for a reusable product", explanation: "Because these notebooks are physically erased hundreds of times, a large review base is more informative here than for a normal one-time-use notebook." },
];

export const faq: FaqItem[] = [
  { q: "Is a \"small digital notebook\" an E Ink tablet or a reusable paper notebook?", a: "Based on current search results, it's almost always a Rocketbook reusable paper notebook. Compact E Ink tablets with a real screen don't currently exist in a genuinely pocket-size format — the smallest common E Ink devices are built around a 10-11 inch display." },
  { q: "Which size actually fits in a pocket?", a: "Only the Mini, at 3.5x5.5 inches. The Executive size (6x8.8 in) needs a bag, and letter size (8.5x11 in) is a normal notebook footprint." },
  { q: "Do I need a special pen for these?", a: "Yes — Rocketbook notebooks erase only with Pilot FriXion pens, which are typically included in the box. A standard ballpoint or gel pen will not wipe off the page." },
  { q: "Why is a letter-size planner included in a \"small\" notebook guide?", a: "To show the ceiling of writing area and features (like built-in planner templates) that buyers give up by choosing a genuinely small size, and because it's the highest-rated, most-reviewed product across the whole search." },
  { q: "How do these sync notes to my phone?", a: "You scan or photograph each page using the Rocketbook app before erasing it. There's no live wireless sync — the page has to be physically captured first." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
  { href: "/guide/best-pocket-digital-notebooks", title: "Best Pocket Digital Notebooks (2026)" },
  { href: "/guide/best-reusable-digital-notebooks", title: "Best Reusable Digital Notebooks (2026)" },
];
