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
 * PROJECT CARD — SKEUOMORPHIC INSTRUMENT PANEL CARD
 *
 * Physical Inspiration: A steel display panel inset into a cutting mat slot.
 * - Each card is a pop-up panel with beveled edges and real-depth shadow
 * - Image area: recessed viewport (inset shadow, slight inward curve)
 * - Card body: premium matte panel surface with embossed tech chips
 * - Action buttons: physical hardware push buttons
 * - Impact line: an engraved data readout (left-edge amber groove)
 * - Hover: card lifts (translateY -4px) and shadow deepens
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.005 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="h-full flex flex-col rounded-xl overflow-hidden perspective-tilt"
        style={{
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          boxShadow: `
            inset 1px 1px 0 0 var(--bevel-light),
            inset -1px -1px 0 0 var(--bevel-dark),
            2px 3px 8px -2px hsla(var(--shadow-color), 0.35),
            4px 6px 20px -4px hsla(var(--shadow-color), 0.2)
          `,
          transition: "box-shadow 0.2s ease",
        }}
      >
        {/* ── Image / Video: recessed viewport ── */}
        <div
          className="relative aspect-video overflow-hidden flex-shrink-0"
          style={{
            boxShadow: "inset 2px 2px 6px -1px var(--inset-dark), inset -1px -1px 3px 0 var(--inset-light)",
            background: "hsl(var(--surface-0))",
          }}
        >
          {/* Corner registration marks (like a precision viewport) */}
          {[
            { top: "6px", left: "6px", borderTop: "1.5px solid", borderLeft: "1.5px solid" },
            { top: "6px", right: "6px", borderTop: "1.5px solid", borderRight: "1.5px solid" },
            { bottom: "6px", left: "6px", borderBottom: "1.5px solid", borderLeft: "1.5px solid" },
            { bottom: "6px", right: "6px", borderBottom: "1.5px solid", borderRight: "1.5px solid" },
          ].map((style, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 pointer-events-none z-10"
              style={{
                ...style,
                borderColor: "hsla(32, 80%, 55%, 0.3)",
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

        {/* ── Card body: matte instrument panel ── */}
        <div className="p-5 flex flex-col flex-1 gap-3">
          {/* Engraved separator at top of body */}
          <div style={{
            height: "1px",
            background: "hsl(var(--border))",
            boxShadow: "0 1px 0 0 var(--bevel-light)",
            margin: "-5px -5px 0 -5px",
            marginBottom: "12px",
          }} />

          <div>
            <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech stack: embossed chip strip */}
          <div className="flex flex-wrap gap-1.5 flex-1">
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

          {/* Impact: engraved data readout with amber left groove */}
          <div
            className="text-xs font-medium leading-snug py-2 px-3"
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

          {/* Action buttons: physical push buttons */}
          <div className="flex gap-2 pt-1">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn skeuo-btn-secondary flex-1 rounded-lg py-2.5 text-xs gap-1.5 flex items-center justify-center"
            >
              <Github size={13} />
              Code
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skeuo-btn skeuo-btn-primary flex-1 rounded-lg py-2.5 text-xs gap-1.5 flex items-center justify-center"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            {!project.link && project.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="skeuo-btn skeuo-btn-primary flex-1 rounded-lg py-2.5 text-xs gap-1.5 flex items-center justify-center"
              >
                <Play size={13} fill="currentColor" />
                Demo
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default forwardRef(ProjectCardInner);