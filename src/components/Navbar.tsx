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
 * NAVBAR — Bordered Grid Nav Panel
 *
 * Consistent with the grid framework:
 * - Outer border matching grid-master
 * - Nav links as bordered segments
 * - Active section highlighted with amber border
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
      {/* Top bevel highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "var(--bevel-light)", zIndex: 2 }}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative"
        style={{ zIndex: 3 }}
      >
        {/* Logo */}
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

        {/* Desktop nav: bordered selector tabs */}
        <div className="hidden md:flex items-center gap-0.5">
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

        {/* Desktop right actions */}
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

        {/* Mobile menu toggle */}
        <button
          className="md:hidden icon-btn w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "hsl(var(--border))",
          boxShadow: "0 1px 3px 0 hsla(var(--shadow-color), 0.2)",
          zIndex: 2,
        }}
      />

      {/* Mobile menu */}
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

              <div className="grid-divider-h my-2" />

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