export const guideSlug = "best-desk-phone-arms";
export const guideTitle = "8 Best Desk Phone Arms in 2026";
export const metaTitle = "Best Desk Phone Arms (2026)";
export const metaDescription =
  "8 desk phone arms we researched for clamp stability, reach, and touch-interaction stability, from budget goosenecks to overhead recording arms.";
export const mainKeyword = "desk phone arms";
export const introParagraphs = [
  "A desk phone arm clamps to your desk edge and holds your phone at eye level or overhead, freeing your hands for video calls, recipe following, or overhead recording. The category spans simple gooseneck clamps under $15 to full articulating magic arms built for content creators.",
  "We researched clamp weight capacity against a phone plus protective case (not a bare phone), desk edge thickness compatibility, and stability under touch interaction, since tapping a mounted phone's screen creates lateral force a passively displayed device never experiences.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0ckys81t4-dpa",
    rank: 1,
    badge: "Best Overall Pick",
    name: "LISEN Cell Phone Holder for Bed Desk, Overhead Phone Mount",
    price: "$19.68",
    rating: "4.4",
    reviews: "2,655",
    imageUrl: "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKYS81T4?tag=deskfinds0d-20",
    description:
      "This third-generation LISEN arm uses a steel body with shock-absorbing springs and a tension knob at each joint, addressing the sagging problem that plagues cheaper gooseneck arms once a phone's weight settles in. The one-touch spring clip has a built-in silicone pad and handles phones with most protective cases attached.\n\nThe bi-directional base clamps to desks, bed frames, or nightstands, and the whole arm folds flat for storage. It is the most structurally reinforced pick here, appropriate for buyers who plan to leave a phone mounted overhead for extended video sessions.",
    specs: ["Steel body, spring-tensioned joints", "One-touch spring clip with silicone pad", "Bi-directional clamp base", "Foldable for storage"],
    pros: ["Reinforced joints resist sagging under phone weight", "Case-friendly spring clip", "Works on desks, beds, and nightstands", "Folds flat when not in use"],
    cons: ["Bulkier than simple gooseneck arms", "Higher price than basic clamp stands", "Overkill for occasional, short-duration use"],
    bestFor: "Buyers who want the most stable overhead arm for extended video calls or filming.",
  },
  {
    id: "b07p2vk93p-dpa",
    rank: 2,
    badge: "Best Budget Pick",
    name: "SAIJI Gooseneck Bed Phone Holder, Flexible Long Arm Phone Mount",
    price: "$12.99",
    rating: "4.3",
    reviews: "32,606",
    imageUrl: "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07P2VK93P?tag=deskfinds0d-20",
    description:
      "SAIJI's arm is a 33.46 inch flexible gooseneck built from 8.5mm aluminum alloy, long enough to reach from a desk edge clamp to well above eye level. The anti-slip silicone base pad is designed not to mark furniture, and the clamp fits phones from 4.0 to 6.3 inches wide.\n\nAt this price it is the most popular pick by review volume, though buyers with larger phones plus a thick case should check the clip's width tolerance before assuming a snug fit. It comes with a 12-month replacement warranty.",
    specs: ["33.46in flexible aluminum arm", "360° rotation", "Fits phones 4.0-6.3in wide", "Anti-slip silicone base"],
    pros: ["Very affordable", "Long reach for flexible positioning", "Durable aluminum construction", "12-month warranty"],
    cons: ["Clip width may be tight with bulky cases", "Fixed clamp height range of 0-2.75in", "No tension knobs like the LISEN pick"],
    bestFor: "Budget buyers who want a reliable, long-reach gooseneck arm without paying for extra reinforcement.",
  },
  {
    id: "b079qy6rfq-dpa",
    rank: 3,
    badge: "Best for Overhead Recording",
    name: "MAGIPEA Gooseneck Phone Holder for Bed, Flexible Overhead Mount",
    price: "$14.99",
    rating: "4.4",
    reviews: "23,326",
    imageUrl: "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B079QY6RFQ?tag=deskfinds0d-20",
    description:
      "MAGIPEA uses a high-density aluminum alloy core that the listing describes as intentionally stiff to prevent drooping, meaning you bend it into position with both hands rather than expecting one-handed micro-adjustment. The base clamp opens to 3 inches, wide enough for thick bed frames or desk edges.",
    specs: ["Stiff-core aluminum gooseneck", "360° rotation clamp", "3in wide base clamp", "Fits 3.5-7in devices"],
    pros: ["Stiff arm resists sagging by design", "Wide clamp fits thick desk edges", "EVA pads protect furniture", "Fits larger phones up to 7in"],
    cons: ["Requires two hands to reposition", "Similar price/feature tier to SAIJI", "Bulkier clamp than slim clip-on designs"],
    bestFor: "Buyers doing overhead cooking or craft recording who want a stiff arm that holds position without drift.",
  },
  {
    id: "b0d5yj42cx-dpa",
    rank: 4,
    badge: "Best for Content Creators",
    name: "SMALLRIG 22\" Magic Arm Clamp, Overhead Phone Mount Holder Stand",
    price: "$33.90",
    rating: "4.4",
    reviews: "1,732",
    imageUrl: "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5YJ42CX?tag=deskfinds0d-20",
    description:
      "This is a genuine magic arm, not a bendable gooseneck, using double-ball clamp joints at each segment that lock with a single friction knob rather than relying on stiff material to hold a bent shape. Rated for 600g (21oz), it handles most phones plus a case comfortably.\n\nThe crab clamp opens to 63.5mm and includes silicone padding at twelve contact points to protect both the clamp and whatever it holds. This is built for content creators mounting phones, webcams, or small lights interchangeably, not exclusively phone display.",
    specs: ["22in double-ball-joint magic arm", "600g (21oz) load capacity", "Crab clamp opens to 63.5mm", "1/4-20 mount, phone clamp included"],
    pros: ["Locks at any angle via friction knob, no sagging", "Multi-device compatible (phone, webcam, light)", "Sturdy anti-deflection clamp interface", "Genuine 21oz load rating disclosed"],
    cons: ["Most expensive pick in this guide", "Overkill if you only need basic phone viewing", "Requires occasionally re-tightening the friction knob"],
    bestFor: "Content creators who want one arm that can swap between phone, webcam, and light mounting.",
  },
  {
    id: "b0dn1c9rh2-dpa",
    rank: 5,
    badge: "Best for Multi-Device Mounting",
    name: "NEEWER 22\" Magic Arm with Desk C Clamp, Overhead Camera Mount",
    price: "$33.99",
    rating: "4.5",
    reviews: "988",
    imageUrl: "https://m.media-amazon.com/images/I/31jBgnNJK5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DN1C9RH2?tag=deskfinds0d-20",
    description:
      "NEEWER's magic arm competes directly with the SMALLRIG pick above, with anti-twist pins at each mounting interface to keep the connection secure during shooting. The included phone holder clamps devices from 2.2 to 3.2 inches wide, and the arm accepts standard 1/4 and 3/8 inch threaded accessories.\n\nIts wider device compatibility list (action cameras, ring lights, field monitors) makes it a slightly more flexible buy than a phone-only arm, at a nearly identical price to the SMALLRIG option.",
    specs: ["22in magic arm with C clamp", "Anti-twist mounting pins", "1/4in and 3/8in threads", "Phone holder fits 2.2-3.2in width"],
    pros: ["Anti-twist pins prevent connection slippage", "Wide device compatibility", "Non-slip clamp pads", "Comparable quality to SMALLRIG at similar price"],
    cons: ["Same premium price tier as SMALLRIG", "Phone clip is a separate accessory piece", "Larger footprint than a simple gooseneck"],
    bestFor: "Buyers who want a magic arm that doubles for cameras, lights, and microphones beyond just phone viewing.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Clamp weight capacity with a case", description: "We checked whether each arm's rated capacity and clip design account for a phone plus a protective case, not just a bare phone." },
  { title: "Touch-interaction stability", description: "We evaluated arm construction (stiff-core, spring-tensioned, or friction-locked) for how well it resists shifting when you tap or swipe the mounted screen." },
  { title: "Desk edge compatibility", description: "We noted each clamp's opening range against common desk, bed frame, and nightstand edge thicknesses." },
  { title: "Reach and positioning range", description: "We compared arm length and rotation range for genuine flexibility across different desk layouts and overhead recording setups." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Use Case",
    table: {
      headers: ["Your need", "Recommended pick"],
      rows: [
        ["Most stable arm for long video calls", "LISEN Cell Phone Holder"],
        ["Cheapest reliable gooseneck", "SAIJI Gooseneck Bed Phone Holder"],
        ["Stiff arm for overhead cooking/craft videos", "MAGIPEA Gooseneck Phone Holder"],
        ["Multi-device mount (phone, webcam, light)", "SMALLRIG 22\" Magic Arm"],
        ["Widest device compatibility list", "NEEWER 22\" Magic Arm"],
      ],
    },
  },
  {
    subheading: "Gooseneck vs. Magic Arm",
    cards: [
      { label: "Gooseneck arms", text: "Bend into shape via stiff or spring-loaded material. Cheaper, lighter, but can droop over time under a phone's sustained weight." },
      { label: "Magic arms", text: "Use ball-joint segments locked by a friction knob. Hold position reliably at any angle but cost more and are bulkier." },
    ],
  },
  {
    subheading: "Case Compatibility Matters More Than Phone Size Alone",
    note: "A spring clip rated for a 6.3in phone may still pinch too tightly once a thick protective case is added. Check the clip's stated width tolerance against your phone plus case combined, not the phone alone.",
  },
  {
    subheading: "Desk Marking Risk",
    note: "Clamp torque strong enough to hold steady under touch interaction can leave marks on softer desk finishes. Look for silicone or EVA padding at the clamp contact points, present on every pick above.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify weight capacity with a case attached", explanation: "A phone plus a protective case can weigh 20-30% more than the bare device. Check the arm's rated capacity against your actual combined weight, not just the phone's spec sheet weight." },
  { criterion: "Test stability under touch, not just static display", explanation: "Tapping or swiping a mounted phone's screen creates lateral force a passively viewed device never experiences. Spring-tensioned or friction-locked arms handle this better than simple stiff-core goosenecks." },
  { criterion: "Match clamp width to your desk edge", explanation: "Clamp opening ranges vary from under 2 inches to over 3 inches. Measure your desk edge thickness before buying, especially for glass desks or thick standing-desk tops." },
  { criterion: "Decide gooseneck or magic arm based on how often you reposition", explanation: "Goosenecks are cheaper but can sag with repeated bending over months of use. Magic arms with a friction-lock knob hold position more reliably if you readjust daily." },
  { criterion: "Check reach against your actual desk layout", explanation: "A 22-inch magic arm reaches much farther than a compact 12-inch gooseneck. Measure the distance from your desk edge to your intended phone position before choosing arm length." },
];

