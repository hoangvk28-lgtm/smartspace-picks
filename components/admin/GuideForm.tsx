"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import Link from "next/link";
import { AdminCard } from "@/components/admin/AdminCard";
import {
  AdminFormField,
  inputClass,
  selectClass,
  textareaClass,
} from "@/components/admin/AdminFormField";
import { MediaSelector } from "@/components/admin/MediaSelector";
import { categories } from "@/data/categories";
import type { StoredGuide } from "@/lib/guides-store";
import type { GuideFormState } from "@/app/admin/guide-actions";
import type { StoredProduct } from "@/lib/products-store";

interface GuideFormProps {
  action: (prev: GuideFormState, formData: FormData) => Promise<GuideFormState>;
  guide?: StoredGuide;
  mode: "create" | "edit";
  products?: StoredProduct[];
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const initialState: GuideFormState = {};

export function GuideForm({ action, guide, mode, products }: GuideFormProps) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const fe = state.fieldErrors ?? {};

  // Slug auto-gen
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(mode === "edit");
  const [slugValue, setSlugValue] = useState(guide?.slug ?? "");

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!slugManuallyEdited) {
      setSlugValue(slugify(e.target.value));
    }
  }

  function handleSlugChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSlugManuallyEdited(true);
    setSlugValue(e.target.value);
  }

  // Repeatable sections
  const initSectionCount =
    mode === "edit" && guide && guide.sections.length > 0
      ? guide.sections.length
      : 1;
  const [sectionCount, setSectionCount] = useState(initSectionCount);

  // Repeatable FAQ
  const initFaqCount =
    mode === "edit" && guide && guide.faq.length > 0 ? guide.faq.length : 1;
  const [faqCount, setFaqCount] = useState(initFaqCount);
  const [heroImageUrl, setHeroImageUrl] = useState(guide?.heroImage ?? "");
  const [heroImageAlt, setHeroImageAlt] = useState(guide?.heroImageAlt ?? "");

  const submitButton = (
    <div className="flex items-center gap-3">
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg transition-colors"
      >
        {pending && (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {pending ? "Saving…" : "Save Guide"}
      </button>
      <Link
        href="/admin/guides"
        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        Cancel
      </Link>
    </div>
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {/* Global error */}
      {state.error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm font-semibold text-red-800">{state.error}</p>
        </div>
      )}

      {/* Top submit */}
      {submitButton}

      {/* Section A: Basic Info */}
      <AdminCard>
        <h2 className="text-base font-semibold text-gray-900 mb-4">Basic Info</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AdminFormField label="Title" htmlFor="title" required error={fe.title}>
            <input
              id="title"
              name="title"
              type="text"
              required
              className={inputClass}
              defaultValue={guide?.title ?? ""}
              onChange={handleTitleChange}
            />
          </AdminFormField>

          <AdminFormField label="Slug" htmlFor="slug" required error={fe.slug}>
            <input
              id="slug"
              name="slug"
              type="text"
              required
              className={inputClass}
              value={slugValue}
              onChange={handleSlugChange}
            />
          </AdminFormField>

          <AdminFormField label="Category" htmlFor="categorySlug" required error={fe.categorySlug}>
            <select
              id="categorySlug"
              name="categorySlug"
              className={selectClass}
              defaultValue={guide?.categorySlug ?? ""}
            >
              <option value="">Select category…</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </AdminFormField>

          <AdminFormField label="Subcategory" htmlFor="subcategorySlug" error={fe.subcategorySlug}>
            <input
              id="subcategorySlug"
              name="subcategorySlug"
              type="text"
              className={inputClass}
              defaultValue={guide?.subcategorySlug ?? ""}
              placeholder="e.g. monitor-stands"
            />
          </AdminFormField>

          <div className="sm:col-span-2">
            <AdminFormField label="Description" htmlFor="description" error={fe.description}>
              <textarea
                id="description"
                name="description"
                rows={3}
                className={textareaClass}
                defaultValue={guide?.description ?? ""}
              />
            </AdminFormField>
          </div>

          <AdminFormField label="Author" htmlFor="author" error={fe.author}>
            <input
              id="author"
              name="author"
              type="text"
              className={inputClass}
              defaultValue={guide?.author ?? "SmartSpace Picks Editorial Team"}
            />
          </AdminFormField>

          <AdminFormField label="Read Time" htmlFor="readTime" error={fe.readTime}>
            <input
              id="readTime"
              name="readTime"
              type="text"
              className={inputClass}
              defaultValue={guide?.readTime ?? ""}
              placeholder="e.g. 7 min"
            />
          </AdminFormField>

          <AdminFormField label="Status" htmlFor="status" error={fe.status}>
            <select
              id="status"
              name="status"
              className={selectClass}
              defaultValue={guide?.status ?? "draft"}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </AdminFormField>
        </div>
      </AdminCard>

      {/* Section B: SEO */}
      <AdminCard>
        <h2 className="text-base font-semibold text-gray-900 mb-4">SEO</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AdminFormField label="Meta Title" htmlFor="metaTitle" error={fe.metaTitle}>
            <input
              id="metaTitle"
              name="metaTitle"
              type="text"
              className={inputClass}
              defaultValue={guide?.metaTitle ?? ""}
            />
          </AdminFormField>

          <AdminFormField label="Main Keyword" htmlFor="mainKeyword" error={fe.mainKeyword}>
            <input
              id="mainKeyword"
              name="mainKeyword"
              type="text"
              className={inputClass}
              defaultValue={guide?.mainKeyword ?? ""}
            />
          </AdminFormField>

          <div className="sm:col-span-2">
            <AdminFormField
              label="Meta Description"
              htmlFor="metaDescription"
              hint="Shown in Google results. 150-160 chars recommended."
              error={fe.metaDescription}
            >
              <textarea
                id="metaDescription"
                name="metaDescription"
                rows={2}
                className={textareaClass}
                defaultValue={guide?.metaDescription ?? ""}
              />
            </AdminFormField>
          </div>

          <div className="sm:col-span-2">
            <AdminFormField
              label="Sub Keywords"
              htmlFor="subKeywords"
              hint="One keyword per line."
              error={fe.subKeywords}
            >
              <textarea
                id="subKeywords"
                name="subKeywords"
                rows={3}
                className={textareaClass}
                defaultValue={guide?.subKeywords?.join("\n") ?? ""}
              />
            </AdminFormField>
          </div>
        </div>
      </AdminCard>

      {/* Section C: Hero Image */}
      <AdminCard>
        <h2 className="text-base font-semibold text-gray-900 mb-4">Hero Image</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AdminFormField label="Hero Image URL" htmlFor="heroImage" error={fe.heroImage}>
              <input
                id="heroImage"
                name="heroImage"
                type="text"
                className={inputClass}
                value={heroImageUrl}
                onChange={(e) => setHeroImageUrl(e.target.value)}
                placeholder="https://…"
              />
            </AdminFormField>

            <AdminFormField label="Hero Image Alt Text" htmlFor="heroImageAlt" error={fe.heroImageAlt}>
              <input
                id="heroImageAlt"
                name="heroImageAlt"
                type="text"
                className={inputClass}
                value={heroImageAlt}
                onChange={(e) => setHeroImageAlt(e.target.value)}
              />
            </AdminFormField>
          </div>
          <MediaSelector
            folder="guides"
            onSelect={(url, alt) => { setHeroImageUrl(url); if (alt) setHeroImageAlt(alt); }}
          />
          {heroImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={heroImageUrl} alt="Preview" className="h-20 w-auto object-cover rounded-lg border border-border mt-1" />
          )}
        </div>
      </AdminCard>

      {/* Section D: Intro */}
      <AdminCard>
        <h2 className="text-base font-semibold text-gray-900 mb-4">Intro</h2>
        <AdminFormField label="Intro Text" htmlFor="intro" error={fe.intro}>
          <textarea
            id="intro"
            name="intro"
            rows={5}
            className={textareaClass}
            defaultValue={guide?.intro ?? ""}
          />
        </AdminFormField>
      </AdminCard>

      {/* Section E: Recommended Products */}
      <AdminCard>
        <h2 className="text-base font-semibold text-gray-900 mb-4">Recommended Products</h2>
        <AdminFormField
          label="Product IDs"
          htmlFor="recommendedProductIds"
          hint="Enter one product ID per line. IDs can be found on the Products page."
          error={fe.recommendedProductIds}
        >
          <textarea
            id="recommendedProductIds"
            name="recommendedProductIds"
            rows={4}
            className={textareaClass}
            defaultValue={guide?.recommendedProductIds?.join("\n") ?? ""}
          />
        </AdminFormField>

        {products && products.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-medium text-gray-500 mb-2">Available products (ID → name):</p>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 max-h-48 overflow-y-auto">
              <ul className="space-y-1">
                {products.map((p) => (
                  <li key={p.id} className="text-xs text-gray-600 font-mono">
                    <span className="text-gray-400">{p.id}</span>
                    <span className="text-gray-300 mx-1">—</span>
                    <span className="font-sans text-gray-700">{p.name}</span>
                    {p.subcategorySlug && (
                      <span className="text-gray-400 ml-1">({p.subcategorySlug})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </AdminCard>

      {/* Section F: Content Sections */}
      <AdminCard>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">Content Sections</h2>
        </div>

        {fe.sections && (
          <p className="text-xs text-red-600 font-medium mb-3">{fe.sections}</p>
        )}

        <div className="flex flex-col gap-4">
          {Array.from({ length: sectionCount }, (_, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Section {i + 1}
                </span>
                {sectionCount > 1 && (
                  <button
                    type="button"
                    onClick={() => setSectionCount((n) => n - 1)}
                    className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>

              <AdminFormField label="Heading" htmlFor={`section_heading_${i}`}>
                <input
                  id={`section_heading_${i}`}
                  name={`section_heading_${i}`}
                  type="text"
                  className={inputClass}
                  defaultValue={guide?.sections?.[i]?.heading ?? ""}
                />
              </AdminFormField>

              <AdminFormField label="Body" htmlFor={`section_body_${i}`}>
                <textarea
                  id={`section_body_${i}`}
                  name={`section_body_${i}`}
                  rows={4}
                  className={textareaClass}
                  defaultValue={guide?.sections?.[i]?.body ?? ""}
                />
              </AdminFormField>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSectionCount((n) => n + 1)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Section
        </button>
      </AdminCard>

      {/* Section G: FAQ */}
      <AdminCard>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">FAQ</h2>
        </div>

        {fe.faq && (
          <p className="text-xs text-red-600 font-medium mb-3">{fe.faq}</p>
        )}

        <div className="flex flex-col gap-4">
          {Array.from({ length: faqCount }, (_, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  FAQ {i + 1}
                </span>
                {faqCount > 1 && (
                  <button
                    type="button"
                    onClick={() => setFaqCount((n) => n - 1)}
                    className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>

              <AdminFormField label="Question" htmlFor={`faq_question_${i}`}>
                <input
                  id={`faq_question_${i}`}
                  name={`faq_question_${i}`}
                  type="text"
                  className={inputClass}
                  defaultValue={guide?.faq?.[i]?.question ?? ""}
                />
              </AdminFormField>

              <AdminFormField label="Answer" htmlFor={`faq_answer_${i}`}>
                <textarea
                  id={`faq_answer_${i}`}
                  name={`faq_answer_${i}`}
                  rows={3}
                  className={textareaClass}
                  defaultValue={guide?.faq?.[i]?.answer ?? ""}
                />
              </AdminFormField>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setFaqCount((n) => n + 1)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add FAQ
        </button>
      </AdminCard>

      {/* Section H: Related Guides */}
      <AdminCard>
        <h2 className="text-base font-semibold text-gray-900 mb-4">Related Guides</h2>
        <AdminFormField
          label="Related Guide Slugs"
          htmlFor="relatedGuideSlugs"
          hint="One slug per line."
          error={fe.relatedGuideSlugs}
        >
          <textarea
            id="relatedGuideSlugs"
            name="relatedGuideSlugs"
            rows={3}
            className={textareaClass}
            defaultValue={guide?.relatedGuideSlugs?.join("\n") ?? ""}
          />
        </AdminFormField>
      </AdminCard>

      {/* Bottom submit */}
      {submitButton}
    </form>
  );
}
