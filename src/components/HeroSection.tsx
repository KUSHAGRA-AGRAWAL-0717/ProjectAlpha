import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, Mail, ArrowRight, Twitter } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Twitter, href: "https://x.com/KushagraAg0717", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com", label: "Email" },
];

const ROLES = [
  "Software Engineer",
  "Backend Developer",
  "Full Stack Developer",
  "AI Application Developer",
];

const STATS = [
  { value: "10+", label: "Projects Shipped" },
  { value: "3", label: "Internships" },
  { value: "850+", label: "Problems Solved" },
  { value: "NIT", label: "Jalandhar" },
];

const BIO_POINTS = [
  "Building scalable backend systems and AI-powered applications.",
  "Experienced with distributed systems, automation, cloud technologies, and modern web development.",
  "Turning ideas into production-ready software.",
];

function useTypewriter(words: string[], typingSpeed = 80, pauseDuration = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, typingSpeed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, pauseDuration]);

  return display;
}

/* ── Animated Distributed System Architecture Visualization ── */
function SystemArchitectureViz() {
  const nodes = [
    { id: "client", label: "Client", x: 140, y: 18 },
    { id: "lb", label: "Load Balancer", x: 140, y: 68 },
    { id: "gateway", label: "API Gateway", x: 140, y: 118 },
    { id: "svcA", label: "Service A", x: 70, y: 178 },
    { id: "svcB", label: "Service B", x: 210, y: 178 },
    { id: "cache", label: "Redis Cache", x: 50, y: 238 },
    { id: "queue", label: "Message Queue", x: 230, y: 238 },
    { id: "db", label: "Database", x: 140, y: 298 },
  ];

  const edges: [string, string][] = [
    ["client", "lb"],
    ["lb", "gateway"],
    ["gateway", "svcA"],
    ["gateway", "svcB"],
    ["svcA", "cache"],
    ["svcB", "queue"],
    ["cache", "db"],
    ["queue", "db"],
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <svg viewBox="0 0 280 330" className="w-full h-full" style={{ maxWidth: 300, maxHeight: 330 }}>
        <defs>
          {/* Glow filter */}
          <filter id="nodeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Animated dot gradient */}
          <radialGradient id="dotGrad">
            <stop offset="0%" stopColor="hsl(32, 80%, 55%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(32, 80%, 55%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Edges */}
        {edges.map(([fromId, toId], i) => {
          const from = nodeMap[fromId];
          const to = nodeMap[toId];
          const pathId = `edge-${fromId}-${toId}`;
          return (
            <g key={pathId}>
              <line
                x1={from.x}
                y1={from.y + 14}
                x2={to.x}
                y2={to.y - 6}
                stroke="hsla(220, 10%, 35%, 0.5)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              {/* Animated data-flow dot */}
              <circle r="2.5" fill="hsl(32, 80%, 55%)" opacity="0.8">
                <animateMotion
                  dur={`${2.2 + i * 0.3}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                >
                  <mpath>
                    <line x1={from.x} y1={from.y + 14} x2={to.x} y2={to.y - 6} />
                  </mpath>
                </animateMotion>
                {/* Fallback: animate along the line using values */}
                <animate
                  attributeName="cx"
                  values={`${from.x};${to.x}`}
                  dur={`${2.2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${from.y + 14};${to.y - 6}`}
                  dur={`${2.2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Node background */}
            <rect
              x={node.x - 48}
              y={node.y - 10}
              width={96}
              height={22}
              rx={6}
              fill="hsla(220, 14%, 12%, 0.85)"
              stroke={node.id === "gateway" ? "hsla(32, 80%, 55%, 0.5)" : "hsla(220, 10%, 28%, 0.6)"}
              strokeWidth={node.id === "gateway" ? 1.5 : 0.8}
              filter={node.id === "gateway" ? "url(#nodeGlow)" : undefined}
            >
              {/* Subtle pulse on gateway */}
              {node.id === "gateway" && (
                <animate
                  attributeName="stroke-opacity"
                  values="0.5;0.9;0.5"
                  dur="3s"
                  repeatCount="indefinite"
                />
              )}
            </rect>
            {/* Node label */}
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fontSize="8"
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="500"
              fill={node.id === "gateway" ? "hsl(32, 80%, 60%)" : "hsl(220, 10%, 70%)"}
              style={{ userSelect: "none" }}
            >
              {node.label}
            </text>
            {/* Entrance animation opacity */}
            <animateTransform
              attributeName="transform"
              type="translate"
              from={`0 ${8}`}
              to="0 0"
              dur="0.5s"
              begin={`${i * 0.08}s`}
              fill="freeze"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * HERO SECTION — Clean Split Layout (Refined for Engineering)
 *
 * Left: Amazon title, name, role typewriter, bio bullets, CTAs, socials
 * Right: Animated distributed system architecture visualization
 */
export default function HeroSection() {
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className="scroll-mt-20">
      {/* Grid: 60/40 split */}
      <div className="grid-section-inner grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ minHeight: "85vh" }}>

        {/* ── LEFT PANEL: Content ── */}
        <div className="grid-cell flex flex-col justify-center py-10 sm:py-16 px-6 sm:px-10 relative">
          <div className="relative z-10 max-w-2xl">
            {/* Amazon role title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wide rounded-md"
                style={{
                  background: "linear-gradient(135deg, hsla(32, 80%, 55%, 0.1), hsla(32, 80%, 55%, 0.03))",
                  border: "1px solid hsla(32, 80%, 55%, 0.25)",
                  color: "hsl(32, 80%, 60%)",
                }}
              >
                <span
                  className="animate-pulse-slow"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30% 30%, #6ee7b7, #059669)",
                    boxShadow: "0 0 6px 1px hsla(153, 60%, 50%, 0.35)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                SDE Intern @ Amazon
              </span>
            </motion.div>

            {/* Name — reduced size, modern weight mixing */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-2 leading-[1.1]"
            >
              <span
                className="block text-lg sm:text-xl font-normal tracking-tight mb-1"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Hi, I'm
              </span>
              <span className="block text-[1.6rem] sm:text-[2rem] md:text-[2.2rem] font-extrabold tracking-tight gradient-text-animated">
                Kushagra Agrawal
              </span>
            </motion.h1>

            {/* Engineering subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-sm sm:text-base text-muted-foreground/80 mb-5 max-w-lg leading-relaxed"
            >
              Building scalable backend systems, AI-powered applications, and modern full-stack products.
            </motion.p>

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <div
                className="inline-flex items-center px-5 py-2"
                style={{
                  background: "hsl(var(--surface-0))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  boxShadow: "inset 0 1px 3px -1px hsla(var(--shadow-color), 0.3)",
                }}
              >
                <span
                  className="text-sm md:text-base font-medium font-mono tracking-wide"
                  style={{ color: "hsl(32, 70%, 60%)" }}
                >
                  {role}
                  <span className="animate-blink" style={{ color: "hsl(32, 80%, 55%)" }}>|</span>
                </span>
              </div>
            </motion.div>

            {/* Bio — bullet points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mb-8"
            >
              <ul className="bio-bullet-list max-w-lg">
                {BIO_POINTS.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="bio-bullet-item"
                  >
                    <span className="bio-bullet-marker" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <a href="#projects" className="skeuo-btn skeuo-btn-primary btn-shimmer px-7 py-3 text-sm font-semibold flex items-center gap-2">
                View Projects
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="skeuo-btn skeuo-btn-secondary px-7 py-3 text-sm font-semibold">
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex gap-2"
            >
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                  className="icon-btn w-10 h-10"
                >
                  <s.icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT PANEL: Distributed System Architecture ── */}
        <div className="grid-cell-flush hidden lg:flex items-center justify-center relative overflow-hidden"
          style={{ background: "hsl(var(--surface-0))" }}
        >
          <TiltCard className="w-full max-w-[340px] max-h-[380px] p-2 flex items-center justify-center">
            <div
              className="relative w-full rounded-2xl overflow-hidden ring-1 ring-border/50"
              style={{
                background: "linear-gradient(135deg, hsla(220, 14%, 10%, 0.95), hsla(220, 14%, 8%, 0.98))",
                boxShadow: "0 8px 32px -8px hsla(220, 20%, 4%, 0.5), inset 0 1px 0 0 hsla(220, 10%, 30%, 0.1)",
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b"
                style={{ borderColor: "hsla(220, 10%, 22%, 0.5)" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span
                  className="text-[10px] font-mono tracking-wider ml-2"
                  style={{ color: "hsl(220, 10%, 50%)" }}
                >
                  system-architecture
                </span>
              </div>
              <SystemArchitectureViz />
            </div>
          </TiltCard>
        </div>
      </div>

      {/* ── STATS: 4-column mini grid at bottom ── */}
      <div className="grid-stats-row grid-cols-2 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
            className="grid-stat-cell group cursor-default"
          >
            <span
              className="text-lg sm:text-xl font-bold stat-value-glow"
              style={{ color: "hsl(32, 80%, 55%)" }}
            >
              {stat.value}
            </span>
            <span
              className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-1 group-hover:text-foreground transition-colors duration-200"
              style={{ color: "hsl(var(--muted-foreground))", letterSpacing: "0.06em" }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}