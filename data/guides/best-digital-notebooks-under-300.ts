export const guideSlug = "best-digital-notebooks-under-300";
export const guideTitle = "8 Best Digital Notebooks Under $300 in 2026";
export const metaTitle = "Best Digital Notebooks Under $300";
export const metaDescription =
  "8 digital notebooks under $300 we evaluated, every price confirmed against current listing data, spanning paper notebooks and smart pen sets.";
export const mainKeyword = "digital notebook under 300";
export const introParagraphs = [
  "Under $300 opens up the smart pen set category alongside reusable paper notebooks, though most standalone e-ink hardware devices sit above this range. This is a wider budget than our strictest budget guide, giving room for real-time sync features without stepping into premium e-ink territory.",
  "Every price below was checked against verified current listing data before inclusion, we did not include anything based on an assumed or outdated price.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "rb-core-u300",
    rank: 1,
    badge: "Best Overall Budget Value Pick",
    name: "Rocketbook Core Reusable Spiral Notebook, Letter Size 8.5x11, Black, Dotted Pages, App-Connected, Erasable, Durable Cover",
    price: "$26.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B071Y3MSRK?tag=deskfinds0d-20",
    description:
      "The Rocketbook Core remains one of the strongest value picks in this wider price range, well under $300 with established app support and broad user reviews. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt gives full letter-size writing space with the same wipe-clean, reusable pages as the rest of the Rocketbook lineup. A reliable, well-known choice at the low end of this guide's price range.",
    specs: ["Reusable paper notebook, Type 1", "Letter size 8.5x11, dotted pages", "Wipe clean and reuse", "App-connected cloud scanning"],
    pros: ["Comfortably under $300, one of the cheapest picks here", "Well-known, established app support", "Full letter-size writing space", "Wipes clean and reuses"],
    cons: ["Requires a compatible erasable pen", "Sync happens after scanning, not live", "No on-device digital storage"],
    bestFor: "Buyers wanting the most established low-cost pick in this price range.",
  },
  {
    id: "rb-flip-u300",
    rank: 2,
    badge: "Best Compact Pick Under $300",
    name: "Rocketbook Flip Smart Notepad, Teal Cover, Lined/Dot Grid Rule, 8.5x11, 16 Sheets",
    price: "$26.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31PNIC3U3AL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B33BQL8X?tag=deskfinds0d-20",
    description:
      "This compact Rocketbook Flip stays well under $300 while offering flexible lined and dot grid pages in a portable notepad format. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same reusable, app-connected scanning workflow as the larger Rocketbook Core. A lighter-weight, budget-friendly option within this wider price range.",
    specs: ["Reusable paper notebook, Type 1", "Flip notepad format, lined and dot grid", "Wipe clean and reuse", "App-connected scanning"],
    pros: ["Well under $300", "Flexible lined and dot grid page combination", "Compact, portable notepad format", "Wipes clean and reuses"],
    cons: ["Requires a compatible erasable pen", "Sync happens after scanning, not live", "Smaller writing area than a full notebook"],
    bestFor: "Buyers wanting a compact, budget-friendly notepad well under this price ceiling.",
  },
  {
    id: "rb-flip-navy-u300",
    rank: 3,
    badge: "Best Executive-Size Pick Under $300",
    name: "Rocketbook Flip Reusable Smart Notepad, Executive Size 6x8.8, Navy Blue",
    price: "$24.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41dnaLOfVqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JPMDC?tag=deskfinds0d-20",
    description:
      "This executive-size Rocketbook Flip offers a comfortable middle-ground writing space, well under $300 and reusable across multiple projects. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same core reusable, app-connected scanning workflow as the rest of the lineup. A reasonable pick for buyers wanting more space than a mini notepad without paying for smart pen or e-ink hardware.",
    specs: ["Reusable paper notebook, Type 1", "Executive size 6x8.8", "Wipe clean and reuse", "App-connected scanning"],
    pros: ["Well under $300", "More writing space than the Mini format", "Reusable, wipes clean for repeated use", "App-connected scanning"],
    cons: ["Requires a compatible erasable pen", "Sync happens after scanning, not live", "No on-device digital storage"],
    bestFor: "Buyers wanting a mid-size reusable notebook well under this price ceiling.",
  },
  {
    id: "rb-flip-pen-u300",
    rank: 4,
    badge: "Best Pick with Pen Included Under $300",
    name: "Rocketbook Flip Reusable Smart Notepad, Eco-Friendly, Digitally Connected, Dotted and Lined Combo, 6x8.8, Navy, with Pen, Cloth, and App Included",
    price: "$25.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41oSOgieC8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B087QN42VM?tag=deskfinds0d-20",
    description:
      "This Rocketbook Flip bundle includes the compatible pen and cleaning cloth, a complete kit well under this price ceiling with no separate pen purchase needed. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nThe dotted and lined combo pages offer flexibility for both structured notes and free-form sketches. A genuinely good value pick since the included pen would otherwise be an added cost.",
    specs: ["Reusable paper notebook, Type 1", "Pen, cloth, and app included", "Dotted and lined combo pages", "Wipe clean and reuse"],
    pros: ["Complete kit well under $300", "Pen and cleaning cloth included", "Dotted and lined combo pages", "Wipes clean and reuses"],
    cons: ["Sync happens after scanning, not live", "Smaller notepad format than a full notebook", "No on-device digital storage"],
    bestFor: "Buyers wanting a complete reusable notebook kit without separate pen costs.",
  },
  {
    id: "rb-fusion-u300",
    rank: 5,
    badge: "Best Structured Planner Pick Under $300",
    name: "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8, Black",
    price: "$29.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41Rr5sOXeTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07RSH69HC?tag=deskfinds0d-20",
    description:
      "The Rocketbook Fusion Hybrid Planner combines structured planner pages with regular notebook pages, well under $300 and useful for tracking agendas alongside free-form notes. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same reusable, wipe-clean paper as other Rocketbook models, digitized by scanning with the app. A genuine value pick for buyers who want a structured layout without paying for smart pen or e-ink hardware.",
    specs: ["Reusable paper notebook, Type 1", "Hybrid planner and notebook layout", "Wipe clean and reuse", "Executive size 6x8.8"],
    pros: ["Well under $300", "Structured planner pages for agendas", "Reusable, wipes clean for repeated use", "Compact executive size"],
    cons: ["Sync happens after scanning, not live", "Requires a compatible erasable pen", "Structured layout less flexible for free-form brainstorming"],
    bestFor: "Buyers wanting a structured planner-style notebook well under this price ceiling.",
  },
  {
    id: "syncpen-u300",
    rank: 6,
    badge: "Best Real-Time Smart Pen Under $300",
    name: "SyncPen Digital Notebook Smart Pen Set, Real Time Sync from Paper to App",
    price: "$79.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41eM5RJPa2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F5P2186C?tag=deskfinds0d-20",
    description:
      "SyncPen brings real-time sync and OCR to this price range at a genuinely affordable cost within the smart pen category. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nIt's the most feature-rich pick in this guide relative to price, syncing handwriting live and including audio recording alongside OCR. Verify current OCR accuracy through recent reviews since handwriting-to-text conversion is a software feature that improves over time.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Real time sync from paper to app", "OCR and audio recording", "Bluetooth pen"],
    pros: ["Well under $300, one of the more affordable smart pens", "Real-time sync while writing", "OCR and audio recording included", "Bluetooth connectivity"],
    cons: ["OCR accuracy should be verified through current reviews", "Pen requires periodic charging", "Smaller ecosystem than larger brands"],
    bestFor: "Buyers wanting real-time smart pen sync at an affordable price under $300.",
  },
  {
    id: "smartsync-u300",
    rank: 7,
    badge: "Best Eco-Friendly Smart Set Under $300",
    name: "Smart Sync Reusable Notebook, Functional Digital Notepad, Eco-Friendly",
    price: "$79.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41vRcKAD-ML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F7LDXHC2?tag=deskfinds0d-20",
    description:
      "This Smart Sync set combines a reusable notebook with real-time digital writing capture, well under $300 and positioned as an eco-friendly option. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nIt bridges the reusable paper category and the smart pen category, giving live sync while still writing on paper. A reasonable step up from a plain Rocketbook for buyers wanting real-time sync without premium e-ink pricing.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Real-Time Digital Writing Pad", "Eco-friendly reusable notebook set", "Includes pen and pad"],
    pros: ["Well under $300", "Real-time digital writing capture", "Reusable, eco-friendly notebook design", "Still writes on real paper"],
    cons: ["Smaller brand, verify current reviews", "Pen requires periodic charging", "OCR and text conversion accuracy should be verified"],
    bestFor: "Buyers wanting an eco-friendly smart pen and paper set under $300.",
  },
  {
    id: "ophayapen-u300",
    rank: 8,
    badge: "Best Mid-Range Smart Pen Under $300",
    name: "Ophayapen Smart Pen and Smart Digital Notebook, Real-time Mobile Sync",
    price: "$99.13",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/411Fba5TlmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FM3WLT2H?tag=deskfinds0d-20",
    description:
      "The Ophayapen set sits comfortably under $300, syncing notes to your phone in real time with a compact pen and notebook combination. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nIt's a reasonable mid-tier pick within this price range for buyers who want more capability than the cheapest smart pens. Still writes on real paper, appropriate for buyers who want digital sync without switching to a glass screen.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Real-time mobile sync", "Compact pen and notebook set", "Mid-range price under $300"],
    pros: ["Comfortably under $300", "Real-time mobile sync while writing", "Compact pen and notebook combination", "Still writes on real paper"],
    cons: ["Pen requires periodic charging", "Smaller brand, verify current reviews", "Bulkier overall than a paper-only notepad"],
    bestFor: "Buyers wanting a mid-range real-time smart pen set within this budget.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Every price checked against verified current data before inclusion", description: "Confirmed each product's actual listed price is genuinely under $300 using verified pricing data, excluding anything unconfirmed or over the ceiling." },
  { title: "Feature richness weighed within the price ceiling", description: "Prioritized picks offering the most capability, such as real-time sync or OCR, within this wider budget compared to the strictest budget tier." },
  { title: "Paper notebooks and smart pen sets compared on their own terms", description: "Weighed reusable paper notebooks against smart pen sets within the same price range rather than assuming one type is automatically better value." },
  { title: "Ecosystem maturity noted for smaller brands", description: "Flagged where a smart pen brand is less established than Rocketbook or reMarkable, worth checking current reviews before buying." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Under $300 Opens Up Real-Time Smart Pen Sets",
    note: "This price ceiling is wide enough to include smart pen sets with real-time sync, not just reusable paper notebooks, but still well below most standalone e-ink hardware devices. If real-time digital capture matters to you, this range is where it becomes affordable.",
  },
  {
    subheading: "Decide Between Paper-Only and Smart Pen Sync Within This Budget",
    note: "A reusable paper notebook is the cheapest option within this range and works well if scan-later digitization suits your workflow. A smart pen set costs more within the same ceiling but adds real-time sync, worth the extra cost if you need notes searchable immediately.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most established budget-friendly notebook", "Rocketbook Core"],
        ["Structured planner layout for agendas", "Rocketbook Fusion Hybrid Reusable Planner Notebook"],
        ["Cheapest real-time smart pen with OCR", "SyncPen Digital Notebook Smart Pen Set"],
        ["Eco-friendly real-time smart set", "Smart Sync Reusable Notebook"],
        ["Mid-range real-time smart pen", "Ophayapen Smart Pen and Smart Digital Notebook"]
      ],
    },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify the current price before buying, not just the guide's stated price", explanation: "Prices change over time, always check the current listing against this $300 ceiling before purchasing." },
  { criterion: "Decide if real-time sync is worth the extra cost within this budget", explanation: "Smart pen sets cost more than plain paper notebooks within this range but add real-time digitization, weigh that against your actual need for instant sync." },
  { criterion: "Check smart pen brand reputation and current reviews", explanation: "Several smart pen options in this range are from smaller, less established brands than Rocketbook or reMarkable, verify current reviews before buying." },
  { criterion: "Factor in the erasable pen cost for paper notebooks if not included", explanation: "Rocketbook-style notebooks generally need a specific erasable pen, check whether it's bundled or add it to your total budget." },
];

export const faq: FaqItem[] = [
  { q: "What's the best digital notebook under $300?", a: "It depends on your priority: the Rocketbook Core is the most established budget-friendly notebook, while SyncPen offers real-time sync and OCR at an affordable price within this range." },
  { q: "Can I get a smart pen with real-time sync under $300?", a: "Yes, several smart pen sets like SyncPen and the Ophayapen fall well under this price ceiling and offer genuine real-time handwriting sync." },
  { q: "Are e-ink digital notebooks available under $300?", a: "Generally no, most standalone e-ink hardware devices start above $300, this price range is dominated by reusable paper notebooks and smart pen sets instead." },
  { q: "Do I need to verify prices before buying?", a: "Yes, prices change over time, always check the current listing against your budget rather than relying solely on a guide's stated price." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-budget-digital-notebooks", title: "Best Budget Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-under-500", title: "Best Digital Notebooks Under $500 (2026)" },
  { href: "/guide/best-smart-digital-notebooks", title: "Best Smart Digital Notebooks (2026)" },
];
