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
import CodingHeroVideo from "@/components/Coding.mp4";
import BusinessAnalysisVideo from "@/components/Business Analysis.mp4";
import Coding1Video from "@/components/Coding (1).mp4";
import Coding2Video from "@/components/Coding (2).mp4";
import CandidateVideo from "@/components/andidate.mp4";
import SceneVideo from "@/components/Scene.mp4";

/**
 * STRICT GRID FRAMEWORK LAYOUT
 *
 * The entire portfolio is ONE connected grid system.
 * Every section is a bordered panel. Every content block is a bordered cell.
 * Nothing floats freely. The grid-master container uses "gap-as-border":
 *   - Container background = border color (shows through gaps)
 *   - Cells have their own backgrounds that cover the container
 *   - Result: perfectly shared borders, zero double-border artifacts
 *
 * Skeuomorphic layer: each section retains its material texture
 * (brushed steel, blueprint, crosshatch, PCB, leather, linen)
 * but all are contained within the strict grid cells.
 */

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">

      {/* ── Fixed global video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-15 pointer-events-none"
      >
        <source src={GlobalBgVideo} type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-background/80 z-0 pointer-events-none" />

      {/* ── Fixed global desk-surface noise (very subtle) ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
          opacity: 0.15,
        }}
      />

      <Navbar />

      {/* ══════════════════════════════════════════════
          MASTER GRID — One Connected System
          All sections share borders. No floating elements.
      ══════════════════════════════════════════════ */}
      <main className="relative z-10 pt-20 pb-0 px-3 sm:px-5 max-w-7xl mx-auto">
        <div className="grid-master backdrop-blur-sm bg-transparent">

          {/* ── SECTION 001: HERO ── */}
          <div className="grid-section">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none lg:hidden">
              <source src={CodingHeroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/20 pointer-events-none lg:hidden" />
            <div className="relative z-10">
              <HeroSection />
            </div>
          </div>

          {/* ── SECTION 002: SERVICES ── */}
          <div className="grid-section">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none">
              <source src={BusinessAnalysisVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/20 pointer-events-none" />
            <div className="relative z-10">
              <ServicesSection />
            </div>
          </div>

          {/* ── SECTION 003: PROJECTS ── */}
          <div className="grid-section">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none">
              <source src={Coding1Video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/20 pointer-events-none" />
            <div className="relative z-10">
              <ProjectsSection />
            </div>
          </div>

          {/* ── SECTION 004: SKILLS ── */}
          <div className="grid-section">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none">
              <source src={Coding2Video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/20 pointer-events-none" />
            <div className="relative z-10">
              <SkillsSection />
            </div>
          </div>

          {/* ── SECTION 005: EXPERIENCE ── */}
          <div className="grid-section">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none" style={{ filter: "hue-rotate(180deg)" }}>
              <source src={CandidateVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/20 pointer-events-none" />
            <div className="relative z-10">
              <ExperienceSection />
            </div>
          </div>

          {/* ── SECTION 006: CONTACT ── */}
          <div className="grid-section">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none">
              <source src={SceneVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/20 pointer-events-none" />
            <div className="relative z-10">
              <ContactSection />
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="grid-section bg-background/90 backdrop-blur-md">
            <FooterSection />
          </div>

        </div>
      </main>

      <ThemeToggle />
    </div>
  );
};

export default Index;