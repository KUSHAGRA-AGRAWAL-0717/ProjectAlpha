import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ThemeToggle from "@/components/ThemeToggle";

import GlobalBgVideo from "@/components/Background looping animation.mp4";

/**
 * PORTFOLIO — Clean Grid Layout
 *
 * The entire portfolio is ONE connected grid system.
 * Videos are integrated as actual elements inside the section components.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* GLOBAL AMBIENT VIDEO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.02] mix-blend-screen pointer-events-none" style={{ filter: "blur(16px) contrast(1.5)" }}>
          <source src={GlobalBgVideo} type="video/mp4" />
        </video>
      </div>

      <Navbar />

      {/* ══════════════════════════════════════════════
          MASTER GRID — One Connected System
      ══════════════════════════════════════════════ */}
      <main className="relative z-10 pt-20 pb-0 px-3 sm:px-5 max-w-7xl mx-auto">
        <div className="grid-master">

          {/* ── HERO ── */}
          <div className="grid-section">
            <HeroSection />
          </div>

          {/* ── SERVICES ── */}
          <div className="grid-section section-glow-amber">
            <ServicesSection />
          </div>

          {/* ── PROJECTS ── */}
          <div className="grid-section">
            <ProjectsSection />
          </div>

          {/* ── SKILLS ── */}
          <div className="grid-section section-glow-blue">
            <SkillsSection />
          </div>

          {/* ── EXPERIENCE ── */}
          <div className="grid-section section-glow-amber">
            <ExperienceSection />
          </div>

          {/* ── CONTACT ── */}
          <div className="grid-section">
            <ContactSection />
          </div>

          {/* ── FOOTER ── */}
          <div className="grid-section">
            <FooterSection />
          </div>

        </div>
      </main>

      <ThemeToggle />
    </div>
  );
};

export default Index;