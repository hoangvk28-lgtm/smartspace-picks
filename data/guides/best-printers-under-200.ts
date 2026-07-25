export const guideSlug = "best-printers-under-200";
export const guideTitle = "7 Best Printers Under $200 in 2026";
export const metaTitle = "Best Printers Under $200 in 2026 (Verified Prices)";
export const metaDescription =
  "7 best printers under $200 in 2026, all verified current pricing. Compare inkjet all-in-ones against entry ink-tank models on duplex, ADF, and true cost per page.";
export const mainKeyword = "printers under $200";
export const introParagraphs = [
  "At $200 you can finally choose between a well-specced inkjet all-in-one and an entry-level ink-tank printer, a real tradeoff between upfront price, print speed, and long-run ink cost that lower price tiers don't offer. Duplex printing and an automatic document feeder start showing up more often here too, though still not on every model.",
  "Below are 7 printers we evaluated at this price tier, ranked on true cost per page, feature completeness, and how well each one fits either occasional home use or a busier home office.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg";

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "epson-ecotank-et-2800-supertank",
    rank: 1,
    badge: "Best Ink-Tank Value",
    name: "Epson EcoTank ET-2800 Wireless Color All-in-One Supertank Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8DN2H?tag=deskfinds0d-20",
    description:
      "The ET-2800 brings genuine ink-tank economics right at the $200 ceiling, replacing disposable cartridges with refillable tanks that cut cost per page dramatically for anyone printing regularly. Scan and copy are included alongside print in a compact home-office design.\n\nThis is the pick that makes the strongest case against a cheaper cartridge printer once you run the math on a year of moderate-to-heavy home printing, the higher upfront cost pays back steadily as cartridge refills would have added up.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Bottled ink refills included",
      "Compact home-office design",
    ],
    pros: [
      "Lowest ongoing cost per page in this list",
      "Scan and copy included",
      "No cartridges to run dry mid-print",
      "Genuinely fits under the $200 ceiling",
    ],
    cons: [
      "Higher upfront cost than the cartridge inkjets in this list",
      "No fax or automatic document feeder",
      "Larger footprint than a compact cartridge inkjet",
    ],
    bestFor: "Households or small offices printing regularly who want the lowest long-run ink cost",
  },
  {
    id: "epson-ecotank-et-4800-supertank-adf",
    rank: 2,
    badge: "Best Ink-Tank with ADF and Fax",
    name: "Epson EcoTank ET-4800 Wireless All-in-One Supertank Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31G4p897b8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09P45LR5T?tag=deskfinds0d-20",
    description:
      "The ET-4800 matches the ET-2800's ink-tank economics but adds an automatic document feeder, fax, and Ethernet connectivity, features that matter more for a home office handling multi-page paperwork than a household printing occasionally. It's built for a busier workload.\n\nAt the same $199.99 price as the simpler ET-2800, this is the better pick whenever the extra document-handling features are actually useful, since there's no cost penalty for the added functionality.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Automatic document feeder (ADF)",
      "Print, scan, copy, and fax",
      "Ethernet and wireless connectivity",
      "Built for home office workloads",
    ],
    pros: [
      "Same ink-tank economics as the ET-2800 with more features",
      "ADF and fax included at no extra cost",
      "Ethernet option for a stable wired connection",
      "Genuinely fits under the $200 ceiling",
    ],
    cons: [
      "Larger footprint than the simpler ET-2800",
      "Overkill if you don't need ADF or fax",
      "Higher upfront cost than the cartridge inkjets in this list",
    ],
    bestFor: "Home offices needing ink-tank economics plus document feeding and fax",
  },
  {
    id: "hp-smart-tank-5101-under200",
    rank: 3,
    badge: "Best Compact Ink-Tank",
    name: "HP Smart Tank 5101 Wireless All-in-One Refillable Printer",
    price: "$169.89",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41xOh51IRUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BL466Y41?tag=deskfinds0d-20",
    description:
      "The Smart Tank 5101 brings ink-tank savings to a smaller footprint than the Epson EcoTank picks, with 2 years of ink included in the box, a meaningful early cost offset. Print, scan, and copy cover the core needs of most households.\n\nWireless runs on 2.4GHz only, worth checking against your router setup before buying since some newer routers default to a 5GHz-only guest network that this printer won't join without adjustment.",
    specs: [
      "Refillable ink tank system with 2 years of ink included",
      "Print, scan, and copy",
      "Wireless printing (2.4GHz only)",
      "Compact footprint versus larger ink-tank models",
      "No fax or automatic document feeder",
    ],
    pros: [
      "2 years of ink included lowers early running cost",
      "Compact for an ink-tank printer",
      "Comfortably under the $200 ceiling",
      "Low cost per page once the included ink is factored in",
    ],
    cons: [
      "2.4GHz-only wireless can be a setup snag on some routers",
      "No fax or document feeder",
      "No automatic duplex printing listed",
    ],
    bestFor: "Buyers wanting ink-tank savings in a smaller footprint with ink included upfront",
  },
  {
    id: "canon-megatank-g3270-under200",
    rank: 4,
    badge: "Best for Photo and Document Mix",
    name: "Canon MegaTank G3270 All-in-One Wireless Inkjet Printer",
    price: "$159.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31jPKfRqWSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BSMSYM9N?tag=deskfinds0d-20",
    description:
      "Canon's MegaTank system covers print, scan, and copy with refillable ink tanks at a lower price than the Epson EcoTank picks in this list, a genuine budget-friendly entry into ink-tank ownership. It handles mixed document and photo printing reasonably well for a tank-based system.\n\nThis is worth considering if you want ink-tank economics but don't need the fax or ADF features the pricier Epson ET-4800 includes, saving roughly $40 while keeping the core cost-per-page benefit.",
    specs: [
      "MegaTank refillable ink system",
      "Print, scan, and copy",
      "Wireless printing",
      "Home-use design",
      "Lower entry price than other ink-tank picks here",
    ],
    pros: [
      "Cheapest ink-tank pick in this list",
      "Handles mixed document and photo printing",
      "Low ongoing cost per page",
      "Comfortable margin under the $200 ceiling",
    ],
    cons: [
      "No fax or automatic document feeder",
      "Slower than dedicated cartridge inkjets for quick single documents",
      "Larger footprint than a compact cartridge printer",
    ],
    bestFor: "Budget-conscious buyers wanting ink-tank economics without paying for ADF or fax",
  },
  {
    id: "hp-officejet-pro-8125e-under200",
    rank: 5,
    badge: "Best Cartridge All-in-One with ADF",
    name: "HP OfficeJet Pro 8125e Wireless All-in-One Color Inkjet Printer",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/418KMpgzGBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CT8ZJ7ZC?tag=deskfinds0d-20",
    description:
      "The OfficeJet Pro 8125e packs an automatic document feeder and duplex printing into a cartridge-based inkjet well under the $200 ceiling, leaving significant budget room compared to the ink-tank picks in this list. A 3-month Instant Ink trial helps offset early cartridge cost.\n\nThis is the pick for anyone who wants ADF and duplex without committing to ink-tank ownership, though cartridge costs will run higher per page over time than any of the tank-based options here.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic document feeder (ADF)",
      "Automatic duplex printing",
      "3-month Instant Ink trial included",
      "AI-enabled printing features",
    ],
    pros: [
      "ADF and duplex printing at less than half the $200 ceiling",
      "Instant Ink trial softens early cartridge cost",
      "Full print, scan, copy function set",
      "Leaves the most budget room in this list",
    ],
    cons: [
      "Cartridge cost per page runs higher than ink-tank picks over time",
      "No fax",
      "Cartridge ink can dry out with infrequent use",
    ],
    bestFor: "Buyers who want ADF and duplex printing without ink-tank ownership",
  },
  {
    id: "hp-deskjet-4355-under200",
    rank: 6,
    badge: "Best for Light Use",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=deskfinds0d-20",
    description:
      "The DeskJet 4355 is the simplest, lowest-priced pick in this list, covering print, scan, and copy for light home use with a 3-month Instant Ink trial included. It leaves the most budget headroom under the $200 ceiling of any option here.\n\nFor a household that prints only occasionally, there's little reason to spend closer to the $200 ceiling, this covers the basics reliably at a fraction of the price.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Wireless printing",
      "Compact footprint",
      "AI-capable printing features",
    ],
    pros: [
      "Lowest price in this list by a wide margin",
      "Instant Ink trial offsets early ink cost",
      "Simple wireless setup",
      "Frees up the most budget for other office needs",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Best suited to light, occasional printing only",
    ],
    bestFor: "Light home printing where saving budget matters most",
  },
  {
    id: "brother-dcp-l2640dw-stretch-pick",
    rank: 7,
    badge: "Worth the Stretch (Slightly Over Budget)",
    name: "Brother DCP-L2640DW Wireless Compact Monochrome Laser Printer",
    price: "$209.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPLFTPCV?tag=deskfinds0d-20",
    description:
      "At $209.99, this Brother laser runs slightly over the $200 ceiling of this guide, so we're including it as a stretch pick rather than claiming it fits the budget outright. For anyone printing high volumes of black-and-white text, duplex printing, copy, and scan built into one compact laser unit can be worth the extra ten dollars.\n\nToner-based printing keeps cost per page low compared to every inkjet in this list, and duplex printing cuts paper use automatically. If your printing is almost entirely text and you don't mind stepping just past $200, this is the strongest text-focused option here.",
    specs: [
      "Monochrome laser engine",
      "Automatic duplex (2-sided) printing",
      "Copy and scan built in",
      "Wireless and mobile printing",
      "Compact footprint",
    ],
    pros: [
      "Low cost per page for high-volume text printing",
      "Duplex printing built in",
      "Copy and scan included, unlike the pure-laser picks in this list",
      "Toner doesn't dry out during slow weeks",
    ],
    cons: [
      "Priced slightly above this guide's $200 ceiling",
      "No color output",
      "Larger footprint than the compact cartridge inkjets here",
    ],
    bestFor: "High-volume text printing where a slightly-over-budget laser pays off in running cost",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Inkjet all-in-one vs entry ink-tank tradeoff",
    description: "Compared print speed and upfront cost of cartridge-based inkjets against the long-run cost-per-page advantage of entry ink-tank models available at this tier.",
  },
  {
    title: "Verified current pricing near the $200 ceiling",
    description: "Checked each pick's actual listed price against the $200 ceiling, flagging any pick that ran over rather than silently misstating its price tier.",
  },
  {
    title: "Feature checklist against price",
    description: "Benchmarked duplex printing, automatic document feeder, and wireless support against price, since these features are common but still not universal at $200.",
  },
  {
    title: "Fit for household vs home-office workload",
    description: "Separated picks suited to light occasional home printing from those built for a busier home-office document workflow.",
  },
  {
    title: "True cost per page across ink systems",
    description: "Weighed cartridge, ink-tank, and toner running costs directly against each other, since all three technologies appear in this price tier.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Decide between inkjet all-in-one and entry ink-tank",
    explanation:
      "A cartridge-based inkjet all-in-one like the HP OfficeJet Pro 8125e costs less upfront and often prints faster on a single document, while an entry ink-tank like the Epson EcoTank ET-2800 costs more upfront but drops cost per page dramatically over time. Choose ink-tank if you print more than roughly 100 pages a month.",
  },
  {
    criterion: "Duplex and ADF are common here but still not universal",
    explanation:
      "Four of the seven picks in this list include automatic duplex printing and three include an automatic document feeder, a real step up from the sub-$150 tier, but check the spec sheet directly rather than assuming either is standard at $200.",
  },
  {
    criterion: "Watch for picks that run slightly over the stated ceiling",
    explanation:
      "Prices shift, and a printer marketed at this tier can drift a few dollars over $200 during a promotion lapse. We flag any pick like this clearly as a stretch option rather than silently calling it a $200 printer, and you should do the same gut check against the live Amazon price before buying.",
  },
  {
    criterion: "Ink-tank ADF models cost the same as ink-tank models without ADF",
    explanation:
      "The Epson ET-4800 with ADF and fax lists at the same price as the simpler ET-2800 without them, so there's no cost penalty for choosing the more feature-complete model if you'll actually use the extra functions.",
  },
  {
    criterion: "2.4GHz-only wireless can cause setup friction",
    explanation:
      "Some ink-tank models at this tier, including the HP Smart Tank 5101, only support 2.4GHz wireless networks. Check your router's guest network settings before buying if it defaults to 5GHz-only, since the printer won't join without adjustment.",
  },
  {
    criterion: "Don't overspend on features you won't use",
    explanation:
      "Fax and an automatic document feeder add real cost and footprint, and are wasted on a household that just prints the occasional document. The cheaper cartridge picks in this list cover that lighter use case perfectly well without the extra bulk.",
  },
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By What You Print Most",
    cards: [
      {
        label: "Regular mixed color and document printing",
        text: "The Epson EcoTank ET-2800 offers the lowest ongoing cost per page for households printing often.",
      },
      {
        label: "Home office needing ADF and fax",
        text: "The Epson EcoTank ET-4800 adds document feeding and fax at the same price as the simpler ET-2800.",
      },
      {
        label: "High-volume black-and-white text",
        text: "The Brother DCP-L2640DW, slightly over budget at $209.99, delivers the lowest cost per page for text if you can stretch past $200.",
      },
      {
        label: "Light, occasional home printing",
        text: "The HP DeskJet 4355 covers the basics at the lowest price in this list, leaving the most budget headroom.",
      },
    ],
  },
  {
    subheading: "Inkjet AIO vs Entry Ink-Tank at the $200 Tier",
    intro: "This is the core decision at this price point, print speed and lower upfront cost versus long-run savings.",
    table: {
      headers: ["Priority", "Better fit", "Recommendation"],
      rows: [
        ["Lowest upfront cost, light use", "Cartridge inkjet", "HP DeskJet 4355 or HP OfficeJet Pro 8125e"],
        ["ADF and duplex without ink-tank commitment", "Cartridge inkjet AIO", "HP OfficeJet Pro 8125e"],
        ["Lowest cost per page, regular printing", "Ink-tank", "Epson EcoTank ET-2800 or Canon MegaTank G3270"],
        ["Ink-tank plus ADF and fax", "Ink-tank AIO", "Epson EcoTank ET-4800"],
      ],
    },
    note: "An ink-tank printer's higher upfront cost typically pays back within months of regular printing through cheaper bottle refills versus cartridges, but it's the wrong choice for genuinely light, occasional use.",
  },
  {
    subheading: "Feature Checklist Against Price at This Tier",
    table: {
      headers: ["Feature", "Included in this list?", "Which picks"],
      rows: [
        ["Automatic duplex printing", "Yes, common here", "HP OfficeJet Pro 8125e, Brother DCP-L2640DW"],
        ["Automatic document feeder", "Yes, less common", "Epson EcoTank ET-4800, HP OfficeJet Pro 8125e"],
        ["Fax", "Yes, rare", "Epson EcoTank ET-4800, Brother DCP-L2640DW"],
        ["Ink-tank system", "Yes, several picks", "Epson EcoTank ET-2800/ET-4800, HP Smart Tank 5101, Canon MegaTank G3270"],
      ],
    },
  },
  {
    subheading: "When a Slightly Over-Budget Pick Is Worth It",
    cards: [
      {
        label: "When it is worth stretching",
        text: "If your printing is almost entirely high-volume black-and-white text, the Brother DCP-L2640DW's toner economics and duplex printing can justify going nine dollars past $200.",
      },
      {
        label: "When to stay strictly under $200",
        text: "If you print a mix of color documents and photos, or want to stay firmly within budget, the Epson EcoTank ET-2800 delivers similar long-run savings without exceeding the ceiling.",
      },
    ],
    note: "We flag the Brother DCP-L2640DW clearly as over this guide's stated ceiling rather than rounding it down to fit, check the live Amazon price before buying since prices do shift.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "Should I buy an inkjet all-in-one or an ink-tank printer at $200?",
    a: "It depends on print volume. An ink-tank printer like the Epson EcoTank ET-2800 costs more upfront but drops cost per page significantly if you print more than roughly 100 pages a month. A cartridge inkjet like the HP OfficeJet Pro 8125e costs less upfront and suits lighter, occasional printing.",
  },
  {
    q: "Is the Brother DCP-L2640DW really under $200?",
    a: "No, it lists at $209.99, slightly over this guide's $200 ceiling. We include it as a clearly flagged stretch pick because its toner economics and duplex printing can be worth the extra cost for high-volume text printing, not as a claim that it fits strictly under $200.",
  },
  {
    q: "Do printers at this price include an automatic document feeder?",
    a: "Some do. In this list, the Epson EcoTank ET-4800 and HP OfficeJet Pro 8125e include an ADF, while the other picks do not. Check the spec sheet directly if document feeding matters to your workflow.",
  },
  {
    q: "Which ink-tank printer at this tier is the cheapest?",
    a: "The Canon MegaTank G3270 at $159.00 is the least expensive ink-tank pick in this list, though it skips the ADF and fax features found on the pricier Epson EcoTank ET-4800.",
  },
  {
    q: "Why does the Epson ET-4800 cost the same as the ET-2800 despite having more features?",
    a: "Both list at $199.99 in current pricing. The ET-4800 adds an automatic document feeder, fax, and Ethernet on top of the same ink-tank system as the ET-2800, so there's no price penalty for choosing the more feature-complete model.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-under-150", title: "Best Printers Under $150 (2026)" },
  { href: "/guide/best-printers-under-100", title: "Best Printers Under $100 (2026)" },
  { href: "/guide/best-printers-for-small-businesses", title: "8 Best Printers for Small Businesses (2026)" },
  { href: "/guide/best-printers-for-home-offices", title: "Best Printers for Home Offices (2026)" },
];
