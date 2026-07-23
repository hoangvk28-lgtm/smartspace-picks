export const guideSlug = "best-mechanical-keyboards-with-number-pad";
export const guideTitle = "7 Best Mechanical Keyboards with Number Pad in 2026";
export const metaTitle = "Best Mechanical Keyboards with Number Pad in 2026 (Full-Size Picks)";
export const metaDescription =
  "7 best mechanical keyboards with a number pad in 2026, from a budget 104-key board to full-size wireless picks. Compare layout, switches, and price.";
export const mainKeyword = "mechanical keyboard with number pad";
export const introParagraphs = [
  "A mechanical keyboard with a number pad means a genuinely full-size or 104-108 key layout, not a tenkeyless or 75 percent board with the numpad marketed as optional. That distinction matters more than most listings let on, since a lot of full-size looking keyboards on Amazon quietly drop the numpad to save desk space, and a board that keeps it needs roughly 4 extra inches of desk width to sit flat next to a mouse.",
  "Below are 7 mechanical keyboards we evaluated that genuinely include a full numpad based on verified key counts and layout descriptions in their real listings, ranging from a $28.99 104-key budget board to a $157 low-profile wireless option, so spreadsheet and data-entry work stays fast without reaching for a separate numpad.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "9 min";
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
    id: "risophy-104-key-numpad",
    rank: 1,
    badge: "Best Budget",
    name: "RisoPhy 104-Key Mechanical Gaming Keyboard",
    price: "$28.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09TR4Y91J?tag=deskfinds0d-20",
    description:
      "The RisoPhy is a genuine 104-key full-size board, so the numpad is not an afterthought bolted onto a smaller layout. Blue switches give it an audibly clicky feel, which is worth knowing if you plan to use the numpad in a shared office or on video calls.\n\nAn ultra-slim ABS keycap profile keeps the overall footprint low, and spill resistance plus anti-ghosting are useful basics at this price. It is the pick for buyers who want a real numpad without spending close to $100 on it.",
    specs: [
      "104-key full-size layout",
      "Blue clicky switches",
      "RGB LED backlight",
      "Anti-ghosting, spill-resistant",
      "Wired USB connection",
    ],
    pros: [
      "Cheapest genuinely full-size numpad option in this list",
      "104-key layout confirmed, not a marketing approximation",
      "Spill-resistant and anti-ghosting at a budget price",
      "Ultra-slim keycap profile",
    ],
    cons: [
      "Blue switches are the loudest switch type, poor for shared spaces",
      "ABS keycaps wear and shine faster than PBT",
      "Wired only, no wireless option",
    ],
    bestFor: "Buyers who want a confirmed full numpad on the lowest budget",
  },
  {
    id: "keychron-v6-knob-numpad",
    rank: 2,
    badge: "Best with Volume Knob",
    name: "Keychron V6 Knob Version Full-Size Mechanical Keyboard",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GdrDKwGaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B2DMKFM5?tag=deskfinds0d-20",
    description:
      "Keychron lists the V6 Knob Version as a genuine full-size layout, and it adds a physical volume knob above the numpad, a detail most full-size boards skip entirely. Hot-swappable Keychron K Pro Brown switches mean you can change switch feel later without a soldering iron.\n\nQMK and VIA support opens up full key remapping, useful if you want to repurpose numpad keys for macros. It runs wired only, so it is built for a stationary desk setup rather than a laptop that moves around.",
    specs: [
      "Full-size layout with numpad",
      "Hot-swappable Keychron K Pro Brown switches",
      "Physical volume knob",
      "QMK/VIA programmable",
      "Wired, Mac/Windows/Linux compatible",
    ],
    pros: [
      "Confirmed full-size layout with a dedicated volume knob",
      "Hot-swappable switches for later customization",
      "Full QMK/VIA remapping support",
      "Cross-platform compatibility",
    ],
    cons: [
      "Wired only, no Bluetooth option on this model",
      "Pricier than the Redragon and RisoPhy picks",
      "Brown switches still register a light tactile bump, not silent",
    ],
    bestFor: "Buyers who want remapping, hot-swap switches, and a volume knob together",
  },
  {
    id: "keychron-v6-max-wireless-numpad",
    rank: 3,
    badge: "Best Wireless",
    name: "Keychron V6 Max Wireless Full-Size Mechanical Keyboard",
    price: "$119.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/413s7zLyA1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D14L7VZ6?tag=deskfinds0d-20",
    description:
      "The V6 Max drops the cable in favor of 2.4GHz and Bluetooth connectivity while keeping the confirmed full-size layout and numpad intact, which is rarer than it should be since most brands cut the numpad first to shrink a wireless board. Hot-swappable Gateron Brown switches keep the same customization path as the wired V6.\n\nQMK support carries over for full remapping, and RGB backlighting is included. This is the pick if your desk setup depends on going cable-free without giving up numpad functionality.",
    specs: [
      "Full-size layout with numpad",
      "2.4GHz + Bluetooth wireless",
      "Hot-swappable Gateron Brown switches",
      "QMK programmable, RGB backlight",
      "Mac/Windows/Linux compatible",
    ],
    pros: [
      "Confirmed full-size wireless layout, numpad intact",
      "Dual 2.4GHz and Bluetooth connectivity",
      "Hot-swappable switches for future changes",
      "Full QMK remapping support",
    ],
    cons: [
      "Most expensive pick in this list alongside the Banana switch variant",
      "Wireless full-size boards drain battery faster with RGB left on",
      "Brown switches are tactile, not a silent switch type",
    ],
    bestFor: "Buyers who want a cable-free desk without losing the numpad",
  },
  {
    id: "keychron-v6-wired-numpad",
    rank: 4,
    badge: "Best Hot-Swappable Value",
    name: "Keychron V6 Wired Full-Size Mechanical Keyboard",
    price: "$89.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41kuxJTAsdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B2DPFWGR?tag=deskfinds0d-20",
    description:
      "This is the same confirmed full-size V6 platform as the Knob Version without the knob, which brings the price down while keeping hot-swappable Keychron K Pro Brown switches and full QMK/VIA support. The frosted, semi-translucent case is the main cosmetic difference from the solid-black knob variant.\n\nIt stays wired only, which keeps latency and price down compared to the wireless V6 Max. For buyers who want the V6's build and remapping without paying for a knob or wireless radio, this is the more efficient choice.",
    specs: [
      "Full-size layout with numpad",
      "Hot-swappable Keychron K Pro Brown switches",
      "Frosted, semi-translucent case",
      "QMK/VIA programmable",
      "Wired, Mac/Windows/Linux compatible",
    ],
    pros: [
      "Same confirmed full-size platform as the Knob Version, lower price",
      "Hot-swappable switches included",
      "Full QMK/VIA remapping",
      "Distinctive frosted case finish",
    ],
    cons: [
      "No volume knob or wireless option",
      "Brown switches are tactile, not silent",
      "Translucent case shows dust more than a solid finish",
    ],
    bestFor: "Buyers who want the V6 platform's numpad and hot-swap switches at a lower price",
  },
  {
    id: "redragon-k668-108key-numpad",
    rank: 5,
    badge: "Best Budget RGB",
    name: "Redragon K668 108-Key Mechanical Keyboard",
    price: "$36.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31qNb+bxSwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CDWP1D58?tag=deskfinds0d-20",
    description:
      "The Redragon K668 is a confirmed 108-key layout, 4 keys more than a standard 104-key full-size board thanks to extra programmable hotkeys above the numpad. Red linear switches keep it quieter than the clicky RisoPhy while still being budget-friendly.\n\nSound-absorbing foam inside the case and hot-swappable sockets are unusual inclusions at this price point, and it ships with two full sets of mixed-color keycaps for easy customization. It is the strongest value pick for buyers who want a full numpad plus extra hotkeys.",
    specs: [
      "108-key layout with numpad and 4 extra hotkeys",
      "Red linear switches, hot-swappable",
      "Sound-absorbing foam inside the case",
      "2 sets of mixed-color keycaps included",
      "Wired USB connection",
    ],
    pros: [
      "Confirmed 108-key layout with extra hotkeys beyond a standard numpad",
      "Sound-absorbing foam and hot-swappable sockets at a budget price",
      "Two keycap sets included for customization",
      "Red linear switches are quieter than clicky Blue",
    ],
    cons: [
      "Wired only",
      "Not remappable via QMK/VIA like the Keychron picks",
      "Foam dampening reduces but does not eliminate switch and stab noise",
    ],
    bestFor: "Buyers who want the most numpad and hotkeys per dollar",
  },
  {
    id: "keychron-v6-max-banana-numpad",
    rank: 6,
    badge: "Best for Linear Switch Fans",
    name: "Keychron V6 Max Wireless Full-Size Mechanical Keyboard (Banana Switch)",
    price: "$119.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31CBQMyMfsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DM8T2YZY?tag=deskfinds0d-20",
    description:
      "This is the same confirmed full-size V6 Max wireless platform, swapped to Gateron Banana switches, a smooth linear switch instead of the tactile Brown used on the other V6 variants. Linear switches suit fast, repeated numpad entry like data-entry or spreadsheet work better than a tactile bump does.\n\nConnectivity, QMK support, and hot-swap sockets carry over unchanged from the Brown-switch V6 Max. Pick this version specifically if you know you prefer a linear feel over a tactile one for numeric entry.",
    specs: [
      "Full-size layout with numpad",
      "Hot-swappable Gateron Banana linear switches",
      "2.4GHz + Bluetooth wireless",
      "QMK programmable, RGB backlight",
      "Mac/Windows/Linux compatible",
    ],
    pros: [
      "Confirmed full-size wireless layout with numpad",
      "Smooth linear switch better suited to fast repeated numpad entry",
      "Hot-swappable if switch preference changes later",
      "Same QMK remapping support as the Brown-switch variant",
    ],
    cons: [
      "Same premium price as the Brown-switch V6 Max",
      "Linear switches give less physical feedback than tactile Brown",
      "Wireless full-size boards need more frequent charging with RGB on",
    ],
    bestFor: "Buyers who specifically want a linear switch feel for fast numeric entry",
  },
  {
    id: "logitech-mx-mechanical-numpad",
    rank: 7,
    badge: "Best Low-Profile Premium",
    name: "Logitech MX Mechanical Wireless Illuminated Keyboard",
    price: "$157.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41FBNsAaL4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LK1P1RD?tag=deskfinds0d-20",
    description:
      "The standard MX Mechanical, as opposed to Logitech's separate MX Mechanical Mini, ships as a full-size board with a numpad, built around a low-profile tactile switch rather than the taller switches used on the Keychron and Redragon picks in this list. That low-profile design suits buyers who want a slimmer typing angle without dropping to a compact layout.\n\nMulti-device Bluetooth pairing and Logi Bolt USB receiver support let it switch between up to 3 computers instantly, a feature none of the other picks here offer. It is the most expensive board in this list, but the build quality and low-profile feel are the trade you are paying for.",
    specs: [
      "Full-size layout with numpad",
      "Low-profile tactile mechanical switches",
      "Multi-device Bluetooth + Logi Bolt receiver",
      "Backlit, illuminated keys",
      "Rechargeable battery",
    ],
    pros: [
      "Confirmed full-size numpad in a slimmer low-profile body",
      "Multi-device switching across up to 3 computers",
      "Premium build and illuminated keys",
      "Low-profile switches feel closer to a laptop keyboard",
    ],
    cons: [
      "Most expensive pick in this list",
      "Not hot-swappable or QMK programmable like the Keychron boards",
      "Low-profile switch feel is a different typing experience than standard mechanical switches",
    ],
    bestFor: "Buyers who want a premium, low-profile full-size numpad board with multi-device switching",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Verified layout and key count",
    description: "Checked each listing's real title and key count to confirm a genuine full-size or 104-108 key layout with a numpad, rather than assuming from category placement alone.",
  },
  {
    title: "Switch type and feel",
    description: "Compared clicky Blue, tactile Brown, linear Red and Banana, and low-profile tactile switches for how each one suits fast, repeated numpad entry.",
  },
  {
    title: "Connectivity options",
    description: "Weighed wired-only boards against 2.4GHz and Bluetooth wireless options, since a full-size wireless board needs more desk space and battery management than a wired one.",
  },
  {
    title: "Customization and remapping",
    description: "Noted which boards support hot-swappable switches and QMK/VIA remapping versus fixed-switch, non-programmable designs.",
  },
  {
    title: "Value for price",
    description: "Weighed confirmed numpad functionality, switch quality, and extras like a volume knob or multi-device pairing against price, from a $28.99 wired budget board to a $157 premium wireless pick.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Confirm the numpad is real, not implied",
    explanation:
      "A lot of keyboards marketed loosely as \"full-size\" are actually tenkeyless or 75 percent boards without a numpad at all. Check the listed key count directly, 104 keys is standard full-size, 108 adds extra hotkeys, and anything under 100 keys almost always means no numpad.",
  },
  {
    criterion: "A full-size numpad pushes your mouse 15-20cm to the right",
    explanation:
      "Compared to a tenkeyless board, a full numpad adds roughly 4 inches of width, which forces your mouse hand to reach further right on every use. If you use the numpad rarely but reach for your mouse constantly, consider a tenkeyless board plus a separate standalone numpad instead, since it lets you remove the numpad and keep the mouse closer.",
  },
  {
    criterion: "Match switch type to how you use the numpad",
    explanation:
      "Linear switches like Red or Banana suit fast, repeated numeric entry such as spreadsheet or data-entry work, since there is no tactile bump interrupting rapid presses. Tactile Brown switches give more physical feedback per keystroke, useful if you want confirmation you actually pressed the key, while clicky Blue switches are the loudest option and worth avoiding in shared offices.",
  },
  {
    criterion: "Stabilizers matter more on full-size boards",
    explanation:
      "A full-size layout has more large keys than a tenkeyless board, the numpad's 0 key, numpad Enter, and numpad Plus all use stabilizers in addition to the spacebar. A budget full-size board with rattly stabilizers will sound noticeably worse overall than a budget tenkeyless board, so factor stabilizer quality into noise expectations, not just switch type.",
  },
  {
    criterion: "Numpad keys can feel different from the main keys",
    explanation:
      "Numpad keys get used less often than the main alpha cluster, so switches there are less broken in and can feel stiffer or slightly inconsistent even on an otherwise smooth board. This evens out with regular use, but it is worth knowing before assuming a board has a manufacturing defect.",
  },
  {
    criterion: "Wireless full-size boards need more frequent charging",
    explanation:
      "A full-size wireless keyboard has more keys and typically more RGB draw than a tenkeyless wireless board from the same brand and tier, which shortens battery life between charges. If battery anxiety bothers you, a wired full-size board removes the variable entirely.",
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
    subheading: "Full-Size vs a TKL Board Plus a Standalone Numpad",
    intro:
      "Before buying any full-size board, consider whether you actually need the numpad attached, or whether a smaller keyboard plus a separate numpad fits your desk and mouse reach better.",
    table: {
      headers: ["Your situation", "Better approach", "Best pick"],
      rows: [
        ["Use the numpad daily for data entry or accounting", "Full-size, attached numpad", "Redragon K668 or RisoPhy 104-Key"],
        ["Use the numpad occasionally, want mouse closer most of the time", "TKL board + separate standalone numpad (sold separately)", "Not in this list, consider pairing a TKL board with a dedicated numpad"],
        ["Want numpad plus programmability", "Full-size, hot-swap + QMK", "Keychron V6 Wired or V6 Max"],
        ["Want the numpad but a slimmer typing feel", "Full-size, low-profile switches", "Logitech MX Mechanical"],
      ],
    },
    note: "If you rarely touch the numpad, a tenkeyless board with a removable standalone numpad keeps your mouse closer on a day-to-day basis while still letting you plug the numpad back in when you need it.",
  },
  {
    subheading: "By Switch Feel You Want",
    cards: [
      {
        label: "Fast, repeated numeric entry",
        text: "Linear switches like the Red switch on the Redragon K668 or the Banana switch on the Keychron V6 Max have no tactile bump slowing down rapid keystrokes.",
      },
      {
        label: "Physical feedback on every press",
        text: "Tactile Brown switches on the Keychron V6, V6 Knob, and V6 Max give a noticeable bump that confirms each keystroke without going fully clicky.",
      },
      {
        label: "Loudest, most tactile click",
        text: "The RisoPhy's Blue switches are the clickiest option here, best suited to a private room rather than a shared office.",
      },
      {
        label: "Slimmer, laptop-like typing feel",
        text: "The Logitech MX Mechanical's low-profile tactile switches sit closer to a laptop keyboard's travel than the taller Keychron and Redragon switches.",
      },
    ],
  },
  {
    subheading: "By Connectivity Needs",
    table: {
      headers: ["Need", "Recommended connection", "Best pick"],
      rows: [
        ["Lowest latency, no battery to manage", "Wired only", "RisoPhy 104-Key, Redragon K668, Keychron V6 Wired"],
        ["Cable-free desk, switch feel flexibility", "Wireless, hot-swappable", "Keychron V6 Max (Brown or Banana switch)"],
        ["Switch between multiple computers instantly", "Multi-device Bluetooth pairing", "Logitech MX Mechanical"],
      ],
    },
  },
  {
    subheading: "By Budget",
    intro:
      "Prices in this list span from under $30 to over $150, and the jump in price generally buys wireless connectivity, hot-swap sockets, or a premium low-profile feel rather than a bigger numpad.",
    table: {
      headers: ["Budget", "What you get", "Best pick"],
      rows: [
        ["Under $40", "Confirmed full numpad, wired, basic switches", "RisoPhy 104-Key ($28.99), Redragon K668 ($36.99)"],
        ["$85-$120", "Hot-swappable switches, QMK remapping, some wireless", "Keychron V6 Wired ($89.99), V6 Knob ($99.99), V6 Max ($119.99)"],
        ["$150+", "Premium build, multi-device switching, low-profile feel", "Logitech MX Mechanical ($157.00)"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "How do I know if a mechanical keyboard actually has a number pad?",
    a: "Check the confirmed key count in the listing, not just the word \"full-size\" in the title. A genuine full-size board is 104 keys, and some boards like the Redragon K668 add a few more for extra hotkeys at 108 keys. Anything under 100 keys, including tenkeyless (87-88 keys) or 75 percent boards, does not include a numpad.",
  },
  {
    q: "Does a numpad make my mouse harder to reach?",
    a: "Yes. A full-size numpad adds roughly 4 inches of width compared to a tenkeyless board, which pushes your mouse hand 15-20cm further right and can cause repeated reaching discomfort over long sessions. If you only use the numpad occasionally, a tenkeyless board paired with a separate standalone numpad keeps your mouse closer most of the time while still giving you numpad access when needed.",
  },
  {
    q: "What switch type is best for numpad-heavy work like data entry?",
    a: "Linear switches, like the Red switch on the Redragon K668 or the Banana switch on the Keychron V6 Max, have no tactile bump, which suits fast, repeated numeric entry better than a tactile or clicky switch. Tactile Brown switches give more feedback per press if you prefer confirmation you struck the key, and clicky Blue switches are the loudest option, best avoided in shared spaces.",
  },
  {
    q: "Why do some full-size keyboards sound worse than tenkeyless ones at the same price?",
    a: "A full-size board has more large stabilized keys than a tenkeyless board, including the numpad's 0 key, Enter, and Plus keys, on top of the spacebar. A budget full-size board with poor-quality stabilizers will produce more rattle overall than a budget tenkeyless board, so stabilizer quality affects sound as much as the switch type itself.",
  },
  {
    q: "Is a wireless full-size keyboard worth it over a wired one?",
    a: "Wireless removes cable clutter, but a full-size wireless board has more keys and typically more RGB draw than a tenkeyless wireless board, which shortens battery life between charges. If you want the numpad without managing a battery, a wired option like the RisoPhy or Redragon K668 removes that variable entirely.",
  },
  {
    q: "Are numpad keys different from the main keyboard keys?",
    a: "Numpad keys get used less often than the main alpha cluster, so their switches and stabilizers are less broken in and can feel slightly stiffer when a board is new. This typically evens out with regular use rather than indicating a defect, but it is worth knowing going in.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-quiet-mechanical-keyboard-switches", title: "Best Quiet Mechanical Keyboard Switches (2026)" },
  { href: "/guide/best-mechanical-keyboards", title: "Best Mechanical Keyboards (2026)" },
  { href: "/guide/best-wireless-mechanical-keyboards", title: "Best Wireless Mechanical Keyboards (2026)" },
  { href: "/guide/best-mechanical-keyboard-under-100", title: "Best Mechanical Keyboards Under $100 (2026)" },
];
