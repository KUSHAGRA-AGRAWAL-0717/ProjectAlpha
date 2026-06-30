import { motion } from "framer-motion";
import Coding2Video from "./Coding (2).mp4";
import TiltCard from "./ui/TiltCard";

const SKILL_GROUPS = [
  { title: "Languages", icon: "{ }", color: "32, 80%, 55%", skills: ["Python", "TypeScript", "JavaScript", "C++"] },
  { title: "Frontend", icon: "◧", color: "200, 60%, 55%", skills: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { title: "Backend & Events", icon: "⬡", color: "160, 50%, 50%", skills: ["Node.js", "FastAPI", "Express.js", "Apache Kafka", "RabbitMQ", "Apache Pulsar", "NATS"] },
  { title: "AI, ML & Agents", icon: "⚡", color: "280, 50%, 60%", skills: ["LangChain", "AutoGPT", "OpenAI API", "LLMs"] },
  { title: "Cloud & DevOps", icon: "☁", color: "220, 55%, 58%", skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "Pulumi", "Spacelift"] },
  { title: "CI/CD & Observability", icon: "◫", color: "350, 60%, 55%", skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Argo Workflows", "Tekton", "Prometheus", "Grafana", "Datadog"] },
  { title: "Automation & Workflows", icon: "↻", color: "150, 50%, 50%", skills: ["n8n", "Zapier", "Make (Integromat)", "Trigger.dev", "Inngest"] },
  { title: "Testing Automation", icon: "✓", color: "45, 70%, 50%", skills: ["Playwright", "Selenium", "Cypress"] },
];

/**
 * SKILLS SECTION — Enhanced 4-Column Grid
 *
 * Color-coded icon backgrounds, skill count badges, animated hover states.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <span className="section-eyebrow">Tech Stack</span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight section-title-underline">
            Technical <span className="gradient-text-animated">Skills</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm mt-3">
            Proficient in modern technologies for building scalable, production-ready applications.
          </p>
        </div>
        
        {/* High-quality Header Video Banner */}
        <TiltCard intensity={10} className="hidden sm:block w-48 h-24 rounded-xl flex-shrink-0 relative">
          <div className="w-full h-full rounded-xl overflow-hidden border-2 border-border/50 shadow-md bg-white">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300">
              <source src={Coding2Video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>
        </TiltCard>

      </div>

      {/* 4-column skill grid with enhanced cards */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: gi * 0.06, duration: 0.4 }}
            className="grid-cell-enhanced group"
          >
            {/* Card header with colored icon background */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex-shrink-0 text-base font-bold select-none flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, hsla(${group.color}, 0.15), hsla(${group.color}, 0.05))`,
                  border: `1px solid hsla(${group.color}, 0.25)`,
                  boxShadow: `0 0 10px -4px hsla(${group.color}, 0.2)`,
                }}
              >
                {group.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-sm tracking-wide group-hover:text-accent transition-colors duration-200">
                  {group.title}
                </h3>
              </div>
              {/* Skill count badge */}
              <span
                className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: `hsla(${group.color}, 0.08)`,
                  color: `hsl(${group.color})`,
                  border: `1px solid hsla(${group.color}, 0.15)`,
                }}
              >
                {group.skills.length}
              </span>
            </div>

            <div className="grid-divider-h mb-4" />

            {/* Skill chips with floating hover */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip cursor-default tag-float">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
