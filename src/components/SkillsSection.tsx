import { motion } from "framer-motion";
import Coding2Video from "./Coding (2).mp4";
import TiltCard from "./ui/TiltCard";

const SKILL_GROUPS = [
  { title: "Languages", icon: "{ }", color: "32, 80%, 55%", skills: ["Java", "Python", "C++", "JavaScript", "TypeScript"] },
  { title: "Backend & Events", icon: "⬡", color: "160, 50%, 50%", skills: ["Spring Boot", "FastAPI", "Node.js", "Express", "RabbitMQ", "Apache Kafka"] },
  { title: "Frontend", icon: "◧", color: "200, 60%, 55%", skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Cloud & DevOps", icon: "☁", color: "220, 55%, 58%", skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions"] },
  { title: "Databases", icon: "◫", color: "350, 60%, 55%", skills: ["MongoDB", "MySQL", "Redis", "Supabase"] },
  { title: "AI & ML", icon: "⚡", color: "280, 50%, 60%", skills: ["LangChain", "OpenAI API", "TensorFlow"] },
];

/**
 * SKILLS SECTION — Curated & Interview-Ready
 *
 * 6 categories with color-coded icon backgrounds, skill count badges, animated hover states.
 * Only technologies that can be confidently defended in an interview.
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

      {/* 3-column skill grid with enhanced cards */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: gi * 0.06, duration: 0.4 }}
            className="grid-cell-enhanced group p-4 sm:p-5"
          >
            {/* Card header with colored icon background */}
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0 text-sm font-bold select-none flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, hsla(${group.color}, 0.15), hsla(${group.color}, 0.05))`,
                  border: `1px solid hsla(${group.color}, 0.25)`,
                  boxShadow: `0 0 10px -4px hsla(${group.color}, 0.2)`,
                }}
              >
                {group.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-[13px] tracking-wide group-hover:text-accent transition-colors duration-200">
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

            <div className="grid-divider-h mb-3" />

            {/* Skill chips with floating hover */}
            <div className="flex flex-wrap gap-1.5">
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
