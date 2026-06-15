import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Code, Mail, ArrowRight } from "lucide-react";
import CodingVideo from "./Coding.mp4";

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
 * HERO SECTION — 70/30 Grid Split
 *
 * ┌──────────────────────────────┬──────────────┐
 * │ [001 — HERO]                │              │
 * │  Status Badge               │   MP4 Video  │
 * │  Name (engraved)            │   Panel      │
 * │  Typewriter Role            │   (Coding    │
 * │  Bio Bullets                │    Loop)     │
 * │  CTA Buttons                │              │
 * │  Social Links               │              │
 * │ ┌────┬────┬────┬────┐       │              │
 * │ │Proj│Int │LC  │NIT │       │              │
 * │ └────┴────┴────┴────┘       │              │
 * └──────────────────────────────┴──────────────┘
 */
export default function HeroSection() {
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className="scroll-mt-20">
      {/* ── Grid: 70/30 split ── */}
      <div className="grid-section-inner grid-cols-1 lg:grid-cols-[7fr_3fr]" style={{ minHeight: "85vh" }}>

        {/* ── LEFT PANEL: Content ── */}
        <div className="grid-cell flex flex-col justify-center py-10 sm:py-16 px-6 sm:px-10 relative">

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Corner registration marks */}
          <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none border-t-[1.5px] border-l-[1.5px] border-amber-600/30 z-10" />
          <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none border-t-[1.5px] border-r-[1.5px] border-amber-600/30 z-10 lg:hidden" />
          <div className="absolute bottom-4 left-4 w-8 h-8 pointer-events-none border-b-[1.5px] border-l-[1.5px] border-amber-600/25 z-10" />

          <div className="relative z-10 max-w-2xl">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="grid-section-label">001 — Hero</span>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-6"
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

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[2.4rem] sm:text-5xl md:text-[3.25rem] font-black tracking-tight mb-4 leading-[1.1]"
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

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mb-5"
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

            {/* Bio bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-8"
            >
              <ul className="text-sm md:text-base space-y-2.5">
                {[
                  "Specializing in AI-powered applications and scalable SaaS systems.",
                  "Building high-performance products with modern web technologies.",
                  "Expertise in intelligent automation, ML, and cloud infrastructure.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
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
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <a href="#projects" className="skeuo-btn skeuo-btn-primary px-7 py-3 text-sm font-semibold flex items-center gap-2">
                View Projects
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="skeuo-btn skeuo-btn-secondary px-7 py-3 text-sm font-semibold">
                Hire Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex gap-2"
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
          </div>
        </div>

        {/* ── RIGHT PANEL: MP4 Video ── */}
        <div className="grid-cell-flush grid-video-panel hidden lg:block relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ minHeight: "100%" }}
          >
            <source src={CodingVideo} type="video/mp4" />
          </video>

          {/* Corner marks on video panel */}
          <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none border-b-[1.5px] border-r-[1.5px] border-amber-600/25 z-10" />
          <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none border-t-[1.5px] border-r-[1.5px] border-amber-600/25 z-10" />
        </div>
      </div>

      {/* /* ── STATS: 4-column mini grid at bottom ── 
      <div className="grid-stats-row grid-cols-2 sm:grid-cols-4">
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="grid-stat-cell"
          >
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
          </motion.div>
        ))}
      </div>
      */ }
    </section>
  );
}