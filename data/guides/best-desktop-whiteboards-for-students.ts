export const guideSlug = "best-desktop-whiteboards-for-students";
export const guideTitle = "5 Best Desktop Whiteboards for Students in 2026";
export const metaTitle = "Best Desktop Whiteboards for Students";
export const metaDescription = "5 whiteboards evaluated for budget, dorm-desk footprint, and durability under repeated study-session erasing, with real price-to-size comparisons.";
export const mainKeyword = "desktop whiteboard for students";
export const introParagraphs = [
  "Student desks are typically smaller than home-office desks and budgets are tighter, so we weighted price more heavily here than in our other whiteboard guides, while still requiring a genuine review base as evidence of durability under frequent use.",
  "Dorm-room desk space is also usually shared or limited, so compact footprint matters more here than for a dedicated home office."
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41sEyXE5tML._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b091y79cxz-studentwb",
    rank: 1,
    badge: "Best Budget Pick",
    name: "Small Dry Erase Board, 10\" X 10\" Small Whiteboard with Stand, Portable Magnetic",
    price: "$8.99",
    rating: "4.6",
    reviews: "307",
    imageUrl: "https://m.media-amazon.com/images/I/41sEyXE5tML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B091Y79CXZ?tag=deskfinds0d-20",
    description: "The cheapest board in this comparison, portable and magnetic, ideal for a tight student budget and dorm-desk footprint.",
    specs: ["10 x 10 in, portable, magnetic"],
    pros: ["Cheapest option in this comparison", "Portable if you need to move between study spaces"],
    cons: ["Small writing area compared to the larger picks"],
    bestFor: "Budget-conscious students with limited dorm-desk space.",
  },
  {
    id: "b0bvm9yjcs-studentwb",
    rank: 2,
    badge: "Best Overall",
    name: "AMUSIGHT Double-Sided Magnetic White Board with Stand, 16\" x 12\"",
    price: "$18.99",
    rating: "4.6",
    reviews: "1,356",
    imageUrl: "https://m.media-amazon.com/images/I/41FLEFa9xDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVM9YJCS?tag=deskfinds0d-20",
    description: "The largest writing area in this comparison for study notes and practice problems, with a substantial review base backing its durability.",
    specs: ["16 x 12 in, double-sided, magnetic"],
    pros: ["Largest writing area for study notes and practice work", "Large, established review base"],
    cons: ["Larger footprint may be tight on a small dorm desk"],
    bestFor: "Students who want the most study-note space and have adequate desk room.",
  },
  {
    id: "b0brzz26fs-studentwb",
    rank: 3,
    badge: "Best Value Large Board",
    name: "Dry Erase White Board, Cazeyoo Magnetic Desktop Whiteboard 16 x 12inch",
    price: "$16.99",
    rating: "4.7",
    reviews: "1,055",
    imageUrl: "https://m.media-amazon.com/images/I/41+fn-v10QL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BRZZ26FS?tag=deskfinds0d-20",
    description: "Same 16x12 footprint as the AMUSIGHT pick above at a slightly lower price and marginally higher rating.",
    specs: ["16 x 12 in, magnetic"],
    pros: ["Slightly cheaper than the AMUSIGHT equivalent with a higher rating"],
    cons: ["Smaller review base than the AMUSIGHT pick"],
    bestFor: "Students who want the same large size for slightly less money.",
  },
  {
    id: "b09phht8dm-studentwb",
    rank: 4,
    badge: "Best With Organizer for Study Materials",
    name: "Varhomax Glass Desk Whiteboard with Storage, Desktop Organizer",
    price: "$24.99",
    rating: "4.7",
    reviews: "723",
    imageUrl: "https://m.media-amazon.com/images/I/31W4Q2LBraL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09PHHT8DM?tag=deskfinds0d-20",
    description: "Combines whiteboard and storage, useful for keeping pens, notes, and small study materials organized on a limited dorm desk.",
    specs: ["Glass surface with organizer"],
    pros: ["Organizer helps consolidate study materials on a small desk"],
    cons: ["Highest price in this comparison, though still reasonable"],
    bestFor: "Students who want combined storage and writing surface on a tight desk.",
  },
  {
    id: "b0dmzyk585-studentwb",
    rank: 5,
    badge: "Best Budget Organizer",
    name: "Amazon Basics Desktop Dry Erase Whiteboard with Organizer and Accessories",
    price: "$15.74",
    rating: "4.7",
    reviews: "279",
    imageUrl: "https://m.media-amazon.com/images/I/313bG76j1CL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DMZYK585?tag=deskfinds0d-20",
    description: "Organizer functionality at a lower price than the Varhomax option, a reasonable middle ground for budget-conscious students.",
    specs: ["Dry erase surface with organizer accessories"],
    pros: ["Cheaper organizer option than the Varhomax pick"],
    cons: ["Smaller review base than the more established options"],
    bestFor: "Students who want organizer features without the higher Varhomax price.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Size for study notes",
    "description": "We compared sizes, because students need to fit formulas and diagrams. AMUSIGHT and Cazeyoo are 16 x 12 inches, the 10 x 10 board is smaller and portable, and Varhomax and Amazon Basics add organizers. A bigger board helps problem solving, a smaller one suits a dorm desk. Bigger boards crowd small dorm desks."
  },
  {
    "title": "Portability and storage",
    "description": "Students move between dorm, library and class. The 10 x 10 inch magnetic board with stand lists a portable design, which we credited, while the larger boards need a desk. Check whether it fits into a backpack. Backpack fit matters for library study."
  },
  {
    "title": "Magnetic and double-sided",
    "description": "AMUSIGHT is double-sided and magnetic and Cazeyoo is magnetic, which allow flashcards and schedules to be pinned. Glass Varhomax is not listed as magnetic. We credited magnetic surfaces for study systems. Flashcards need a magnetic face."
  },
  {
    "title": "Surface and ghosting",
    "description": "Glass resists ghosting best, while melamine stains more over time. Varhomax names glass, while the others name dry erase surfaces. For a student who erases daily, a stained board is a real annoyance. Stains build quickly under daily use."
  },
  {
    "title": "Organizer value on a small desk",
    "description": "Varhomax and Amazon Basics combine a board with storage for markers, which saves space in a dorm. Varhomax is the highest-priced pick, while Amazon Basics is cheaper. We asked whether the extra storage replaces a cup you already own. Storage is valuable in drawer-poor rooms."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Tightest budget", "Small Dry Erase Board 10x10"],
        ["Most study-note space", "AMUSIGHT Double-Sided Magnetic White Board"],
        ["Same size, better value", "Cazeyoo Magnetic Desktop Whiteboard 16x12"],
        ["Combined storage for study materials", "Varhomax Glass Desk Whiteboard with Storage"],
        ["Budget organizer", "Amazon Basics Desktop Dry Erase Whiteboard"]
      ],
    },
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $9",
          "Small Dry Erase Board"
        ],
        [
          "Under $16",
          "Amazon Basics Desktop Dry Erase Whiteboard with Organizer and Accessories"
        ],
        [
          "Under $17",
          "Dry Erase White Board"
        ],
        [
          "Under $19",
          "AMUSIGHT Double-Sided Magnetic White Board with Stand"
        ],
        [
          "Under $25",
          "Varhomax Glass Desk Whiteboard with Storage"
        ]
      ]
    }
  },
  {
    "subheading": "Small Dry Erase Board vs Varhomax Glass Desk Whiteboard with Storage",
    "cards": [
      {
        "label": "Small Dry Erase Board",
        "text": "Budget-conscious students with limited dorm-desk space. At under $9, it's the lowest-cost pick in this comparison."
      },
      {
        "label": "Varhomax Glass Desk Whiteboard with Storage",
        "text": "Students who want combined storage and writing surface on a tight desk. At under $25, it sits at the higher end of this comparison's price range."
      }
    ],
    "note": "Most buyers should default to Small Dry Erase Board unless best with organizer for study materials specifically applies to your situation."
  },
  {
    "subheading": "By Stated Review Confidence",
    "table": {
      "headers": [
        "What you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Best Budget Pick",
          "Small Dry Erase Board"
        ],
        [
          "Best Overall",
          "AMUSIGHT Double-Sided Magnetic White Board with Stand"
        ],
        [
          "Best Value Large Board",
          "Dry Erase White Board"
        ]
      ]
    }
  },
  {
    "subheading": "For Student study sessions Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A board whose stated size and features genuinely match student study sessions rather than a generic all-purpose listing."
      },
      {
        "label": "In this comparison",
        "text": "Small Dry Erase Board is the strongest match for most buyers in this category, based on its stated review base and feature set."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Students who want combined storage and writing surface on a tight desk."
      },
      {
        "label": "Save if",
        "text": "Budget-conscious students with limited dorm-desk space."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Size for your desk and your subject",
    "explanation": "Math and science notes need more room than vocabulary lists. A 16 x 12 inch board such as AMUSIGHT or Cazeyoo handles worked problems, while a 10 x 10 inch board suits flashcards and daily lists. Measure your desk width and leave room for a laptop. Check the dimensions in the listing photos and compare them with your laptop, since a few inches change how much you can write."
  },
  {
    "criterion": "Magnetic surface for flashcards",
    "explanation": "Magnetic boards let you pin flashcards, schedules and photos, and AMUSIGHT, Cazeyoo and the 10 x 10 board list magnetic surfaces. Glass boards are not magnetic unless backed with steel. Look for the word magnetic in the listing. Check the dimensions in the listing photos and compare them with your laptop, since a few inches change how much you can write."
  },
  {
    "criterion": "Double-sided versus single-sided",
    "explanation": "A double-sided board like AMUSIGHT lets you keep one subject on each side without a larger footprint. A single-sided board is cheaper but needs erasing. Check the listing for both sides being dry erase and both being magnetic. Check the dimensions in the listing photos and compare them with your laptop, since a few inches change how much you can write."
  },
  {
    "criterion": "Surface and ghosting",
    "explanation": "Glass resists ghosting and stains best, while porous melamine can stain after 1 to 3 years of daily use. Varhomax names glass, while others name a dry erase surface. Wipe boards promptly regardless of the surface. Check the dimensions in the listing photos and compare them with your laptop, since a few inches change how much you can write."
  },
  {
    "criterion": "Organizer or plain board",
    "explanation": "Varhomax and Amazon Basics add storage for markers and an eraser, which helps in a dorm where drawers are scarce. A plain board has more writing area for the same footprint. Choose the organizer only if you need it. Check the dimensions in the listing photos and compare them with your laptop, since a few inches change how much you can write."
  }
];

