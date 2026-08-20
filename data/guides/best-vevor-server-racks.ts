export const guideSlug = "best-vevor-server-racks";
export const guideTitle = "4 Best VEVOR Server Racks in 2026";
export const metaTitle = "Best VEVOR Server Racks 2026";
export const metaDescription = "We compared vevor server racks by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "vevor server racks";
export const introParagraphs = [
  "The real test for vevor server racks comes down to matching VEVOR's rail depth to real equipment length rather than trusting U-height alone, not a glance at the listing photo.",
  "Rather than trust listing photos, we checked documented weight rating and mounting depth plus matching VEVOR's rail depth to real equipment length rather than trusting U-height alone for every rack on this list."
];
export const lastUpdated = "2026-08-20";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/41KuU2tlXhL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-vevor-server-racks-1",
    rank: 1,
    badge: "Best Overall",
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
    id: "best-vevor-server-racks-2",
    rank: 2,
    badge: "Runner-Up",
    name: "VEVOR 15U Open Frame Server Rack, 23-40in Adjustable Depth",
    price: "$115.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41XG+MUBhtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C64Z28X9?tag=deskfinds0d-20",
    description: "The 15U model sits between VEVOR's 12U and 20U options, with a 300 lb ground-mount rating that splits the difference between the smaller and larger racks in their lineup.\n\nThe same complete accessory kit carries through here too: casters, cage nuts, grounding wire, and a user manual, so setup follows a familiar process if you've used other VEVOR racks.",
    specs: ["15U, 23-40\" adjustable depth","300 lb ground / 150 lb wall capacity","Full hardware kit including grounding wire"],
    pros: ["300 lb rating fits between VEVOR's smaller and larger models","Consistent hardware kit makes setup familiar","Roller casters make repositioning simple"],
    cons: ["Still well below the 12U model's 500 lb rating","Wall-mount capacity remains modest at 150 lbs"],
    bestFor: "buyers prioritizing 15u, 23-40\" adjustable depth",
  },
  {
    id: "best-vevor-server-racks-3",
    rank: 3,
    badge: "Budget Pick",
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
    "subheading": "Build a Current Model Map First",
    "note": "Confirm which vevor rack models are currently sold rather than assuming an older listing reflects the current lineup, since weight ratings and depth ranges change between generations."
  },
  {
    "subheading": "Publish Weight Rating by Mount Type",
    "note": "Verify stationary, rolling, and wall-mounted weight ratings separately for the exact model, not the brand's range in general."
  },
  {
    "subheading": "Verify Rail Depth Against Your Equipment",
    "note": "Check documented mounting depth or adjustable depth range before assuming standard rack gear will fit."
  },
  {
    "subheading": "Compare Warranty and Included Hardware",
    "note": "Compare warranty length and which cage nuts, casters, or shelves actually ship in the box by exact model."
  },
  {
    "subheading": "Check Post Configuration for Your Load",
    "note": "Confirm whether the specific model is 2-post or 4-post, since that determines what equipment class it can safely support."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Build a Current Model Map First",
    "explanation": "Confirm which vevor rack models are currently sold rather than assuming an older listing reflects the current lineup, since weight ratings and depth ranges change between generations."
  },
  {
    "criterion": "Publish Weight Rating by Mount Type",
    "explanation": "Verify stationary, rolling, and wall-mounted weight ratings separately for the exact model, not the brand's range in general."
  },
  {
    "criterion": "Verify Rail Depth Against Your Equipment",
    "explanation": "Check documented mounting depth or adjustable depth range before assuming standard rack gear will fit."
  },
  {
    "criterion": "Compare Warranty and Included Hardware",
    "explanation": "Compare warranty length and which cage nuts, casters, or shelves actually ship in the box by exact model."
  },
  {
    "criterion": "Check Post Configuration for Your Load",
    "explanation": "Confirm whether the specific model is 2-post or 4-post, since that determines what equipment class it can safely support."
  }
];

export const faq = [
  {
    "q": "Are all vevor rack models currently sold, or does the lineup include discontinued products?",
    "a": "Check current first-party store pages directly, since older server rack listings often stay heavily indexed in search results long after being succeeded by newer models with different specs."
  },
  {
    "q": "Does buying vevor guarantee the same weight rating across every model?",
    "a": "No. A brand's lineup can span very different weight ratings and post configurations, so verify the exact model's documented capacity rather than assuming brand consistency across their whole catalog."
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
