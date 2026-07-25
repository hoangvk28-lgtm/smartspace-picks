export const guideSlug = "best-murphy-beds-for-home-offices";
export const guideTitle = "8 Best Murphy Beds for Home Offices in 2026";
export const metaTitle = "Best Murphy Beds for Home Offices in 2026 (Desk Setup Guide)";
export const metaDescription =
  "8 best murphy beds for home offices in 2026, compared on desk lighting, monitor arm compatibility on shallow desks, and privacy for shared living spaces.";
export const mainKeyword = "murphy bed for home office";
export const introParagraphs = [
  "Turning a murphy bed into a real home office setup involves more than picking a bed that folds up over a desk. The desk surface is usually shallow and thin, the fold-down lighting rarely reaches the keyboard once the room light is behind you, and a closed cabinet does nothing to soften your voice on video calls in a shared living room or studio apartment. This guide looks past the fold mechanism and storage drawers to the details that actually decide whether the desk side works for a full workday.",
  "We focus on outlet planning, task lighting, monitor arm mounting limits on a shallow murphy desk, and acoustic considerations for shared spaces, angles most murphy bed guides skip entirely in favor of mattress size and wall clearance. Below are 8 murphy beds we evaluated for desk-side usability, ranging from a $197 vertical hardware kit to a $699.98 fully finished cabinet bed with built-in LED lighting.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51H6j9qVxwL._SL500_.jpg";

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "create-a-bed-queen-vertical",
    rank: 1,
    badge: "Best Hardware Kit for a Custom Desk",
    name: "Create-A-Bed Queen Size Deluxe Murphy Bed Kit, Vertical",
    price: "$299.00",
    rating: "4.6 stars",
    reviews: "2,138 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51H6j9qVxwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00CYPV29W?tag=deskfinds0d-20",
    description:
      "This is a vertical hardware kit rather than a finished cabinet, meaning you build the surrounding desk and shelving yourself, which is actually an advantage for a home office since you control the desk depth and can size it for a real monitor arm clamp instead of inheriting a shallow factory surface. Because the desk is custom-built, you can also plan the outlet location before installation instead of discovering after the fact that the cord has nowhere clean to go.\n\nThe tradeoff is that lighting and cable routing are entirely on you, so budget for a clipped task lamp or under-shelf LED strip separately, since the kit includes no fold-down desk light of its own. For anyone comfortable with basic carpentry who wants full control over the desk-side details, this kit gives the most flexibility of anything on this list.",
    specs: [
      "Vertical wall bed mechanism",
      "Gas piston lift assist",
      "Queen size, hardware only",
      "Requires custom cabinet build",
      "Step-by-step installation guide included",
    ],
    pros: [
      "Full control over desk depth for monitor arm clamps",
      "Lets you plan outlet placement before install",
      "Gas piston assist for smooth folding",
      "Lower cost than a finished cabinet bed",
    ],
    cons: [
      "No built-in desk lighting, budget for it separately",
      "Requires carpentry skill to build the cabinet",
      "No acoustic panel or privacy feature included",
    ],
    bestFor: "Buyers who want a deep, monitor-arm-ready desk built to their own specs",
  },
  {
    id: "murphy-bed-hardware-kit-diy",
    rank: 2,
    badge: "Best Budget DIY Kit",
    name: "Queen Size Murphy Bed Hardware Kit, Vertical Wall Bed Frame with Gas Pistons",
    price: "$197.00",
    rating: "4.6 stars",
    reviews: "1,610 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51h1vyv6ZdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B017701FUE?tag=deskfinds0d-20",
    description:
      "At $197 this is the lowest cost way onto this list, another vertical hardware kit that leaves the desk and lighting entirely up to your own build. Like the Create-A-Bed kit, that means you can size the desk surface deep enough for a clamp-mount monitor arm rather than settling for the 18 to 22 inch shallow desks common on finished cabinet beds.\n\nThree step-by-step guides are included to help with the build, but this is still a DIY project, not a delivered piece of furniture, and the desk side will need a separate task lamp since fold-down desks rarely get enough light from an overhead fixture once you're seated facing away from it. Plan your outlet and cable routing before you start building, since retrofitting an outlet after the cabinet is finished is far more work.",
    specs: [
      "Vertical wall bed mechanism",
      "Gas piston lift assist",
      "Queen size, hardware only",
      "3 step-by-step build guides included",
      "Made in North America",
    ],
    pros: [
      "Lowest price on this list",
      "Custom desk depth for monitor arm compatibility",
      "Gas piston assist",
      "Multiple build guides included",
    ],
    cons: [
      "No desk lighting or acoustic features included",
      "Requires a full DIY cabinet build",
      "Outlet planning is entirely on the buyer",
    ],
    bestFor: "Budget-focused DIY builders who want maximum desk customization",
  },
  {
    id: "yoobure-queen-murphy-rattan",
    rank: 3,
    badge: "Best for Shared Living Room Privacy",
    name: "Yoobure Queen Murphy Bed with Charging Station, Rattan Frame with Storage Drawers",
    price: "$459.99",
    rating: "4.5 stars",
    reviews: "19 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51JtI3bjGFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GQM56Y2N?tag=deskfinds0d-20",
    description:
      "The Yoobure ships as a finished cabinet with a built-in charging station and storage drawers, which is convenient for a shared living room or studio setup where the bed side needs to look presentable when closed. Its rattan cabinet front also has more sound-dampening mass than a bare particleboard panel, a small but real benefit if you take calls on the desk side while someone else is in the room.\n\nThe desk surface is shallow like most finished cabinet murphy beds, so a heavy clamp-mount monitor arm is not a safe bet here without adding under-desk reinforcement. This is a newer listing with a small review count, so weigh the low review volume against the fit for your specific room before buying.",
    specs: [
      "Queen size cabinet bed",
      "Built-in charging station",
      "Storage drawers included",
      "Rattan-front cabinet design",
      "Foldable platform base",
    ],
    pros: [
      "Finished look suited to shared living spaces",
      "Charging station built into the frame",
      "Storage drawers add organization",
      "Rattan front adds some sound dampening",
    ],
    cons: [
      "Shallow desk surface, avoid heavy clamp-mount monitor arms",
      "Low review count for a newer listing",
      "No dedicated desk task light included",
    ],
    bestFor: "Shared living rooms or studios where the closed bed needs to look finished",
  },
  {
    id: "amerlife-queen-murphy-storage",
    rank: 4,
    badge: "Best Storage-Focused Cabinet Bed",
    name: "AMERLIFE Queen Murphy Bed with Storage and Charging Station",
    price: "$499.99",
    rating: "4.2 stars",
    reviews: "396 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51Og-FctXuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGL5B76J?tag=deskfinds0d-20",
    description:
      "AMERLIFE pairs a full-size murphy bed with side storage and a charging station, useful for keeping desk accessories and cables organized when the bed folds down and the desk area needs to clear quickly. Like most factory cabinet beds, the desk surface is a thin panel not designed to carry the load of a heavy clamp-mount monitor arm, so plan on a lightweight monitor riser instead if you need extra screen height.\n\nAn overhead room light alone tends to leave the desk surface dim once you're facing the wall, so a clip-on task lamp mounted to the cabinet edge is worth adding. The mid-tier build here uses MDF panels rather than solid wood, a reasonable middle ground on durability for the price.",
    specs: [
      "Queen size cabinet murphy bed",
      "Side storage compartments",
      "Built-in charging station",
      "MDF cabinet construction",
      "Foldable platform base",
    ],
    pros: [
      "Side storage keeps desk accessories organized",
      "Charging station included",
      "Mid-tier MDF build holds up better than particleboard",
      "Finished look for shared spaces",
    ],
    cons: [
      "Shallow desk surface, not rated for heavy monitor arms",
      "No included desk lighting",
      "Higher price than the DIY hardware kits",
    ],
    bestFor: "Buyers who want built-in storage alongside the desk without a DIY build",
  },
  {
    id: "hlivelood-full-chest-bed-white",
    rank: 5,
    badge: "Best Compact Chest-Style Option",
    name: "Hlivelood Full Size Murphy Chest Bed with Drawer and Charging Station, Rustic White",
    price: "$349.99",
    rating: "4.2 stars",
    reviews: "112 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/516I1SJ4lqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DNKM6NRF?tag=deskfinds0d-20",
    description:
      "This chest-style murphy bed uses a full size mattress rather than queen, which keeps the overall cabinet narrower and easier to fit a desk beside in a smaller room. A single drawer and charging station are built in, and the light rustic white finish reflects more ambient room light back toward the desk than a dark cabinet front would, a small but real help with desk visibility.\n\nBudget-tier particleboard construction is used here rather than MDF or solid wood, which keeps the price down but means the cabinet is more prone to wear at the drawer runners and hinges over years of daily folding. Add a clipped task lamp for real desk lighting, since the built-in fixtures on this tier are minimal to none.",
    specs: [
      "Full size chest-style murphy bed",
      "Single storage drawer",
      "Built-in charging station",
      "Particleboard cabinet construction",
      "Rustic white finish",
    ],
    pros: [
      "Narrower footprint than a queen cabinet bed",
      "Lighter finish helps desk-side visibility",
      "Charging station included",
      "Lower price than mid-tier MDF options",
    ],
    cons: [
      "Budget particleboard build wears faster over years of daily use",
      "No dedicated desk task lighting",
      "Full size mattress only, not queen",
    ],
    bestFor: "Smaller rooms that need a narrower cabinet footprint next to the desk",
  },
  {
    id: "hlivelood-queen-led-brown",
    rank: 6,
    badge: "Best Built-In Desk Lighting",
    name: "Hlivelood Queen Size Murphy Bed with 2 LED Lights, Gas Struts, Brown",
    price: "$699.98",
    rating: "4 stars",
    reviews: "141 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51XE-SiCWBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FFSTT5LQ?tag=deskfinds0d-20",
    description:
      "This is the only bed on this list with built-in LED lighting, which directly solves the most common desk-side complaint with murphy bed setups: an overhead room light that leaves the desk surface dim once you're seated facing the closed cabinet. The two LED fixtures mount to the cabinet itself, so they light the work area without needing a separate clamp lamp taking up desk space.\n\nGas struts smooth the fold motion, and the dark brown farmhouse finish gives a finished, presentable look for a shared living space. The desk surface remains shallow like other finished cabinet beds, so keep monitor mounting to a lightweight riser rather than a heavy clamp arm, and this is the highest price on this list, a real premium for the integrated lighting.",
    specs: [
      "Queen size cabinet murphy bed",
      "2 built-in LED lights",
      "Gas strut fold assist",
      "No box spring needed",
      "Farmhouse wood cabinet finish",
    ],
    pros: [
      "Only pick with built-in desk-side LED lighting",
      "Gas struts for smooth, controlled folding",
      "Finished farmhouse look for shared spaces",
      "No separate task lamp needed",
    ],
    cons: [
      "Highest price on this list",
      "Shallow desk surface, still not rated for heavy monitor arms",
      "Lower average rating than the hardware kits",
    ],
    bestFor: "Buyers who want built-in lighting instead of adding a separate desk lamp",
  },
  {
    id: "hlivelood-queen-led-white",
    rank: 7,
    badge: "Best LED Lighting, Lighter Finish",
    name: "Hlivelood Queen Size Murphy Bed with 2 LED Lights, Gas Struts, Rustic White",
    price: "$639.99",
    rating: "4 stars",
    reviews: "141 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/515sMh7j30L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DXZVVHCG?tag=deskfinds0d-20",
    description:
      "The same built-in 2-LED lighting and gas strut mechanism as the brown version above, but in a rustic white finish that reflects more light back onto the desk surface between uses, a genuine small advantage for desk visibility in a room without much natural light. At $639.99 it also undercuts the brown finish by about $60 while keeping the same lighting feature.\n\nThe desk surface is still the same shallow factory panel common to finished cabinet beds, so plan on a lightweight monitor riser rather than a heavy clamp-mount arm. If acoustic privacy for calls matters in your shared space, consider adding a wall panel near the desk, since the closed cabinet itself does not meaningfully block sound between rooms.",
    specs: [
      "Queen size cabinet murphy bed",
      "2 built-in LED lights",
      "Gas strut fold assist",
      "No box spring needed",
      "Rustic white cabinet finish",
    ],
    pros: [
      "Built-in LED desk lighting",
      "Lighter finish improves desk-side visibility",
      "Lower price than the brown LED version",
      "Gas struts for smooth folding",
    ],
    cons: [
      "Shallow desk surface, not rated for heavy monitor arms",
      "No acoustic privacy feature for shared rooms",
      "Lower average rating than the hardware kits",
    ],
    bestFor: "Buyers who want built-in lighting with a brighter, reflective cabinet finish",
  },
  {
    id: "livauvead-twin-murphy-white",
    rank: 8,
    badge: "Best for Small Home Offices, Twin Size",
    name: "LIVAUVEAD Twin Size Murphy Bed with Charging Station and Drawer, White",
    price: "$249.99",
    rating: "4 stars",
    reviews: "120 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51iWQRI54lL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F13Q522K?tag=deskfinds0d-20",
    description:
      "The twin size cabinet is the narrowest finished murphy bed on this list, which leaves more usable floor width beside the desk in a genuinely small home office or dorm-style room. A charging station and single drawer are included, and the white finish helps desk-side visibility the way the lighter Hlivelood option does.\n\nAs with the other finished cabinet beds, the desk panel is shallow and not built for a heavy clamp-mount monitor arm, and there is no built-in lighting or acoustic feature, so budget for a clip-on task lamp separately. For a single-occupant small office where floor width is the tightest constraint, the twin footprint is the main reason to choose this over the queen options above.",
    specs: [
      "Twin size cabinet murphy bed",
      "Built-in charging station",
      "Single storage drawer",
      "White cabinet finish",
      "Foldable platform base",
    ],
    pros: [
      "Narrowest cabinet footprint on this list",
      "Charging station included",
      "Lighter finish aids desk visibility",
      "Lowest price among the finished cabinet beds",
    ],
    cons: [
      "No built-in desk lighting",
      "Shallow desk surface, avoid heavy monitor arms",
      "Twin mattress only, not suited to a shared bed use case",
    ],
    bestFor: "Small single-occupant home offices where floor width is the tightest constraint",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Desk lighting after fold-down",
    description:
      "Considered whether each pick includes built-in desk lighting or leaves the desk surface reliant on overhead room light, which is often insufficient once you're seated facing the closed cabinet.",
  },
  {
    title: "Monitor arm compatibility",
    description:
      "Evaluated desk surface depth and panel thickness against the clamp range and load needs of a standard monitor arm, flagging which desks are realistically limited to a lightweight riser instead.",
  },
  {
    title: "Acoustic and privacy considerations",
    description:
      "Weighed cabinet material mass and finish against how much sound insulation the closed bed side realistically offers for video calls in a shared living space.",
  },
  {
    title: "Cabinet material and build tier",
    description:
      "Classified each pick's cabinet material, from budget particleboard to mid-tier MDF, to set realistic expectations for long-term wear from daily folding.",
  },
  {
    title: "Value for price",
    description:
      "Weighed desk usability features, lighting, and cabinet material quality against price across the $197 to $699.98 range in this list.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Plan the outlet before you install, not after",
    explanation:
      "The single most common post-install complaint with murphy bed desks is discovering the nearest outlet is in the wrong spot once the cabinet is bolted to the wall. Map out an extension cord route or a wall outlet cutout before installation, especially with the DIY hardware kits where you control cabinet placement.",
  },
  {
    criterion: "Overhead room light rarely reaches the desk surface",
    explanation:
      "Most murphy bed desks face the wall, which puts your body between the ceiling light and the desk surface once you're seated. Only the two Hlivelood picks in this list include built-in LED lighting; everything else needs a clipped task lamp or under-cabinet LED strip added separately.",
  },
  {
    criterion: "Shallow desks are not built for heavy clamp-mount monitor arms",
    explanation:
      "Murphy desks typically run 18 to 22 inches deep with a 3/4 inch or thinner MDF surface, which is not enough material for a heavy clamp-mount arm to bite into safely without reinforcement. If you need a monitor arm, plan on a lightweight riser or reinforce the desk panel from underneath first.",
  },
  {
    criterion: "A closed cabinet offers little real acoustic insulation",
    explanation:
      "The bed side of a closed murphy cabinet does not meaningfully block sound between rooms, so if you take calls at the desk in a shared living room or studio, add acoustic panels to the adjacent wall rather than relying on the cabinet itself for privacy.",
  },
  {
    criterion: "Cabinet material quality tracks price tier closely",
    explanation:
      "Budget beds in the $249.99 to $349.99 range typically use particleboard or veneer, mid-tier beds from about $459.99 to $699.98 step up to MDF, and premium beds above that generally use solid wood or plywood. Expect drawer runners and hinges on budget tiers to show wear sooner under daily folding.",
  },
  {
    criterion: "Hardware kits give you the most desk control, at the cost of a DIY build",
    explanation:
      "Buying a vertical hardware kit like the Create-A-Bed or the budget DIY kit means you build the surrounding cabinet and desk yourself, which lets you size the desk deep enough for a real monitor arm and plan lighting and outlets from scratch. A finished cabinet bed is far less work but locks you into its factory desk depth and lighting.",
  },
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
    subheading: "By Desk Lighting Need",
    intro: "If you work at the desk for real hours, built-in lighting changes how usable the setup actually is.",
    table: {
      headers: ["Situation", "Recommendation", "Best pick"],
      rows: [
        ["Desk faces away from the room's main light source", "Get built-in LED lighting", "Hlivelood Queen with 2 LED Lights, Brown or Rustic White"],
        ["Willing to add a clip-on task lamp yourself", "Any finished cabinet bed works", "AMERLIFE Queen Murphy Bed with Storage"],
        ["Building your own desk anyway", "Plan lighting into the build", "Create-A-Bed Queen Vertical Kit"],
      ],
    },
  },
  {
    subheading: "By Monitor Arm Plans",
    intro: "Every finished cabinet bed on this list has a shallow, thin desk panel. Only the hardware kits let you build around that limit.",
    cards: [
      {
        label: "Need a heavy clamp-mount monitor arm",
        text: "Choose the Create-A-Bed or the budget DIY hardware kit and build a deeper, reinforced desk surface yourself; a factory cabinet desk is not rated for this.",
      },
      {
        label: "Fine with a lightweight monitor riser instead",
        text: "Any finished cabinet bed, including the AMERLIFE or either Hlivelood LED model, works without modification.",
      },
      {
        label: "Single monitor, no arm needed",
        text: "The LIVAUVEAD Twin or Yoobure Queen both work as-is for a simple laptop or single-screen desk.",
      },
    ],
  },
  {
    subheading: "By Room Type and Privacy Need",
    table: {
      headers: ["Room type", "Privacy consideration", "Best pick"],
      rows: [
        ["Private guest room or spare bedroom", "Acoustic privacy less critical", "Any pick, cabinet material tier by budget"],
        ["Shared living room or studio apartment", "Add wall acoustic panels near the desk", "Yoobure Queen (rattan front adds minor dampening)"],
        ["Small single-occupant office", "Narrower footprint matters most", "LIVAUVEAD Twin Size"],
      ],
    },
    note: "No murphy bed cabinet in this list offers real acoustic insulation on its own; treat the wall, not the bed, for call privacy.",
  },
  {
    subheading: "Cabinet Material Quality by Budget",
    table: {
      headers: ["Budget", "Typical material", "Best pick"],
      rows: [
        ["$197 to $299", "Hardware only, you supply the cabinet material", "Create-A-Bed or budget DIY kit"],
        ["$249.99 to $349.99", "Particleboard or veneer", "LIVAUVEAD Twin or Hlivelood Full Chest Bed"],
        ["$459.99 to $699.98", "MDF, dovetail joinery", "AMERLIFE, Yoobure, or either Hlivelood LED model"],
      ],
    },
    note: "Solid wood or plywood construction generally starts above $3,000 in this category and isn't represented in this list's price range.",
  },
  {
    subheading: "When to Choose a Hardware Kit Over a Finished Cabinet",
    cards: [
      {
        label: "You want full control over desk depth and lighting",
        text: "Both hardware kits let you build a desk deep enough for a monitor arm and plan lighting and outlet placement from the start.",
      },
      {
        label: "You want a delivered, ready-to-use piece of furniture",
        text: "Any of the finished cabinet beds, from the LIVAUVEAD Twin to the Hlivelood LED models, avoid the DIY build entirely.",
      },
    ],
  },
];

