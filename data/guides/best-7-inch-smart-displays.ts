export const guideSlug = "best-7-inch-smart-displays";
export const guideTitle = "1 Best 7 Inch Smart Display in 2026";
export const metaTitle = "Best 7 Inch Smart Displays (2026)";
export const metaDescription =
  "The Google Nest Hub is the only verified genuine 7 inch smart display we found this pass. Here is a detailed, honest look at it.";
export const mainKeyword = "7 inch smart display";
export const introParagraphs = [
  "Our verified research pool contains exactly one genuine 7 inch class smart display, the Google Nest Hub 2nd generation. We looked for a comparable 7 inch Echo Show or other competing model, but Amazon's Echo Show lineup jumps from the roughly 5.5 inch Echo Show 5 straight to the 8.7 inch and larger models, with no verified genuine 7 inch Echo Show in current production.",
  "Rather than round an 8 inch display down to fit this search term, we're giving the Nest Hub a thorough single-product review below, including its most distinctive trait: no built-in camera at all.",
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
    badge: "The Only Verified 7 Inch Class Pick",
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
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Applied a strict 7 inch class size definition", description: "Only counted displays genuinely at or near 7 inches, rather than rounding an 8 inch or larger display down to fit this guide's search term." },
  { title: "Checked for a competing 7 inch Echo Show model", description: "Confirmed Amazon's current Echo Show lineup has no genuine 7 inch class model, jumping from roughly 5.5 inches to 8.7 inches and larger." },
  { title: "Camera absence verified and treated as a defining trait", description: "Confirmed directly that this specific model has no built-in camera, an important, easy-to-miss distinction from other Nest Hub generations." },
  { title: "Reviewed the single confirmed pick in depth", description: "Chose a thorough single-product writeup over padding the list with a rounded-up or rounded-down size match." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why This Guide Only Has One Pick",
    note: "The 7 inch size class is genuinely thin on Amazon's side, with no current Echo Show model at this exact size. The Google Nest Hub 2nd generation is the clear and only verified fit, distinguished specifically by having no built-in camera at all.",
  },
  {
    subheading: "The Camera Question Matters Here Specifically",
    note: "Unlike every Echo Show in this size range, the Nest Hub has no camera, meaning no video calling but also no lens to worry about near a desk or bedside table. Confirm this tradeoff works for your use case before buying.",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm you're comfortable with no camera at all", explanation: "The Nest Hub's lack of a camera is a genuine privacy advantage for some buyers and a dealbreaker for others who want video calling, decide which matters more before buying." },
  { criterion: "Check Google Assistant compatibility with your calendar and smart home setup", explanation: "The Nest Hub runs Google Assistant exclusively, confirm this fits your existing ecosystem rather than assuming universal compatibility with Alexa-based smart home devices." },
  { criterion: "Don't expect Echo-style skills or Alexa routines", explanation: "Switching to a Google Assistant device means leaving behind any Alexa-specific routines or skills you may already use, factor in this switching cost." },
  { criterion: "Verify current screen brightness and viewing angle for your placement", explanation: "A 7 inch display near a bright window can suffer glare, check current buyer feedback on brightness before placing it somewhere with strong natural light." }
];

export const faq: FaqItem[] = [
  { q: "Is the Google Nest Hub the only 7 inch smart display available?", a: "It's the only one we could verify in our research pool this pass. Amazon's current Echo Show lineup has no model at this exact 7 inch size class." },
  { q: "Does the 7 inch Nest Hub have a camera?", a: "No, this specific 2nd generation model has no built-in camera at all, an important distinction from other smart displays and even other Nest Hub generations." },
  { q: "Can I use Alexa skills on the Nest Hub?", a: "No, the Nest Hub runs Google Assistant exclusively and does not support Alexa skills or routines." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-5-inch-smart-displays", title: "Best 5 Inch Smart Displays (2026)" },
  { href: "/guide/best-8-inch-smart-displays", title: "Best 8 Inch Smart Displays (2026)" },
  { href: "/guide/best-smart-displays-under-monitors", title: "Best Smart Displays Under Monitors (2026)" }
];
