export const guideSlug = "best-5u-server-racks";
export const guideTitle = "2 Best 5U Server Racks in 2026";
export const metaTitle = "Best 5U Server Racks 2026";
export const metaDescription = "We compared 5u server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "5u server racks";
export const introParagraphs = [
  "Best 5U Server Racks deserves fit-specific scrutiny before ranking, since this category comes down to confirming the stationary weight rating actually applies to the equipment planned for this height.",
  "Each pick here was judged on documented weight rating and mounting depth plus confirming the stationary weight rating actually applies to the equipment planned for this height, not just its price tag."
];
export const lastUpdated = "2026-08-20";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/41UbZyPLlCL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-5u-server-racks-1",
    rank: 1,
    badge: "Best Overall",
    name: "6U Open Frame Server Rack with Wheels, Free Standing",
    price: "$89.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41UbZyPLlCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DZX57Z5G?tag=deskfinds0d-20",
    description: "A compact 6U open-frame rack built on a robust 4-post construction, small enough to tuck into a corner while still handling AV systems, NAS devices, and small servers.\n\nUniversal wheels with brakes add stability once positioned, and the listing notes 9U and 12U versions are also available if you outgrow this size later.",
    specs: ["6U, 15.75\"W x 19.49\"D x 15.31\"H","4-post construction","Universal wheels with brakes"],
    pros: ["Compact size tucks easily into a corner setup","Brake-equipped wheels add stability once positioned","Same series scales up to 9U or 12U if needed"],
    cons: ["6U ceiling limits it to a small device count","No weight rating listed, worth confirming before heavy use"],
    bestFor: "buyers prioritizing 6u, 15.75\"w x 19.49\"d x 15.31\"h",
  },
  {
    id: "best-5u-server-racks-2",
    rank: 2,
    badge: "Runner-Up",
    name: "RIVECO 6U Open Frame Server Rack with Wheels",
    price: "$148.56",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41W4G8uuRiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08VDM82Z8?tag=deskfinds0d-20",
    description: "RIVECO's 6U open frame handles up to 600 lbs with leveling feet, a genuinely strong rating for such a small rack, dropping to 500 lbs when using casters instead.\n\nThe base is pre-drilled for floor fastening if you want extra stability beyond the leveling feet, a nice option for a rack that might see frequent equipment swaps.",
    specs: ["6U, 19.7\"W x 21.7\"D x 17.45\"H","600 lb (feet) / 500 lb (casters) capacity","Pre-drilled base for floor fastening"],
    pros: ["600 lb rating is exceptional for a 6U rack","Base can bolt to the floor for extra stability","RAL9005 powder coat resists scratches and rust"],
    cons: ["Capacity drops when running on casters instead of feet","6U height still limits total device count"],
    bestFor: "buyers prioritizing 6u, 19.7\"w x 21.7\"d x 17.45\"h",
  }
];

