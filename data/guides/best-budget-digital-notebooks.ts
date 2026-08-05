export const guideSlug = "best-budget-digital-notebooks";
export const guideTitle = "7 Best Budget Digital Notebooks in 2026";
export const metaTitle = "Best Budget Digital Notebooks (2026)";
export const metaDescription =
  "7 digital notebooks under $30 we evaluated, all genuinely low-priced reusable paper notebooks verified against current listing prices.";
export const mainKeyword = "budget digital notebook";
export const introParagraphs = [
  "Every pick in this guide is priced under $30, which in practice means the reusable paper notebook category, since standalone e-ink hardware and most smart pen sets start well above this range. If you have a strict budget, a Rocketbook-style notebook is genuinely the entry point into digitizing handwritten notes.",
  "We checked each listed price against the verified product data before including it here, rather than assuming a product is budget-friendly based on its category alone.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "rb-mini-black-budget",
    rank: 1,
    badge: "Cheapest Pick Overall",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Black",
    price: "$14.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JFY1Q?tag=deskfinds0d-20",
    description:
      "The Rocketbook Mini in black is the cheapest pick in this guide, a genuinely pocket-sized notebook for quick notes at the lowest entry price. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same app-connected scanning and wipe-clean reuse as the larger, pricier Rocketbook models. The tradeoff for the low price and small size is less writing space per page than a full letter-size notebook.",
    specs: ["Reusable paper notebook, Type 1", "3.5x5.5 inch mini size", "Dotted pages, wipe clean and reuse", "App-connected scanning"],
    pros: ["The lowest price in this entire guide", "Genuinely pocket-sized", "App-connected scanning", "Wipes clean and reuses"],
    cons: ["Small writing area limits longer notes", "Requires a compatible erasable pen", "No on-device digital storage"],
    bestFor: "Buyers wanting the absolute cheapest entry point into digitizing handwritten notes.",
  },
  {
    id: "rb-mini-navy-budget",
    rank: 2,
    badge: "Cheapest Pick, Navy Color Option",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Navy Blue",
    price: "$14.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41TPpwMWTXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JGGJ9?tag=deskfinds0d-20",
    description:
      "This is the same budget Rocketbook Mini format in navy blue, tied for the cheapest pick in this guide. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt offers identical app-connected scanning and reuse to the black version, just a different cover color. A genuinely low-cost way to start digitizing quick notes on the smallest available Rocketbook format.",
    specs: ["Reusable paper notebook, Type 1", "3.5x5.5 inch mini size", "Dotted pages, wipe clean and reuse", "App-connected scanning"],
    pros: ["Tied for the lowest price in this guide", "Genuinely pocket-sized", "App-connected scanning", "Color choice available"],
    cons: ["Small writing area limits longer notes", "Requires a compatible erasable pen", "No on-device digital storage"],
    bestFor: "Budget buyers who want a color choice at the lowest price point.",
  },
  {
    id: "rb-flip-navy-budget",
    rank: 3,
    badge: "Best Budget Executive-Size Pick",
    name: "Rocketbook Flip Reusable Smart Notepad, Executive Size 6x8.8, Navy Blue",
    price: "$24.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41dnaLOfVqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JPMDC?tag=deskfinds0d-20",
    description:
      "This executive-size Rocketbook Flip offers more writing space than the Mini format while still staying comfortably under $30. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same reusable, wipe-clean pages and app-connected scanning as the rest of the Rocketbook lineup. A reasonable middle ground for budget buyers who want more room to write than the smallest mini format.",
    specs: ["Reusable paper notebook, Type 1", "Executive size 6x8.8", "Wipe clean and reuse", "App-connected scanning"],
    pros: ["More writing space than the Mini format, still under $30", "Reusable, wipes clean for repeated use", "App-connected scanning", "Compact executive size"],
    cons: ["Requires a compatible erasable pen", "Sync happens after scanning, not live", "No on-device digital storage"],
    bestFor: "Budget buyers wanting more writing space than the Mini format.",
  },
  {
    id: "rb-flip-pen-budget",
    rank: 4,
    badge: "Best Budget Pick with Pen Included",
    name: "Rocketbook Flip Reusable Smart Notepad, Eco-Friendly, Digitally Connected, Dotted and Lined Combo, 6x8.8, Navy, with Pen, Cloth, and App Included",
    price: "$25.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41oSOgieC8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B087QN42VM?tag=deskfinds0d-20",
    description:
      "This budget Rocketbook Flip bundle includes the compatible pen and cleaning cloth, a complete kit under $30 with no separate pen purchase needed. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nThe dotted and lined combo pages offer flexibility for both structured notes and free-form sketches. A genuinely good value pick since the included pen would otherwise be an added cost on other budget notebooks.",
    specs: ["Reusable paper notebook, Type 1", "Pen, cloth, and app included", "Dotted and lined combo pages", "Wipe clean and reuse"],
    pros: ["Pen and cleaning cloth included under $30", "Dotted and lined combo pages for flexible note styles", "No separate pen purchase needed", "Wipes clean and reuses"],
    cons: ["Sync happens after scanning, not live", "Smaller notepad format than a full notebook", "No on-device digital storage"],
    bestFor: "Budget buyers wanting a complete kit without buying a pen separately.",
  },
  {
    id: "rb-flip-gray-budget",
    rank: 5,
    badge: "Best Budget Executive Notebook, Gray",
    name: "Rocketbook Smart Reusable Notebook, Flip Executive Size Spiral Notebook, Gray",
    price: "$25.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/314ISfhnV8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B087QPTC7B?tag=deskfinds0d-20",
    description:
      "This gray Rocketbook Flip offers the executive-size spiral notebook format at a comfortably budget-friendly price under $30. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same core reusable, wipe-clean, app-connected scanning workflow as the rest of the Rocketbook lineup. A solid budget pick for buyers who want a spiral-bound format rather than a flip notepad.",
    specs: ["Reusable paper notebook, Type 1", "Executive size, spiral notebook", "Wipe clean and reuse", "App-connected scanning"],
    pros: ["Comfortably under $30", "Spiral-bound executive-size format", "App-connected scanning", "Wipes clean and reuses"],
    cons: ["Requires a compatible erasable pen", "Sync happens after scanning, not live", "No on-device digital storage"],
    bestFor: "Budget buyers who prefer a spiral-bound notebook format.",
  },
  {
    id: "rb-flip-graylet-budget",
    rank: 6,
    badge: "Best Budget Letter-Size Pick",
    name: "Rocketbook Flip Reusable Smart Notepad, Letter Size 8.5x11, Gray",
    price: "$24.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+bVLfjAdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DW9HH53V?tag=deskfinds0d-20",
    description:
      "This letter-size Rocketbook Flip in gray gives budget buyers full-size writing space while staying under $30. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same wipe-clean, app-connected scanning workflow as the rest of the budget Rocketbook lineup. A good choice if you want the most writing space possible without stepping above the budget price range.",
    specs: ["Reusable paper notebook, Type 1", "Letter size 8.5x11", "Wipe clean and reuse", "App-connected scanning"],
    pros: ["Full letter-size writing space under $30", "Wipes clean and reuses", "App-connected scanning", "Budget-friendly"],
    cons: ["Bulkier than the Mini or executive-size formats", "Requires a compatible erasable pen", "No on-device digital storage"],
    bestFor: "Budget buyers wanting the most writing space possible without exceeding $30.",
  },
  {
    id: "rb-core-budget",
    rank: 7,
    badge: "Best Overall Budget Pick",
    name: "Rocketbook Core Reusable Spiral Notebook, Letter Size 8.5x11, Black, Dotted Pages, App-Connected, Erasable, Durable Cover",
    price: "$26.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B071Y3MSRK?tag=deskfinds0d-20",
    description:
      "The Rocketbook Core remains a strong overall budget pick, letter-size with dotted pages and app-connected scanning, comfortably under $30. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt's the most recognizable name in the reusable paper notebook category, with a broad base of user reviews and established app support. A reliable choice if you want a well-known brand at the low end of the price range.",
    specs: ["Reusable paper notebook, Type 1", "Letter size 8.5x11, dotted pages", "Wipe clean and reuse", "App-connected cloud scanning"],
    pros: ["Well-known, established product with broad app support", "Comfortably under $30", "Full letter-size writing space", "Wipes clean and reuses"],
    cons: ["Requires a compatible erasable pen", "Sync happens after scanning, not live", "No on-device digital storage"],
    bestFor: "Budget buyers wanting the most established, well-supported cheap option.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Every price verified against current listing data before inclusion", description: "Checked each product's actual listed price against our verified data and excluded anything not genuinely under $30, rather than assuming a category is budget-friendly." },
  { title: "Reusability weighed as a real budget factor", description: "Credited wipe-clean, reusable pages as extending value over a single-use paper notebook, relevant for a tight budget used across multiple semesters or projects." },
  { title: "Pen inclusion checked as part of total cost", description: "Noted where a compatible pen is included versus needing a separate purchase, since that materially changes the real total cost for a budget buyer." },
  { title: "Writing space compared across the whole budget tier", description: "Compared mini, executive, and letter-size formats within this price range so budget buyers can weigh space against price directly." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "At This Price, You're Choosing a Reusable Paper Notebook",
    note: "Standalone e-ink hardware and most smart pen sets start well above $30, so every pick in this guide is a reusable paper notebook. That's not a limitation, it's simply where the budget category actually lives in this niche, and a genuinely capable one for digitizing handwritten notes at low cost.",
  },
  {
    subheading: "Factor In the Erasable Pen Cost If Not Included",
    note: "Most Rocketbook-style notebooks require a specific erasable pen, commonly a Pilot Frixion, to work correctly. If a listing doesn't include the pen, add its cost to your real budget rather than assuming any pen you own will work.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Absolute lowest price", "Rocketbook Mini (Black or Navy Blue)"],
        ["More writing space than the Mini, still budget", "Rocketbook Flip, Executive Size, Navy Blue"],
        ["Complete kit with pen included under $30", "Rocketbook Flip with Pen"],
        ["Most writing space under $30", "Rocketbook Flip, Letter Size, Gray"],
        ["Most established, well-supported budget pick", "Rocketbook Core"]
      ],
    },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify the actual current price before buying", explanation: "Prices change, always check the current listing against your budget rather than relying solely on a guide's stated price." },
  { criterion: "Budget for the erasable pen if it's not included", explanation: "Most reusable notebooks need a specific pen to work correctly, factor that into your real total cost if it's sold separately." },
  { criterion: "Weigh writing space against the smallest, cheapest format", explanation: "The absolute cheapest mini notebooks trade writing space for price, decide if that tradeoff works for how you take notes." },
  { criterion: "Consider reusability as extended value on a tight budget", explanation: "A wipe-clean notebook can be reused across multiple semesters or projects, extending its value well beyond a single-use notebook at a similar price." },
];

export const faq: FaqItem[] = [
  { q: "What's the cheapest digital notebook available?", a: "Reusable paper notebooks like the Rocketbook Mini are generally the cheapest way to digitize handwritten notes, typically under $15 to $30 depending on size and format." },
  { q: "Can I get an e-ink digital notebook under $30?", a: "Not realistically, standalone e-ink hardware devices start well above $30, budget picks in this category are reusable paper notebooks instead." },
  { q: "Do budget digital notebooks come with a pen?", a: "Some do and some don't, check the specific listing, since Rocketbook-style notebooks generally require a specific erasable pen to work correctly." },
  { q: "Are budget reusable notebooks worth it?", a: "Yes, they let you digitize handwritten notes at a low cost and can be reused across multiple semesters or projects since the pages wipe clean." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-for-students", title: "Best Digital Notebooks for Students (2026)" },
  { href: "/guide/best-portable-digital-notebooks", title: "Best Portable Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-under-300", title: "Best Digital Notebooks Under $300 (2026)" },
];
