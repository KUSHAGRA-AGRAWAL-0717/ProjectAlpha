import { useState, forwardRef, type ForwardedRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Play, X } from "lucide-react";
import type { Project } from "@/data/projects";

const DEFAULT_GITHUB = "https://github.com/KUSHAGRA-AGRAWAL-0717";

const CATEGORY_STYLES: Record<string, string> = {
  SaaS: "badge-saas",
  AI: "badge-ai",
  "Web App": "badge-webapp",
  Backend: "badge-backend",
};

/**
 * PROJECT CARD — Enhanced, Content-Focused
 *
 * Image → Title + Description + Impact → Tech Tags → Links
 * Gradient hover overlay, enhanced grid cell, floating tech tags.
 */
function ProjectCardInner(
  { project, index }: { project: Project; index: number },
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [showVideo, setShowVideo] = useState(false);
  const githubLink = project.github || DEFAULT_GITHUB;
  const badgeClass = CATEGORY_STYLES[project.category] || "badge-saas";

  return (
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
          className="relative aspect-video overflow-hidden flex-shrink-0"
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
                      onClick={() => setShowVideo(true)}
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

        {/* ── Card body ── */}
        <div className="flex flex-col flex-1">
          {/* Title + Description + Impact (merged) */}
          <div className="p-4 pb-3">
            <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1.5">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-2">
              {project.description}
            </p>
            <p className="text-xs font-medium text-accent/80">
              {project.impact}
            </p>
          </div>

          <div className="grid-divider-h" />

          {/* Tech stack with floating hover */}
          <div className="p-4 py-3 flex flex-wrap gap-1.5 flex-1">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md tag-float"
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
                className="px-2.5 py-1 text-[11px] font-medium rounded-md"
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

          <div className="grid-divider-h" />

          {/* Action links */}
          <div className="flex gap-0">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
              style={{ borderRight: "1px solid var(--grid-border-color)" }}
            >
              <Github size={13} />
              Code
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 text-accent hover:text-foreground transition-colors"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            {!project.link && project.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 text-accent hover:text-foreground transition-colors"
              >
                <Play size={13} fill="currentColor" />
                Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default forwardRef(ProjectCardInner);