import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Play, Calendar, Tag } from "lucide-react";
import type { Project } from "@/data/projects";

const CATEGORY_STYLES: Record<string, string> = {
  SaaS: "badge-saas",
  AI: "badge-ai",
  "Web App": "badge-webapp",
  Backend: "badge-backend",
};

const DEFAULT_GITHUB = "https://github.com/KUSHAGRA-AGRAWAL-0717";

/**
 * PROJECT DETAIL MODAL — Full-screen overlay with complete project info
 *
 * Triggered by clicking a project card.
 * Shows: Image, Problem, Solution, Impact, Metrics, Full Description, Tech Stack, Links
 * Closes via: X button, backdrop click, ESC key
 */
export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  const githubLink = project.github || DEFAULT_GITHUB;
  const badgeClass = CATEGORY_STYLES[project.category] || "badge-saas";

  // Close on ESC
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100]"
            style={{
              background: "hsla(220, 14%, 4%, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={onClose}
          />

          {/* Modal container — centered, scrollable */}
          <div
            className="fixed inset-0 z-[101] flex items-start justify-center overflow-y-auto py-8 sm:py-12 px-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Card */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  boxShadow:
                    "0 24px 80px -12px hsla(220, 20%, 4%, 0.7), 0 0 1px 0 hsla(220, 10%, 50%, 0.15), inset 0 1px 0 0 hsla(var(--highlight), 0.04)",
                }}
              >
                {/* ── Close button ── */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "hsla(var(--card), 0.8)",
                    border: "1px solid hsl(var(--border))",
                    backdropFilter: "blur(8px)",
                  }}
                  aria-label="Close"
                >
                  <X size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
                </button>

                {/* ── Hero image ── */}
                <div
                  className="relative w-full aspect-[16/9] overflow-hidden"
                  style={{ background: "hsl(var(--surface-0))" }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-1 to-background">
                      <span className="text-7xl font-extrabold text-foreground/10 tracking-tighter">
                        {project.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  {/* Gradient fade at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                    style={{ background: "linear-gradient(to top, hsl(var(--card)), transparent)" }}
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider border ${badgeClass}`}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500/15 border border-amber-500/35 text-amber-400"
                        style={{ boxShadow: "0 0 10px -4px hsla(32, 80%, 50%, 0.3)" }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* ── Content body ── */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-6 relative z-10">
                  {/* Title + meta */}
                  <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Calendar size={12} className="text-accent/60" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Tag size={12} className="text-accent/60" />
                      {project.tag}
                    </span>
                  </div>

                  {/* ── Problem / Solution / Impact ── */}
                  {project.problem && (
                    <div className="mb-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest block mb-1.5"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        Problem
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="mb-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest block mb-1.5"
                        style={{ color: "hsl(32, 80%, 55%)" }}
                      >
                        Solution
                      </span>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}

                  {/* Full description — always show */}
                  <div className="mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest block mb-1.5"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      Overview
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="mb-5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest block mb-1.5"
                      style={{ color: "hsl(150, 50%, 50%)" }}
                    >
                      Impact
                    </span>
                    <p className="text-sm font-medium text-foreground/85 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>

                  {/* ── Metrics ── */}
                  {project.metrics && project.metrics.length > 0 && (
                    <>
                      <div
                        className="h-px w-full mb-5"
                        style={{ background: "hsl(var(--border))" }}
                      />
                      <div className="flex flex-wrap gap-3 mb-5">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="flex flex-col items-center px-4 py-3 rounded-xl min-w-[80px]"
                            style={{
                              background:
                                "linear-gradient(135deg, hsla(32, 80%, 55%, 0.08), hsla(32, 80%, 55%, 0.02))",
                              border: "1px solid hsla(32, 80%, 55%, 0.18)",
                            }}
                          >
                            <span
                              className="text-lg font-extrabold"
                              style={{ color: "hsl(32, 80%, 55%)" }}
                            >
                              {m.value}
                            </span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5 font-medium">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* ── Tech stack ── */}
                  <div
                    className="h-px w-full mb-5"
                    style={{ background: "hsl(var(--border))" }}
                  />
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2.5">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg"
                          style={{
                            background: "hsl(var(--surface-0))",
                            border: "1px solid hsl(var(--border))",
                            color: "hsl(var(--foreground))",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Action buttons ── */}
                  <div
                    className="h-px w-full mb-5"
                    style={{ background: "hsl(var(--border))" }}
                  />
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="skeuo-btn skeuo-btn-secondary px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
                    >
                      <Github size={15} />
                      View Code
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skeuo-btn skeuo-btn-primary btn-shimmer px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skeuo-btn skeuo-btn-secondary px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
                      >
                        <Play size={15} fill="currentColor" />
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