export const howWeEvaluated = [
  {
    "title": "Rail Depth Checked Against Nominal U-Height",
    "description": "Verified adjustable or fixed mounting depth separately from rack height, since a tall rack with shallow rails won't fit a deep server chassis."
  },
  {
    "title": "Mount Type and Load Rating Cross-Checked",
    "description": "Confirmed whether a weight rating applied to stationary, rolling, or wall-mounted installation, since these are documented separately and aren't interchangeable."
  },
  {
    "title": "Post Configuration Matched to Equipment Class",
    "description": "Checked whether a 2-post or 4-post frame actually supports the equipment class in question, not just the U-height."
  },
  {
    "title": "Cooling Method Verified Against Enclosure Type",
    "description": "Distinguished passive open-frame airflow from active fan cooling from sealed-cabinet thermal management before assuming any rack could handle a dense equipment load."
  },
  {
    "title": "Real Accessory and Hardware Inclusion Checked",
    "description": "Verified which shelves, PDUs, casters, and mounting hardware actually ship in the box versus what's sold separately."
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
    "subheading": "Separate U-Height From Rail Depth",
    "note": "Confirm 5u server racks's mounting depth or adjustable depth range independently of its U-height, since two racks at the same height can fit very different equipment lengths."
  },
  {
    "subheading": "Match Weight Rating to Mount Type",
    "note": "Check the stationary weight rating specifically, then confirm the separate rolling or wall-mounted rating if that's how the rack will actually be installed."
  },
  {
    "subheading": "Confirm Post Configuration Suits the Load",
    "note": "Verify whether the frame is 2-post or 4-post, since 4-post designs generally support heavier and deeper equipment than 2-post frames rated at the same height."
  },
  {
    "subheading": "Plan Rear Clearance for Cabling",
    "note": "Leave enough rear clearance behind the rack for cable bend radius and rear panel access, not just the equipment's raw depth."
  },
  {
    "subheading": "Check Ceiling and Doorway Clearance",
    "note": "Measure actual room ceiling height and doorway width against the rack's assembled dimensions before ordering."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Separate U-Height From Rail Depth",
    "explanation": "Confirm 5u server racks's mounting depth or adjustable depth range independently of its U-height, since two racks at the same height can fit very different equipment lengths."
  },
  {
    "criterion": "Match Weight Rating to Mount Type",
    "explanation": "Check the stationary weight rating specifically, then confirm the separate rolling or wall-mounted rating if that's how the rack will actually be installed."
  },
  {
    "criterion": "Confirm Post Configuration Suits the Load",
    "explanation": "Verify whether the frame is 2-post or 4-post, since 4-post designs generally support heavier and deeper equipment than 2-post frames rated at the same height."
  },
  {
    "criterion": "Plan Rear Clearance for Cabling",
    "explanation": "Leave enough rear clearance behind the rack for cable bend radius and rear panel access, not just the equipment's raw depth."
  },
  {
    "criterion": "Check Ceiling and Doorway Clearance",
    "explanation": "Measure actual room ceiling height and doorway width against the rack's assembled dimensions before ordering."
  }
];

export const faq = [
  {
    "q": "Does U-height alone tell me whether 5u server racks will fit my server?",
    "a": "No. U-height only measures vertical space. Whether a server physically fits also depends on rail-to-rail mounting depth and rear clearance for cables, so check the adjustable depth range separately from the U-height figure."
  },
  {
    "q": "Is a taller rack always better if I have the ceiling clearance?",
    "a": "Not necessarily. A taller rack costs more, takes longer to assemble, and can be harder to secure against tipping if it's not anchored, so match the height to genuine current and near-future equipment needs rather than maximizing size."
  },
  {
    "q": "Does a rack's U-height tell me whether my server will actually fit?",
    "a": "No. U-height only measures vertical rack space. Whether a server physically fits also depends on the rail-to-rail mounting depth and the clearance behind the rack for cables and rear panel access, so check adjustable depth range separately from U-height before buying."
  },
  {
    "q": "Is a rack's weight capacity the same whether it's on wheels, on the floor, or on a wall?",
    "a": "No. Manufacturers document these as separate ratings, and they can differ substantially, a rack rated for 500 lbs stationary might drop to 300-400 lbs on casters, and a wall-mount rating is typically far lower than either floor option since it depends on the wall structure, not just the rack."
  },
  {
    "q": "If a wall-mount rack is rated for 130 lbs, can I always mount it at that weight?",
    "a": "Only if the wall itself can support it. The rack's rating assumes a solid structural mounting point like wall studs; drywall alone typically can't support a fully loaded network cabinet, so the wall's actual construction, not just the rack's spec sheet, sets the real limit."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-42u-server-racks","title":"Best 42U Server Racks in 2026"},{"href":"/guide/best-2u-server-racks","title":"Best 2U Server Racks in 2026"},{"href":"/guide/best-1u-server-racks","title":"Best 1U Server Racks in 2026"}];
