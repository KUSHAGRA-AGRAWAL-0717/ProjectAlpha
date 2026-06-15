import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import ProjectCard from "./ProjectCard";

/**
 * PROJECTS SECTION — 2×2 Bento Grid
 *
 * ┌──────────────────────────────────────────────┐
 * │ [003 — PROJECTS]  Featured Projects          │
 * │ [Filter Tabs]                                │
 * ├──────────────────────┬───────────────────────┤
 * │ Project              │ Project               │
 * ├──────────────────────┼───────────────────────┤
 * │ Project              │ Project               │
 * ├──────────────────────┴───────────────────────┤
 * │ [Load More]                                  │
 * └──────────────────────────────────────────────┘
 */
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

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
    <section id="projects" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
        <span className="grid-section-label">003 — Projects</span>
        <div>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            Real-world applications built with modern technologies, solving genuine problems.
          </p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        >
          <div
            className="flex flex-wrap gap-2 p-1.5 w-fit rounded-xl"
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
      </div>

      {/* Project grid: 2 columns */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </div>

      {/* Load More / GitHub row */}
      <div className="grid-cell flex flex-col sm:flex-row items-center justify-center gap-6 py-6">
        {filtered.length > 6 && (
          <button
            onClick={() => setVisibleCount(visibleCount >= filtered.length ? 6 : filtered.length)}
            className="skeuo-btn skeuo-btn-secondary px-6 py-2.5 text-sm font-semibold"
          >
            {visibleCount >= filtered.length ? "Show Less" : "Load More"}
          </button>
        )}
        <a
          href="https://github.com/KUSHAGRA-AGRAWAL-0717"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors link-underline"
        >
          View all projects on GitHub
          <ChevronRight size={15} />
        </a>
      </div>
    </section>
  );
}