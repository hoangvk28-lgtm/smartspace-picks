export const guideSlug = "best-desktop-whiteboards-for-meetings";
export const guideTitle = "5 Best Desktop Whiteboards for Meetings in 2026";
export const metaTitle = "Best Desktop Whiteboards for Meetings";
export const metaDescription =
  "5 whiteboards evaluated for video-call camera visibility and quick erase-and-reset between meetings, drawing from our broader desktop whiteboard research.";
export const mainKeyword = "desktop whiteboard for meetings";
export const introParagraphs = [
  "Meeting use adds requirements beyond general desk writing: the board needs to read clearly on a webcam feed, and it needs to erase and reset quickly between back-to-back calls without leaving ghosting that distracts on camera.",
  "We prioritized glass surfaces, which show less glare and ghosting under typical webcam/ring-light setups than melamine boards."
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b089nl8qmn-meetingwb",
    rank: 1,
    badge: "Best Overall",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board Computer Keyboard Stand",
    price: "$25.99",
    rating: "4.7",
    reviews: "2,500",
    imageUrl: "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B089NL8QMN?tag=deskfinds0d-20",
    description: "Positioned right behind the keyboard, easily within webcam framing for video calls, with the largest review base in this comparison.",
    specs: ["Glass surface, keyboard-adjacent position"],
    pros: ["Largest review base in this comparison", "Naturally positioned within webcam frame"],
    cons: ["Compact size limits how much can be written before erasing"],
    bestFor: "Buyers who want the most-reviewed keyboard-adjacent option visible on camera.",
  },
  {
    id: "b09c1vt7x8-meetingwb",
    rank: 2,
    badge: "Highest Rated",
    name: "Small Desktop Glass Whiteboard Dry-Erase-Board - Computer Keyboard Stand",
    price: "$27.99",
    rating: "4.8",
    reviews: "1,524",
    imageUrl: "https://m.media-amazon.com/images/I/41aTFk156tL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09C1VT7X8?tag=deskfinds0d-20",
    description: "The highest rating in this comparison, similarly positioned for webcam visibility, at a slightly higher price than the top pick.",
    specs: ["Glass surface, keyboard-adjacent position"],
    pros: ["Highest rating in this comparison"],
    cons: ["Slightly more expensive than the largest-review-base option"],
    bestFor: "Buyers who want the highest-rated keyboard-adjacent option for meetings.",
  },
  {
    id: "b07rt4lwyy-meetingwb",
    rank: 3,
    badge: "Most Room for Diagrams",
    name: "Tankee Dry Erase Board 16x12 Inches Double Sided Magnetic Small Whiteboard",
    price: "$23.99",
    rating: "4.8",
    reviews: "2,486",
    imageUrl: "https://m.media-amazon.com/images/I/41caJzrXfNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07RT4LWYY?tag=deskfinds0d-20",
    description: "The largest writing area in this comparison, useful for sketching diagrams or process flows during a call that requires more than quick notes.",
    specs: ["16 x 12 in, double-sided, magnetic"],
    pros: ["Largest writing area for in-meeting diagrams or process flows"],
    cons: ["Larger footprint may need to be angled for good webcam framing"],
    bestFor: "Buyers who sketch diagrams or complex ideas during video calls.",
  },
  {
    id: "b09phht8dm-meetingwb",
    rank: 4,
    badge: "Best With Organizer for Meeting Notes",
    name: "Varhomax Glass Desk Whiteboard with Storage, Desktop Organizer",
    price: "$24.99",
    rating: "4.7",
    reviews: "723",
    imageUrl: "https://m.media-amazon.com/images/I/31W4Q2LBraL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09PHHT8DM?tag=deskfinds0d-20",
    description: "Combines the meeting-notes whiteboard with an organizer section, useful for keeping meeting materials nearby without extra desk clutter.",
    specs: ["Glass surface with organizer"],
    pros: ["Organizer section keeps meeting materials within reach"],
    cons: ["Smaller review base than the top picks"],
    bestFor: "Buyers who want organizer storage alongside their meeting whiteboard.",
  },
  {
    id: "b09mz5zd4n-meetingwb",
    rank: 5,
    badge: "Best Budget Option",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board 8 X 6 Inches",
    price: "$16.99",
    rating: "4.7",
    reviews: "1,191",
    imageUrl: "https://m.media-amazon.com/images/I/4180Al3c9zL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MZ5ZD4N?tag=deskfinds0d-20",
    description: "A cheaper, smaller glass board for quick meeting reminders rather than detailed notes, with a high rating despite the compact size.",
    specs: ["8 x 6 in, glass surface"],
    pros: ["Cheapest option in this comparison", "Glass resists ghosting better than melamine on camera"],
    cons: ["Small writing area limits use to brief reminders rather than detailed notes"],
    bestFor: "Budget-focused buyers who just need quick meeting reminders visible on camera.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Camera-visible writing area",
    "description": "In video meetings a board must read on camera. We checked sizes, such as the 16 x 12 inch Tankee against the 8 x 6 inch TSJ, and favored larger writing areas for diagrams. Smaller boards suit reminders only. Larger beats smaller for diagrams and agendas."
  },
  {
    "title": "Glass versus melamine",
    "description": "Glass resists glare and ghosting better than melamine, which can stain after repeated use. TSJ, the unnamed-brand glass board and Varhomax name glass, while Tankee names a dry erase surface. We credited glass for meetings with daily erasing. Reflections show up on camera."
  },
  {
    "title": "Keyboard-adjacent placement",
    "description": "Several picks sit by a keyboard, which keeps notes next to your screen. The TSJ keyboard-stand board and the generic glass board are designed for that, while Tankee uses a stand. We compared how each keeps your hands free. Placement keeps your hands free."
  },
  {
    "title": "Magnetic and double-sided",
    "description": "Tankee is magnetic and double-sided at 16 x 12 inches, which doubles writing space for back-to-back meetings. Plain glass boards are not magnetic, so we weighed that for people who pin agendas. Pinned agendas need a magnetic surface."
  },
  {
    "title": "Organizer and desk clutter",
    "description": "Meetings produce pens, cards and sticky notes. Varhomax combines a glass board with storage, which saves desk space but adds footprint. We asked whether the organizer is needed or adds clutter. Clutter-free desks look better on camera and in shared calls."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Most-reviewed keyboard-adjacent option", "TSJ OFFICE Small Desktop Whiteboard"],
        ["Highest rating", "Small Desktop Glass Whiteboard, Keyboard Stand"],
        ["Room for diagrams", "Tankee Dry Erase Board 16x12"],
        ["Organizer for meeting materials", "Varhomax Glass Desk Whiteboard with Storage"],
        ["Cheapest option", "TSJ OFFICE Glass Dry Erase Board 8x6"]
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
          "Under $17",
          "TSJ OFFICE Small Desktop Whiteboard"
        ],
        [
          "Under $24",
          "Tankee Dry Erase Board 16x12 Inches Double Sided Magnetic Small Whiteboard"
        ],
        [
          "Under $25",
          "Varhomax Glass Desk Whiteboard with Storage"
        ],
        [
          "Under $26",
          "TSJ OFFICE Small Desktop Whiteboard"
        ],
        [
          "Under $28",
          "Small Desktop Glass Whiteboard Dry-Erase-Board"
        ]
      ]
    }
  },
  {
    "subheading": "TSJ OFFICE Small Desktop Whiteboard vs Small Desktop Glass Whiteboard Dry-Erase-Board",
    "cards": [
      {
        "label": "TSJ OFFICE Small Desktop Whiteboard",
        "text": "Budget-focused buyers who just need quick meeting reminders visible on camera. At under $20, it's the lowest-cost pick in this comparison."
      },
      {
        "label": "Small Desktop Glass Whiteboard Dry-Erase-Board",
        "text": "Buyers who want the highest-rated keyboard-adjacent option for meetings. At under $30, it sits at the higher end of this comparison's price range."
      }
    ],
    "note": "Most buyers should default to TSJ OFFICE Small Desktop Whiteboard unless highest rated specifically applies to your situation."
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
          "Best Overall",
          "TSJ OFFICE Small Desktop Whiteboard"
        ],
        [
          "Highest Rated",
          "Small Desktop Glass Whiteboard Dry-Erase-Board"
        ],
        [
          "Most Room for Diagrams",
          "Tankee Dry Erase Board 16x12 Inches Double Sided Magnetic Small Whiteboard"
        ]
      ]
    }
  },
  {
    "subheading": "For Small meeting use Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A board whose stated size and features genuinely match small meeting use rather than a generic all-purpose listing."
      },
      {
        "label": "In this comparison",
        "text": "TSJ OFFICE Small Desktop Whiteboard is the strongest match for most buyers in this category, based on its stated review base and feature set."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Buyers who want the highest-rated keyboard-adjacent option for meetings."
      },
      {
        "label": "Save if",
        "text": "Budget-focused buyers who just need quick meeting reminders visible on camera."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Camera visibility with your setup",
    "explanation": "Test a board's position against your webcam framing before committing, since desk and camera angles vary. A 16 x 12 inch board reads on camera at arm's length, while an 8 x 6 inch board only shows short notes. Look at listing photos and compare the size to your keyboard. Check the dimensions in the listing photos and compare them with your keyboard, since a few inches change what reads clearly on a call."
  },
  {
    "criterion": "Glass for glare and ghosting",
    "explanation": "Glass resists ghosting better than melamine, which can stain after 1 to 3 years of daily use, and a glossy glass surface may reflect lights on camera. TSJ and Varhomax name glass in their listings. Place the board away from direct windows. Check the dimensions in the listing photos and compare them with your keyboard, since a few inches change what reads clearly on a call."
  },
  {
    "criterion": "Writing area for your meeting style",
    "explanation": "Quick reminders need less space than sketched diagrams. Tankee gives 16 x 12 inches on two sides, while the 8 x 6 inch TSJ is for short notes. Decide whether you diagram or list, then match the size. Check the dimensions in the listing photos and compare them with your keyboard, since a few inches change what reads clearly on a call."
  },
  {
    "criterion": "Magnetic versus plain glass",
    "explanation": "Plain glass boards are not magnetic, so agendas and cards will not stick. Tankee lists a magnetic surface. Look for the word magnetic in the listing, and if it is a glass board assume it is not unless stated. Check the dimensions in the listing photos and compare them with your keyboard, since a few inches change what reads clearly on a call."
  },
  {
    "criterion": "Organizer or pure board",
    "explanation": "Varhomax combines a glass board with storage for pens and cards, while the TSJ boards are pure whiteboards. An organizer helps a cluttered desk but adds footprint. Check whether markers and an eraser are included. Check the dimensions in the listing photos and compare them with your keyboard, since a few inches change what reads clearly on a call."
  }
];

