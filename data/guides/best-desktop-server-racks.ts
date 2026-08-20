export const guideSlug = "best-desktop-server-racks";
export const guideTitle = "3 Best Desktop Server Racks in 2026";
export const metaTitle = "Best Desktop Server Racks 2026";
export const metaDescription = "We compared desktop server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "desktop server racks";
export const introParagraphs = [
  "Shopping for desktop server racks starts with checking desktop rack stability and footprint against a genuinely small workspace, not with trusting a single U-height number.",
  "The picks below were sorted by documented weight rating and mounting depth plus checking desktop rack stability and footprint against a genuinely small workspace, the details that actually decide real fit."
];
export const lastUpdated = "2026-08-20";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/31I-PLDWxWL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-desktop-server-racks-1",
    rank: 1,
    badge: "Best Overall",
    name: "NavePoint 6U 2 Post Server Rack, Freestanding Desktop",
    price: "$141.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31I-PLDWxWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09RC956BW?tag=deskfinds0d-20",
    description: "A compact desktop rack rather than a floor-standing model, this 6U 2-post design sits at just 14.1 inches tall, small enough to place directly on a desk or shelf.\n\nDespite the small size it's still rated for 330 lbs thanks to angled, rubber-footed construction that distributes weight effectively for its footprint.",
    specs: ["6U, 11.9\"W x 20.2\"D x 14.1\"H","330 lb weight capacity","Rubber footing for stability"],
    pros: ["330 lb rating is strong for such a compact desktop rack","Rubber footing adds stability on a desk or shelf","Open frame keeps cable management genuinely simple"],
    cons: ["6U ceiling limits it to a handful of small devices","Desktop size isn't meant for floor installation"],
    bestFor: "buyers prioritizing 6u, 11.9\"w x 20.2\"d x 14.1\"h",
  },
  {
    id: "best-desktop-server-racks-2",
    rank: 2,
    badge: "Runner-Up",
    name: "AxcessAbles 12U Network Rack with Wheels, 500lb Capacity, 18\" Depth",
    price: "$159.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/419zMFfxOhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07XWFTCT9?tag=deskfinds0d-20",
    description: "This open-frame 12U rack is built from 1.5mm steel and rated for a stated 550 lbs, which is plenty for a stack of switches, patch panels, and a small server.\n\nThree-inch locking casters come preinstalled, so you can roll it into place and lock it down without extra hardware shopping.\n\nBoth American 5mm and European 6mm screw standards are included in the box, which matters if you're mixing gear from different brands. There's no door here, just an open front and back for airflow and quick access.",
    specs: ["18\" usable depth, 1.5mm steel frame","550 lb rated capacity","3\" locking caster wheels included"],
    pros: ["Both 5mm and 6mm screw kits included in the box","Locking casters come preinstalled, ready to roll","Open front and back keeps servicing fast"],
    cons: ["No side panels or door for dust protection","Open frame means cables are visible from any angle"],
    bestFor: "buyers prioritizing 18\" usable depth, 1.5mm steel frame",
  },
  {
    id: "best-desktop-server-racks-3",
    rank: 3,
    badge: "Budget Pick",
    name: "Tecmojo 12U Open Frame Network Rack, Floor or Wall Mount",
    price: "$89.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/517WeovYvrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CSJR2RZB?tag=deskfinds0d-20",
    description: "Tecmojo's 12U open frame rack ships with two vented 1U shelves already in the box, which is a nice touch since most competitors sell shelves separately.\n\nIt's rated for 260 lbs floor-mounted but drops to 130 lbs if you wall-mount it instead, so plan your equipment load around which install method you're using.",
    specs: ["12U, cold rolled steel frame","260 lb floor / 130 lb wall capacity","2 vented 1U shelves included"],
    pros: ["Two vented shelves included instead of sold separately","Anti-slip shelf stops keep gear from sliding","Stackable design lets you expand later"],
    cons: ["Wall-mount capacity is half of floor-standing capacity","Open frame offers no dust or theft protection"],
    bestFor: "buyers prioritizing 12u, cold rolled steel frame",
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
    "subheading": "Confirm Footprint Fits the Desk or Shelf",
    "note": "Verify desktop server racks's footprint and height genuinely fit a desktop or shelf space, not just a small floor area."
  },
  {
    "subheading": "Check Stability at Full Load",
    "note": "Confirm rubber footing or a wide base keeps the rack stable once loaded, since desktop racks have less mass than floor-standing models."
  },
  {
    "subheading": "Verify Weight Rating Fits Real Devices",
    "note": "Check the documented weight rating against the actual switches, patch panels, or small servers planned for the setup."
  },
  {
    "subheading": "Confirm Open-Frame Cable Access",
    "note": "Verify open-frame access makes cable management workable at a desk-height install, not just from the floor."
  },
  {
    "subheading": "Check Noise for a Shared Desk Environment",
    "note": "Confirm equipment fan noise is acceptable for a desk-adjacent install, since desktop racks sit much closer to people than floor racks."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Confirm Footprint Fits the Desk or Shelf",
    "explanation": "Verify desktop server racks's footprint and height genuinely fit a desktop or shelf space, not just a small floor area."
  },
  {
    "criterion": "Check Stability at Full Load",
    "explanation": "Confirm rubber footing or a wide base keeps the rack stable once loaded, since desktop racks have less mass than floor-standing models."
  },
  {
    "criterion": "Verify Weight Rating Fits Real Devices",
    "explanation": "Check the documented weight rating against the actual switches, patch panels, or small servers planned for the setup."
  },
  {
    "criterion": "Confirm Open-Frame Cable Access",
    "explanation": "Verify open-frame access makes cable management workable at a desk-height install, not just from the floor."
  },
  {
    "criterion": "Check Noise for a Shared Desk Environment",
    "explanation": "Confirm equipment fan noise is acceptable for a desk-adjacent install, since desktop racks sit much closer to people than floor racks."
  }
];

export const faq = [
  {
    "q": "What's the biggest mistake buyers make shopping for desktop server racks?",
    "a": "Trusting U-height as the only fit measurement without checking mounting depth, rear clearance, and which weight rating (stationary, rolling, or wall) actually applies to their planned installation."
  },
  {
    "q": "Should I prioritize weight capacity or included accessories for desktop server racks?",
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
