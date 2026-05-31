"use client";

import {
  SiPython,
  SiStreamlit,
  SiPandas,
  SiElectron,
  SiReact,
  SiSqlite,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import type { ComponentType, SVGProps } from "react";

interface TechConfig {
  bg: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
}

const TECH_MAP: Record<string, TechConfig> = {
  Python: {
    bg: "#3776AB",
    text: "#FFD43B",
    Icon: SiPython as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  Streamlit: {
    bg: "#FF4B4B",
    text: "#ffffff",
    Icon: SiStreamlit as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  Pandas: {
    bg: "#150458",
    text: "#ffffff",
    Icon: SiPandas as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  XGBoost: {
    bg: "#189A6E",
    text: "#ffffff",
    Icon: (({ size = 14, ...p }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )) as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  Electron: {
    bg: "#47848F",
    text: "#ffffff",
    Icon: SiElectron as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  React: {
    bg: "#20232A",
    text: "#61DAFB",
    Icon: SiReact as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  SQLite: {
    bg: "#003B57",
    text: "#ffffff",
    Icon: SiSqlite as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  TypeScript: {
    bg: "#3178C6",
    text: "#ffffff",
    Icon: SiTypescript as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  "Power BI": {
    bg: "#F2C811",
    text: "#000000",
    Icon: (({ size = 14, ...p }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
        <path d="M3 3h7v18H3V3zm11 4h7v14h-7V7zm-5.5 6h4v8h-4v-8z"/>
      </svg>
    )) as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  DAX: {
    bg: "#742774",
    text: "#ffffff",
    Icon: (({ size = 14, ...p }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
        <path d="M4 4h16v2H4V4zm0 7h10v2H4v-2zm0 7h7v2H4v-2z"/>
      </svg>
    )) as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  Excel: {
    bg: "#217346",
    text: "#ffffff",
    Icon: (({ size = 14, ...p }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
        <path d="M2 3h13l7 4v14H2V3zm2 2v14h16V8.5L14.5 5H4zm3.5 4l2 3-2 3h2l1-1.5 1 1.5h2l-2-3 2-3h-2l-1 1.5L9.5 9h-2z"/>
      </svg>
    )) as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
  "Excel Charts": {
    bg: "#107C41",
    text: "#ffffff",
    Icon: (({ size = 14, ...p }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
        <path d="M3 13h4v8H3v-8zm6-6h4v14H9V7zm6 3h4v11h-4V10z"/>
      </svg>
    )) as ComponentType<SVGProps<SVGSVGElement> & { size?: number }>,
  },
};

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  const config = TECH_MAP[tech];

  if (!config) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          padding: "0.2rem 0.6rem",
          borderRadius: "999px",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
          fontSize: "0.72rem",
          fontWeight: 600,
        }}
      >
        {tech}
      </span>
    );
  }

  const { bg, text, Icon } = config;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "0.22rem 0.65rem",
        borderRadius: "999px",
        backgroundColor: bg,
        color: text,
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLSpanElement).style.boxShadow = `0 4px 12px ${bg}55`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLSpanElement).style.boxShadow = "none";
      }}
    >
      <Icon size={12} style={{ color: text, flexShrink: 0 }} />
      {tech}
    </span>
  );
}
