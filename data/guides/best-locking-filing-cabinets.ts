export const guideSlug = "best-locking-filing-cabinets";
export const guideTitle = "8 Best Locking Filing Cabinets in 2026";
export const metaTitle = "Best Locking Filing Cabinets in 2026 (Honest Picks)";
export const metaDescription =
  "8 locking filing cabinets we evaluated for home offices, with an honest look at which listings confirm a lock, what cam locks actually protect, and how to choose by drawer count.";
export const mainKeyword = "locking filing cabinet";
export const introParagraphs = [
  "A locking filing cabinet is the go-to answer for keeping paperwork out of casual view in a shared home office, but it's worth being upfront about what these locks actually do. Nearly every budget metal filing cabinet, including the ones in this guide, ships with a standard cam lock that adds a layer of privacy from roommates, kids, or house guests. It is not a substitute for a real safe and can typically be opened in seconds by anyone determined enough with basic tools, so treat it as a deterrent to casual access rather than a security device for sensitive records.",
  "We reviewed 8 current listings, 7 of which explicitly say lock, lockable, or locked in the title, plus one pick that doesn't mention a lock at all but earns its place here for other reasons we explain honestly below. Below we break down which listings confirm a real lock, which is more of a hybrid storage cabinet than a document filer, and how to match drawer count and lock type to how you actually plan to use it.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
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
    id: "letaya-3-drawer-mobile-lock",
    rank: 1,
    badge: "Best Overall Locking Pick",
    name: "Letaya 3 Drawer Mobile File Cabinet with Lock, Under Desk Metal Filing Cabinet",
    price: "$99.99",
    rating: "4.5 stars from 1,373 Amazon ratings",
    reviews: "1,373 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=deskfinds0d-20",
    description:
      "This 3 drawer mobile cabinet arrives fully assembled and confirms a lock right in the listing title, which makes it an easy pick if you want a filer that rolls under a desk and locks without extra setup. It supports letter, legal, and A4 hanging folders across its three drawers, giving more sorting room than most 2 drawer options in this guide.\n\nBased on product specs and buyer feedback, the caster wheels make it easy to reposition in a small home office, though the lock here is a standard cam lock like the rest of this list, meant to deter casual snooping rather than stop a determined intruder. At just under $100 it's one of the better value picks for buyers who want three drawers instead of two.",
    specs: [
      "3 drawers, fully assembled on arrival",
      "Lock confirmed on listing",
      "Fits letter, legal, and A4 hanging folders",
      "Caster wheels for mobility",
      "Black metal finish",
    ],
    pros: [
      "Confirmed lock feature",
      "Three drawers instead of the usual two",
      "Ships fully assembled",
      "Rolls easily under a desk",
    ],
    cons: [
      "Cam lock offers privacy, not real security",
      "Metal gauge is typical of budget cabinets, not heavy-duty",
      "Smaller drawer depth than a full-size lateral cabinet",
    ],
    bestFor: "Buyers who want three drawers of locking storage that rolls under a desk with no assembly required",
  },
  {
    id: "yizosh-garage-storage-lockable",
    rank: 2,
    badge: "Best Hybrid Storage Cabinet",
    name: "Yizosh Metal Garage Storage Cabinet with 2 Doors and 5 Adjustable Shelves, Lockable",
    price: "$144.99",
    rating: "4.4 stars from 5,174 Amazon ratings",
    reviews: "5,174 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31VGu0v5vDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B3MB5F56?tag=deskfinds0d-20",
    description:
      "This one is marketed as a garage storage cabinet first and a lockable file cabinet second, and it's honest to describe it that way here too. Instead of pull-out drawers for hanging folders, it has 2 doors and 5 adjustable shelves at 71-inches tall, making it better suited to bulkier office supplies, binders, and mixed storage than to a dedicated hanging-file document workflow.\n\nThe lock feature itself is real and confirmed on the listing, and adjustable shelving means you can configure it around file boxes if hanging folders aren't your main need. If you specifically need drawer-based document filing, one of the drawer cabinets in this guide will serve you better than this hybrid shelf design.",
    specs: [
      "2 doors, 5 adjustable shelves",
      "71-inch tall steel cabinet",
      "Lock confirmed on listing",
      "Better suited to bulk storage than hanging folders",
      "Black metal finish",
    ],
    pros: [
      "Confirmed lock feature",
      "Large capacity for mixed office or garage storage",
      "Adjustable shelves for flexible configurations",
      "Tall footprint maximizes vertical storage",
    ],
    cons: [
      "Not a drawer-based hanging-file cabinet",
      "Bulkier footprint than a typical filing cabinet",
      "Cam lock is a privacy feature, not real security",
    ],
    bestFor: "Buyers who want lockable storage for mixed office supplies or bulkier items, not primarily hanging folders",
  },
  {
    id: "letaya-2-drawer-lateral-lock",
    rank: 3,
    badge: "Best 2 Drawer Lateral Pick",
    name: "Letaya 2 Drawer File Cabinet with Lock, Metal Lateral Filing Cabinet",
    price: "$99.99",
    rating: "4.2 stars from 1,671 Amazon ratings",
    reviews: "1,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ukHwAN+yL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTNJY2HB?tag=deskfinds0d-20",
    description:
      "This lateral cabinet confirms a lock on the listing and is built to hold letter, legal, and A4 hanging folders across two side-by-side drawers rather than a deeper front-to-back layout. The wider lateral shape at roughly 28-inches across can sit comfortably against a wall in a home office where floor space is tighter than height.\n\nBased on product specs and buyer feedback, the lock again functions as a privacy deterrent rather than a heavy-duty security mechanism, consistent with every budget cabinet in this guide. Its black finish and straightforward two-drawer layout make it a reasonable middle-ground pick between the compact under-desk options and the larger vertical cabinets here.",
    specs: [
      "2 drawers, lateral layout",
      "Lock confirmed on listing",
      "Fits letter, legal, and A4 hanging folders",
      "Approximately 28-inches wide",
      "Black metal finish",
    ],
    pros: [
      "Confirmed lock feature",
      "Wider lateral footprint suits against-the-wall placement",
      "Handles letter, legal, and A4 sizes",
      "Straightforward two-drawer design",
    ],
    cons: [
      "Cam lock is a privacy feature, not real security",
      "Takes up more wall-facing width than a vertical cabinet",
      "Assembly required",
    ],
    bestFor: "Buyers who want a locking lateral cabinet that fits neatly against a wall",
  },
  {
    id: "gyiiyuo-2-drawer-desktop-mobile",
    rank: 4,
    badge: "Best for Extended Desktop Space (No Confirmed Lock)",
    name: "GYIIYUO 2 Drawer File Cabinet with 24-inch Extended Desktop, Mobile Filing Cabinet",
    price: "$56.99",
    rating: "4.2 stars from 1,425 Amazon ratings",
    reviews: "1,425 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=deskfinds0d-20",
    description:
      "This is the one exception in this guide: its listing does not mention a lock anywhere in the title or description, so we can't confirm it has one. What it does offer is a genuine differentiator, a 24-inch extended desktop on top that can double as a printer stand or extra workspace, plus a rolling design and a fabric drawer front for a softer look than bare metal.\n\nWe're including it because the extended desktop and mobility make it a useful pick for buyers who need rolling storage with a work surface on top, not because it's a locking cabinet. If locking security is the deciding factor for your purchase, choose one of the other 7 confirmed-lock picks in this guide instead, or contact the seller directly to verify before buying.",
    specs: [
      "2 drawers with 24-inch extended desktop",
      "Rolling casters for mobility",
      "Fabric drawer front",
      "Fits letter and A4 size files",
      "Light brown finish",
    ],
    pros: [
      "Extended desktop doubles as a printer stand or workspace",
      "Rolling design for easy repositioning",
      "Lower price than most locking picks in this guide",
      "Softer fabric drawer aesthetic",
    ],
    cons: [
      "No lock feature confirmed on this listing",
      "Not a substitute for the confirmed-lock picks if security matters to you",
      "Fabric drawer front is less durable than solid metal",
    ],
    bestFor: "Buyers who want rolling storage with a bonus work surface and don't need a confirmed lock",
  },
  {
    id: "sisesol-2-drawer-narrow-lock",
    rank: 5,
    badge: "Best Narrow Vertical Pick",
    name: "SISESOL 2 Drawer File Cabinet with Lock, Narrow Vertical Filing Cabinet",
    price: "$44.99",
    rating: "4.2 stars from 616 Amazon ratings",
    reviews: "616 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31cXnfFFSML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DQL795FX?tag=deskfinds0d-20",
    description:
      "The SISESOL confirms a lock on the listing and is built narrow and vertical, designed to slide under a desk without eating into legroom the way a wider lateral cabinet would. It's rated to fit letter, A4, and legal size files across its two drawers despite the slim profile.\n\nBased on product specs and buyer feedback, this is one of the more affordable confirmed-lock picks in the guide, and the vertical shape makes it a solid fit for a dorm room or small apartment office where floor footprint matters more than drawer width. As with the other budget cabinets here, the lock is a cam lock meant for privacy, not a substitute for a real safe.",
    specs: [
      "2 drawers, narrow vertical design",
      "Lock confirmed on listing",
      "Fits letter, A4, and legal size files",
      "Fits under most desks",
      "Black metal finish",
    ],
    pros: [
      "Confirmed lock feature",
      "Narrow footprint fits under a desk",
      "Affordable price point",
      "Handles multiple file sizes despite the slim design",
    ],
    cons: [
      "Cam lock is a privacy feature, not real security",
      "Narrower drawers hold fewer files than a lateral cabinet",
      "Assembly required",
    ],
    bestFor: "Buyers who need a narrow locking cabinet that fits under a desk without sacrificing legroom",
  },
  {
    id: "bynsoe-2-drawer-vertical-lock",
    rank: 6,
    badge: "Best Budget Vertical Pick",
    name: "BYNSOE 2 Drawer File Cabinet with Lock, Vertical Filing Storage Cabinet",
    price: "$64.99",
    rating: "4 stars from 1,303 Amazon ratings",
    reviews: "1,303 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31VM3xK++PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=deskfinds0d-20",
    description:
      "This steel vertical cabinet confirms a lock on the listing and is built for letter size files across two stacked drawers, a straightforward layout for anyone who just needs a basic locking filer without extra frills. It requires assembly out of the box, typical for cabinets at this price point.\n\nBased on product specs and buyer feedback, it holds up as a reasonable budget option, though its rating sits slightly lower than others in this guide, worth weighing against the lower price. The lock, like the rest of this list, is a standard cam lock suited to keeping paperwork out of casual view rather than protecting truly sensitive documents.",
    specs: [
      "2 drawers, vertical design",
      "Lock confirmed on listing",
      "Fits letter size files",
      "Steel construction",
      "Assembly required",
    ],
    pros: [
      "Confirmed lock feature",
      "Straightforward two-drawer vertical layout",
      "Budget-friendly price",
      "Steel build",
    ],
    cons: [
      "Slightly lower average rating than other picks here",
      "Letter size only, no legal or A4 mentioned",
      "Cam lock is a privacy feature, not real security",
    ],
    bestFor: "Buyers who want a no-frills locking cabinet at a lower price point",
  },
  {
    id: "steeloong-2-drawer-lock",
    rank: 7,
    badge: "Best Compact Office Pick",
    name: "SteeLoong 2 Drawer File Cabinet with Lock, Metal Office File Cabinet",
    price: "$64.99",
    rating: "4 stars from 382 Amazon ratings",
    reviews: "382 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31IIIyTZ29L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D2QSQZ1X?tag=deskfinds0d-20",
    description:
      "The SteeLoong confirms a lock right in the listing title and keeps things simple with a two-drawer metal design finished in black, aimed squarely at a compact home office setup. It's a smaller-volume listing than some of the other picks here, with fewer total ratings, but the feedback available points to solid basic performance.\n\nBased on product specs and buyer feedback, this is a fine choice if you want a straightforward locking cabinet without extra features like an extended desktop or lateral width. As with every pick in this guide, treat the lock as a privacy measure rather than a real security guarantee for sensitive documents.",
    specs: [
      "2 drawers, metal construction",
      "Lock confirmed on listing",
      "Compact footprint for small offices",
      "Black finish",
      "Assembly required",
    ],
    pros: [
      "Confirmed lock feature",
      "Compact size suits small offices",
      "Simple, no-frills design",
      "Competitive price for a locking cabinet",
    ],
    cons: [
      "Smaller sample of ratings than other picks in this guide",
      "Cam lock is a privacy feature, not real security",
      "No extended desktop or lateral width option",
    ],
    bestFor: "Buyers who want a simple, compact locking cabinet for a small home office",
  },
  {
    id: "livofloral-4-drawer-vertical-lock",
    rank: 8,
    badge: "Best for Maximum Drawer Count",
    name: "Livofloral Vertical File Cabinet with 4 Drawers and 1 Door, 2 Locks",
    price: "See price on Amazon",
    rating: "4.7 stars from 4 Amazon ratings",
    reviews: "4 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31SplwEKN2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DCG99Y8Y?tag=deskfinds0d-20",
    description:
      "The Livofloral stands out for sheer capacity, 4 drawers plus a separate storage door, and it confirms not one but two locks on the listing, fitting letter, legal, and A4 folders across its drawers. Its white finish is also a change of pace from the black metal cabinets that dominate the rest of this guide.\n\nWorth flagging directly: this listing has only 4 Amazon ratings at the time of our review, a small sample that its high 4.7 average shouldn't be read as statistically conclusive the way a listing with over a thousand ratings would be. Based on product specs, it's a reasonable pick if you need more drawers than any other cabinet here and don't mind being an early adopter on a newer listing, but buyers who want a track record behind their purchase should lean toward one of the higher-volume picks above.",
    specs: [
      "4 drawers plus 1 storage door",
      "2 locks confirmed on listing",
      "Fits letter, legal, and A4 folders",
      "White metal finish",
      "Assembly required",
    ],
    pros: [
      "Highest drawer count in this guide",
      "Two confirmed locks instead of one",
      "White finish option for a lighter look",
      "Extra storage door beyond the drawers",
    ],
    cons: [
      "Very small ratings sample, only 4 at time of review",
      "No listed price, check current price on Amazon",
      "Cam locks are a privacy feature, not real security",
    ],
    bestFor: "Buyers who need maximum drawer count and don't mind a newer listing with limited review history",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Lock feature confirmed on listing",
    description: "Checked whether each Amazon listing explicitly states a lock, lockable, or locked feature in the title or bullet points, and flagged the one pick that doesn't.",
  },
  {
    title: "Build quality and steel construction",
    description: "Weighed gauge and construction style across listings, noting that all are budget metal cabinets rather than heavy-duty or UL-rated safes.",
  },
  {
    title: "File compatibility (letter, legal, A4)",
    description: "Compared which folder sizes each cabinet is rated to hold, since not every pick fits all three common sizes.",
  },
  {
    title: "Mobility and casters",
    description: "Noted which picks include rolling casters for repositioning versus a stationary base, relevant for smaller rooms where furniture gets moved often.",
  },
  {
    title: "Value for money",
    description: "Weighed price against drawer count, confirmed lock status, and buyer feedback volume to judge which picks offer the strongest value at their price point.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Locks are privacy devices, not security devices",
    explanation:
      "The standard cam lock used on every budget metal filing cabinet, including all 8 picks in this guide, can typically be opened in seconds with basic tools or even a paperclip. It deters casual snooping from roommates or kids, but it is not a substitute for a real safe, and sensitive documents like tax records or legal paperwork need a genuine UL-rated safe instead.",
  },
  {
    criterion: "COM keys mean your key may not be unique",
    explanation:
      "Many budget cabinets use COM, or common, keys, meaning the same key can sometimes open other cabinets from the same brand and lock supplier. If you're storing anything sensitive, don't assume your lock is uniquely keyed just because it came with its own key.",
  },
  {
    criterion: "UL Group 2 rating is the real benchmark for document security",
    explanation:
      "A genuine UL Group 2 rated lock is built to resist roughly 20 hours of expert manipulation, which is the appropriate minimum standard for actual tax or legal document security. None of the budget cabinets in this guide claim a UL rating, so treat their locks as a deterrent layer, not a security guarantee.",
  },
  {
    criterion: "Bar lock vs individual drawer lock",
    explanation:
      "A bar lock secures every drawer at once with a single mechanism, which is simple but means one point of failure if that lock breaks. Individual drawer locks are more granular and let you leave some drawers unlocked, but require separate mechanisms and sometimes separate keys per drawer.",
  },
  {
    criterion: "Replacement keys and locks can become unavailable",
    explanation:
      "Proprietary locks on budget cabinets can become unavailable from the manufacturer within 3 to 5 years, especially on lower-volume listings. If you lose your key after that window, expect to pay a locksmith around $50 for a drill-out rather than simply ordering a replacement key.",
  },
  {
    criterion: "Match drawer count to how much you actually file",
    explanation:
      "A 2 drawer cabinet is enough for most single-person home offices, but if you're archiving several years of paperwork or running a small business from home, a 3 or 4 drawer option like the Letaya 3 drawer pick or the Livofloral 4 drawer pick avoids running out of space within a year.",
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
    subheading: "Which Listings Actually Confirm a Lock",
    intro:
      "Amazon listing titles are the most reliable signal we have for lock confirmation. Here's exactly which of these 8 cabinets confirm one and which is the exception.",
    table: {
      headers: ["Cabinet", "Lock confirmed on listing?", "Notes"],
      rows: [
        ["Letaya 3 Drawer Mobile", "Yes", "Cam lock, standard privacy feature"],
        ["Yizosh Garage Storage Cabinet", "Yes", "Hybrid shelf storage, not primarily hanging folders"],
        ["Letaya 2 Drawer Lateral", "Yes", "Cam lock, standard privacy feature"],
        ["GYIIYUO 2 Drawer with Desktop", "No, not mentioned on listing", "Verify with seller if a lock is required"],
        ["SISESOL 2 Drawer Narrow", "Yes", "Cam lock, standard privacy feature"],
        ["BYNSOE 2 Drawer Vertical", "Yes", "Cam lock, standard privacy feature"],
        ["SteeLoong 2 Drawer", "Yes", "Cam lock, standard privacy feature"],
        ["Livofloral 4 Drawer", "Yes, 2 locks", "Small ratings sample, only 4 at time of review"],
      ],
    },
    note: "If a confirmed lock is non-negotiable for your purchase, avoid the GYIIYUO pick and choose any of the other 7.",
  },
  {
    subheading: "By Buyer Scenario",
    cards: [
      {
        label: "I need the most drawers for heavy filing",
        text: "The Livofloral 4 Drawer with its 2 confirmed locks and extra storage door holds more than any other pick here, though its 4-rating sample is worth weighing against the higher-volume picks.",
      },
      {
        label: "I have limited floor space under my desk",
        text: "The SISESOL 2 Drawer Narrow Vertical is built specifically to slide under a desk without eating into legroom.",
      },
      {
        label: "I want a work surface on top, not just a lock",
        text: "The GYIIYUO 2 Drawer with 24-inch Extended Desktop offers a genuine bonus work surface, but it has no confirmed lock, so choose it only if drawer security isn't your priority.",
      },
      {
        label: "I need storage for bulkier items, not just hanging folders",
        text: "The Yizosh Garage Storage Cabinet's 2 doors and 5 adjustable shelves suit binders, supplies, and mixed storage better than a drawer-only design.",
      },
      {
        label: "I want the best balance of price and drawer count",
        text: "The Letaya 3 Drawer Mobile gives three drawers, a confirmed lock, and full assembly out of the box for under $100.",
      },
    ],
  },
  {
    subheading: "How Secure Is a Cam Lock, Really",
    intro:
      "Every locking cabinet in this guide, aside from the one exception noted above, uses a standard cam lock. It's worth understanding what that actually protects against before you buy.",
    table: {
      headers: ["Threat", "Does a cam lock stop it?", "What actually stops it"],
      rows: [
        ["Casual snooping by a roommate or child", "Yes, effectively", "A cam lock is sufficient here"],
        ["A determined person with basic tools", "No, typically defeated in seconds", "A UL Group 2 rated lock or a fireproof safe"],
        ["Fire damage to tax or legal documents", "No, not designed for this", "A fireproof, UL-rated document safe"],
        ["Someone with a common COM key for the same brand", "No", "A cabinet with a uniquely keyed lock, verified with the seller"],
      ],
    },
  },
  {
    subheading: "Bar Lock vs Individual Drawer Lock",
    cards: [
      {
        label: "Bar lock (single mechanism for all drawers)",
        text: "Simpler to use, one key locks everything, but it's a single point of failure if that one lock or mechanism breaks.",
      },
      {
        label: "Individual drawer locks",
        text: "More granular control, letting you leave some drawers unlocked, but requires separate mechanisms and can mean more parts that eventually wear out.",
      },
    ],
    note: "Most budget cabinets, including the picks in this guide, use a bar lock design rather than individually locking drawers.",
  },
  {
    subheading: "When to Spend More Than a Budget Cabinet",
    intro:
      "None of the 8 picks in this guide claim a UL security rating, which is fine for everyday privacy but not for genuinely sensitive records.",
    cards: [
      {
        label: "Everyday household paperwork, bills, non-sensitive files",
        text: "Any of the 7 confirmed-lock picks in this guide are appropriate.",
      },
      {
        label: "Tax records, legal documents, or anything fire-sensitive",
        text: "Step up to a dedicated UL Group 2 rated, fireproof document safe instead of relying on a budget cabinet's cam lock.",
      },
    ],
  },
];

