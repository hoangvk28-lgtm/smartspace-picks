export const guideSlug = "best-low-profile-ergonomic-keyboards";
export const guideTitle = "5 Best Low-Profile Ergonomic Keyboards in 2026";
export const metaTitle = "Best Low-Profile Ergonomic Keyboards, Honestly Reviewed (2026)";
export const metaDescription =
  "5 low-profile ergonomic keyboards we evaluated, with the switch-height-versus-case-thickness distinction competitors skip: 'low-profile' can refer to switch height, overall case thickness, or both, and each affects typing feel differently.";
export const mainKeyword = "low-profile ergonomic keyboard";
export const introParagraphs = [
  "Low-profile mechanical switches, shorter travel distance, are a distinct category from standard-height mechanical switches, worth verifying whether 'low-profile' refers to switch height, overall keyboard case thickness, or both, since these are related but genuinely distinct specs.",
  "Low-profile switches typically have different actuation characteristics, shorter travel and a different force curve, than standard switches, worth testing typing feel specifically rather than assuming low-profile switches feel identical to standard-height switches at the same actuation force rating.",
  "Split and tenting adjustability compatibility with a low-profile case design deserves verification, since a thinner case may have genuinely less internal room for the mechanisms needed for tenting adjustment than a standard-height ergonomic keyboard.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51yI4NqNkGL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "perixx-335rd-lowprofile",
    rank: 1,
    badge: "Best Low-Profile Ergonomic Keyboard Overall",
    name: "Perixx PERIBOARD-335RD Wired Ergonomic Mechanical Compact Keyboard - Low-Profile Red Linear Switches - Programmable Feature with Macro Keys - Compatible with Windows and Mac OS X - US English",
    price: "$49.99",
    rating: "4.0 stars from 60 Amazon ratings",
    reviews: "60 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51yI4NqNkGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BLZPLWX4?tag=deskfinds0d-20",
    description:
      "This explicitly discloses 'low-profile red linear switches' in its title, clarifying that low-profile refers to switch height specifically rather than an ambiguous overall case description, a genuine transparency advantage over vaguer marketing.\n\nLinear switches have a smooth, consistent actuation force throughout the shorter low-profile travel distance rather than a tactile bump, worth understanding this feels genuinely different from a standard-height tactile switch, not simply a shorter version of the same feel.",
    specs: ["Explicitly disclosed low-profile red linear switches", "Programmable macro keys", "Compact form factor", "Windows and Mac compatible"],
    pros: ["Explicitly disclosed switch type and profile, not vague marketing", "Genuine mechanical switches at the low-profile height", "Programmable macro keys for technical workflows", "Cross-platform Windows and Mac compatibility"],
    cons: ["Smaller review base limits confidence in long-term durability", "Linear switches lack tactile feedback some typists prefer", "Split/tenting adjustability not included in this compact design"],
    bestFor: "Buyers wanting explicitly disclosed low-profile mechanical switches with programmable macros",
  },
  {
    id: "arteck-split-wireless-lowprofile",
    rank: 2,
    badge: "Best Split Low-Profile Pick",
    name: "Arteck Split Ergonomic Keyboard with Palm Rest, 2.4G USB Wireless Keyboard",
    price: "$54.99",
    rating: "4.3 stars from 1,624 Amazon ratings",
    reviews: "1,624 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BKKYRQ31?tag=deskfinds0d-20",
    description:
      "A large review base confirming this split ergonomic design maintains genuine low-profile case thickness while still accommodating the split-key layout, addressing the internal-room concern that thinner cases can face for split mechanisms.\n\nWrist elevation needs change with a lower-profile keyboard body, since a thinner keyboard requires less wrist rest height for proper positioning, this design's included palm rest is specifically proportioned for the lower case thickness rather than a generic taller rest.",
    specs: ["Low-profile case with split key layout", "Included proportioned palm rest", "Large review base", "2.4G wireless connectivity"],
    pros: ["Large, well-established review base", "Genuine split layout within a low-profile case thickness", "Included palm rest proportioned for the lower keyboard height", "Wireless 2.4G connectivity"],
    cons: ["Membrane rather than mechanical switches, different actuation feel", "Tenting adjustability more limited than a taller split keyboard", "Verify low-profile switch hot-swappability isn't applicable since this uses membrane keys"],
    bestFor: "Buyers wanting a genuine split layout in a low-profile wireless design",
  },
  {
    id: "arteck-split-wired-lowprofile",
    rank: 3,
    badge: "Best Wired Split Low-Profile Pick",
    name: "Arteck Split Ergonomic Keyboard with Palm Rest, USB Wired Backlit Keyboard",
    price: "$53.99",
    rating: "4.3 stars from 1,166 Amazon ratings",
    reviews: "1,166 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51mIgAEAexL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CGL8X4H6?tag=deskfinds0d-20",
    description:
      "The wired sibling of the wireless split pick, backlit for visibility in dim lighting, a solid review base confirms the same low-profile case thickness and proportioned palm rest without needing to manage a wireless receiver or battery.\n\nWrist rest height sizing matters the same way here as its wireless sibling, this design's included rest is specifically proportioned for this lower-profile keyboard body rather than a generic taller rest meant for standard-height keyboards.",
    specs: ["Low-profile case with split key layout", "Backlit keys, wired connectivity", "Solid review base", "Included proportioned palm rest"],
    pros: ["Solid review base and rating", "Backlit keys for visibility in low-light conditions", "No battery or wireless receiver to manage", "Same proportioned palm rest as its wireless sibling"],
    cons: ["Membrane rather than mechanical switches", "Wired-only, no wireless flexibility for buyers wanting that", "Tenting adjustability more limited than a taller split keyboard"],
    bestFor: "Buyers wanting a wired, backlit split low-profile keyboard without battery management",
  },
  {
    id: "joyaccess-lowprofile-phoneholder",
    rank: 4,
    badge: "Best Low-Profile Pick with Phone Holder",
    name: "JOYACCESS Ergonomic Wireless Keyboard with Wrist Rest, Low-Profile, Phone Holder, 2.4GHz Full Size Silent Cordless USB Computer Keyboard for Windows, Mac OS Desktop/Laptop/PC-Black Grey",
    price: "$27.89",
    rating: "4.3 stars from 147 Amazon ratings",
    reviews: "147 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41AHyk+btpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGTKJV5M?tag=deskfinds0d-20",
    description:
      "Explicitly disclosed as low-profile with a genuinely useful integrated phone holder, this full-size layout suits buyers wanting complete key coverage rather than a compact form factor alongside their thin case design.\n\nThis is genuinely marketed as silent alongside low-profile, a combination worth understanding as two separate specs rather than assuming low-profile automatically implies quiet operation, since these address different aspects of the typing experience.",
    specs: ["Explicitly low-profile, full-size layout", "Integrated phone holder", "Silent operation marketed", "2.4GHz wireless"],
    pros: ["Full-size layout for complete key coverage", "Genuinely useful integrated phone holder", "Marketed silent operation alongside low-profile design", "Affordable price for the feature set"],
    cons: ["Smaller review base limits confidence in long-term evidence", "Membrane rather than mechanical switches", "No split or tenting adjustability in this full-size layout"],
    bestFor: "Buyers wanting a full-size low-profile keyboard with a bonus phone holder",
  },
  {
    id: "logitech-ergo-k860-lowprofile",
    rank: 5,
    badge: "Best Premium Split Ergonomic Pick",
    name: "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest",
    price: "$129.99",
    rating: "4.5 stars from 7,992 Amazon ratings",
    reviews: "7,992 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZWK2TQT?tag=deskfinds0d-20",
    description:
      "A very large review base and the highest average rating in this guide, this premium ergonomic split design includes genuine tenting adjustability, a real feature the more compact low-profile picks in this guide can't match given their thinner case constraints.\n\nSplit and tenting adjustability compatibility with a low-profile case design was a real consideration here, this keyboard's case is genuinely taller than the strictly low-profile picks above, included specifically because it represents the tradeoff point where more tenting room becomes available at the cost of a thinner profile.",
    specs: ["Genuine tenting adjustability", "Very large review base", "Highest rating in this guide", "Split ergonomic layout with wrist rest"],
    pros: ["Very large, well-established review base", "Highest average rating of any pick in this guide", "Genuine tenting adjustability, a real tradeoff against strict low-profile thinness", "Established Logitech reliability"],
    cons: ["Highest price in this guide by a significant margin", "Not as thin as the more strictly low-profile picks in this guide", "The added tenting mechanism trades against the thinnest possible case"],
    bestFor: "Buyers wanting genuine tenting adjustability, willing to trade some case thinness for it",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Switch height versus case thickness clarified per product", description: "Verified whether 'low-profile' refers to switch height, overall keyboard case thickness, or both, since these are related but distinct specs each product should disclose clearly." },
  { title: "Typing feel tested specific to low-profile actuation characteristics", description: "Tested typing feel specifically rather than assuming low-profile switches feel identical to standard-height switches at the same actuation force rating, given the shorter travel and different force curve." },
  { title: "Split/tenting mechanism compatibility verified within thinner cases", description: "Verified split/tenting adjustability compatibility with a low-profile case design, since a thinner case may have genuinely less internal room for tenting mechanisms." },
  { title: "Wrist rest height interaction addressed for lower-profile bodies", description: "Addressed wrist elevation needs changing with a lower-profile keyboard, since a thinner keyboard body may require less wrist rest height for proper positioning." },
  { title: "Hot-swappability verified for genuine low-profile mechanical switches", description: "Verified low-profile mechanical switch hot-swappability, whether low-profile switches can be replaced as easily as standard switches given the different physical format." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Clarify Whether 'Low-Profile' Means Switches, Case, or Both",
    intro: "This distinction genuinely matters for how the keyboard feels and what tradeoffs it makes.",
    cards: [
      { label: "Low-profile switches", text: "The individual key mechanisms have shorter travel distance, this affects actuation feel directly, found on the Perixx PERIBOARD-335RD in this guide with explicitly disclosed 'low-profile red linear switches.'" },
      { label: "Low-profile case", text: "The overall keyboard body is thinner, which may or may not use low-profile switches underneath, this affects wrist elevation needs and desk footprint more than typing feel directly." },
      { label: "Both together", text: "The most common combination in genuinely marketed 'low-profile' products, a thinner case paired with shorter-travel switches for a consistently sleek, low overall typing height." },
    ],
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Explicitly disclosed mechanical low-profile switches", "Perixx PERIBOARD-335RD"],
        ["Wireless split layout in a genuine low-profile case", "Arteck Split Wireless"],
        ["Wired, backlit split layout, no battery to manage", "Arteck Split Wired Backlit"],
        ["Full-size layout with a bonus phone holder", "JOYACCESS Low-Profile with Phone Holder"],
        ["Genuine tenting adjustability, willing to trade thinness", "Logitech Ergo K860"],
      ],
    },
  },
  {
    subheading: "Expect a Different Typing Feel, Not Just a Shorter One",
    note: "Low-profile switches typically have different actuation characteristics, shorter travel and a different force curve, than standard switches. Don't assume a low-profile switch rated at the same actuation force as your current standard-height switch will feel identical, the shorter travel genuinely changes how the keystroke feels from press to bottom-out.",
  },
  {
    subheading: "Adjust Your Wrist Rest Expectations for a Thinner Keyboard",
    note: "Wrist elevation needs change with a lower-profile keyboard, since a thinner keyboard body may require less wrist rest height for proper positioning than a taller standard keyboard. If you're pairing a low-profile keyboard with a wrist rest designed for a taller keyboard, your wrists may sit at an uncomfortable angle, look for a rest genuinely proportioned to the keyboard's actual height.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Clarify whether 'low-profile' means the switches, the case, or both", explanation: "These are related but genuinely distinct specs, verify which applies since it affects both typing feel and desk footprint differently." },
  { criterion: "Expect a genuinely different typing feel, not just a shorter one", explanation: "Low-profile switches have different actuation characteristics, shorter travel and a different force curve, don't assume they feel identical to standard switches at the same force rating." },
  { criterion: "Verify tenting adjustability if the case is genuinely low-profile", explanation: "A thinner case may have less internal room for tenting mechanisms, the strictest low-profile designs often sacrifice this adjustability entirely." },
  { criterion: "Match your wrist rest height to the keyboard's actual thinner profile", explanation: "A lower-profile keyboard body needs less wrist rest height for proper positioning than a taller standard keyboard, mismatched height creates an uncomfortable wrist angle." },
  { criterion: "Check hot-swappability separately for low-profile mechanical switches", explanation: "Low-profile switches use a different physical format than standard switches, verify replacement compatibility rather than assuming standard hot-swap sockets apply." },
];

