import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />

        {/* Section separator */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto 0",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border), transparent)",
          }}
        />

        <Experience />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border), transparent)",
          }}
        />

        <Projects />
      </main>
      <Footer />
    </>
  );
}
