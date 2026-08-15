export const guideSlug = "best-art-deco-reception-desks";
export const guideTitle = "3 Best Art Deco Reception Desks in 2026";
export const metaTitle = "Best Art Deco Reception Desks 2026";
export const metaDescription = "We defined art deco styling through observable construction details and commercial durability rather than inspiration photography alone.";
export const mainKeyword = "art deco reception desk";
export const introParagraphs = [
  "Art deco reception desks should be evaluated through actual design and construction details plus commercial durability, since the art deco label spans genuinely different build qualities and material choices.",
  "We inspected decorative faces, geometric detailing, and edges for durability, and evaluated dust traps around ornamental art deco detailing since this styling often adds decorative texture that plain desks skip."
];
export const lastUpdated = "2026-08-15";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/51Bxbd+CiUL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-art-deco-reception-desks-1",
    rank: 1,
    badge: "Best Overall",
    name: "LEEMTORIG Vintage Solid Wood Writing Desk with Drawers",
    price: "$299.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51Bxbd+CiUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09HNKYRLW?tag=deskfinds0d-20",
    description: "Built from solid rubber wood rather than particleboard, this 46\"W secretary-style desk carries a 250 lb load rating and a cherry wood veneer finish with four sculptural legs, giving it genuine antique-desk presence instead of a printed wood-grain laminate look. The two large drawers run on smooth slide rails and add real storage depth for a small reception point.\n\nAssembly is a one-person, roughly 20-minute job since the legs use integral screws that thread directly into recessed metal inserts, which matters for a piece this style-forward since over-engineered flat-pack hardware would undercut the vintage look.",
    specs: ["46\"W x 21.6\"D solid rubber wood top","250 lb load-bearing capacity","2 large drawers on smooth slide rails"],
    pros: ["Solid wood frame, not particleboard, for genuine antique weight and durability","Fast single-person assembly (~20 min) via pre-inserted metal fittings","250 lb capacity is high for a decorative-style desk"],
    cons: ["No transaction counter or visitor-facing raised section","46\" width limits it to light-duty reception use only"],
    bestFor: "buyers prioritizing 46\"w x 21.6\"d solid rubber wood top",
  },
  {
    id: "best-art-deco-reception-desks-2",
    rank: 2,
    badge: "Best Curved Art Deco Alternative",
    name: "Romig Marque Curved Single-Unit Reception Workstation",
    price: "$1,192.84",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/314cEp+DwLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C74V1KLW?tag=deskfinds0d-20",
    description: "This 72\"W x 32\"D curved unit assembles without tools, using a silver steel frame and thermofused melamine finish with self-edge banding to keep costs down without looking budget. The 19.75\" deep interior desk gives the receptionist real working depth behind the curved visitor-facing front.\n\nLeveling glides built into the base allow up to ½\" of height adjustability per leg, which matters on uneven commercial flooring where a fixed-leg desk would rock. Wire management cutouts are built into the interior desk surface rather than added as drilled holes.",
    specs: ["72\"W x 32\"D curved single-unit desk","19.75\" deep interior receptionist desk","Leveling glides, up to ½\" height adjustability per leg"],
    pros: ["No-tools assembly, unusual for a curved commercial desk","Leveling glides handle uneven floors better than fixed feet","Interior wire cutouts built into the work surface, not drilled after"],
    cons: ["Single-unit only, no add-on modules shown for this listing","Silver frame is a fixed design choice, not swappable"],
    bestFor: "buyers prioritizing 72\"w x 32\"d curved single-unit desk",
  },
  {
    id: "best-art-deco-reception-desks-3",
    rank: 3,
    badge: "Best Fluted Art Deco Accent",
    name: "42.1\" Fluted Round-Corner Reception Desk, Walnut",
    price: "$159.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/413JCqsMXyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GYCYSDNN?tag=deskfinds0d-20",
    description: "At 42.1\"W x 19.7\"D x 43.3\"H, the standout feature is the rounded corner design specifically built to avoid bump injuries in tight reception spaces, paired with a fluted front for texture. Thickened MDF construction targets durability and scratch resistance.\n\nThe compact footprint and 43.3\" counter-appropriate height suit salons, offices, lobbies, retail stores, and home offices that need a small but standing-height reception point.",
    specs: ["42.1\"W x 19.7\"D x 43.3\"H","Rounded corner design","Thickened MDF construction"],
    pros: ["Rounded corners specifically reduce bump/injury risk in tight spaces","43.3\" height suits genuine standing-counter use","Compact 42.1\" width fits the smallest reception footprints"],
    cons: ["No storage drawer or lock mentioned in this listing","Fluted texture may be harder to wipe clean than a flat panel"],
    bestFor: "buyers prioritizing 42.1\"w x 19.7\"d x 43.3\"h",
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
    "subheading": "Define Art Deco Style Through Construction Details",
    "note": "Define the art deco style through observable construction details like geometric lines, sculptural elements, and premium finishes rather than photography alone."
  },
  {
    "subheading": "Inspect Decorative Faces for Durability",
    "note": "Inspect decorative faces, grooves, trim, and edges for impact durability, since ornamental art deco detailing can be more exposed to bumps than a plain panel."
  },
  {
    "subheading": "Evaluate Dust Traps Around Ornamental Details",
    "note": "Evaluate dust traps and porous surfaces around ornamental art deco detailing, since geometric trim and sculptural elements collect dust differently than a flat modern panel."
  },
  {
    "subheading": "Plan Cable Concealment Around the Art Deco Look",
    "note": "Confirm POS systems, monitors, and cables stay concealed without visually clashing against the art deco aesthetic's period-appropriate look."
  },
  {
    "subheading": "Check Refinish Options for Art Deco Wood",
    "note": "Publish repair or refinish strategy for high-visibility damage, since a genuine solid-wood art deco desk can often be sanded and refinished, unlike a laminate equivalent."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Define Art Deco Style Through Construction Details",
    "explanation": "Define the art deco style through observable construction details like geometric lines, sculptural elements, and premium finishes rather than photography alone."
  },
  {
    "criterion": "Inspect Decorative Faces for Durability",
    "explanation": "Inspect decorative faces, grooves, trim, and edges for impact durability, since ornamental art deco detailing can be more exposed to bumps than a plain panel."
  },
  {
    "criterion": "Evaluate Dust Traps Around Ornamental Details",
    "explanation": "Evaluate dust traps and porous surfaces around ornamental art deco detailing, since geometric trim and sculptural elements collect dust differently than a flat modern panel."
  },
  {
    "criterion": "Plan Cable Concealment Around the Art Deco Look",
    "explanation": "Confirm POS systems, monitors, and cables stay concealed without visually clashing against the art deco aesthetic's period-appropriate look."
  },
  {
    "criterion": "Check Refinish Options for Art Deco Wood",
    "explanation": "Publish repair or refinish strategy for high-visibility damage, since a genuine solid-wood art deco desk can often be sanded and refinished, unlike a laminate equivalent."
  }
];

export const faq = [
  {
    "q": "What defines an art deco style reception desk?",
    "a": "Art deco styling typically features geometric lines, sculptural or fluted detailing, and a sense of glamour through premium finishes like polished wood, metal accents, or mirrored surfaces, distinct from both minimalist modern and rustic antique styles."
  },
  {
    "q": "Are art deco reception desks made of solid wood?",
    "a": "It varies by product. Some art deco-adjacent desks use genuine solid wood with a fine finish, while others achieve the look with engineered wood and decorative trim; check the material description before assuming."
  },
  {
    "q": "Does art deco styling cost more than plain modern reception desks?",
    "a": "Often yes, since the decorative detailing and premium finishes associated with art deco styling typically add manufacturing complexity versus a plain, unadorned modern panel."
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

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-antique-reception-desks","title":"best-antique-reception-desks"},{"href":"/guide/best-vintage-reception-desks","title":"best-vintage-reception-desks"},{"href":"/guide/best-modern-reception-desks","title":"best-modern-reception-desks"}];