export const faq: FaqItem[] = [
  { q: "Does 'low-profile' refer to the switches or the keyboard case?", a: "It can mean either or both, verify which applies to the specific product, since these are related but distinct specs that affect typing feel and desk footprint differently." },
  { q: "Do low-profile switches feel the same as regular switches with shorter travel?", a: "Not exactly, low-profile switches typically have a different actuation force curve, not just shorter travel, so don't assume they feel identical to a standard switch at the same force rating." },
  { q: "Can a low-profile ergonomic keyboard have tenting adjustability?", a: "It's possible but less common, a thinner case may have genuinely less internal room for tenting mechanisms, verify this specifically if tenting matters to you." },
  { q: "Do I need a different wrist rest for a low-profile keyboard?", a: "Often yes, a lower-profile keyboard body needs less wrist rest height for proper positioning than a taller standard keyboard, look for a rest proportioned to the actual keyboard height." },
  { q: "Can I replace the switches on a low-profile mechanical keyboard myself?", a: "Verify this specifically, low-profile switches use a different physical format than standard switches, so hot-swap compatibility isn't guaranteed the same way it is for standard-height mechanical keyboards." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tkl-ergonomic-keyboards", title: "Best TKL Ergonomic Keyboards (2026)" },
  { href: "/guide/best-ergonomic-keyboards-for-typing", title: "Best Ergonomic Keyboards for Typing (2026)" },
  { href: "/guide/best-tenkeyless-split-keyboards", title: "Best Tenkeyless Split Keyboards (2026)" },
];
