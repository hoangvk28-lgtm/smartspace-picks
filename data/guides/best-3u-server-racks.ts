export const guideSlug = "best-3u-server-racks";
export const guideTitle = "4 Best 3U Server Racks in 2026";
export const metaTitle = "Best 3U Server Racks 2026";
export const metaDescription = "We compared 3u server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "3u server racks";
export const introParagraphs = [
  "3u server racks vary enough that verifying adjustable depth range covers real server length rather than trusting the nominal size matters more than the price tag alone.",
  "Our ranking weighs documented weight rating and mounting depth plus verifying adjustable depth range covers real server length rather than trusting the nominal size ahead of marketing language."
];
export const lastUpdated = "2026-08-20";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/31RO8odb2RL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-3u-server-racks-1",
    rank: 1,
    badge: "Best Overall",
    name: "QiaoYoubang 3U Server Cabinet Case, Lockable Drawer",
    price: "$65.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31RO8odb2RL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DPZRT726?tag=deskfinds0d-20",
    description: "This is a locking storage drawer for a rack rather than an enclosure, giving 3U of secure space for accessories, tools, or sensitive small items inside a larger cabinet.\n\nIt arrives mostly assembled with just the side panels needing attachment, and cable holes at the rear with protective rubber rings let you route power through it if needed.",
    specs: ["3U, 19\"W x 12.69\"D x 5.2\"H","22 lb weight capacity","Lockable with included key"],
    pros: ["Lockable design secures small accessories inside the rack","Ships mostly assembled, just the sides need attaching","Rubber-ringed cable holes protect cords from damage"],
    cons: ["22 lb capacity limits it to lighter items only","Takes up 3U that could otherwise hold active equipment"],
    bestFor: "buyers prioritizing 3u, 19\"w x 12.69\"d x 5.2\"h",
  },
  {
    id: "best-3u-server-racks-2",
    rank: 2,
    badge: "Runner-Up",
    name: "AxcessAbles 22U Rolling IT Server Rack, 550LB Heavy Duty Open Frame",
    price: "$249.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/319Yhr7xGML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08WK1HZ6P?tag=deskfinds0d-20",
    description: "Step up to 22U and you get a rack tall enough for a real home lab stack while keeping the same open-frame airflow design as AxcessAbles' smaller models.\n\nRemovable vented side panels let you go fully open when you need maximum cooling, or buttoned up when you want a cleaner look. Weight capacity drops to 440 lbs with the wheels attached versus 550 lbs stationary, worth noting if you're maxing out the load.",
    specs: ["22U, 18\" deep, textured matte black steel","550 lb static / 440 lb rolling","Removable vented side panels"],
    pros: ["Side panels come off entirely for full open-frame airflow","Front locking casters roll smoothly on carpet","Compatible with both American and European screw standards"],
    cons: ["Capacity drops noticeably once wheels are installed","No front door, so gear stays fully exposed"],
    bestFor: "buyers prioritizing 22u, 18\" deep, textured matte black steel",
  },
  {
    id: "best-3u-server-racks-3",
    rank: 3,
    badge: "Also Great",
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
    id: "best-3u-server-racks-4",
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
    "note": "Confirm 3u server racks's mounting depth or adjustable depth range independently of its U-height, since two racks at the same height can fit very different equipment lengths."
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
    "explanation": "Confirm 3u server racks's mounting depth or adjustable depth range independently of its U-height, since two racks at the same height can fit very different equipment lengths."
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
    "q": "Does U-height alone tell me whether 3u server racks will fit my server?",
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
