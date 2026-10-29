import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: [
          "/admin",
          "/admin/",
          "/api/admin",
          "/api/admin/",
          "/api/",
          "/_next/",
        ],
      },
      // AI crawlers: allow full indexing so content surfaces in AI search results
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // Bytespider (ByteDance) and CCBot (Common Crawl) crawl aggressively
      // for AI-training data without sending real user traffic back, and were
      // driving a large share of billed ISR Read Units. Blocked outright.
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      // SEO-tool and scraper crawlers: no referral traffic, heavy ISR reads.
      ...["PetalBot","AhrefsBot","SemrushBot","MJ12bot","DotBot","BLEXBot","DataForSeoBot","Barkrowler","serpstatbot","Amazonbot","meta-externalagent","ImagesiftBot","Baiduspider","YisouSpider","Sogou"].map((ua) => ({ userAgent: ua, disallow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
