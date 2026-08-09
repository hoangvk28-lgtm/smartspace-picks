export const guideSlug = "best-small-safes-for-apartments";
export const guideTitle = "7 Best Small Safes for Apartments in 2026";
export const metaTitle = "Best Small Safes for Apartments (2026)";
export const metaDescription =
  "7 verified safes compared for rental-friendly anchoring, closet or cabinet fit, and move-out reversibility, after excluding one inaccessible ASIN.";
export const mainKeyword = "small safes for apartments";
export const introParagraphs = [
  "Renting changes the anchoring calculus: drilling into walls or floors may violate your lease, and any installation damage could come out of a security deposit. We compared confirmed mounting methods for reversibility and closet-fit dimensions with rental constraints specifically in mind. One original candidate ASIN was not accessible through the product catalog at research time.",
  "We also weighed carry-away resistance for the genuinely portable picks here, since an apartment safe left unanchored is a real target if it's visible or light enough to grab quickly.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b078myjyd5-ssfa",
    rank: 1,
    badge: "Best Overall Renter-Friendly Option",
    name: "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    price: "$23.99",
    rating: "4.4",
    reviews: "22969",
    imageUrl: "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B078MYJYD5?tag=deskfinds0d-20",
    description: "Two pre-drilled mounting holes with included bolts let you anchor this, but at a compact 9.05 x 6.69 x 6.69 inches, the installation footprint is small enough to patch easily at move-out if your lease requires restoring the wall or shelf. A magnetic auto-locking door secures itself the moment you close it.\n\nReinforced solid steel construction with dual door locking bolts backs the physical security, and the corrosion-resistant finish holds up in an apartment closet that might see seasonal humidity, at the lowest price in this comparison.",
    specs: ["0.2 cu ft, small mounting footprint (easy to patch)", "Magnetic auto-lock door", "Lowest price in this comparison"],
    pros: ["Compact mounting footprint minimizes wall damage to patch at move-out", "Lowest price in this comparison"],
    cons: ["Mounting still requires drilling, verify your lease allows it"],
    bestFor: "Renters wanting the lowest-commitment mounting footprint at the best price.",
  },
  {
    id: "b005k6jqxq-ssfa",
    rank: 2,
    badge: "Best for No-Drilling Lease Restrictions",
    name: "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    price: "$16.17",
    rating: "4.3",
    reviews: "18027",
    imageUrl: "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B005K6JQXQ?tag=deskfinds0d-20",
    description: "A tether cable secures this to a fixed object, a bed frame, closet rod, or heavy furniture, without drilling into walls or floors at all, directly solving the strictest no-alteration lease clauses. A set-your-own four-digit combination avoids needing a key you might lose during a move.\n\nA dedicated ear bud or charging cable access port lets you charge devices while locked and tethered, and shock-absorbing foam construction is designed to be water-resistant, useful during the general wear of apartment living.",
    specs: ["Tether cable, zero wall or floor drilling required", "4-digit combination, no key to lose", "Charging cable access port"],
    pros: ["Zero drilling required, works within the strictest no-alteration lease terms", "No physical key to lose during a move"],
    cons: ["Tether-only anti-removal, lighter than a mounted steel box"],
    bestFor: "Renters whose lease strictly prohibits any wall or floor alteration.",
  },
  {
    id: "b0fx2969y8-ssfa",
    rank: 3,
    badge: "Best Concealment for Shared/Sublet Living",
    name: "Small Safe for Home, 6.69\"H Safe Box with Fireproof Waterproof Bag",
    price: "$34.99",
    rating: "4.5",
    reviews: "298",
    imageUrl: "https://m.media-amazon.com/images/I/41L5x2i66HL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FX2969Y8?tag=deskfinds0d-20",
    description: "At 10.63\" W x 6.69\" D x 6.69\" H, this fits tiny apartment spaces genuinely well, and reserved anchor holes let you optionally secure it in a concealed cabinet or wall rather than leaving it visible on a shelf. A wrong password entered 3 times triggers a 60-second alarm with mute mode, a real deterrent explicitly framed by the manufacturer around roommates and guests.\n\nThree unlocking ways, keypad, key, and external battery case, prevent a single point of failure, genuinely relevant for shared or sublet apartment living where roommates or a landlord might have access.",
    specs: ["10.63×6.69×6.69 in, optional concealed anchoring", "Alarm with mute mode, framed for roommate/guest deterrence", "3 unlocking ways prevent single-point lockout"],
    pros: ["Manufacturer explicitly frames this for roommate/landlord access concerns", "Optional anchoring rather than requiring it"],
    cons: ["Safe body itself is explicitly not fireproof"],
    bestFor: "Renters in shared or sublet apartments concerned about roommate or landlord access.",
  },
  {
    id: "b0ckpf8gf9-ssfa",
    rank: 4,
    badge: "Largest Renter-Friendly Capacity",
    name: "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    price: "$52.24",
    rating: "4.6",
    reviews: "1326",
    imageUrl: "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKPF8GF9?tag=deskfinds0d-20",
    description: "A removable shelf splits valuables across layers at the largest capacity in this comparison, with pre-drilled mounting holes and two included expansion screws for anchoring inside a closet cabinet. Three access methods, personal code, emergency key, or Type-C emergency power, mean multiple recovery paths.\n\nThe felt-lined bottom protects stored items from scratching, useful for an apartment where you're storing a genuine mix of documents, jewelry, and cash rather than just one category.",
    specs: ["0.6 cu ft, removable shelf for organizing", "Two mounting holes + expansion screws included", "3 access methods including USB-C backup"],
    pros: ["Largest capacity in this comparison for genuinely mixed apartment storage needs"],
    cons: ["Mounting still requires drilling, verify your lease allows it"],
    bestFor: "Renters wanting the roomiest anchored option for mixed valuables storage.",
  },
  {
    id: "b0f7ldlrlw-ssfa",
    rank: 5,
    badge: "Best Biometric Option for Apartments",
    name: "KornerBatl 20 lb Biometric Safe with Fingerprint Lock & LED Light",
    price: "$84.99",
    rating: "4.6",
    reviews: "412",
    imageUrl: "https://m.media-amazon.com/images/I/41Ze3nZUyLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F7LDLRLW?tag=deskfinds0d-20",
    description: "At 20 pounds, this is heavy enough to resist casual carry-away even without mounting hardware confirmed in this listing, a genuine consideration for an apartment where drilling isn't an option. Fingerprint access (up to 30 stored, 0.3-second recognition) pairs with a numeric keypad, emergency key, and Type-C external power for four total access methods.\n\nTwo 20mm solid locking bolts and a 42mm thick door back the physical security, and a silent mode with keypad light supports quiet nighttime access without disturbing roommates or neighbors through shared walls.",
    specs: ["20 lbs, weight alone deters casual carry-away", "4 access methods: fingerprint, keypad, key, Type-C power", "Silent mode for quiet apartment access"],
    pros: ["20-pound weight provides real carry-away resistance without requiring mounting"],
    cons: ["No confirmed mounting hardware, relies on weight alone for anti-removal"],
    bestFor: "Renters wanting a heavy, unmounted safe with genuine carry-away resistance.",
  },
  {
    id: "b09sz6gpgr-ssfa",
    rank: 6,
    badge: "Best Thin-Wall Privacy Option",
    name: "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    price: "$31.99",
    rating: "4.5",
    reviews: "3167",
    imageUrl: "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SZ6GPGR?tag=deskfinds0d-20",
    description: "A three-wrong-entries lockout with a 5-minute cooldown deters code guessing through thin apartment walls or in close quarters with neighbors. An automatic interior light switches on for 30 seconds on keypad entry, useful in a dim apartment closet.\n\nReinforced alloy steel with pry-resistant concealed hinges backs the security, and an included waterproof/fireproof document bag adds protection for lease documents or cash bundled inside.",
    specs: ["0.23 cu ft, mountable steel box", "3-wrong-entry lockout (5 min)", "Auto interior light, low-battery warning"],
    pros: ["Lockout cooldown deters code-guessing in close-quarters apartment living"],
    cons: ["Compact interior similar to other budget options"],
    bestFor: "Apartment renters wanting a proven deterrent against attempted code guessing.",
  },
  {
    id: "b0crh68745-ssfa",
    rank: 7,
    badge: "Best Dead-Battery Backup for Apartment Use",
    name: "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    price: "$37.99",
    rating: "4.6",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH68745?tag=deskfinds0d-20",
    description: "A USB-C interface supporting an external power bank avoids a dead-battery lockout, useful in an apartment where you might not have spare AA batteries on hand but almost certainly have a phone charger. Two 0.71-inch steel reinforcement bolts and hidden hinges back the mounting.\n\nPre-drilled installation holes let you fix it under a closet, drawer, or table, at 8.98 x 6.46 x 6.61 inches of usable interior, with a compact mounting footprint that's straightforward to patch at move-out.",
    specs: ["0.23 cu ft, small mounting footprint", "USB-C emergency power backup", "Pre-drilled installation holes"],
    pros: ["USB-C emergency power backup uses equipment already on hand", "Compact mounting footprint, easy to patch at move-out"],
    cons: ["No confirmed usage history for this specific listing yet"],
    bestFor: "Renters wanting dead-battery protection with minimal move-out patching.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Prioritized mounting reversibility for rental restoration requirements", description: "We weighted smaller mounting footprints and tether-based (no-drilling) options higher, since renters often need to restore walls or floors to original condition at move-out." },
  { title: "Weighed weight-based carry-away resistance for unmounted picks", description: "One heavier pick (20 lbs) resists casual removal through sheer weight even without confirmed mounting hardware, a genuine alternative security factor for a no-drilling apartment." },
  { title: "Matched deterrent features to close-quarters apartment living", description: "Lockout cooldowns and alarm deterrents matter more in an apartment with thin walls or shared access than in a detached home, which we factored into our evaluation." },
  { title: "Excluded the inaccessible ASIN rather than fabricating its data", description: "One original candidate ASIN returned ItemNotAccessible from the product catalog API at research time. We excluded it and disclosed the gap rather than guessing." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Rental Constraint",
    table: {
      headers: ["Constraint", "Recommended pick"],
      rows: [
        ["Lease strictly prohibits drilling", "Master Lock Small Travel Safe with Cable"],
        ["Small mounting footprint, easy to patch", "Yuanshikj Small Steel Security Safe Box"],
        ["No mounting hardware, weight-based security", "KornerBatl 20 lb Biometric Safe"],
        ["Shared apartment, roommate deterrence", "Small Safe for Home, 6.69\"H (alarm + mute)"],
      ],
    },
  },
  {
    subheading: "Check Your Lease Before Drilling",
    note: "Review your specific lease terms on wall and floor alterations before assuming any mounting-hardware-included safe can be installed without consequence. If you're unsure, the tether-cable Master Lock pick or the weight-based KornerBatl pick avoid the drilling question entirely.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Review your lease's alteration clause before drilling anything", explanation: "Many leases require restoring walls to original condition at move-out, and unauthorized drilling can affect your security deposit. Confirm this before mounting any safe." },
  { criterion: "Consider a heavier, unmounted safe as a drilling-free alternative", explanation: "Weight alone provides some carry-away resistance without needing wall or floor damage, a reasonable middle ground if drilling isn't an option." },
  { criterion: "Weigh mounting footprint size for easy move-out patching", explanation: "A smaller mounting footprint (fewer, smaller holes) is generally easier and cheaper to patch than a larger installation when you move out." },
  { criterion: "Match deterrent features to your specific apartment's access risk", explanation: "Shared or sublet apartments with roommate or landlord access benefit more from alarm deterrents than from raw steel thickness alone." },
  { criterion: "Confirm a dead-battery recovery path using equipment you already own", explanation: "Picks confirming USB-C backup let you use a phone charger you already have, rather than needing to stock spare AA batteries." },
];

