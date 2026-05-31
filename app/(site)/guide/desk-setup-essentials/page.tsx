import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { getPublicGuideBySlug } from "@/lib/public-guides";
import {
  guideTitle, metaTitle, guideDescription, metaDescription,
  lastUpdated, readTime, heroImage as fallbackHeroImage,
  items, checklist, dontNeedYet, howToChoose, faq,
  type EssentialItem,
} from "@/data/guides/desk-setup-essentials";

export const revalidate = false;

export const metadata: Metadata = buildMetadata({
  title: metaTitle, description: metaDescription,
  path: "/guide/desk-setup-essentials", image: fallbackHeroImage, type: "article",
});

function ItemSection({ item }: { item: EssentialItem }) {
  return (
    <section id={item.id} className="mb-14 scroll-mt-20">
      <h2 className="text-2xl font-bold text-ink tracking-tight mb-5">{item.category}</h2>

      <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-card">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-bg">
          <span className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0 bg-brand">
            {item.number}
          </span>
          <div className="flex-1 min-w-0">
            <a href={item.amazonUrl} target="_blank" rel="noopener noreferrer sponsored"
              className="font-bold text-ink text-base leading-tight hover:text-brand transition-colors">
              {item.name}
            </a>
            <p className="text-xs text-ink-muted mt-0.5">{item.brand}</p>
          </div>
          <span className="text-sm font-bold text-ink shrink-0">{item.price}</span>
        </div>

        <div className="p-5">
          <div className="flex flex-col sm:flex-row gap-5 mb-5">
            {/* Image */}
            <a href={item.amazonUrl} target="_blank" rel="noopener noreferrer sponsored"
              className="shrink-0 flex items-center justify-center w-full sm:w-64 h-56 rounded-xl border border-border bg-gray-50 overflow-hidden hover:opacity-90 transition-opacity">
              <Image src={item.imageUrl} alt={item.name} width={240} height={200}
                className="object-contain w-full h-full p-3" unoptimized />
            </a>

            <div className="flex-1 min-w-0 flex flex-col gap-3">
              {/* Narrative intro */}
              <p className="text-sm text-ink-secondary leading-relaxed border-l-2 border-brand pl-3 italic">
                {item.intro}
              </p>

              {/* Why we picked it */}
              <div>
                <p className="text-[10px] font-bold text-cta uppercase tracking-widest mb-2">Why we picked it</p>
                <ul className="space-y-1.5">
                  {item.whyWePicked.map((point, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-ink">
                      <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-cta-light text-cta flex items-center justify-center shrink-0 font-bold text-[9px]">+</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skip if */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
                <span className="font-bold shrink-0">Skip if:</span>
                <span>{item.skipIf}</span>
              </div>

              {/* CTA */}
              <a href={item.amazonUrl} target="_blank" rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity mt-auto"
                style={{ background: "#FF9900" }}>
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.26 18.36C9.18 20.34 4.76 21.38 1 20.16c-.38-.13-.33-.44.08-.35 3.47.67 7.77-.07 10.6-1.82.47-.27.87.17.58.37zm1.06-1.17c-.43-.56-2.85-.27-3.94-.13-.33.04-.38-.25-.08-.46 1.93-1.36 5.1-.97 5.47-.51.37.46-.1 3.63-1.91 5.14-.28.23-.54.11-.42-.2.41-.98 1.32-3.28.88-3.84z"/>
                </svg>
                Check price on Amazon
              </a>
            </div>
          </div>

          {/* Budget alternative */}
          {item.budgetAlt && (
            <div className="border-t border-border pt-4">
              <p className="text-xs font-bold text-ink uppercase tracking-wide mb-2">Budget Alternative</p>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-gray-50 border border-border">
                <div className="flex-1 min-w-0">
                  <a href={item.budgetAlt.amazonUrl} target="_blank" rel="noopener noreferrer sponsored"
                    className="text-sm font-semibold text-ink hover:text-brand transition-colors">
                    {item.budgetAlt.name}
                  </a>
                  <p className="text-xs text-ink-muted mt-0.5">{item.budgetAlt.why}</p>
                </div>
                <a href={item.budgetAlt.amazonUrl} target="_blank" rel="noopener noreferrer sponsored"
                  className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg text-white whitespace-nowrap"
                  style={{ background: "#FF9900" }}>
                  {item.budgetAlt.price}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default async function DeskSetupEssentialsPage() {
  const guide = await getPublicGuideBySlug("desk-setup-essentials");
  const heroImg = guide?.thumbnailImage ?? guide?.heroImage ?? fallbackHeroImage;

  return (
    <>
      <Container className="py-12 max-w-4xl">
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-6">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-brand transition-colors">Buying Guides</Link>
          <span>/</span>
          <span className="text-ink">Desk Setup Essentials</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Guide</span>
            <span className="text-ink-muted">&middot;</span>
            <span className="text-xs text-ink-muted">{readTime} read</span>
            <span className="text-ink-muted">&middot;</span>
            <span className="text-xs text-ink-muted">Updated {lastUpdated}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-tight tracking-tight mb-4">{guideTitle}</h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-3xl">
            A good desk setup does not need to be expensive or complicated. The right essentials make your workspace cleaner, easier to use, and more comfortable for everyday work or study. This guide is for students, remote workers, small-room users, and anyone building a practical desk setup without clutter.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-5 pt-5 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-ink-secondary">
              <div className="w-7 h-7 rounded-full bg-brand-muted flex items-center justify-center">
                <svg className="w-4 h-4 text-brand" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <span>Jamie Cole, Lead Product Researcher</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <svg className="w-3.5 h-3.5" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              15 essentials evaluated
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="rounded-2xl overflow-hidden border border-border mb-10 bg-bg">
          <Image src={heroImg} alt="Desk setup essentials" width={900} height={420}
            className="w-full object-cover max-h-[420px]" priority unoptimized />
        </div>

        {/* Quick Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">Quick Checklist: Desk Setup Essentials</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="text-left px-4 py-3 font-semibold">Area</th>
                  <th className="text-left px-4 py-3 font-semibold">What to Add</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Why It Helps</th>
                </tr>
              </thead>
              <tbody>
                {checklist.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg"}>
                    <td className="px-4 py-2.5 font-semibold text-ink">{row.area}</td>
                    <td className="px-4 py-2.5 text-ink-secondary">{row.item}</td>
                    <td className="px-4 py-2.5 text-ink-secondary hidden sm:table-cell">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Jump nav */}
        <div className="flex flex-wrap gap-2 mb-10">
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`}
              className="px-3 py-1.5 rounded-full border border-border bg-white text-ink-secondary text-xs font-medium hover:border-brand hover:text-brand transition-colors">
              {item.category.replace("The Unexpected Essential: ", "")}
            </a>
          ))}
          <a href="#how-to-choose" className="px-3 py-1.5 rounded-full border border-border bg-white text-ink-secondary text-xs font-medium hover:border-brand hover:text-brand transition-colors">
            How to Choose
          </a>
        </div>

        {/* All 15 item sections */}
        {items.map((item) => <ItemSection key={item.id} item={item} />)}

        {/* How to Choose */}
        <section id="how-to-choose" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">How to Choose Desk Setup Essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {howToChoose.map((c) => (
              <div key={c.tip} className="flex gap-3 p-4 rounded-xl border border-border bg-white">
                <span className="text-2xl shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <p className="font-semibold text-ink text-sm mb-1">{c.tip}</p>
                  <p className="text-xs text-ink-secondary leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What You Don't Need Yet */}
        <section className="mb-12 p-6 rounded-2xl border border-amber-200 bg-amber-50">
          <h2 className="text-lg font-bold text-ink mb-3">What You Do Not Need Right Away</h2>
          <p className="text-sm text-ink-secondary mb-4">
            You do not need to buy everything at once. Start with lighting, cable management, and one organizer before adding extra gadgets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {dontNeedYet.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <span className="text-amber-500 shrink-0 mt-0.5 font-bold">✗</span>
                <div>
                  <span className="font-semibold text-ink">{item.item}</span>
                  <span className="text-amber-800"> -- {item.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-white">
                <p className="font-semibold text-ink mb-2">{item.q}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Amazon CTA */}
        <div className="my-10 p-8 rounded-2xl flex flex-col items-center text-center" style={{ background: "linear-gradient(135deg, #fff7ed, #fff3e0)", border: "1px solid #fed7aa" }}>
          <p className="text-base font-semibold text-ink mb-1">Browse all desk setup essentials on Amazon</p>
          <p className="text-sm text-ink-secondary mb-5">See current prices, deals, and Prime shipping options</p>
          <a href="https://www.amazon.com/s?k=desk+setup+essentials&tag=deskfinds0d-20" target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity" style={{ background: "#FF9900" }}>
            <svg className="w-4 h-4 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.26 18.36C9.18 20.34 4.76 21.38 1 20.16c-.38-.13-.33-.44.08-.35 3.47.67 7.77-.07 10.6-1.82.47-.27.87.17.58.37zm1.06-1.17c-.43-.56-2.85-.27-3.94-.13-.33.04-.38-.25-.08-.46 1.93-1.36 5.1-.97 5.47-.51.37.46-.1 3.63-1.91 5.14-.28.23-.54.11-.42-.2.41-.98 1.32-3.28.88-3.84z" />
            </svg>
            Shop Desk Setup Essentials on Amazon
          </a>
        </div>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-ink mb-4 tracking-tight">Related Buying Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: "/guide/best-desk-setup-accessories", title: "Best Desk Setup Accessories (2026)", label: "Desk Setup" },
              { href: "/guide/best-desk-mat-for-small-desk", title: "Best Desk Mat for Small Desk", label: "Desk Setup" },
              { href: "/guide/best-usb-hub-for-desk", title: "Best USB Hub for Desk", label: "Desk Setup" },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="group p-4 rounded-xl border border-border bg-white hover:border-brand/40 hover:shadow-sm transition-all">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-1">{g.label}</span>
                <p className="text-sm font-semibold text-ink group-hover:text-brand transition-colors leading-snug">{g.title}</p>
                <span className="text-xs font-semibold text-brand mt-2 inline-block">Read guide &rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
