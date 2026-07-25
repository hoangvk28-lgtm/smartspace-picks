export const guideSlug = "best-standing-desk-frames";
export const guideTitle = "8 Best Standing Desk Frames for Desktop Compatibility in 2026";
export const metaTitle = "Best Standing Desk Frames for Any Desktop Size (2026)";
export const metaDescription =
  "8 standing desk frames we evaluated for desktop compatibility, minimum top thickness, and leveling range, including one converter that is not a frame at all.";
export const mainKeyword = "standing desk frame";
export const introParagraphs = [
  "A standing desk frame is only as good as the desktop it ends up supporting, and most Amazon listings bury the compatibility details that actually matter. Crossbar width range, minimum desktop thickness for secure mounting, and grommet hole clearance rarely show up in the title, yet all three determine whether a frame will actually fit the top you already own or plan to buy. We looked past the marketing language on all 8 picks below to focus on what desktop sizes and thicknesses each one genuinely supports.",
  "Several of these picks ship as complete desks with a top included, which sidesteps compatibility questions entirely, while others are frame-only kits that require matching your own desktop to a stated width range. One pick in this list is a standing desk converter rather than a frame, and we flag that clearly rather than lumping it in with true floor-standing frames. Below we cover 8 options with an honest read on desktop fit, assembly effort, and where a crossbar range can leave your top unsupported at the edges.",
];
export const lastUpdated = "2026-07-26";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ikoMgen5L._SL500_.jpg";

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
    id: "huanuo-32-small-electric-standing-desk",
    rank: 1,
    badge: "Best for Small Desktops",
    name: "HUANUO 32-inch Small Electric Standing Desk Adjustable Height, 4 Memory Height Settings",
    price: "$75.99",
    rating: "4.6 stars from 2,226 Amazon ratings",
    reviews: "2,226 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41ikoMgen5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F9X3FDYY?tag=deskfinds0d-20",
    description:
      "This is a complete 32-inch desk with the top already attached, which removes any question about crossbar-to-desktop compatibility since the two are sold as a matched unit. It has 4 memory height presets and a compact footprint suited to a small room or dorm corner.\n\nBecause the top ships fixed to this frame, you cannot swap in a different desktop later, so measure your space against the 32-inch width before ordering. The tradeoff for that simplicity is less flexibility if your needs change down the line.",
    specs: [
      "32-inch complete desk, top included",
      "4 memory height presets",
      "Fixed top, not swappable",
      "LightWalnut finish",
      "Compact footprint",
    ],
    pros: [
      "No compatibility guesswork, top and frame are matched",
      "Fits small rooms and dorm spaces",
      "Simple 4-preset memory control",
      "Affordable entry price",
    ],
    cons: [
      "Top is fixed and cannot be swapped for a larger desktop later",
      "Not suited for dual-monitor setups",
      "Limited desktop depth for accessories",
    ],
    bestFor: "Small rooms where a fixed 32-inch desktop is enough and swappable tops are not a priority",
  },
  {
    id: "veken-55-large-electric-standing-desk",
    rank: 2,
    badge: "Best Wide Complete Desk",
    name: "Veken 55 Inch Large Electric Standing Desk, Gaming Table, White",
    price: "$109.99",
    rating: "4.6 stars from 1,747 Amazon ratings",
    reviews: "1,747 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41k4VBjAQzL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DWMNPW7D?tag=deskfinds0d-20",
    description:
      "This is a complete 55-inch desk with the top attached to the frame at the factory, so there is no crossbar width to check against a separate desktop purchase. The white finish and wide surface suit a dual-monitor gaming or home office setup.\n\nSince the top is fixed, grommet placement and cable routing are already built into the design rather than something you configure yourself. If you later want a different material or a narrower footprint, this frame will not accommodate that without replacing the whole unit.",
    specs: [
      "55-inch complete desk, top included",
      "White finish",
      "Fixed top, matched to frame",
      "Electric height adjustment",
      "Wide surface for dual monitors",
    ],
    pros: [
      "Top and frame ship pre-matched, zero compatibility risk",
      "Wide 55-inch surface fits dual-monitor setups",
      "Strong review volume and rating",
      "Competitive price for the size",
    ],
    cons: [
      "Top cannot be swapped for a different material later",
      "Larger footprint needs more floor space",
      "White finish shows scuffs more than darker tops",
    ],
    bestFor: "Buyers who want a wide, pre-matched desk without sourcing a separate desktop",
  },
  {
    id: "ergear-height-adjustable-electric-standing-desk",
    rank: 3,
    badge: "Best Budget Frame-Desktop Combo",
    name: "ErGear 48 x 24 Inch Height Adjustable Electric Standing Desk, Black",
    price: "$94.98",
    rating: "4.5 stars from 11,572 Amazon ratings",
    reviews: "11,572 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/415He+cLvaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B41YH9B6?tag=deskfinds0d-20",
    description:
      "This 48 by 24 inch desk ships as a complete unit, so the desktop thickness and grommet layout are already engineered to match the frame's crossbar spacing. It carries the largest review base in this guide by a wide margin, which is a useful signal of consistent real-world fit and finish.\n\nAt 24 inches deep it is on the shallower side for anyone running a full dual-monitor setup with accessories, so measure your desk accessories against that depth before assuming everything will fit. Assembly is a standard single-person job at this size.",
    specs: [
      "48 x 24 inch complete desk",
      "Black finish",
      "Fixed top matched to frame",
      "Electric height adjustment",
      "Largest review base in this guide",
    ],
    pros: [
      "Massive review volume backing a 4.5 star average",
      "No compatibility guesswork with a pre-matched top",
      "Solid mid-size footprint for most home offices",
      "Affordable price point",
    ],
    cons: [
      "24-inch depth is shallow for accessory-heavy setups",
      "Fixed top, no swapping for a different desktop",
      "Not the widest option if you need more surface area",
    ],
    bestFor: "Buyers who want a proven, high-volume pick at a standard 48x24 footprint",
  },
  {
    id: "fezibo-electric-standing-desk-splice-board",
    rank: 4,
    badge: "Best Desktop Material Upgrade",
    name: "FEZIBO Standing Desk, 48 x 24 Inches Electric Height Adjustable, with Splice Board, White Frame/Maple Top",
    price: "$99.99",
    rating: "4.5 stars from 8,463 Amazon ratings",
    reviews: "8,463 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/418JjdqdnpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F8MHPVPH?tag=deskfinds0d-20",
    description:
      "The splice board design on this 48 by 24 inch desk gives a two-tone maple top over a white frame, and the desktop ships already matched to the crossbar spacing so there is no separate compatibility check needed. It has a strong review base to back up its fit and finish claims.\n\nThe maple laminate top is thicker than budget alternatives, which matters if you plan to add grommet-mounted accessories like a monitor arm, since a thin top can strip screw threads over time. This is a complete desk, not a frame-only kit.",
    specs: [
      "48 x 24 inch complete desk with splice board top",
      "White frame, maple top finish",
      "Fixed top matched to frame",
      "Electric height adjustment",
      "Strong review base",
    ],
    pros: [
      "Two-tone maple top adds visual interest over plain laminate",
      "Thicker top better supports grommet-mounted accessories",
      "High review volume with solid rating",
      "No compatibility guesswork",
    ],
    cons: [
      "Fixed top, cannot be swapped for a different size later",
      "24-inch depth limits accessory placement",
      "White frame may show marks over time",
    ],
    bestFor: "Buyers who want a thicker desktop for mounting a monitor arm or other grommet accessories",
  },
  {
    id: "claiks-electric-standing-desk-splice-board",
    rank: 5,
    badge: "Best for a Rustic Look",
    name: "Claiks Electric Standing Desk, 24x48 Inches, Black Frame/Rustic Brown Top",
    price: "$99.99",
    rating: "4.4 stars from 5,316 Amazon ratings",
    reviews: "5,316 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41oErF+y4gL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BZ7GXM4M?tag=deskfinds0d-20",
    description:
      "This complete 24x48 inch desk pairs a black steel frame with a rustic brown splice-board top, and like the other complete desks here, the top ships already matched to the frame so crossbar width is never a concern. It sits in the same price band as the FEZIBO pick above but with a slightly different aesthetic.\n\nThe rustic brown finish is a reasonable middle ground for a home office that wants warmth without a full wood upgrade. Reviews are solid, though slightly lower than some other picks in this guide, so weigh that against the styling if aesthetics matter to you.",
    specs: [
      "24x48 inch complete desk",
      "Black frame, rustic brown top",
      "Fixed top matched to frame",
      "Electric height adjustment",
      "Splice board top design",
    ],
    pros: [
      "Rustic brown finish suits a warmer home office look",
      "No compatibility guesswork with a matched top",
      "Solid review base for the price",
      "Comparable footprint to other budget picks",
    ],
    cons: [
      "Slightly lower rating than similarly priced picks",
      "Fixed top, no swapping later",
      "24-inch depth limits larger accessory setups",
    ],
    bestFor: "Buyers who want a rustic wood-look top without paying for solid wood",
  },
  {
    id: "huuger-power-outlets-standing-desk",
    rank: 6,
    badge: "Best for Cable and Accessory Routing",
    name: "Huuger Electric Standing Desk with Power Outlets and USB-C Port, 47 x 24 Inch",
    price: "$104.99",
    rating: "4.6 stars from 155 Amazon ratings",
    reviews: "155 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41rUtvN6YIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GS9B1X5X?tag=deskfinds0d-20",
    description:
      "This 47 by 24 inch complete desk includes built-in power outlets and a USB-C port on the frame itself, which helps with cable routing since you are not running an extension cord across a fixed desktop. The top ships matched to the frame with no compatibility check needed.\n\nThe review count here is the lowest in this guide, so treat the rating as a smaller sample than the other picks. The steel frame is marketed as stable, but with fewer reviews it is harder to confirm long-term durability at the same confidence level as higher-volume picks.",
    specs: [
      "47 x 24 inch complete desk",
      "Built-in power outlets and USB-C port",
      "Fixed top matched to frame",
      "Stable steel frame",
      "4 height presets",
    ],
    pros: [
      "Built-in outlets simplify cable and accessory routing",
      "USB-C port adds device charging without extra cables",
      "Reasonable price for the added features",
      "Solid steel frame construction",
    ],
    cons: [
      "Lowest review count in this guide, smaller confidence sample",
      "24-inch depth limits accessory setups",
      "Fixed top, no swapping later",
    ],
    bestFor: "Buyers who want built-in power routing without a separate power strip",
  },
  {
    id: "huuger-55x28-large-electric-standing-desk",
    rank: 7,
    badge: "Best Deep Desktop",
    name: "Huuger 55 x 28 Large Electric Standing Desk, 27.6-inch Deep Desktop, Rustic Brown",
    price: "$139.99",
    rating: "4.4 stars from 555 Amazon ratings",
    reviews: "555 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41oHg37v77L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT3Y1X96?tag=deskfinds0d-20",
    description:
      "At 27.6 inches deep, this is the deepest desktop in this guide, which gives noticeably more room for a keyboard, mouse, and monitor arm base without crowding the front edge. It ships as a complete 55 by 28 inch unit with the top pre-matched to the frame.\n\nThe extra depth and width mean this desk needs more floor space than the compact picks above, so measure your room before ordering. It includes 2 hooks and 3 preset heights, which is a step down in preset count from the 4-preset picks elsewhere in this guide.",
    specs: [
      "55 x 28 inch complete desk, 27.6-inch deep desktop",
      "Rustic Brown finish",
      "2 hooks included",
      "3 preset heights",
      "Fixed top matched to frame",
    ],
    pros: [
      "Deepest desktop in this guide at 27.6 inches",
      "Extra surface room for accessories and monitor arms",
      "Included hooks for headphones or bags",
      "No compatibility guesswork with a matched top",
    ],
    cons: [
      "Only 3 height presets versus 4 on other picks",
      "Larger footprint needs more floor space",
      "Higher price than the compact options",
    ],
    bestFor: "Buyers who need extra desktop depth for a monitor arm base or multiple accessories",
  },
  {
    id: "vivo-42-standing-desk-converter",
    rank: 8,
    badge: "Best Converter Alternative (Not a Frame)",
    name: "VIVO Height Adjustable 42 Inch Standing Desk Converter with Dual Monitor Stand",
    price: "$219.99",
    rating: "4.5 stars from 598 Amazon ratings",
    reviews: "598 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41daFWT9JPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CNH9SQT7?tag=deskfinds0d-20",
    description:
      "This is a tabletop standing desk converter, not a floor-standing frame, and it should not be compared to the other 7 picks as if it were the same product category. It sits on top of an existing desk and includes a dual monitor stand built into the riser mechanism.\n\nFor renters or anyone who cannot bolt a fixed frame to the floor, this is a genuinely useful alternative that requires no assembly beyond unboxing. It will not offer the desktop-size flexibility of a true frame, since it is sized to fit on top of whatever desk you already own.",
    specs: [
      "Tabletop converter, not a floor-standing frame",
      "42-inch width",
      "Dual 13 to 30 inch monitor stand built in",
      "Sits on top of an existing desk",
      "No floor assembly required",
    ],
    pros: [
      "No floor assembly, sits directly on an existing desk",
      "Built-in dual monitor stand saves a separate purchase",
      "Good option for renters who cannot install a fixed frame",
      "Solid rating for the category",
    ],
    cons: [
      "Not a floor-standing frame, a different product category entirely",
      "Requires an existing desk underneath it",
      "Reduces usable desktop depth once installed",
    ],
    bestFor: "Renters or buyers who want sit-stand adjustment without installing a fixed frame",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Desktop compatibility and fixed-top design",
    description: "Checked whether each pick ships as a complete desk with a matched top or as a frame requiring a separately sourced desktop, since compatibility risk differs sharply between the two.",
  },
  {
    title: "Desktop thickness and grommet support",
    description: "Weighed desktop material thickness against typical grommet-mounted accessories like monitor arms, since a thin top can strip mounting screws over time.",
  },
  {
    title: "Leveling range for uneven floors",
    description: "Reviewed stated leveling foot ranges against common floor slope tolerances, flagging picks where a steep slope would need shims beyond the built-in adjustment.",
  },
  {
    title: "Assembly effort and person count",
    description: "Estimated whether assembly is realistically a one-person job or needs a second set of hands, based on frame complexity and desktop size.",
  },
  {
    title: "Value relative to desktop size and features",
    description: "Weighed price against desktop dimensions, included accessories like outlets or hooks, and review volume to judge which picks offer the strongest value per square inch.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Frame crossbar width must be checked against your desktop, not the reverse",
    explanation:
      "Buyers commonly measure their desktop and assume any frame within the stated range will work, but the crossbar's own minimum and maximum width need to be checked against the desktop just as carefully, since an undersized crossbar leaves the desktop overhanging at the edges. Always compare both directions before ordering a frame-only kit.",
  },
  {
    criterion: "Desktop needs at least 3/4-inch thickness for secure mounting",
    explanation:
      "A desktop thinner than about 3/4 inch is at real risk of screws or clamps stripping out over months of use, especially at the crossbar mounting points. If you are pairing a frame with your own desktop, measure actual thickness rather than trusting a generic product description.",
  },
  {
    criterion: "Grommet hole placement can conflict with crossbar brackets",
    explanation:
      "A grommet hole drilled or cut too close to where a crossbar bracket sits can weaken the desktop at exactly the point carrying the most load. Check the frame's bracket placement diagram before cutting or ordering a pre-drilled desktop to avoid a structural conflict.",
  },
  {
    criterion: "Leveling foot range of 0.5 to 1.5 inches will not fix a steep slope",
    explanation:
      "Most standing desk frames include leveling feet in the 0.5 to 1.5 inch range, which handles minor floor unevenness but not a genuinely sloped room. If your floor drops more than that across the frame's footprint, plan on adding shims rather than relying on the built-in adjustment alone.",
  },
  {
    criterion: "Assembly is typically a two-person job even for frame-only kits",
    explanation:
      "Marketing copy for frame-only kits often implies solo assembly, but aligning a desktop onto crossbars while keeping it level is meaningfully easier with a second person, especially on wider desks over 48 inches. Budget for help if you are assembling alone-friendly language on the listing.",
  },
  {
    criterion: "A converter is not a substitute for a frame if you need floor-level flexibility",
    explanation:
      "Standing desk converters sit on top of an existing desk and cannot replace the desktop-size flexibility of a true floor-standing frame. If you need a specific desktop width or depth that your current desk does not offer, a converter will not solve that problem no matter how well reviewed it is.",
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
    subheading: "Complete Desk vs. Frame-Only: What This Guide Actually Contains",
    intro:
      "All 8 picks in this guide ship as complete units with the top pre-matched to the frame, except for the VIVO converter, which is a tabletop unit rather than a frame at all. None of these are frame-only kits requiring a separately sourced desktop.",
    table: {
      headers: ["Pick", "Type", "What that means for you"],
      rows: [
        ["HUANUO 32-inch", "Complete desk", "Top fixed, no compatibility check needed"],
        ["Veken 55-inch", "Complete desk", "Top fixed, wide 55-inch surface"],
        ["ErGear 48x24", "Complete desk", "Top fixed, highest review volume"],
        ["FEZIBO 48x24", "Complete desk", "Top fixed, thicker maple laminate"],
        ["Claiks 24x48", "Complete desk", "Top fixed, rustic brown finish"],
        ["Huuger 47x24", "Complete desk", "Top fixed, built-in outlets"],
        ["Huuger 55x28", "Complete desk", "Top fixed, deepest desktop at 27.6 inches"],
        ["VIVO 42-inch", "Tabletop converter, not a frame", "Sits atop an existing desk"],
      ],
    },
    note: "If you need a true frame-only kit to pair with a desktop you already own, none of these 8 are frame-only, factor that in before buying.",
  },
  {
    subheading: "By Desktop Depth",
    intro: "Depth matters more than width for anyone running a monitor arm base or multiple accessories.",
    table: {
      headers: ["Depth need", "Recommended pick", "Why"],
      rows: [
        ["Standard 24-inch depth", "ErGear 48x24 or FEZIBO 48x24", "Proven fit with the largest review bases"],
        ["Extra depth for monitor arms", "Huuger 55x28 (27.6-inch deep)", "Deepest desktop in this guide"],
        ["Minimal footprint", "HUANUO 32-inch", "Smallest complete desk for tight rooms"],
      ],
    },
  },
  {
    subheading: "By Budget",
    cards: [
      {
        label: "Under $100",
        text: "The HUANUO 32-inch ($75.99), ErGear 48x24 ($94.98), FEZIBO 48x24 ($99.99), and Claiks 24x48 ($99.99) all include a matched top for under $100.",
      },
      {
        label: "$100 to $150",
        text: "The Veken 55-inch ($109.99), Huuger 47x24 with outlets ($104.99), and Huuger 55x28 ($139.99) add width, depth, or built-in power for a modest premium.",
      },
      {
        label: "Over $200 for a converter",
        text: "The VIVO 42-inch converter ($219.99) costs more than any frame here, but you are paying for a tabletop unit that needs no floor assembly and includes a monitor stand.",
      },
    ],
  },
  {
    subheading: "Checking Mounting Thickness After Setup",
    intro: "A quick check confirms your desktop can safely support grommet-mounted accessories.",
    table: {
      headers: ["Check", "How to do it", "What it tells you"],
      rows: [
        ["Thickness measurement", "Measure the desktop edge with calipers or a ruler", "Confirms at least 3/4-inch thickness for secure mounting"],
        ["Bracket clearance", "Compare grommet hole location to bracket diagram", "Avoids weakening the top at a load-bearing point"],
        ["Leveling foot test", "Adjust feet and re-check with a level", "Confirms whether 0.5-1.5 inch range covers your floor"],
      ],
    },
  },
  {
    subheading: "When to Choose the Converter Instead of a Frame",
    cards: [
      {
        label: "Choose the VIVO converter if",
        text: "You rent and cannot install a fixed frame, or you want sit-stand adjustment without replacing your current desk.",
      },
      {
        label: "Choose a complete desk instead if",
        text: "You want a dedicated standing desk with a full-size fixed top and do not need to preserve your existing desk underneath.",
      },
    ],
  },
];

