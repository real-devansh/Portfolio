"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GitBranch, ArrowLeft } from "lucide-react";
import TechBadge from "./TechBadge";

interface ExcelProject {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  github: string;
  tech: string[];
}

const excelProjects: ExcelProject[] = [
  {
    id: "awesome-chocolates-hr",
    title: "Awesome Chocolates HR Analytics Dashboard",
    description:
      "Comprehensive HR analytics workbook for a chocolate manufacturing company. Tracks employee headcount, attrition rates, department-wise distribution, and compensation benchmarks across multiple Excel sheets with pivot tables and dynamic charts.",
    highlights: [
      "Interactive pivot-table driven charts",
      "Department-wise attrition analysis",
      "Compensation & headcount KPIs",
      "Conditional formatting heatmaps",
    ],
    image: "/excel-hr-dashboard.png",
    github: "https://github.com/real-devansh/Awesome-Chocolates-Data-analysis",
    tech: ["Excel", "Excel Charts"],
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    description:
      "Interactive Excel dashboard visualising key HR metrics — headcount trends, attrition rates, department-wise salary distribution, and employee satisfaction scores. Built with dynamic pivot tables, slicers, and conditional-formatting heat-maps for at-a-glance workforce insights.",
    highlights: [
      "Headcount & attrition trend analysis",
      "Department-wise salary distribution",
      "Employee satisfaction score tracking",
      "Dynamic slicers & pivot tables",
    ],
    image: "/image.png",
    github: "https://github.com/real-devansh/Excel-Dashboards",
    tech: ["Excel", "Pivot Tables", "Data Visualisation", "HR Analytics"],
  },
];

export default function ExcelGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "7rem 1.5rem 5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "2.5rem" }}
      >
        <Link
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "var(--text-muted)",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
          }
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ marginBottom: "4rem" }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            display: "block",
            marginBottom: "0.6rem",
          }}
        >
          Dashboards
        </span>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "0.85rem",
          }}
        >
          Excel Dashboards
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-muted)",
            maxWidth: "520px",
            lineHeight: 1.7,
          }}
        >
          Interactive Excel workbooks featuring pivot tables, dynamic charts,
          conditional formatting, and data-driven HR & business insights.
        </p>
      </motion.div>

      {/* Project cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.75rem",
        }}
      >
        {excelProjects.map((project, i) => (
          <ExcelCard key={project.id} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function ExcelCard({
  project,
  index,
  inView,
}: {
  project: ExcelProject;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.25 + index * 0.12 }}
      whileHover={{ y: -5 }}
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,212,191,0.35)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 40px rgba(45,212,191,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Screenshot */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          backgroundColor: "#0a0f14",
          overflow: "hidden",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #217346, #33b050, transparent)",
            zIndex: 2,
          }}
        />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          flexGrow: 1,
        }}
      >
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            fontSize: "0.86rem",
            lineHeight: 1.7,
            color: "var(--text-muted)",
          }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {project.highlights.map((h) => (
            <li
              key={h}
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "1px" }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        {/* Link */}
        <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            id={`excel-github-${project.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
            }
          >
            <GitBranch size={14} />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
