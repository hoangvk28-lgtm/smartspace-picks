import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AffiliateDisclosureBar } from "@/components/affiliate/AffiliateDisclosureBar";
import { RichContent } from "@/components/ui/RichContent";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { authorToSlug, getAuthorByName } from "@/data/authors";
import { SITE_URL } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import type { TocItem } from "@/lib/toc";

export interface InformationalGuideData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  datePublished: string;
  readTime: string;
  cluster: string;
  heroImage: string;
  heroImageAlt: string;
  bodyHtml: string;
  toc: TocItem[];
  relatedGuides: { href: string; title?: string }[];
}

/**
 * Renders a pure editorial/informational guide: no product picks, no DeskFinds Fit
 * Score, no "How We Picked" scoring block, no Check Price CTAs. Article/BlogPosting
 * schema only. Used for data/informational-guides/<slug>.ts content imported from
 * externally-sourced research-based content packages.
 */
export function InformationalGuidePage({ data }: { data: InformationalGuideData }) {
  const { slug, title, author, datePublished, readTime, cluster, heroImage, heroImageAlt, bodyHtml, toc, relatedGuides, metaDescription } = data;

  const guideAuthor = getAuthorByName(author);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    datePublished,
    dateModified: datePublished,
    author: guideAuthor?.isPerson
      ? { "@type": "Person", name: guideAuthor.name, url: `${SITE_URL}/author/${guideAuthor.slug}` }
      : { "@type": "Organization", name: author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/${slug}` },
    ...(heroImage ? { image: heroImage } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` },
      { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}/guide/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Container className="py-10">
        <Breadcrumbs crumbs={[{ label: "Buying Guides", href: "/guide" }, { label: title }]} />

        <header className="mt-6 mb-6 max-w-3xl">
          {cluster && (
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">{cluster}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-4 tracking-tight leading-tight">{title}</h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-muted pb-5 border-b border-border">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <Link prefetch={false} href={`/author/${authorToSlug(author)}`} className="hover:text-ink hover:underline transition-colors">
                {author}
              </Link>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              {formatDate(datePublished)}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {readTime} read
            </span>
          </div>
        </header>

        {heroImage && (
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-8 max-w-3xl bg-bg">
            <Image
              src={heroImage}
              alt={heroImageAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              unoptimized
            />
          </div>
        )}

        <AffiliateDisclosureBar
          variant="banner"
          disclosureText="This guide is research-based and includes links to our buying guides, which may contain Amazon affiliate links. It is not a hands-on product test or lab measurement."
          className="mb-8 max-w-3xl"
        />

        {toc.length >= 2 && <TableOfContents items={toc} />}

        <div className="prose max-w-3xl mb-10">
          <RichContent html={bodyHtml} />
        </div>

        {relatedGuides.length > 0 && (
          <section className="mb-12 max-w-3xl" aria-label="Related buying guides">
            <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map((related) => (
                <Link prefetch={false}
                  key={related.href}
                  href={related.href}
                  className="group flex flex-col gap-1 p-4 bg-white rounded-card border border-border hover:border-brand/30 hover:shadow-card transition-all"
                >
                  <p className="font-semibold text-ink group-hover:text-brand transition-colors text-sm leading-snug">
                    {related.title || related.href.replace("/guide/", "").replace(/-/g, " ")}
                  </p>
                  <span className="text-xs font-semibold text-brand mt-1">Read guide →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