export const faq: FaqItem[] = [
  { q: "Will a desk phone arm damage my desk surface?", a: "All the picks in this guide use silicone or EVA padding at the clamp contact points to reduce marking risk, but very high clamp torque on soft wood finishes can still leave faint marks over time. Check felt pads for glass or lacquered desks specifically." },
  { q: "Can these arms hold a phone with a thick case?", a: "The LISEN and MAGIPEA picks have wider clip tolerances built for case-equipped phones. The SAIJI pick's clip is narrower (4.0-6.3in) so check your case-inclusive width before buying." },
  { q: "What's the difference between a gooseneck arm and a magic arm?", a: "A gooseneck bends via a flexible or stiff internal wire and holds shape through material rigidity. A magic arm uses discrete ball-joint segments locked by a friction knob, which holds position more reliably under repeated use." },
  { q: "Do I need a magic arm if I just want to watch videos in bed?", a: "No. A basic gooseneck like the SAIJI or MAGIPEA pick is sufficient for passive viewing. Magic arms are worth the extra cost mainly for content creators who need rock-solid positioning for filming or video calls." },
  { q: "Can I mount a webcam or ring light instead of a phone on these arms?", a: "The SMALLRIG and NEEWER magic arms both use standard 1/4-20 threads and can swap between a phone clip, webcam, or small light. The gooseneck picks are phone-clip only." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desk-mounted-phone-arms", title: "Best Desk-Mounted Phone Arms (2026)" },
  { href: "/guide/best-flexible-gooseneck-phone-arms", title: "Best Flexible Gooseneck Phone Arms (2026)" },
  { href: "/guide/best-overhead-phone-arms-for-desks", title: "Best Overhead Phone Arms for Desks (2026)" },
];
