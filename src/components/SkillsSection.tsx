import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";
import SectionDivider from "./SectionDivider";

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: "{ }",
    skills: ["Python", "TypeScript", "JavaScript", "C++"],
  },
  {
    title: "Frontend",
    icon: "◧",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & Events",
    icon: "⬡",
    skills: ["Node.js", "FastAPI", "Express.js", "Apache Kafka", "RabbitMQ", "Apache Pulsar", "NATS"],
  },
  {
    title: "AI, ML & Agents",
    icon: "⚡",
    skills: ["LangChain", "AutoGPT", "OpenAI API", "LLMs"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "Pulumi", "Spacelift"],
  },
  {
    title: "CI/CD & Observability",
    icon: "◫",
    skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Argo Workflows", "Tekton", "Prometheus", "Grafana", "Datadog"],
  },
  {
    title: "Automation & Workflows",
    icon: "↻",
    skills: ["n8n", "Zapier", "Make (Integromat)", "Trigger.dev", "Inngest"],
  },
  {
    title: "Testing Automation",
    icon: "✓",
    skills: ["Playwright", "Selenium", "Cypress"],
  }
];

const ALL_TAGS = [
  "Python", "TypeScript", "React", "Next.js", "Node.js", "FastAPI",
  "Apache Kafka", "RabbitMQ", "Docker", "Kubernetes", "Terraform", "AWS",
  "LangChain", "AutoGPT", "OpenAI API", "GitHub Actions", "GitLab CI/CD",
  "Prometheus", "Grafana", "Datadog", "n8n", "Zapier", "Make (Integromat)",
  "Trigger.dev", "Inngest", "Playwright", "Selenium", "Cypress"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 px-4 sm:px-6 scroll-mt-20">
      {/* Gauge arc concentric circles — instrument panel */}
      <div className="absolute inset-0 gauge-arcs pointer-events-none" />
      {/* Precision groove divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl">
        <SectionDivider variant="ridge" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-badge mb-4 inline-flex">
            <Code size={13} />
            Expertise
          </span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-3 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-sm">
            Proficient in modern technologies for building scalable, production-ready applications.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card-hover skeuo-cast-shadow rounded-xl p-5 group"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg icon-btn flex-shrink-0 text-base font-bold select-none">
                  {group.icon}
                </div>
                <h3 className="font-bold text-foreground text-sm tracking-wide">
                  {group.title}
                </h3>
              </div>

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

        {/* All technology tags cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 flex items-center justify-center gap-2">
            <Sparkles size={13} className="text-accent" />
            Full Technology Stack
          </p>
          <div className="overflow-hidden max-w-3xl mx-auto">
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
        </motion.div>
      </div>
    </section>
  );
}
