import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Coding1Video from "./Coding (1).mp4";
import TiltCard from "./ui/TiltCard";

/**
 * PROJECTS SECTION — Featured Hero + Grid
 *
 * Top: Section header with filter tabs (Linear-style, text-only)
 * Below: 2-column project grid
 */
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
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
      <div className="grid-header-bar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            Real-world applications built with modern technologies, solving genuine problems.
          </p>
        </div>
        
        {/* High-quality Header Video Banner */}
        <TiltCard intensity={10} className="hidden sm:block w-48 h-24 rounded-xl flex-shrink-0 relative">
          <div className="w-full h-full rounded-xl overflow-hidden border-2 border-border/50 shadow-md bg-white">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300">
              <source src={Coding1Video} type="video/mp4" />
            </video>
            {/* Subtle gloss overlay to make it look premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>
        </TiltCard>

        
        {/* Filter tabs — clean, Linear-style */}
        <div className="flex flex-wrap gap-1 mt-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1.5"
                style={isActive ? {
                  background: "hsl(var(--surface-0))",
                  color: "hsl(32, 80%, 55%)",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "inset 0 1px 2px -1px hsla(var(--shadow-color), 0.3)",
                } : {
                  color: "hsl(var(--muted-foreground))",
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              >
                {cat}
                <span
                  className="text-[10px] font-mono"
                  style={{ opacity: 0.6 }}
                >
                  {getCategoryCount(cat)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project grid: 3 columns for denser layout */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </div>

      {/* Load More / GitHub row */}
      <div className="grid-cell flex flex-col sm:flex-row items-center justify-center gap-6 py-6">
        {filtered.length > 4 && (
          <button
            onClick={() => setVisibleCount(visibleCount >= filtered.length ? 4 : filtered.length)}
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