export const faq: FaqItem[] = [
  {
    q: "How secure are the locks on these filing cabinets, really?",
    a: "Not very, in the sense of stopping a determined intruder. All 7 confirmed-lock picks in this guide use standard cam locks, which can typically be opened in seconds with basic tools or even a paperclip. They're effective at deterring casual snooping from roommates or kids, but for genuinely sensitive documents like tax or legal records, a UL Group 2 rated, fireproof safe is the appropriate tool, not a budget filing cabinet lock.",
  },
  {
    q: "Does the GYIIYUO 2 Drawer cabinet actually have a lock?",
    a: "Its Amazon listing does not mention a lock anywhere in the title or description, so we can't confirm one is included. It earns its spot in this guide for its 24-inch extended desktop and rolling design, not as a locking pick. If a confirmed lock matters to you, choose one of the other 7 picks instead or verify directly with the seller before buying.",
  },
  {
    q: "What does it mean that some cabinets use COM keys?",
    a: "COM, or common, keys mean the lock manufacturer used the same key cut across many cabinets from the same brand, so your key isn't necessarily unique to your unit. This is a minor security consideration worth knowing if you're storing anything you'd want kept private from someone who might have access to a similar cabinet elsewhere.",
  },
  {
    q: "What happens if I lose the key to my filing cabinet?",
    a: "On budget cabinets like the ones in this guide, replacement keys and locks can become unavailable from the manufacturer within 3 to 5 years, particularly on lower-volume listings. If that happens, a locksmith can drill out the lock, which commonly costs around $50.",
  },
  {
    q: "Is the Yizosh cabinet a good choice for hanging file folders?",
    a: "Not primarily. It's marketed as a garage storage cabinet first, with 2 doors and 5 adjustable shelves rather than pull-out drawers, so it's better suited to binders, supplies, and bulkier items than to a dedicated hanging-file workflow. Its lock feature is real and confirmed on the listing, but choose a drawer-based pick from this guide if hanging folders are your main need.",
  },
  {
    q: "How many drawers do I actually need?",
    a: "A 2 drawer cabinet covers most single-person home offices for a few years of paperwork. If you're archiving several years of documents or running a small business, a 3 drawer option like the Letaya 3 Drawer Mobile or a 4 drawer option like the Livofloral gives more room before you outgrow it.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-wood-file-cabinets", title: "Best Wood File Cabinets (2026)" },
  { href: "/guide/best-2-drawer-wood-file-cabinets", title: "Best 2 Drawer Wood File Cabinets (2026)" },
  { href: "/guide/best-lateral-wood-file-cabinets", title: "Best Lateral Wood File Cabinets (2026)" },
  { href: "/guide/best-solid-wood-file-cabinets", title: "Best Solid Wood File Cabinets (2026)" },
];
