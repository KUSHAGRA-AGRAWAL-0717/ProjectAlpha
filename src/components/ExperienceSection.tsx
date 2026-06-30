import { motion } from "framer-motion";
import { GraduationCap, Trophy, Calendar, Users } from "lucide-react";
import CandidateVideo from "./andidate.mp4";
import TiltCard from "./ui/TiltCard";

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
 * EXPERIENCE SECTION — Modern Timeline (Enhanced)
 *
 * Left: Experience cards with gradient timeline line, animated dots, accent left border
 * Right: Education + Achievements with enhanced cards
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
        <div>
          <span className="section-eyebrow">Career Journey</span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight section-title-underline">
            Work <span className="gradient-text-animated">Experience</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm mt-3">
            Professional journey building impactful solutions for businesses and startups.
          </p>
        </div>
      </div>

      {/* Main grid: Experience (3/5) | Sidebar (2/5) */}
      <div className="grid-section-inner grid-cols-1 lg:grid-cols-[3fr_2fr]">

        {/* ── LEFT: Experience cards with gradient timeline ── */}
        <div className="flex flex-col relative">
          {/* Gradient timeline line */}
          <div 
            className="absolute left-[1.75rem] top-6 bottom-6 w-px hidden sm:block timeline-gradient-line"
          />
          
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid-cell-enhanced group"
              style={{
                borderBottom: i < EXPERIENCE.length - 1 ? "1px solid var(--grid-border-color)" : "none",
                borderLeft: exp.current ? "2px solid hsl(32, 80%, 55%)" : undefined,
              }}
            >
              {/* Enhanced timeline dot with glow */}
              <div 
                className={`absolute left-[1.25rem] w-2.5 h-2.5 rounded-full hidden sm:block ${exp.current ? "glow-dot" : ""}`}
                style={{ 
                  background: exp.current ? "hsl(32, 80%, 55%)" : "hsl(var(--border))",
                  border: "2px solid hsl(var(--card))",
                  boxShadow: exp.current ? "0 0 8px hsla(32, 80%, 50%, 0.4)" : "none",
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
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center gap-1.5"
                        style={{ boxShadow: "0 0 12px -4px hsla(150, 60%, 50%, 0.3)" }}
                      >
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

                {/* Bullets with staggered animation */}
                <ul className="space-y-2 mb-4 list-none">
                  {exp.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + bi * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground list-none"
                    >
                      <span
                        className="mt-1.5 flex-shrink-0"
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, hsl(32, 80%, 55%), hsl(32, 80%, 42%))",
                          boxShadow: "0 0 6px hsla(32, 80%, 50%, 0.25)",
                        }}
                      />
                      {b}
                    </motion.li>
                  ))}
                </ul>

                <div className="grid-divider-h mb-3" />

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-chip text-[11px] tag-float">
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
            className="grid-cell p-0 relative overflow-hidden group"
            style={{ borderBottom: "1px solid var(--grid-border-color)" }}
          >
            <TiltCard intensity={5} className="w-full h-full p-5 sm:p-6">
              {/* Full Background Video */}
              <div className="absolute inset-0 z-0 rounded-lg overflow-hidden">
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
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 text-lg flex items-center justify-center bg-background/50 backdrop-blur-sm border border-border/50"
                    style={{
                      background: "linear-gradient(135deg, hsla(32, 80%, 55%, 0.1), hsla(32, 80%, 55%, 0.03))",
                    }}
                  >
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
                  <span className="text-sm font-bold text-foreground stat-value-glow" style={{ color: "hsl(32, 80%, 55%)" }}>7.99 / 10</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid-cell-enhanced"
            style={{ borderBottom: "1px solid var(--grid-border-color)" }}
          >
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              <Trophy size={14} className="text-accent" />
              Achievements
            </h3>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-start gap-3 group/item"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{a.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground group-hover/item:text-accent transition-colors duration-200">
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

          {/* Roles & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid-cell-enhanced flex-1"
          >
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              <Users size={14} className="text-accent" />
              Roles & Leadership
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex items-start gap-3 group/item"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">🚀</span>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-accent transition-colors duration-200">
                    Club Cybernauts
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Core Member / Leadership Role
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3 group/item"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">💡</span>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-accent transition-colors duration-200">
                    Google Developer Student Clubs (GDGC)
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Core Team Member
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="grid-cell-enhanced"
          >
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              🎨 Hobbies & Interests
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group/item">
                <span className="text-xl flex-shrink-0 mt-0.5">⚽</span>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-accent transition-colors duration-200">
                    Football
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Active play & sports strategy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <span className="text-xl flex-shrink-0 mt-0.5">✍️</span>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-accent transition-colors duration-200">
                    Writing
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Technical blogging & sharing developer insights
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <span className="text-xl flex-shrink-0 mt-0.5">🎬</span>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-accent transition-colors duration-200">
                    Movies & Web Series
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Sci-fi, thrillers & cinematic storytelling
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <span className="text-xl flex-shrink-0 mt-0.5">🚲</span>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-accent transition-colors duration-200">
                    Cycling
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Outdoor fitness & exploring scenic routes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
