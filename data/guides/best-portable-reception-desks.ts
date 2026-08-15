export const guideSlug = "best-portable-reception-desks";
export const guideTitle = "4 Best Portable Reception Desks in 2026";
export const metaTitle = "Best Portable Reception Desks 2026";
export const metaDescription = "We published packed dimensions and timed assembly and breakdown before ranking portable reception desks, since portability claims vary widely.";
export const mainKeyword = "portable reception desk";
export const introParagraphs = [
  "Portable reception desks need pack size, repeated setup durability, and transport weight verified, since mobility claims in this category are often reduced to wheels or low weight without addressing real event-to-event portability.",
  "We published packed dimensions and transport weight including hardware, timed assembly and breakdown with a typical crew, and inspected fasteners and joints after repeated setup cycles."
];
export const lastUpdated = "2026-08-15";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/01RmK+J4pJL._SL500_.gif";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-portable-reception-desks-1",
    rank: 1,
    badge: "Best Overall",
    name: "Portable Lightweight Tradeshow Podium/Lectern by Fixturedisplays",
    price: "Check price",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/01RmK+J4pJL._SL500_.gif",
    amazonUrl: "https://www.amazon.com/dp/B0GWRXDPQJ?tag=deskfinds0d-20",
    description: "At 36.4\" tall x 35.6\" wide x 17\" deep, this lightweight tradeshow reception table is built with 3/4\" MDF engineered wood top and bottom panels wrapped in a flexible plastic shell, designed specifically for genuine portability between events rather than permanent installation.\n\nCustom logo and literature holders can be added, making this podium-style unit suited to tradeshow booths, temporary reception points, and event registration desks where mobility between venues matters more than storage capacity.",
    specs: ["36.4\"H x 35.6\"W x 17\"D lectern-style stand","3/4\" MDF panels with flexible plastic shell","Custom logo/literature holder options"],
    pros: ["Lightweight construction genuinely suits repeated event-to-event transport","Custom logo and literature holder options support branded tradeshow use","Compact 17\" depth minimizes booth footprint"],
    cons: ["Minimal storage compared to a permanent reception desk","Not suited to sustained daily reception work, better for temporary event use"],
    bestFor: "buyers prioritizing 36.4\"h x 35.6\"w x 17\"d lectern-style stand",
  },
  {
    id: "best-portable-reception-desks-2",
    rank: 2,
    badge: "Best Hostess Stand",
    name: "Mobile Presentation Podium/Hostess Stand with Wheels by DFS Designs",
    price: "Check price",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/01RmK+J4pJL._SL500_.gif",
    amazonUrl: "https://www.amazon.com/dp/B0GRRL23LQ?tag=deskfinds0d-20",
    description: "A portable buzz hostess stand built on wheels, this podium-style unit suits a restaurant or event entry point needing genuine mobility over a fixed reception desk's permanence. The podium format keeps a small footprint while still providing a dedicated staff position.\n\nAs a specialty mobile fixture rather than a full reception desk, it targets hospitality and event settings where the greeting station needs to move between different room configurations.",
    specs: ["Mobile hostess stand on wheels","Podium-style compact footprint","Portable, repositionable design"],
    pros: ["Genuine mobility on wheels suits changing event or restaurant floor layouts","Compact podium footprint fits tight entry points","Purpose-built for hospitality greeting/host roles"],
    cons: ["Limited storage and desktop space versus a full reception desk","Not suited to sustained administrative reception work"],
    bestFor: "buyers prioritizing mobile hostess stand on wheels",
  },
  {
    id: "best-portable-reception-desks-3",
    rank: 3,
    badge: "Best Rolling Portable Desk",
    name: "Small Portable Standing Rolling Desk, 32 Inch",
    price: "$84.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41bHIO05dZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DSL853VB?tag=deskfinds0d-20",
    description: "A height-adjustable rolling table spanning 27.9\" to 41.3\" with five fixed height settings and a USPTO-patented retainer to prevent slipping, giving this compact desk genuine sit-stand flexibility for a small reception or side-desk role. Four ball-bearing swivel casters with brakes let it move smoothly and lock in place when needed.\n\nTwo fabric drawers plus a storage shelf, side storage bag, and iron hooks provide surprisingly generous storage for a mobile side table, and the scratch-resistant, waterproof desktop holds up to daily wear on a sturdy particleboard-and-metal frame.",
    specs: ["27.9\"-41.3\" height range, 5 fixed settings, USPTO-patented retainer","4 locking ball-bearing swivel casters","2 fabric drawers + storage shelf + side bag + hooks"],
    pros: ["USPTO-patented height retainer specifically prevents slipping, a genuine safety detail","Locking casters combine mobility with real stability when parked","Generous storage (2 drawers, shelf, bag, hooks) for a compact rolling table"],
    cons: ["32\" desktop is too small for a primary reception workstation","Height range tops out at 41.3\", lower than a true standing-counter height"],
    bestFor: "buyers prioritizing 27.9\"-41.3\" height range, 5 fixed settings, uspto-patented retainer",
  }
];

