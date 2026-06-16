import { motion } from "framer-motion";
import { GraduationCap, Trophy, Calendar } from "lucide-react";
import CandidateVideo from "./andidate.mp4";

const EXPERIENCE = [
  {
    title: "Freelance Software Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    type: "Remote",
    description: "Working with startups and independent clients building SaaS platforms, AI automation systems, and full-stack web applications.",
    bullets: [
      "Delivered end-to-end systems including frontend UI, backend APIs, and database architecture",
      "Built AI integrations for multiple clients across different domains",
      "Designed scalable SaaS architectures",
      "Built data processing pipelines for automation",
    ],
    tags: ["React", "Node.js", "Python", "AI/ML", "Cloud"],
    current: true,
  },
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
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Hacknovate 6.0", detail: "Ranked Top 1.5% — 45th out of 3000+ participants" },
  { icon: "💻", title: "LeetCode", detail: "Global Rank 347 (Contest) · Rating 1700 · 700+ problems · 150+ day streak" },
  { icon: "🌐", title: "GirlScript Summer of Code", detail: "Selected open source contributor for GSSOC 2024" },
  { icon: "⚡", title: "Energy Quest 2.0", detail: "Finalist — 92nd percentile in trading simulation" },
];

/**
 * EXPERIENCE SECTION — Vertical Timeline + Sidebar
 *
 * Left: Experience cards with proper vertical timeline
 * Right: Education + Achievements
 * Current/active role listed first.
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
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

        {/* ── LEFT: Experience cards with vertical timeline ── */}
        <div className="flex flex-col relative">
          {/* Timeline line */}
          <div 
            className="absolute left-[1.75rem] top-6 bottom-6 w-px hidden sm:block"
            style={{ background: "var(--grid-border-color)" }}
          />
          
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid-cell group"
              style={{ borderBottom: i < EXPERIENCE.length - 1 ? "1px solid var(--grid-border-color)" : "none" }}
            >
              {/* Timeline dot */}
              <div 
                className="absolute left-[1.25rem] w-2.5 h-2.5 rounded-full hidden sm:block"
                style={{ 
                  background: exp.current ? "hsl(32, 80%, 55%)" : "hsl(var(--border))",
                  border: "2px solid hsl(var(--card))",
                  boxShadow: exp.current ? "0 0 6px hsla(32, 80%, 50%, 0.3)" : "none",
                  top: "1.5rem",
                }}
              />

              <div className="sm:pl-6">
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
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="grid-cell relative overflow-hidden group"
            style={{ borderBottom: "1px solid var(--grid-border-color)" }}
          >
            {/* Full Background Video */}
            <div className="absolute inset-0 z-0">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                <source src={CandidateVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30" />
            </div>

            <div className="relative z-10">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2 mb-6">
                <GraduationCap size={14} className="text-accent" />
                Education
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg icon-btn flex-shrink-0 text-lg flex items-center justify-center bg-background/50 backdrop-blur-sm border border-border/50">
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

              <div className="grid-divider-h my-4 opacity-50" />

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">CGPA</span>
                <span className="text-sm font-bold text-foreground">7.99 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid-cell flex-1"
          >
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              <Trophy size={14} className="text-accent" />
              Achievements
            </h3>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-start gap-3 group"
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
