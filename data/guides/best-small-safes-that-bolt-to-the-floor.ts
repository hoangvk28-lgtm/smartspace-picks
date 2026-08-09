export const guideSlug = "best-small-safes-that-bolt-to-the-floor";
export const guideTitle = "8 Best Small Safes That Bolt to the Floor in 2026";
export const metaTitle = "Best Safes That Bolt to the Floor (2026)";
export const metaDescription =
  "8 safes compared on confirmed factory floor bolt-down support, separating true floor-anchorable picks from wall or cabinet-only mounting hardware.";
export const mainKeyword = "small safes that bolt to the floor";
export const introParagraphs = [
  "We required explicit floor bolt-down language in each listing before treating a pick as genuinely floor-anchorable, since several safes confirm wall or cabinet mounting without specifically stating floor installation. We're disclosing which picks explicitly support floor bolting versus general mounting.",
  "Floor anchoring is the strongest anti-removal method for a lightweight safe, since a determined thief typically can't simply lift a floor-bolted safe the way they could an unmounted or wall-only mounted one.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31NRp-xRm+S._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b000z8r73u-ssbf",
    rank: 1,
    badge: "Best Overall Confirmed Floor Bolt-Down",
    name: "SentrySafe Shelf Safe with Digital Keypad Lock, Steel Safe with Interior Light",
    price: "$101.96",
    rating: "4.4",
    reviews: "3891",
    imageUrl: "https://m.media-amazon.com/images/I/31NRp-xRm+S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B000Z8R73U?tag=deskfinds0d-20",
    description: "This listing explicitly confirms bolt down hardware included, genuine factory-supported floor anchoring rather than implied mounting capability. At 17 pounds and 0.78 cubic feet, this is substantial enough to benefit meaningfully from floor bolting, a lighter safe gains less from anchoring since it's easier to pry loose regardless.\n\nA carpeted floor protects contents, and concealed hinges resist tampering. Digital keypad access with 2 override keys covers recovery, though this is explicitly stated as not a fireproof safe, security-focused rather than disaster protection.",
    specs: ["Confirmed bolt down hardware, 17 lbs, 0.78 cu ft", "Carpeted floor, concealed hinges", "Digital keypad + 2 override keys, NOT fireproof"],
    pros: ["Explicitly confirmed floor bolt-down hardware, not just implied mounting"],
    cons: ["Explicitly not fireproof, largest footprint among these picks"],
    bestFor: "Buyers wanting the most substantial confirmed floor-boltable safe here.",
  },
  {
    id: "b00ug9hb1q-ssbf",
    rank: 2,
    badge: "Best Reconfigurable Floor-Bolted Safe",
    name: "Amazon Basics Steel Security Safe and Lock Box with Electronic Keypad",
    price: "$57.74",
    rating: "4.5",
    reviews: "8214",
    imageUrl: "https://m.media-amazon.com/images/I/41RK6qkncSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00UG9HB1Q?tag=deskfinds0d-20",
    description: "This listing explicitly confirms mounting to wall, floor, or shelf with four included expansion bolts, genuine floor bolt-down support alongside other placement options. An adjustable, removable interior shelf lets you reconfigure the layout for what you're actually storing.\n\nThree operation indicator lights confirm keypad status, and a carpeted floor protects items from scratches. Two emergency override keys back up the keypad, requiring 4 AA batteries not included.",
    specs: ["Confirmed floor, wall, or shelf mounting, 4 expansion bolts", "Adjustable removable interior shelf", "3 operation indicator lights"],
    pros: ["Explicitly confirmed floor mounting option alongside wall/shelf flexibility"],
    cons: ["Requires separately purchased AA batteries"],
    bestFor: "Buyers wanting confirmed floor bolt-down flexibility with a reconfigurable interior.",
  },
  {
    id: "b078myjyd5-ssbf",
    rank: 3,
    badge: "Best Value Confirmed Floor Mounting",
    name: "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    price: "$23.99",
    rating: "4.4",
    reviews: "22969",
    imageUrl: "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B078MYJYD5?tag=deskfinds0d-20",
    description: "This listing explicitly states wall or floor mounting with pre-drilled holes and included bolts, confirmed floor bolt-down support at the lowest price in this comparison. A magnetic auto-locking door closes and secures itself the instant you shut it.\n\nReinforced solid steel construction with dual door locking bolts backs the physical security, and the corrosion-resistant finish holds up wherever the safe is floor-mounted, including a garage or basement.",
    specs: ["Confirmed wall OR floor mounting explicitly stated", "Magnetic auto-lock door", "Lowest price in this comparison"],
    pros: ["Explicitly confirmed floor mounting at the lowest price in this comparison"],
    cons: ["Compact interior, verify your specific items fit"],
    bestFor: "Budget-conscious buyers wanting confirmed floor anchoring.",
  },
  {
    id: "b0ckpf8gf9-ssbf",
    rank: 4,
    badge: "Cabinet/Wall Mounting Confirmed (Floor Not Explicit)",
    name: "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    price: "$52.24",
    rating: "4.6",
    reviews: "1326",
    imageUrl: "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKPF8GF9?tag=deskfinds0d-20",
    description: "We're disclosing this honestly: this listing confirms mounting inside a wall cabinet with pre-drilled holes and expansion screws, but doesn't specifically state floor installation the way several other picks here do. A removable shelf splits contents at the largest capacity in this comparison.\n\nThree access methods, personal code, emergency override key, or Type-C emergency power, mean multiple recovery paths, though verify floor mounting compatibility directly with the manufacturer if that's specifically what you need.",
    specs: ["Confirmed cabinet/wall mounting, floor NOT explicitly confirmed", "0.6 cu ft, removable shelf", "3 access methods including USB-C backup"],
    pros: ["Largest capacity in this comparison among the confirmed-mountable picks"],
    cons: ["Floor bolt-down not explicitly confirmed in this listing, verify directly if that's required"],
    bestFor: "Buyers wanting cabinet or wall anchoring at larger capacity, who will verify floor compatibility directly.",
  },
  {
    id: "b0d1x55sw4-ssbf",
    rank: 5,
    badge: "Peg-Mounting Confirmed (Floor Not Explicit)",
    name: "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    price: "$29.99",
    rating: "4.2",
    reviews: "4957",
    imageUrl: "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1X55SW4?tag=deskfinds0d-20",
    description: "This listing confirms a peg-mounting system for shelf, wall, or cabinet placement, genuinely useful for concealment, but doesn't explicitly confirm floor bolt-down installation. SPCC steel construction with 18mm dual locking bolts backs the physical security at a 4.6-liter capacity.\n\nTwo separate access codes support shared access, and hidden pry-resistant hinges reinforce the concealment approach, worth confirming floor compatibility directly if that's specifically required.",
    specs: ["Confirmed peg-mounting for shelf/wall/cabinet, floor NOT explicitly confirmed", "2 independent access codes supported", "Hidden pry-resistant hinges"],
    pros: ["Peg-mounting system offers genuine concealment even without confirmed floor bolting"],
    cons: ["Floor bolt-down not explicitly confirmed, verify directly if required"],
    bestFor: "Buyers wanting concealed mounting who don't strictly require floor anchoring.",
  },
  {
    id: "b09sz6gpgr-ssbf",
    rank: 6,
    badge: "Mounting Not Explicitly Confirmed",
    name: "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    price: "$31.99",
    rating: "4.5",
    reviews: "3167",
    imageUrl: "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SZ6GPGR?tag=deskfinds0d-20",
    description: "We're disclosing this directly: this listing's features don't explicitly confirm mounting hardware, floor or otherwise, despite the strong security construction. An automatic interior light and low-battery warning support daily use, and a three-wrong-entries lockout deters code guessing.\n\nReinforced alloy steel with pry-resistant concealed hinges backs the security, but if floor anchoring is your specific requirement, verify mounting hardware inclusion directly with the seller before ordering.",
    specs: ["Mounting hardware NOT explicitly confirmed in this listing", "Auto interior light, low-battery warning", "3-wrong-entry lockout (5 min)"],
    pros: ["Strong keypad feedback features (entry confirmation, low-battery warning)"],
    cons: ["Mounting hardware, floor or otherwise, not explicitly confirmed in this listing"],
    bestFor: "Buyers not requiring confirmed floor mounting who value keypad feedback features.",
  },
  {
    id: "b0crh68745-ssbf",
    rank: 7,
    badge: "Installation Holes Confirmed (Floor Not Explicit)",
    name: "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    price: "$37.99",
    rating: "4.6",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH68745?tag=deskfinds0d-20",
    description: "This listing confirms pre-drilled installation holes for mounting under a closet, drawer, or table, but doesn't explicitly state floor bolt-down as several other picks here do directly. A USB-C interface supporting an external power bank avoids a dead-battery lockout.\n\nTwo 0.71-inch steel reinforcement bolts and hidden hinges back the mounting, at 8.98 x 6.46 x 6.61 inches of usable interior, worth confirming floor-specific compatibility if that's your exact requirement.",
    specs: ["Confirmed installation holes (under furniture), floor NOT explicitly confirmed", "USB-C emergency power backup", "8.98×6.46×6.61 in interior"],
    pros: ["USB-C emergency power backup, a genuine dead-battery solution"],
    cons: ["Floor bolt-down not explicitly confirmed, verify directly if required"],
    bestFor: "Buyers wanting under-furniture mounting with dead-battery backup.",
  },
  {
    id: "b008nhkwzu-ssbf",
    rank: 8,
    badge: "No Confirmed Mounting Hardware",
    name: "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    price: "See listing",
    rating: "4.6",
    reviews: "22264",
    imageUrl: "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008NHKWZU?tag=deskfinds0d-20",
    description: "We're disclosing this honestly: this listing emphasizes carrying grips for portability rather than confirming any mounting hardware, floor or otherwise. UL classified for fire endurance at 1550°F remains genuinely strong, and a lifetime after-fire replacement guarantee backs the safe directly.\n\nIncluded here for its fire protection credentials, but if floor anchoring specifically matters, this is not the pick, choose one of the confirmed-mountable options above instead.",
    specs: ["No confirmed mounting hardware, carrying grips instead", "UL classified: 1/2 hr at 1550°F", "Lifetime after-fire replacement guarantee"],
    pros: ["Strongest documented fire protection in this comparison"],
    cons: ["No confirmed mounting hardware at all, portable design instead"],
    bestFor: "Buyers prioritizing fire protection over floor anchoring specifically.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Required explicit floor bolt-down language, not just general mounting", description: "Only 3 of 8 picks here explicitly state floor mounting in their listings. We flagged the other 5 as confirming wall, cabinet, or general installation holes without specifically stating floor bolt-down capability." },
  { title: "Weighed safe weight against the value of floor anchoring", description: "A heavier safe benefits more from floor bolting since it's already harder to move; we noted weight where confirmed to give context on how much anchoring adds." },
  { title: "Distinguished carrying-handle portable designs from mountable ones entirely", description: "One pick explicitly emphasizes carrying grips over any mounting hardware, a meaningfully different design intent from the floor-boltable picks." },
  { title: "Recommended direct manufacturer verification where floor mounting wasn't explicit", description: "For picks confirming wall, cabinet, or peg mounting without explicitly stating floor compatibility, we recommended verifying directly rather than assuming equivalence." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Confirmed Mounting Type",
    table: {
      headers: ["Confirmation level", "Recommended pick"],
      rows: [
        ["Explicit floor bolt-down, most substantial", "SentrySafe Shelf Safe with Digital Keypad Lock"],
        ["Explicit floor + wall + shelf flexibility", "Amazon Basics Steel Security Safe"],
        ["Explicit floor mounting, best value", "Yuanshikj Small Steel Security Safe Box"],
        ["Fire protection over floor anchoring", "SentrySafe Fireproof Safe Box with Key Lock"],
      ],
    },
  },
  {
    subheading: "Verify Before You Drill",
    note: "Only 3 of the 8 picks in this comparison explicitly state floor bolt-down installation in their listed features. For the other 5, mounting is confirmed for wall, cabinet, or under-furniture placement, but floor-specific installation isn't stated. If bolting to the actual floor is your specific requirement, verify this directly with the seller or manufacturer before ordering, rather than assuming general mounting language covers it.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm floor bolt-down is explicitly stated, not just general mounting language", explanation: "Only 3 of 8 picks here explicitly confirm floor installation. Wall, cabinet, or under-furniture mounting is not automatically the same as floor bolting." },
  { criterion: "Weigh safe weight alongside anchoring for genuine anti-removal security", explanation: "A heavier safe combined with floor bolting resists removal better than a light safe with the same anchoring, since weight alone adds resistance." },
  { criterion: "Check substrate compatibility for your specific floor type", explanation: "None of these listings confirm compatibility with every floor type (concrete, wood subfloor, tile). Verify the anchor hardware works with your actual installation surface." },
  { criterion: "Don't assume carrying-handle features mean mounting isn't available", explanation: "One pick here emphasizes portability without confirming mounting hardware. If floor anchoring matters, verify this distinction directly." },
  { criterion: "Consider fire protection tradeoffs if you need both fire rating and confirmed floor mounting", explanation: "The strongest fire-rated pick here doesn't confirm mounting hardware; the strongest confirmed floor-mount pick isn't fireproof. Weigh which matters more for your specific risk." },
];

