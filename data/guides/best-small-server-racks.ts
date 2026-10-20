export const guideSlug = "best-small-server-racks";
export const guideTitle = "8 Best Small Server Racks in 2026";
export const metaTitle = "Best Small Server Racks 2026";
export const metaDescription = "We compared small server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "small server racks";
export const introParagraphs = [
  "Best Small Server Racks deserves fit-specific scrutiny before ranking, since this category comes down to matching rail depth and post configuration to the U-height, not just counting rack units.",
  "Each pick here was judged on documented weight rating and mounting depth plus matching rail depth and post configuration to the U-height, not just counting rack units, not just its price tag."
];
export const lastUpdated = "2026-08-20";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41OpFCnPrmL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-small-server-racks-1",
    rank: 1,
    badge: "Best Overall",
    name: "Tecmojo 4U Mini Server Rack, 10 inch, Translucent Panels",
    price: "$59.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41OpFCnPrmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FM7SWXWP?tag=deskfinds0d-20",
    description: "This 10-inch mini rack is built for the smaller Raspberry-Pi-cluster and mini-ITX crowd rather than standard 19-inch servers, with just 4U of height and translucent acrylic side panels.\n\nThe open-frame structure with translucent sides lets you see status LEDs at a glance while keeping some dust protection, a nice middle ground for a desk-side setup.",
    specs: ["4U, 10\" width, 7.87\" deep","Steel frame, acrylic translucent panels","1 blank panel and 1 shelf included"],
    pros: ["Translucent panels let you see status LEDs at a glance","Compact 10\" width fits desks and small shelves","Steel and acrylic build feels sturdy for the size"],
    cons: ["Only fits 10-inch equipment, not standard 19-inch gear","4U ceiling limits it to a very small stack"],
    bestFor: "buyers prioritizing 4u, 10\" width, 7.87\" deep",
  },
  {
    id: "best-small-server-racks-2",
    rank: 2,
    badge: "Runner-Up",
    name: "Tecmojo 6U Mini Server Rack, 10 inch, Black",
    price: "$69.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41yfcqiY+nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GDPW11KS?tag=deskfinds0d-20",
    description: "The black 6U version of Tecmojo's mini rack line, giving slightly more room than the 4U model while keeping the same compact 10-inch width for desk-side use.\n\nEverything else carries over from the 4U model: acrylic translucent side panels, top handles for easy carrying, and a full accessory kit for mounting 10-inch equipment.\n\nWhat stands out here is 6U gives more room than the smaller 4U version, plus top handles make it easy to move around. The main tradeoff: still limited to 10-inch equipment only, so weigh that against the $69.90 price before buying.",
    specs: ["6U, 10\" width, 7.87\" deep","Steel frame, acrylic side panels","Top carrying handles included"],
    pros: ["6U gives more room than the smaller 4U version","Top handles make it easy to move around","Matches the same accessory kit as other sizes"],
    cons: ["Still limited to 10-inch equipment only","Not deep enough for full server hardware"],
    bestFor: "buyers prioritizing 6u, 10\" width, 7.87\" deep",
  },
  {
    id: "best-small-server-racks-3",
    rank: 3,
    badge: "Also Great",
    name: "GeeekPi 8U Network Rack, 10 inch, DeskPi RackMate T1",
    price: "$119.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31iRiz4rmgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FBFDZD4C?tag=deskfinds0d-20",
    description: "The DeskPi RackMate T1 is a well-known name in the home lab and Raspberry Pi cluster community, built from aluminum alloy and acrylic for an 8U, 10-inch mini rack.\n\nIts translucent acrylic sides are explicitly designed for adding ambient lighting, leaning into the hobbyist aesthetic that's made this line popular for visible desk setups.\n\nThe strongest case for this pick comes down to well-known DeskPi design popular in the home lab community as well as translucent sides support ambient lighting add-ons. The compromise here is that flat-pack assembly required out of the box, so factor that in alongside the $119.99 asking price.",
    specs: ["8U, 10\" width, 7.87\" depth","Aluminum alloy and acrylic construction","Flat-packed with full mounting hardware"],
    pros: ["Well-known DeskPi design popular in the home lab community","Translucent sides support ambient lighting add-ons","Open design makes install and maintenance easy"],
    cons: ["Flat-pack assembly required out of the box","10-inch format won't fit standard rack gear"],
    bestFor: "buyers prioritizing 8u, 10\" width, 7.87\" depth",
  },
  {
    id: "best-small-server-racks-4",
    rank: 4,
    badge: "Strong Alternative",
    name: "GeeekPi 12U Network Rack, 10 inch, DeskPi RackMate T2",
    price: "$149.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/418C1ZRpOGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT2XM22G?tag=deskfinds0d-20",
    description: "The taller sibling to the RackMate T1, this 12U version gives more vertical room for a bigger cluster while keeping the same aluminum-and-acrylic build the line is known for.\n\nAt 10.23 inches deep it's slightly roomier front-to-back than the 8U model too, giving a bit more clearance behind mounted boards and cabling.\n\nWhere this one earns its spot is 12U height fits a larger Pi or SBC cluster, and extra depth over the 8U model eases cable routing. Worth noting before buying: bigger footprint than the compact 8U model, which matters more at $149.99 than it would on a cheaper pick.",
    specs: ["12U, 10\" width, 10.23\" depth","Aluminum alloy and acrylic frame","Open design for airflow and access"],
    pros: ["12U height fits a larger Pi or SBC cluster","Extra depth over the 8U model eases cable routing","Open frame keeps single-board computers cool"],
    cons: ["Bigger footprint than the compact 8U model","Only suited to 10-inch mini equipment"],
    bestFor: "buyers prioritizing 12u, 10\" width, 10.23\" depth",
  },
  {
    id: "best-small-server-racks-5",
    rank: 5,
    badge: "Worth Considering",
    name: "VEVOR 6U Wall Mount Network Server Cabinet, 14.8in Deep",
    price: "$89.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31iOnAzRWJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CP1QJC1S?tag=deskfinds0d-20",
    description: "A locking 6U wall cabinet built with heat-sink venting on the top, bottom, and rear panels specifically to fight heat buildup in a small enclosed space.\n\nGround-mounted capacity doubles the wall-mounted rating at 200 lbs versus 100 lbs, so if the equipment is heavier, setting it on the floor rather than the wall stretches its usable capacity.\n\nThis pick is best for buyers who value heat-sink venting on three panels fights overheating along with ground-mounting doubles the usable weight capacity. The catch is that 100 lb wall rating is on the low side, so decide if that's worth it at $89.99.",
    specs: ["6U, 14.8\" max depth","200 lb ground / 100 lb wall capacity","Locking glass door"],
    pros: ["Heat-sink venting on three panels fights overheating","Ground-mounting doubles the usable weight capacity","Adjustable square-hole rails fit varied equipment"],
    cons: ["100 lb wall rating is on the low side","Cabling holes require some planning ahead"],
    bestFor: "buyers prioritizing 6u, 14.8\" max depth",
  },
  {
    id: "best-small-server-racks-6",
    rank: 6,
    badge: "Solid Option",
    name: "Tecmojo 12U Open Frame Network Rack, Floor or Wall Mount",
    price: "$89.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/517WeovYvrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CSJR2RZB?tag=deskfinds0d-20",
    description: "Tecmojo's 12U open frame rack ships with two vented 1U shelves already in the box, which is a nice touch since most competitors sell shelves separately.\n\nIt's rated for 260 lbs floor-mounted but drops to 130 lbs if you wall-mount it instead, so plan your equipment load around which install method you're using.\n\nWhat stands out here is two vented shelves included instead of sold separately, plus anti-slip shelf stops keep gear from sliding. The main tradeoff: wall-mount capacity is half of floor-standing capacity, so weigh that against the $89.90 price before buying.",
    specs: ["12U, cold rolled steel frame","260 lb floor / 130 lb wall capacity","2 vented 1U shelves included"],
    pros: ["Two vented shelves included instead of sold separately","Anti-slip shelf stops keep gear from sliding","Stackable design lets you expand later"],
    cons: ["Wall-mount capacity is half of floor-standing capacity","Open frame offers no dust or theft protection"],
    bestFor: "buyers prioritizing 12u, cold rolled steel frame",
  },
  {
    id: "best-small-server-racks-7",
    rank: 7,
    badge: "Another Pick",
    name: "AxcessAbles 16U AV Case with Wheels, Metal Studio Cabinet",
    price: "$194.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/3172xcdFNxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07XWL296H?tag=deskfinds0d-20",
    description: "This 16U case splits the difference between a fully open frame and an enclosed cabinet, with optional side panels you can install only if you don't need the extra airflow of an open design.\n\nIt's aimed squarely at studio and DJ setups as much as server gear, with removable 3-inch casters that add weight capacity flexibility once removed.\n\nThe strongest case for this pick comes down to side panels are optional, letting you choose open or closed as well as removing casters bumps capacity for heavier gear. The compromise here is that side panels don't bear weight if you rely on them, so factor that in alongside the $194.99 asking price.",
    specs: ["16U, 18\" depth, 34.5\" assembled height","550 lb static / 440 lb rolling","Optional non-weight-bearing side panels"],
    pros: ["Side panels are optional, letting you choose open or closed","Removing casters bumps capacity for heavier gear","Works well for AV and studio rack duty, not just servers"],
    cons: ["Side panels don't bear weight if you rely on them","Assembly required before it's ready to load"],
    bestFor: "buyers prioritizing 16u, 18\" depth, 34.5\" assembled height",
  },
  {
    id: "best-small-server-racks-8",
    rank: 8,
    badge: "Budget Pick",
    name: "Garvee 10U Open Frame Server Rack, 23-40in Adjustable Depth",
    price: "$79.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41-o6KDZaYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0HBQY15T3?tag=deskfinds0d-20",
    description: "Garvee's open frame rack supports both wall and ground mounting, with capacity scaling from 200 lbs on the wall up to 500 lbs on the ground depending on how you install it.\n\nThe accessory list is genuinely thorough here, down to a grounding wire and multiple wrench sizes, so you're less likely to need a hardware store run mid-assembly.\n\nWhere this one earns its spot is 500 lb ground rating handles a real equipment load, and comes with a genuinely complete hardware kit. Worth noting before buying: wall capacity is well below the ground-mounted rating, which matters more at $79.99 than it would on a cheaper pick.",
    specs: ["10U, 23-40\" adjustable depth","500 lb ground / 200 lb wall capacity","4 lockable casters, grounding wire included"],
    pros: ["500 lb ground rating handles a real equipment load","Comes with a genuinely complete hardware kit","Detachable top panel adds extra storage space"],
    cons: ["Wall capacity is well below the ground-mounted rating","Open frame gives no dust or theft protection"],
    bestFor: "buyers prioritizing 10u, 23-40\" adjustable depth",
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
    "note": "Confirm small server racks's mounting depth independently of its U-height, since two racks at the same height can fit very different equipment lengths."
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
,
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $59.90",
          "Tecmojo 4U Mini Server Rack"
        ],
        [
          "Around $69.90",
          "Tecmojo 6U Mini Server Rack"
        ],
        [
          "Around $79.99",
          "Garvee 10U Open Frame Server Rack"
        ],
        [
          "Around $89.90",
          "Tecmojo 12U Open Frame Network Rack"
        ],
        [
          "Around $89.99",
          "VEVOR 6U Wall Mount Network Server Cabinet"
        ],
        [
          "Around $119.99",
          "GeeekPi 8U Network Rack"
        ],
        [
          "Around $149.99",
          "GeeekPi 12U Network Rack"
        ],
        [
          "Around $194.99",
          "AxcessAbles 16U AV Case with Wheels"
        ]
      ]
    }
  },
];

