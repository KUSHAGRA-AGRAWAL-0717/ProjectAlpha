import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, Calendar } from "lucide-react";

const EXPERIENCE = [
  {
    title: "Software Developer Intern – Full Stack",
    company: "Global Holani Tradelink",
    period: "Jun 2025 — Jul 2025",
    type: "Remote",
    description: "Architected an OCR invoice processing system using LangChain and OpenAI with 95%+ accuracy.",
    bullets: [
      "Achieved 95%+ accuracy when parsing semi-structured invoices",
      "Optimized API performance through prompt engineering and caching",
      "Reduced latency by 60%",
      "Built scalable backend workflows for automated document extraction",
    ],
    tags: ["LangChain", "OpenAI", "Python", "OCR"],
    current: false,
  },
  {
    title: "React JS Intern",
    company: "Vitraga Solutions",
    period: "Apr 2025 — May 2025",
    type: "Remote",
    description: "Improved and debugged multiple production systems built with React, Node.js, and MongoDB.",
    bullets: [
      "Reduced API response latency by 40% (250ms → 150ms)",
      "Contributed across four different application domains",
      "Ensured stable deployment processes",
      "Optimized React components for better performance",
    ],
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    current: false,
  },
  {
    title: "Freelance Software Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    type: "Remote",
    description: "Worked with startups and independent clients building SaaS platforms, AI automation systems, and full-stack web applications.",
    bullets: [
      "Delivered end-to-end systems including frontend UI, backend APIs, and database architecture",
      "Built AI integrations for multiple clients across different domains",
      "Designed scalable SaaS architectures",
      "Built data processing pipelines for automation",
    ],
    tags: ["React", "Node.js", "Python", "AI/ML", "Cloud"],
    current: true,
  },
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Hacknovate 6.0", detail: "Ranked Top 1.5% — 45th out of 3000+ participants" },
  { icon: "💻", title: "LeetCode", detail: "Global Rank 347 (Contest) · Rating 1700 · 700+ problems · 150+ day streak" },
  { icon: "🌐", title: "GirlScript Summer of Code", detail: "Selected open source contributor for GSSOC 2024" },
  { icon: "⚡", title: "Energy Quest 2.0", detail: "Finalist — 92nd percentile in trading simulation" },
];

/**
 * EXPERIENCE SECTION — Vertical Grid + Sidebar
 *
 * ┌──────────────────────────────────────────────┐
 * │ [005 — EXPERIENCE]  Work Experience          │
 * ├────────────────────────────┬─────────────────┤
 * │ ┌────────────────────────┐ │  Education      │
 * │ │ Experience Card 1      │ │  Panel          │
 * │ ├────────────────────────┤ ├─────────────────┤
 * │ │ Experience Card 2      │ │  Achievements   │
 * │ ├────────────────────────┤ │  Panel          │
 * │ │ Experience Card 3      │ │                 │
 * │ └────────────────────────┘ │                 │
 * └────────────────────────────┴─────────────────┘
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
        <span className="grid-section-label">005 — Experience</span>
        <div>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            Professional journey building impactful solutions for businesses and startups.
          </p>
        </div>
      </div>

      {/* Main grid: Experience (3/5) | Sidebar (2/5) */}
      <div className="grid-section-inner grid-cols-1 lg:grid-cols-[3fr_2fr]">

        {/* ── LEFT: Experience cards stacked vertically ── */}
        <div className="flex flex-col" style={{ background: "var(--grid-border-color)", gap: "var(--grid-gap)" }}>
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.7, type: "spring", bounce: 0.2 }}
              className="grid-cell group"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent/90 mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 flex-shrink-0">
                  {exp.current && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                      Active
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary border border-border text-muted-foreground">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3 font-mono">
                <Calendar size={11} className="text-accent/60" />
                {exp.period}
              </div>

              <div className="grid-divider-h mb-3" />

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="text-accent/70 mt-1 text-xs flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="grid-divider-h mb-3" />

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="skill-chip text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── RIGHT: Sidebar — Education + Achievements ── */}
        <div className="flex flex-col" style={{ background: "var(--grid-border-color)", gap: "var(--grid-gap)" }}>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.7, type: "spring", bounce: 0.2 }}
            className="grid-cell"
          >
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              <GraduationCap size={14} className="text-accent" />
              Education
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg icon-btn flex-shrink-0 text-lg">
                🎓
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-foreground leading-snug">
                  B.Tech — Information Technology
                </h4>
                <p className="text-xs font-semibold text-accent/90 mt-1">
                  NIT Jalandhar
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                  2023 – Present
                </p>
              </div>
            </div>

            <div className="grid-divider-h my-4" />

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">CGPA</span>
              <span className="text-sm font-bold text-foreground">7.99 / 10</span>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring", bounce: 0.2 }}
            className="grid-cell flex-1"
          >
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              <Trophy size={14} className="text-accent" />
              Achievements
            </h3>
            <div className="space-y-0" style={{ margin: "0 -1.5rem -1.5rem", background: "var(--grid-border-color)" }}>
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-3 group"
                  style={{
                    background: "var(--grid-cell-bg)",
                    padding: "0.875rem 1.5rem",
                    marginTop: "var(--grid-gap)",
                  }}
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{a.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                      {a.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {a.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