export const faq: FaqItem[] = [
  {
    "q": "What whiteboard size suits a dorm desk?",
    "a": "A 10 x 10 inch board fits almost anywhere and moves easily, while a 16 x 12 inch board like AMUSIGHT or Cazeyoo needs more width. Measure the free space beside your laptop before choosing. Leave room for a notebook too."
  },
  {
    "q": "What mistake do students make with desktop whiteboards?",
    "a": "Buying a larger board than the desk can take, then leaning it on a wall. A 16 x 12 inch board can crowd a small desk. Choose the size that leaves room for a laptop and a notebook."
  },
  {
    "q": "Is AMUSIGHT worth more than Cazeyoo?",
    "a": "They are both 16 x 12 inches and magnetic. AMUSIGHT is double-sided, which doubles writing space, while Cazeyoo is slightly cheaper. Pick the double-sided one if you use the board for multiple subjects."
  },
  {
    "q": "How do I use a whiteboard to study?",
    "a": "Write one concept per section, explain it aloud, and erase it. Magnetic boards let you pin flashcards. Use fine-tip markers for formulas, and wipe the board after each session so ghosting does not build. Rotate subjects by section."
  },
  {
    "q": "How do I clean a student whiteboard?",
    "a": "Wipe with a dry cloth, then use whiteboard spray for old marks. Avoid household cleaners on melamine, which can dull the surface. A clean board is easier to read in low dorm light."
  },
  {
    "q": "Does the 10 x 10 inch board stand up on its own?",
    "a": "It lists a stand and a portable magnetic design, so yes on a flat desk. Because it is small and light, a tilted desk or a bumped table will knock it over, so place it away from the edge. Place it away from the edge."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-whiteboards-for-gre-and-toefl", title: "Best Desktop Whiteboards for GRE and TOEFL (2026)" },
  { href: "/guide/best-compact-desktop-whiteboards", title: "Best Compact Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" }
];
