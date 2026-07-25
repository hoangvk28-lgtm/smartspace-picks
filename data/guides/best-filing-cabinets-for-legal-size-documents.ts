export const guideSlug = "best-filing-cabinets-for-legal-size-documents";
export const guideTitle = "6 Best Filing Cabinets for Legal-Size Documents in 2026";
export const metaTitle = "Best Filing Cabinets for Legal-Size Documents in 2026 (Drawer Width Guide)";
export const metaDescription =
  "6 filing cabinets compared on internal drawer width, hanging rail spacing, and slide load rating for legal-size files, since a legal label alone does not guarantee true fit.";
export const mainKeyword = "filing cabinet for legal size documents";
export const introParagraphs = [
  "A listing that says a cabinet fits legal-size paper is not the same as a cabinet built to hang legal-size files without a fight. What actually determines fit is internal drawer width, not the cabinet's outer dimensions, and legal hanging rails need about 14.25 inches of spacing between hooks, roughly two inches wider than the letter-size standard. Several cabinets marketed toward general home office use only confirm letter and A4 compatibility, leaving legal-size buyers to guess whether their files will hang correctly or just sit loose in the drawer.",
  "This guide compares 6 cabinets we evaluated based on product specs and buyer feedback, prioritizing which ones explicitly state legal-size hanging file support versus which ones only confirm it for letter and A4. Legal paper is also roughly 27 percent heavier per sheet once a drawer is loaded with a full run of hanging folders, so drawer slide quality matters more here than it does for a lighter letter-only cabinet. Prices range from $44.99 for a narrow vertical cabinet to $129.99 for a fully assembled two-drawer model.",
];
export const lastUpdated = "2026-07-26";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg";

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
    id: "letaya-3-drawer-mobile-legal",
    rank: 1,
    badge: "Best Confirmed Legal-Size Fit",
    name: "Letaya 3 Drawer Mobile File Cabinet with Lock, Under Desk Metal Filing Cabinet",
    price: "$99.99",
    rating: "4.5 stars from 1,373 Amazon ratings",
    reviews: "1,373 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=deskfinds0d-20",
    description:
      "This three-drawer cabinet is one of the few in this price range that lists letter, legal, and A4 compatibility directly in its title, a stronger signal than the vaguer general-purpose listings competitors often carry. It ships fully assembled, which matters for legal-size units since misaligned rails from a rushed home assembly job are a common complaint on cabinets that require buyer setup.\n\nAt 4.5 stars across 1,373 ratings, it has the strongest feedback record in this list. The internal drawer width is not stated to the inch in the listing, so if you have an existing set of legal hanging folders, it is worth measuring your current cabinet's rail spacing and comparing before assuming a drop-in fit.",
    specs: [
      "3 drawers, fully assembled",
      "Fits letter, legal, A4 hanging files",
      "Locking mechanism included",
      "Under-desk mobile design",
    ],
    pros: [
      "Legal-size compatibility stated directly in the listing",
      "Fully assembled, avoiding rail misalignment from home setup",
      "Strong 4.5-star rating across 1,373 reviews",
    ],
    cons: [
      "Exact internal drawer width in inches not published",
      "Slide load rating not disclosed for heavier legal-paper loads",
      "Lock scope across all three drawers should be confirmed",
    ],
    bestFor: "Buyers who want a confirmed legal-size fit without an assembly step",
  },
  {
    id: "devaise-2-drawer-legal-assembled",
    rank: 2,
    badge: "Best 2-Drawer for Legal Files",
    name: "DEVAISE 2 Drawer Metal File Cabinet, Fully Assembled, Under Desk, Black",
    price: "$129.99",
    rating: "4.5 stars from 1,681 Amazon ratings",
    reviews: "1,681 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31wnmQx3CxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08G53L8B5?tag=deskfinds0d-20",
    description:
      "DEVAISE states letter, legal, and A4 fit directly, and its all-metal fully assembled build is a reasonable proxy for sturdier hanging rails than the fabric-drawer cabinets that sometimes appear in general filing searches. At 1,681 ratings and a 4.5-star average, it matches the top pick's feedback strength while carrying a higher price.\n\nHeavier legal-size loads benefit from full-extension drawer slides rated for the added paper weight, and this listing does not specify slide load capacity, so treat 'metal construction' as a partial signal rather than a guarantee against sag under a fully loaded legal drawer.",
    specs: [
      "2 drawers, fully assembled",
      "Fits letter, legal, A4 hanging files",
      "Lock included",
      "Under-desk metal design",
    ],
    pros: [
      "Legal-size compatibility confirmed in the listing",
      "Fully assembled all-metal build",
      "Matches the top-rated 4.5-star average",
    ],
    cons: [
      "Highest price in this list",
      "Slide load rating not specified for legal-size paper weight",
      "Two drawers only, less legal-file capacity than a 3-drawer unit",
    ],
    bestFor: "Buyers who want a premium fully assembled two-drawer cabinet with confirmed legal fit",
  },
  {
    id: "letaya-2-drawer-lateral-legal",
    rank: 3,
    badge: "Best Lateral Alternative for Legal Files",
    name: "Letaya 2 Drawer File Cabinet with Lock, Metal Lateral Filing Cabinet",
    price: "$99.99",
    rating: "4.2 stars from 1,671 Amazon ratings",
    reviews: "1,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ukHwAN+yL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTNJY2HB?tag=deskfinds0d-20",
    description:
      "Lateral cabinets are a rarely suggested but often better option for legal-size storage, since the wider drawer body gives hanging files more side-to-side room without needing extra front-to-back depth. This model confirms letter, legal, and A4 fit, and at 27.95 by 28.35 inches it needs more side clearance than a vertical cabinet of similar capacity.\n\nWith 1,671 ratings at 4.2 stars, feedback is solid though slightly below the top two picks. Confirm your hanging files will orient correctly in a lateral drawer, since not every lateral cabinet supports both front-to-back and side-to-side rail configurations for legal-size folders.",
    specs: [
      "2 drawers, lateral orientation",
      "Metal construction with lock",
      "Fits letter, legal, A4 files",
      "27.95 x 28.35 x 15.74 inches",
    ],
    pros: [
      "Legal-size compatibility confirmed",
      "Lateral design suits legal-size files needing side-to-side room",
      "Solid 4.2-star rating across 1,671 reviews",
    ],
    cons: [
      "Needs more side clearance than vertical cabinets",
      "Rail orientation for legal folders should be confirmed before buying",
      "Slide load rating not disclosed",
    ],
    bestFor: "Home offices with wall space that want a lateral alternative for legal-size storage",
  },
  {
    id: "sisesol-2-drawer-narrow-legal",
    rank: 4,
    badge: "Best Narrow Vertical for Legal Files",
    name: "SISESOL 2 Drawer File Cabinet with Lock, Narrow Vertical Filing Cabinet",
    price: "$44.99",
    rating: "4.2 stars from 616 Amazon ratings",
    reviews: "616 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31cXnfFFSML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DQL795FX?tag=deskfinds0d-20",
    description:
      "This is the lowest-priced pick in this list and one of the narrower vertical cabinets, listing letter, A4, and legal compatibility together. A narrow footprint is convenient for tight home offices, but a narrow external cabinet does not automatically mean a narrow internal drawer, since legal files need roughly 15.25 inches of internal drawer width regardless of how compact the outer shell looks.\n\nAt 4.2 stars across 616 ratings, it has a smaller review base than the top three picks. Easy assembly is noted in the listing, so factor in a short setup step, and verify hanging rail spacing once assembled if you plan to load it exclusively with legal folders.",
    specs: [
      "2 drawers, narrow vertical design",
      "Lock included",
      "Fits letter, A4, legal files",
      "Easy assembly",
    ],
    pros: [
      "Legal-size compatibility listed alongside letter and A4",
      "Lowest price in this list",
      "Narrow footprint suits tight home offices",
    ],
    cons: [
      "Internal drawer width not confirmed to the inch",
      "Smaller review base than the top-rated picks",
      "Requires assembly, unlike the fully assembled picks above",
    ],
    bestFor: "Budget buyers in a tight space who still need confirmed legal-size compatibility",
  },
  {
    id: "gyiiyuo-2-drawer-desktop-legal",
    rank: 5,
    badge: "Best Value, Legal Fit Not Confirmed",
    name: "GYIIYUO 2 Drawer File Cabinet with 24 Inch Extended Desktop, Mobile Filing Cabinet",
    price: "$56.99",
    rating: "4.2 stars from 1,425 Amazon ratings",
    reviews: "1,425 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=deskfinds0d-20",
    description:
      "Honesty check: this listing only confirms A4 and letter size fit, not legal, so it is included here as a lower-cost alternative rather than a verified legal-size pick. The 24-inch extended desktop on top adds a useful printer stand surface, and its fabric drawer fronts trade some durability for lighter overall weight compared to the all-metal picks above.\n\nAt $56.99 with a 4.2-star rating across 1,425 reviews, it is a reasonable choice if you mostly file letter and A4 documents with only occasional legal-size paperwork that could be folded or stored loose rather than hung on rails sized for legal width.",
    specs: [
      "2 drawers, fabric drawer fronts",
      "24-inch extended desktop surface",
      "Confirmed for A4 and letter size only",
      "Mobile casters with side bag",
    ],
    pros: [
      "Extended desktop adds usable surface space",
      "Affordable price at $56.99",
      "Solid 4.2-star rating across 1,425 reviews",
    ],
    cons: [
      "Legal-size compatibility not confirmed in the listing",
      "Fabric drawers less durable than steel for heavier legal loads",
      "Not a true all-metal cabinet",
    ],
    bestFor: "Buyers who mostly file letter and A4 documents with only occasional legal-size pages",
  },
  {
    id: "bynsoe-2-drawer-vertical-legal",
    rank: 6,
    badge: "Most Affordable Steel Cabinet, Legal Fit Not Confirmed",
    name: "BYNSOE 2 Drawer File Cabinet with Lock, Vertical Steel Filing Cabinet",
    price: "$64.99",
    rating: "4.0 stars from 1,303 Amazon ratings",
    reviews: "1,303 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31VM3xK++PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=deskfinds0d-20",
    description:
      "Honesty check: this cabinet's listing states letter size only, with no legal-size claim, so treat it as a letter-focused steel cabinet rather than a legal-size pick. It does explicitly call out steel body construction, a more direct build-quality claim than several vaguer 'metal' listings, and requires assembly rather than arriving ready to use.\n\nAt $64.99 with a 4.0-star rating across 1,303 reviews, it is a mid-tier value option for buyers whose filing needs are mostly letter-size, with legal documents handled separately or stored flat rather than hung on rails this cabinet was not confirmed to support.",
    specs: [
      "2 drawers, vertical orientation",
      "Steel construction with lock",
      "Confirmed for letter size only",
      "Assembly required",
    ],
    pros: [
      "Explicit steel construction claim",
      "Locking mechanism included",
      "Lower price than the confirmed legal-size picks",
    ],
    cons: [
      "Legal-size compatibility not confirmed in the listing",
      "Assembly required, unlike top assembled picks",
      "Lowest rating among the higher-review-count picks",
    ],
    bestFor: "Buyers with mostly letter-size filing needs who want an explicitly steel-built cabinet",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Explicit legal-size claims versus letter-only listings",
    description:
      "Separated cabinets that state letter, legal, and A4 compatibility directly from ones that only confirm letter and A4, since a legal claim is not something we assume from cabinet size alone.",
  },
  {
    title: "Hanging rail spacing implications",
    description:
      "Weighed whether a cabinet's stated drawer style suggests standard legal rail spacing versus letter-only rails that would need a separate adapter for legal folders.",
  },
  {
    title: "Drawer slide durability under heavier legal-paper loads",
    description:
      "Considered assembly type and stated build material as a rough proxy for slide durability, since legal paper adds roughly 27 percent more weight per sheet than letter paper across a full drawer.",
  },
  {
    title: "Lateral vs vertical fit for legal-size folders",
    description:
      "Evaluated each cabinet's orientation against the extra side-to-side room legal folders typically need, noting where a lateral design may serve legal-size storage better than a vertical one.",
  },
  {
    title: "Value for price across confirmed and unconfirmed legal fit",
    description:
      "Weighed price against both stated legal-size compatibility and buyer feedback volume, flagging any pick where legal-size support was not confirmed in the listing.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Internal drawer width, not cabinet width, determines legal fit",
    explanation:
      "Legal hanging files need about 15.25 inches or more of internal drawer width. A cabinet's external dimensions can look spacious while the actual drawer interior is too narrow, so check internal width specs rather than assuming from the outer footprint.",
  },
  {
    criterion: "Hanging rail spacing must match legal, not letter, sizing",
    explanation:
      "Legal-size hanging rails sit about 14.25 inches apart, roughly two inches wider than letter-size spacing. A cabinet built for letter-size rails will not hold legal folders correctly without a separate adapter rail, which many buyers only discover after unboxing.",
  },
  {
    criterion: "Full-extension slides matter more at legal length",
    explanation:
      "Legal files are longer front to back than letter files, so a partial-extension drawer leaves more of the back contents out of reach compared to a letter-size drawer. Full-extension slides give complete access, which matters more as file length increases.",
  },
  {
    criterion: "A higher slide load rating protects against sag under legal paper weight",
    explanation:
      "Legal paper runs roughly 27 percent heavier per sheet than letter paper, so a fully loaded legal drawer puts more strain on its slides. A 100-pound-rated slide gives more headroom for a packed legal drawer than a lighter-duty slide built with letter-size loads in mind.",
  },
  {
    criterion: "Lateral cabinets are an underused alternative for legal-size storage",
    explanation:
      "A lateral cabinet's wider drawer body can accommodate legal folders with less front-to-back depth than a vertical cabinet, at the cost of needing more side clearance along a wall. This trade-off is rarely mentioned in general filing cabinet guides.",
  },
  {
    criterion: "A 'fits legal' label alone is not a substitute for confirmed specs",
    explanation:
      "Some listings claim legal-size compatibility without stating internal width or rail spacing. If a listing only says 'fits legal' without further detail, treat it as a softer signal than one that also states internal drawer dimensions.",
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
    subheading: "By Confirmed Legal-Size Fit",
    intro: "Not every cabinet in a general filing search confirms legal-size compatibility, so start here.",
    table: {
      headers: ["Need", "Best pick"],
      rows: [
        ["Fully confirmed legal fit, fully assembled", "Letaya 3 Drawer Mobile or DEVAISE 2 Drawer Metal"],
        ["Confirmed legal fit, tight budget", "SISESOL 2 Drawer Narrow Vertical"],
        ["Confirmed legal fit, lateral footprint", "Letaya 2 Drawer Lateral"],
      ],
    },
    note: "If legal-size storage is your primary need, avoid the two picks in this list that only confirm letter size, even though they are otherwise well reviewed.",
  },
  {
    subheading: "By Footprint Constraint",
    cards: [
      {
        label: "Room along a wall, limited front-to-back space",
        text: "The Letaya 2 Drawer Lateral gives legal folders more side-to-side room without needing extra depth clearance.",
      },
      {
        label: "Very tight home office corner",
        text: "The SISESOL 2 Drawer Narrow Vertical is the most compact confirmed-legal option in this list at the lowest price.",
      },
      {
        label: "Need an extra work surface too",
        text: "The GYIIYUO with Extended Desktop adds a printer stand surface, though legal-size fit is not confirmed for this model.",
      },
    ],
  },
  {
    subheading: "Legal-Confirmed vs Letter-Only Cabinets",
    table: {
      headers: ["Status", "Examples", "What it means"],
      rows: [
        ["Legal-size confirmed in listing", "Letaya 3 Drawer, DEVAISE 2 Drawer, Letaya Lateral, SISESOL", "Safer bet if legal files are your main storage need"],
        ["Letter and A4 only, no legal claim", "GYIIYUO, BYNSOE", "Included as budget alternatives, not verified legal-size picks"],
      ],
    },
  },
  {
    subheading: "By Budget Tier",
    table: {
      headers: ["Budget", "Trade-off", "Best pick"],
      rows: [
        ["Under $60", "Confirmed legal fit at the lowest price", "SISESOL 2 Drawer Narrow Vertical"],
        ["$60-$100", "Mix of confirmed and unconfirmed legal fit", "Letaya 2 Drawer Lateral (confirmed) or BYNSOE (letter only)"],
        ["$100-$130", "Fully assembled, strongest confirmed legal fit", "Letaya 3 Drawer Mobile or DEVAISE 2 Drawer Metal"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "Does a cabinet listed as 'fits legal size' guarantee my files will hang correctly?",
    a: "Not entirely. A legal-size claim is a good starting signal, but internal drawer width of at least 15.25 inches and hanging rail spacing of about 14.25 inches are what actually determine fit. Listings rarely state both to the inch, so treat the label as a first filter, not a final confirmation.",
  },
  {
    q: "Why does legal paper need a sturdier drawer slide than letter paper?",
    a: "Legal paper is roughly 27 percent heavier per sheet than letter paper, so a fully loaded legal drawer carries more overall weight. A slide rated for around 100 pounds gives more margin against sag than a lighter-duty slide designed with letter-size loads in mind.",
  },
  {
    q: "Are lateral cabinets better than vertical ones for legal-size files?",
    a: "They can be, since a lateral drawer's wider body gives legal folders more side-to-side room without needing the extra front-to-back depth a vertical cabinet requires. The trade-off is that lateral cabinets need more side clearance along a wall.",
  },
  {
    q: "What happens if I put legal files in a letter-size rail cabinet?",
    a: "The folders will not hang correctly on rails spaced for letter width, and may sit unevenly or need to rest loose in the drawer instead of hanging. A separate adapter rail can sometimes convert letter spacing to legal spacing, but this adds cost and is not guaranteed to fit every cabinet.",
  },
  {
    q: "Is it safe to buy a cabinet that only mentions 'metal construction' without a steel gauge?",
    a: "It is a reasonable pick, but treat vaguer 'metal' language as a weaker signal than an explicit steel claim like the one on the BYNSOE cabinet in this list. Heavier steel gauge holds up better to the added weight of a fully loaded legal drawer over time.",
  },
  {
    q: "Should I buy a cabinet that doesn't confirm legal-size fit if the price is right?",
    a: "Only if your legal-size filing needs are occasional rather than primary. The GYIIYUO and BYNSOE picks in this list are solid value for letter and A4 documents, but we do not recommend them as your primary legal-size storage solution since neither listing confirms legal compatibility.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-lateral-filing-cabinets", title: "Best Lateral Filing Cabinets (2026)" },
  { href: "/guide/best-metal-filing-cabinets", title: "Best Metal Filing Cabinets (2026)" },
  { href: "/guide/best-filing-cabinets-for-home-offices", title: "Best Filing Cabinets for Home Offices (2026)" },
  { href: "/guide/best-locking-filing-cabinets", title: "Best Locking Filing Cabinets (2026)" },
];
