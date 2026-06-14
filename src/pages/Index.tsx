import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ThemeToggle from "@/components/ThemeToggle";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * SKEUOMORPHIC LAYOUT — LAYERED PARALLAX SECTIONS
 *
 * Each section has its own physical material identity:
 *   Hero        → Brushed steel instrument panel (dot grid + warm desk lamp)
 *   Services    → Blueprint drafting paper (fine grid + cyan ink lines)
 *   Projects    → Engineer's crosshatch cutting mat (diagonal hatch)
 *   Skills      → Circuit board PCB (trace grid + via dots)
 *   Experience  → Dark leather portfolio binder (embossed weave)
 *   Contact     → Cream linen stationery (subtle fabric texture)
 *
 * Scroll FX:
 *   - Each bento panel has a subtle parallax depth shift on scroll
 *   - Section dividers are engraved grooves (bevel highlight + shadow)
 *   - Global noise layer stays fixed for unified "desk surface" feel
 */

function ParallaxPanel({ children, className = "", depth = 0.04 }: {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, depth * 1000]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">

      {/* ── Fixed global desk-surface noise (very subtle) ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
          opacity: 0.022,
        }}
      />

      <Navbar />

      <main className="relative z-10 pt-20 pb-10 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-0">

        {/* ══════════════════════════════════════════════
            HERO — Brushed Steel / Instrument Panel
            Fine horizontal grain lines + dot grid
        ══════════════════════════════════════════════ */}
        <section className="relative bento-panel overflow-hidden" style={{ marginBottom: "2rem" }}>
          {/* Brushed steel horizontal grain */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 3px,
                hsla(40, 15%, 85%, 0.028) 3px,
                hsla(40, 15%, 85%, 0.028) 4px
              )`,
            }}
          />
          {/* Vertical grain for cross-brushed effect */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 8px,
                hsla(40, 15%, 85%, 0.012) 8px,
                hsla(40, 15%, 85%, 0.012) 9px
              )`,
            }}
          />
          {/* Warm desk lamp ambient */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 30% -10%, hsla(32, 60%, 50%, 0.06) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <HeroSection />
          </div>
          {/* Bottom engraved divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)",
            boxShadow: "0 1px 0 0 var(--bevel-light)",
          }} />
        </section>

        {/* ══════════════════════════════════════════════
            SERVICES — Blueprint Drafting Paper
            Fine cyan/blue grid with title block corner
        ══════════════════════════════════════════════ */}
        <section className="relative bento-panel overflow-hidden" style={{ marginBottom: "2rem" }}>
          {/* Blueprint major grid (every 40px) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(hsla(210, 80%, 55%, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, hsla(210, 80%, 55%, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Blueprint minor grid (every 8px) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(hsla(210, 80%, 55%, 0.025) 1px, transparent 1px),
                linear-gradient(90deg, hsla(210, 80%, 55%, 0.025) 1px, transparent 1px)
              `,
              backgroundSize: "8px 8px",
            }}
          />
          {/* Blueprint title block — bottom-right corner */}
          <div
            className="absolute bottom-4 right-4 w-32 h-14 pointer-events-none z-0"
            style={{
              border: "1px solid hsla(210, 80%, 55%, 0.15)",
              borderRadius: "2px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <div style={{ width: "80%", height: "1px", background: "hsla(210, 80%, 55%, 0.12)" }} />
            <span style={{ fontSize: "8px", color: "hsla(210, 80%, 55%, 0.3)", fontFamily: "monospace", letterSpacing: "0.1em" }}>KA PORTFOLIO</span>
            <span style={{ fontSize: "7px", color: "hsla(210, 80%, 55%, 0.2)", fontFamily: "monospace" }}>SERVICES · REV 1.0</span>
          </div>
          <div className="relative z-10">
            <ServicesSection />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)",
            boxShadow: "0 1px 0 0 var(--bevel-light)",
          }} />
        </section>

        {/* ══════════════════════════════════════════════
            PROJECTS — Engineer's Crosshatch Cutting Mat
            Diagonal hatch at 45° + ruled margin line
        ══════════════════════════════════════════════ */}
        <section className="relative bento-panel overflow-hidden" style={{ marginBottom: "2rem" }}>
          {/* Crosshatch diagonal lines */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 18px,
                  hsla(var(--foreground-hsl, 0,0%,50%), 0.035) 18px,
                  hsla(var(--foreground-hsl, 0,0%,50%), 0.035) 19px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 18px,
                  hsla(var(--foreground-hsl, 0,0%,50%), 0.025) 18px,
                  hsla(var(--foreground-hsl, 0,0%,50%), 0.025) 19px
                )
              `,
            }}
          />
          {/* Red margin line (like graph paper left margin) */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none z-0"
            style={{
              left: "48px",
              width: "1px",
              background: "hsla(0, 70%, 55%, 0.12)",
            }}
          />
          <div
            className="absolute top-0 bottom-0 pointer-events-none z-0"
            style={{
              left: "50px",
              width: "1px",
              background: "hsla(0, 70%, 55%, 0.06)",
            }}
          />
          <div className="relative z-10">
            <ProjectsSection />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)",
            boxShadow: "0 1px 0 0 var(--bevel-light)",
          }} />
        </section>

        {/* ══════════════════════════════════════════════
            SKILLS — PCB Circuit Board
            Green trace grid + via dot markers at intersections
        ══════════════════════════════════════════════ */}
        <section className="relative bento-panel overflow-hidden" style={{ marginBottom: "2rem" }}>
          {/* PCB trace grid */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(hsla(140, 55%, 40%, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, hsla(140, 55%, 40%, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />
          {/* Via dots at every other grid intersection (32px * 2 = 64px) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `radial-gradient(circle, hsla(140, 55%, 40%, 0.18) 1.2px, transparent 1.2px)`,
              backgroundSize: "64px 64px",
              backgroundPosition: "32px 32px",
            }}
          />
          {/* Subtle green ambient glow from bottom */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: "radial-gradient(ellipse 80% 40% at 50% 110%, hsla(140, 55%, 35%, 0.04) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <SkillsSection />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)",
            boxShadow: "0 1px 0 0 var(--bevel-light)",
          }} />
        </section>

        {/* ══════════════════════════════════════════════
            EXPERIENCE — Dark Leather Portfolio Binder
            Embossed weave pattern + stitched border
        ══════════════════════════════════════════════ */}
        <section className="relative bento-panel overflow-hidden" style={{ marginBottom: "2rem" }}>
          {/* Leather weave — tight diagonal dot grid */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, hsla(25, 30%, 35%, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: "8px 8px",
              backgroundPosition: "0 0",
              opacity: 0.6,
            }}
          />
          {/* Offset weave layer for depth */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, hsla(25, 30%, 20%, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "8px 8px",
              backgroundPosition: "4px 4px",
              opacity: 0.5,
            }}
          />
          {/* Stitched border — top */}
          <div
            className="absolute top-4 left-6 right-6 pointer-events-none z-0"
            style={{
              height: "1px",
              backgroundImage: `repeating-linear-gradient(
                90deg,
                hsla(32, 60%, 50%, 0.2) 0px,
                hsla(32, 60%, 50%, 0.2) 6px,
                transparent 6px,
                transparent 10px
              )`,
            }}
          />
          {/* Stitched border — bottom */}
          <div
            className="absolute bottom-4 left-6 right-6 pointer-events-none z-0"
            style={{
              height: "1px",
              backgroundImage: `repeating-linear-gradient(
                90deg,
                hsla(32, 60%, 50%, 0.2) 0px,
                hsla(32, 60%, 50%, 0.2) 6px,
                transparent 6px,
                transparent 10px
              )`,
            }}
          />
          {/* Stitched border — left */}
          <div
            className="absolute top-6 bottom-6 left-4 pointer-events-none z-0"
            style={{
              width: "1px",
              backgroundImage: `repeating-linear-gradient(
                180deg,
                hsla(32, 60%, 50%, 0.2) 0px,
                hsla(32, 60%, 50%, 0.2) 6px,
                transparent 6px,
                transparent 10px
              )`,
            }}
          />
          {/* Stitched border — right */}
          <div
            className="absolute top-6 bottom-6 right-4 pointer-events-none z-0"
            style={{
              width: "1px",
              backgroundImage: `repeating-linear-gradient(
                180deg,
                hsla(32, 60%, 50%, 0.2) 0px,
                hsla(32, 60%, 50%, 0.2) 6px,
                transparent 6px,
                transparent 10px
              )`,
            }}
          />
          {/* Dark warm ambient */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: "radial-gradient(ellipse 60% 40% at 50% 50%, hsla(25, 40%, 15%, 0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <ExperienceSection />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)",
            boxShadow: "0 1px 0 0 var(--bevel-light)",
          }} />
        </section>

        {/* ══════════════════════════════════════════════
            CONTACT — Cream Linen Stationery
            Subtle horizontal ruled lines + watermark corner
        ══════════════════════════════════════════════ */}
        <section className="relative bento-panel overflow-hidden">
          {/* Ruled lines */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                180deg,
                transparent,
                transparent 27px,
                hsla(40, 30%, 60%, 0.08) 27px,
                hsla(40, 30%, 60%, 0.08) 28px
              )`,
              backgroundPosition: "0 12px",
            }}
          />
          {/* Faint linen warp threads (vertical) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 3px,
                hsla(40, 30%, 60%, 0.025) 3px,
                hsla(40, 30%, 60%, 0.025) 4px
              )`,
            }}
          />
          {/* Watermark monogram — bottom right */}
          <div
            className="absolute bottom-8 right-8 pointer-events-none z-0 select-none"
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "hsla(32, 60%, 50%, 0.04)",
              letterSpacing: "-0.05em",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            KA
          </div>
          {/* Warm ambient top-left */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: "radial-gradient(ellipse 50% 40% at 0% 0%, hsla(40, 50%, 60%, 0.04) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <ContactSection />
          </div>
        </section>

      </main>

      <FooterSection />
      <ThemeToggle />
    </div>
  );
};

export default Index;