import { useState, forwardRef, type ForwardedRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Play, X } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectDetailModal from "./ProjectDetailModal";

const DEFAULT_GITHUB = "https://github.com/KUSHAGRA-AGRAWAL-0717";

const CATEGORY_STYLES: Record<string, string> = {
  SaaS: "badge-saas",
  AI: "badge-ai",
  "Web App": "badge-webapp",
  Backend: "badge-backend",
};

/**
 * PROJECT CARD — Enhanced with Problem → Solution → Impact + Detail Modal
 *
 * Image → Problem + Solution + Metrics → Tech Tags → Links
 * Clicking the card body opens a full-screen detail modal.
 */
function ProjectCardInner(
  { project, index }: { project: Project; index: number },
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [showVideo, setShowVideo] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const githubLink = project.github || DEFAULT_GITHUB;
  const badgeClass = CATEGORY_STYLES[project.category] || "badge-saas";
  const hasProblemSolution = project.problem && project.solution;

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        className="grid-cell-enhanced p-0 flex flex-col group"
      >
        <div className="flex flex-col h-full w-full">
          {/* ── Image / Video viewport ── */}
          <div
            className="relative aspect-[2/1] overflow-hidden flex-shrink-0"
            style={{
              background: "hsl(var(--surface-0))",
            }}
          >
            <AnimatePresence mode="wait">
              {showVideo && project.video ? (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full"
                >
                  <iframe
                    src={project.video}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-destructive/80 transition-colors z-10"
                    aria-label="Close video"
                  >
                    <X size={15} />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-1 to-background border-b border-border/50">
                      <span className="text-6xl font-extrabold text-foreground/20 tracking-tighter mix-blend-overlay">
                        {project.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* Enhanced gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    {project.video && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setShowVideo(true); }}
                        className="skeuo-btn skeuo-btn-primary px-4 py-2 text-xs gap-1.5 flex items-center"
                      >
                        <Play size={13} fill="currentColor" />
                        Watch Demo
                      </button>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="skeuo-btn skeuo-btn-secondary px-4 py-2 text-xs gap-1.5 flex items-center"
                      >
                        <ExternalLink size={13} />
                        Live Site
                      </a>
                    )}
                  </div>

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border ${badgeClass}`}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 border border-amber-500/35 text-amber-400"
                        style={{ boxShadow: "0 0 10px -4px hsla(32, 80%, 50%, 0.3)" }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-muted-foreground"
                      style={{
                        background: "hsl(var(--surface-0))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Card body — clickable to open modal ── */}
          <div
            className="flex flex-col flex-1 cursor-pointer"
            onClick={() => setShowDetail(true)}
          >
            {/* Title + Problem/Solution or Description + Impact */}
            <div className="p-3.5 pb-2.5 flex flex-col flex-1">
              <h3 className="text-[15px] font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1">
                {project.title}
              </h3>

              {hasProblemSolution ? (
                <>
                  {/* Problem */}
                  <div className="mb-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">Problem</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">
                      {project.problem}
                    </p>
                  </div>
                  {/* Solution */}
                  <div className="mb-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent/60">Solution</span>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">
                      {project.solution}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-3 mb-1.5">
                  {project.description}
                </p>
              )}

              {/* Impact line (always shown when no metrics) */}
              {!project.metrics && (
                <p className="text-xs font-medium text-accent/80">
                  {project.impact}
                </p>
              )}

              {/* Read more hint */}
              <span className="inline-block mt-auto pt-2.5 text-[10px] font-medium text-accent/70 group-hover:text-accent transition-colors">
                Read more →
              </span>
            </div>

            {/* ── Metrics row ── */}
            {project.metrics && project.metrics.length > 0 && (
              <>
                <div className="grid-divider-h" />
                <div className="px-3.5 py-2 flex flex-wrap gap-1.5">
                  {project.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium"
                      style={{
                        background: "linear-gradient(135deg, hsla(32, 80%, 55%, 0.1), hsla(32, 80%, 55%, 0.03))",
                        border: "1px solid hsla(32, 80%, 55%, 0.2)",
                      }}
                    >
                      <span className="font-bold" style={{ color: "hsl(32, 80%, 55%)" }}>
                        {m.value}
                      </span>
                      <span className="text-muted-foreground">{m.label}</span>
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="grid-divider-h" />

            {/* Tech stack with floating hover */}
            <div className="p-3.5 py-2.5 flex flex-wrap content-start items-start gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-md tag-float"
                  style={{
                    background: "hsl(var(--surface-0))",
                    border: "1px solid hsl(var(--border))",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span
                  className="px-2 py-0.5 text-[10px] font-medium rounded-md"
                  style={{
                    background: "hsl(var(--surface-0))",
                    border: "1px solid hsl(var(--border))",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="grid-divider-h" />

          {/* Action links — NOT inside the clickable area */}
          <div className="flex gap-0">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 text-[11px] font-semibold flex items-center justify-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
              style={{ borderRight: "1px solid var(--grid-border-color)" }}
            >
              <Github size={12} />
              Code
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-[11px] font-semibold flex items-center justify-center gap-1.5 text-accent hover:text-foreground transition-colors"
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
            )}
            {!project.link && project.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="flex-1 py-2.5 text-[11px] font-semibold flex items-center justify-center gap-1.5 text-accent hover:text-foreground transition-colors"
              >
                <Play size={12} fill="currentColor" />
                Demo
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={project}
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
      />
    </>
  );
}

export default forwardRef(ProjectCardInner);