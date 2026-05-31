import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import PowerBIGallery from "@/components/PowerBIGallery";

export const metadata: Metadata = {
  title: "Power BI Dashboards — Devansh Mishra",
  description:
    "Interactive Power BI dashboards covering sales analytics, KPIs, and regional trends built by Devansh Mishra.",
};

export default function PowerBIPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <PowerBIGallery />
      </main>
      <Footer />
    </>
  );
}
