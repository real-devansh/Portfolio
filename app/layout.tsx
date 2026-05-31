import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollFade from "@/components/ScrollFade";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devansh Mishra — Data Analyst",
  description:
    "Portfolio of Devansh Mishra — Data Analyst building full-stack analytics pipelines, machine learning models, and data-driven solutions.",
  keywords: [
    "Devansh Mishra",
    "Data Analyst",
    "Machine Learning",
    "Python",
    "Analytics",
    "Portfolio",
  ],
  openGraph: {
    title: "Devansh Mishra — Data Analyst",
    description:
      "Full-stack analytics pipelines, ML models, and data-driven solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="relative min-h-screen">
        <ScrollFade />
        {children}
      </body>
    </html>
  );
}
