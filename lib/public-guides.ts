/**
 * Public-facing async guide data layer.
 *
 * - Server-only: do NOT import in client components.
 * - Queries Supabase for published, non-archived guides.
 * - Falls back to static data/guides.ts on missing env vars or any query error.
 * - Returns Guide-compatible objects usable by all existing UI components.
 */
import { guides as staticGuides, type Guide } from "@/data/guides";
import { isSupabaseConfigured, createAdminClient } from "@/lib/supabase/server";

// PublicGuide extends Guide with optional SEO/extra fields from DB
export interface PublicGuide extends Guide {
  metaTitle?: string;
  metaDescription?: string;
  heroImageAlt?: string;
  intro?: string;
}

// ── DB row shape ──────────────────────────────────────────────────────────────

interface GuideRow {
  id: string;
  title: string;
  slug: string;
  category_slug: string;
  subcategory_slug: string;
  description: string;
  hero_image: string;
  hero_image_alt: string;
  meta_title: string;
  meta_description: string;
  main_keyword: string;
  sub_keywords: string[];
  intro: string;
  recommended_product_ids: string[];
  sections: Guide["sections"];
  faq: Guide["faq"];
  related_guide_slugs: string[];
  author: string;
  read_time: string;
  last_updated: string;
  status: string;
  archived: boolean;
  updated_at: string;
}

function rowToPublicGuide(row: GuideRow): PublicGuide {
  return {
    title: row.title,
    slug: row.slug,
    categorySlug: row.category_slug,
    subcategorySlug: row.subcategory_slug,
    description: row.description,
    heroImage: row.hero_image ?? "",
    heroImageAlt: row.hero_image_alt || undefined,
    metaTitle: row.meta_title || undefined,
    metaDescription: row.meta_description || undefined,
    intro: row.intro || undefined,
    mainKeyword: row.main_keyword ?? "",
    subKeywords: row.sub_keywords ?? [],
    lastUpdated: row.updated_at?.split("T")[0] ?? row.last_updated ?? new Date().toISOString().split("T")[0],
    author: row.author || "SmartSpace Picks Editorial Team",
    readTime: row.read_time || "",
    recommendedProductIds: row.recommended_product_ids ?? [],
    sections: row.sections ?? [],
    faq: row.faq ?? [],
    relatedGuideSlugs: row.related_guide_slugs ?? [],
  };
}

// ── Core fetch ────────────────────────────────────────────────────────────────

export async function getPublicGuides(): Promise<PublicGuide[]> {
  if (!isSupabaseConfigured()) return staticGuides;

  try {
    const db = createAdminClient();
    const { data, error } = await db
      .from("guides")
      .select("*")
      .eq("status", "published")
      .eq("archived", false)
      .order("updated_at", { ascending: false });

    if (error) throw error;
    const dbGuides = (data as GuideRow[]).map(rowToPublicGuide);
    // Merge: static guides as baseline, DB guides override by slug
    // This ensures static content always shows alongside admin-created content
    const dbSlugSet = new Set(dbGuides.map((g) => g.slug));
    const staticOnly = staticGuides.filter((g) => !dbSlugSet.has(g.slug));
    return [...dbGuides, ...staticOnly];
  } catch (e) {
    console.warn("[public-guides] Supabase query failed — falling back to static data:", e);
    return staticGuides;
  }
}

export async function getPublicGuideBySlug(slug: string): Promise<PublicGuide | undefined> {
  if (!isSupabaseConfigured()) return staticGuides.find((g) => g.slug === slug);

  try {
    const db = createAdminClient();
    const { data, error } = await db
      .from("guides")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .eq("archived", false)
      .single();

    if (error?.code === "PGRST116") {
      // Not in DB — fall back to static (covers build-time slugs before seeding)
      return staticGuides.find((g) => g.slug === slug);
    }
    if (error) throw error;
    return rowToPublicGuide(data as GuideRow);
  } catch (e) {
    console.warn(`[public-guides] getPublicGuideBySlug("${slug}") failed — falling back:`, e);
    return staticGuides.find((g) => g.slug === slug);
  }
}

export async function getPublicGuideSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured()) return staticGuides.map((g) => g.slug);

  try {
    const db = createAdminClient();
    const { data, error } = await db
      .from("guides")
      .select("slug")
      .eq("status", "published")
      .eq("archived", false);

    if (error) throw error;
    const dbSlugs = (data as { slug: string }[]).map((r) => r.slug);
    // Union with static slugs — build never fails even if DB is empty
    const all = new Set([...staticGuides.map((g) => g.slug), ...dbSlugs]);
    return [...all];
  } catch (e) {
    console.warn("[public-guides] getPublicGuideSlugs failed — using static slugs:", e);
    return staticGuides.map((g) => g.slug);
  }
}

// ── Derived helpers ───────────────────────────────────────────────────────────

export async function getPublicGuidesByCategory(categorySlug: string): Promise<PublicGuide[]> {
  const all = await getPublicGuides();
  return all.filter((g) => g.categorySlug === categorySlug);
}

export async function getFeaturedPublicGuides(limit = 6): Promise<PublicGuide[]> {
  const all = await getPublicGuides();
  return all.slice(0, limit);
}

export async function getRelatedPublicGuides(slugs: string[]): Promise<PublicGuide[]> {
  if (slugs.length === 0) return [];
  const all = await getPublicGuides();
  return slugs
    .map((slug) => all.find((g) => g.slug === slug))
    .filter((g): g is PublicGuide => g !== undefined);
}
