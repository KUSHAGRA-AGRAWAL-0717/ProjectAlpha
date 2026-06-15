import { useState, forwardRef, type ForwardedRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Play, X } from "lucide-react";
import type { Project } from "@/data/projects";

const DEFAULT_GITHUB = "https://github.com/KUSHAGRA-AGRAWAL-0717";

const CATEGORY_STYLES: Record<string, string> = {
  SaaS: "badge-saas",
  AI: "badge-ai",
  "Web App": "badge-webapp",
};

/**
 * PROJECT CARD — Grid Cell with Internal Dividers
 *
 * ┌──────────────────────┐
 * │ Image/Video viewport │
 * ├──────────────────────┤
 * │ Title + Description  │
 * ├──────────────────────┤
 * │ Tech Stack Chips     │
 * ├──────────────────────┤
 * │ Impact Readout       │
 * ├──────────────────────┤
 * │ Action Buttons       │
 * └──────────────────────┘
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
      initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: index % 2 === 0 ? 10 : -10 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        bounce: 0.35,
      }}
      className="grid-cell p-0 flex flex-col group"
    >
      {/* ── Image / Video viewport ── */}
      <div
        className="relative aspect-video overflow-hidden flex-shrink-0"
        style={{
          boxShadow: "inset 2px 2px 6px -1px var(--inset-dark), inset -1px -1px 3px 0 var(--inset-light)",
          background: "hsl(var(--surface-0))",
        }}
      >
        {/* Corner registration marks */}
        {[
          { top: "6px", left: "6px", borderTop: "1.5px solid", borderLeft: "1.5px solid" },
          { top: "6px", right: "6px", borderTop: "1.5px solid", borderRight: "1.5px solid" },
          { bottom: "6px", left: "6px", borderBottom: "1.5px solid", borderLeft: "1.5px solid" },
          { bottom: "6px", right: "6px", borderBottom: "1.5px solid", borderRight: "1.5px solid" },
        ].map((style, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 pointer-events-none z-10"
            style={{
              ...style,
              borderColor: "hsla(32, 80%, 55%, 0.25)",
              borderRadius: "1px",
            }}
          />
        ))}

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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
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
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 border border-amber-500/35 text-amber-400">
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
                    boxShadow: "inset 1px 1px 2px -1px var(--inset-dark)",
                  }}
                >
                  {project.year}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Card body with internal dividers ── */}
      <div className="flex flex-col flex-1">
        {/* Title + Description */}
        <div className="p-4 pb-3">
          <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="grid-divider-h" />

        {/* Tech stack */}
        <div className="p-4 py-3 flex flex-wrap gap-1.5 flex-1">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md"
              style={{
                background: "hsl(var(--surface-0))",
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--muted-foreground))",
                boxShadow: "inset 1px 1px 2px -1px var(--inset-dark), inset -0.5px -0.5px 1px 0 var(--inset-light)",
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
                boxShadow: "inset 1px 1px 2px -1px var(--inset-dark), inset -0.5px -0.5px 1px 0 var(--inset-light)",
              }}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="grid-divider-h" />

        {/* Impact */}
        <div
          className="text-xs font-medium leading-snug py-2.5 px-4 mx-4 my-3"
          style={{
            color: "hsl(32, 75%, 58%)",
            background: "hsl(var(--surface-0))",
            borderLeft: "2px solid hsl(32, 80%, 55%)",
            borderRadius: "0 4px 4px 0",
            boxShadow: "inset 1px 1px 3px -1px var(--inset-dark)",
          }}
        >
          {project.impact}
        </div>

        <div className="grid-divider-h" />

        {/* Action buttons */}
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
    </motion.div>
  );
}

export default forwardRef(ProjectCardInner);