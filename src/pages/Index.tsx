import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ThemeToggle from "@/components/ThemeToggle";
import CustomCursor from "@/components/CustomCursor";

import SceneVideo from "@/components/Scene.mp4";

/**
 * PORTFOLIO — Clean Grid Layout
 *
 * The entire portfolio is ONE connected grid system.
 * Videos are integrated as actual elements inside the section components.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      {/* GLOBAL AMBIENT VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.08] dark:opacity-[0.12] mix-blend-overlay pointer-events-none"
          style={{ filter: "blur(2px)" }}
        >
          <source src={SceneVideo} type="video/mp4" />
        </video>
      </div>

      <Navbar />

      {/* ══════════════════════════════════════════════
          MASTER GRID — One Connected System
      ══════════════════════════════════════════════ */}
      <main className="relative z-10 pt-20 pb-0 px-3 sm:px-5 max-w-6xl mx-auto">
        <div className="grid-master">
          {/* ── HERO ── */}
          <div className="grid-section">
            <HeroSection />
          </div>

          {/* ── AREAS OF EXPERTISE ── */}
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

          {/* ── BLOGS ── */}
          <div className="grid-section section-glow-blue">
            <BlogsSection />
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