export const faq: FaqItem[] = [
  { q: "Which picks explicitly confirm floor bolt-down installation?", a: "Three: the SentrySafe Shelf Safe, the Amazon Basics Steel Security Safe, and the Yuanshikj Small Steel Security Safe Box." },
  { q: "Do the other picks not have any mounting hardware?", a: "Most confirm wall, cabinet, or under-furniture mounting, just not floor installation specifically. Verify directly with the manufacturer if floor bolting is your exact requirement." },
  { q: "Is there a fire-rated safe that also bolts to the floor?", a: "Not confirmed in this comparison. The strongest fire-rated pick here (SentrySafe Fireproof Safe Box) emphasizes portability instead of confirmed mounting hardware." },
  { q: "What's the heaviest, most substantial floor-boltable pick?", a: "The SentrySafe Shelf Safe with Digital Keypad Lock, at 17 pounds and 0.78 cubic feet." },
  { q: "Does floor bolting alone guarantee theft resistance?", a: "It's a strong anti-removal method, but combine it with adequate safe weight and construction quality for the best real-world resistance." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-safes-for-closets", title: "Best Small Safes for Closets (2026)" },
  { href: "/guide/best-desktop-safes", title: "Best Desktop Safes (2026)" },
  { href: "/guide/best-hidden-small-safes", title: "Best Hidden Small Safes (2026)" },
];
