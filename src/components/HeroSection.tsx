import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Code, Mail, ArrowRight } from "lucide-react";
import { useMouseParallax } from "@/hooks/useScrollAnimation";

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com", label: "Email" },
];

const ROLES = [
  "Full-Stack Developer",
  "AI Engineer",
  "SaaS Builder",
  "LLM Integrations",
];

const STATS = [
  { value: "10+", label: "Projects Shipped" },
  { value: "2", label: "Internships" },
  { value: "700+", label: "LeetCode Problems" },
  { value: "NIT", label: "Jalandhar" },
];

function useTypewriter(words: string[], typingSpeed = 80, pauseDuration = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, typingSpeed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, pauseDuration]);

  return display;
}

/**
 * SKEUOMORPHIC HERO SECTION — BRUSHED STEEL INSTRUMENT PANEL
 *
 * Physical Inspiration: Premium aviation instrument dashboard.
 * Deep brushed steel background with multi-layer metallic grain.
 *
 * Layered scroll parallax:
 *   - Background grain drifts at 0× (fixed)
 *   - Holographic node drifts at 0.3×
 *   - Content drifts at 0.08× (slowest)
 *
 * Grid visible lines:
 *   - Fine 4px horizontal steel grain (built into Index.tsx bento wrapper)
 *   - 48px dot grid overlay (fades on scroll)
 *   - Inner precision groove at edge of content area
 */
