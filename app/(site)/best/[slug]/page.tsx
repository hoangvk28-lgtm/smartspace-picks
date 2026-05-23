import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductPick } from "@/components/product/ProductPick";
import { GuideRecommendationBox } from "@/components/product/GuideRecommendationBox";
import { GuideComparisonTable } from "@/components/product/GuideComparisonTable";
import { AffiliateDisclosureBar } from "@/components/affiliate/AffiliateDisclosureBar";
import { Badge } from "@/components/ui/Badge";
import { RichContent } from "@/components/ui/RichContent";
import { MobileStickyPicksCTA } from "@/components/sections/MobileStickyPicksCTA";
import { getPublicGuideBySlug, getPublicGuideSlugs, getRelatedPublicGuides } from "@/lib/public-guides";
import { getPublicProducts } from "@/lib/public-products";
import { buildMetadata } from "@/lib/seo";
import { formatDate, scoreToColor } from "@/lib/utils";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

// ─── Static generation ────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getPublicGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getPublicGuideBySlug(slug);
  if (!guide) return {};

  // Use hero image as OG image when it's an absolute Supabase URL
  const heroImage = guide.heroImage && guide.heroImage.startsWith("http")
    ? guide.heroImage
    : undefined;

  const base = buildMetadata({
    title: guide.metaTitle ?? guide.title,
    description: guide.metaDescription ?? guide.description,
    path: `/best/${slug}`,
    image: heroImage,
    type: "article",
  });

  return {
    ...base,
    keywords: [guide.mainKeyword, ...guide.subKeywords],
    openGraph: {
      ...(base.openGraph as object),
      type: "article",
      publishedTime: guide.lastUpdated,
      modifiedTime: guide.lastUpdated,
      authors: [guide.author],
      section: guide.subcategorySlug.replace(/-/g, " "),
    },
  };
}

// ─── Scoring criteria for "How We Picked" ────────────────────────────────────