export const faq: FaqItem[] = [
  {
    q: "Are any of these picks frame-only kits I can pair with my own desktop?",
    a: "No. All 7 desk picks in this guide ship as complete units with the top pre-matched to the frame at the factory. The VIVO pick is a tabletop converter, not a frame at all. If you specifically need a frame-only kit to pair with an existing desktop, none of these 8 fit that description.",
  },
  {
    q: "How thick does my desktop need to be for secure mounting?",
    a: "A desktop thinner than about 3/4 inch risks stripped screws or loose clamps at the crossbar mounting points over time. Since every desk in this guide ships with its top pre-matched, this mainly matters if you are shopping frame-only kits elsewhere.",
  },
  {
    q: "Will the leveling feet on these desks fix an uneven floor?",
    a: "Most standing desk frames, including these, include leveling feet in the 0.5 to 1.5 inch range, which handles minor unevenness but not a genuinely sloped room. For a steeper slope, plan on adding shims under the base.",
  },
  {
    q: "Is the VIVO 42-inch converter a standing desk frame?",
    a: "No, it is a tabletop standing desk converter that sits on top of an existing desk, not a floor-standing frame. It includes a built-in dual monitor stand and needs no floor assembly, but it should not be compared directly to a fixed frame's desktop-size flexibility.",
  },
  {
    q: "Can I assemble a full-size desk from this guide alone?",
    a: "For most of these picks, yes, but expect it to go faster with two people, especially on wider desks over 48 inches like the Veken 55-inch or Huuger 55x28. Aligning a wide desktop while keeping it level is meaningfully easier with a second set of hands.",
  },
  {
    q: "Which pick has the deepest desktop for a monitor arm base?",
    a: "The Huuger 55x28 has a 27.6-inch deep desktop, the deepest in this guide, giving extra clearance for a monitor arm base or multiple accessories without crowding the front edge.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-standing-desks-with-built-in-power-outlets", title: "Best Standing Desks with Built-In Power Outlets (2026)" },
  { href: "/guide/best-standing-desks-under-1000", title: "Best Standing Desks Under $1,000 (2026)" },
  { href: "/guide/best-4-leg-standing-desks", title: "Best Standing Desk Frames for Small Home Offices (2026)" },
  { href: "/guide/best-dual-motor-standing-desks", title: "Best Dual-Motor Standing Desks (2026)" },
];
