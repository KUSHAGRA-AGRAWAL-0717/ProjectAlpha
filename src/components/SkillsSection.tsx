import { motion } from "framer-motion";
import Coding2Video from "./Coding (2).mp4";

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

/**
 * SKILLS SECTION — Clean 4-Column Grid
 *
 * No marquee. No blur entrance. Simple, scannable layout.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            Proficient in modern technologies for building scalable, production-ready applications.
          </p>
        </div>
        
        {/* High-quality Header Video Banner */}
        <div className="hidden md:block w-48 h-24 rounded-xl overflow-hidden border-2 border-border/50 shadow-md bg-white flex-shrink-0 relative">
           <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300">
             <source src={Coding2Video} type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* 4-column skill grid */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: gi * 0.06, duration: 0.4 }}
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
    </section>
  );
}
