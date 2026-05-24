import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AffiliateDisclosureBar } from "@/components/affiliate/AffiliateDisclosureBar";
import { ProductReviewCard } from "@/components/product/ProductReviewCard";
import { AtAGlance } from "@/components/product/AtAGlance";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import {
  products,
  atAGlanceItems,
  faq,
  guideTitle,
  guideDescription,
  lastUpdated,
  readTime,
  heroImage,
  mainKeyword,
} from "@/data/guides/best-tablet-stands-for-desk";

export const revalidate = 3600;

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Best Tablet Stands for Desk: Adjustable, Stable & Compact Picks",
    description:
      "Compare the best tablet stands for desk setups, including adjustable, desktop, universal, compact, and premium options for work, study, and small spaces.",
    path: "/guide/best-tablet-stands-for-desk",
    image: heroImage,
    type: "article",
  }),
  keywords: [
    mainKeyword,
    "tablet stand desk",
    "tablet stands for desk",
    "adjustable tablet stands",
    "tablet stand adjustable",
    "desktop tablet stands",
    "universal tablet stands",
    "phone and tablet stands",
    "wood tablet stands",
    "tablet stand magnetic",
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guideTitle,
  description: guideDescription,
  datePublished: lastUpdated,
  dateModified: lastUpdated,
  author: { "@type": "Organization", name: "DeskFinds Editorial Team" },
  publisher: { "@type": "Organization", name: "DeskFinds", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/best-tablet-stands-for-desk` },
  image: heroImage,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` },
    { "@type": "ListItem", position: 3, name: "Best Tablet Stands", item: `${SITE_URL}/guide/best-tablet-stands` },
    { "@type": "ListItem", position: 4, name: guideTitle, item: `${SITE_URL}/guide/best-tablet-stands-for-desk` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: guideTitle,
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: p.affiliateUrl,
  })),
};

const sections = [
  {
    heading: "Best Overall Tablet Stand for Desk",
    sub: "A stand that works for most people on most desks - slim, adjustable, and easy to pack away.",
    index: 0,
    amazonUrl: "https://www.amazon.com/s?k=tablet+stands+for+desk&tag=deskfinds0d-20",
    amazonLabel: "Browse Tablet Stands for Desk on Amazon",
    also: "Also consider the Nulaxy A5 ($9.99) if aesthetics matter more than rotation range - premium aluminum finish at the same price point.",
  },
  {
    heading: "Best Adjustable Tablet Stand for Desk",
    sub: "For users who need precise control over device position - angle, height, and orientation.",
    index: 1,
    amazonUrl: "https://www.amazon.com/s?k=adjustable+tablet+stands&tag=deskfinds0d-20",
    amazonLabel: "Browse Adjustable Tablet Stands on Amazon",
    also: "Also consider a height-adjustable arm mount if you alternate between sitting and standing - the LISEN clamp can be repositioned without removing it from the desk.",
  },
  {
    heading: "Best Tablet Stand for Large Tablets and Portable Monitors",
    sub: "When you need to hold a 13\"+ tablet, Surface Pro, or 15.6\" portable monitor without wobble.",
    index: 2,
    amazonUrl: "https://www.amazon.com/s?k=universal+tablet+stand&tag=deskfinds0d-20",
    amazonLabel: "Browse Universal Tablet Stands on Amazon",
    also: "Also consider the LISEN dual-clamp mount if you want to hold a monitor and a phone simultaneously rather than just the monitor alone.",
  },
  {
    heading: "Best Compact Tablet Stand for Small Desks",
    sub: "A wide stable base that does not take up much desk real estate - ideal for small desks and dorm setups.",
    index: 3,
    amazonUrl: "https://www.amazon.com/s?k=compact+tablet+stand+for+desk&tag=deskfinds0d-20",
    amazonLabel: "Browse Compact Tablet Stands on Amazon",
    also: "Also consider the Lamicall stand if you want 360 degree rotation at the same $9.99 price - the Anozer has a wider base but the Lamicall rotates more freely.",
  },
  {
    heading: "Best Tablet Stand for Video Calls and Zoom",
    sub: "Clean, minimal design with smooth angle adjustment - ideal for client calls and team meetings.",
    index: 4,
    amazonUrl: "https://www.amazon.com/s?k=height+adjustable+tablet+stand&tag=deskfinds0d-20",
    amazonLabel: "Browse Height-Adjustable Tablet Stands on Amazon",
    also: "Also consider the Lamicall (360 degree rotation) if you frequently turn your screen toward different people during meetings - the spin base beats repositioning the whole stand.",
  },
];

