export const guideSlug = "best-mechanical-keyboards";
export const guideTitle = "8 Best Mechanical Keyboards in 2026";
export const metaTitle = "Best Mechanical Keyboards in 2026 (Gaming & Office Picks)";
export const metaDescription =
  "8 best mechanical keyboards in 2026, from a budget blue-switch board to a Hall effect rapid trigger model. Compare switches, noise level, and keycap material.";
export const mainKeyword = "mechanical keyboard";
export const introParagraphs = [
  "A mechanical keyboard swaps the rubber dome under a standard keyboard for individual mechanical switches, which changes how it feels, sounds, and holds up over years of typing. That switch choice matters more than most buyers realize going in, clicky switches feel great solo but can be genuinely disruptive on a Zoom call, while linear or Hall effect switches suit different needs entirely for gaming versus office work.",
  "Below are 8 mechanical keyboards we evaluated on switch type, keycap material, noise profile, and build quality, ranging from a $25.49 hot-swappable budget board to a $144.99 Hall effect keyboard with true rapid trigger. Each pick is matched to a specific use case, gaming, office, or work-from-home Zoom calls, rather than ranked as one universal best.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg";

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
    id: "risophy-rgb-104-blue-switch",
    rank: 1,
    badge: "Best Budget Pick",
    name: "RisoPhy Mechanical Gaming Keyboard, RGB 104 Keys with Blue Switch",
    price: "$28.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09TR4Y91J?tag=deskfinds0d-20",
    description:
      "The RisoPhy is a full 104-key layout built on blue clicky switches, the loudest and most tactile switch type in this list, with anti-ghosting and spill resistance for basic peace of mind at a low price. Blue switches produce a distinct click sound on every keypress, which some typists love for the feedback but which is genuinely disruptive if you're on frequent voice calls nearby.\n\nABS keycaps keep costs down but will show shine and wear faster than PBT over a year of regular use. This is a reasonable entry point for someone curious about mechanical switches who is not yet ready to spend on a premium board.",
    specs: [
      "104-key full layout",
      "Blue clicky switches",
      "RGB LED backlight",
      "ABS keycaps",
      "Anti-ghosting, spill-resistant",
    ],
    pros: [
      "Lowest price in this list",
      "Full 104-key layout with number pad",
      "Distinct tactile click feedback",
      "RGB backlighting included",
    ],
    cons: [
      "Blue switches are the loudest option here, poor fit for shared spaces or Zoom calls",
      "ABS keycaps will show shine within months of regular use",
      "Not hot-swappable, switches cannot be changed",
    ],
    bestFor: "Budget buyers who want a taste of clicky mechanical feedback",
  },
  {
    id: "keychron-k4-96-percent-brown",
    rank: 2,
    badge: "Best Wireless Value",
    name: "Keychron K4 96% Layout Wireless Bluetooth/Wired Mechanical Keyboard",
    price: "$59.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41-A9KzCP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07WS7KSGT?tag=deskfinds0d-20",
    description:
      "The K4 packs a near-full 100-key layout into a 96% frame that trims excess bezel space, and it runs on Keychron's brown tactile switches, a quieter middle ground between clicky and fully linear. Modern 2.4GHz and Bluetooth 5.1 wireless on a mechanical keyboard runs at roughly 1ms of added latency, which is effectively indistinguishable from a wired connection for typing and most gaming.\n\nIt supports both wireless and wired USB modes, so battery anxiety isn't a dealbreaker, you can plug in when needed. White LED backlighting and N-key rollover round out a well-specced board for the price.",
    specs: [
      "96% compact full-size layout",
      "Brown tactile switches",
      "Bluetooth 5.1 or wired USB",
      "White LED backlight",
      "N-key rollover",
    ],
    pros: [
      "Tactile brown switches are quieter than clicky blue switches",
      "Wireless latency is effectively unnoticeable at roughly 1ms",
      "Compact 96% layout saves desk space over a full 104-key board",
      "Wired fallback avoids battery dependency",
    ],
    cons: [
      "Not hot-swappable on this version",
      "ABS keycaps wear faster than PBT over time",
      "Backlight is single-color white, not RGB",
    ],
    bestFor: "Buyers who want reliable wireless mechanical typing without gaming-tier pricing",
  },
  {
    id: "keychron-c2-full-size-brown",
    rank: 3,
    badge: "Best Full-Size Wired",
    name: "Keychron C2 Full Size Wired Mechanical Keyboard",
    price: "$43.31",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31QS87iIEQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09JG7KRC7?tag=deskfinds0d-20",
    description:
      "The C2 is a straightforward wired full-size 104-key board using Keychron's brown switches, aimed at buyers who want a proven tactile feel without wireless complexity or added cost. A braided USB-C cable improves durability over a basic rubber cord, a small but real detail on a keyboard that gets moved or plugged in daily.\n\nRetro-style ABS keycaps give it a distinct look, though as with any ABS set, expect visible shine on the most-used keys after a year of daily typing versus a PBT equivalent.",
    specs: [
      "104-key full-size layout",
      "Brown tactile switches",
      "Wired USB-C with braided cable",
      "Mac and Windows compatible",
      "Retro color ABS keycaps",
    ],
    pros: [
      "Simple, reliable wired connection",
      "Braided USB-C cable resists fraying",
      "Full number pad for spreadsheet-heavy work",
      "Compatible across Mac and Windows",
    ],
    cons: [
      "ABS keycaps will show wear over a year of use",
      "No RGB or wireless option on this model",
      "Full-size footprint takes up more desk space",
    ],
    bestFor: "Buyers who want a dependable full-size wired board without gaming extras",
  },
  {
    id: "logitech-g515-lightspeed-tkl-tactile",
    rank: 4,
    badge: "Best Low-Profile Gaming",
    name: "Logitech G515 Lightspeed TKL Wireless Gaming Keyboard (Tactile)",
    price: "$124.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31OJJVgcA9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1DSW8TF?tag=deskfinds0d-20",
    description:
      "The G515 uses a low-profile tenkeyless design that removes the number pad for a more compact desk footprint while keeping Logitech's Lightspeed wireless, which delivers the same near-zero latency as a wired connection. Low-profile switches have shorter travel than standard mechanical switches, which reduces both noise and finger fatigue during long sessions.\n\nTactile feedback here comes without the sharp click of a blue switch, making it a reasonable pick for anyone who wants a low-profile gaming board that won't be as disruptive on a shared call as a louder clicky keyboard.",
    specs: [
      "Tenkeyless (TKL) low-profile layout",
      "Tactile low-profile switches",
      "Lightspeed wireless, roughly 1ms latency",
      "Compact footprint without number pad",
      "Aluminum top plate",
    ],
    pros: [
      "Low-profile switches reduce noise and finger travel",
      "Lightspeed wireless is effectively as fast as wired",
      "TKL layout frees up desk space for mouse movement",
      "Aluminum build feels sturdier than plastic-only boards",
    ],
    cons: [
      "Higher price than the wired picks in this list",
      "No number pad for spreadsheet-heavy work",
      "Low-profile switches are not hot-swappable on this model",
    ],
    bestFor: "Gamers who want a compact, quieter, low-latency wireless board",
  },
  {
    id: "corsair-k70-core-tkl-linear",
    rank: 5,
    badge: "Best for Sound Dampening",
    name: "Corsair K70 CORE TKL RGB Tenkeyless Mechanical Wired Gaming Keyboard",
    price: "$99.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41j4+Pxjo0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D7J5XVXG?tag=deskfinds0d-20",
    description:
      "The K70 CORE TKL uses pre-lubed MLX Red linear switches, smooth and quiet with no tactile bump or click, plus factory sound dampening foam that reduces the hollow resonance common on unmodded keyboards. Linear switches like these are a solid choice for both gaming, where consistent, low-noise keypresses help, and shared office space, where a clicky switch would stand out.\n\nA 1000Hz polling rate keeps input response tight for gaming, while double-shot ABS keycaps and SOCD input handling round out a board built with competitive use in mind but quiet enough for daily office typing.",
    specs: [
      "Tenkeyless layout",
      "Pre-lubed MLX Red linear switches",
      "Factory sound dampening foam",
      "1000Hz polling rate",
      "SOCD input handling, double-shot ABS keycaps",
    ],
    pros: [
      "Linear switches plus dampening foam are notably quieter than clicky boards",
      "1000Hz polling rate suits competitive gaming",
      "Pre-lubed switches feel smoother out of the box",
      "TKL layout saves desk space",
    ],
    cons: [
      "Wired only, no wireless option",
      "Linear switches lack tactile feedback some typists prefer",
      "RGB adds some cost over a non-RGB equivalent",
    ],
    bestFor: "Buyers who want quiet linear switches without giving up gaming-grade response",
  },
  {
    id: "logitech-g-pro-tkl-clicky",
    rank: 6,
    badge: "Best Clicky Switch for Enthusiasts",
    name: "Logitech G PRO Mechanical TKL Tenkeyless Gaming Keyboard (Clicky)",
    price: "$119.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41nJY8zgznL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07QQB9VCV?tag=deskfinds0d-20",
    description:
      "The G PRO TKL uses genuine clicky switches tuned for competitive gaming feedback, giving the sharpest, most audible confirmation of any keypress in this list. That distinct clicky sound profile, sometimes described as a crisp click compared to the deeper thock of some linear boards, is a major factor for typists who specifically want tactile and audible confirmation.\n\nA compact TKL body and detachable cable make it easy to travel with for LAN events or moving between a desk and a laptop setup, but the loud switch profile makes it a poor fit for open-plan offices or frequent video calls.",
    specs: [
      "Tenkeyless layout",
      "Clicky mechanical switches",
      "Detachable USB cable",
      "Compact, travel-friendly design",
      "Built for competitive gaming feedback",
    ],
    pros: [
      "Sharp, distinct clicky feedback for tactile typists",
      "Detachable cable simplifies transport",
      "Compact TKL footprint",
      "Proven Logitech switch durability",
    ],
    cons: [
      "Loudest switch type here alongside the RisoPhy, disruptive on calls",
      "Wired only",
      "Not hot-swappable",
    ],
    bestFor: "Enthusiasts who specifically want loud, crisp clicky feedback for solo use",
  },
  {
    id: "redragon-hot-swappable-red-25",
    rank: 7,
    badge: "Best Hot-Swappable Budget",
    name: "Redragon Mechanical Gaming Keyboard, Hot-Swappable Red Switch",
    price: "$25.49",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41khzfsV4mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CF3VGQFL?tag=deskfinds0d-20",
    description:
      "This Redragon board pairs quiet-ish red linear switches with hot-swappable sockets at the lowest price in this list, meaning you can pop out the stock switches and try different ones later without soldering. That upgrade path matters for the value proposition, hot-swap support extends a budget keyboard's useful life well past its stock switch feel.\n\nDouble-shot PBT keycaps here are a genuine upgrade over the ABS keycaps found on most keyboards in this price range, resisting shine and wear far better over a year of daily use.",
    specs: [
      "Red linear switches, hot-swappable",
      "Double-shot PBT keycaps",
      "11 programmable RGB backlit modes",
      "Anti-ghosting",
      "Wired connection",
    ],
    pros: [
      "Hot-swappable sockets allow future switch upgrades",
      "PBT keycaps resist shine better than the ABS on similarly priced boards",
      "Very low price for hot-swap support",
      "11 RGB lighting modes included",
    ],
    cons: [
      "Wired only, no wireless option",
      "Build materials are basic outside the keycaps",
      "Stock switches are unbranded, not a premium switch brand",
    ],
    bestFor: "Budget buyers who want room to experiment with different switches later",
  },
  {
    id: "redragon-k668-hot-swap-108",
    rank: 8,
    badge: "Best Full-Size Hot-Swappable",
    name: "Redragon K668 RGB Gaming Keyboard, 108 Keys, Hot-Swappable Red Switch",
    price: "$36.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31qNb+bxSwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CDWP1D58?tag=deskfinds0d-20",
    description:
      "The K668 extends the Redragon hot-swap formula to a full 108-key layout with 4 extra hotkeys, built-in sound-absorbing foam to reduce hollow resonance, and red linear switches for a quiet, consistent keypress. Two included sets of mixed-color keycaps let you customize the look without buying a separate keycap set.\n\nLike its smaller sibling, hot-swap sockets mean the stock red switches can be replaced later, extending the board's usefulness as your switch preferences change over time.",
    specs: [
      "108-key full layout with 4 extra hotkeys",
      "Red linear switches, hot-swappable",
      "Sound-absorbing foam",
      "2 included keycap sets, mixed colors",
      "Wired connection",
    ],
    pros: [
      "Full-size layout with extra hotkeys for media/macro control",
      "Sound-absorbing foam reduces hollow keyboard resonance",
      "Hot-swap sockets allow future switch changes",
      "Two keycap sets included at no extra cost",
    ],
    cons: [
      "Wired only",
      "Larger footprint than the TKL picks in this list",
      "Keycaps included are ABS, not the PBT found on the smaller Redragon pick",
    ],
    bestFor: "Buyers who want a full-size hot-swappable board with extra hotkeys",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Switch type and feel",
    description: "Compared clicky, tactile, linear, and low-profile switches on feedback style and noise output, since switch type is the single biggest factor in how a mechanical keyboard sounds and feels.",
  },
  {
    title: "Noise profile for shared spaces",
    description: "Weighed each keyboard's likely noise level against typical work-from-home and office scenarios, flagging which switch types risk being picked up by a nearby microphone on a video call.",
  },
  {
    title: "Keycap material and durability",
    description: "Checked whether keycaps were ABS, which shines and wears within months of heavy use, or PBT, which holds its texture and color far longer, and weighed that against price.",
  },
  {
    title: "Connection type and latency",
    description: "Compared wired, Bluetooth, and 2.4G wireless options, noting that modern 2.4GHz and Bluetooth mechanical keyboards run at roughly 1ms of added latency, effectively unnoticeable versus wired.",
  },
  {
    title: "Upgrade path and hot-swap support",
    description: "Noted which boards offer hot-swappable switch sockets, letting a buyer change switch feel later without soldering, extending the useful life of a budget keyboard.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Match switch type to your actual environment",
    explanation:
      "Clicky switches like blue or the G PRO's tuned clicky switches produce the loudest, most audible feedback and can be genuinely disruptive when picked up by a nearby microphone during video calls. If you work from home or share a space, a linear or low-profile switch, like the Corsair K70 CORE or Logitech G515, is a far more considerate choice.",
  },
  {
    criterion: "Understand what 'thock' and 'clack' actually mean",
    explanation:
      "In plain terms, a deeper, more muted sound is often called a thock, while a sharper, higher-pitched sound is called a clack or click. Linear switches paired with sound dampening foam, like the Corsair K70 CORE, tend toward a thockier sound, while clicky switches like the RisoPhy or G PRO produce a sharper click on every press.",
  },
  {
    criterion: "PBT keycaps last meaningfully longer than ABS",
    explanation:
      "ABS keycaps, found on most budget and mid-range boards in this list, develop a visible shine on the most-used keys within a few months of daily typing. PBT keycaps, like those on the Redragon hot-swappable pick, resist this wear far longer and are worth prioritizing if keycap longevity matters to you.",
  },
  {
    criterion: "Wireless mechanical latency is no longer a real gaming concern",
    explanation:
      "Modern 2.4GHz and Bluetooth mechanical keyboards, like the Keychron K4 and Logitech G515, run at roughly 1ms of added input latency, which is effectively indistinguishable from a wired connection for both typing and most gaming. Don't rule out wireless mechanical keyboards over outdated lag assumptions.",
  },
  {
    criterion: "Hall effect and rapid trigger are separate from standard mechanical switches",
    explanation:
      "Standard mechanical switches, like the ones in this list, register a keypress at a fixed actuation point. Hall effect and optical switches use magnetic or light-based sensing to allow adjustable actuation points and rapid trigger, a feature aimed specifically at competitive gaming rather than everyday typing or office use.",
  },
  {
    criterion: "Hot-swap sockets extend a budget keyboard's useful life",
    explanation:
      "A hot-swappable board, like either Redragon pick in this list, lets you replace the stock switches later without soldering if your feel or noise preferences change. This is worth prioritizing on a budget purchase since it removes the need to buy an entirely new keyboard down the line.",
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
    subheading: "By Where You'll Use It",
    intro:
      "Switch noise is the single biggest factor competitors gloss over when comparing mechanical keyboards for different environments.",
    table: {
      headers: ["Environment", "Recommended switch type", "Best pick"],
      rows: [
        ["Private room, no calls", "Clicky, any noise level", "RisoPhy 104-Key Blue Switch, Logitech G PRO"],
        ["Shared office or frequent Zoom calls", "Linear or low-profile, quiet", "Corsair K70 CORE TKL, Logitech G515"],
        ["Mixed use, occasional calls", "Tactile, moderate noise", "Keychron K4, Keychron C2"],
        ["Budget with future flexibility", "Hot-swappable, switch to any type later", "Redragon Hot-Swappable, Redragon K668"],
      ],
    },
  },
  {
    subheading: "By Wired vs. Wireless Priority",
    cards: [
      {
        label: "Want zero battery management",
        text: "The Corsair K70 CORE TKL, Keychron C2, and both Redragon picks are wired only, removing any charging concerns entirely.",
      },
      {
        label: "Want desk flexibility with proven low latency",
        text: "The Keychron K4 and Logitech G515 both run wireless at roughly 1ms latency, indistinguishable from wired for typing or gaming.",
      },
      {
        label: "Want a wired fallback just in case",
        text: "The Keychron K4 supports both wireless and wired USB modes, so a dead battery never fully takes it offline.",
      },
    ],
  },
  {
    subheading: "By Layout Size and Desk Space",
    table: {
      headers: ["Layout", "Desk space saved", "Best pick"],
      rows: [
        ["Full-size 104-108 key", "None, full number pad included", "RisoPhy, Keychron C2, Redragon K668"],
        ["96% compact full-size", "Moderate, trimmed bezels", "Keychron K4"],
        ["Tenkeyless (TKL), no number pad", "Significant, frees mouse space", "Logitech G515, Corsair K70 CORE, Logitech G PRO"],
      ],
    },
  },
  {
    subheading: "By Keycap Material Priority",
    intro:
      "ABS keycaps are the default on most boards in this price range, but they visibly shine within months of daily use, while PBT resists wear far longer.",
    cards: [
      {
        label: "Keycap longevity matters most",
        text: "The Redragon Hot-Swappable pick is the only board in this list with double-shot PBT keycaps included at this price.",
      },
      {
        label: "Keycap material is a lower priority",
        text: "The rest of the list ships with ABS keycaps, fine for shorter-term use or if you plan to swap keycaps yourself later.",
      },
    ],
  },
  {
    subheading: "By Gaming vs. Everyday Typing Priority",
    intro:
      "Competitive gaming features like high polling rate and rapid trigger matter far less for everyday typing and office work.",
    table: {
      headers: ["Primary use", "What to prioritize", "Best pick"],
      rows: [
        ["Competitive gaming, fast response", "High polling rate, linear or clicky switches", "Corsair K70 CORE TKL, Logitech G PRO"],
        ["Everyday typing, office work", "Tactile feel, quieter switches", "Keychron K4, Keychron C2"],
        ["Mixed gaming and typing, low-profile comfort", "Short switch travel, wireless", "Logitech G515 Lightspeed TKL"],
      ],
    },
    note: "For true Hall effect rapid trigger, the feature that lets you adjust exactly how far a key must travel before it registers, a dedicated Hall effect keyboard is required rather than any standard mechanical switch in this list.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "How loud are mechanical keyboards compared to normal conversation?",
    a: "It varies significantly by switch type. Clicky switches, like the RisoPhy or Logitech G PRO in this list, produce the sharpest, most audible sound on every press, comparable to or louder than normal conversation at close range. Linear and low-profile switches, like the Corsair K70 CORE or Logitech G515, are noticeably quieter and better suited to shared spaces.",
  },
  {
    q: "What's the difference between Hall effect, optical, and mechanical switches?",
    a: "Standard mechanical switches, used in every pick in this list, register a keypress through a physical metal contact at a fixed point of travel. Hall effect switches use a magnet to sense position, and optical switches use a light beam, both allowing adjustable actuation points and rapid trigger, a feature aimed at competitive gaming rather than typing. None of the picks in this list are Hall effect or optical.",
  },
  {
    q: "Will a mechanical keyboard be picked up by my microphone on video calls?",
    a: "Clicky switches are the most likely to be picked up by a nearby condenser microphone or headset mic. Linear or low-profile switches, like the Corsair K70 CORE TKL or Logitech G515, produce meaningfully less noise and are a safer choice for frequent video calls.",
  },
  {
    q: "What does ABS vs. PBT keycap material actually mean for me?",
    a: "ABS keycaps are cheaper to produce but develop a visible shine on frequently pressed keys within a few months of daily use. PBT keycaps, found on the Redragon Hot-Swappable pick in this list, resist this wear far longer and keep their texture and color for years, though they add cost.",
  },
  {
    q: "Is a wireless mechanical keyboard too laggy for gaming?",
    a: "Not with modern hardware. The Keychron K4 and Logitech G515 in this list both run 2.4GHz or Bluetooth wireless at roughly 1ms of added latency, which is effectively indistinguishable from a wired connection for both typing and the vast majority of gaming use cases.",
  },
  {
    q: "What does hot-swappable mean and is it worth paying for?",
    a: "A hot-swappable keyboard has sockets under the keycaps that let you remove and replace individual switches without soldering. Both Redragon picks in this list support hot-swapping, which is worth prioritizing on a budget keyboard since it lets you change the feel or noise level later without buying an entirely new board.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-wireless-mechanical-keyboards", title: "8 Best Wireless Mechanical Keyboards (2026)" },
  { href: "/guide/best-ergonomic-keyboards-for-wrist-pain-carpal-tunnel", title: "8 Best Ergonomic Keyboards for Wrist Pain and Carpal Tunnel (2026)" },
  { href: "/guide/best-mechanical-keyboard-under-100", title: "Best Mechanical Keyboards Under $100 (2026)" },
];
