import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  { value: "3", label: "Internships" },
  { value: "850+", label: "LeetCode Problems" },
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
 * HERO SECTION — Clean Split Layout
 *
 * Left: Name, role, bio, CTAs, social links, stats
 * Right: Abstract geometric composition (CSS-only, no stock video)
 */
export default function HeroSection() {
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className="scroll-mt-20">
      {/* Grid: 60/40 split */}
      <div className="grid-section-inner grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ minHeight: "85vh" }}>

        {/* ── LEFT PANEL: Content ── */}
        <div className="grid-cell flex flex-col justify-center py-10 sm:py-16 px-6 sm:px-10 relative">
          <div className="relative z-10 max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                    boxShadow: "0 0 6px 1px hsla(153, 60%, 50%, 0.35)",
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
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[2.4rem] sm:text-5xl md:text-[3.25rem] font-black tracking-tight mb-4 leading-[1.1]"
            >
              Hi, I'm{" "}
              <span className="gradient-text">
                Kushagra Agrawal
              </span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-5"
            >
              <div
                className="inline-flex items-center px-5 py-2"
                style={{
                  background: "hsl(var(--surface-0))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  boxShadow: "inset 0 1px 3px -1px hsla(var(--shadow-color), 0.3)",
                }}
              >
                <span
                  className="text-sm md:text-base font-medium font-mono tracking-wide"
                  style={{ color: "hsl(32, 70%, 60%)" }}
                >
                  {role}
                  <span className="animate-blink" style={{ color: "hsl(32, 80%, 55%)" }}>|</span>
                </span>
              </div>
            </motion.div>

            {/* Bio — rewritten to sound human, not generated */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                I build AI-powered SaaS products that automate real business workflows — 
                from OCR invoice processing to SEO content platforms. I ship full-stack 
                systems with modern web tech, and I care about making things that actually work at scale.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
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
              transition={{ delay: 0.35, duration: 0.5 }}
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
                  transition={{ delay: 0.35 + i * 0.05 }}
                  className="icon-btn w-10 h-10"
                >
                  <s.icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT PANEL: Premium Masked Video ── */}
        <div className="grid-cell-flush hidden lg:flex items-center justify-center relative overflow-hidden"
          style={{ background: "hsl(var(--surface-0))" }}
        >
            <div className="relative w-full h-full max-h-[280px] max-w-[280px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/50 bg-white">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={CodingVideo} type="video/mp4" />
              </video>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="backdrop-blur-md bg-white/80 dark:bg-black/60 rounded-xl p-3 border border-border/50 flex items-center gap-3 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
                  <span className="text-xs font-medium tracking-wide dark:text-white text-black">System Online</span>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* ── STATS: 4-column mini grid at bottom ── */}
      <div className="grid-stats-row grid-cols-2 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
            className="grid-stat-cell"
          >
            <span
              className="text-lg sm:text-xl font-bold"
              style={{ color: "hsl(32, 80%, 55%)" }}
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
    </section>
  );
}