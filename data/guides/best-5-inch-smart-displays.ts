export const guideSlug = "best-5-inch-smart-displays";
export const guideTitle = "1 Best 5 Inch Smart Display in 2026";
export const metaTitle = "Best 5 Inch Smart Displays (2026)";
export const metaDescription =
  "Only one genuinely 5 inch class smart display exists in our verified research pool, the Echo Show 5. Here is an honest, detailed look at it.";
export const mainKeyword = "5 inch smart display";
export const introParagraphs = [
  "We're being direct about this one: our verified research pool contains exactly one genuinely 5 inch class smart display, the Amazon Echo Show 5 at roughly 5.5 inches. We looked for a second true 5 inch option, including a Lenovo Smart Clock Essential-style device, but could not confirm current pricing or imagery for one this research pass, so we're not padding this guide with an unverified product.",
  "Rather than stretch a 7 inch or 10 inch display into a false '5 inch' claim, we're giving the Echo Show 5 a thorough single-product review below and pointing you toward our related size guides if a 5 inch screen specifically isn't a hard requirement.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "5 min";
export const heroImage = "https://m.media-amazon.com/images/I/31qOIWagKNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b09b2sbhqk-echoshow5",
    rank: 1,
    badge: "The Only Verified 5 Inch Class Pick",
    name: "Amazon Echo Show 5 (newest model), Smart display, Designed for Alexa+, 2x the bass and clearer sound, Charcoal",
    price: "$89.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31qOIWagKNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09B2SBHQK?tag=deskfinds0d-20",
    description: "At roughly 5.5 inches this is the genuinely smallest and most desk-appropriate Echo Show in this guide, small enough to sit beside a keyboard without blocking a monitor. It carries a basic camera suitable for casual video calls, plus improved bass and clearer sound over earlier Show 5 generations.\n\nIts small screen limits how much information fits at a glance compared to the 10 or 15 inch models, so treat it as a bedside or compact desk clock-and-notifications display rather than a full home organization hub. The low price makes it an easy add-on even for a secondary desk.",
    specs: ["Approximately 5.5 inch display", "Basic camera for video calls", "Improved bass and sound over earlier generations", "Designed for Alexa+"],
    pros: ["Genuinely compact, fits beside a keyboard without blocking a monitor", "Lowest price among the Echo Show models here", "Camera included for casual video calls", "Improved audio over earlier Show 5 versions"],
    cons: ["Small screen limits at-a-glance information", "Basic camera resolution versus larger Echo Show models", "Not intended as a primary home organization hub"],
    bestFor: "Compact desks wanting a small clock, notifications, and casual video call display",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Applied a strict 5 inch class size definition", description: "Only counted displays genuinely in the 5 to 5.5 inch range, rather than rounding a 7 inch display down to fit this guide's search term." },
  { title: "Searched for a second genuine 5 inch option before finalizing", description: "Looked specifically for smaller compact smart displays like a Lenovo Smart Clock-style device but could not verify current pricing or imagery this research pass." },
  { title: "Reviewed the single confirmed pick in depth rather than padding the list", description: "Chose to give the Echo Show 5 a thorough, detailed writeup instead of including unrelated larger displays to reach a longer list." },
  { title: "Cross-referenced against our other size-specific guides", description: "Pointed toward our 7 and 10 inch guides for buyers whose actual need is a small display broadly, not specifically 5 inches." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why This Guide Only Has One Pick",
    note: "We held a strict size definition rather than including a 7 inch Nest Hub or larger display just to lengthen this list. If a genuine 5 inch class screen matters specifically to you, the Echo Show 5 is currently the only verified option in our research. If you're flexible on size, our small smart displays and 7 inch guides cover close alternatives.",
  },
  {
    subheading: "Is the Echo Show 5 Right for You?",
    cards: [{ label: "Very tight desk or bedside table", text: "Its compact 5.5 inch screen and low price fit well here." }, { label: "Need a lot of at-a-glance information", text: "Consider a 7 or 10 inch display instead for more visible detail." }, { label: "Want the lowest price in this product category", text: "The Echo Show 5 is the most affordable Echo Show model." }],
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm you actually need a 5 inch screen specifically", explanation: "If you're flexible on size, a 7 inch Nest Hub shows more information at a glance for a similar price range, only insist on 5 inches if desk space is genuinely that tight." },
  { criterion: "Check the exact diagonal measurement, not just the model name", explanation: "The Echo Show 5 measures roughly 5.5 inches diagonally, confirm current specs on the listing since exact measurements can vary slightly by generation." },
  { criterion: "Weigh the smaller screen against reduced at-a-glance detail", explanation: "A 5 inch screen fits a tight space but shows less calendar or notification detail simultaneously than a larger display, expect more tapping through menus." },
  { criterion: "Consider camera quality expectations for this size class", explanation: "The Echo Show 5's camera is more basic than the larger Echo Show models, adequate for casual calls but not the sharpest option if video quality matters most." }
];

export const faq: FaqItem[] = [
  { q: "Is the Echo Show 5 the only 5 inch smart display available?", a: "It's the only one we could verify with confirmed pricing and imagery in our research pool this pass. Other compact options may exist but we could not confirm their current listings." },
  { q: "How big is the Echo Show 5's screen exactly?", a: "Roughly 5.5 inches diagonally, placing it in the 5 inch size class along with a low price point relative to larger Echo Show models." },
  { q: "Should I get a 5 inch display or go slightly bigger?", a: "If desk space is very tight, the 5 inch class works well. If you have a bit more room, a 7 inch Nest Hub shows meaningfully more information at a glance." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-smart-displays-for-desks", title: "Best Small Smart Displays for Desks (2026)" },
  { href: "/guide/best-7-inch-smart-displays", title: "Best 7 Inch Smart Displays (2026)" },
  { href: "/guide/best-smart-displays-under-monitors", title: "Best Smart Displays Under Monitors (2026)" }
];
