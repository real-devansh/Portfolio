"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GitBranch, Download, ArrowLeft } from "lucide-react";
import TechBadge from "./TechBadge";

interface PowerBIProject {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  github: string;
  download: string;
  tech: string[];
}

const powerbiProjects: PowerBIProject[] = [
  {
    id: "economic-sales-dashboard",
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard visualising regional sales performance, economic KPIs, revenue trends, and product-level breakdowns. Built with advanced DAX measures and cross-filter interactivity across multiple report pages.",
    highlights: [
      "Regional sales & revenue KPIs",
      "Interactive cross-filter slicers",
      "Period-over-period trend analysis",
      "Product category breakdown visuals",
    ],
    image: "/dashboard-powerbi.png",
    github:
      "https://github.com/real-devansh/Power-BI-Dashboards/tree/main/Economic%20Sales%20Dashboard",
    download:
      "https://github.com/real-devansh/Power-BI-Dashboards/raw/refs/heads/main/Economic%20Sales%20Dashboard/Economics%20Sales%20Dashboard.pbix",
    tech: ["Power BI", "DAX"],
  },
  {
    id: "business-revenue-analysis",
    title: "Business Revenue Analysis Dashboard",
    description:
      "Comprehensive Power BI dashboard tracking revenue metrics, business profitability, and key performance indicators. Features interactive data modeling and dynamic visualizations for business insights.",
    highlights: [
      "Revenue & profitability tracking",
      "Dynamic data modeling",
      "Interactive data visualizations",
      "Comprehensive performance metrics",
    ],
    image: "/image2.png",
    github: "https://github.com/real-devansh/Power-BI-Dashboards/tree/main",
    download: "https://github.com/real-devansh/Power-BI-Dashboards/tree/main",
    tech: ["Power BI", "Data Visualization"],
  },
];

export default function PowerBIGallery() {
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
          Power BI Dashboards
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-muted)",
            maxWidth: "520px",
            lineHeight: 1.7,
          }}
        >
          Interactive Power BI reports featuring DAX-powered KPIs, cross-filter
          slicers, regional breakdowns, and publishable .pbix files for download.
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
        {powerbiProjects.map((project, i) => (
          <PowerBICard key={project.id} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function PowerBICard({
  project,
  index,
  inView,
}: {
  project: PowerBIProject;
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
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,166,35,0.35)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 40px rgba(245,166,35,0.07)";
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
        {/* Power BI yellow accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #f5a623, #ffd700, transparent)",
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
              <span style={{ color: "#f5a623", flexShrink: 0, marginTop: "1px" }}>▸</span>
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

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "auto",
            paddingTop: "0.5rem",
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            id={`powerbi-github-${project.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
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
          <a
            href={project.download}
            download
            id={`powerbi-download-${project.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#f5a623")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
            }
          >
            <Download size={14} />
            Download .pbix
          </a>
        </div>
      </div>
    </motion.div>
  );
}
