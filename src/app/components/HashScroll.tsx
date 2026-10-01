"use client";

import { useEffect } from "react";

// Stop correcting after this long even if the visitor never touches the page.
const SETTLE_MS = 8000;
const USER_EVENTS = ["wheel", "touchstart", "keydown", "mousedown"] as const;

/**
 * Makes shared section links (e.g. /#members) land on the right section.
 *
 * The browser jumps to the hash once, on first paint. On the landing page the
 * layout keeps moving after that (AxionBanner only renders after mount, images
 * and fonts load late), so that single jump lands short. This re-applies the
 * jump whenever the page resizes, until the visitor scrolls on their own.
 */
export default function HashScroll() {
  useEffect(() => {
    let observer: ResizeObserver | null = null;
    let timer = 0;

    const stop = () => {
      observer?.disconnect();
      observer = null;
      window.clearTimeout(timer);
      USER_EVENTS.forEach((e) => window.removeEventListener(e, stop));
    };

    const target = () => {
      try {
        const id = decodeURIComponent(window.location.hash.slice(1));
        return id ? document.getElementById(id) : null;
      } catch {
        return null; // malformed hash
      }
    };

    const follow = () => {
      stop();
      if (!target()) return;

      const jump = () => target()?.scrollIntoView({ block: "start" });
      jump();
      observer = new ResizeObserver(jump);
      observer.observe(document.body);
      timer = window.setTimeout(stop, SETTLE_MS);
      USER_EVENTS.forEach((e) =>
        window.addEventListener(e, stop, { passive: true }),
      );
    };

    follow();
    window.addEventListener("hashchange", follow);
    return () => {
      stop();
      window.removeEventListener("hashchange", follow);
    };
  }, []);

  return null;
}
