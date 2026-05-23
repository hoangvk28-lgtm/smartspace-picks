"use client";

import { useState } from "react";
import { seedStaticProducts, seedStaticGuides } from "@/app/admin/seed-actions";

interface Props {
  type: "products" | "guides";
  staticCount: number;
  dbCount: number;
}

export function SeedClient({ type, staticCount, dbCount }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<{ inserted: number; skipped: number; error?: string } | null>(null);
  const alreadyFull = dbCount >= staticCount;

  async function handleSeed() {
    setStatus("loading");
    setResult(null);
    try {
      const res = type === "products" ? await seedStaticProducts() : await seedStaticGuides();
      setResult(res);
      setStatus(res.error ? "error" : "done");
    } catch (e) {
      setResult({ inserted: 0, skipped: 0, error: String(e) });
      setStatus("error");
    }
  }

  return (
    <div className="space-y-3">
      {alreadyFull && status === "idle" && (
        <p className="text-xs text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
          ✓ Đã import đầy đủ ({dbCount}/{staticCount})
        </p>
      )}

      <button
        onClick={handleSeed}
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all
          bg-brand text-white hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Đang import…
          </>
        ) : status === "done" ? (
          `✓ Đã import ${result?.inserted} ${type}`
        ) : (
          `Import ${staticCount} ${type} vào Supabase`
        )}
      </button>

      {result && status === "done" && (
        <div className="text-xs text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
          ✓ Thêm mới <strong>{result.inserted}</strong> · Đã tồn tại (bỏ qua) <strong>{result.skipped}</strong>
          {result.inserted > 0 && (
            <span className="block mt-1">
              Vào <a href={`/admin/${type}`} className="underline font-medium">Admin → {type === "products" ? "Products" : "Guides"}</a> để chỉnh sửa.
            </span>
          )}
        </div>
      )}

      {result?.error && (
        <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          Lỗi: {result.error}
        </div>
      )}
    </div>
  );
}