export const faq: FaqItem[] = [
  {
    "q": "What size whiteboard works for video meetings?",
    "a": "A 16 x 12 inch board such as Tankee gives enough space for diagrams that stay legible on camera. An 8 x 6 inch board like the small TSJ suits action items and reminders. Test it at your webcam distance. Always test the framing first."
  },
  {
    "q": "What mistake do people make with meeting whiteboards?",
    "a": "Placing the board where it blocks the webcam or reflects light. Glass boards can show glare under bright windows, so angle them away. Try your board at the actual camera angle before the first call."
  },
  {
    "q": "Is glass worth more than the cheaper Tankee for meetings?",
    "a": "If you erase often, yes. Glass resists ghosting and glare, while Tankee's dry erase surface and magnetic double-sided design cost slightly less. Tankee suits agendas that stay up, and glass suits repeated notes."
  },
  {
    "q": "How do I keep notes visible during a call?",
    "a": "Place the board beside your keyboard or camera, write large with a dark marker, and keep it clean. The TSJ keyboard stand design keeps the notes at eye level. Avoid light colors, which wash out on camera."
  },
  {
    "q": "Can I stick magnets on these boards?",
    "a": "Tankee is listed as magnetic, so yes. Plain glass boards are not magnetic unless backed with steel. If you pin agendas, choose Tankee or check for a magnetic version."
  },
  {
    "q": "How should I clean a glass whiteboard between meetings?",
    "a": "Wipe with a dry microfiber cloth, then use whiteboard cleaner or isopropyl alcohol for stains. Do not use abrasive pads on glass. Clean weekly if you write daily so ghosting never builds up."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-whiteboards-for-home-offices", title: "Best Desktop Whiteboards for Home Offices (2026)" },
  { href: "/guide/best-personal-desktop-whiteboards", title: "Best Personal Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" }
];
