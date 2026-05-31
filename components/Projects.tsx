"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { ExternalLink, GitBranch, BarChart2, FileSpreadsheet } from "lucide-react";
import Link from "next/link";
import TechBadge from "./TechBadge";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    id: "clv-pipeline",
    title: "End to End Sales Analytics Pipeline Dashboard",
    description:
      "End-to-end Sales analytics pipeline dashboard. Features automated feature engineering, XGBoost model training & retraining triggers, and a Streamlit dashboard for business stakeholders to explore cohort segmentation and churn probabilities in real time.",
    tech: ["Python", "XGBoost", "Streamlit", "Pandas"],
    github: "https://github.com/real-devansh/End-To-End-Sales-Analytics-Pipeline-Dashboard",
    demo: "https://e2e-sales-analytics-pipeline-dashboard.streamlit.app/",
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
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
            Work
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
            Featured Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Explore Dashboards ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            backgroundColor: "rgba(22,27,34,0.6)",
            backdropFilter: "blur(8px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "20%",
              right: "20%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
              opacity: 0.5,
            }}
          />

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
            More Work
          </span>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "0.6rem",
            }}
          >
            Explore Dashboards
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              maxWidth: "440px",
              margin: "0 auto 2rem",
              lineHeight: 1.65,
            }}
          >
            Interactive business dashboards built in Excel and Power BI — from
            HR analytics to regional sales KPIs.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <DashboardCTA
              href="/projects/excel"
              id="cta-excel-dashboards"
              label="View Excel Dashboards"
              Icon={FileSpreadsheet}
              accentColor="#217346"
            />
            <DashboardCTA
              href="/projects/powerbi"
              id="cta-powerbi-dashboards"
              label="View Power BI Projects"
              Icon={BarChart2}
              accentColor="#F2C811"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      whileHover={{ y: -6 }}
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onHoverStart={(e) => {
        (e.target as HTMLDivElement).style?.setProperty?.(
          "border-color",
          "rgba(45,212,191,0.35)"
        );
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,212,191,0.35)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 40px rgba(45,212,191,0.08), 0 0 0 1px rgba(45,212,191,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Glow accent top-left */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, var(--accent), transparent)",
          opacity: 0.4,
        }}
      />

      {/* Project image preview */}
      {project.image && (
        <div
          style={{
            width: "calc(100% + 3.5rem)",
            marginLeft: "-1.75rem",
            marginTop: "-1.75rem",
            marginBottom: "0.25rem",
            height: "180px",
            overflow: "hidden",
            borderRadius: "16px 16px 0 0",
            position: "relative",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
            }
          />
          {/* Gradient overlay at bottom of image */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60px",
              background: "linear-gradient(to top, var(--surface), transparent)",
            }}
          />
        </div>
      )}

      {/* Featured badge */}
      {project.featured && (
        <span
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent)",
            backgroundColor: "rgba(45,212,191,0.1)",
            border: "1px solid rgba(45,212,191,0.2)",
            padding: "0.15rem 0.5rem",
            borderRadius: "999px",
          }}
        >
          Featured
        </span>
      )}

      {/* Title */}
      <h3
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.3,
          paddingRight: project.featured ? "5rem" : 0,
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.88rem",
          lineHeight: 1.7,
          color: "var(--text-muted)",
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tech badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {project.tech.map((t) => (
          <TechBadge key={t} tech={t} />
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          id={`github-${project.id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8rem",
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
          View Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            id={`demo-${project.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
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
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function DashboardCTA({
  href,
  id,
  label,
  Icon,
  accentColor,
}: {
  href: string;
  id: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
  accentColor: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        id={id}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.55rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          backgroundColor: "transparent",
          color: "var(--text-muted)",
          fontWeight: 600,
          fontSize: "0.875rem",
          textDecoration: "none",
          transition: "border-color 0.25s, color 0.25s, box-shadow 0.25s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor = accentColor;
          el.style.color = accentColor;
          el.style.boxShadow = `0 0 20px ${accentColor}22`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor = "var(--border)";
          el.style.color = "var(--text-muted)";
          el.style.boxShadow = "none";
        }}
      >
        <Icon size={15} />
        {label}
      </Link>
    </motion.div>
  );
}
