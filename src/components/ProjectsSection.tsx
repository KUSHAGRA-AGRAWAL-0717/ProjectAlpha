import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import ProjectCard from "./ProjectCard";

/**
 * PROJECTS SECTION — ENGINEER'S CUTTING MAT
 *
 * Physical Inspiration: A self-healing cutting mat on a drafting table.
 * - The background section wrapper (Index.tsx) provides:
 *     diagonal 45° crosshatch lines
 *     red left-margin rule
 * - This component adds:
 *     a recessed "project bay" panel beneath the header
 *     a ruled sub-header with engraved grid count label
 *     filter tabs styled as physical selector switches
 *     project card grid with visible "slot" gutters
 *
 * Scroll parallax:
 *   - Section header drifts at -0.06× (rises slightly as you scroll in)
 *   - Grid drifts at 0× (stays locked to the cutting mat surface)
 */
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const displayedProjects = filtered.slice(0, visibleCount);

  const getCategoryCount = (cat: string) =>
    cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;

  return (
    <section id="projects" className="relative py-16 px-4 sm:px-6 scroll-mt-20">
      {/* ── Ruled sub-header line (like a cutting mat's numbered edge ruler) ── */}
      <div
        className="absolute top-0 left-0 right-0 h-6 pointer-events-none"
        style={{
          borderBottom: "1px solid hsl(var(--border))",
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 9px,
            hsl(var(--border)) 9px,
            hsl(var(--border)) 10px
          )`,
          opacity: 0.4,
        }}
      />
      {/* ── Ruler tick marks with measurements ── */}
      {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pct) => (
        <div
          key={pct}
          className="absolute top-1 pointer-events-none hidden sm:block"
          style={{
            left: `${pct}%`,
            width: "1px",
            height: pct % 50 === 0 ? "16px" : "8px",
            background: "hsl(var(--border))",
            opacity: 0.5,
          }}
        />
      ))}

      {/* ── Precision groove divider ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl">
        <SectionDivider variant="bolted" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section header ── */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-badge mb-4 inline-flex">
            <Sparkles size={13} />
            Portfolio
          </span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-3 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-sm">
            Real-world applications built with modern technologies, solving genuine problems.
          </p>
        </motion.div>

        {/* ── Filter tabs: physical selector switches ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* Recessed tab track */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 mx-auto w-fit rounded-xl"
            style={{
              background: "hsl(var(--surface-0))",
              border: "1px solid hsl(var(--border))",
              boxShadow: "inset 2px 2px 5px -1px var(--inset-dark), inset -1px -1px 3px 0 var(--inset-light)",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                  style={isActive ? {
                    background: "linear-gradient(135deg, hsl(32, 80%, 55%) 0%, hsl(28, 75%, 48%) 100%)",
                    color: "#fff",
                    boxShadow: "inset 1px 1px 3px -1px hsla(32, 80%, 25%, 0.4), inset -1px -1px 2px 0 hsla(40, 80%, 70%, 0.2), 0 1px 3px 0 hsla(32, 80%, 25%, 0.3)",
                  } : {
                    color: "hsl(var(--muted-foreground))",
                    background: "transparent",
                  }}
                >
                  {cat}
                  <span
                    className="text-xs rounded-full px-1.5 py-0.5 font-medium"
                    style={isActive ? {
                      background: "hsla(255,255%,255%,0.2)",
                      color: "#fff",
                    } : {
                      background: "hsl(var(--surface-1))",
                      color: "hsl(var(--muted-foreground))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  >
                    {getCategoryCount(cat)}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Project grid: cutting mat slots ── */}
        {/* Visible gutter lines between card slots */}
        <div className="relative">
          {/* Horizontal slot rule above grid */}
          <div style={{
            height: "1px",
            background: "hsl(var(--border))",
            boxShadow: "0 1px 0 0 var(--bevel-light)",
            marginBottom: "20px",
            opacity: 0.5,
          }} />

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Horizontal slot rule below grid */}
          <div style={{
            height: "1px",
            background: "hsl(var(--border))",
            boxShadow: "0 -1px 0 0 var(--inset-dark)",
            marginTop: "20px",
            opacity: 0.4,
          }} />
        </div>

        {/* Load More / Show Less */}
        {filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setVisibleCount(visibleCount >= filtered.length ? 6 : filtered.length)}
              className="btn-ghost px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:bg-secondary"
              style={{
                border: "1px solid hsl(var(--border))",
                boxShadow: "inset 1px 1px 0 0 var(--bevel-light), inset -1px -1px 0 0 var(--bevel-dark), 1px 2px 4px -1px hsla(var(--shadow-color), 0.25)",
              }}
            >
              {visibleCount >= filtered.length ? "Show Less" : "Load More"}
            </button>
          </motion.div>
        )}

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/KUSHAGRA-AGRAWAL-0717"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors link-underline"
          >
            View all projects on GitHub
            <ChevronRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}