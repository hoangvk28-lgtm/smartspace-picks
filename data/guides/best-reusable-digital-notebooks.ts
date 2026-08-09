export const guideSlug = "best-reusable-digital-notebooks";
export const guideTitle = "5 Best Reusable Digital Notebooks in 2026";
export const metaTitle = "Best Reusable Digital Notebooks (2026)";
export const metaDescription =
  "5 reusable paper notebooks compared by page format and template — Core vs. Fusion vs. Fusion Plus — rather than just size, since the erase mechanism is identical across the whole lineup.";
export const mainKeyword = "reusable digital notebook";
export const introParagraphs = [
  "Unlike our small and pocket digital notebook guides, which focus on size, this one is about the actual reusable mechanism and page format: every product here uses the same core technology (write with a Pilot FriXion pen, scan into an app, erase with a damp cloth), so the real differences between them are page layout, size, and whether planner templates are built in.",
  "We're not retesting the erase mechanism five separate times since it's identical hardware across the line — instead we're comparing what you actually get on the page, because that's the part that varies.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07zhz82dk-reusabledn",
    rank: 1,
    badge: "Best Overall, Highest-Rated",
    name: "Rocketbook Fusion Reusable Undated Productivity Planner, Letter Size",
    price: "$34.99",
    rating: "4.6",
    reviews: "26,593",
    imageUrl: "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHZ82DK?tag=deskfinds0d-20",
    description:
      "With 26,593 reviews at 4.6 stars, this is the most reviewed and highest-rated reusable notebook in the entire search, by a wide margin. It's undated, so the planning pages don't force you to start on a specific date, and it mixes dot-grid, to-do, and calendar page templates within the same reusable notebook.",
    specs: ["Letter size, undated planner layout", "Mix of dot-grid, to-do, and calendar templates", "26,593 reviews at 4.6 stars", "Reusable via damp-cloth erase"],
    pros: ["By far the largest review base and highest rating in this comparison", "Undated pages mean you can start using it any time of year", "Combines planning templates and blank note pages in one notebook"],
    cons: ["Full letter size, not compact", "Planner templates take up some pages that plain-dot-grid buyers won't use"],
    bestFor: "Buyers who want the single most proven reusable notebook and also want built-in planning pages.",
  },
  {
    id: "b07zhyz32m-reusabledn",
    rank: 2,
    badge: "Best Compact Planner",
    name: "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8",
    price: "$29.99",
    rating: "4.4",
    reviews: "23,751",
    imageUrl: "https://m.media-amazon.com/images/I/41VG6OVaZCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZHYZ32M?tag=deskfinds0d-20",
    description:
      "Same Fusion planner-template concept as the top pick, but in the smaller 6x8.8 Executive size, with an enormous 23,751-review base of its own. If the full letter-size Fusion above is too large for your bag, this is the direct smaller alternative with nearly identical proof of reliability.",
    specs: ["6 x 8.8 in executive size", "Fusion hybrid planner templates", "23,751 reviews at 4.4 stars", "Reusable via damp-cloth erase"],
    pros: ["Second-largest review base of any reusable notebook here", "More portable than the letter-size Fusion above without losing the planner templates"],
    cons: ["Slightly lower rating than the letter-size Fusion", "Smaller page means less room per planning template"],
    bestFor: "Buyers who want the Fusion planner concept in a more portable size.",
  },
  {
    id: "b0clppzzjl-reusabledn",
    rank: 3,
    badge: "Best Upgraded Page Templates",
    name: "Rocketbook Fusion Plus Reusable Notebook Planner, Executive 6x8.8, Teal",
    price: "$31.99",
    rating: "4.4",
    reviews: "3,200",
    imageUrl: "https://m.media-amazon.com/images/I/416XcHl7ssL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLPPZZJL?tag=deskfinds0d-20",
    description:
      "Fusion Plus is the newer, upgraded version of the standard Fusion template set at the same Executive size — check the current listing for what specifically changed in the page layouts, since \"Plus\" products in this lineup typically mean refined templates rather than a different erase mechanism.",
    specs: ["6 x 8.8 in executive size", "Fusion Plus template set", "3,200 reviews at 4.4 stars", "Reusable via damp-cloth erase"],
    pros: ["Newer template revision than the standard Fusion", "Same proven erase mechanic as the rest of the lineup"],
    cons: ["Meaningfully smaller review base than the standard Fusion at the same size and rating", "Costs more than the standard Fusion Hybrid at the same footprint"],
    bestFor: "Buyers who want the newest template revision and don't mind paying slightly more with less review history.",
  },
  {
    id: "b0dp3jmp14-reusabledn",
    rank: 4,
    badge: "Best Plain Dot-Grid Option",
    name: "Rocketbook Core Reusable Smart Notebook, Letter Size 8.5x11, Black",
    price: "$26.99",
    rating: "4.5",
    reviews: "100",
    imageUrl: "https://m.media-amazon.com/images/I/41RhAqe3azL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JMP14?tag=deskfinds0d-20",
    description:
      "If you don't want built-in planner templates and just want dot-grid pages to write on freely, the Core line skips the Fusion's calendar/to-do page structure entirely. It's cheaper than the Fusion options and gives you a blank canvas rather than pre-formatted pages.",
    specs: ["8.5 x 11 in, standard letter size", "Plain dot-grid pages, no planner templates", "Reusable via damp-cloth erase"],
    pros: ["Cheapest full-letter-size option in this comparison", "No pre-formatted pages if you prefer a blank dot-grid canvas"],
    cons: ["Much smaller review count than the Fusion line at time of writing", "No built-in planning structure if that's what you actually want"],
    bestFor: "Buyers who want plain reusable pages without pre-built planner templates.",
  },
  {
    id: "b0dw9jz1mf-reusabledn",
    rank: 5,
    badge: "Best Compact, No Planner Templates",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Gray",
    price: "$17.99",
    rating: "4.4",
    reviews: "281",
    imageUrl: "https://m.media-amazon.com/images/I/41uG7qo+QwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DW9JZ1MF?tag=deskfinds0d-20",
    description:
      "The smallest and cheapest reusable notebook in this comparison, with plain dotted pages and no planner formatting. It's the pick if you want the reusable mechanic in its simplest, most portable form rather than a full planner system.",
    specs: ["3.5 x 5.5 in", "Plain dotted pages, no templates", "281 reviews at 4.4 stars", "Reusable via damp-cloth erase"],
    pros: ["Cheapest and most compact reusable notebook here", "Plain pages if you don't want pre-built planner structure"],
    cons: ["Small page limits how much you can write before needing to erase", "No planner templates if that's what you're actually shopping for"],
    bestFor: "Buyers who want the simplest, most portable version of the reusable-notebook concept.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Page format, not just size", description: "We separated the Fusion/Fusion Plus lines (built-in planner and calendar templates) from the Core line (plain dot-grid pages), since that's the real functional difference across this product family." },
  { title: "Review volume as reliability evidence", description: "Because the erase mechanism is shared hardware across the whole lineup, review count is our best evidence of how well the coating and pen system hold up across repeated use for each specific product." },
  { title: "Price relative to template complexity", description: "We noted where the Fusion Plus costs more than the standard Fusion for what appears to be a template refinement, so buyers can judge whether the upgrade is worth the premium." },
  { title: "Size against writing area, again", description: "Even though this guide is about page format, size still affects how much of each template fits on a page, so we noted it for every pick." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Fusion vs. Core: The Real Difference in This Lineup",
    cards: [
      { label: "Fusion / Fusion Plus", text: "Built-in planner, calendar, and to-do page templates alongside blank note pages." },
      { label: "Core", text: "Plain dot-grid pages only, no pre-built planning structure, usually cheaper." },
    ],
  },
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Most proven, best-rated overall", "Rocketbook Fusion, Letter Size"],
        ["Most proven in a compact size", "Rocketbook Fusion Hybrid, Executive 6x8.8"],
        ["Newest template revision", "Rocketbook Fusion Plus, Executive 6x8.8"],
        ["Plain pages, no planner templates", "Rocketbook Core, Letter Size"],
        ["Cheapest and smallest", "Rocketbook Mini, 3.5x5.5"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Decide between planner templates (Fusion) and plain pages (Core)", explanation: "The Fusion line adds built-in calendar and to-do templates to the same reusable-paper technology as the Core line, which is plain dot-grid. Pick based on whether you want structure or a blank canvas." },
  { criterion: "Use review count as your reliability signal", explanation: "The erase mechanism is shared hardware across the lineup, so a product's specific review base is the best evidence of how well that page coating holds up over hundreds of erase cycles." },
  { criterion: "Check whether \"Plus\" or \"Hybrid\" naming actually changed anything you care about", explanation: "Fusion Plus costs more than the standard Fusion at the same size for template refinements — verify on the current listing what specifically changed before paying the premium." },
  { criterion: "Confirm you have the right pen", explanation: "All of these only erase correctly with Pilot FriXion pens, typically included in the box." },
  { criterion: "Match size to how you'll actually use it", explanation: "Letter size gives the most room per template or note page; Executive and Mini sizes trade writing area for portability." },
];

export const faq: FaqItem[] = [
  { q: "What's the difference between the Fusion and Core lines?", a: "Fusion includes built-in planner, calendar, and to-do page templates. Core is plain dot-grid pages with no pre-built structure. Both use the identical reusable erase mechanism." },
  { q: "Is Fusion Plus worth the extra cost over the standard Fusion?", a: "It's a newer template revision at the same size, but with a much smaller review base at time of writing. Check the current listing for exactly what changed before paying the premium." },
  { q: "Which has the most proof it actually works long-term?", a: "The letter-size Rocketbook Fusion, with 26,593 reviews at 4.6 stars — by far the largest and highest-rated option in this comparison." },
  { q: "Do I need a special pen for any of these?", a: "Yes, all of them require Pilot FriXion pens to erase correctly, typically included in the box." },
  { q: "How do notes get off the physical page?", a: "You scan or photograph each page with the Rocketbook app before wiping it with a damp cloth. There's no live wireless sync while writing." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-digital-notebooks", title: "Best Small Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebook-and-planner-combos", title: "Best Digital Notebook and Planner Combos (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
