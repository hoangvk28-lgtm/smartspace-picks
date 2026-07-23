export const guideSlug = "best-mechanical-keyboards-under-60-100-budget";
export const guideTitle = "2 Best Mechanical Keyboards Under $60/$100 Budget in 2026";
export const metaTitle = "Best Budget Mechanical Keyboards Under $60/$100 in 2026";
export const metaDescription =
  "2 genuinely mechanical keyboards verified under $60 and $100, compared on switch quality, hot-swap sockets, and firmware support for budget buyers.";
export const mainKeyword = "mechanical keyboard cheap";
export const introParagraphs = [
  "A lot of Amazon listings labeled mechanical keyboard cheap are actually membrane boards using the word loosely, and switch quality at the true budget tier is rarely discussed honestly, lesser-known or clone switches can feel inconsistent even when the spec sheet says mechanical. So this list only includes the picks that are genuinely mechanical per their real product listings and verifiably priced under $100, rather than padding the count with membrane keyboards mislabeled as mechanical.",
  "Below are 2 mechanical keyboards we evaluated on switch feel, hot-swap socket quality, and firmware support, a $56.79 full-size wired board and a $66.49 hot-swappable wireless 75% board, both genuinely mechanical and both under the $100 ceiling.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41gvYA4qsmL._SL500_.jpg";

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
    id: "aula-f75-pro-hotswap",
    rank: 1,
    badge: "Best Hot-Swap Wireless Under $100",
    name: "AULA F75 Pro Wireless Mechanical Keyboard, 75% Hot Swappable",
    price: "$66.49",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41gvYA4qsmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D14N2QZF?tag=deskfinds0d-20",
    description:
      "The AULA F75 Pro sits in the $60 to $100 tier and adds features that are genuinely rare at this price, hot-swappable sockets, pre-lubed switches from the factory, and a rotary knob for volume control. Pre-lubing at this price point is a real differentiator since budget hot-swap sockets can otherwise develop loose contact or bent pins after a few switch swaps.\n\nIt connects over 2.4GHz, USB-C, or Bluetooth 5.0, giving it more flexibility than most budget boards that only offer one connection type. The 75% layout keeps arrow keys and a few navigation keys while trimming the numpad, a smaller learning curve than a 60% board if you're used to a full-size layout.",
    specs: [
      "75% layout, hot-swappable sockets",
      "Pre-lubed Reaper switches",
      "2.4GHz / USB-C / Bluetooth 5.0",
      "RGB backlighting, rotary volume knob",
      "PBT side-printed keycaps",
    ],
    pros: [
      "Genuinely hot-swappable with pre-lubed switches out of the box",
      "3 connection modes in one board",
      "75% layout keeps arrow keys, easier transition than 60%",
      "Rotary knob adds physical volume control",
    ],
    cons: [
      "Above the $60 tier, closer to the $100 ceiling",
      "Fewer keycap set options for the compact right-side cluster",
      "Wireless polling rate for gaming is not specified in the listing",
    ],
    bestFor: "Buyers who want hot-swap flexibility and wireless in one budget board",
  },
  {
    id: "logitech-g413-se-full-size",
    rank: 2,
    badge: "Best Wired Full-Size Under $60",
    name: "Logitech G413 SE Full-Size Mechanical Gaming Keyboard",
    price: "$56.79",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31rtIUUw7bL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08Z6X4NK3?tag=deskfinds0d-20",
    description:
      "The Logitech G413 SE is the cheaper of these 2 picks and the only one under the $60 line, a solid full-size mechanical board from an established brand with a track record for firmware and driver support that smaller budget brands often can't match. That established support matters more than it sounds, community and proprietary software from lesser-known brands is frequently abandoned after a couple of years, while Logitech's software footprint has stayed maintained for years.\n\nIt is wired only and does not offer hot-swap sockets, so the switches are fixed for the life of the board, a tradeoff worth knowing if you want to experiment with switch feel later. In exchange, you get a full numpad and dedicated arrow keys with zero learning curve if you're moving from any standard full-size keyboard.",
    specs: [
      "Full-size layout with numpad",
      "Wired USB connection",
      "Fixed mechanical switches, no hot-swap",
      "Aluminum-alloy top case",
      "Logitech G HUB software support",
    ],
    pros: [
      "Cheapest genuinely mechanical pick in this list",
      "Full-size layout, no learning curve for numpad users",
      "Backed by an established brand's longer-term software support",
      "Aluminum-alloy top case at this price point",
    ],
    cons: [
      "No hot-swap sockets, switches are fixed",
      "Wired only, no wireless option",
      "Full-size footprint pushes the mouse further right",
    ],
    bestFor: "Buyers who want the cheapest reliable full-size mechanical board with established software support",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Genuinely mechanical, verified per listing",
    description: "Cross-checked each product's real Amazon title and description to confirm true mechanical switches rather than a membrane board using the word mechanical loosely, a common mislabeling at this price tier.",
  },
  {
    title: "Switch and hot-swap socket quality",
    description: "Noted whether switches ship pre-lubed and whether the board offers hot-swap sockets at all, since cheap sockets can develop loose contact after repeated swaps.",
  },
  {
    title: "Verified price under the $100 ceiling",
    description: "Confirmed each listed price sits under $100 at time of research, and separately flagged which pick also clears the stricter $60 line.",
  },
  {
    title: "Firmware and software longevity",
    description: "Weighed established-brand software support against smaller-brand proprietary tools, which are more likely to be abandoned within a couple of years.",
  },
  {
    title: "Value for price",
    description: "Weighed connection flexibility, hot-swap capability, and layout against price across the two picks that survived the mechanical-vs-membrane filtering.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Many budget mechanical keyboard listings are actually membrane",
    explanation:
      "A large share of Amazon listings using the phrase mechanical keyboard in the title are membrane boards underneath, especially in the sub-$30 range. Always check the listing's switch specification, not just the title, before assuming a cheap board is genuinely mechanical.",
  },
  {
    criterion: "Switch feel varies more at the budget tier",
    explanation:
      "Budget keyboards often use lesser-known or clone switches rather than established switch brands, and feel can be inconsistent, some units have noticeable stem wobble or a scratchy travel, even when priced identically to a smoother-feeling unit. Reading recent buyer feedback on switch feel matters more at this tier than on premium boards.",
  },
  {
    criterion: "Stabilizer rattle is common and fixable",
    explanation:
      "Spacebar and enter key rattle from unlubricated stabilizers is one of the most common budget mechanical keyboard complaints. It is fixable with stabilizer lubing, but factor in whether you're willing to do that modding step before buying a board purely on price.",
  },
  {
    criterion: "Hot-swap socket quality is not the same as having hot-swap at all",
    explanation:
      "A hot-swappable board lets you change switches without soldering, but cheap sockets can develop bent pins or loose contact after a handful of swaps. A pre-lubed hot-swap board from a brand that specifies socket quality, like the AULA F75 Pro, is a safer bet than a no-name hot-swap board with no socket details listed.",
  },
  {
    criterion: "$60 vs $100 tier: what the extra money buys",
    explanation:
      "The roughly $60 tier typically gets you gasket mount styling, hot-swap, and sometimes wireless, while the $80 to $100 tier adds better brand trust, quality control, and community or company support. The extra $20 to $40 is worth it mainly if you want wireless plus hot-swap in the same board, as with the AULA F75 Pro.",
  },
  {
    criterion: "Firmware support determines how long a board stays useful",
    explanation:
      "Keyboards with open-source community firmware support, like QMK or VIA, tend to keep working and stay remappable indefinitely. Proprietary remapping software from smaller budget brands is more likely to be abandoned within a couple of years, which matters if you rely on custom key remaps.",
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
    subheading: "Under $60 or Up to $100",
    intro:
      "Only 2 of the 8 mechanical keyboard cheap listings we checked were genuinely mechanical per their real titles, and they land in different budget tiers.",
    table: {
      headers: ["Budget", "Best pick", "Why"],
      rows: [
        ["Strictly under $60", "Logitech G413 SE ($56.79)", "Only pick that clears the $60 line, wired full-size"],
        ["Up to $100, want wireless and hot-swap", "AULA F75 Pro ($66.49)", "Hot-swap, pre-lubed switches, 3 connection modes"],
      ],
    },
  },
  {
    subheading: "Wired or Wireless",
    cards: [
      {
        label: "Want zero setup, wired reliability",
        text: "The Logitech G413 SE connects over a single USB cable with no pairing, no charging, and an established brand's driver support behind it.",
      },
      {
        label: "Want wireless flexibility across devices",
        text: "The AULA F75 Pro switches between 2.4GHz, USB-C, and Bluetooth 5.0, useful if you move between a desktop and a laptop.",
      },
    ],
  },
  {
    subheading: "Want to Customize Switches Later",
    intro:
      "Only one of these two picks lets you swap switches without soldering.",
    table: {
      headers: ["Need", "Best pick", "Note"],
      rows: [
        ["Hot-swap sockets to try different switches", "AULA F75 Pro", "Ships with pre-lubed switches, sockets built for swapping"],
        ["Fixed switches you never plan to change", "Logitech G413 SE", "No hot-swap, but no socket wear risk either"],
      ],
    },
    note: "If you plan to swap switches more than once or twice, a pre-lubed hot-swap board from a brand that specifies socket quality is a safer long-term bet than a no-name hot-swap board with no socket details listed.",
  },
  {
    subheading: "Layout Preference",
    intro:
      "These two picks land on opposite ends of the layout spectrum, which matters as much as price for daily typing comfort.",
    table: {
      headers: ["Layout need", "Best pick", "Tradeoff"],
      rows: [
        ["Full numpad, no learning curve", "Logitech G413 SE", "Wider footprint pushes the mouse further right"],
        ["Smaller footprint, still has arrow keys", "AULA F75 Pro", "75% layout, easier transition than a 60% board"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "Why are there only 2 picks in this budget mechanical keyboard guide?",
    a: "We checked all 8 candidate listings under the mechanical keyboard cheap search against their real Amazon titles and descriptions. Several were membrane keyboards mislabeled as mechanical, and several others were ergonomic split or wave keyboards rather than standard mechanical boards. Only 2 were genuinely mechanical and verifiably priced under $100, so we kept the guide honest rather than padding it with mismatched products.",
  },
  {
    q: "How do I know if a cheap mechanical keyboard listing is actually membrane?",
    a: "Check the switch specification in the listing itself, not just the title. Terms like membrane, rubber dome, or scissor switch in the description mean it isn't mechanical, even if mechanical appears in the product title. Both picks in this list explicitly specify true mechanical switches in their listings.",
  },
  {
    q: "Is a $56 mechanical keyboard actually worth it, or should I spend more?",
    a: "The roughly $60 tier, like the Logitech G413 SE, typically gets solid full-size functionality and established brand software support, but skips hot-swap sockets and wireless. The $80 to $100 tier, like the AULA F75 Pro, adds hot-swap and multiple wireless modes. The extra $20 to $40 is worth it mainly if you want to experiment with switches or need wireless.",
  },
  {
    q: "What is stabilizer rattle and should I worry about it on a budget board?",
    a: "Stabilizer rattle is a loose, clicky feel on the spacebar and enter key caused by unlubricated stabilizers, and it's a very common complaint at the budget tier. It's fixable with stabilizer lubing, a modding step, so factor that into your decision if you're not willing to open the board and lube the stabilizers yourself.",
  },
  {
    q: "Does hot-swap mean I can change switches on any budget mechanical keyboard?",
    a: "Only if the listing explicitly says hot-swappable, like the AULA F75 Pro. A board without hot-swap sockets, like the Logitech G413 SE, has switches soldered directly to the board, meaning switch changes would require desoldering rather than a simple swap.",
  },
  {
    q: "Do budget wireless mechanical keyboards have a lower polling rate than premium ones?",
    a: "Often yes. Budget wireless keyboards commonly poll at 125Hz or 250Hz, while premium wireless boards can reach up to 1000Hz for 1ms response. This mostly matters for competitive gaming rather than typing, and polling rate isn't always disclosed in budget listings, so check the specs closely if gaming responsiveness matters to you.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mechanical-keyboard-layouts-explained", title: "Mechanical Keyboard Layouts Explained + Picks (2026)" },
  { href: "/guide/best-ergonomic-keyboards-amazon-best-sellers", title: "Best Ergonomic Keyboards Amazon Best Sellers (2026)" },
  { href: "/guide/best-mechanical-keyboard-under-100", title: "Best Mechanical Keyboards Under $100 (2026)" },
  { href: "/guide/best-mechanical-keyboards", title: "Best Mechanical Keyboards (2026)" },
];
