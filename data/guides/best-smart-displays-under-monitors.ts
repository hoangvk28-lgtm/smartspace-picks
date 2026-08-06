export const guideSlug = "best-smart-displays-under-monitors";
export const guideTitle = "2 Best Smart Displays for Under a Monitor in 2026";
export const metaTitle = "Best Smart Displays Under Monitors";
export const metaDescription =
  "2 short, compact smart displays evaluated specifically for fitting under or beside a monitor without blocking your screen or workspace.";
export const mainKeyword = "smart display under monitor";
export const introParagraphs = [
  "Fitting a smart display under or directly beside a monitor without blocking your view requires genuine shortness, not just a small screen diagonal. Out of our verified research pool, only the compact Echo Show 5 and the 7 inch Nest Hub are short enough to sit low beside a monitor without competing for eye-level space.",
  "The 10 and 15 inch models we cover in other guides are simply too tall and wide for this specific placement, they belong beside your desk setup or on an adjacent surface, not tucked directly under a monitor. We excluded them here rather than pretend they fit this narrow use case.",
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
    badge: "Shortest, Most Under-Monitor-Friendly Pick",
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
    badge: "Best Slightly Larger Pick That Still Fits",
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
  { title: "Physical height and depth prioritized over screen diagonal", description: "Focused on how short and shallow each display actually is, since a wide but short display fits under a monitor better than a narrow but tall one." },
  { title: "Larger models deliberately excluded", description: "Left out the 10 and 15 inch displays from our other guides, since their height makes them a poor fit specifically for under-monitor placement." },
  { title: "Viewing angle from a seated position considered", description: "Checked whether each compact display remains legible when placed low and viewed from a normal seated position at a desk." },
  { title: "Cable and stand footprint checked for tight spaces", description: "Considered the base and cable routing needed for each model in the narrow space typically available under or beside a monitor." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why Only Two Picks Qualify",
    note: "This is a genuinely narrow use case. A display needs to be both short and shallow to sit under or directly beside a monitor without blocking your screen or crowding your keyboard. Only the Echo Show 5 and the Nest Hub 7 inch meet that bar among our verified models, the larger Echo Show 10 and 15 are simply too tall for this specific placement.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Shortest possible footprint", "Amazon Echo Show 5"], ["Slightly larger screen that still fits", "Google Nest Hub 7\""]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Measure the clearance under and beside your monitor before buying", explanation: "Even a compact display needs a few inches of clear height, measure your actual desk setup rather than assuming any 'small' display will fit." },
  { criterion: "Avoid the 10 and 15 inch models for this specific placement", explanation: "Those larger displays are genuinely too tall for tucking under or directly beside a monitor, they belong on an adjacent surface instead." },
  { criterion: "Check viewing angle from your seated eye level", explanation: "A display placed low under a monitor needs to stay legible when glanced down at from a normal seated position, not just when viewed head-on in a product photo." },
  { criterion: "Consider cable routing in a tight under-monitor space", explanation: "A short display still needs a power cable routed cleanly in a cramped space, plan cable management before committing to this placement." }
];

export const faq: FaqItem[] = [
  { q: "What smart display fits under a monitor without blocking it?", a: "The compact Echo Show 5 and the 7 inch Nest Hub are both short enough to sit under or beside most monitors without blocking your view." },
  { q: "Can I put a 10 inch smart display under my monitor?", a: "It's possible on a very deep desk, but the Echo Show 10's height makes it a poor fit for most under-monitor setups, it's better suited to an adjacent open desk space." },
  { q: "Is a smaller smart display always shorter?", a: "Generally yes among these picks, but always check actual physical dimensions rather than screen diagonal alone, since stand height varies by model." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-smart-displays-for-desks", title: "Best Small Smart Displays for Desks (2026)" },
  { href: "/guide/best-5-inch-smart-displays", title: "Best 5 Inch Smart Displays (2026)" },
  { href: "/guide/best-7-inch-smart-displays", title: "Best 7 Inch Smart Displays (2026)" }
];
