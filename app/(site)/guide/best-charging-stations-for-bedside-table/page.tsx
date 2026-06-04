import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { getPublicGuideBySlug } from "@/lib/public-guides";
import { AtAGlance } from "@/components/product/AtAGlance";
import {
  guideTitle, guideDescription, metaTitle, metaDescription, lastUpdated, readTime,
  heroImage as fallbackHeroImage, products, atAGlanceItems, deskVsBedRows, faq,
  type BedsideProduct,
} from "@/data/guides/best-charging-stations-for-bedside-table";

export const revalidate = false;

export const metadata: Metadata = buildMetadata({
  title: metaTitle, description: metaDescription,
  path: "/guide/best-charging-stations-for-bedside-table",
  image: fallbackHeroImage, type: "article",
});

function ProductSection({ product }: { product: BedsideProduct }) {
  return (
    <section id={product.id} className="mb-14 scroll-mt-20">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-brand shrink-0">{product.badge}</span>
        <h2 className="text-2xl font-bold text-ink tracking-tight min-w-0 break-words">{product.name}</h2>
      </div>
      <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-card">
        <div className="flex flex-col sm:flex-row gap-5 p-5">
          <a href={product.amazonUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
            className="shrink-0 flex items-center justify-center w-full sm:w-60 h-52 rounded-xl border border-border bg-gray-50 overflow-hidden hover:opacity-90 transition-opacity">
            <Image src={product.imageUrl} alt={product.name} width={220} height={200} className="object-contain w-full h-full p-3" unoptimized />
          </a>
          <div className="flex-1 min-w-0 flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-lg bg-brand-muted text-brand font-bold">{product.standard}</span>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-ink-secondary font-medium">{product.devices}</span>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-ink-secondary font-medium">{product.priceRange}</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">Why it wins</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{product.whyItWins}</p>
            </div>
            {product.bodyParagraphs.map((para, i) => <p key={i} className="text-sm text-ink-secondary leading-relaxed">{para}</p>)}
            <a href={product.amazonUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity w-fit mt-auto"
              style={{ background: "#FF9900" }}>
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.26 18.36C9.18 20.34 4.76 21.38 1 20.16c-.38-.13-.33-.44.08-.35 3.47.67 7.77-.07 10.6-1.82.47-.27.87.17.58.37zm1.06-1.17c-.43-.56-2.85-.27-3.94-.13-.33.04-.38-.25-.08-.46 1.93-1.36 5.1-.97 5.47-.51.37.46-.1 3.63-1.91 5.14-.28.23-.54.11-.42-.2.41-.98 1.32-3.28.88-3.84z" />
              </svg>
              Check price on Amazon
            </a>
          </div>
        </div>
        <div className="border-t border-border grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          <div className="p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-ink mb-3">Specs</p>
            <ul className="space-y-1.5">
              {product.specs.map((spec, i) => <li key={i} className="text-xs text-ink-secondary"><span className="font-semibold text-ink">{spec.label}:</span> {spec.value}</li>)}
            </ul>
          </div>
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-cta mb-3">Pros</p>
            <ul className="space-y-1.5">
              {product.pros.map((pro, i) => <li key={i} className="flex items-start gap-1.5 text-xs text-ink"><span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-cta-light text-cta flex items-center justify-center shrink-0 font-bold text-[9px]">+</span>{pro}</li>)}
            </ul>
          </div>
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent-dark mb-3">Cons</p>
            <ul className="space-y-1.5">
              {product.cons.map((con, i) => <li key={i} className="flex items-start gap-1.5 text-xs text-ink"><span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 font-bold text-[9px]">&minus;</span>{con}</li>)}
            </ul>
            <p className="text-xs text-ink-muted mt-3 pt-3 border-t border-border"><span className="font-semibold text-ink">Best for:</span> {product.bestFor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function BedsideChargingPage() {
  const guide = await getPublicGuideBySlug("best-charging-stations-for-bedside-table");
  const heroImg = guide?.thumbnailImage ?? guide?.heroImage ?? fallbackHeroImage;
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: guideTitle, description: metaDescription, datePublished: "2026-06-04", dateModified: "2026-06-04", author: { "@type": "Person", name: "Jamie Cole", url: `${SITE_URL}/author/jamie-cole` }, publisher: { "@type": "Organization", name: "DeskFinds", url: SITE_URL }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/best-charging-stations-for-bedside-table` }, about: [{ "@type": "Thing", name: "Bedside Charging Station" }, { "@type": "Thing", name: "Nightstand Wireless Charger" }, { "@type": "Thing", name: "Qi2 Wireless Charging" }] };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` }, { "@type": "ListItem", position: 3, name: "Best Charging Stations for Bedside Tables", item: `${SITE_URL}/guide/best-charging-stations-for-bedside-table` }] };
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", name: "Best Charging Stations for Bedside Tables 2026", numberOfItems: 5, itemListElement: products.map((p) => ({ "@type": "ListItem", position: p.rank, name: `${p.name} -- ${p.badge}`, url: `${SITE_URL}/guide/best-charging-stations-for-bedside-table#${p.id}` })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Container className="py-12 max-w-4xl">
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-6">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link><span>/</span>
          <Link href="/guide" className="hover:text-brand transition-colors">Buying Guides</Link><span>/</span>
          <span className="text-ink">Bedside Table Charging Stations</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Guide</span>
            <span className="text-ink-muted">&middot;</span>
            <span className="text-xs text-ink-muted">{readTime} read</span>
            <span className="text-ink-muted">&middot;</span>
            <span className="text-xs text-ink-muted">Updated June 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-tight tracking-tight mb-4">{guideTitle}</h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-3xl">{guideDescription}</p>
          <div className="flex flex-wrap items-center gap-4 mt-5 pt-5 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-ink-secondary">
              <div className="w-7 h-7 rounded-full bg-brand-muted flex items-center justify-center">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              </div>
              <span>Jamie Cole, Lead Product Researcher</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              5 picks -- fanless, compact, Qi2 magnetic alignment
            </div>
          </div>
        </header>

        <div className="mb-8 p-4 rounded-xl bg-bg border border-border text-xs text-ink-secondary">
          <strong className="text-ink">Quick note:</strong> This page contains affiliate links. If you buy through our links, we may earn a small commission -- at no extra cost to you. As an Amazon Associate, DeskFinds earns from qualifying purchases.{" "}
          <Link href="/affiliate-disclosure" className="text-brand hover:underline">Affiliate disclosure</Link>.
        </div>

        <div className="rounded-2xl overflow-hidden border border-border mb-10 bg-bg">
          <Image src={heroImg} alt="Best charging stations for bedside tables" width={900} height={420} className="w-full object-cover max-h-[420px]" priority unoptimized />
        </div>

        {/* Quick Picks */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">Quick Picks</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead><tr className="bg-brand text-white">
                <th className="text-left px-4 py-3 font-semibold">Pick</th>
                <th className="text-left px-4 py-3 font-semibold">Product</th>
                <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Standard</th>
                <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Devices</th>
                <th className="text-left px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3"></th>
              </tr></thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={p.id} className={i % 2 === 0 ? "bg-white" : "bg-bg"}>
                    <td className="px-4 py-3"><a href={`#${p.id}`} className="text-xs font-bold text-brand hover:underline">{p.badge}</a></td>
                    <td className="px-4 py-3 font-semibold text-ink text-xs">{p.name}</td>
                    <td className="px-4 py-3 text-ink-secondary text-xs hidden sm:table-cell">{p.standard}</td>
                    <td className="px-4 py-3 text-ink-secondary text-xs hidden sm:table-cell">{p.devices}</td>
                    <td className="px-4 py-3 text-ink-secondary text-xs">{p.priceRange}</td>
                    <td className="px-4 py-3"><a href={p.amazonUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-lg text-white whitespace-nowrap inline-block" style={{ background: "#FF9900" }}>Check price</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Intro */}
        <section className="mb-10 space-y-4 text-base text-ink-secondary leading-relaxed">
          <p>A bedside charging station has a different job than a desk charger. At a desk, speed matters -- you are topping up between meetings, and 20 minutes of charging needs to count. On a nightstand, speed is irrelevant -- your phone charges for 7--8 hours overnight and could do it at 5W and still hit 100%.</p>
          <p>What matters at the bedside: (1) No bright LEDs. Blue and green indicator lights visible at 2AM disrupt sleep. (2) Small footprint. Nightstands are typically narrower than desks. (3) Easy to use in the dark. Magnetic alignment (Qi2/MagSafe) means your phone snaps into position without finding a charging sweet spot blind. (4) Quiet -- no fan. (5) Foldable or compact.</p>
          <p>Every pick in this guide is fanless, compact, and wireless. All five use magnetic alignment so the phone charges correctly even when placed half-asleep.</p>
        </section>

        {/* Bedside vs Desk */}
        <section className="mb-12 scroll-mt-20" id="bedside-vs-desk">
          <h2 className="text-2xl font-bold text-ink mb-3 tracking-tight">Bedside Charging vs Desk Charging -- Key Differences</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead><tr className="bg-brand text-white">
                <th className="text-left px-4 py-3 font-semibold"></th>
                <th className="text-left px-4 py-3 font-semibold">Desk Charger</th>
                <th className="text-left px-4 py-3 font-semibold">Bedside Charger</th>
              </tr></thead>
              <tbody>
                {deskVsBedRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg"}>
                    <td className="px-4 py-3 font-semibold text-ink">{row.feature}</td>
                    <td className="px-4 py-3 text-ink-secondary text-xs">{row.desk}</td>
                    <td className="px-4 py-3 text-xs font-medium text-brand">{row.bedside}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AtAGlance */}
        <section className="mb-10"><h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">All 5 Picks at a Glance</h2><AtAGlance items={atAGlanceItems} /></section>

        {/* Jump nav */}
        <nav className="mb-12 p-4 rounded-xl bg-bg border border-border">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Jump to</p>
          <div className="flex flex-wrap gap-2">
            {[{ href: "#bedside-vs-desk", label: "Bedside vs Desk" }, { href: "#best-overall", label: "Best Overall" }, { href: "#best-premium", label: "Best Premium" }, { href: "#best-2in1-compact", label: "Compact 2-in-1" }, { href: "#best-android", label: "Best for Android" }, { href: "#best-cube", label: "Ultra-Compact Cube" }, { href: "#setup", label: "Setup tips" }, { href: "#faq", label: "FAQ" }].map((item) => (
              <a key={item.href} href={item.href} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-border text-ink-secondary hover:text-brand hover:border-brand transition-colors">{item.label}</a>
            ))}
          </div>
        </nav>

        <h2 className="text-2xl font-bold text-ink mb-8 tracking-tight">Our Top Picks for Bedside Table Charging Stations</h2>
        {products.map((product) => <ProductSection key={product.id} product={product} />)}

        {/* Setup section */}
        <section id="setup" className="mb-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">Setting Up Your Bedside Charging Station</h2>
          <div className="space-y-5">
            <div className="p-5 rounded-xl border border-border bg-white">
              <h3 className="font-bold text-ink text-base mb-3">Where to Place It on the Nightstand</h3>
              <p className="text-sm text-ink-secondary mb-3">The charging zone should be within arm&apos;s reach from your pillow -- you will place and retrieve the phone without turning on a light.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "Back corner of nightstand", desc: "Behind the lamp, out of eye-line when lying down. LEDs face away from you." },
                  { label: "Front edge nearest the bed", desc: "Maximum reach convenience, but LEDs may face directly at you." },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${i === 0 ? "border-cta/30 bg-cta-light/20" : "border-border bg-bg"}`}>
                    <p className="font-bold text-ink text-xs mb-1">{item.label}</p>
                    <p className="text-xs text-ink-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-xl border border-border bg-white">
              <h3 className="font-bold text-ink text-base mb-3">Dealing with LED Light at Night</h3>
              <p className="text-sm text-ink-secondary mb-3">All wireless chargers have some status indicator. Here is how to manage them:</p>
              <div className="space-y-2">
                {[
                  { opt: "Option 1 -- Face the LED away", desc: "Position the charger so any indicator faces the wall or back of the nightstand, not toward you." },
                  { opt: "Option 2 -- Cover it", desc: "A small square of dark electrical tape over the LED completely eliminates the light. This does not affect charging." },
                  { opt: "Option 3 -- Choose chargers with automatic LED shutoff", desc: "The Belkin BoostCharge Pro dims its indicator after the phone is confirmed charging. The Anker MagGo foldable has a single dim indicator that is less intrusive than most." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-bg">
                    <span className="font-bold text-brand text-xs shrink-0 mt-0.5">{item.opt}</span>
                    <p className="text-xs text-ink-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-bg border border-brand/20 text-sm text-ink-secondary">
              <strong className="text-ink">Bedside vs Desk -- Can I Use the Same Charger?</strong>
              <p className="mt-1">Yes -- a good wireless 3-in-1 like the Anker MagGo or Belkin works equally well at desk and bedside. The main consideration is LED brightness and cable length (bedside needs enough reach to the wall outlet, typically 1.5--2m).{" "}
                <Link href="/guide/best-wireless-charging-stations-for-desk" className="text-brand hover:underline font-medium">Best Wireless Charging Stations for Desk &rarr;</Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-white">
                <p className="font-bold text-ink text-sm mb-2">{item.question}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Line */}
        <section className="mb-14 p-6 rounded-2xl border border-border bg-white">
          <h2 className="text-xl font-bold text-ink mb-5 tracking-tight">Bottom Line</h2>
          <div className="space-y-4">
            {[
              { product: "Anker MagGo 3-in-1 Qi2 Foldable", context: "For most Apple bedside setups", verdict: "covers phone, watch, and AirPods in the most compact format at the best price. Adapter included, folds flat, charges everything.", href: "#best-overall" },
              { product: "Belkin BoostCharge Pro", context: "For bedrooms where the charger stays visible", verdict: "in Sand is the best-looking option in this category -- weighted, adjustable, and designed to blend into a bedroom rather than announce itself as a tech product.", href: "#best-premium" },
              { product: "UGREEN Qi2 25W MagFlow", context: "For Android phones or mixed households", verdict: "is the safest Qi2 pick -- 25W covers every current Qi2 phone regardless of brand.", href: "#best-android" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0" />
                <p className="text-sm text-ink-secondary"><strong className="text-ink">{item.context}:</strong> The{" "}<a href={item.href} className="font-bold text-ink hover:text-brand transition-colors">{item.product}</a>{" "}{item.verdict}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-14 p-6 rounded-2xl flex flex-col items-center text-center" style={{ background: "linear-gradient(135deg, #FF9900 0%, #e68900 100%)" }}>
          <h2 className="text-xl font-bold text-white mb-2">Browse bedside charging stations on Amazon</h2>
          <p className="text-white/90 text-sm mb-5">Qi2 and MagSafe options -- all Prime-eligible.</p>
          <a href="https://www.amazon.com/s?k=bedside+wireless+charging+station+nightstand&tag=deskfinds0d-20" target="_blank" rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white font-bold text-sm hover:bg-gray-50 transition-colors" style={{ color: "#FF9900" }}>
            Shop on Amazon &rarr;
          </a>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/guide/best-wireless-charging-stations-for-desk", title: "Best Wireless Charging Stations for Desk", desc: "Wireless chargers optimized for desk use" },
              { href: "/guide/best-charging-stations-for-desk", title: "Best Charging Stations for Desk", desc: "Full desk charging roundup" },
              { href: "/guide/best-charging-station-desk-organizers", title: "Best Charging Station Desk Organizers", desc: "Organizer + charger combos" },
              { href: "/guide/minimalist-desk-setup", title: "Minimalist Desk Setup Ideas", desc: "Clean, clutter-free workspace inspiration" },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white hover:border-brand transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-brand-muted flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <div>
                  <p className="font-bold text-ink text-sm group-hover:text-brand transition-colors">{g.title}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{g.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-ink-muted mt-4 text-center">Last updated: June 2026. Prices verified at time of writing -- always check current Amazon price before purchasing.</p>
        </section>
      </Container>
    </>
  );
}
