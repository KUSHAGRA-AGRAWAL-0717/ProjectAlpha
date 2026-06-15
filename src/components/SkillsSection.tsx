import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";

const SKILL_GROUPS = [
  { title: "Languages", icon: "{ }", skills: ["Python", "TypeScript", "JavaScript", "C++"] },
  { title: "Frontend", icon: "◧", skills: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { title: "Backend & Events", icon: "⬡", skills: ["Node.js", "FastAPI", "Express.js", "Apache Kafka", "RabbitMQ", "Apache Pulsar", "NATS"] },
  { title: "AI, ML & Agents", icon: "⚡", skills: ["LangChain", "AutoGPT", "OpenAI API", "LLMs"] },
  { title: "Cloud & DevOps", icon: "☁", skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "Pulumi", "Spacelift"] },
  { title: "CI/CD & Observability", icon: "◫", skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Argo Workflows", "Tekton", "Prometheus", "Grafana", "Datadog"] },
  { title: "Automation & Workflows", icon: "↻", skills: ["n8n", "Zapier", "Make (Integromat)", "Trigger.dev", "Inngest"] },
  { title: "Testing Automation", icon: "✓", skills: ["Playwright", "Selenium", "Cypress"] },
];

const ALL_TAGS = [
  "Python", "TypeScript", "React", "Next.js", "Node.js", "FastAPI",
  "Apache Kafka", "RabbitMQ", "Docker", "Kubernetes", "Terraform", "AWS",
  "LangChain", "AutoGPT", "OpenAI API", "GitHub Actions", "GitLab CI/CD",
  "Prometheus", "Grafana", "Datadog", "n8n", "Zapier", "Make (Integromat)",
  "Trigger.dev", "Inngest", "Playwright", "Selenium", "Cypress"
];

/**
 * SKILLS SECTION — 4-Column Multi Grid
 *
 * ┌──────────────────────────────────────────────┐
 * │ [004 — SKILLS]  Technical Skills             │
 * ├───────────┬───────────┬───────────┬──────────┤
 * │ Languages │ Frontend  │ Backend   │ AI/ML    │
 * ├───────────┼───────────┼───────────┼──────────┤
 * │ Cloud     │ CI/CD     │ Automation│ Testing  │
 * ├───────────┴───────────┴───────────┴──────────┤
 * │ [Full Technology Stack — Marquee Strip]       │
 * └──────────────────────────────────────────────┘
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
        <span className="grid-section-label">004 — Skills</span>
        <div>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            Proficient in modern technologies for building scalable, production-ready applications.
          </p>
        </div>
      </div>

      {/* 4-column skill grid (2 on mobile, 4 on desktop) */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: gi * 0.08, duration: 0.5, type: "spring", bounce: 0.4 }}
            className="grid-cell group"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg icon-btn flex-shrink-0 text-base font-bold select-none">
                {group.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm tracking-wide group-hover:text-accent transition-colors duration-200">
                {group.title}
              </h3>
            </div>

            <div className="grid-divider-h mb-4" />

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-width technology marquee strip */}
      <div className="grid-cell py-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
          <Sparkles size={13} className="text-accent" />
          Full Technology Stack
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-2 skill-marquee w-max">
            {[...ALL_TAGS, ...ALL_TAGS].map((tag, i) => (
              <motion.span
                key={`${tag}-${i}`}
                whileHover={{ y: -2 }}
                className="skill-chip cursor-default text-xs flex-shrink-0"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
