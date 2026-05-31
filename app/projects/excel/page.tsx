import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import ExcelGallery from "@/components/ExcelGallery";

export const metadata: Metadata = {
  title: "Excel Dashboards — Devansh Mishra",
  description:
    "Excel dashboards, HR analytics workbooks, and data reports built by Devansh Mishra.",
};

export default function ExcelPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <ExcelGallery />
      </main>
      <Footer />
    </>
  );
}
