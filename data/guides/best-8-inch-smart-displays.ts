export const guideSlug = "best-8-inch-smart-displays";
export const guideTitle = "8 Inch Smart Displays: An Honest Category Gap Note";
export const metaTitle = "Best 8 Inch Smart Displays (2026)";
export const metaDescription =
  "We could not verify current pricing or imagery for a genuine 8 inch smart display this research pass. Here is what we can honestly recommend.";
export const mainKeyword = "8 inch smart display";
export const introParagraphs = [
  "We're being upfront here rather than guessing: an 8 inch class smart display genuinely exists on the market, Amazon's Echo Show 8 lineup, but we could not independently confirm current pricing and product imagery for it through our verified research pass this time. Rather than publish an unverified price or a placeholder image, we're not including it as a scored pick in this guide.",
  "What we can honestly recommend instead are the closest verified alternatives from our research: the compact 7 inch Nest Hub just below this size class, and the 10.1 inch Echo Show 10 just above it. If an 8 inch Echo Show specifically is what you're after, search \"Echo Show 8\" directly on Amazon and check current pricing and reviews there, since we don't want to publish unverified numbers here.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "5 min";
export const heroImage = "https://m.media-amazon.com/images/I/31xy1VOYHUL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0clbmvwk2-nesthub7",
    rank: 1,
    badge: "Closest Verified Pick Just Below 8 Inches",
    name: "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant - Charcoal",
    price: "See price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31xy1VOYHUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLBMVWK2?tag=deskfinds0d-20",
    description: "The Nest Hub is a genuine 7 inch display and, unlike every Echo Show in this guide, it has no built-in camera at all, an important distinction for anyone specifically avoiding a camera on their desk. It runs Google Assistant instead of Alexa, a real difference if your calendar and reminders already live in a Google account.\n\nThe compact size and lack of camera make it well suited to a desk or nightstand where a lens pointed at you is unwelcome, though it also means it cannot do Alexa-style video calling that the Echo Show models support. It also ships in a lighter Chalk color option for buyers who prefer that finish.",
    specs: ["7 inch display", "No built-in camera", "Google Assistant integration", "Also available in Chalk color"],
    pros: ["Genuinely no built-in camera, a real privacy advantage on a desk", "Compact 7 inch size fits small spaces easily", "Deep Google Assistant and Google Calendar integration", "Lower typical price point than most Echo Show models"],
    cons: ["No camera means no built-in video calling", "Google Assistant only, not Alexa", "Price not independently confirmed at publish time, check current listing"],
    bestFor: "Privacy-conscious buyers wanting a compact Google Assistant display with no camera",
  },
  {
    id: "b07vhz41l8-echoshow10",
    rank: 2,
    badge: "Closest Verified Pick Just Above 8 Inches",
    name: "Amazon Echo Show 10 (newest model), HD smart display with premium sound, motion and Alexa, Charcoal",
    price: "See price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31gjXvcGopL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VHZ41L8?tag=deskfinds0d-20",
    description: "The Echo Show 10 pairs a 10.1 inch HD screen with a motorized base that physically rotates to follow you around a room, a genuinely distinctive feature none of the other displays in this guide offer. Premium front-firing speakers make it a strong pick for background music or video calls at a desk, not just glanceable information.\n\nThe motion tracking uses a camera, so buyers with privacy concerns should check the physical camera shutter and motion settings in the Alexa app before relying on it near a desk. It is also the largest genuinely 10 inch class display here, taking noticeably more desk space than the Echo Show 5 or Nest Hub.",
    specs: ["10.1 inch HD display", "Motorized base with motion tracking", "Premium front-firing speakers", "Built-in camera with physical shutter"],
    pros: ["Motorized base actively follows you around a room", "Premium sound quality for a smart display", "Genuine 10 inch class screen size", "Built-in camera with a physical privacy shutter"],
    cons: ["Larger desk footprint than compact models", "Motion tracking relies on an always-available camera", "Price not independently confirmed at publish time, check current listing"],
    bestFor: "Buyers wanting a larger screen with motorized tracking for hands-free video calls at a desk",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Declined to publish unverified pricing or imagery", description: "Confirmed an 8 inch Echo Show exists on the market but could not verify its current price or product image through our research pass, and chose not to include it rather than guess." },
  { title: "Selected the closest genuinely verified alternatives by size", description: "Chose the 7 inch Nest Hub and 10.1 inch Echo Show 10 specifically as the nearest confirmed size options bracketing the 8 inch class." },
  { title: "Disclosed the category gap directly rather than silently omitting it", description: "Explained plainly why this guide looks different from a typical ranked list, instead of quietly filling gaps with assumptions." },
  { title: "Pointed buyers toward the specific product name to search directly", description: "Named the actual Echo Show 8 model so buyers who specifically want that size can search and verify current listing details themselves." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why This Guide Looks Different",
    note: "An 8 inch smart display, specifically the Echo Show 8, is a real product on the market. We simply could not independently verify its current price or pull a compliant product image through our research pass this time, and we won't publish a guessed price or a placeholder image. This guide covers the closest genuinely verified alternatives instead.",
  },
  {
    subheading: "If You Specifically Want 8 Inches",
    note: "Search \"Echo Show 8\" directly on Amazon and check the current listing for pricing, reviews, and specs. We'll update this guide with a fully verified pick as soon as we can confirm current data through our research process.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick From Our Verified Pool",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Slightly smaller than 8 inches, no camera", "Google Nest Hub 7\""], ["Slightly larger than 8 inches, camera included", "Amazon Echo Show 10"]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify current pricing directly if buying an unverified model", explanation: "If you search for an 8 inch smart display we couldn't verify here, always check the current live listing price rather than relying on any older cached number you find elsewhere." },
  { criterion: "Decide if 7 or 10.1 inches works as a substitute", explanation: "If exact 8 inch sizing isn't a hard requirement, the 7 inch Nest Hub or 10.1 inch Echo Show 10 are both genuinely verified options bracketing that size closely." },
  { criterion: "Camera presence differs meaningfully between our two verified alternatives", explanation: "The Nest Hub has no camera at all, while the Echo Show 10 has a full camera with motorized tracking, a bigger practical difference than the inch difference in screen size." },
  { criterion: "Don't assume every product searched exists in our verified pool", explanation: "This guide is an example of a genuine research gap. Always check whether a site's recommendation reflects verified current data or an assumption before trusting a listed price." }
];

export const faq: FaqItem[] = [
  { q: "Why isn't there a ranked Echo Show 8 pick in this guide?", a: "We could not independently verify its current price or pull a compliant product image through our research pass this time, so we chose not to publish unverified numbers rather than guess." },
  { q: "What's the closest verified alternative to an 8 inch smart display?", a: "The 7 inch Nest Hub sits just below that size, and the 10.1 inch Echo Show 10 sits just above it, both are fully verified in our research pool." },
  { q: "Will this guide be updated with a verified 8 inch pick?", a: "Yes, once we can confirm current pricing and imagery for an 8 inch model through our research process, we'll update this guide accordingly." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-7-inch-smart-displays", title: "Best 7 Inch Smart Displays (2026)" },
  { href: "/guide/best-10-inch-smart-displays", title: "Best 10 Inch Smart Displays (2026)" },
  { href: "/guide/best-smart-displays-for-desks", title: "Best Smart Displays for Desks (2026)" }
];
