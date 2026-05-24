import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";

export const metadata: Metadata = buildMetadata({
  title: "About DeskFinds",
  description:
    "DeskFinds publishes honest Amazon buying guides for students, dorm room users, and people living in small apartments and compact home offices. Learn who we are and how we work.",
  path: "/about",
});

const DIFFERENTIATORS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    title: "Small-space focused",
    desc: "Every product is evaluated for dorm rooms, apartment desks, and compact setups - not hypothetical large home offices. Physical size, mounting requirements, and space footprint are first-class evaluation criteria.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Clear product comparisons",
    desc: "We use a consistent 1–10 scoring system across five criteria for every product we evaluate. Scores are comparable across categories because the criteria don't change. Our comparison tables show you everything side-by-side.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Practical buying guides",
    desc: "Our guides are structured around real buying decisions: who this is for, what trade-offs exist, what to avoid, and a clear recommendation with reasons. We don't pad guides with irrelevant products to increase affiliate link count.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "No product overload",
    desc: "Most buying guides on the internet recommend 10–20 products so no reader decision feels wrong. We pick the best 2–4 options and explain clearly why. If you can't choose between options we recommend, we tell you which one to buy.",
  },
];

export default function AboutPage() {
  return (
    <Container narrow className="py-14">
      {/* Header */}
      <header className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">About Us</span>
        <h1 className="text-4xl font-bold text-ink mt-2 mb-4 tracking-tight">
          Making Small Spaces Work Smarter
        </h1>
        <p className="text-lg text-ink-secondary leading-relaxed">
          DeskFinds was built for people who have to make careful decisions about every product they bring into a small room - because space is a real constraint and the wrong product makes things worse.
        </p>
      </header>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">Our Mission</h2>
        <div className="space-y-4 text-ink-secondary leading-relaxed text-sm">
          <p>
            We believe that a dorm room, a studio apartment, or a bedroom desk doesn&apos;t have to mean a compromised setup. The right products - chosen specifically for tight spaces - can make a 200-square-foot room as productive and comfortable as a much larger one.
          </p>
          <p>
            DeskFinds exists to help students, remote workers, and small-space renters find those products without wading through sponsored rankings, vague listicles, or buying guides that were clearly written without considering what a real dorm desk looks like.
          </p>
        </div>
      </section>

      {/* Who we write for */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">Who We Write For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "College students",
              desc: "Living in dorms and shared apartments who need to maximize one desk and limited floor space on a student budget.",
            },
            {
              title: "Remote workers",
              desc: "Setting up a professional home office in a bedroom corner or studio apartment without the budget or space for dedicated office furniture.",
            },
            {
              title: "Small apartment renters",
              desc: "Who want organized, functional rooms and can't drill holes, can't add furniture that dominates the room, and need products that work with what they already have.",
            },
            {
              title: "First-time renters",
              desc: "Equipping their first place and trying to avoid the expensive mistake of buying something that doesn't fit or doesn't solve the actual problem.",
            },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-card border border-border bg-white">
              <p className="font-semibold text-ink text-sm mb-1.5">{item.title}</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What makes us different */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-2 tracking-tight">What Makes DeskFinds Different</h2>
        <p className="text-sm text-ink-secondary leading-relaxed mb-6">
          There are thousands of Amazon product roundup sites. Here is why we think DeskFinds is worth your time:
        </p>
        <div className="space-y-5">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-ink text-sm mb-1">{item.title}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we research */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">How We Research</h2>
        <div className="space-y-4 text-sm text-ink-secondary leading-relaxed">
          <p>
            For every buying guide, we start by defining the exact small-space context: what are the physical constraints, what does the target buyer actually own, and what are they trying to solve? We evaluate products against those real constraints - not generic &ldquo;great for home offices&rdquo; claims.
          </p>
          <p>
            We draw on manufacturer specifications, verified Amazon buyer reviews (with particular attention to patterns in negative reviews that surface failure modes), and community discussions from spaces where real small-room users share what actually works.
          </p>
          <p>
            We are transparent about one important thing: <strong className="text-ink">unless we explicitly state otherwise, our guides are research-based, not hands-on lab tests.</strong> We don&apos;t have a testing facility. We believe being honest about this is more useful to you than pretending we do.
          </p>
          <p>
            You can read our complete methodology, including all five scoring criteria and what each editorial badge means, on our{" "}
            <Link href="/how-we-review" className="text-brand hover:text-brand-dark font-medium underline underline-offset-2 transition-colors">
              How We Review page
            </Link>.
          </p>
        </div>
      </section>

      {/* Affiliate relationship */}
      <section className="mb-12 p-5 bg-white rounded-card border border-border">
        <h2 className="text-lg font-bold text-ink mb-2">Our Affiliate Relationship</h2>
        <p className="text-sm text-ink-secondary leading-relaxed mb-3">
          As an Amazon Associate, we earn a small commission when you buy through our links. This is how the site is funded. We want to be completely clear: our recommendation rankings are never influenced by commission rates or any payment from brands. We link to whatever product we genuinely believe is the best choice.
        </p>
        <Link href="/affiliate-disclosure" className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
          Read our full affiliate disclosure →
        </Link>
      </section>

      {/* Internal links */}
      <section>
        <h2 className="text-xl font-bold text-ink mb-5 tracking-tight">Explore DeskFinds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Buying Guides</p>
            <ul className="space-y-2">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guide/${guide.slug}`}
                    className="text-sm text-brand hover:text-brand-dark font-medium transition-colors"
                  >
                    {guide.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Categories</p>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-brand hover:text-brand-dark font-medium transition-colors"
                  >
                    {cat.name} →
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2">
              <Link href="/compare" className="block text-sm text-brand hover:text-brand-dark font-medium transition-colors">Compare all products →</Link>
              <Link href="/deals" className="block text-sm text-brand hover:text-brand-dark font-medium transition-colors">Budget-friendly finds →</Link>
              <Link href="/contact" className="block text-sm text-brand hover:text-brand-dark font-medium transition-colors">Contact us →</Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
