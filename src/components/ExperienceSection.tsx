import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, Calendar } from "lucide-react";
import SectionDivider from "./SectionDivider";

const EXPERIENCE = [
  {
    title: "Software Developer Intern – Full Stack",
    company: "Global Holani Tradelink",
    period: "Jun 2025 — Jul 2025",
    type: "Remote",
    description:
      "Architected an OCR invoice processing system using LangChain and OpenAI with 95%+ accuracy.",
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
    description:
      "Improved and debugged multiple production systems built with React, Node.js, and MongoDB.",
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
    description:
      "Worked with startups and independent clients building SaaS platforms, AI automation systems, and full-stack web applications.",
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
  {
    icon: "🏆",
    title: "Hacknovate 6.0",
    detail: "Ranked Top 1.5% — 45th out of 3000+ participants",
  },
  {
    icon: "💻",
    title: "LeetCode",
    detail: "Global Rank 347 (Contest) · Rating 1700 · 700+ problems · 150+ day streak",
  },
  {
    icon: "🌐",
    title: "GirlScript Summer of Code",
    detail: "Selected open source contributor for GSSOC 2024",
  },
  {
    icon: "⚡",
    title: "Energy Quest 2.0",
    detail: "Finalist — 92nd percentile in trading simulation",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 px-4 sm:px-6 scroll-mt-20">
      {/* Leather texture background */}
      <div className="absolute inset-0 leather-texture pointer-events-none" />
      {/* Precision groove divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl">
        <SectionDivider variant="stitched" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-badge mb-4 inline-flex">
            <Briefcase size={13} />
            Journey
          </span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-3 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-sm">
            Professional journey building impactful solutions for businesses and startups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Timeline — left (3/5) */}
          <div className="lg:col-span-3 relative">
            {/* Vertical timeline line — animated draw-in */}
            <div className="absolute left-4 top-0 bottom-0 w-px hidden md:block overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full bg-border/70"
              />
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:pl-12"
                >
                  {/* Timeline dot */}
                  <div
                    className={`timeline-dot left-2 top-6 hidden md:block ${
                      exp.current ? "ring-2 ring-accent/30 ring-offset-2 ring-offset-background" : ""
                    }`}
                  />

                  <div className="card-hover skeuo-page-fold rounded-xl p-6 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="skeuo-label-embossed text-base font-bold text-foreground group-hover:text-accent transition-colors duration-200">
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
          </div>

          {/* Right sidebar — Education + Achievements (2/5) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                <GraduationCap size={14} className="text-accent" />
                Education
              </h3>
              <div className="card-hover rounded-xl p-5">
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
                <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">CGPA</span>
                  <span className="text-sm font-bold text-foreground">7.99 / 10</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                <Trophy size={14} className="text-accent" />
                Achievements
              </h3>
              <div className="space-y-3">
                {ACHIEVEMENTS.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08 }}
                    className="card-hover rounded-xl p-4 group flex items-start gap-3"
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
      </div>
    </section>
  );
}