export const faq: FaqItem[] = [
  { q: "What's the best apartment safe if my lease prohibits drilling?", a: "The Master Lock Small Travel Safe with Cable, which tethers to furniture without any wall or floor alteration." },
  { q: "Is there a heavy safe that doesn't need mounting?", a: "Yes, the KornerBatl 20 lb Biometric Safe weighs enough to resist casual carry-away without confirmed mounting hardware." },
  { q: "What's the best option for a shared or sublet apartment?", a: "The Small Safe for Home, explicitly framed by the manufacturer for roommate and landlord access deterrence, with an alarm and mute mode." },
  { q: "Which pick has the smallest mounting footprint to patch at move-out?", a: "The Yuanshikj Small Steel Security Safe Box, at a compact 9.05 x 6.69 x 6.69 inches." },
  { q: "Why does this list have 7 products instead of 8?", a: "One original candidate ASIN was not accessible through the Amazon catalog API at research time, so we excluded it rather than fabricating its data." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-safes-for-dorm-rooms", title: "Best Small Safes for Dorm Rooms (2026)" },
  { href: "/guide/best-small-safes-for-closets", title: "Best Small Safes for Closets (2026)" },
  { href: "/guide/best-hidden-small-safes", title: "Best Hidden Small Safes (2026)" },
];
