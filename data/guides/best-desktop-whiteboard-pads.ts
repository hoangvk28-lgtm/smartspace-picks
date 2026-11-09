export const guideSlug = "best-desktop-whiteboard-pads";
export const guideTitle = "5 Best Desktop Whiteboard Pads in 2026";
export const metaTitle = "Best Desktop Whiteboard Pads";
export const metaDescription =
  "5 flat notepad-style whiteboards that lie in front of a keyboard rather than standing upright, compared for wrist comfort and desk clearance.";
export const mainKeyword = "desktop whiteboard pad";
export const introParagraphs = [
  "A pad-style whiteboard lies flat or at a low angle in front of your keyboard, which is a genuinely different placement than an upright stand-mounted board - it affects wrist posture and how much desk depth it takes up.",
  "We excluded freestanding upright boards from this list entirely, since those belong in a different use case with different clearance considerations."
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41fFLL-HlwL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0c8777yjq-padwb",
    rank: 1,
    badge: "Best Overall",
    name: "Scribbledo Mini Dry Erase Notepad 5x7, Lined Whiteboard Memo, 2 Pack",
    price: "$8.99",
    rating: "4.7",
    reviews: "1,027",
    imageUrl: "https://m.media-amazon.com/images/I/41fFLL-HlwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C8777YJQ?tag=deskfinds0d-20",
    description: "A genuine flat pad format at 5x7 inches, lined for structured notes, and cheap enough that a 2-pack costs less than most single upright boards.",
    specs: ["5x7 in, flat pad format", "Lined surface", "2-pack"],
    pros: ["Cheapest option, and you get two", "Genuinely flat, low-profile design"],
    cons: ["Small writing area per pad"],
    bestFor: "Buyers who want the cheapest genuine flat pad option.",
  },
  {
    id: "b0b72f9vjq-padwb",
    rank: 2,
    badge: "Best Larger Pad Format",
    name: "Scribbledo Dry Erase Board with Lines for Desk, 9x12 Notebook, Double Sided",
    price: "$8.99",
    rating: "4.7",
    reviews: "1,027",
    imageUrl: "https://m.media-amazon.com/images/I/418NG2kDqiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B72F9VJQ?tag=deskfinds0d-20",
    description: "Same brand and price as the pick above but larger (9x12 in) and double-sided, giving more usable writing area in the same flat-pad format.",
    specs: ["9x12 in, double-sided", "Lined surface"],
    pros: ["More writing area than the 5x7 pad at the same price", "Double-sided doubles usable space"],
    cons: ["Larger footprint means more desk depth used"],
    bestFor: "Buyers who want more writing room in the same low-profile pad format.",
  },
  {
    id: "b0f5lzxs3w-padwb",
    rank: 3,
    badge: "Best Low-Profile Board With Stand",
    name: "Lumspax Small Desktop White Board with Stand, 10\" x 10\" Double-Sided",
    price: "$9.99",
    rating: "4.6",
    reviews: "212",
    imageUrl: "https://m.media-amazon.com/images/I/31YDQS8Gh1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F5LZXS3W?tag=deskfinds0d-20",
    description: "Includes a low-profile stand rather than lying completely flat, useful if you want the pad slightly elevated for visibility without a full upright placement.",
    specs: ["10 x 10 in, double-sided", "Low-profile stand"],
    pros: ["Stand gives slight elevation for visibility without full upright placement"],
    cons: ["Smaller review base than the Scribbledo pads above"],
    bestFor: "Buyers who want a middle ground between flat and fully upright placement.",
  },
  {
    id: "b09k7g5vw8-padwb",
    rank: 4,
    badge: "Best Glass Low-Angle Option",
    name: "Small Glass Desktop Whiteboard Dry-Erase, Mini Pure Glass Whiteboard Stand",
    price: "$14.44",
    rating: "4.6",
    reviews: "1,254",
    imageUrl: "https://m.media-amazon.com/images/I/31noWsDrPcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09K7G5VW8?tag=deskfinds0d-20",
    description: "A glass surface with a low-angle stand rather than a paper pad, resisting ghosting better than the paper-based options while still sitting close to keyboard level.",
    specs: ["Glass surface, low-angle stand"],
    pros: ["Glass resists ghosting better than paper-based pads over time", "Large, established review base"],
    cons: ["More expensive than the flat paper pad options"],
    bestFor: "Buyers who want a low-angle glass surface rather than a paper pad.",
  },
  {
    id: "b09mz5zd4n-padwb",
    rank: 5,
    badge: "Smallest Glass Option",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board 8 X 6 Inches",
    price: "$16.99",
    rating: "4.7",
    reviews: "1,191",
    imageUrl: "https://m.media-amazon.com/images/I/4180Al3c9zL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MZ5ZD4N?tag=deskfinds0d-20",
    description: "The smallest glass option in this comparison, with the highest rating, for buyers who want minimal desk footprint even in a low-profile glass format.",
    specs: ["8 x 6 in, glass surface"],
    pros: ["Highest rating of any pick in this comparison", "Smallest glass footprint"],
    cons: ["Smallest writing area of the low-profile options here"],
    bestFor: "Buyers who want the smallest low-profile glass footprint.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Flat or low-angle placement",
    "description": "We separated true pad formats from upright boards. The Scribbledo pads lie flat, Lumspax and the glass options use a low profile stand, and none stand upright, so each fits in front of a keyboard where a taller board would block your view. Placement also decides whether you can see the pad while typing."
  },
  {
    "title": "Surface type and ghosting",
    "description": "We compared paper style surfaces against glass. Sources note that cheaper melamine surfaces ghost faster and glass resists ghosting, so the two glass picks earned credit for durability while the paper pads earned credit for price and flat storage. Ghosting is the main long term complaint with this format."
  },
  {
    "title": "Writing area against desk depth",
    "description": "We compared 5x7 inch, 8 x 6 inch, 9x12 inch and 10 x 10 inch formats. A bigger surface gives room for a to-do list but uses desk depth in front of your keyboard, so we scored the best usable area for the depth consumed. Depth lost to the pad is depth taken from your wrist rest."
  },
  {
    "title": "Single or double sided",
    "description": "We checked which pads can be flipped. The Scribbledo 9x12 and Lumspax 10 x 10 are double-sided, effectively doubling usable writing space inside one footprint, while the 5x7 pad pays for its low price with a single small face. A flip side is the cheapest way to double the space."
  },
  {
    "title": "Ruling, lines and price",
    "description": "We noted the lined surface on both Scribbledo pads and compared the price tier, with the two Scribbledo options and Lumspax all under $10 and the glass picks costing a little more. A pad that costs less than lunch has to earn its desk space. Price alone should not decide if you write daily."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Placement",
    "intro": "The right pad depends on where it sits relative to your keyboard.",
    "table": {
      "headers": [
        "Where it will go",
        "Recommended pick"
      ],
      "rows": [
        [
          "Flat in front of the keyboard for quick notes",
          "Scribbledo Mini Dry Erase Notepad 5x7, which is the smallest and cheapest"
        ],
        [
          "Flat but with more space for a list",
          "Scribbledo Dry Erase Board with Lines for Desk, 9x12, double-sided"
        ],
        [
          "Slightly angled so you can see it without leaning forward",
          "Lumspax Small Desktop White Board with Stand, 10 x 10"
        ],
        [
          "A glass surface at a low angle in front of a monitor",
          "Small Glass Desktop Whiteboard Dry-Erase, Mini Pure Glass"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "All five are under $17, so the difference between buckets is surface type.",
    "table": {
      "headers": [
        "Price bucket",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $9 for two small pads",
          "Scribbledo Mini Dry Erase Notepad 5x7 2-pack"
        ],
        [
          "Under $9 for a single large flip-over pad",
          "Scribbledo 9x12 double-sided pad"
        ],
        [
          "Under $10 for a stand and double sided use",
          "Lumspax Small Desktop White Board with Stand"
        ],
        [
          "Under $15 for a glass surface",
          "Small Glass Desktop Whiteboard Dry-Erase, Mini Pure Glass"
        ],
        [
          "Under $17 for the smallest true glass option",
          "TSJ OFFICE Small Desktop Whiteboard, 8 x 6 inches"
        ]
      ]
    }
  },
  {
    "subheading": "Paper Pad vs Glass Low-Profile Board",
    "intro": "This is the main durability decision in the guide.",
    "cards": [
      {
        "label": "Paper style pad (Scribbledo, Lumspax)",
        "text": "Cheapest and easy to store, but sources note that cheaper surfaces ghost faster when ink sits. Plan on wiping each day with a clean cloth and replacing the pad if shadows stay."
      },
      {
        "label": "Glass low-profile board (Small Glass Desktop Whiteboard, TSJ OFFICE 8 x 6)",
        "text": "Resists ghosting and streaking over repeated use and cleans in one wipe, but it costs more and the TSJ OFFICE is only 8 x 6 inches. Glass can also break if dropped."
      }
    ],
    "note": "Most people who write on the pad every day should choose glass; occasional users are fine with a paper pad."
  },
  {
    "subheading": "By Desk Depth",
    "intro": "Pads sit between the keyboard and the monitor, so depth is the limit.",
    "table": {
      "headers": [
        "Your desk",
        "Recommended pick"
      ],
      "rows": [
        [
          "A shallow desk with little space in front of the keyboard",
          "Scribbledo 5x7 or TSJ OFFICE 8 x 6, the smallest footprints"
        ],
        [
          "A standard desk with room in front of the keyboard",
          "Lumspax 10 x 10, with its angled stand"
        ],
        [
          "A deeper desk or one used mainly for writing",
          "Scribbledo 9x12 double-sided, the largest surface"
        ],
        [
          "A desk with a monitor stand that leaves a gap",
          "Small Glass Desktop Whiteboard, with a low stand"
        ]
      ]
    }
  },
  {
    "subheading": "For Daily To-Do Lists Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A lined surface, a surface that wipes clean in one pass, enough space for five to eight lines, and a footprint that does not push your keyboard back."
      },
      {
        "label": "In this comparison",
        "text": "Both Scribbledo pads are lined, and the 9x12 gives the most lines, while the glass pick wipes cleanly with a cloth."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You write every day and dislike shadowy ink, which is where the glass picks justify their small price premium. If you want an upright board, see the freestanding desktop whiteboards guide."
      },
      {
        "label": "Save if",
        "text": "You make a list a few times a week, so the Scribbledo pad covers it for under $9."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the product is genuinely flat or low-angle, not upright", explanation: "This guide is limited to pad-style products for in-front-of-keyboard placement, not freestanding upright boards.  A pad lies flat or at a shallow angle, so confirm the listing says pad, notepad or low-angle stand, and rule out anything that needs to stand upright on its own. Check the product photos too, since a stand changes how much depth it takes." },
  { criterion: "Weigh paper pad cost against glass durability", explanation: "Paper pads are cheaper but wear faster over repeated erasing than a glass surface.  Paper style pads like the Scribbledo options are the cheapest here, and sources warn that cheaper surfaces ghost faster, so erase promptly and avoid leaving ink overnight. Glass costs more but resists ghosting better. Replacing a worn paper pad every few months still costs less than one glass board." },
  { criterion: "Check double-sided for more writing area", explanation: "Some pads are double-sided, effectively doubling usable writing space within the same footprint.  Look for the words double-sided in the title. The Scribbledo 9x12 and Lumspax 10 x 10 are double-sided, so you can flip to a clean face when the first side gets crowded. Ask whether you will really flip it, because many people use only one face." },
  { criterion: "Consider desk depth used by the specific placement", explanation: "Larger pads (9x12 in) use more desk depth in front of your keyboard than smaller ones (5x7 in).  Measure your keyboard to monitor depth. A 9x12 pad takes more front-to-back space than a 5x7, and a pad that pushes your keyboard back forces you to reach. Leave at least a few inches of palm space between the keyboard and the pad." },
  { criterion: "Use review volume for confidence in durability claims", explanation: "A large, established review base is the best evidence available for how well a pad holds up to repeated erasing.  Treat the listing as your evidence, and prefer clearly stated surface type and size over star-based claims, because a pad's real durability only shows after months of erasing. Pair that with the listed surface material, which is the stronger durability clue." }
];

export const faq: FaqItem[] = [
  {
    "q": "How is a whiteboard pad different from a desktop board?",
    "a": "A pad lies flat or sits at a low angle in front of your keyboard. A desktop board stands upright, so it takes more desk space and can block your view. A pad is better for short notes you glance at while typing."
  },
  {
    "q": "What is the biggest mistake buyers make with these pads?",
    "a": "Leaving ink on the surface overnight. Sources note that markers dry and ghost more when left, so wipe after each session. Use the marker that comes with the pad, and replace the pad if the surface stays stained."
  },
  {
    "q": "Is the glass option worth it over a Scribbledo pad?",
    "a": "Glass resists ghosting better over time, though it costs more. A Scribbledo pad costs under $9, comes in a 2-pack in the 5x7 size and lies flat. If you write daily, glass is worth it. For occasional notes, paper is enough."
  },
  {
    "q": "How do I clean a whiteboard pad?",
    "a": "Wipe with a dry microfiber cloth right after writing. For stubborn marks, use a drop of whiteboard cleaner or a damp cloth. Avoid harsh chemicals that dull the surface, and keep markers capped so ink does not dry on the pad."
  },
  {
    "q": "Which size should I pick for a small desk?",
    "a": "The Scribbledo 5x7 and the TSJ OFFICE 8 x 6 use the least depth. A 9x12 pad takes more room in front of the keyboard, so choose it only if you have depth to spare and you want the largest surface. The glass board also has a stand that takes extra depth."
  },
  {
    "q": "Will a pad slide around on the desk?",
    "a": "Flat pads can slide on a smooth desk, so check for a non-slip base on the listing. Lumspax uses a low profile stand that sits firm, and the glass board has a stand. Put a small mat underneath if it slides."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-compact-desktop-whiteboards", title: "Best Compact Desktop Whiteboards (2026)" },
  { href: "/guide/best-freestanding-desktop-whiteboards", title: "Best Freestanding Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" }
];
