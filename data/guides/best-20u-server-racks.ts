export const guideSlug = "best-20u-server-racks";
export const guideTitle = "5 Best 20U Server Racks in 2026";
export const metaTitle = "Best 20U Server Racks 2026";
export const metaDescription = "We compared 20u server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "20u server racks";
export const introParagraphs = [
  "20u server racks vary enough that verifying adjustable depth range covers real server length rather than trusting the nominal size matters more than the price tag alone.",
  "Our ranking weighs documented weight rating and mounting depth plus verifying adjustable depth range covers real server length rather than trusting the nominal size ahead of marketing language."
];
export const lastUpdated = "2026-08-20";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/41xxDN61aIL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-20u-server-racks-1",
    rank: 1,
    badge: "Best Overall",
    name: "VEVOR 20U Open Frame Server Rack, 23-40in Adjustable Depth",
    price: "$112.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41xxDN61aIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C64YY7G7?tag=deskfinds0d-20",
    description: "The mid-size option in VEVOR's open frame lineup, this 20U rack keeps the same complete accessory kit as their smaller 12U and 15U models, just scaled up.\n\nGround-mounted capacity here is 200 lbs, notably lower than the 12U VEVOR model's 500 lb rating, so it's better suited to lighter networking gear than a dense server stack.",
    specs: ["20U, 23-40\" adjustable depth","200 lb ground / 150 lb wall capacity","Grounding wire and full hardware kit included"],
    pros: ["Same complete hardware kit as VEVOR's smaller racks","Roller design makes repositioning simple","Top panel adds extra storage space"],
    cons: ["200 lb ground rating is notably lower than the 12U model","Not suited to a dense heavy server load"],
    bestFor: "buyers prioritizing 20u, 23-40\" adjustable depth",
  },
  {
    id: "best-20u-server-racks-2",
    rank: 2,
    badge: "Runner-Up",
    name: "NavePoint 22U Server Cabinet Wall Mount Rack Enclosure",
    price: "$469.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31EST+TjbpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01A6JQ5D0?tag=deskfinds0d-20",
    description: "This is a fully enclosed 22U cabinet rather than an open frame, with a locking tempered glass door and two built-in fans for equipment that needs to stay both secure and cool.\n\nThe reversible door design is a genuinely useful detail: an L-shaped spring pin lets you flip which side it swings from without buying new hardware, so it fits either side of a room.",
    specs: ["22U, 23.63\"L x 23.63\"W x 43\"H","130 lb weight capacity","Two built-in fans, lockable glass door"],
    pros: ["Door swing direction is reversible with one spring pin","Locking glass door protects gear while staying visible","Caster wheels included for easy repositioning"],
    cons: ["130 lb capacity is modest for a cabinet this size","Flat-pack assembly takes real time to build"],
    bestFor: "buyers prioritizing 22u, 23.63\"l x 23.63\"w x 43\"h",
  },
  {
    id: "best-20u-server-racks-3",
    rank: 3,
    badge: "Also Great",
    name: "StarTech 18U 4-Post Server Cabinet, 29in Deep, 992lb",
    price: "$731.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41na6wA05uL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B071KW95QQ?tag=deskfinds0d-20",
    description: "This enclosed 18U cabinet ships pre-assembled with casters and leveling feet already attached, and includes a full 10-foot roll of hook-and-loop fastener for cable management right in the box.\n\nAt just 38.5 inches tall it fits comfortably in narrow office or closet spaces, and StarTech backs it with a longer 5-year warranty than some of their other rack lines.",
    specs: ["18U, 38.5\" tall, 29in adjustable depth","992 lb stationary weight capacity","5-year warranty, 10ft hook-and-loop included"],
    pros: ["Ships fully assembled with casters already installed","10ft of hook-and-loop fastener included for cabling","Backed by a longer 5-year warranty"],
    cons: ["992 lb rating trails the heaviest-duty cabinets","38.5\" height still needs real floor clearance"],
    bestFor: "buyers prioritizing 18u, 38.5\" tall, 29in adjustable depth",
  },
  {
    id: "best-20u-server-racks-4",
    rank: 4,
    badge: "Budget Pick",
    name: "StarTech 42U 4-Post Open Frame Rack, 22-40in Adjustable Depth",
    price: "$357.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41NJF2Bh0lS._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00HVKOPBW?tag=deskfinds0d-20",
    description: "StarTech built this 42U frame for IT professionals, and it shows: EIA/ECA-310-E compliance, cage nut and screw hardware included, and a 2-year warranty with lifetime technical support backing it up.\n\nDepth adjusts from 22 to 40 inches to fit different server chassis lengths, and you get a choice of casters, leveling feet, or a floor base plate depending on whether the rack needs to move or stay put.",
    specs: ["42U, 22-40\" adjustable depth","1323 lb static weight capacity","EIA/ECA-310-E compliant, cage nuts included"],
    pros: ["Backed by a 2-year warranty with lifetime tech support","Three mounting options: casters, levelers, or floor plate","Cable management hooks built into the frame"],
    cons: ["80\" total height needs serious ceiling clearance","Flat-pack shipping still means a real assembly session"],
    bestFor: "buyers prioritizing 42u, 22-40\" adjustable depth",
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
    "note": "Confirm 20u server racks's mounting depth or adjustable depth range independently of its U-height, since two racks at the same height can fit very different equipment lengths."
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
    "explanation": "Confirm 20u server racks's mounting depth or adjustable depth range independently of its U-height, since two racks at the same height can fit very different equipment lengths."
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
    "q": "Does U-height alone tell me whether 20u server racks will fit my server?",
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