const scoringCriteria = [
  {
    label: "Small-Space Fit",
    weight: "25%",
    description:
      "Physical footprint, mounting options, and whether the product works without consuming space you don't have.",
  },
  {
    label: "Build Quality",
    weight: "20%",
    description:
      "Materials, finish durability, and construction quality as indicated by product specs and verified buyer feedback patterns.",
  },
  {
    label: "Ease of Use",
    weight: "20%",
    description:
      "Setup time, daily usability, and how much adjustment the product requires once in place.",
  },
  {
    label: "Value for Money",
    weight: "20%",
    description:
      "Price-to-performance ratio compared to competing products in the same subcategory.",
  },
  {
    label: "Buyer Feedback",
    weight: "15%",
    description:
      "Patterns from verified Amazon reviews — what real buyers praise and complain about most over time.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BuyingGuidePage({ params }: Props) {
  const { slug } = await params;

  const [guide, allProducts] = await Promise.all([
    getPublicGuideBySlug(slug),
    getPublicProducts(),
  ]);
  if (!guide) notFound();

  // Resolve recommended products from public products list (preserves order)
  const picks = guide.recommendedProductIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const relatedGuides = await getRelatedPublicGuides(guide.relatedGuideSlugs);

  // Alternatives — from first pick's alternatives array, skip products already in picks
  const pickIds = new Set(picks.map((p) => p.id));
  const alternatives = picks.length > 0
    ? (picks[0].alternatives ?? [])
        .map((id) => allProducts.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => p !== undefined && !pickIds.has(p.id))
    : [];

  // Aggregate bestFor / notIdealFor across all picks for "Who This Is For"
  const whoFor = [...new Set(picks.flatMap((p) => p.bestFor))].slice(0, 6);
  const whoSkip = [...new Set(picks.flatMap((p) => p.notIdealFor))].slice(0, 4);

  // Split guide sections: intro = [0], middle = [1..N-2], methodology = last
  const hasMultipleSections = guide.sections.length > 1;
  const introSection = guide.sections[0];
  const middleSections = hasMultipleSections
    ? guide.sections.slice(1, -1)
    : [];
  const methodologySection = hasMultipleSections
    ? guide.sections[guide.sections.length - 1]
    : null;

  // JSON-LD schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.lastUpdated,
    dateModified: guide.lastUpdated,
    author: { "@type": "Organization", name: guide.author },
    publisher: { "@type": "Organization", name: "SmartSpace Picks", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/best/${slug}` },
    ...(guide.heroImage && guide.heroImage.startsWith("http")
      ? { image: guide.heroImage }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/best` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}/best/${slug}` },
    ],
  };

  // ItemList schema — safe: only name + url, no fake prices/ratings
  const itemListSchema = picks.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${guide.title} — Top Picks`,
        description: `Products recommended in: ${guide.title}`,
        numberOfItems: picks.length,
        itemListElement: picks.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: `${SITE_URL}/reviews/${p.slug}`,
        })),
      }
    : null;

  // FAQPage schema — only when FAQ content actually exists on the page
  const faqSchema = guide.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {itemListSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <Container className="py-10">

        {/* ── 1. Breadcrumbs ──────────────────────────────────────────── */}
        <Breadcrumbs
          crumbs={[
            { label: "Buying Guides", href: "/best" },
            { label: guide.title },
          ]}
        />

        {/* ── 3. Article header ───────────────────────────────────────── */}
        <header className="mt-6 mb-6 max-w-3xl">
          {/* Category tag */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link
              href={`/categories/${guide.categorySlug}`}
              className="text-xs font-bold uppercase tracking-widest text-brand hover:text-brand-dark transition-colors"
            >
              {guide.subcategorySlug.replace(/-/g, " ")}
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-4 tracking-tight leading-tight">
            {guide.title}
          </h1>

          <p className="text-lg text-ink-secondary leading-relaxed mb-5">
            {guide.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-muted pb-5 border-b border-border">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              {guide.author}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Updated {formatDate(guide.lastUpdated)}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {guide.readTime} read
            </span>
            <span aria-hidden="true">·</span>
            <span>{picks.length} product{picks.length !== 1 ? "s" : ""} evaluated</span>
          </div>
        </header>

        {/* ── 2. Affiliate disclosure ──────────────────────────────────── */}
        <AffiliateDisclosureBar
          variant="banner"
          disclosureText="We may earn a commission when you buy through Amazon links. This guide is based on product specs, buyer feedback, use cases, and comparison criteria — not paid placement."
          className="mb-8 max-w-3xl"
        />

        {/* ── 4. Quick recommendation box ─────────────────────────────── */}
        {picks.length > 0 && (
          <div id="picks" className="scroll-mt-20">
            <GuideRecommendationBox picks={picks} />
          </div>
        )}

        {/* ── 5. Comparison table ──────────────────────────────────────── */}
        {picks.length > 1 && (
          <GuideComparisonTable products={picks} />
        )}

        {/* ── 6. Intro section ────────────────────────────────────────── */}
        {introSection && (
          <div className="prose max-w-3xl mb-10">
            <h2>{introSection.heading}</h2>
            {introSection.body.trim().startsWith("<") ? (
              <RichContent html={introSection.body} />
            ) : (
              introSection.body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))
            )}
          </div>
        )}

        {/* ── 7. Detailed product reviews ─────────────────────────────── */}
        {picks.length > 0 && (
          <section className="mb-12" aria-label="Detailed product reviews">
            <h2 className="text-2xl font-bold text-ink mb-2 tracking-tight">
              Our Picks — Full Reviews
            </h2>
            <p className="text-sm text-ink-secondary mb-7 max-w-2xl">
              Every recommended product evaluated in detail — scores, pros and cons, who it&apos;s best for, and full Amazon links.
            </p>
            <div className="flex flex-col gap-6">
              {picks.map((product, i) => (
                <div key={product.id} id={`pick-${product.id}`} className="scroll-mt-20">
                  <ProductPick product={product} rank={i + 1} lastUpdated={formatDate(guide.lastUpdated)} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 9. What to look for (middle guide sections) ──────────────── */}
        {middleSections.length > 0 && (
          <div aria-label="Buying advice sections">
            {middleSections.map((section) => (
              <div key={section.heading} className="prose max-w-3xl mb-10">
                <h2>{section.heading}</h2>
                {section.body.trim().startsWith("<") ? (
                  <RichContent html={section.body} />
                ) : (
                  section.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── 8. How we picked ────────────────────────────────────────── */}
        <section className="mb-12 max-w-3xl" aria-label="How we picked">
          <h2 className="text-2xl font-bold text-ink mb-2 tracking-tight">How We Picked</h2>
          <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-2xl">
            Every product in this guide was evaluated across five criteria, weighted for real small-space use.
            We do not claim hands-on lab testing — our evaluation is based on verified buyer feedback patterns,
            published product specifications, and structured comparison criteria.
          </p>

          <div className="flex flex-col gap-3">
            {scoringCriteria.map((criterion) => (
              <div
                key={criterion.label}
                className="flex gap-4 p-4 bg-white rounded-lg border border-border"
              >
                <div className="shrink-0 text-right w-10 pt-0.5">
                  <span className="text-xs font-bold text-brand">{criterion.weight}</span>
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm mb-0.5">{criterion.label}</p>
                  <p className="text-xs text-ink-secondary leading-relaxed">{criterion.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guide's own methodology section if it exists */}
          {methodologySection && (
            <div className="prose mt-8">
              <h3>{methodologySection.heading}</h3>
              {methodologySection.body.trim().startsWith("<") ? (
                <RichContent html={methodologySection.body} />
              ) : (
                methodologySection.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              )}
            </div>
          )}

          <div className="mt-5 p-4 bg-bg rounded-lg border border-border">
            <Link
              href="/how-we-review"
              className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors flex items-center gap-1"
            >
              Read our full evaluation methodology →
            </Link>
          </div>
        </section>

        {/* ── 10 & 11. Who this is for / Who should skip ───────────────── */}
        {(whoFor.length > 0 || whoSkip.length > 0) && (
          <section className="mb-12 max-w-3xl" aria-label="Who this guide is for">
            <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">
              Who This Guide Is For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whoFor.length > 0 && (
                <div className="p-5 bg-cta-light rounded-card border border-cta/20">
                  <h3 className="font-bold text-cta-dark text-sm uppercase tracking-wide mb-4">
                    Good fit if you…
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {whoFor.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <svg className="w-4 h-4 text-cta shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-sm text-ink-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {whoSkip.length > 0 && (
                <div className="p-5 bg-bg rounded-card border border-border">
                  <h3 className="font-bold text-ink-secondary text-sm uppercase tracking-wide mb-4">
                    Probably not for you if…
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {whoSkip.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <svg className="w-4 h-4 text-score-mid shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <span className="text-sm text-ink-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── 12. The competition ──────────────────────────────────────── */}
        {alternatives.length > 0 && (
          <section className="mb-12 max-w-3xl" aria-label="Alternative products">
            <h2 className="text-2xl font-bold text-ink mb-2 tracking-tight">
              The Competition
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-5 max-w-2xl">
              These products were considered but didn&apos;t make our top picks. They may still be worth looking at depending on your specific needs.
            </p>
            <div className="flex flex-col gap-3">
              {alternatives.map((alt) => (
                <Link
                  key={alt.id}
                  href={`/reviews/${alt.slug}`}
                  className="group flex items-start gap-4 p-4 bg-white rounded-card border border-border hover:border-brand/30 hover:shadow-card transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {alt.badge && <Badge>{alt.badge}</Badge>}
                      <p className="font-semibold text-ink text-sm group-hover:text-brand transition-colors leading-snug">
                        {alt.name}
                      </p>
                    </div>
                    <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2 mt-1">
                      {alt.shortDescription}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className={`font-bold tabular-nums text-base block ${scoreToColor(alt.scores.overall)}`}>
                      {alt.scores.overall.toFixed(1)}
                    </span>
                    <span className="text-xs text-ink-muted">{alt.priceRange}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
        {guide.faq.length > 0 && (
          <section className="mb-12 max-w-3xl" aria-label="Frequently asked questions">
            <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-0 rounded-card border border-border overflow-hidden">
              {guide.faq.map((item, i) => (
                <div
                  key={i}
                  className={`p-5 ${i < guide.faq.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-white" : "bg-bg/40"}`}
                >
                  <h3 className="font-bold text-ink text-sm mb-2 leading-snug">{item.question}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 14. Related guides ──────────────────────────────────────── */}
        {relatedGuides.length > 0 && (
          <section className="mb-12 max-w-3xl" aria-label="Related buying guides">
            <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Buying Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/best/${related.slug}`}
                  className="group flex flex-col gap-2 p-4 bg-white rounded-card border border-border hover:border-brand/30 hover:shadow-card transition-all"
                >
                  <span className="text-xs font-semibold text-brand uppercase tracking-wide">
                    {related.subcategorySlug.replace(/-/g, " ")}
                  </span>
                  <p className="font-semibold text-ink group-hover:text-brand transition-colors text-sm leading-snug">
                    {related.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span>{related.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{related.recommendedProductIds.length} picks</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom methodology note */}
        <div className="max-w-3xl p-5 bg-bg rounded-card border border-border mb-6">
          <p className="text-sm text-ink-secondary leading-relaxed">
            <strong className="text-ink">Evaluation note: </strong>
            Products in this guide were assessed on overall score, small-space fit, build quality,
            ease of use, value for money, and buyer feedback from verified Amazon reviews. We do not
            claim hands-on product testing.
          </p>
          <Link
            href="/how-we-review"
            className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            Read our full methodology →
          </Link>
        </div>

      </Container>

      {/* ── 15. Sticky mobile CTA ───────────────────────────────────────── */}
      <MobileStickyPicksCTA label="View top picks" targetId="picks" />
    </>
  );
}
