export const guideSlug = "best-mechanical-keyboards-for-quiet-typing-office";
export const guideTitle = "8 Best Mechanical Keyboards for Quiet Typing and Office Use in 2026";
export const metaTitle = "Best Mechanical Keyboards for Quiet Typing and Office Use in 2026";
export const metaDescription =
  "8 quiet keyboards for office typing in 2026, from true low-profile mechanical switches to near-silent scissor-switch alternatives. Compare noise level and fit.";
export const mainKeyword = "mechanical keyboard for typing";
export const introParagraphs = [
  "A keyboard for a shared office or an open-plan desk has one non-negotiable requirement that most mechanical keyboard marketing ignores: it can't be heard three desks away. Clicky and even standard tactile switches are loud enough to distract coworkers and get picked up by a nearby conference-call microphone, so the picks below lean toward silent or low-profile mechanical switches, with a couple of genuinely quiet non-mechanical alternatives included and labeled honestly rather than mislabeled to fit the theme.",
  "Below are 8 keyboards we evaluated for quiet office typing, based on product specs, switch type, and real listing details rather than marketing claims, ranging from a $38 budget low-profile mechanical board to a $160 Mac-ready mechanical keyboard with quiet tactile switches.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41FBNsAaL4L._SL500_.jpg";

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
    id: "logitech-mx-mechanical-tactile-graphite",
    rank: 1,
    badge: "Best Overall for Quiet Office Typing",
    name: "Logitech MX Mechanical Wireless Illuminated Keyboard, Tactile (Graphite)",
    price: "$157.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41FBNsAaL4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LK1P1RD?tag=deskfinds0d-20",
    description:
      "The MX Mechanical uses genuine low-profile tactile mechanical switches tuned for quiet operation, which sidesteps the loud bottom-out thud that makes most mechanical keyboards a poor fit for a shared office. Backlit keys and a full-size layout round out a board built specifically for professional desks rather than gaming setups.\n\nIt pairs over Bluetooth or a USB receiver and runs on a rechargeable battery, so there's no dongle-hogging or cable clutter on a small desk. It costs more than a standard membrane keyboard, but the tactile mechanical feel is a real upgrade for anyone who types most of the day.",
    specs: [
      "Full-size layout, wireless (Bluetooth or Logi Bolt receiver)",
      "Low-profile tactile mechanical switches",
      "Backlit keys with auto-adjusting brightness",
      "Rechargeable battery",
    ],
    pros: [
      "Genuine mechanical switches tuned for quiet typing",
      "Backlit keys for low-light offices",
      "Wireless with a rechargeable battery",
      "Full-size layout for spreadsheet-heavy work",
    ],
    cons: [
      "Higher price than membrane office keyboards",
      "Not hot-swappable if a switch fails",
      "Full-size footprint takes up more desk space than a TKL board",
    ],
    bestFor: "Buyers who want a genuinely mechanical, quiet, full-size keyboard for daily office typing",
  },
  {
    id: "logitech-mx-mechanical-mini-mac-space-grey",
    rank: 2,
    badge: "Best Compact Mechanical",
    name: "Logitech MX Mechanical Mini Mac Wireless Keyboard, Low-Profile (Space Grey)",
    price: "$159.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41rK3ndC8VL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LK3JCHX?tag=deskfinds0d-20",
    description:
      "The Mini variant trims the number pad and drops the low-profile mechanical switches into a compact 75 percent layout, which frees up desk space for a mouse without giving up the quiet tactile feel of the full-size MX Mechanical. It's built with Mac keycaps and shortcuts, so it needs no remapping on a Mac desktop.\n\nLike the full-size version, it connects wirelessly and recharges via USB-C, and the smaller footprint makes it easier to fit next to a laptop stand or a second monitor arm on a compact desk.",
    specs: [
      "75% compact layout, no number pad",
      "Low-profile tactile mechanical switches",
      "Mac-native keycaps and shortcuts",
      "Wireless, rechargeable via USB-C",
    ],
    pros: [
      "Compact footprint frees up desk space",
      "Genuine mechanical switches, quiet tactile feel",
      "Mac keycaps out of the box",
      "Wireless with rechargeable battery",
    ],
    cons: [
      "No number pad for spreadsheet-heavy work",
      "Premium price for a compact board",
      "Mac-first layout needs remapping for Windows use",
    ],
    bestFor: "Mac desks that want a quiet compact mechanical keyboard without a number pad",
  },
  {
    id: "logitech-mx-mechanical-mini-mac-pale-grey",
    rank: 3,
    badge: "Best Compact Mechanical, Pale Grey",
    name: "Logitech MX Mechanical Mini Mac Wireless Keyboard, Low-Profile (Pale Grey)",
    price: "$159.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41aQEgCoeRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LK63PKB?tag=deskfinds0d-20",
    description:
      "This is the same MX Mechanical Mini Mac hardware as the Space Grey pick above, in a Pale Grey finish that blends into a lighter desk setup. Low-profile tactile mechanical switches keep bottom-out noise down, and the 75 percent layout keeps the footprint small.\n\nIt's worth choosing this over the Space Grey version purely on color preference, since the switches, wireless connection, and Mac-native shortcuts are otherwise identical.",
    specs: [
      "75% compact layout, no number pad",
      "Low-profile tactile mechanical switches",
      "Mac-native keycaps and shortcuts",
      "Wireless, rechargeable via USB-C",
    ],
    pros: [
      "Lighter finish suits bright desk setups",
      "Genuine mechanical switches, quiet tactile feel",
      "Mac keycaps out of the box",
      "Same compact footprint as the Space Grey version",
    ],
    cons: [
      "No number pad for spreadsheet-heavy work",
      "Premium price for a compact board",
      "Lighter finish shows fingerprints more than darker colors",
    ],
    bestFor: "Buyers who want the MX Mechanical Mini Mac in a lighter finish",
  },
  {
    id: "keychron-b6-pro-ultra-thin-zmk",
    rank: 4,
    badge: "Best Budget Low-Profile Mechanical",
    name: "Keychron B6 Pro Ultra-Thin Wireless Keyboard, Full-Size ZMK, Quiet Typing (Space Gray)",
    price: "$38.24",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/310uk8UP85L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D53P4PBY?tag=deskfinds0d-20",
    description:
      "Keychron built the B6 Pro specifically around quiet typing, pairing an ultra-thin low-profile mechanical design with ZMK firmware for custom keymaps. It keeps a full-size layout with a number pad, which is rare at this price for a low-profile mechanical board.\n\nAt under $40 it's the most affordable genuinely mechanical pick in this list, connecting over 2.4GHz, Bluetooth 5.2, or a wired USB-C cable depending on what a given desk setup needs.",
    specs: [
      "Full-size layout with number pad",
      "Ultra-thin low-profile mechanical switches",
      "ZMK firmware, custom keymap support",
      "2.4GHz / Bluetooth 5.2 / wired USB-C",
    ],
    pros: [
      "Most affordable true mechanical pick in this list",
      "Full-size layout with a number pad",
      "Marketed and tuned specifically for quiet typing",
      "Three connection modes for flexibility",
    ],
    cons: [
      "ZMK keymap customization has a learning curve",
      "Fewer keycap and switch customization options than hot-swap boards",
      "Slim profile means less finger travel than a taller mechanical board",
    ],
    bestFor: "Budget-conscious buyers who still want a genuinely mechanical, full-size quiet keyboard",
  },
  {
    id: "keychron-c2-full-size-wired-mac",
    rank: 5,
    badge: "Best Full-Size Wired Mechanical",
    name: "Keychron C2 Full Size Wired Mechanical Keyboard, Brown Switch",
    price: "$43.31",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31QS87iIEQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09JG7KRC7?tag=deskfinds0d-20",
    description:
      "The Keychron C2 uses tactile brown switches, which land in the middle ground between the audible click of a blue switch and the near-silence of a dedicated silent switch, a reasonable compromise for a private office or a work-from-home desk rather than an open floor plan. A full 104-key layout with a number pad covers spreadsheet work without needing a separate numpad.\n\nIt's a wired-only board with a USB-C braided cable, which trades wireless convenience for a stable connection and one less battery to manage on a busy desk.",
    specs: [
      "Full 104-key layout with number pad",
      "Tactile brown mechanical switches",
      "USB-C braided cable, wired only",
      "ABS retro color keycaps",
    ],
    pros: [
      "Budget-friendly full-size mechanical keyboard",
      "Tactile brown switches are quieter than clicky blues",
      "Wired connection avoids battery management",
      "Compatible with Mac and Windows",
    ],
    cons: [
      "Wired only, no wireless option",
      "Brown switches are quieter than blues but not silent",
      "ABS keycaps wear shinier over time than PBT",
    ],
    bestFor: "Buyers who want an affordable full-size mechanical board and don't mind a wired connection",
  },
  {
    id: "logitech-mx-keys-s-pale-grey",
    rank: 6,
    badge: "Quietest Pick (Non-Mechanical Low-Profile)",
    name: "Logitech MX Keys S Wireless Keyboard, Low Profile Fluid Precise (Pale Grey)",
    price: "$124.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41DpmtQO58L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BKVZK4TH?tag=deskfinds0d-20",
    description:
      "This is worth being upfront about, the MX Keys S is not a mechanical keyboard. It uses Logitech's low-profile scissor switches, which is exactly why it's one of the quietest keyboards in this entire list. For a buyer whose top priority is genuinely silent typing over the mechanical feel, that trade-off is worth including here honestly rather than mislabeling it.\n\nBacklit keys, a stable wireless connection, and a shape tuned for fast typing round out a keyboard built for exactly this office use case, quiet, all-day comfort, just not a mechanical switch underneath.",
    specs: [
      "Full-size layout with number pad",
      "Low-profile scissor switches (not mechanical)",
      "Backlit keys, auto-adjusting brightness",
      "Wireless, rechargeable battery",
    ],
    pros: [
      "One of the quietest keyboards in this list",
      "Comfortable low-profile scissor switches",
      "Backlit for low-light offices",
      "Long battery life on a single charge",
    ],
    cons: [
      "Not a mechanical keyboard despite the mechanical keyboard search intent",
      "No tactile mechanical bump for typists who prefer that feel",
      "Higher price than a typical membrane keyboard",
    ],
    bestFor: "Buyers who prioritize the quietest possible typing over a mechanical switch feel",
  },
  {
    id: "logitech-mx-keys-s-graphite",
    rank: 7,
    badge: "Quietest Pick, Graphite",
    name: "Logitech MX Keys S Wireless Keyboard, Low Profile Fluid Precise (Graphite)",
    price: "$124.50",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/416qftDjzeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BKW3LB2B?tag=deskfinds0d-20",
    description:
      "Same hardware as the Pale Grey MX Keys S above, in a darker Graphite finish for a matched dark desk setup. It's still a low-profile scissor-switch keyboard, not a mechanical one, and belongs in this list for the same reason, its near-silent typing sound.\n\nThe Graphite finish also hides fingerprints and smudges better than lighter colors, which matters on a keyboard that sees daily use in a shared office.",
    specs: [
      "Full-size layout with number pad",
      "Low-profile scissor switches (not mechanical)",
      "Backlit keys, auto-adjusting brightness",
      "Wireless, rechargeable battery",
    ],
    pros: [
      "One of the quietest keyboards in this list",
      "Darker finish hides smudges well",
      "Comfortable low-profile scissor switches",
      "Long battery life on a single charge",
    ],
    cons: [
      "Not a mechanical keyboard despite the mechanical keyboard search intent",
      "No tactile mechanical bump for typists who prefer that feel",
      "Higher price than a typical membrane keyboard",
    ],
    bestFor: "Buyers who want the quietest MX Keys S option in a darker finish",
  },
  {
    id: "logitech-mx-keys-mini-graphite",
    rank: 8,
    badge: "Best Compact Quiet Non-Mechanical Pick",
    name: "Logitech MX Keys Mini Minimalist Wireless Illuminated Keyboard (Graphite)",
    price: "$89.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Zpxs8rO1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B098JPSVKY?tag=deskfinds0d-20",
    description:
      "The MX Keys Mini is the smallest and most affordable pick on this list, and like the MX Keys S above, it's built on quiet low-profile scissor switches rather than mechanical ones. It's included here as an honest, compact option for a small desk where near-silent typing matters more than mechanical feel.\n\nA minimalist 75 percent layout drops the number pad, and backlighting with auto-adjusting brightness rounds out a keyboard that's easy to slide next to a laptop on a shared desk.",
    specs: [
      "75% compact layout, no number pad",
      "Low-profile scissor switches (not mechanical)",
      "Backlit keys, auto-adjusting brightness",
      "Wireless, rechargeable battery",
    ],
    pros: [
      "Smallest, most affordable pick in this list",
      "Near-silent scissor-switch typing",
      "Backlit for low-light use",
      "Compact footprint fits tight desks",
    ],
    cons: [
      "Not a mechanical keyboard despite the mechanical keyboard search intent",
      "No number pad",
      "Smaller keys than a full-size board, which some typists find cramped",
    ],
    bestFor: "Small desks that want the quietest possible compact keyboard",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Switch type and noise honesty",
    description: "Checked each listing's actual switch technology, low-profile mechanical, standard tactile mechanical, or scissor-switch, since noise level depends far more on switch type than on marketing labels like \"quiet\" or \"silent.\"",
  },
  {
    title: "Bottom-out noise, not just stem noise",
    description: "Weighed whether a keyboard's quietness comes only from a dampened switch stem or also accounts for the keycap-on-plate impact sound that a silent switch alone doesn't eliminate.",
  },
  {
    title: "Office layout fit",
    description: "Considered how each pick performs across different office contexts, an open-plan desk a meter from a coworker, a private office, and a home office on video calls, since \"quiet enough\" changes by setting.",
  },
  {
    title: "Build and layout for daily typing",
    description: "Compared full-size versus compact layouts, keycap material, and wireless versus wired connections for buyers typing most of the workday.",
  },
  {
    title: "Value for price",
    description: "Weighed switch quality and features against price, from the $38 budget mechanical pick to the $160 premium Mac-ready mechanical board.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Silent switches only quiet the stem, not the bottom-out thud",
    explanation:
      "A silent mechanical switch dampens the internal stem noise, but the keycap still hits the plate on every keystroke, producing a lower-pitched thud that a stem-only dampener doesn't remove. Pairing a silent-switch board with a desk mat under the keyboard and, for hot-swappable boards, a foam switch pad addresses the full sound, not just half of it.",
  },
  {
    criterion: "Low-profile switches aren't quiet for the same reason as silent switches",
    explanation:
      "A low-profile mechanical switch is quieter mainly because it has shorter travel, less distance for the keycap to fall and strike the plate, while a silent switch is quieter because its stem is dampened. Both effects can stack, but they aren't interchangeable trade-offs, and understanding which one a keyboard relies on tells you what it will and won't fix.",
  },
  {
    criterion: "Coworker distance changes what counts as quiet",
    explanation:
      "A tactile brown switch that's unnoticeable in a private office can be genuinely distracting to a coworker sitting a meter away in an open-plan layout. If your desk is in an open floor plan or a shared cubicle row, prioritize the low-profile mechanical or scissor-switch picks in this list over a standard tactile board.",
  },
  {
    criterion: "A boom-arm microphone can still pick up a quiet keyboard",
    explanation:
      "Even a genuinely quiet keyboard can register on a condenser microphone mounted close on a boom arm during video calls, while a laptop's built-in mic usually won't catch the same typing. If you're frequently on calls with a dedicated mic, test your typing on mute first rather than assuming a \"quiet\" keyboard is inaudible to callers.",
  },
  {
    criterion: "Foam case modding is a real, low-cost noise fix",
    explanation:
      "Stuffing foam inside a hot-swappable keyboard's case is a common, inexpensive way to reduce the hollow, resonant sound many keyboards produce, separate from switch choice entirely. It doesn't apply to sealed, non-hot-swappable boards like the picks in this list, but it's worth knowing if you later buy a moddable mechanical keyboard.",
  },
  {
    criterion: "\"Mechanical\" isn't always accurate on quiet-typing listings",
    explanation:
      "Several keyboards marketed toward quiet office typing, including some in this list, actually use scissor or low-profile switches rather than true mechanical ones. If a genuine mechanical feel matters to you as much as quietness, check the switch type in the listing specs, not just the product title.",
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
    subheading: "By Office Layout",
    intro:
      "How much noise is acceptable depends heavily on how close the nearest coworker sits, not just the keyboard itself.",
    table: {
      headers: ["Layout", "Noise tolerance", "Best pick"],
      rows: [
        ["Open-plan desk, coworker within 1-2 meters", "Lowest tolerance", "Logitech MX Keys S (either color)"],
        ["Private office or enclosed cubicle", "Moderate tolerance", "Keychron C2 (Brown switch)"],
        ["Home office, occasional video calls", "Moderate, mic-aware", "Logitech MX Mechanical (Graphite)"],
        ["Shared home desk, small footprint needed", "Lowest tolerance, compact", "Logitech MX Keys Mini"],
      ],
    },
  },
  {
    subheading: "Do You Need a True Mechanical Feel or Just Quiet?",
    cards: [
      {
        label: "Want the actual mechanical switch feel, quiet or not",
        text: "The Logitech MX Mechanical line and the Keychron B6 Pro and C2 use real low-profile or standard mechanical switches, giving genuine tactile feedback.",
      },
      {
        label: "Only care about minimizing noise, mechanical feel is optional",
        text: "The Logitech MX Keys S and MX Keys Mini use scissor switches, not mechanical ones, but they're among the quietest keyboards on the market and cost less than the premium MX Mechanical boards.",
      },
      {
        label: "Want a full-size layout with a number pad",
        text: "The MX Mechanical (full-size), Keychron B6 Pro, and Keychron C2 all keep the number pad; the Mini variants and MX Keys Mini drop it for a smaller footprint.",
      },
      {
        label: "Need Mac-native shortcuts out of the box",
        text: "Both MX Mechanical Mini Mac colorways and the Keychron C2 are Mac-compatible without remapping.",
      },
    ],
  },
  {
    subheading: "By Budget",
    intro:
      "Prices in this list span roughly $38 to $160, and the cheapest options are still genuinely mechanical.",
    table: {
      headers: ["Budget", "Best pick", "Why"],
      rows: [
        ["Under $50", "Keychron B6 Pro", "Cheapest true mechanical pick, full-size with number pad"],
        ["Under $50, wired OK", "Keychron C2", "Full 104-key mechanical layout, tactile brown switches"],
        ["$90-$130, quietest possible", "Logitech MX Keys Mini or MX Keys S", "Near-silent scissor switches, not mechanical"],
        ["$150+", "Logitech MX Mechanical (full-size or Mini Mac)", "Premium build with genuine quiet mechanical switches"],
      ],
    },
  },
  {
    subheading: "Full Quiet Solution, Not Just a Quiet Switch",
    intro:
      "A quiet switch alone doesn't eliminate every source of typing noise, especially the keycap-on-plate bottom-out thud.",
    table: {
      headers: ["Noise source", "Fix", "Extra cost"],
      rows: [
        ["Switch stem click", "Choose a low-profile mechanical or silent switch board", "Included in the keyboard price"],
        ["Keycap bottom-out thud", "Add a desk mat under the keyboard", "$10-20"],
        ["Hollow case resonance", "Foam mod (hot-swappable boards only)", "Under $10, DIY"],
        ["Microphone pickup on calls", "Mute during typing-heavy moments on a boom-arm mic setup", "Free"],
      ],
    },
    note: "None of the picks in this list are hot-swappable, so a foam case mod isn't an option for any of them, factor that in if you're chasing the absolute quietest possible setup and are willing to buy a moddable board instead.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "Are all the keyboards in this list actually mechanical?",
    a: "No, and we say so directly in each product description. The Logitech MX Mechanical and MX Mechanical Mini Mac models, the Keychron B6 Pro, and the Keychron C2 use genuine mechanical switches. The Logitech MX Keys S and MX Keys Mini use low-profile scissor switches, not mechanical ones, and are included because they're genuinely among the quietest keyboards available, not because they match the mechanical keyboard label.",
  },
  {
    q: "What actually makes a keyboard quiet, the switch or something else?",
    a: "Two separate things contribute. A silent switch dampens the internal stem noise on the way down, while a low-profile switch is quieter mainly because it has shorter travel, less distance for the keycap to fall before striking the plate. Neither one eliminates the keycap-on-plate bottom-out thud entirely, which is why a desk mat under the keyboard helps regardless of switch type.",
  },
  {
    q: "Will a quiet mechanical keyboard still be picked up by my microphone on video calls?",
    a: "It's possible, especially with a condenser microphone mounted close on a boom arm, even though a laptop's built-in mic usually won't catch the same typing. If quiet calls matter more than typing feel, mute yourself during typing-heavy stretches or lean toward the quietest picks in this list, the MX Keys S or MX Keys Mini.",
  },
  {
    q: "Is a tactile brown switch quiet enough for an open-plan office?",
    a: "It's quieter than a clicky blue switch but louder than a true silent or low-profile switch. In a private office it's usually fine, but in an open-plan layout with a coworker sitting within a meter or two, a low-profile mechanical pick or a scissor-switch board like the MX Keys S will draw less attention.",
  },
  {
    q: "Can I mod any of these keyboards with foam to reduce noise further?",
    a: "Not the picks in this list. Foam case modding, stuffing sound-absorbing foam inside the case to reduce hollow resonance, only works on hot-swappable keyboards with an accessible internal case, and none of the boards here are built that way. If deep noise customization matters to you, that's a reason to look at a separate hot-swappable mechanical board instead.",
  },
  {
    q: "Which pick is best if I want a genuinely mechanical keyboard on a tight budget?",
    a: "The Keychron B6 Pro at $38.24 is the cheapest true mechanical pick in this list, and it's specifically marketed and tuned for quiet typing with a full-size layout including a number pad. The Keychron C2 is a close second at $43.31 if you don't mind a wired-only connection.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mechanical-keyboard-and-mouse-combos", title: "Best Mechanical Keyboard and Mouse Combos (2026)" },
  { href: "/guide/best-mechanical-keyboards-for-mac", title: "Best Mechanical Keyboards for Mac (2026)" },
  { href: "/guide/best-mechanical-keyboard-under-100", title: "Best Mechanical Keyboard Under $100 (2026)" },
];
