import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    emoji: "🏢",
    value: "SDE Intern",
    label: "Amazon",
    color: "32, 80%, 55%",
  },
  {
    emoji: "💼",
    value: "3",
    label: "Professional Internships",
    color: "200, 60%, 55%",
  },
  {
    emoji: "💻",
    value: "850+",
    label: "Problems Solved",
    color: "160, 50%, 50%",
  },
  {
    emoji: "🏆",
    value: "Top 1.5%",
    label: "National Hackathon Finalist",
    color: "280, 50%, 60%",
  },
];

/**
 * HIGHLIGHTS SECTION — Compact Credibility Strip
 *
 * 4 premium cards establishing engineering credibility within 5 seconds.
 * No section header — just impactful metrics.
 */
export default function HighlightsSection() {
  return (
    <section className="scroll-mt-20">
      <div className="grid-section-inner grid-cols-2 sm:grid-cols-4">
        {HIGHLIGHTS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="grid-cell-enhanced group cursor-default text-center py-6"
          >
            <span className="text-2xl mb-2 block">{item.emoji}</span>
            <span
              className="text-lg sm:text-xl font-extrabold block mb-1 stat-value-glow"
              style={{ color: `hsl(${item.color})` }}
            >
              {item.value}
            </span>
            <span
              className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase group-hover:text-foreground transition-colors duration-200"
              style={{ color: "hsl(var(--muted-foreground))", letterSpacing: "0.06em" }}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
