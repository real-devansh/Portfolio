"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 1.5rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        backgroundColor: scrolled ? "rgba(13, 17, 23, 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontWeight: 700,
          fontSize: "1.125rem",
          letterSpacing: "-0.02em",
          color: "var(--accent)",
          textDecoration: "none",
        }}
      >
        DM
        <span style={{ color: "var(--text-muted)", fontWeight: 300 }}>.</span>
      </a>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "2rem" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => handleNav(l.href)}
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: active === l.href ? "var(--accent)" : "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
              paddingBottom: "2px",
              borderBottom: active === l.href ? "1px solid var(--accent)" : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color =
                active === l.href ? "var(--accent)" : "var(--text-muted)";
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
