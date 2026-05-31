"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Milestone {
  id: string;
  year: string;
  title: string;
  org: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    id: "edunet-internship",
    year: "Apr – May 2025",
    title: "Internship — Generative AI & Machine Learning",
    org: "Edunet Foundation",
    description:
      "2-month remote internship at Edunet Foundation focused on Generative AI and Machine Learning. Worked on hands-on projects applying LLMs, prompt engineering, and ML pipelines. Completed a certified programme co-powered by Microsoft, earning a Certificate of Completion.",
  },
  {
    id: "amazon-ml",
    year: "2025",
    title: "Amazon ML Summer School",
    org: "Amazon",
    description:
      "Selected as a participant for Amazon's prestigious Machine Learning Summer School — covering advanced topics including deep learning architectures, NLP, and reinforcement learning from world-class researchers.",
  },
  {
    id: "nptel-python",
    year: "2025",
    title: "NPTEL — Python for Data Science",
    org: "IIT Madras",
    description:
      "Completed with distinction via NPTEL/IIT Madras. Covered NumPy, Pandas, Matplotlib, statistical modelling, and scikit-learn pipelines for applied data science.",
  },
];

const badgeColors: Record<string, { bg: string; text: string }> = {
  "Edunet Foundation": { bg: "rgba(0,120,212,0.12)", text: "#3b9edd" },
  Amazon: { bg: "rgba(255,153,0,0.12)", text: "#FF9900" },
  "IIT Madras": { bg: "rgba(45,212,191,0.1)", text: "var(--accent)" },
  Hackathon: { bg: "rgba(139,92,246,0.12)", text: "#a78bfa" },
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Journey
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginTop: "0.5rem",
            }}
          >
            Experience & Milestones
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "7px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              transformOrigin: "top",
            }}
          />

          {milestones.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              style={{
                position: "relative",
                paddingBottom: i < milestones.length - 1 ? "3rem" : 0,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-1.68rem",
                  top: "0.2rem",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  border: "2px solid var(--bg)",
                  boxShadow: "0 0 12px rgba(45,212,191,0.5)",
                }}
              />

              {/* Card */}
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,212,191,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 24px rgba(45,212,191,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {m.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                        backgroundColor: badgeColors[m.org]?.bg ?? "rgba(45,212,191,0.1)",
                        color: badgeColors[m.org]?.text ?? "var(--accent)",
                      }}
                    >
                      {m.org}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      fontVariantNumeric: "tabular-nums",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {m.year}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                  }}
                >
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
