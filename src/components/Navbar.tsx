import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

/**
 * NAVBAR — Clean, Minimal Navigation
 * Simplified shadows and segmented control. No excessive bevels.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Reusable scroll function
  const scrollToSection = (href: string) => {
    if (href === "#" || href === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.replace("#", "");
    const target = document.getElementById(id);

    if (target) {
      const headerOffset = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    // Use window.location.hash instead of pushState to trigger hashchange event
    // This ensures the scroll happens immediately
    window.location.hash = href;
  };

  // Handle hash changes from URL (direct navigation, back/forward buttons, initial load)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Give DOM time to settle, then scroll
        setTimeout(() => {
          scrollToSection(hash);
        }, 100);
      }
    };

    // Call on initial load
    handleHashChange();

    // Listen for hash changes (back/forward buttons, direct URL navigation)
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
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
              letterSpacing: "-0.03em",
            }}
          >
            KA
            <span style={{ color: "hsl(32, 80%, 55%)" }}>.</span>
          </span>
        </a>

        {/* Desktop nav: pill-style tabs */}
        <div className="hidden md:flex items-center gap-0.5">
          <div
            className="flex items-center gap-0.5 px-1 py-1 rounded-lg"
            style={{
              background: "hsl(var(--surface-0))",
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
                  style={{
                    borderRadius: "var(--radius)",
                    position: "relative",
                  }}
                >
                  {isActive && (
                    <span
                      className="nav-active-line"
                      style={{
                        position: "absolute",
                        bottom: "2px",
                        left: "8px",
                        right: "8px",
                        height: "2px",
                        borderRadius: "1px",
                        background:
                          "linear-gradient(90deg, hsl(32, 80%, 55%), hsla(32, 80%, 55%, 0.2))",
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
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="skeuo-btn skeuo-btn-primary px-5 py-2 text-sm"
          >
            Contact
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
        style={{ background: "hsl(var(--border))", zIndex: 2 }}
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
              boxShadow: "0 4px 16px -4px hsla(var(--shadow-color), 0.4)",
            }}
          >
            <div
              className="px-4 py-4 space-y-1"
              style={{ position: "relative", zIndex: 2 }}
            >
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
                            borderLeft: "3px solid hsl(32, 80%, 55%)",
                            boxShadow: "inset 4px 0 8px -4px hsla(32, 80%, 55%, 0.15)",
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
                style={{
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="skeuo-btn skeuo-btn-primary w-full py-2.5 text-sm mt-1"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
