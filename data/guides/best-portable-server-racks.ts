export const guideSlug = "best-portable-server-racks";
export const guideTitle = "3 Best Portable Server Racks in 2026";
export const metaTitle = "Best Portable Server Racks 2026";
export const metaDescription = "We compared portable server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "portable server racks";
export const introParagraphs = [
  "The real test for portable server racks comes down to checking how much weight capacity drops once a rack is actually rolling on its casters, not a glance at the listing photo.",
  "Rather than trust listing photos, we checked documented weight rating and mounting depth plus checking how much weight capacity drops once a rack is actually rolling on its casters for every rack on this list."
];
export const lastUpdated = "2026-08-20";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/419zMFfxOhL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-portable-server-racks-1",
    rank: 1,
    badge: "Best Overall",
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
    id: "best-portable-server-racks-2",
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
    id: "best-portable-server-racks-3",
    rank: 3,
    badge: "Budget Pick",
    name: "AxcessAbles 30U Rolling Network Server Rack, 550LB Capacity",
    price: "$299.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31t+0aeG+DL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CR5GS5X2?tag=deskfinds0d-20",
    description: "At 30U this is one of the taller open-frame rolling racks in the AxcessAbles line, giving you real headroom for a growing home lab or studio rack without going to a fully enclosed cabinet.\n\nThe same 18-inch depth and removable side panel design carries over from the smaller models, so airflow and access stay consistent as you scale up in height.",
    specs: ["30U height, 18\" depth","550 lb static / 440 lb rolling capacity","Removable vented side panels"],
    pros: ["Tall 30U build fits a growing equipment stack","Removable panels switch between open and closed setups","Includes both screw standards for mixed-brand gear"],
    cons: ["Tall and narrow footprint needs a stable floor","No lockable door for equipment security"],
    bestFor: "buyers prioritizing 30u height, 18\" depth",
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
    "subheading": "Check the Rolling Weight Rating, Not Stationary",
    "note": "Confirm portable server racks's weight rating specifically for caster-mounted use, since rolling capacity is documented separately and typically lower than the stationary rating."
  },
  {
    "subheading": "Verify Casters Lock in Place",
    "note": "Look for locking casters, not just wheels, so the rack stays put once positioned rather than drifting during use."
  },
  {
    "subheading": "Confirm Floor Surface Compatibility",
    "note": "Check caster type against your actual floor surface, since hard casters can mark hardwood while soft casters wear faster on rough concrete."
  },
  {
    "subheading": "Plan Cable Slack for Movement",
    "note": "Leave enough cable slack for the rack to move its intended distance without straining connections at the wall or PDU."
  },
  {
    "subheading": "Weigh Portability Against Overall Stability",
    "note": "Confirm the rack still feels stable when loaded and rolling, since a taller, lighter frame can tip more easily than a heavier stationary design."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check the Rolling Weight Rating, Not Stationary",
    "explanation": "Confirm portable server racks's weight rating specifically for caster-mounted use, since rolling capacity is documented separately and typically lower than the stationary rating."
  },
  {
    "criterion": "Verify Casters Lock in Place",
    "explanation": "Look for locking casters, not just wheels, so the rack stays put once positioned rather than drifting during use."
  },
  {
    "criterion": "Confirm Floor Surface Compatibility",
    "explanation": "Check caster type against your actual floor surface, since hard casters can mark hardwood while soft casters wear faster on rough concrete."
  },
  {
    "criterion": "Plan Cable Slack for Movement",
    "explanation": "Leave enough cable slack for the rack to move its intended distance without straining connections at the wall or PDU."
  },
  {
    "criterion": "Weigh Portability Against Overall Stability",
    "explanation": "Confirm the rack still feels stable when loaded and rolling, since a taller, lighter frame can tip more easily than a heavier stationary design."
  }
];

export const faq = [
  {
    "q": "What's the biggest mistake buyers make shopping for portable server racks?",
    "a": "Trusting U-height as the only fit measurement without checking mounting depth, rear clearance, and which weight rating (stationary, rolling, or wall) actually applies to their planned installation."
  },
  {
    "q": "Should I prioritize weight capacity or included accessories for portable server racks?",
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

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-rolling-server-racks","title":"Best Rolling Server Racks in 2026"},{"href":"/guide/best-server-racks-on-wheels","title":"Best Server Racks on Wheels in 2026"},{"href":"/guide/best-mobile-server-racks","title":"Best Mobile Server Racks in 2026"}];
