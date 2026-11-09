export const guideSlug = "best-compact-desktop-whiteboards";
export const guideTitle = "5 Best Compact Desktop Whiteboards in 2026";
export const metaTitle = "Best Compact Desktop Whiteboards";
export const metaDescription =
  "5 small desktop whiteboards ranked by writing area relative to footprint, so \"compact\" means space-efficient rather than just narrow packaging.";
export const mainKeyword = "compact desktop whiteboard";
export const introParagraphs = [
  "Compact desktop whiteboards range from 5x7 inch memo pads under $10 to 16x12 inch magnetic boards near $24, and the honest tradeoff is writing area versus desk footprint - a smaller board frees more desk space but gives you less room per note before you need to erase.",
  "We compared actual dimensions and stand designs across this price range rather than assuming \"desktop whiteboard\" search results are interchangeable."
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41FLEFa9xDL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0bvm9yjcs-compactwb",
    rank: 1,
    badge: "Best Overall",
    name: "AMUSIGHT Double-Sided Magnetic White Board with Stand, 16\" x 12\"",
    price: "$18.99",
    rating: "4.6",
    reviews: "1,356",
    imageUrl: "https://m.media-amazon.com/images/I/41FLEFa9xDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVM9YJCS?tag=deskfinds0d-20",
    description: "The largest writing area in this comparison at a mid-range price, double-sided with a magnetic surface for holding notes, backed by a large review base.",
    specs: ["16 x 12 in, double-sided", "Magnetic surface"],
    pros: ["Largest usable writing area in this comparison", "Magnetic surface adds note-holding functionality"],
    cons: ["Larger footprint than the smallest pads in this comparison"],
    bestFor: "Buyers who want the most writing area a genuinely compact board can offer.",
  },
  {
    id: "b09k7g5vw8-compactwb",
    rank: 2,
    badge: "Best Glass Option",
    name: "Small Glass Desktop Whiteboard Dry-Erase, Mini Pure Glass Whiteboard Stand",
    price: "$14.44",
    rating: "4.6",
    reviews: "1,254",
    imageUrl: "https://m.media-amazon.com/images/I/31noWsDrPcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09K7G5VW8?tag=deskfinds0d-20",
    description: "A genuine glass surface at a compact size, avoiding the ghosting risk of cheaper melamine boards, with a large well-established review base.",
    specs: ["Glass writing surface", "Compact stand-mounted design"],
    pros: ["Glass surface resists ghosting better than melamine boards", "Large, well-established review base"],
    cons: ["Smaller writing area than the top pick"],
    bestFor: "Buyers who specifically want a glass surface in a compact footprint.",
  },
  {
    id: "b09mz5zd4n-compactwb",
    rank: 3,
    badge: "Smallest True Glass Option",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board 8 X 6 Inches",
    price: "$16.99",
    rating: "4.7",
    reviews: "1,191",
    imageUrl: "https://m.media-amazon.com/images/I/4180Al3c9zL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MZ5ZD4N?tag=deskfinds0d-20",
    description: "At 8x6 inches this is one of the smallest glass options here, with the highest rating in the comparison, ideal for buyers who genuinely need minimal desk footprint.",
    specs: ["8 x 6 in, glass surface"],
    pros: ["Highest rating of any pick in this comparison", "Genuinely small footprint"],
    cons: ["Small writing area limits notes per session before erasing"],
    bestFor: "Buyers who want the smallest genuine footprint with glass durability.",
  },
  {
    id: "b0f5lzxs3w-compactwb",
    rank: 4,
    badge: "Best Budget Pick",
    name: "Lumspax Small Desktop White Board with Stand, 10\" x 10\" Double-Sided",
    price: "$9.99",
    rating: "4.6",
    reviews: "212",
    imageUrl: "https://m.media-amazon.com/images/I/31YDQS8Gh1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F5LZXS3W?tag=deskfinds0d-20",
    description: "at a budget-friendly price, double-sided for effectively doubling usable writing area within a 10x10 inch footprint, with a solid rating though a smaller review base as a newer listing.",
    specs: ["10 x 10 in, double-sided"],
    pros: ["Cheapest board in this comparison", "Double-sided doubles usable writing area within the same footprint"],
    cons: ["Smaller review base than the more established picks here"],
    bestFor: "Budget-focused buyers who still want a double-sided compact board.",
  },
  {
    id: "b0c8777yjq-compactwb",
    rank: 5,
    badge: "Smallest Footprint, Notepad Format",
    name: "Scribbledo Mini Dry Erase Notepad 5x7, Lined Whiteboard Memo, 2 Pack",
    price: "$8.99",
    rating: "4.7",
    reviews: "1,027",
    imageUrl: "https://m.media-amazon.com/images/I/41fFLL-HlwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C8777YJQ?tag=deskfinds0d-20",
    description: "The smallest and cheapest option in this comparison, a 2-pack of 5x7 memo pads for quick notes rather than an upright whiteboard, at the highest rating tied with the TSJ glass pick.",
    specs: ["5x7 in, notepad format", "2-pack"],
    pros: ["Cheapest option, and you get two", "Highest rating tied for this comparison"],
    cons: ["Notepad format, not an upright board - different use case than the stand-mounted picks"],
    bestFor: "Buyers who want the smallest, cheapest option for quick memo notes rather than an upright display board.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Writing area against footprint",
    "description": "We compared 5x7, 8 x 6, 10 x 10 and 16 x 12 inch formats. A compact board should offer the most writing room for the desk space it takes, so AMUSIGHT's 16 x 12 inch face scored highly while TSJ OFFICE's 8 x 6 inch glass was judged as a notes only surface."
  },
  {
    "title": "Glass vs melamine durability",
    "description": "We weighed glass on two picks against coated boards. Glass resists ghosting better than melamine and cleans cleanly, but it is heavier, so we separated the durability gain from the portability cost for each buyer. A chipped corner is the main risk, so keep glass away from desk edges."
  },
  {
    "title": "Double sided and magnetic features",
    "description": "We noted which boards give two faces: AMUSIGHT and Lumspax are double sided, and AMUSIGHT adds a magnetic surface. Extra faces matter more on a small board, where one side fills quickly. Magnets also hold a calendar or card to the board."
  },
  {
    "title": "Upright board vs notepad",
    "description": "We separated stand mounted boards from Scribbledo's flat 5x7 notepad. They solve different problems, because a notepad lies in front of you while a stand keeps notes visible, so we compared them on use instead of price. A notepad is for scratch work, and an upright board is for notes you need to keep in view."
  },
  {
    "title": "Price and daily usability",
    "description": "We compared each board's price tier, from Scribbledo's under $9 two pack to the glass options under $17. Cheap boards wear out sooner, but an expensive one must also be small enough to be kept on a crowded desk, so value weighed heavily."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Desk Space",
    "intro": "Compact is relative, so start with how much free surface you really have.",
    "table": {
      "headers": [
        "Free desk space",
        "Recommended pick"
      ],
      "rows": [
        [
          "Almost none, and a flat notepad will do",
          "Scribbledo Mini Dry Erase Notepad 5x7, which lies flat in a drawer"
        ],
        [
          "A narrow gap beside the monitor",
          "TSJ OFFICE Small Desktop Whiteboard, 8 x 6 inch glass"
        ],
        [
          "A moderate area behind the keyboard",
          "Lumspax Small Desktop White Board with Stand, 10 x 10 double sided"
        ],
        [
          "A full width area for a larger board",
          "AMUSIGHT Double-Sided Magnetic White Board with Stand, 16 x 12"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "All five stay under $20, so the choice is about surface and size.",
    "table": {
      "headers": [
        "Price bucket",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $9 for a two pack of notepads",
          "Scribbledo Mini Dry Erase Notepad 5x7"
        ],
        [
          "Under $10 for a double sided stand board",
          "Lumspax Small Desktop White Board with Stand"
        ],
        [
          "Under $15 for glass at a modest size",
          "Small Glass Desktop Whiteboard Dry-Erase, Mini Pure Glass"
        ],
        [
          "Under $17 for the smallest glass board",
          "TSJ OFFICE Small Desktop Whiteboard, 8 x 6 inches"
        ],
        [
          "Under $19 for the largest area here",
          "AMUSIGHT Double-Sided Magnetic White Board with Stand"
        ]
      ]
    }
  },
  {
    "subheading": "Glass vs Coated Surface",
    "intro": "Surface material changes how the board ages.",
    "cards": [
      {
        "label": "Glass (Small Glass Desktop Whiteboard, TSJ OFFICE 8 x 6)",
        "text": "Resists ghosting and streaking, so ink wipes off completely even after weeks, but it is heavier and can chip if knocked off a desk. The writing areas are smaller."
      },
      {
        "label": "Coated or paper surface (AMUSIGHT, Lumspax, Scribbledo)",
        "text": "Lighter and cheaper with more writing area per dollar, but ghosting builds over time if you leave ink on. AMUSIGHT adds magnets and two faces for flexible use."
      }
    ],
    "note": "Choose glass if you use the board daily and want it to stay clean; choose coated if you want maximum area for the least money."
  },
  {
    "subheading": "By Workflow",
    "intro": "Think about what you will actually write.",
    "table": {
      "headers": [
        "If you mostly",
        "Recommended pick"
      ],
      "rows": [
        [
          "Jot meeting notes and wipe them",
          "Lumspax 10 x 10, with its two faces"
        ],
        [
          "Pin reference notes with magnets",
          "AMUSIGHT 16 x 12, the magnetic pick"
        ],
        [
          "Keep a small daily checklist on a tidy desk",
          "TSJ OFFICE 8 x 6 glass board"
        ],
        [
          "Doodle during calls and discard it",
          "Scribbledo 5x7 notepad, cheapest to replace"
        ]
      ]
    }
  },
  {
    "subheading": "For a Shared Cubicle or Dorm Desk Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A footprint that fits in a small space, a stable stand, a surface that wipes clean and a size that will not block the monitor."
      },
      {
        "label": "In this comparison",
        "text": "Lumspax and the glass options sit at low angles, and the AMUSIGHT gives the most area when you can spare the depth."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a durable surface, because the glass picks cost only a few dollars more than the coated boards and keep their finish. For a larger upright board, see the freestanding desktop whiteboards guide."
      },
      {
        "label": "Save if",
        "text": "Your use is occasional, so the Scribbledo notepad or the Lumspax covers it for under $10."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Weigh writing area against footprint, not just overall size", explanation: "A truly compact board should give you a good writing-area-to-footprint ratio, not just be small in every dimension.  Compare the writing area with the footprint in the listing, and note that the AMUSIGHT gives 16 x 12 inches while the TSJ OFFICE is only 8 x 6, so the second offers far less space per inch of desk. Measure your free space in inches and compare with the listing." },
  { criterion: "Consider glass over melamine if ghosting matters to you", explanation: "Glass surfaces resist marker ghosting better over repeated use than cheaper melamine boards.  Glass holds up better because melamine ghosts quickly under heavy use. Check the title for the word glass, and be aware glass is heavier and can chip if knocked off a desk. Glass is worth it only if you write on the board most days." },
  { criterion: "Check if double-sided fits your workflow", explanation: "A double-sided board effectively doubles usable writing area within the same desk footprint.  Count faces in the title. Double sided boards like AMUSIGHT and Lumspax give two writing faces, so you can keep a reference list on one and a scratch area on the other. Flip the board when one side is full instead of erasing a list you still need." },
  { criterion: "Decide between an upright board and a memo notepad format", explanation: "Notepad-format products like the Scribbledo work differently than stand-mounted boards - pick based on your actual use case.  Scribbledo is a 5x7 notepad, not an upright board. If you need to see notes at a glance from a distance, choose an upright stand instead of a pad. The two formats do different jobs, so you may want both." },
  { criterion: "Weigh review volume alongside rating", explanation: "A large, well-established review base is more reliable evidence than a small sample with a similarly high rating.  Read the spec line for dimensions and surface material, and prefer the board whose written details match your use over one whose reputation is unclear. Use it as one clue next to the stated size and material." }
];

export const faq: FaqItem[] = [
  {
    "q": "How small is too small for a desktop whiteboard?",
    "a": "Under about 8 x 6 inches you fit only a few short lines before erasing. The TSJ OFFICE and Scribbledo 5x7 suit single notes, while the Lumspax 10 x 10 and AMUSIGHT 16 x 12 give room for a short list. Fit your usual list length before choosing a size."
  },
  {
    "q": "What is the most common mistake with compact boards?",
    "a": "Judging by the board size alone instead of writing area per footprint. A thick frame wastes space. Check the actual writing dimensions, and consider a double sided board when desk space is tight. A board that is big on paper can still be tiny where you write."
  },
  {
    "q": "Is the AMUSIGHT worth it over the Lumspax?",
    "a": "The AMUSIGHT gives 16 x 12 inches double sided with a magnetic surface for under $19, while Lumspax gives 10 x 10 double sided for under $10. Choose the AMUSIGHT if you have the depth and want magnets, otherwise the Lumspax."
  },
  {
    "q": "How do I set up a compact whiteboard?",
    "a": "Open the stand, set it on a flat spot and test with a marker. Keep it clear of the keyboard and monitor stand, and use a felt pad under it if it slips on a glossy desk. Keep the stand clear of the cables behind the monitor."
  },
  {
    "q": "How do I stop shadows on the board?",
    "a": "Erase soon after writing, and wipe with a microfiber cloth. Glass resists ghosting best. If shadows build up on a coated board, a drop of whiteboard cleaner helps lift them. Switching to a fresh marker also helps, because dry markers leave more residue."
  },
  {
    "q": "Can I use a Scribbledo notepad as a desk board?",
    "a": "Yes for quick notes, but it lies flat instead of standing, so it is no substitute for an upright board. It suits a drawer or a pocket, and it costs less than a pack of markers. Keep a marker on hand so you do not hunt for one mid note."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" },
  { href: "/guide/best-personal-desktop-whiteboards", title: "Best Personal Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboard-pads", title: "Best Desktop Whiteboard Pads (2026)" }
];
