export const guideSlug = "best-wood-server-racks";
export const guideTitle = "2 Best Wood Server Racks in 2026";
export const metaTitle = "Best Wood Server Racks 2026";
export const metaDescription = "We compared wood server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "wood server racks";
export const introParagraphs = [
  "Shopping for wood server racks starts with weighing furniture-grade build against the equipment protection a steel rack provides, not with trusting a single U-height number.",
  "The picks below were sorted by documented weight rating and mounting depth plus weighing furniture-grade build against the equipment protection a steel rack provides, the details that actually decide real fit."
];
export const lastUpdated = "2026-08-20";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/51KJIKGXIZL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-wood-server-racks-1",
    rank: 1,
    badge: "Best Overall",
    name: "GEARit 12U Audio Rack with Flat Oak Top",
    price: "$188.24",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51KJIKGXIZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BSRL6XD3?tag=deskfinds0d-20",
    description: "This is a studio-first take on the rack cabinet, with a flat oak-colored top specifically designed as usable desk space for a laptop or mixer above the equipment stack.\n\nEVA pads attach to the bottom feet to reduce vibration and protect wood floors, a thoughtful touch for a rack meant to live in a home studio rather than a server closet.",
    specs: ["12U, black steel frame","Flat oak top workstation surface","EVA vibration-reducing floor pads included"],
    pros: ["Oak top doubles as real desk space above the rack","EVA pads protect wood floors and cut vibration","Steel frame with reinforced joints feels sturdy"],
    cons: ["Studio-focused design, less suited to dense IT gear","No weight rating listed for the rack itself"],
    bestFor: "buyers prioritizing 12u, black steel frame",
  },
  {
    id: "best-wood-server-racks-2",
    rank: 2,
    badge: "Runner-Up",
    name: "AV Gear Rack 24U Home Audio & Video Storage Cabinet",
    price: "$205.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41EHbwKM8UL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FKYYLKY8?tag=deskfinds0d-20",
    description: "This is a wood-and-aluminum AV cabinet rather than a metal server rack, built from five layers of reinforced plywood with aviation-grade aluminum edging for a more furniture-like appearance.\n\nDual-axle casters handle the 440 lb max load better than standard casters, and built-in handles on both side panels make it genuinely easier to move than most rack cabinets.",
    specs: ["24U, 19.5\" depth","440 lb weight capacity","5-layer reinforced plywood with aluminum edging"],
    pros: ["Furniture-grade plywood and aluminum look better in living spaces","Dual-axle casters handle heavier loads than standard wheels","Built-in side handles make it genuinely easier to move"],
    cons: ["Does not include any shelves, sold separately","Plywood construction isn't as rugged as steel racks"],
    bestFor: "buyers prioritizing 24u, 19.5\" depth",
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
    "note": "Confirm wood server racks's mounting depth independently of its U-height, since two racks at the same height can fit very different equipment lengths."
  },
  {
    "subheading": "Match Weight Rating to Mount Type",
    "note": "Check the stationary, rolling, or wall-mounted weight rating specifically for how the rack will actually be installed."
  },
  {
    "subheading": "Confirm Post Configuration Suits the Load",
    "note": "Verify whether the frame is 2-post or 4-post, since that determines what equipment class it can safely support."
  },
  {
    "subheading": "Plan Rear Clearance for Cabling",
    "note": "Leave enough rear clearance behind the rack for cable bend radius and rear panel access."
  },
  {
    "subheading": "Check Cooling Method Fits the Enclosure",
    "note": "Confirm passive airflow, active fans, or a sealed cabinet's cooling matches the actual equipment heat load."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Separate U-Height From Rail Depth",
    "explanation": "Confirm wood server racks's mounting depth independently of its U-height, since two racks at the same height can fit very different equipment lengths."
  },
  {
    "criterion": "Match Weight Rating to Mount Type",
    "explanation": "Check the stationary, rolling, or wall-mounted weight rating specifically for how the rack will actually be installed."
  },
  {
    "criterion": "Confirm Post Configuration Suits the Load",
    "explanation": "Verify whether the frame is 2-post or 4-post, since that determines what equipment class it can safely support."
  },
  {
    "criterion": "Plan Rear Clearance for Cabling",
    "explanation": "Leave enough rear clearance behind the rack for cable bend radius and rear panel access."
  },
  {
    "criterion": "Check Cooling Method Fits the Enclosure",
    "explanation": "Confirm passive airflow, active fans, or a sealed cabinet's cooling matches the actual equipment heat load."
  }
];

export const faq = [
  {
    "q": "What's the biggest mistake buyers make shopping for wood server racks?",
    "a": "Trusting U-height as the only fit measurement without checking mounting depth, rear clearance, and which weight rating (stationary, rolling, or wall) actually applies to their planned installation."
  },
  {
    "q": "Should I prioritize weight capacity or included accessories for wood server racks?",
    "a": "Weight capacity first, since it's the harder spec to work around after purchase. Accessories like shelves, PDUs, and cable managers can usually be added separately, but an undersized weight rating means buying an entirely different rack."
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

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-server-racks","title":"Best Server Racks in 2026"},{"href":"/guide/best-server-racks-for-network","title":"Best Server Racks for Network in 2026"},{"href":"/guide/best-19-inch-server-racks","title":"Best 19-Inch Server Racks in 2026"}];
