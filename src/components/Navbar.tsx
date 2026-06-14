import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/**
 * SKEUOMORPHIC NAVBAR — BRUSHED ALUMINUM INSTRUMENT PANEL
 *
 * Physical Inspiration: Precision-machined aluminum aviation dashboard.
 * - Multi-layer brushed grain: horizontal micro-lines + coarser relief
 * - Panel screws: small circles at the four corners (decorative rivet marks)
 * - Active tab: pressed inward (inset shadow), amber indicator line at top
 * - Scroll depth: panel gains a deeper shadow "lifting off" the desk
 * - All typography treated as engraved or printed on metal
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    if (href === "#" || href === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
      return;
    }
    e.preventDefault();
    setMobileOpen(false);
    requestAnimationFrame(() => {
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      const headerOffset = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "skeuo-navbar-scrolled" : "skeuo-navbar"}`}
    >
      {/* ── Multi-layer brushed metal texture ── */}
      {/* Layer A: fine horizontal micro-grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsla(40, 15%, 90%, 0.016) 2px,
            hsla(40, 15%, 90%, 0.016) 3px
          )`,
          borderRadius: "inherit",
          zIndex: 1,
        }}
      />
      {/* Layer B: coarser relief lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 11px,
            hsla(40, 15%, 90%, 0.008) 11px,
            hsla(40, 15%, 90%, 0.008) 12px
          )`,
          borderRadius: "inherit",
          zIndex: 1,
        }}
      />

      {/* ── Top bevel highlight (light catching top edge) ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "var(--bevel-light)", zIndex: 2 }}
      />

      {/* ── Panel mounting screws (corner rivets) ── */}
      {[
        { top: "6px", left: "8px" },
        { top: "6px", right: "8px" },
        { bottom: "6px", left: "8px" },
        { bottom: "6px", right: "8px" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none hidden sm:block"
          style={{
            ...pos,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "hsl(var(--surface-0))",
            border: "1px solid hsl(var(--border))",
            boxShadow: "inset 1px 1px 1px 0 var(--inset-dark), inset -0.5px -0.5px 0.5px 0 var(--inset-light)",
            zIndex: 2,
          }}
        />
      ))}

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative"
        style={{ zIndex: 3 }}
      >
        {/* ── Logo: Engraved brass nameplate ── */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="select-none group"
          style={{ textDecoration: "none" }}
        >
          <span
            className="font-black text-xl tracking-tight"
            style={{
              color: "hsl(var(--foreground))",
              textShadow: "0 1px 0 var(--bevel-light), 0 -1px 0 hsla(var(--shadow-color), 0.3)",
              letterSpacing: "-0.03em",
            }}
          >
            KA
            <span style={{
              color: "hsl(32, 80%, 55%)",
              textShadow: "0 1px 0 hsla(40, 80%, 70%, 0.3), 0 -1px 0 hsla(32, 80%, 25%, 0.3)",
            }}>.</span>
          </span>
        </a>

        {/* ── Desktop nav: mechanical selector tabs ── */}
        <div className="hidden md:flex items-center gap-0.5">
          {/* Recessed track */}
          <div
            className="flex items-center gap-0.5 px-1 py-0.5 rounded-lg"
            style={{
              background: "hsl(var(--surface-0))",
              boxShadow: "inset 1px 2px 4px -1px var(--inset-dark), inset -1px -1px 2px 0 var(--inset-light)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            {NAV_LINKS.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`skeuo-nav-tab ${isActive ? "skeuo-nav-tab-active" : ""}`}
                  style={{ borderRadius: "var(--radius)", position: "relative" }}
                >
                  {/* Active indicator: amber hairline at top */}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: "8px",
                        right: "8px",
                        height: "2px",
                        borderRadius: "1px",
                        background: "linear-gradient(90deg, transparent, hsl(32, 80%, 55%), transparent)",
                      }}
                    />
                  )}
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Desktop right actions: hardware buttons ── */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1TvIYNcOn6o4VLie-DnE5bscadkRoxjjv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn h-9 px-4 gap-1.5 text-xs font-semibold"
          >
            <Download size={14} />
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="skeuo-btn skeuo-btn-primary px-5 py-2 text-sm"
          >
            Hire Me
          </a>
        </div>

        {/* ── Mobile menu toggle: mechanical switch ── */}
        <button
          className="md:hidden icon-btn w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ── Bottom edge shadow line ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "hsl(var(--border))",
          boxShadow: "0 1px 3px 0 hsla(var(--shadow-color), 0.2)",
          zIndex: 2,
        }}
      />

      {/* ── Mobile menu: pull-down instrument panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "hsl(var(--surface-1))",
              borderTop: "1px solid hsl(var(--border))",
              boxShadow: "inset 0 1px 0 0 var(--bevel-light), 0 4px 16px -4px hsla(var(--shadow-color), 0.5)",
            }}
          >
            {/* Blueprint-style horizontal rule inside mobile menu */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 6px,
                  hsla(40, 30%, 60%, 0.06) 6px,
                  hsla(40, 30%, 60%, 0.06) 7px
                )`,
                height: "100%",
                zIndex: 0,
              }}
            />

            <div className="px-4 py-4 space-y-1" style={{ position: "relative", zIndex: 2 }}>
              {NAV_LINKS.map((l) => {
                const isActive = activeSection === l.href.replace("#", "");
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="block px-4 py-2.5 text-sm font-medium transition-all duration-150"
                    style={{
                      borderRadius: "var(--radius)",
                      ...(isActive
                        ? {
                            color: "hsl(32, 80%, 55%)",
                            background: "hsl(var(--surface-0))",
                            boxShadow: "inset 1px 2px 4px -1px var(--inset-dark), inset -1px -1px 2px 0 var(--inset-light)",
                            borderLeft: "2px solid hsl(32, 80%, 55%)",
                          }
                        : { color: "hsl(var(--muted-foreground))" }),
                    }}
                  >
                    {l.label}
                  </a>
                );
              })}

              {/* Engraved divider */}
              <div
                className="my-2"
                style={{
                  height: "1px",
                  background: "hsl(var(--border))",
                  boxShadow: "0 1px 0 0 var(--bevel-light)",
                }}
              />

              <a
                href="https://drive.google.com/file/d/1TvIYNcOn6o4VLie-DnE5bscadkRoxjjv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-150"
                style={{ borderRadius: "var(--radius)", color: "hsl(var(--muted-foreground))" }}
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="skeuo-btn skeuo-btn-primary w-full py-2.5 text-sm mt-1"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}