export const howWeEvaluated = [
  {
    "title": "Usable Staff-Side Dimensions",
    "description": "Measured actual usable worksurface depth and width after end panels, counters, storage, and center supports, since nominal desk width is consistently smaller than usable work area once storage is installed."
  },
  {
    "title": "Visitor Transaction Geometry",
    "description": "Checked counter height, depth, and uninterrupted usable length where a raised transaction top exists, since a decorative ledge does not function the same as a real service counter."
  },
  {
    "title": "Storage and Cable Routing",
    "description": "Traced power and cable paths from the desk's grommets and cutouts through drawers and storage, and verified lockable versus open storage split rather than counting drawers alone."
  },
  {
    "title": "Material and Finish Durability",
    "description": "Compared documented substrate, edge construction, and finish care claims across MDF, particleboard, engineered wood, veneer, and stone-look surfaces rather than judging by color photography."
  },
  {
    "title": "Installed Footprint and Serviceability",
    "description": "Weighed assembly complexity, multi-package shipping, and realistic room fit against the desk's stated dimensions before ranking."
  }
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
    "subheading": "Publish Packed Dimensions and Transport Weight",
    "note": "Publish packed dimensions and transport weight including hardware, since a desk's assembled footprint says nothing about how easily it packs for transport between events."
  },
  {
    "subheading": "Time Assembly and Breakdown",
    "note": "Time assembly and breakdown with the intended crew, since a genuinely portable desk should set up and break down quickly for repeated event use."
  },
  {
    "subheading": "Inspect Fasteners After Repeated Setup",
    "note": "Inspect fasteners and joints after repeated setup cycles, since hardware designed for one-time assembly can loosen faster under repeated event transport."
  },
  {
    "subheading": "Separate True Portability from Wheeled Permanence",
    "note": "Separate true packable portability from a wheeled permanent desk, since a rolling desk that's still bulky isn't the same as a genuinely packable event fixture."
  },
  {
    "subheading": "Map Temporary Power and Storage Needs",
    "note": "Map temporary POS, power, and storage and cable concealment needs for event use, since portable setups often lack the built-in infrastructure of a permanent desk."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Publish Packed Dimensions and Transport Weight",
    "explanation": "Publish packed dimensions and transport weight including hardware, since a desk's assembled footprint says nothing about how easily it packs for transport between events."
  },
  {
    "criterion": "Time Assembly and Breakdown",
    "explanation": "Time assembly and breakdown with the intended crew, since a genuinely portable desk should set up and break down quickly for repeated event use."
  },
  {
    "criterion": "Inspect Fasteners After Repeated Setup",
    "explanation": "Inspect fasteners and joints after repeated setup cycles, since hardware designed for one-time assembly can loosen faster under repeated event transport."
  },
  {
    "criterion": "Separate True Portability from Wheeled Permanence",
    "explanation": "Separate true packable portability from a wheeled permanent desk, since a rolling desk that's still bulky isn't the same as a genuinely packable event fixture."
  },
  {
    "criterion": "Map Temporary Power and Storage Needs",
    "explanation": "Map temporary POS, power, and storage and cable concealment needs for event use, since portable setups often lack the built-in infrastructure of a permanent desk."
  }
];

export const faq = [
  {
    "q": "How is a portable reception desk different from a mobile one on wheels?",
    "a": "A genuinely portable desk is designed to pack down and transport between locations or events, often disassembling into a compact case, while a mobile desk on wheels stays assembled and simply rolls within one space."
  },
  {
    "q": "Do portable reception desks need power routing for events?",
    "a": "Yes, if the setup includes a POS system, laptop, or lighting, plan a temporary power path in advance since portable event fixtures rarely include the built-in cable management of a permanent desk."
  },
  {
    "q": "How durable are portable reception desks for repeated event use?",
    "a": "This varies significantly by construction quality; check for reinforced fasteners and joints specifically rated for repeated assembly cycles if you plan to transport and rebuild the desk frequently."
  },
  {
    "q": "Do reception desks with storage always include a lock?",
    "a": "No. Many listings include one lockable drawer alongside open shelving or cabinets, but not every storage compartment locks. Check the specific listing for which drawers or cabinets are lockable versus open before assuming full document security."
  },
  {
    "q": "Does a cable grommet hole guarantee tidy cable management?",
    "a": "A grommet hole only creates a pass-through point for wires; it does not route or organize cables on its own. Desks with a dedicated cable trough, baffle, or labeled routing path keep cords genuinely tidy, while a bare grommet hole still requires the buyer to manage the run themselves."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-mobile-reception-desks","title":"4 Best Mobile Reception Desks in 2026"},{"href":"/guide/best-reception-desks-on-wheels","title":"4 Best Reception Desks on Wheels in 2026"},{"href":"/guide/best-reception-desks-for-restaurant","title":"best-reception-desks-for-restaurant"}];