export const buyingCriteria = [
  {
    "criterion": "Separate U-Height From Rail Depth",
    "explanation": "Confirm small server racks's mounting depth independently of its U-height, since two racks at the same height can fit very different equipment lengths. This matters in practice because the picks in this comparison span from about $60 to $195, and skipping a real check on separate u-height from rail is exactly how buyers end up overpaying for a feature they didn't need or underbuying and missing a dealbreaker only discovered after delivery. Check the listing's bullet points and technical specification table directly for the precise wording or figure on separate u-height from rail, since a generic product photo or title alone won't confirm it."
  },
  {
    "criterion": "Match Weight Rating to Mount Type",
    "explanation": "For a small server racks, check the stationary weight rating against your realistic equipment total first, then confirm the separate rolling or wall-mounted rating if that's how it will actually be installed. Manufacturers often publish only one of these two figures prominently. Look specifically for both numbers listed, not just a single generic \"capacity\" figure."
  },
  {
    "criterion": "Confirm Post Configuration Suits the Load",
    "explanation": "A small server racks can ship as either a 2-post or 4-post frame, and that distinction affects both load capacity and equipment depth it can actually support. Verify this directly in the listing's specifications. Don't assume post configuration from the category name or thumbnail photo alone."
  },
  {
    "criterion": "Plan Rear Clearance for Cabling",
    "explanation": "Behind a small server racks, budget extra depth beyond the equipment's own measurement for cable bend radius and the room to actually reach the back panel later. Skipping this is fine until the first time a cable needs re-seating in a space too tight to work in. Look for a stated rear clearance figure in the listing rather than guessing from enclosure depth alone."
  },
  {
    "criterion": "Check Cooling Method Fits the Enclosure",
    "explanation": "Confirm passive airflow, active fans, or a sealed cabinet's cooling matches the actual equipment heat load. Products at the low end near $60 and the high end near $195 of this comparison don't always handle cooling method fits enclosure the way you'd expect from price alone, which is exactly why it deserves a direct check instead of an assumption. Search the listing's Q&A and recent reviews for real mentions of cooling method fits enclosure, since that's often where the honest, unfiltered answer actually shows up."
  }
];

export const faq = [
  {
    "q": "What's the biggest mistake buyers make shopping for small server racks?",
    "a": "Trusting U-height as the only fit measurement without checking mounting depth, rear clearance, and which weight rating (stationary, rolling, or wall) actually applies to their planned installation."
  },
  {
    "q": "Should I prioritize weight capacity or included accessories for small server racks?",
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
,
  { "q": "Out of everything compared here, which one should most buyers pick?", a: "Tecmojo 4U Mini Server Rack is aimed at buyers prioritizing 4u, 10\" width, 7.87\" deep." },
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-server-racks","title":"Best Server Racks in 2026"},{"href":"/guide/best-19-inch-server-racks","title":"Best 19-Inch Server Racks in 2026"},{"href":"/guide/best-server-racks-for-network","title":"Best Server Racks for Network in 2026"}];
