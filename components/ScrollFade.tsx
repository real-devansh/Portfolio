"use client";

import { useEffect, useRef, useState } from "react";

const FADE_PX = 80;

/**
 * Renders two fixed-position gradient overlays (top and bottom) that
 * fade in/out as the user scrolls, creating a smooth edge-fade effect.
 *
 * Uses overlay divs instead of mask-image on body so that
 * position:fixed children (Navbar, AnimatedBackground) are unaffected.
 */
export default function ScrollFade() {
  const [topOpacity, setTopOpacity] = useState(0);
  const [bottomOpacity, setBottomOpacity] = useState(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop;
      const maxScroll = el.scrollHeight - el.clientHeight;

      setTopOpacity(Math.min(scrollTop / FADE_PX, 1));
      setBottomOpacity(
        maxScroll > 0 ? Math.min((maxScroll - scrollTop) / FADE_PX, 1) : 0
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const overlayBase: React.CSSProperties = {
    position: "fixed",
    left: 0,
    right: 0,
    height: `${FADE_PX}px`,
    pointerEvents: "none",
    zIndex: 40, // below Navbar (z-50) but above page content
    transition: "opacity 0.1s linear",
  };

  return (
    <>
      {/* Top fade — visible once user scrolls down */}
      <div
        style={{
          ...overlayBase,
          top: 0,
          background: "linear-gradient(to bottom, var(--bg), transparent)",
          opacity: topOpacity,
        }}
      />
      {/* Bottom fade — fades out as user approaches bottom */}
      <div
        style={{
          ...overlayBase,
          bottom: 0,
          background: "linear-gradient(to top, var(--bg), transparent)",
          opacity: 1 - bottomOpacity,
        }}
      />
    </>
  );
}
