"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.5rem 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              border: "2px solid rgba(45,212,191,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(45,212,191,0.15), inset 0 0 40px rgba(45,212,191,0.05)",
            }}
          >
            {/* Pulse ring */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "50%",
                border: "1px solid rgba(45,212,191,0.18)",
                animation: "pulse 3s ease-in-out infinite",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <Image
              src="/profilephoto2.png"
              alt="Devansh Mishra"
              fill
              sizes="140px"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              priority
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div style={{ textAlign: "center", maxWidth: "720px" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
                padding: "0.3rem 0.9rem",
                border: "1px solid rgba(45,212,191,0.3)",
                borderRadius: "999px",
                backgroundColor: "rgba(45,212,191,0.06)",
              }}
            >
              Data Analyst
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            Devansh{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2dd4bf, #0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mishra
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "var(--text-muted)",
              maxWidth: "580px",
              margin: "0 auto 2.5rem",
            }}
          >
            I design and build end-to-end analytics pipelines from raw
            ingestion to interactive dashboards — turning messy data into
            decisions that drive real business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="/resume.pdf"
              download
              id="download-resume-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 1.75rem",
                borderRadius: "999px",
                backgroundColor: "var(--accent)",
                color: "#0d1117",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "all 0.25s ease",
                boxShadow: "0 0 24px rgba(45,212,191,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#14b8a6";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 36px rgba(45,212,191,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(45,212,191,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href="#projects"
              id="view-projects-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 1.75rem",
                borderRadius: "999px",
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                border: "1px solid var(--border)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
              }}
            >
              View Projects
              <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 0.15; }
        }
      `}</style>
    </section>
  );
}
