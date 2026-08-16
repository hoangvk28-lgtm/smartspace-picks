"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();
  const isPopNavigation = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Let the browser handle scroll position on back/forward (popstate) navigations
    // natively so returning to a previous page restores where the user actually was,
    // instead of forcing everything to the top.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }
    const handlePopState = () => {
      isPopNavigation.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    // Only force a scroll-to-top for genuine forward navigations (clicking a link).
    // Back/forward navigations are left alone so the browser's own scroll
    // restoration (re-enabled above) can put the user back where they were.
    if (isPopNavigation.current) {
      isPopNavigation.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
