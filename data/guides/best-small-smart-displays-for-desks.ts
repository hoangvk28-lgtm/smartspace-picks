export const guideSlug = "best-small-smart-displays-for-desks";
export const guideTitle = "2 Best Small Smart Displays for Desks in 2026";
export const metaTitle = "Best Small Smart Displays for Desks";
export const metaDescription =
  "2 genuinely compact smart displays evaluated for small desks, the 5.5 inch Echo Show 5 and the 7 inch Nest Hub, with an honest size comparison.";
export const mainKeyword = "small smart display for desk";
export const introParagraphs = [
  "\"Small\" is doing real work in this search term, so we're only including displays that are genuinely compact, not simply the smallest option in a lineup of large ones. Out of our verified research pool, exactly two models qualify as genuinely small: the roughly 5.5 inch Echo Show 5 and the 7 inch Google Nest Hub.",
  "We looked for additional verified compact options, including a Lenovo Smart Clock-style device, but could not confirm pricing or imagery for one this research pass, so we kept this guide honest at two picks rather than padding it with an unverified product.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "6 min";
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
    badge: "Smallest, Most Desk-Friendly Pick",
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
  },
  {
    id: "b0clbmvwk2-nesthub7",
    rank: 2,
    badge: "Best Small Pick with No Camera",
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
  { title: "Applied a genuine size threshold, not just relative smallness", description: "Only included displays under roughly 7 inches, rather than calling the smallest model in a larger lineup 'small' by comparison alone." },
  { title: "Searched for additional compact options before finalizing the list", description: "Looked specifically for other genuinely small smart displays but could not verify pricing or imagery for additional models this research pass." },
  { title: "Desk footprint measured directly against typical keyboard and monitor placement", description: "Confirmed both picks fit beside a keyboard without blocking a monitor, the core requirement for this specific guide." },
  { title: "Camera presence flagged as the key differentiator between the two picks", description: "Since both displays are similarly compact, highlighted the camera difference as the most practical distinction for buyers choosing between them." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why Only Two Picks",
    note: "We held a genuine size bar for this guide rather than including a mid-size 10 inch display just because it's smaller than a 15 inch one. Only the Echo Show 5 and the Nest Hub 7 inch are genuinely compact enough to disappear beside a keyboard, and we could not verify a third compact option this research pass.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Smallest possible footprint, lowest price", "Amazon Echo Show 5"], ["Small footprint with no camera at all", "Google Nest Hub 7\""]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Hold a genuine size threshold, not just relative smallness", explanation: "A 10 inch display is smaller than a 15 inch one, but that doesn't make it genuinely small for a desk. Look for displays under roughly 7 inches if compact desk placement is the priority." },
  { criterion: "Decide if a camera matters for your small display", explanation: "The Echo Show 5 has a basic camera for casual video calls, while the Nest Hub has none at all, choose based on whether you want that feature in a compact form factor." },
  { criterion: "Confirm your voice assistant ecosystem before choosing", explanation: "The Echo Show 5 uses Alexa and the Nest Hub uses Google Assistant, pick based on which ecosystem already manages your calendar and smart home devices." },
  { criterion: "Expect a smaller display to show less information at a glance", explanation: "Both compact picks here trade some at-a-glance information density for their smaller footprint, expect to tap through more screens for detail than a larger display would show directly." }
];

export const faq: FaqItem[] = [
  { q: "What is the smallest smart display available for a desk?", a: "In our verified research, the Amazon Echo Show 5 at roughly 5.5 inches is the smallest, with the 7 inch Google Nest Hub close behind." },
  { q: "Are there smaller smart displays than the Echo Show 5?", a: "Smaller options exist in the broader market, but we could not verify current pricing or imagery for additional compact models this research pass, so we kept this guide to two confirmed picks." },
  { q: "Does the small Nest Hub have a camera?", a: "No, the Nest Hub 7 inch has no built-in camera at all, unlike the Echo Show 5 which includes a basic camera for casual video calls." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-smart-displays-for-desks", title: "Best Smart Displays for Desks (2026)" },
  { href: "/guide/best-smart-displays-under-monitors", title: "Best Smart Displays Under Monitors (2026)" },
  { href: "/guide/best-5-inch-smart-displays", title: "Best 5 Inch Smart Displays (2026)" }
];