export default function BestTabletStandsForDeskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Container className="py-10">

        {/* Breadcrumbs */}
        <Breadcrumbs
          crumbs={[
            { label: "Buying Guides", href: "/guide" },
            { label: "Best Tablet Stands", href: "/guide/best-tablet-stands" },
            { label: "For Desk" },
          ]}
        />

        {/* Header */}
        <header className="mt-6 mb-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link href="/guide/desk-setup" className="text-xs font-bold uppercase tracking-widest text-brand hover:text-brand-dark transition-colors">
              Desk Setup
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-4 tracking-tight leading-tight">
            {guideTitle}
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed mb-5">
            {guideDescription}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-muted pb-5 border-b border-border">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              DeskFinds Editorial Team
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
              Updated {formatDate(lastUpdated)}
            </span>
            <span aria-hidden="true">·</span>
            <span>{readTime} read</span>
            <span aria-hidden="true">·</span>
            <span>{products.length} products compared</span>
          </div>
        </header>

        {/* Affiliate disclosure */}
        <AffiliateDisclosureBar
          variant="banner"
          disclosureText="We may earn a commission when you buy through Amazon links. This guide is based on product specs, buyer feedback, and comparison criteria - not paid placement."
          className="mb-8 max-w-3xl"
        />

        {/* Hero image */}
        <div className="relative w-full max-w-3xl h-56 sm:h-72 rounded-xl overflow-hidden mb-10">
          <Image src={heroImage} alt={guideTitle} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
        </div>

        {/* Intro */}
        <div className="prose max-w-3xl mb-10">
          <p>
            A good tablet stand for your desk frees up your hands, keeps your neck at a natural angle, and gets your screen to eye level. The wrong one tips over, slides around, or takes up more desk space than it saves.
          </p>
          <p>
            The five picks in this guide cover the most common desk use cases: a slim rotatable stand for everyday use, a flexible multi-joint clamp for precise positioning, a heavy-duty stand for large tablets and portable monitors, a compact wide-base stand for small desks, and a premium aluminum stand for clean workspace setups and video calls.
          </p>
          <p>
            See also: <Link href="/guide/best-tablet-stands">Best Tablet Stands (all uses)</Link> | <Link href="/guide/best-tablet-stands-for-bed">Best Tablet Stands for Bed</Link> | <Link href="/guide/compact-home-office">Compact Home Office</Link>
          </p>
        </div>

        {/* At a Glance */}
        <section id="picks" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-ink mb-2 tracking-tight">Quick Picks</h2>
          <p className="text-sm text-ink-secondary mb-6 max-w-2xl">All five picks at a glance - toggle pros and cons to compare before reading full reviews below.</p>
          <AtAGlance items={atAGlanceItems} />
        </section>

        {/* Comparison table */}
        <section className="mb-12 max-w-3xl overflow-x-auto">
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Comparison Table</h2>
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-brand text-white">
                <th className="text-left px-4 py-3 font-semibold">Product</th>
                <th className="text-left px-4 py-3 font-semibold">Best For</th>
                <th className="text-left px-4 py-3 font-semibold">Price</th>
                <th className="text-left px-4 py-3 font-semibold">Score</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.rank} className={i % 2 === 0 ? "bg-white" : "bg-bg/40"}>
                  <td className="px-4 py-3 font-medium text-ink">{p.name}</td>
                  <td className="px-4 py-3 text-ink-secondary">{p.badge}</td>
                  <td className="px-4 py-3 font-bold text-ink">{p.price}</td>
                  <td className="px-4 py-3 font-bold text-brand">{p.scoreOverall}/10</td>
                  <td className="px-4 py-3">
                    <a href={p.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FF9900] text-white text-xs font-bold hover:bg-[#e68900] transition-colors whitespace-nowrap">
                      Amazon
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Product sections */}
        {sections.map((section) => (
          <section key={section.index} className="mb-14">
            <h2 className="text-2xl font-bold text-ink mb-1 tracking-tight">{section.heading}</h2>
            <p className="text-sm text-ink-secondary mb-6 max-w-2xl">{section.sub}</p>
            <div id={`pick-${section.index + 1}`} className="scroll-mt-20">
              <ProductReviewCard {...products[section.index]} />
            </div>
            <div className="mt-5 p-4 bg-bg rounded-xl border border-border max-w-3xl">
              <p className="text-sm text-ink-secondary">
                <strong className="text-ink">Also consider: </strong>
                {section.also}
              </p>
              <a href={section.amazonUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-[#FF9900] text-white text-sm font-bold hover:bg-[#e68900] transition-colors">
                {section.amazonLabel}
              </a>
            </div>
          </section>
        ))}

        {/* How to Choose */}
        <section className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">How to Choose a Tablet Stand for Desk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Tablet size and weight",
                body: "Tablets under 11\" work with virtually any stand. For 12.9\" iPads and above, check the weight rating - lightweight stands tip with heavier devices. For 15\" portable monitors, only heavy-duty stands like the Quality Al-Ti model will stay stable.",
              },
              {
                title: "How much you adjust it",
                body: "If you set it once and leave it, a simple two-hinge stand is enough. If you constantly switch between portrait and landscape, or present to different people, get a 360 degree rotating base or a multi-joint clamp mount.",
              },
              {
                title: "Desk space available",
                body: "Wide bases are more stable but take up more desk real estate. The Anozer has a wide base that locks in stability. The Nulaxy and Lamicall are compact when folded. If desk space is tight, a clamp-mount stand like the LISEN attaches to the edge and leaves the surface clear.",
              },
              {
                title: "Portability needs",
                body: "Work from multiple locations? The Lamicall and Nulaxy both fold under 1\" thick - drop them in a bag. The Quality heavy-duty stand and the LISEN clamp mount are better suited to staying in one place.",
              },
            ].map((tip) => (
              <div key={tip.title} className="p-5 bg-white rounded-card border border-border">
                <h3 className="font-bold text-ink text-sm mb-2">{tip.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-0 rounded-card border border-border overflow-hidden">
            {faq.map((item, i) => (
              <div key={i} className={`p-5 ${i < faq.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-white" : "bg-bg/40"}`}>
                <h3 className="font-bold text-ink text-sm mb-2 leading-snug">{item.question}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Amazon CTA */}
        <div className="max-w-3xl mb-8 p-5 rounded-xl border border-border bg-bg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-ink mb-1">Browse all tablet stands for desk on Amazon</p>
            <p className="text-sm text-ink-secondary">Current prices, customer photos, and more options.</p>
          </div>
          <a href="https://www.amazon.com/s?k=tablet+stands+for+desk&tag=deskfinds0d-20" target="_blank" rel="nofollow sponsored noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-[#FF9900] text-white hover:bg-[#e68900] transition-colors whitespace-nowrap">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.26 18.36C9.18 20.34 4.76 21.38 1 20.16c-.38-.13-.33-.44.08-.35 3.47.67 7.77-.07 10.6-1.82.47-.27.87.17.58.37zm1.06-1.17c-.43-.56-2.85-.27-3.94-.13-.33.04-.38-.25-.08-.46 1.93-1.36 5.1-.97 5.47-.51.37.46-.1 3.63-1.91 5.14-.28.23-.54.11-.42-.2.41-.98 1.32-3.28.88-3.84z"/></svg>
            Shop on Amazon
          </a>
        </div>

        {/* Internal links */}
        <div className="max-w-3xl mb-6 p-5 bg-white rounded-card border border-border">
          <p className="text-sm font-semibold text-ink mb-3">Related guides</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Best Tablet Stands (all uses)", href: "/guide/best-tablet-stands" },
              { label: "Best Tablet Stands for Bed", href: "/guide/best-tablet-stands-for-bed" },
              { label: "Desk Setup Guides", href: "/guide/desk-setup" },
              { label: "Compact Home Office", href: "/guide/compact-home-office" },
              { label: "Budget Finds", href: "/guide/budget-finds" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-1.5 bg-bg border border-border rounded-badge text-sm font-medium text-brand hover:bg-brand hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Methodology note */}
        <div className="max-w-3xl p-5 bg-bg rounded-card border border-border mb-6">
          <p className="text-sm text-ink-secondary leading-relaxed">
            <strong className="text-ink">Evaluation note: </strong>
            Products were assessed on stability, adjustability, build quality, compatibility, portability, and verified buyer feedback from Amazon. We do not claim hands-on product testing.
          </p>
          <Link href="/how-we-review" className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
            Read our full methodology →
          </Link>
        </div>

      </Container>
    </>
  );
}
