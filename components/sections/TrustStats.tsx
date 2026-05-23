import Image from "next/image";

const stats = [
  {
    number: "14",
    unit: "products",
    icon: (
      <Image
        src="/images/icons/products-evaluated-icon.webp"
        alt="3D checklist icon representing evaluated products"
        width={48}
        height={48}
        className="object-contain"
      />
    ),
    iconSize: "w-12 h-12",
    label: "Evaluated for small-space use",
    description: "Every product scored on five criteria — specs, buyer feedback, value, build, and space fit.",
  },
  {
    number: "6",
    unit: "buying guides",
    icon: (
      <Image
        src="/images/icons/buying-guides-icon.webp"
        alt="3D chat and guide icon representing buying guides"
        width={48}
        height={48}
        className="object-contain"
      />
    ),
    iconSize: "w-12 h-12",
    label: "With side-by-side comparisons",
    description: "Structured like Wirecutter — clear top pick, honest trade-offs, and a comparison table.",
  },
  {
    number: "5",
    unit: "scoring criteria",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    iconSize: "w-9 h-9",
    label: "Tuned for small-space fit",
    description: "Space fit, build quality, ease of use, value, and buyer feedback — all weighted for compact living.",
  },
  {
    number: "1–10",
    unit: "score scale",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
      </svg>
    ),
    iconSize: "w-9 h-9",
    label: "Consistent across all products",
    description: "The same rubric for every product we evaluate — so scores are genuinely comparable across guides.",
  },
];

export function TrustStats() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3">
              {/* Icon + number row */}
              <div className="flex items-center gap-3">
                <div className={`shrink-0 ${stat.iconSize} rounded-xl bg-brand-light flex items-center justify-center text-brand overflow-hidden`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-2xl font-bold text-ink tabular-nums tracking-tight leading-none whitespace-nowrap">
                    {stat.number}
                  </span>
                  <span className="text-[11px] font-semibold text-ink-muted leading-none whitespace-nowrap">
                    {stat.unit}
                  </span>
                </div>
              </div>
              {/* Labels */}
              <div>
                <p className="font-semibold text-ink text-xs leading-snug mb-0.5">{stat.label}</p>
                <p className="text-xs text-ink-secondary leading-relaxed hidden sm:block">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