export default function HeroSection() {
  const role = useTypewriter(ROLES);
  const { ref: parallaxRef, offset } = useMouseParallax(0.008);
  const { scrollY } = useScroll();

  // Layered parallax depths
  const dotOpacity = useTransform(scrollY, [0, 600], [0.35, 0.06]);
  const nodeY = useTransform(scrollY, [0, 600], [0, -60]);    // node drifts up faster
  const contentY = useTransform(scrollY, [0, 500], [0, 30]);  // content drifts slightly

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-16 px-4 sm:px-6 overflow-hidden rounded-[inherit]"
    >
      {/* ── Layer 1: Fine dot grid — scrolls out ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: dotOpacity,
          backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Layer 2: Precision corner brackets (instrument panel mounting) ── */}
      {/* Top-left */}
      <div className="absolute top-6 left-6 w-10 h-10 pointer-events-none" style={{
        borderTop: "2px solid hsla(32, 60%, 50%, 0.35)",
        borderLeft: "2px solid hsla(32, 60%, 50%, 0.35)",
        borderRadius: "3px 0 0 0",
      }} />
      {/* Top-right */}
      <div className="absolute top-6 right-6 w-10 h-10 pointer-events-none" style={{
        borderTop: "2px solid hsla(32, 60%, 50%, 0.35)",
        borderRight: "2px solid hsla(32, 60%, 50%, 0.35)",
        borderRadius: "0 3px 0 0",
      }} />
      {/* Bottom-left */}
      <div className="absolute bottom-6 left-6 w-10 h-10 pointer-events-none" style={{
        borderBottom: "2px solid hsla(32, 60%, 50%, 0.25)",
        borderLeft: "2px solid hsla(32, 60%, 50%, 0.25)",
        borderRadius: "0 0 0 3px",
      }} />
      {/* Bottom-right */}
      <div className="absolute bottom-6 right-6 w-10 h-10 pointer-events-none" style={{
        borderBottom: "2px solid hsla(32, 60%, 50%, 0.25)",
        borderRight: "2px solid hsla(32, 60%, 50%, 0.25)",
        borderRadius: "0 0 3px 0",
      }} />

      {/* ── Layer 3: Holographic node — deeper parallax ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 holographic-node-bg pointer-events-none"
        style={{ y: nodeY }}
      />

      {/* ── Layer 4: Desk lamp ambient (warm, top-left) ── */}
      <div
        className="absolute inset-0 pointer-events-none desk-lamp-breathe z-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 25% 0%, hsla(32, 60%, 50%, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── Layer 5: Content — slowest scroll drift ── */}
      <motion.div
        ref={parallaxRef as React.RefObject<HTMLDivElement>}
        className="max-w-4xl mx-auto text-center relative z-10 perspective-tilt"
        style={{
          x: offset.x,
          y: contentY,
          translateX: offset.x * 0.5,
          translateY: offset.y * 0.5,
        }}
      >

        {/* ── Status badge: embossed metal tag with LED ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="section-badge">
            <span
              className="animate-pulse-slow"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, #6ee7b7, #059669)",
                boxShadow: "0 0 6px 1px hsla(153, 60%, 50%, 0.4)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Available for Freelance & Full-time
          </span>
        </motion.div>

        {/* ── Name: Engraved brass nameplate ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[2.6rem] sm:text-5xl md:text-[3.25rem] font-black tracking-tight mb-4 leading-[1.1]"
          style={{
            color: "hsl(var(--foreground))",
            textShadow: "0 2px 3px hsla(var(--shadow-color), 0.4), 0 -1px 0 var(--bevel-light)",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              color: "hsl(32, 80%, 55%)",
              textShadow: "0 2px 4px hsla(32, 80%, 25%, 0.4), 0 -1px 0 hsla(40, 80%, 70%, 0.25)",
            }}
          >
            Kushagra Agrawal
          </span>
        </motion.h1>

        {/* ── Role: Recessed LCD/engraved display ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex items-center justify-center mb-5"
        >
          <div
            className="inline-flex items-center px-5 py-2"
            style={{
              background: "hsl(var(--surface-0))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              boxShadow: "inset 2px 2px 6px -1px var(--inset-dark), inset -1px -1px 3px 0 var(--inset-light)",
            }}
          >
            <span
              className="text-sm md:text-base font-medium font-mono tracking-wide"
              style={{
                color: "hsl(32, 70%, 60%)",
                textShadow: "0 0 8px hsla(32, 80%, 50%, 0.15)",
              }}
            >
              {role}
              <span className="animate-blink" style={{ color: "hsl(32, 80%, 55%)" }}>|</span>
            </span>
          </div>
        </motion.div>

        {/* ── Bio: Premium document panel with brass rivets ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-block text-left px-7 py-5"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              boxShadow: `
                inset 1px 1px 0 0 var(--bevel-light),
                inset -1px -1px 0 0 var(--bevel-dark),
                2px 3px 8px -2px hsla(var(--shadow-color), 0.4),
                4px 6px 16px -4px hsla(var(--shadow-color), 0.25)
              `,
            }}
          >
            {/* Inner precision groove at top */}
            <div style={{
              height: "1px",
              marginBottom: "12px",
              background: "hsl(var(--border))",
              boxShadow: "0 1px 0 0 var(--bevel-light)",
              marginLeft: "-28px",
              marginRight: "-28px",
              marginTop: "-20px",
              display: "none", // only show if card has enough content
            }} />
            <ul className="text-sm md:text-base space-y-3">
              {[
                "Specializing in AI-powered applications and scalable SaaS systems.",
                "Building high-performance products with modern web technologies.",
                "Expertise in intelligent automation, ML, and cloud infrastructure.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Brass rivet bullet */}
                  <div
                    className="mt-2 shrink-0"
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, hsl(40, 70%, 65%) 0%, hsl(32, 80%, 40%) 100%)",
                      border: "1px solid hsl(32, 70%, 30%)",
                      boxShadow: "inset 0 1px 1px 0 hsla(40, 80%, 70%, 0.4), 0 1px 2px 0 hsla(var(--shadow-color), 0.3)",
                    }}
                  />
                  <p style={{ color: "hsl(var(--muted-foreground))" }}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── CTA Buttons: Physical hardware controls ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <a href="#projects" className="skeuo-btn skeuo-btn-primary px-7 py-3 text-sm font-semibold flex items-center gap-2">
            View Projects
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="skeuo-btn skeuo-btn-secondary px-7 py-3 text-sm font-semibold">
            Hire Me
          </a>
        </motion.div>

        {/* ── Social links: small mechanical toggle buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex justify-center gap-2 mb-12"
        >
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.06 }}
              className="icon-btn w-10 h-10"
            >
              <s.icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        {/* ── Stats: Instrument gauge strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="inline-flex items-stretch gap-0 overflow-hidden"
            style={{
              background: "hsl(var(--surface-0))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "calc(var(--radius) + 2px)",
              boxShadow: "inset 2px 2px 6px -1px var(--inset-dark), inset -1px -1px 3px 0 var(--inset-light), 2px 3px 8px -2px hsla(var(--shadow-color), 0.4)",
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-5 sm:px-7 py-4"
                style={{
                  borderRight: i < STATS.length - 1 ? "1px solid hsl(var(--border))" : "none",
                  position: "relative",
                }}
              >
                {i < STATS.length - 1 && (
                  <div style={{
                    position: "absolute",
                    right: "0",
                    top: "8px",
                    bottom: "8px",
                    width: "1px",
                    background: "var(--bevel-light)",
                    transform: "translateX(1px)",
                  }} />
                )}
                <span
                  className="text-lg sm:text-xl font-bold"
                  style={{
                    color: "hsl(32, 80%, 55%)",
                    textShadow: "0 1px 2px hsla(32, 80%, 25%, 0.3), 0 0 10px hsla(32, 80%, 50%, 0.08)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-1"
                  style={{ color: "hsl(var(--muted-foreground))", letterSpacing: "0.06em" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator: mechanical pendulum ──
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          style={{
            width: "22px",
            height: "34px",
            borderRadius: "11px",
            border: "1px solid hsl(var(--border))",
            background: "hsl(var(--surface-0))",
            boxShadow: "inset 1px 2px 4px -1px var(--inset-dark), inset -1px -1px 2px 0 var(--inset-light), 1px 2px 4px -1px hsla(var(--shadow-color), 0.3)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "7px",
          }}
        >
          <div style={{
            width: "3px",
            height: "8px",
            borderRadius: "2px",
            background: "linear-gradient(180deg, hsl(32, 80%, 55%) 0%, hsl(32, 70%, 40%) 100%)",
            boxShadow: "0 1px 3px hsla(32, 80%, 50%, 0.3)",
          }} />
        </div>
      </motion.div> */}
    </section>
  );
}