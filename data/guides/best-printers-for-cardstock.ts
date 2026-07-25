export const guideSlug = "best-printers-for-cardstock";
export const guideTitle = "8 Best Printers for Cardstock in 2026";
export const metaTitle = "Best Printers for Cardstock in 2026 (Invitations & Crafts)";
export const metaDescription =
  "8 best printers for cardstock in 2026 for invitations, greeting cards, and craft projects. Compare max paper weight, feed path, and jam risk by model.";
export const mainKeyword = "printer for cardstock";
export const introParagraphs = [
  "Printing on cardstock is not the same task as printing on plain paper, and a printer that handles standard 20lb office paper without issue can jam, smudge, or simply refuse to pull heavier 65lb to 110lb stock through its rollers. The right pick depends on how the printer feeds thick paper, whether it uses ink or toner, and how far you can adjust the print head clearance for very heavy stock.",
  "Below are 8 printers we evaluated for cardstock handling, from budget inkjets that manage light cardstock through the rear tray to an ink-tank workhorse built for high-volume invitation runs, ranging from $64.00 to $209.99.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg";

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
    id: "canon-pixma-ts4320-cardstock",
    rank: 1,
    badge: "Best Budget Pick for Light Cardstock",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=deskfinds0d-20",
    description:
      "The PIXMA TS4320 is a compact color inkjet that handles occasional cardstock projects like greeting cards and light invitations through its standard tray, with duplex printing for two-sided cards. Inkjet's mechanical print process is gentler on thick stock than a laser fuser, so cards come out flat rather than warped.\n\nIt is a general-purpose home printer rather than a cardstock specialist, so buyers running frequent heavy stock jobs should expect to check the manual for the maximum supported weight before loading anything past standard cardstock. At this price it is best treated as a starter option for occasional craft projects, not a daily invitation-printing workhorse.",
    specs: [
      "Color inkjet, duplex printing",
      "Standard paper tray feed",
      "Copier and scanner built in",
      "Compact home printer footprint",
      "Wireless printing",
    ],
    pros: [
      "Lowest price in this list",
      "Inkjet avoids the heat-warping risk of laser on thick stock",
      "Duplex printing for two-sided cards",
      "Easy setup for occasional use",
    ],
    cons: [
      "No rear straight-feed slot for heavier stock",
      "Not built for high-volume cardstock runs",
      "General AIO printer rather than a cardstock specialist",
    ],
    bestFor: "Occasional greeting cards and light invitations on a budget",
  },
  {
    id: "canon-pixma-tr4720-cardstock",
    rank: 2,
    badge: "Best with Auto Document Feeder",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXKNB9?tag=deskfinds0d-20",
    description:
      "The PIXMA TR4720 adds an automatic document feeder to the same basic inkjet formula, useful if cardstock printing is only part of your workload and you also scan or copy multi-page documents regularly. It handles light to medium cardstock through its main tray without excessive smudging thanks to inkjet's cooler print process.\n\nLike other general AIO printers in this list, it is not marketed as a dedicated cardstock or specialty-media printer, so buyers planning heavier stock projects like textured invitation cardstock should stick to lighter weights or verify compatibility before a large print run.",
    specs: [
      "Color inkjet all-in-one with ADF",
      "Mobile printing and built-in fax",
      "Standard tray paper feed",
      "Compact home office design",
      "Wireless connectivity",
    ],
    pros: [
      "Auto document feeder useful beyond cardstock projects",
      "Inkjet handles light cardstock without warping",
      "Affordable entry price",
      "Fax included for document workflows",
    ],
    cons: [
      "No dedicated rear feed for thick stock",
      "General AIO, not a cardstock specialist",
      "Best kept to lighter cardstock weights",
    ],
    bestFor: "Buyers who need light cardstock printing plus document scanning",
  },
  {
    id: "hp-deskjet-4355-cardstock",
    rank: 3,
    badge: "Best for Mixed Photo and Card Projects",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=deskfinds0d-20",
    description:
      "The DeskJet 4355 covers print, scan, and copy in a small chassis and is a reasonable choice for buyers splitting their cardstock projects with occasional photo printing, since both benefit from inkjet's smoother color gradients. A 3-month Instant Ink trial is included, though cardstock printing typically uses more ink per page than plain paper.\n\nAs with the other budget inkjets here, it is a general-purpose AIO rather than a printer engineered specifically for heavy stock, so buyers should stay within light to medium cardstock weights and check the printer's manual for its tray thickness limit before a large batch job.",
    specs: [
      "Color inkjet all-in-one",
      "3-month Instant Ink trial included",
      "AI-capable printing features",
      "Standard tray feed",
      "Compact home design",
    ],
    pros: [
      "Good for mixed photo and cardstock projects",
      "Included Instant Ink trial offsets initial ink cost",
      "Inkjet output avoids laser warping on thick stock",
      "Simple wireless setup",
    ],
    cons: [
      "No rear straight-feed slot mentioned",
      "General AIO printer, not a cardstock specialist",
      "Ink cost rises after the trial period ends",
    ],
    bestFor: "Buyers who want one printer for both cardstock crafts and photos",
  },
  {
    id: "canon-pixma-ts6520-cardstock",
    rank: 4,
    badge: "Best with OLED Display",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=deskfinds0d-20",
    description:
      "The PIXMA TS6520 steps up from the TS4320 with a 1.42-inch OLED display for easier menu navigation and duplex printing for two-sided cards and invitations. Its inkjet engine handles light cardstock cleanly, and the intuitive control panel makes it easier to select media type settings when switching between plain paper and cardstock.\n\nMedia type settings matter more than most buyers realize, since selecting the correct paper type in the driver adjusts ink volume and drying behavior for thicker stock. It remains a general home AIO printer rather than a specialty cardstock printer, so heavier stock beyond typical greeting-card weight is not guaranteed to feed reliably.",
    specs: [
      "Color inkjet, duplex printing",
      "1.42-inch OLED display",
      "Copier and scanner included",
      "Compact design with intuitive controls",
      "Wireless printing",
    ],
    pros: [
      "OLED display simplifies selecting the correct media type",
      "Duplex printing for two-sided cards",
      "Inkjet avoids heat-warping thick stock",
      "1-year limited warranty included",
    ],
    cons: [
      "Still a general AIO, not a dedicated cardstock printer",
      "No confirmed rear straight-feed slot",
      "Best for light to medium cardstock only",
    ],
    bestFor: "Buyers who want easier media-type control for occasional card projects",
  },
  {
    id: "brother-dcp-l2640dw-cardstock",
    rank: 5,
    badge: "Best Laser Option (Light Stock Only)",
    name: "Brother DCP-L2640DW Wireless Compact Monochrome Laser",
    price: "$209.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPLFTPCV?tag=deskfinds0d-20",
    description:
      "The DCP-L2640DW is a monochrome laser printer, and laser printers use a heated fuser to bond toner to paper, which means cardstock run through a laser engine carries a real risk of heat warping compared to inkjet's cooler process. It suits buyers printing black-and-white cardstock inserts, program booklets, or index-card-style materials where color is not needed.\n\nThis is the pick to choose only if you specifically want laser's crisp, smudge-proof text on lighter cardstock weights and understand the warping tradeoff on heavier stock. For color cardstock projects like invitations, one of the inkjet or ink-tank picks in this list is the safer choice.",
    specs: [
      "Monochrome laser engine",
      "Automatic duplex printing",
      "Copy and scan built in",
      "Wireless and mobile printing",
      "Compact footprint",
    ],
    pros: [
      "Crisp, smudge-proof black text on light cardstock",
      "Duplex printing built in",
      "Toner does not smear like wet ink",
      "Reliable for text-heavy card inserts",
    ],
    cons: [
      "Heat from the laser fuser risks warping thicker cardstock",
      "No color output",
      "Higher price than the inkjet picks in this list",
    ],
    bestFor: "Black-and-white cardstock inserts and booklets where warping risk on lighter stock is acceptable",
  },
  {
    id: "epson-ecotank-et-2800-cardstock",
    rank: 6,
    badge: "Best for Frequent Cardstock Projects",
    name: "Epson EcoTank ET-2800 Wireless Color All-in-One Supertank Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8DN2H?tag=deskfinds0d-20",
    description:
      "The EcoTank ET-2800 replaces disposable cartridges with refillable ink tanks, which matters for anyone printing cardstock regularly, since cardstock projects use more ink per page than plain paper and cartridge costs add up quickly on a craft or small-business card business. Inkjet output keeps thick stock flat rather than heat-warped.\n\nIt does not advertise a dedicated thick-media rear slot, so buyers running heavier invitation or specialty cardstock should test a single sheet through the standard tray first and watch for feed resistance before committing to a full batch.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Bottled ink included",
      "Designed for frequent, regular-volume printing",
    ],
    pros: [
      "Ink bottle refills cost far less per page for high cardstock volume",
      "Inkjet output avoids laser warping",
      "Scan and copy included",
      "Good fit for a recurring card-making hobby or small shop",
    ],
    cons: [
      "No confirmed dedicated thick-media feed slot",
      "Larger footprint than basic inkjets",
      "Higher upfront cost than budget inkjets",
    ],
    bestFor: "Frequent cardstock projects and small card-making businesses watching ink cost",
  },
  {
    id: "epson-ecotank-et-4800-cardstock",
    rank: 7,
    badge: "Best with ADF and Ethernet",
    name: "Epson EcoTank ET-4800 Wireless All-in-One Supertank Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31G4p897b8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09P45LR5T?tag=deskfinds0d-20",
    description:
      "The ET-4800 pairs EcoTank's low-cost-per-page ink system with an automatic document feeder, fax, and Ethernet, useful for a home office that mixes cardstock projects with regular document work. The ink-tank system keeps per-sheet cost manageable for anyone printing cardstock in volume.\n\nAs with the ET-2800, there is no advertised dedicated straight-through slot built specifically for very heavy stock, so test a sample sheet before a full run of thicker specialty cardstock, and expect the best results on standard 65lb to 80lb weights rather than the heaviest options on the market.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Automatic document feeder and fax",
      "Ethernet and wireless connectivity",
      "Color print, scan, and copy",
      "Designed for home office use",
    ],
    pros: [
      "Ink-tank economics for high cardstock volume",
      "ADF and fax useful for a mixed home office workload",
      "Ethernet option for a stable wired connection",
      "Inkjet keeps cardstock flat",
    ],
    cons: [
      "Largest footprint in this list",
      "No confirmed heavy-stock straight-feed path",
      "Higher price than basic inkjets",
    ],
    bestFor: "Home offices mixing frequent cardstock printing with document scanning and faxing",
  },
  {
    id: "canon-megatank-g3270-cardstock",
    rank: 8,
    badge: "Best MegaTank Value Pick",
    name: "Canon MegaTank G3270 All-in-One Wireless Inkjet Printer",
    price: "$159.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31jPKfRqWSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BSMSYM9N?tag=deskfinds0d-20",
    description:
      "The MegaTank G3270 brings refillable ink-tank economics to a lower price point than the EcoTank picks above, a reasonable option for cardstock and craft printing where ink volume adds up over time. Inkjet's cooler print process keeps cardstock flat, and the tank system avoids the cost spiral of cartridges on ink-heavy card designs.\n\nIt covers print, scan, and copy without a document feeder or fax, so it suits a dedicated crafting or card-printing setup more than a full home-office workflow. As with the other inkjets here, verify a sample sheet's feed before printing a large batch of unusually thick or textured cardstock.",
    specs: [
      "MegaTank refillable ink system",
      "Print, scan, and copy",
      "Wireless printing",
      "Compact for an ink-tank printer",
      "Home use design",
    ],
    pros: [
      "Lower entry price than the EcoTank ink-tank picks",
      "Ink-tank economics for volume cardstock printing",
      "Inkjet avoids heat warping",
      "Good dedicated crafting printer",
    ],
    cons: [
      "No document feeder or fax",
      "No confirmed thick-media rear slot",
      "Best suited to standard cardstock weights, not the heaviest specialty stock",
    ],
    bestFor: "Dedicated card-making and craft setups prioritizing ink-tank savings",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Print engine type and warping risk",
    description: "Weighed inkjet's cooler mechanical process against laser's heated fuser, since fuser heat is the main cause of cardstock warping on heavier stock.",
  },
  {
    title: "Feed path and tray design",
    description: "Checked whether each model offers a standard tray only or additional straight-through feed options, since curved feed paths are more prone to jamming on thick stock.",
  },
  {
    title: "Ink or toner economics at cardstock volume",
    description: "Compared cartridge, ink-tank, and toner running costs, since cardstock projects use more ink or toner per page than plain paper printing.",
  },
  {
    title: "Media-type control and duplex support",
    description: "Considered whether a model makes it easy to select the correct media type in the driver and whether duplex printing is available for two-sided cards.",
  },
  {
    title: "Honest fit for cardstock vs general use",
    description: "Distinguished true cardstock-capable inkjets from general all-in-one printers included as budget alternatives, rather than presenting every pick as a specialist.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Check max cardstock weight by feed path, not just the spec sheet total",
    explanation:
      "A printer's standard tray often tops out around 65lb to 80lb cardstock, while a dedicated rear straight-feed slot, when a model has one, can typically handle heavier 100lb to 110lb stock because paper travels in a straight line instead of curving through rollers. Loading heavy stock into the wrong path is one of the most common causes of a jam on the first sheet.",
  },
  {
    criterion: "Laser warps heavy cardstock, inkjet risks smudging before it dries",
    explanation:
      "A laser printer's heated fuser can visibly warp or curl cardstock over roughly 80lb weight, since the paper passes through heat and pressure rollers to bond toner. Inkjet avoids that heat risk entirely but lays down wet ink, so handle freshly printed cardstock by the edges for a minute or two before stacking to avoid smudged ink transferring between sheets.",
  },
  {
    criterion: "Check the print head gap or thickness lever before loading thick stock",
    explanation:
      "Some printers physically cannot accept cardstock past a certain thickness without adjusting an internal paper-thickness lever or gap setting, and forcing overly thick stock through without this adjustment risks a paper jam or a scraped print head. Check the printer's manual for a thickness adjustment before attempting anything heavier than standard greeting-card stock.",
  },
  {
    criterion: "Select the correct media type in the print driver",
    explanation:
      "Choosing plain paper as the media type when printing cardstock under-doses ink and can cause dull colors, while selecting the cardstock or heavy-media option adjusts ink volume and drying time appropriately. This single driver setting affects both print quality and how likely the sheet is to smudge or jam.",
  },
  {
    criterion: "Ink-tank printers pay off fastest for frequent cardstock projects",
    explanation:
      "Cardstock printing uses noticeably more ink per page than plain paper because of larger solid-color areas common on invitations and cards. A refillable ink-tank printer like the EcoTank or MegaTank picks in this list keeps per-page cost low for anyone printing cardstock regularly, while cartridge-based inkjets become expensive fast at volume.",
  },
  {
    criterion: "Test one sheet before running a full batch",
    explanation:
      "Even printers rated for cardstock vary sheet to sheet depending on texture, coating, and humidity, so print a single test sheet of your specific cardstock before committing to a batch of 50 invitations. This catches feed issues, color problems, or drying time surprises before they cost you paper.",
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
    subheading: "By Project Type",
    intro:
      "The right printer for cardstock depends heavily on whether you need color, volume, or just occasional light printing.",
    cards: [
      {
        label: "Occasional greeting cards or invitations",
        text: "The Canon PIXMA TS4320 or TR4720 handle light cardstock affordably without a big upfront investment.",
      },
      {
        label: "Frequent card-making hobby or small business",
        text: "The Epson EcoTank ET-2800 or Canon MegaTank G3270 keep ink cost manageable at high cardstock volume.",
      },
      {
        label: "Black-and-white program booklets or index cards",
        text: "The Brother DCP-L2640DW delivers crisp, smudge-proof text on lighter cardstock, with the tradeoff of laser heat risk on heavier stock.",
      },
      {
        label: "Mixed cardstock and photo projects",
        text: "The HP DeskJet 4355 covers both with inkjet's smoother color gradients.",
      },
    ],
  },
  {
    subheading: "Max Cardstock Weight by Feed Path",
    table: {
      headers: ["Feed path", "Typical max weight", "Jam risk"],
      rows: [
        ["Standard curved tray", "Up to roughly 65-80lb", "Higher on stock over 80lb"],
        ["Rear straight-through slot (when available)", "Up to roughly 100-110lb", "Lower, paper doesn't curve through rollers"],
        ["None of these 8 picks advertise a dedicated heavy-media slot", "Stay at or under 80lb for reliable results", "Test a single sheet first"],
      ],
    },
    note: "None of the printers in this list are marketed as specialty thick-media printers, so treat 80lb as a practical ceiling unless you've tested heavier stock successfully yourself.",
  },
  {
    subheading: "Laser vs Inkjet for Cardstock",
    table: {
      headers: ["Engine type", "Warping risk", "Best use case"],
      rows: [
        ["Laser (Brother DCP-L2640DW)", "Higher on stock over 80lb due to fuser heat", "Black-and-white light cardstock inserts"],
        ["Standard inkjet (Canon PIXMA, HP DeskJet)", "Low, but ink needs drying time", "Occasional color cards and invitations"],
        ["Ink-tank inkjet (EcoTank, MegaTank)", "Low, same as standard inkjet", "High-volume color cardstock projects"],
      ],
    },
  },
  {
    subheading: "By Print Volume and Ink Cost",
    table: {
      headers: ["Cardstock volume", "Best fit", "Recommended pick"],
      rows: [
        ["Under 20 cards/month", "Budget cartridge inkjet", "Canon PIXMA TS4320"],
        ["20-100 cards/month", "Mid-range inkjet with duplex", "Canon PIXMA TS6520"],
        ["100+ cards/month", "Ink-tank system", "Epson EcoTank ET-2800 or Canon MegaTank G3270"],
        ["Card business with document needs", "Ink-tank with ADF and fax", "Epson EcoTank ET-4800"],
      ],
    },
  },
  {
    subheading: "Honest Fit: Specialist vs General Printer",
    intro:
      "It's worth being clear that none of the 8 picks in this list are marketed as dedicated cardstock or specialty-media printers. They are general home and home-office inkjets and one laser that handle light to medium cardstock reasonably well.",
    note: "If your project involves heavy 110lb+ specialty cardstock or textured stock at high volume, research a printer explicitly rated for thick media by the manufacturer before committing to a large batch.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What is the maximum cardstock weight a home printer can handle?",
    a: "Most standard trays top out around 65lb to 80lb cardstock, while a rear straight-through feed slot, when a printer has one, can often handle up to 100lb to 110lb because the paper travels in a straight line rather than curving through rollers. None of the printers in this list advertise a dedicated heavy-media slot, so 80lb is a practical ceiling for reliable results.",
  },
  {
    q: "Does laser or inkjet work better for cardstock?",
    a: "Inkjet generally has an edge for cardstock because it uses a cooler mechanical process, avoiding the heat-warping risk that a laser printer's fuser can cause on stock over roughly 80lb. Laser, like the Brother DCP-L2640DW in this list, still works well for lighter black-and-white cardstock where crisp, smudge-proof text matters more than color.",
  },
  {
    q: "Why does my printer jam or refuse to pull cardstock?",
    a: "Some printers have an internal paper-thickness lever or gap setting that needs adjusting before thick stock will feed correctly, and skipping this step is a common cause of jams. Also check that you're using the correct tray or feed path, since a curved standard tray struggles more with thick stock than a straight-through path.",
  },
  {
    q: "Do I need a special printer setting for cardstock?",
    a: "Yes, selecting the cardstock or heavy-media option in your print driver instead of plain paper adjusts ink volume and drying behavior appropriately. Skipping this step, especially on inkjet, can result in under-saturated colors or ink that takes longer to dry and smudges when stacked.",
  },
  {
    q: "Is an ink-tank printer worth it for cardstock printing?",
    a: "If you print cardstock regularly, yes. Cardstock projects use more ink per page than plain paper due to larger solid-color areas, and a refillable ink-tank printer like the EcoTank ET-2800 or MegaTank G3270 keeps per-page cost low compared to cartridge-based inkjets, which get expensive fast at volume.",
  },
  {
    q: "Should I test cardstock before printing a full batch of invitations?",
    a: "Yes, always print one test sheet of your specific cardstock first. Feed reliability, color output, and drying time can vary by texture, coating, and humidity even on printers rated to handle cardstock well, and a single test sheet catches problems before they cost you a whole batch of paper.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-for-envelopes", title: "Best Printers for Envelopes (2026)" },
  { href: "/guide/best-photo-printers-for-home-use", title: "Best Photo Printers for Home Use (2026)" },
  { href: "/guide/best-printers-for-home-use", title: "Best Printers for Home Use (2026)" },
  { href: "/guide/best-easy-to-use-printers", title: "Best Easy-to-Use Printers (2026)" },
];