export const faq: FaqItem[] = [
  {
    q: "Can I mount a real monitor arm to a murphy bed desk?",
    a: "Most finished cabinet murphy beds have a shallow desk, typically 18 to 22 inches deep, with a thin panel around 3/4 inch, which is not enough material for a heavy clamp-mount arm without reinforcement from underneath. If you need a proper monitor arm, build your own deeper desk using a hardware kit like the Create-A-Bed or the budget DIY kit, or stick to a lightweight monitor riser on a finished cabinet bed.",
  },
  {
    q: "Why is desk lighting such a common complaint with murphy bed offices?",
    a: "Most murphy desks face the wall, so your body sits between the desk surface and the room's main overhead light source once you're seated, leaving the work area dimmer than it looks in photos. Only the two Hlivelood LED models in this list build lighting into the cabinet; everything else needs a clipped task lamp or under-cabinet LED strip added separately.",
  },
  {
    q: "Does a closed murphy bed cabinet block sound for video calls?",
    a: "Not meaningfully. A closed murphy cabinet does not offer real acoustic insulation between rooms, so if you take calls at the desk in a shared living room or studio, address privacy with wall acoustic panels near the desk rather than relying on the bed cabinet itself.",
  },
  {
    q: "What should I plan for before installing a murphy bed desk?",
    a: "Map out your outlet location and cable routing before installation, since a missing or awkwardly placed outlet is the most common post-install complaint with these setups. This matters most with the hardware kits, where you're also choosing the cabinet's final wall position yourself.",
  },
  {
    q: "Is a hardware kit or a finished cabinet bed better for a home office?",
    a: "A hardware kit like the Create-A-Bed or the budget DIY kit gives you full control over desk depth, lighting, and outlet placement, which matters if you need a monitor arm or specific lighting setup, but it requires a real carpentry build. A finished cabinet bed arrives ready to use with a shallower desk and factory lighting, if any, built in.",
  },
  {
    q: "Do budget murphy bed cabinets hold up as well as mid-tier ones?",
    a: "Budget cabinets in the $249.99 to $349.99 range generally use particleboard or veneer, which is more prone to wear at drawer runners and hinges over years of daily folding compared to the MDF and dovetail joinery typical of mid-tier picks in the $459.99 to $699.98 range.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-murphy-beds-for-small-spaces", title: "Best Murphy Beds for Small Spaces (2026)" },
  { href: "/guide/best-murphy-beds-with-desks", title: "Best Murphy Beds with Desks (2026)" },
  { href: "/guide/best-filing-cabinets-for-home-offices", title: "Best Filing Cabinets for Home Offices (2026)" },
];
