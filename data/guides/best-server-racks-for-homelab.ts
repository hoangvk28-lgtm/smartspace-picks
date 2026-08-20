export const guideSlug = "best-server-racks-for-homelab";
export const guideTitle = "7 Best Server Racks for Homelab in 2026";
export const metaTitle = "Best Server Racks for Homelab 2026";
export const metaDescription = "We compared server racks for homelab by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "server racks for homelab";
export const introParagraphs = [
  "Before ranking any pick for server racks for homelab, the real work is planning noise, heat, and branch circuit load like a real home installation, not a data center.",
  "Documented weight rating and mounting depth plus planning noise, heat, and branch circuit load like a real home installation, not a data center decided this ranking far more than star counts did."
];
export const lastUpdated = "2026-08-20";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/414ccUbvxjL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-server-racks-for-homelab-1",
    rank: 1,
    badge: "Best Overall",
    name: "AxcessAbles 8U Homelab Server Rack, 550-LB Capacity",
    price: "$149.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/414ccUbvxjL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08XX7WL68?tag=deskfinds0d-20",
    description: "The smallest rolling rack in the AxcessAbles lineup, this 8U model is explicitly marketed for home lab use, giving just enough room for a handful of essential devices.\n\nIt shares the same removable side panels and locking 3-inch casters as the larger models, just scaled down to a more compact 20.5-inch assembled height.",
    specs: ["8U, 18\" deep, 20.5\" assembled height","550 lb static / 330 lb rolling","Removable vented side panels"],
    pros: ["Compact 8U size fits genuinely small home lab needs","Same locking casters as AxcessAbles' larger racks","Wheels ship pre-assembled to save setup time"],
    cons: ["8U ceiling fits only a few devices","Rolling capacity drops well below stationary rating"],
    bestFor: "buyers prioritizing 8u, 18\" deep, 20.5\" assembled height",
  },
  {
    id: "best-server-racks-for-homelab-2",
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
    id: "best-server-racks-for-homelab-3",
    rank: 3,
    badge: "Also Great",
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
  },
  {
    id: "best-server-racks-for-homelab-4",
    rank: 4,
    badge: "Strong Alternative",
    name: "NavePoint 12U 4 Post Server Rack, 1322lbs Capacity",
    price: "$301.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41kGNsnUnQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B084T9NQF2?tag=deskfinds0d-20",
    description: "A shorter 12U 4-post rack that still carries an impressively high 1322 lb weight rating thanks to the extra structural support of the 4-post design.\n\nCasters make it easy to preposition before locking it into place, and flat-pack delivery with cable hooks keeps setup straightforward despite the high load rating.",
    specs: ["12U, 26.7\"L x 20.67\"W, adjustable 22-40\"H","1322 lb weight capacity","Casters and cable hooks included"],
    pros: ["1322 lb rating is exceptional for a 12U rack","4-post frame improves stability over 2-post designs","Cable hooks keep a short rack's wiring tidy"],
    cons: ["Flat-pack assembly still takes real setup time","Height adjustment range may exceed what a 12U job needs"],
    bestFor: "buyers prioritizing 12u, 26.7\"l x 20.67\"w, adjustable 22-40\"h",
  },
  {
    id: "best-server-racks-for-homelab-5",
    rank: 5,
    badge: "Worth Considering",
    name: "StarTech.com 12U Adjustable Depth Open Frame 4 Post Server Rack",
    price: "$249.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41pK7n3UtDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00P1RJ9LS?tag=deskfinds0d-20",
    description: "A compact 12U 4-post rack from StarTech, standing just 25 inches tall, purpose-built for utility closets and narrow spaces where a full-size server rack won't fit.\n\nIt still carries the full StarTech feature set: EIA/ECA-310-E compliance, cage nuts, cable hooks, and the same 2-year warranty backing the larger racks in their lineup.",
    specs: ["12U, 25\" tall, 22-40\" adjustable depth","1200 lb stationary weight capacity","Backed by 2-year warranty and lifetime support"],
    pros: ["Only 25\" tall, fits narrow utility closets easily","1200 lb rating despite the compact size","Same warranty and support as StarTech's larger racks"],
    cons: ["Small size limits it to a handful of devices","Still needs flat-pack assembly on delivery"],
    bestFor: "buyers prioritizing 12u, 25\" tall, 22-40\" adjustable depth",
  },
  {
    id: "best-server-racks-for-homelab-6",
    rank: 6,
    badge: "Solid Option",
    name: "VEVOR 12U Open Frame Server Rack, 23-40in Adjustable Depth",
    price: "$89.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41KuU2tlXhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C64X8J8R?tag=deskfinds0d-20",
    description: "VEVOR's 12U open frame rack supports 500 lbs ground-mounted, dropping to 150 lbs if wall-mounted, and comes with a genuinely complete hardware kit down to a grounding wire.\n\nThe adjustable 23-40 inch depth range and roller casters mean it can flex to fit different equipment and rooms without buying a different SKU for each configuration.",
    specs: ["12U, 23-40\" adjustable depth","500 lb ground / 150 lb wall capacity","Casters and grounding wire included"],
    pros: ["500 lb ground-mounted rating handles heavier gear","Grounding wire included, a detail many racks skip","Top panel adds extra storage space"],
    cons: ["Wall-mount capacity drops sharply to 150 lbs","Open frame leaves cables and gear exposed"],
    bestFor: "buyers prioritizing 12u, 23-40\" adjustable depth",
  },
  {
    id: "best-server-racks-for-homelab-7",
    rank: 7,
    badge: "Budget Pick",
    name: "42U Home Server Rack Cabinet, 35in Deep Homelab Rack",
    price: "$1,185.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41xTLkXQqlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CMPFK79Q?tag=deskfinds0d-20",
    description: "A near-identical sibling to the earlier 39-inch-deep home lab cabinet but with a slightly shallower 35-inch depth, useful if your room has a bit less clearance to work with.\n\nThe feature set carries over directly: 1600 lb static rating, locking glass door, integrated cooling fans, and an included PDU and shelf for a ready-to-deploy home lab setup.",
    specs: ["42U, 35\" deep, 1600 lb static rating","Integrated cooling fans and ventilation","PDU, shelf, casters, and leveling feet included"],
    pros: ["Slightly shallower 35\" depth fits tighter rooms","1600 lb rating matches full commercial-grade cabinets","Comes ready to deploy with PDU and shelf"],
    cons: ["Still a large cabinet needing dedicated floor space","Glass door requires regular dusting to stay clear"],
    bestFor: "buyers prioritizing 42u, 35\" deep, 1600 lb static rating",
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
    "subheading": "Plan Around Home Circuit Capacity",
    "note": "Confirm server racks for homelab won't push the total connected load past your home's branch circuit rating, since a PDU distributes outlets but not extra circuit capacity."
  },
  {
    "subheading": "Weigh Noise for a Shared Living Space",
    "note": "Check documented noise levels specifically, since a rack living near living or working space needs to be judged on more than raw performance."
  },
  {
    "subheading": "Verify Room Ventilation, Not Just Rack Fans",
    "note": "Recognize that rack fans alone can't cool a sealed closet or small room, so plan actual room ventilation for a dense equipment load."
  },
  {
    "subheading": "Confirm Floor Load if Installing Upstairs",
    "note": "Check the combined weight of a loaded rack against floor load capacity if installing above ground level."
  },
  {
    "subheading": "Plan for Future Expansion Space",
    "note": "Leave some spare U-height and depth room for equipment additions rather than filling a rack to its exact current needs."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Plan Around Home Circuit Capacity",
    "explanation": "Confirm server racks for homelab won't push the total connected load past your home's branch circuit rating, since a PDU distributes outlets but not extra circuit capacity."
  },
  {
    "criterion": "Weigh Noise for a Shared Living Space",
    "explanation": "Check documented noise levels specifically, since a rack living near living or working space needs to be judged on more than raw performance."
  },
  {
    "criterion": "Verify Room Ventilation, Not Just Rack Fans",
    "explanation": "Recognize that rack fans alone can't cool a sealed closet or small room, so plan actual room ventilation for a dense equipment load."
  },
  {
    "criterion": "Confirm Floor Load if Installing Upstairs",
    "explanation": "Check the combined weight of a loaded rack against floor load capacity if installing above ground level."
  },
  {
    "criterion": "Plan for Future Expansion Space",
    "explanation": "Leave some spare U-height and depth room for equipment additions rather than filling a rack to its exact current needs."
  }
];

export const faq = [
  {
    "q": "Is a soundproof or quiet-rated rack always the right choice for home use?",
    "a": "It depends on where the rack lives and how much heat your equipment generates. Sound dampening trades off against airflow, so a sealed quiet cabinet needs a genuinely capable internal cooling system, otherwise trapped heat can become a bigger problem than the original noise."
  },
  {
    "q": "Does a rack's noise rating account for fan speed under load?",
    "a": "Not always. Some noise reduction claims are measured at idle or a fixed low speed, so check whether the documented dBA figure applies specifically under real operating load, since fans typically get louder as equipment runs hotter."
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

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-server-racks-for-home-lab","title":"Best Server Racks for Home Lab in 2026"},{"href":"/guide/best-server-racks","title":"Best Server Racks in 2026"},{"href":"/guide/best-server-racks-for-network","title":"Best Server Racks for Network in 2026"}];
