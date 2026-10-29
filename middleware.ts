import { NextRequest, NextResponse } from "next/server";

// Bots that ignore robots.txt disallow rules, crawl aggressively for AI-training
// data or SEO tool indexes, or are generic scraper clients. None send real user
// traffic back, and together they were driving a large share of billed ISR Read
// Units and Fast Origin Transfer. Blocked here before ISR is touched.
// Search + AI-search crawlers (Googlebot, Bingbot, GPTBot, ClaudeBot,
// PerplexityBot, etc.) are intentionally NOT listed - see app/robots.ts.
const BLOCKED_USER_AGENTS = [
  /Bytespider/i,
  /CCBot/i,
  /PetalBot/i,
  /AhrefsBot/i,
  /SemrushBot/i,
  /MJ12bot/i,
  /DotBot/i,
  /BLEXBot/i,
  /DataForSeoBot/i,
  /Barkrowler/i,
  /serpstatbot/i,
  /SeekportBot/i,
  /ImagesiftBot/i,
  /Amazonbot/i,
  /meta-externalagent/i,
  /facebookexternalhit/i,
  /Sogou/i,
  /YisouSpider/i,
  /Baiduspider/i,
  /AliyunSecBot/i,
  /HeadlessChrome/i,
  /python-requests|python-urllib|aiohttp|httpx/i,
  /Go-http-client/i,
  /Scrapy/i,
  /curl\//i,
  /wget/i,
  /node-fetch|axios/i,
  /okhttp/i,
  /Java\//i,
  /libwww-perl/i,
];

// Singapore traffic is overwhelmingly datacenter scrapers (AWS/Alibaba/Tencent
// ap-southeast regions) for this US-focused affiliate site. Legit search bots
// are let through by user agent; everything else from SG is blocked.
const BLOCKED_COUNTRIES = new Set(["SG"]);
const ALLOWED_BOTS = /Googlebot|bingbot|GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-Web|PerplexityBot|Applebot|DuckDuckBot|YandexBot/i;

// The 403 must never be cached: Cloudflare's "HTML pages - cache" rule on
// /guide/* would otherwise store one blocked response and serve it to every
// real visitor for that URL (including Bing/Google search clicks).
function forbidden() {
  return new NextResponse("Forbidden", {
    status: 403,
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "CDN-Cache-Control": "no-store",
      "Cloudflare-CDN-Cache-Control": "no-store",
    },
  });
}

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";
  if (!ua || BLOCKED_USER_AGENTS.some((re) => re.test(ua))) {
    return forbidden();
  }
  // The site sits behind the Cloudflare proxy, so x-vercel-ip-country is the
  // country of the Cloudflare edge, not the visitor (Vietnam/Asia visitors are
  // often routed through Cloudflare's SG PoP). Prefer CF-IPCountry, which is the
  // real visitor country, and only fall back to Vercel's header when not proxied.
  const country =
    request.headers.get("cf-ipcountry") ??
    (request.headers.get("cf-ray") ? "" : request.headers.get("x-vercel-ip-country") ?? "");
  if (BLOCKED_COUNTRIES.has(country) && !ALLOWED_BOTS.test(ua)) {
    return forbidden();
  }
  return NextResponse.next();
}

export const config = {
  // Only pages - skip static assets, images, and robots/sitemap/IndexNow key files
  // so middleware doesn't burn a function invocation on every asset request.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|webp|svg|ico|txt|xml|css|js)$).*)",
  ],
};
